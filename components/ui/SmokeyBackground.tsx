"use client";

import { useEffect, useRef } from "react";

const vertexSource = `
  attribute vec4 a_position;
  void main() {
    gl_Position = a_position;
  }
`;

const fragmentSource = `
precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
uniform vec3 u_color;

void mainImage(out vec4 fragColor, in vec2 fragCoord){
    vec2 centeredUV = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);
    float time = iTime * 0.42;
    vec2 mouse = iMouse / iResolution;
    vec2 rippleCenter = 2.0 * mouse - 1.0;
    vec2 distortion = centeredUV;
    for (float i = 1.0; i < 8.0; i++) {
        distortion.x += 0.45 / i * cos(i * 2.0 * distortion.y + time + rippleCenter.x * 3.1415);
        distortion.y += 0.45 / i * cos(i * 2.0 * distortion.x + time + rippleCenter.y * 3.1415);
    }
    float wave = abs(sin(distortion.x + distortion.y + time));
    float glow = smoothstep(0.92, 0.18, wave);
    fragColor = vec4(u_color * glow, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.replace("#", "");
  return [
    parseInt(normalized.substring(0, 2), 16) / 255,
    parseInt(normalized.substring(2, 4), 16) / 255,
    parseInt(normalized.substring(4, 6), 16) / 255,
  ];
}

export function SmokeyBackground({ color = "#1A1A1A" }: { color?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW,
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const iResolution = gl.getUniformLocation(program, "iResolution");
    const iTime = gl.getUniformLocation(program, "iTime");
    const iMouse = gl.getUniformLocation(program, "iMouse");
    const uColor = gl.getUniformLocation(program, "u_color");
    const [r, g, b] = hexToRgb(color);
    gl.uniform3f(uColor, r, g, b);

    const start = Date.now();
    let frame = 0;

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, width, height);
      gl.uniform2f(iResolution, width, height);
      gl.uniform1f(iTime, (Date.now() - start) / 1000);
      gl.uniform2f(
        iMouse,
        isHovering.current ? mousePosition.current.x : width / 2,
        isHovering.current ? height - mousePosition.current.y : height / 2,
      );
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      frame = requestAnimationFrame(render);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseEnter = () => (isHovering.current = true);
    const onMouseLeave = () => (isHovering.current = false);

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseenter", onMouseEnter);
    canvas.addEventListener("mouseleave", onMouseLeave);
    render();

    return () => {
      cancelAnimationFrame(frame);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseenter", onMouseEnter);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [color]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 backdrop-blur-sm bg-neutral-950/30" />
    </div>
  );
}
