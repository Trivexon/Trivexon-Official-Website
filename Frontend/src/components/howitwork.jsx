import React from "react";

const steps = [
  {
    number: "01",
    title: "Discovery & Planning",
    description: "We deep-dive into your goals, audience, and competition to craft a winning strategy tailored to your unique vision.",
    icon: "🔍",
    color: "#7C3AED",
  },
  {
    number: "02",
    title: "Design & Prototype",
    description: "Our designers create stunning UI/UX prototypes that balance aesthetics with seamless user experience at every touchpoint.",
    icon: "🎨",
    color: "#06B6D4",
  },
  {
    number: "03",
    title: "Development & Build",
    description: "Our engineers bring designs to life with clean, scalable code using the latest technologies for maximum performance.",
    icon: "⚡",
    color: "#F472B6",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description: "We deploy your solution, monitor performance, and provide ongoing support to ensure continuous growth and success.",
    icon: "🚀",
    color: "#FBBF24",
  },
];

export default function ProcessDesign() {
  return (
    <section className="relative py-24 bg-[#050711] overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 hero-grid opacity-25" />
      <div className="orb orb-violet w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <span className="section-badge">How We Work</span>
          </div>
          <h2 className="section-title mb-4">
            Our <span className="text-gradient">Process</span> of Work
          </h2>
          <p className="section-desc max-w-xl mx-auto">
            A proven four-step framework that consistently delivers exceptional results from concept to launch.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[72px] left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-px bg-gradient-to-r from-violet-500/30 via-cyan-500/30 to-pink-500/30" />

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group glass-card-hover card-shine rounded-2xl p-7 text-center"
            >
              {/* Number badge */}
              <div className="relative flex justify-center mb-6">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center font-[Outfit] font-black text-lg relative z-10 border-2"
                  style={{
                    background: `${step.color}15`,
                    borderColor: `${step.color}50`,
                    color: step.color,
                    boxShadow: `0 0 20px ${step.color}30`,
                  }}
                >
                  {step.number}
                </div>
              </div>

              {/* Icon */}
              <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-[Outfit] font-bold text-lg text-white mb-3 group-hover:text-violet-300 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-[Inter]">
                {step.description}
              </p>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-500 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${step.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
