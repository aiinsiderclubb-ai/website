export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[var(--color-bg-primary)] z-50">
      <div className="flex flex-col items-center gap-5">
        {/* Logo */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl"
          style={{ background: "linear-gradient(135deg, #0ea5e9 0%, #7c3aed 100%)" }}
        >
          AI
        </div>
        {/* Dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full animate-bounce"
              style={{
                background: i === 0 ? "#0ea5e9" : i === 1 ? "#06b6d4" : "#7c3aed",
                animationDelay: `${i * 0.15}s`,
                animationDuration: "0.7s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
