import { ImageResponse } from "next/og";

export const alt = "Solentra House - Digital Growth, Mapped Clearly.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 96px",
          color: "#FFFFFF",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="32"
              cy="32"
              r="20"
              stroke="#FFFFFF"
              strokeWidth="3"
              fill="none"
            />
            <circle cx="20" cy="44" r="7" fill="#A8C58F" />
            <circle cx="44" cy="20" r="4" fill="#9AB8DC" />
          </svg>
          <div
            style={{
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: -0.5,
            }}
          >
            Solentra House
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 600,
              letterSpacing: -2,
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Digital Growth, Mapped Clearly.
          </div>
          <div
            style={{
              fontSize: 30,
              color: "rgba(255,255,255,0.6)",
              fontStyle: "italic",
              fontWeight: 300,
            }}
          >
            From Audit to Measurable Action.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            color: "rgba(255,255,255,0.55)",
            fontFamily: "monospace",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div>Digital Growth Agency · London</div>
          <div>solentrahouse.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
