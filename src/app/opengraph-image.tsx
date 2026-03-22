import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Insider — AI Automation Education Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #080808 0%, #0f1724 50%, #080808 100%)",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(14,165,233,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "200px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #0ea5e9, #06b6d4, #7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "700",
              fontSize: "20px",
            }}
          >
            AI
          </div>
          <div>
            <div style={{ color: "white", fontWeight: "700", fontSize: "24px" }}>AI Insider</div>
            <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Education Platform
            </div>
          </div>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "800",
            color: "white",
            lineHeight: 1.05,
            marginBottom: "24px",
            maxWidth: "800px",
          }}
        >
          Master{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #38bdf8 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            AI Automation
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.55)",
            marginBottom: "48px",
            maxWidth: "700px",
            lineHeight: 1.5,
          }}
        >
          Join 12,000+ entrepreneurs building automated businesses with cutting-edge AI
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "40px" }}>
          {[
            { v: "6,079+", l: "Specialists Trained" },
            { v: "340%", l: "Average ROI" },
            { v: "150+", l: "Partners" },
          ].map((s) => (
            <div key={s.l} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div
                style={{
                  fontSize: "32px",
                  fontWeight: "800",
                  background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {s.v}
              </div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "16px",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          insiderai.it.com
        </div>
      </div>
    ),
    { ...size }
  );
}
