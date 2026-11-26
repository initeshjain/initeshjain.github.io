import React from "react";

export const MarqueeTicker: React.FC = () => {
  const principles = [
    "Determinism over magic",
    "Agentic workflows with verified telemetry",
    "Sub-millisecond reaction loops",
    "Offline & local-first wherever possible",
    "Latency you can measure in milliseconds",
    "Zero mystery behavior in production",
    "Empirical benchmarks over hype"
  ];

  return (
    <div className="relative w-full overflow-hidden border-y border-[#E2DFD2] bg-[#FEF08A]/35 py-3 select-none">
      <div className="flex w-max animate-marquee space-x-8">
        {[...principles, ...principles, ...principles].map((item, index) => (
          <div key={index} className="flex items-center space-x-6 text-xs font-mono font-bold tracking-widest uppercase text-[#1E293B]">
            <span>{item}</span>
            <span className="inline-block w-2 h-2 rotate-45 bg-[#E11D48]" />
          </div>
        ))}
      </div>
    </div>
  );
};
