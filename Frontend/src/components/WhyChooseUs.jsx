import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Zap, Target, Shield } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Premium Quality",
    badge: "Guaranteed",
    description: "We deliver work that exceeds industry standards, meticulously crafted to make your brand stand out.",
    points: ["ISO-level standards", "Quality assurance", "Best practices"],
    color: "#7C3AED",
    badgeColor: "rgba(124,58,237,0.15)",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    badge: "75% Faster",
    description: "Accelerate your digital transformation with our agile methodology and rapid deployment strategies.",
    points: ["Agile sprints", "On-time delivery", "Faster go-to-market"],
    color: "#06B6D4",
    badgeColor: "rgba(6,182,212,0.15)",
  },
  {
    icon: Target,
    title: "Strategic Partnership",
    badge: "Proven Success",
    description: "We don't just deliver services — we build long-term partnerships focused on your growth objectives.",
    points: ["Dedicated account manager", "Long-term support", "Result-driven strategy"],
    color: "#F472B6",
    badgeColor: "rgba(244,114,182,0.15)",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    badge: "Enterprise-Grade",
    description: "Security-first development practices ensure your platform is protected and always available.",
    points: ["Data encryption", "99.9% uptime goal", "Regular audits"],
    color: "#FBBF24",
    badgeColor: "rgba(251,191,36,0.15)",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#0A0F1E] overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="orb orb-violet w-[400px] h-[400px] top-1/4 right-[-100px] opacity-20 blur-[120px]" />
      <div className="orb orb-cyan w-[300px] h-[300px] bottom-0 left-[-50px] opacity-15 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <div className="flex mb-5">
              <span className="section-badge">Why Choose Us</span>
            </div>
            <h2 className="section-title mb-5">
              Elevate Your Business With<br />
              <span className="text-gradient">Expert Solutions</span>
            </h2>
            <p className="section-desc mb-10">
              We combine strategic thinking, proven methodologies, and cutting-edge technology to deliver results that create lasting competitive advantages.
            </p>

            {/* Feature cards */}
            <div className="space-y-5">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="group glass-card-hover card-shine rounded-2xl p-5 flex items-start gap-5"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: feature.color + '18', border: `1px solid ${feature.color}33` }}
                  >
                    <feature.icon className="w-5 h-5" style={{ color: feature.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="font-[Outfit] font-bold text-base text-white">{feature.title}</h3>
                      <span
                        className="text-xs font-[Outfit] font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ background: feature.badgeColor, color: feature.color }}
                      >
                        {feature.badge}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm font-[Inter] leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link to="/contact" className="btn-primary">
                Start Working Together
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right - Image + Stats */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden neon-border p-1">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/hero.png"
                  alt="Why Choose Trivexon"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/60 to-transparent" />
              </div>
            </div>

            {/* Floating card - top left */}
            <div className="absolute -top-6 -left-6 glass-card rounded-2xl p-4 border border-[rgba(124,58,237,0.25)] shadow-xl">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🚀</div>
                <div>
                  <p className="font-[Outfit] font-bold text-white text-sm">Fast Delivery</p>
                  <p className="text-slate-400 text-xs">24/7 Support</p>
                </div>
              </div>
            </div>

            {/* Floating card - bottom right */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 border border-[rgba(6,182,212,0.25)] shadow-xl">
              <div className="flex items-center gap-3">
                <div className="text-3xl">📊</div>
                <div>
                  <p className="text-xs font-[Outfit] font-semibold text-slate-400 uppercase">Avg Growth</p>
                  <p className="font-[Outfit] font-black text-xl text-gradient">+45%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}