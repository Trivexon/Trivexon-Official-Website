import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

/**
 * Reusable Service Page Layout
 * Props:
 *  - badge: string (e.g. "Web Development")
 *  - title: string (main headline with optional <span> inside)
 *  - description: string
 *  - heroIcon: JSX (large icon element)
 *  - accentColor: hex string (e.g. "#7C3AED")
 *  - stats: array of { value, label }
 *  - overview: { heading, paragraphs: [string] }
 *  - features: array of { icon, title, desc, color }
 *  - benefits: array of strings
 *  - process: array of { step, title, desc }
 *  - techStack: array of { icon, name, tag }
 *  - faq: array of { q, a }
 */
export default function ServicePage({
  badge,
  title,
  description,
  heroIcon,
  heroImage,
  heroImageClassName = "w-full h-[300px] sm:h-[400px] lg:h-[480px] xl:h-[520px] object-cover transition-transform duration-700",
  accentColor = "#7C3AED",
  stats = [],
  overview = {},
  features = [],
  benefits = [],
  process = [],
  techStack = [],
  faq = [],
}) {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="bg-[#050711]">

      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#050711]">
        <div className="absolute inset-0 hero-grid opacity-30" />
        {/* Orbs using inline style for custom accent color */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-25 blur-[130px]"
          style={{ background: accentColor }} />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full opacity-15 blur-[100px]"
          style={{ background: '#06B6D4' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-15 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-5 xl:col-span-5 z-10">
              <div className="flex mb-6">
                <span className="section-badge">{badge}</span>
              </div>
              <h1
                className="font-[Outfit] font-black text-4xl lg:text-5xl xl:text-5xl text-white leading-tight mb-6"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="section-desc mb-8">{description}</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Get Started <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/contact" className="btn-outline">
                  Free Consultation
                </Link>
              </div>
            </div>

            {/* Right — Image */}
            <div className="lg:col-span-7 xl:col-span-7 flex justify-end relative mt-10 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl w-full lg:w-[125%] lg:translate-x-16 xl:translate-x-24 2xl:translate-x-32 flex items-center justify-center">
                <img src={heroImage || "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"} alt={`${badge} Services by Trivexon`} className={heroImageClassName} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      {overview.heading && (
        <section className="relative py-20 bg-[#0A0F1E] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side: Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.05)] group">
                <img src={overview.image || "/images/home-img-2.webp"} alt={`${badge} Overview and Process`} className="w-full h-auto max-h-[650px] object-cover opacity-90 transition-transform duration-700 " />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A0F1E]/40 mix-blend-multiply"></div>
                {/* Decorative blur orb */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full blur-[60px]" style={{ background: accentColor }}></div>
              </div>

              {/* Right Side: Text */}
              <div>
                <div className="flex mb-4">
                  <span className="section-badge">Overview</span>
                </div>
                <h2 className="section-title mb-8 leading-tight"
                  dangerouslySetInnerHTML={{ __html: overview.heading }} />

                <div className="space-y-6">
                  {overview.paragraphs?.map((p, i) => (
                    <p key={i} className="text-slate-300 leading-relaxed font-[Inter] text-base relative pl-5 border-l-2" style={{ borderColor: accentColor }}>{p}</p>
                  ))}
                </div>

                {benefits.length > 0 && (
                  <div className="mt-6">
                    <p className="text-slate-300 leading-relaxed font-[Inter] text-base relative pl-5 border-l-2" style={{ borderColor: accentColor }}>
                      Our goal is to help your business grow easily. That is why we make sure to provide {benefits.join(", ").toLowerCase()}.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== FEATURES ===== */}
      {features.length > 0 && (
        <section className="relative py-20 bg-[#050711] overflow-hidden">
          <div className="absolute inset-0 dots-bg opacity-15" />
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px]"
            style={{ background: accentColor }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex justify-center mb-5">
                <span className="section-badge">What We Offer</span>
              </div>
              <h2 className="section-title mb-4">
                Key <span className="text-gradient">Features & Capabilities</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="group glass-card-hover card-shine rounded-2xl p-6">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: (f.color || accentColor) + '18', border: `1px solid ${f.color || accentColor}33` }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: f.color || accentColor }} />
                  </div>
                  <h3 className="font-[Outfit] font-bold text-white text-base mb-2 group-hover:text-violet-300 transition-colors">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-[Inter]">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== PROCESS ===== */}
      {process.length > 0 && (
        <section className="relative py-20 bg-[#0A0F1E] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px]"
            style={{ background: accentColor }} />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex justify-center mb-5">
                <span className="section-badge">How We Work</span>
              </div>
              <h2 className="section-title mb-4">
                Our <span className="text-gradient">Process</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((s, i) => (
                <div key={i} className="group glass-card-hover card-shine rounded-2xl p-6 relative">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-[Outfit] font-black text-sm mb-4 border-2 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: accentColor + '15',
                      borderColor: accentColor + '50',
                      color: accentColor,
                      boxShadow: `0 0 20px ${accentColor}25`,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-[Outfit] font-bold text-white text-base mb-2 group-hover:text-violet-300 transition-colors">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-[Inter]">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== TECH STACK ===== */}
      {techStack.length > 0 && (
        <section className="relative py-20 bg-[#050711] overflow-hidden">
          <div className="absolute inset-0 hero-grid opacity-20" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <div className="flex justify-center mb-5">
                <span className="section-badge">Tech Stack</span>
              </div>
              <h2 className="section-title mb-4">
                Technologies <span className="text-gradient">We Trust</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {techStack.map((t, i) => (
                <div key={i} className="group glass-card-hover card-shine rounded-2xl p-4 text-center">
                  <div className="text-3xl mb-2 transition-transform duration-300 group-hover:scale-110">{t.icon}</div>
                  <p className="font-[Outfit] font-bold text-white text-xs">{t.name}</p>
                  <p className="text-slate-500 text-xs font-[Inter] mt-0.5">{t.tag}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== FAQ ===== */}
      {faq.length > 0 && (
        <section className="relative py-20 bg-[#0A0F1E] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-5">
                <span className="section-badge">FAQ</span>
              </div>
              <h2 className="section-title mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {faq.map((item, i) => (
                <div key={i} className="glass-card rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-[rgba(124,58,237,0.06)] transition-colors"
                  >
                    <span className="text-slate-200 text-sm font-[Outfit] font-medium">{item.q}</span>
                    <span
                      className="font-bold text-xl flex-shrink-0 transition-transform duration-200"
                      style={{ color: accentColor, transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                    >+</span>
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-400 text-sm leading-relaxed font-[Inter]">{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA ===== */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${accentColor}18 0%, rgba(6,182,212,0.08) 100%)` }} />
        <div className="absolute inset-0 hero-grid opacity-15" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[Outfit] font-black text-4xl md:text-5xl text-white mb-5">
            Ready to Get <span className="text-gradient">Started?</span>
          </h2>
          <p className="section-desc mb-10">
            Let's discuss your project and create a solution tailored to your exact needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Request Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/918655685272?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20a%20project!" target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-8 py-4 inline-flex items-center justify-center">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
