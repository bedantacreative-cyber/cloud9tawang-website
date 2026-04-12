export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        {/* Dharma Wheel SVG */}
        <svg
          className="w-24 h-24 mx-auto mb-8 animate-rotate-slowly"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle */}
          <circle cx="50" cy="50" r="48" fill="none" stroke="#C4922A" strokeWidth="2" />
          {/* Inner circle */}
          <circle cx="50" cy="50" r="40" fill="none" stroke="#D4A843" strokeWidth="1" />
          {/* Center circle */}
          <circle cx="50" cy="50" r="8" fill="#C4922A" />
          {/* Dharma wheel spokes */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 50 + 8 * Math.cos(rad);
            const y1 = 50 + 8 * Math.sin(rad);
            const x2 = 50 + 40 * Math.cos(rad);
            const y2 = 50 + 40 * Math.sin(rad);
            return (
              <line
                key={angle}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#D4A843"
                strokeWidth="1"
              />
            );
          })}
          {/* Prayer flag colors around the wheel */}
          {[
            { angle: 0, color: "#C0392B" },
            { angle: 72, color: "#2980B9" },
            { angle: 144, color: "#27AE60" },
            { angle: 216, color: "#F4D03F" },
            { angle: 288, color: "#F5F5F0" },
          ].map(({ angle, color }) => {
            const rad = (angle * Math.PI) / 180;
            const x = 50 + 50 * Math.cos(rad);
            const y = 50 + 50 * Math.sin(rad);
            return (
              <circle key={angle} cx={x} cy={y} r="3" fill={color} />
            );
          })}
        </svg>

        {/* Loading text */}
        <div className="space-y-4">
          <h1 className="text-3xl font-serif font-bold text-accent animate-fade-in-up">
            Cloud9 Tawang
          </h1>
          <p className="text-foreground/60 font-medium animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Where the Mountains Meet the Divine
          </p>
          {/* Loading dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-accent animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
