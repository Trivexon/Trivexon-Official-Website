import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "1+ Years of Industry Experience",
  "10+ Successful Projects",
  "Expert Team of 5+ Professionals",
  "24/7 Dedicated Client Support",
];

const stats = [
  { value: "4.9", label: "Client Rating", suffix: "★" },
  { value: "A+", label: "Service Grade" },
];

const AboutSection = () => {
  return (
    <section className="relative py-24 bg-[#050711] overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="orb orb-violet w-[400px] h-[400px] top-1/4 left-[-150px] opacity-25 blur-[120px]" />
      <div className="orb orb-cyan w-[350px] h-[350px] bottom-0 right-[-100px] opacity-20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left - Image side */}
          <div className="relative order-2 lg:order-1">
            {/* Main image frame */}
            <div className="relative rounded-3xl overflow-hidden  p-1">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="/images/aboutus.png"
                  alt="About Trivexon"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050711]/60 to-transparent" />
              </div>
            </div>

            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-5 shadow-2xl border border-[rgba(124,58,237,0.2)]">
              <p className="stat-number text-4xl font-black">10+</p>
              <p className="text-slate-400 text-sm font-[Outfit]">Projects Delivered</p>
            </div>

            <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-5 shadow-2xl border border-[rgba(6,182,212,0.2)]">
              <p className="font-[Outfit] font-black text-4xl" style={{ background: 'linear-gradient(135deg, #06B6D4, #7C3AED)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>5+</p>
              <p className="text-slate-400 text-sm font-[Outfit]">Happy Clients</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <div className="flex mb-5">
              <span className="section-badge">Who We Are</span>
            </div>

            <h2 className="section-title mb-6">
              Web & Software Agency<br />
              <span className="text-gradient">Built for Results</span>
            </h2>

            <p className="text-slate-400 mb-6 leading-relaxed font-[Inter]">
              Trivexon is a premium web & software development agency based in Mumbai. We blend cutting-edge technology with bold design to create digital solutions that don't just look great — they perform exceptionally and drive real business outcomes.
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed font-[Inter]">
              Our team of experts stays ahead of industry trends, constantly innovating to deliver solutions that give our clients a competitive edge in their markets.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                  <span className="text-slate-300 font-[Inter] text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Rating cards inline */}
            <div className="flex gap-6 mb-10">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-xl px-5 py-4 border border-[rgba(124,58,237,0.15)]"
                >
                  <p className="stat-number text-3xl font-black">
                    {stat.value}<span className="text-yellow-400 text-xl">{stat.suffix}</span>
                  </p>
                  <p className="text-slate-400 text-xs font-[Outfit] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-primary">
              Discover Our Story
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
