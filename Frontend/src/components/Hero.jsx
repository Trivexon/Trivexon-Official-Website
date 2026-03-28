import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Globe } from "lucide-react";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

/* ── Animated Particle Network Canvas ── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Particle config
    const COUNT = 90;
    const MAX_DIST = 160;
    const colors = ["#7C3AED", "#06B6D4", "#A855F7", "#F472B6"];

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 2 + 0.5,          // depth (pseudo-3D)
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulse: Math.random() * Math.PI * 2,  // phase offset for glow pulse
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const t = performance.now() / 1000;

      particles.forEach((p) => {
        // Move
        p.x += p.vx * p.z;
        p.y += p.vy * p.z;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulsing glow radius
        const glowR = p.r * (1.5 + 0.8 * Math.sin(t * 1.5 + p.pulse));

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR * 6);
        grd.addColorStop(0, p.color + "cc");
        grd.addColorStop(1, p.color + "00");
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR * 6, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
        ctx.fillStyle = p.color + "ff";
        ctx.fill();
      });

      // Connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        opacity: 0.75,
      }}
    />
  );
};

/* ── Rotating 3D Ring decorations ── */
const Rings = () => (
  <div style={{ position: "absolute", inset: 0, zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
    {[340, 520, 700].map((size, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          width: size,
          height: size,
          borderRadius: "50%",
          border: `1px solid rgba(124,58,237,${0.18 - i * 0.04})`,
          animation: `heroRingSpin${i % 2 === 0 ? "CW" : "CCW"} ${18 + i * 8}s linear infinite`,
          boxShadow: `0 0 24px rgba(124,58,237,0.06)`,
        }}
      />
    ))}
    <style>{`
      @keyframes heroRingSpinCW  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      @keyframes heroRingSpinCCW { from{transform:rotate(0deg)} to{transform:rotate(-360deg)} }
    `}</style>
  </div>
);

/* ── Main Hero Component ── */
const HeroQuoteSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050711]">

      {/* 🎇 Particle Network Canvas */}
      <ParticleCanvas />

      {/* 💫 3D Rings */}
      <Rings />

      {/* Animated grid background */}
      <div className="absolute inset-0 hero-grid opacity-30" style={{ zIndex: 3 }} />

      {/* Floating orbs */}
      <div className="orb orb-violet w-[500px] h-[500px] top-[-100px] left-[-100px] opacity-40" style={{ animationDelay: '0s', zIndex: 3 }} />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-[-50px] right-[-50px] opacity-30" style={{ animationDelay: '2s', zIndex: 3 }} />
      <div className="orb orb-pink w-[300px] h-[300px] top-[40%] left-[60%] opacity-20" style={{ animationDelay: '4s', zIndex: 3 }} />

      {/* Radial gradient center glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_50%,rgba(124,58,237,0.15),transparent)]" style={{ zIndex: 4 }} />

      {/* Content */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center" style={{ zIndex: 10 }}>

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

