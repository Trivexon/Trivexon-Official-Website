import React from "react";

const words = [
  "Web Design", "AI Automation", "ERP/CRM Solutions", "SEO Services",
  "UI/UX Design", "E-Commerce", "WordPress", "AI Agents", "N8N Workflow", "Voice Automation"
];

export default function Marquee() {
  return (
    <section className="overflow-hidden w-full py-5 bg-[#050711] border-y border-[rgba(124,58,237,0.1)]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...words, ...words, ...words].map((word, i) => (
          <div key={i} className="flex items-center gap-4 mx-6 flex-shrink-0">
            <span
              className="font-[Outfit] font-black text-[52px] tracking-tight leading-none"
              style={{
                color: i % 3 === 0 ? 'transparent' : i % 3 === 1 ? '#94A3B8' : 'transparent',
                WebkitTextStroke: i % 3 !== 1 ? '1px rgba(124,58,237,0.5)' : 'none',
              }}
            >
              {word}
            </span>
            <span className="text-violet-500/60 text-3xl flex-shrink-0">✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
