import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="70"
            cy="70"
            r="42"
            stroke="#FFFFFF"
            strokeWidth="7"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="42" cy="97" r="15" fill="#A8C58F" />
          <circle cx="98" cy="42" r="9" fill="#9AB8DC" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
