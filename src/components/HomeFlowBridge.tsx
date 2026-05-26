"use client";

type HomeFlowBridgeProps = {
  flip?: boolean;
  intensity?: "soft" | "strong";
  asset?: "stream" | "arc" | "wave" | "none";
};

const ASSETS = {
  stream: "/images/flow/ribbon-stream.png",
  arc: "/images/flow/ribbon-arc.png",
  wave: "/images/flow/ribbon-wave.png",
};

export default function HomeFlowBridge({ flip = false, intensity = "soft", asset = "stream" }: HomeFlowBridgeProps) {
  return (
    <div
      className={`home-flow-connector relative z-20 -my-14 h-28 sm:-my-20 sm:h-40 pointer-events-none overflow-hidden ${
        flip ? "scale-x-[-1]" : ""
      }`}
      aria-hidden
    >
      {asset !== "none" && (
        <div
          className={`flow-asset flow-asset-${asset}`}
          style={{ backgroundImage: `url(${ASSETS[asset]})` }}
        />
      )}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id={`connector-flow-${intensity}`} x1="0" y1="0" x2="1440" y2="220" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
            <stop offset="28%" stopColor="#fb923c" stopOpacity={intensity === "strong" ? "0.78" : "0.46"} />
            <stop offset="54%" stopColor="#ec4899" stopOpacity={intensity === "strong" ? "0.72" : "0.42"} />
            <stop offset="78%" stopColor="#a855f7" stopOpacity={intensity === "strong" ? "0.68" : "0.38"} />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          className="flow-ribbon flow-ribbon-main"
          d="M-80 150C160 50 340 190 560 105C780 20 910 165 1120 86C1250 37 1340 50 1520 115"
          stroke={`url(#connector-flow-${intensity})`}
          strokeWidth={intensity === "strong" ? "34" : "24"}
          strokeLinecap="round"
          opacity="0.52"
        />
        <path
          className="flow-ribbon flow-ribbon-thread"
          d="M-60 145C170 65 335 165 545 108C760 49 910 148 1128 88C1260 52 1350 61 1500 112"
          stroke="#f97316"
          strokeWidth="3"
          strokeLinecap="round"
          opacity={intensity === "strong" ? "0.62" : "0.42"}
        />
        <path
          className="flow-ribbon flow-ribbon-thread flow-ribbon-thread-alt"
          d="M-40 166C175 90 345 198 585 118C795 48 915 164 1125 102C1275 58 1370 79 1480 130"
          stroke="#f0abfc"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.34"
        />
      </svg>
    </div>
  );
}
