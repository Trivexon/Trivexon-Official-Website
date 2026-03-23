import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Users, Code2, Globe, Lightbulb, Trophy, Heart } from "lucide-react";

const stats = [
  { value: "200+", label: "Projects Delivered", icon: "🚀" },
  { value: "50+", label: "Happy Clients", icon: "🤝" },
  { value: "5+", label: "Years Experience", icon: "⏱️" },
  { value: "15+", label: "Team Experts", icon: "👥" },
];

const values = [
  {
    icon: Trophy,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in everything we deliver — from design pixels to deployment.",
    color: "#7C3AED",
  },
  {
    icon: Heart,
    title: "Client-First",
    description: "Your success is our success. We build genuine partnerships and go the extra mile for every client.",
    color: "#F472B6",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve, consistently adopting cutting-edge technologies and creative approaches.",
    color: "#FBBF24",
  },
  {
    icon: Globe,
    title: "Impact",
    description: "We design for results — every decision is tied to measurable outcomes and real business growth.",
    color: "#06B6D4",
  },
];

const perks = [
  { icon: "💰", title: "Transparent Pricing", desc: "No surprise costs, no hidden fees. Clear quotes before every project." },
  { icon: "⚡", title: "On-Time Delivery", desc: "We respect your timelines. Projects delivered on schedule, every time." },
  { icon: "🎨", title: "Premium Design", desc: "Every UI is crafted with care — functional, stunning, and purposeful." },
  { icon: "🔒", title: "Secure by Default", desc: "Security-first architecture across every product we build." },
  { icon: "🤝", title: "Dedicated Support", desc: "A real team, always available — not chatbots, not ticket queues." },
];

const team = [
  { name: "Vivek Maurya", role: "Founder & CEO", avatar: "VM", color: "#7C3AED" },
  { name: "Rahul Singh", role: "Lead Developer", avatar: "RS", color: "#06B6D4" },
  { name: "Pooja Sharma", role: "UI/UX Designer", avatar: "PS", color: "#F472B6" },
  { name: "Amit Patel", role: "AI Engineer", avatar: "AP", color: "#FBBF24" },
];

export default function AboutHero() {
  return (
    <div className="bg-[#050711]">

      {/* ===== PAGE HERO ===== */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#050711]">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="orb orb-violet w-[500px] h-[500px] top-0 left-0 opacity-30 blur-[120px]" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 right-0 opacity-20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="flex mb-6">
                <span className="section-badge">About Us</span>
              </div>
              <h1 className="font-[Outfit] font-black text-5xl lg:text-6xl text-white leading-tight mb-6">
                We Build Digital<br />
                <span className="text-gradient">Futures Together</span>
              </h1>
              <p className="section-desc mb-8">
                Trivexon is a premium web & software agency from Mumbai. We combine bold design with cutting-edge technology to create digital solutions that don't just look great — they perform and drive real business outcomes.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="btn-primary">
                  Work With Us <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/project" className="btn-outline">
                  Our Work
                </Link>
              </div>
            </div>

            {/* Right — Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="glass-card-hover card-shine rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-2">{s.icon}</div>
                  <p className="stat-number text-3xl font-black">{s.value}</p>
                  <p className="text-slate-400 text-sm font-[Outfit] mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="relative py-24 bg-[#0A0F1E] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="orb orb-violet w-[400px] h-[400px] top-1/4 left-[-100px] opacity-20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="rounded-3xl overflow-hidden neon-border p-1">
                <img
                  src="/images/aboutus.png"
                  alt="About Trivexon"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 border border-[rgba(124,58,237,0.25)] shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <p className="font-[Outfit] font-black text-white text-lg">4.9★</p>
                    <p className="text-slate-400 text-xs">Client Rating</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="flex mb-5">
                <span className="section-badge">Our Story</span>
              </div>
              <h2 className="section-title mb-6">
                Proudly Built in <span className="text-gradient">Mumbai</span>
              </h2>

              <p className="text-slate-400 leading-relaxed mb-5 font-[Inter]">
                Trivexon is a web & software development agency based in Mumbai, Maharashtra. We specialize in delivering premium digital solutions ranging from high-converting websites and e-commerce platforms to AI automation systems and custom ERP/CRM tools.
              </p>
              <p className="text-slate-400 leading-relaxed mb-8 font-[Inter]">
                We have developed over <span className="text-violet-400 font-semibold">200+ websites</span>, including <span className="text-cyan-400 font-semibold">50+ e-commerce platforms</span>, and have worked with clients across India, Australia, the United States, United Kingdom, and Dubai.
              </p>

              {/* Checklist */}
              <ul className="space-y-3">
                {[
                  "Expert team of 15+ skilled professionals",
                  "Delivered projects for International clients",
                  "Full-stack: design, development, AI & automation",
                  "Transparent pricing with dedicated post-launch support",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-violet-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm font-[Inter]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR VALUES ===== */}
      <section className="relative py-24 bg-[#050711] overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-20" />
        <div className="orb orb-cyan w-[400px] h-[400px] top-0 right-0 opacity-15 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <span className="section-badge">Core Values</span>
            </div>
            <h2 className="section-title mb-4">
              What <span className="text-gradient">Drives</span> Us
            </h2>
            <p className="section-desc max-w-xl mx-auto">
              The principles that shape how we work and what we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="group glass-card-hover card-shine rounded-2xl p-7 text-center">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: v.color + '18', border: `1px solid ${v.color}33` }}
                >
                  <v.icon className="w-6 h-6" style={{ color: v.color }} />
                </div>
                <h3 className="font-[Outfit] font-bold text-white text-lg mb-3 group-hover:text-violet-300 transition-colors">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-[Inter]">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PERKS ===== */}
      <section className="relative py-24 bg-[#0A0F1E] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <span className="section-badge">Why Choose Us</span>
            </div>
            <h2 className="section-title mb-4">
              Perks of Working <span className="text-gradient">With Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {perks.map((p, i) => (
              <div key={i} className="group glass-card-hover card-shine rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{p.icon}</div>
                <h3 className="font-[Outfit] font-bold text-white text-sm mb-2 group-hover:text-violet-300 transition-colors">{p.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-[Inter]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="relative py-24 bg-[#050711] overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="orb orb-violet w-[400px] h-[400px] bottom-0 left-1/3 opacity-15 blur-[130px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <span className="section-badge">Our Team</span>
            </div>
            <h2 className="section-title mb-4">
              The People <span className="text-gradient">Behind the Magic</span>
            </h2>
            <p className="section-desc max-w-xl mx-auto">
              A passionate team of designers, developers, and strategists dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {team.map((member, i) => (
              <div key={i} className="group glass-card-hover card-shine rounded-2xl p-6 text-center">
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center font-[Outfit] font-black text-2xl text-white mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}88)` }}
                >
                  {member.avatar}
                </div>
                <h3 className="font-[Outfit] font-bold text-white text-sm mb-1">{member.name}</h3>
                <p className="text-slate-500 text-xs font-[Inter]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/60 via-[#07040F] to-cyan-950/40" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.1) 100%)' }} />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[Outfit] font-black text-4xl md:text-5xl text-white mb-5">
            Ready to Build Something <span className="text-gradient">Extraordinary?</span>
          </h2>
          <p className="section-desc mb-10">
            Let's turn your vision into a high-performance digital product that stands out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/project" className="btn-outline text-base px-8 py-4">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
