import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Insider — AI Automation Education Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(60% 60% at 20% 10%, rgba(124,58,237,0.45) 0%, transparent 60%), radial-gradient(50% 50% at 90% 20%, rgba(249,115,22,0.35) 0%, transparent 60%), #07060f",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 800,
              color: "#fff",
              background: "linear-gradient(135deg, #a855f7, #f97316)",
            }}
          >
            AI
          </div>
          <div style={{ fontSize: "30px", fontWeight: 700, letterSpacing: "-0.5px" }}>
            AI Insider
          </div>
        </div>

        <div
          style={{
            fontSize: "76px",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            maxWidth: "960px",
          }}
        >
          Master the Future of{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #c084fc, #f97316)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            AI Automation
          </span>
        </div>

        <div
          style={{
            marginTop: "32px",
            fontSize: "30px",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "900px",
          }}
        >
          Courses, community and B2B AI solutions — chatbots, voice agents and workflow automation.
        </div>

        <div
          style={{
            marginTop: "44px",
            display: "flex",
            gap: "28px",
            fontSize: "24px",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <div>6,000+ community</div>
          <div>·</div>
          <div>4.9/5 rating</div>
          <div>·</div>
          <div>insiderai.it.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
