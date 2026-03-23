import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Globe } from "lucide-react";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const HeroQuoteSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050711]">

      {/* Animated grid background */}
      <div className="absolute inset-0 hero-grid opacity-100" />

      {/* Floating orbs */}
      <div className="orb orb-violet w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-50" style={{ animationDelay: '0s' }} />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-40" style={{ animationDelay: '2s' }} />
      <div className="orb orb-pink w-[300px] h-[300px] top-[40%] left-[60%] opacity-30" style={{ animationDelay: '4s' }} />

      {/* Constellation dots */}
      <div className="absolute inset-0 dots-bg opacity-30" />

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(124,58,237,0.12),transparent)]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">

        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="section-badge animate-pulse-ring">
            <Sparkles className="w-3.5 h-3.5" />
            Next-Gen Digital Agency
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="font-[Outfit] font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] tracking-tight mb-8">
          <span className="block text-white mb-2">We Build</span>
          <span className="block shimmer-text">Digital Futures</span>
          <span className="block text-white mt-2">
            That <span className="text-gradient">Inspire</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="section-desc max-w-2xl mx-auto mb-12 text-lg">
          From AI-powered automation to high-converting websites — we engineer digital experiences that captivate audiences, drive growth, and set you apart from the competition.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <Link to="/contact" className="btn-primary text-base px-8 py-4">
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/project" className="btn-outline text-base px-8 py-4">
            <Globe className="w-5 h-5" />
            View Our Work
          </Link>
        </div>

        {/* Stats Bar */}
        <div className="glass-card rounded-2xl p-6 max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-[rgba(255,255,255,0.06)]">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <p className="stat-number text-3xl font-black mb-1">{stat.value}</p>
                <p className="text-slate-400 text-xs font-[Inter] font-medium uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 mt-16 opacity-40">
          <span className="text-xs text-slate-500 font-[Outfit] uppercase tracking-widest">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-violet-500 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroQuoteSection;
