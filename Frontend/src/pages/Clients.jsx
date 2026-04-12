import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle, Handshake, Clock, Shield } from "lucide-react";
import SEOHead, { buildBreadcrumbSchema } from "../components/SEOHead";

const clients = [
  {
    name: "MNA Capital Advisors",
    industry: "Financial Services",
    service: "Web Application Development",
    description: "Designed and developed a robust, full-stack web application for MNA Capital Advisors — delivering a responsive, professional platform tailored to their financial services brand and client engagement needs.",
    avatar: "MNA",
    logo: "/images/mna1.webp",
    color: "#10B981",
    tags: ["React", "Node.js", "HIPAA"],
  },
  {
    name: "The Goodwill Facade",
    industry: "Glass industry",
    service: "Web Application Development",
    description: "Crafted a modern, visually stunning website for The Goodwill Facade — a premium glass industry brand. The site showcases their services with a clean design, seamless UX, and strong online presence across all devices.",
    avatar: "GW",
    logo: "/images/good.webp",
    color: "#7C3AED",
    tags: ["LMS", "React", "AI"],
  },
  {
    name: "MNA Capital Advisors",
    industry: "Financial Services",
    service: "ERP/CRM Development",
    description: "Built a custom ERP/CRM system for MNA Capital Advisors, unifying their client management, deal tracking, and internal workflows into a single, integrated platform — significantly improving team efficiency and data visibility.",
    avatar: "MNA",
    logo: "/images/mna1.webp",
    color: "#F472B6",
    tags: ["ERP", "CRM", "API"],
  },
  {
    name: "MNA Capital Advisors",
    industry: "Financial Services",
    service: "SEBI DRHP Automation & AI Summarization Software (Desktop EXE)",
    description: "Developed and delivered a custom desktop-based SEBI DRHP Automation Software, provided as a compiled Windows EXE, designed to automate the end-to-end processing of SEBI DRHP filings with AI-powered summarization built in.",
    avatar: "MNA",
    logo: "/images/mna1.webp",
    color: "#FBBF24",
    tags: ["WordPress", "SEO", "Design"],
  },
  {
    name: "MNA Capital Advisors",
    industry: "Financial Services",
    service: "Valuation Automation System Software",
    description: "Designed and delivered a comprehensive desktop application that digitizes the complete valuation lifecycle — from client onboarding to digitally signed, tamper-proof report generation and delivery.",
    avatar: "MNA",
    logo: "/images/mna1.webp",
    color: "#06B6D4",
    tags: ["AI", "Automation", "Cloud"],
  },
  // {
  //   name: "FinEdge Investments",
  //   industry: "Financial Services",
  //   service: "Secure Web Application",
  //   description: "Developed a secure, SEBI-compliant investment tracking dashboard with multi-factor authentication and real-time portfolio analytics.",
  //   avatar: "FE",
  //   color: "#A855F7",
  //   tags: ["Security", "FinTech", "Dashboard"],
  // },
];

const processSteps = [
  { step: "01", title: "Discovery & Strategy", desc: "We deep-dive into your goals, audience, and requirements through structured consultations.", color: "#7C3AED" },
  { step: "02", title: "Planning & Design", desc: "Detailed roadmaps, wireframes, and UI designs aligned with your vision and brand identity.", color: "#06B6D4" },
  { step: "03", title: "Development & Testing", desc: "Robust, scalable builds with rigorous QA testing to ensure performance and reliability.", color: "#F472B6" },
  { step: "04", title: "Launch & Support", desc: "Smooth deployment with post-launch monitoring and dedicated support from day one.", color: "#FBBF24" },
  { step: "05", title: "Optimize & Scale", desc: "Continuous performance tuning and feature evolution as your business grows.", color: "#10B981" },
];

const idealFor = [
  { icon: "🚀", title: "Startups", desc: "Early-stage companies building their digital foundation and launching to market." },
  { icon: "📈", title: "Growing Businesses", desc: "Scaling companies that need reliable, high-performance digital platforms." },
  { icon: "💡", title: "Product Companies", desc: "MVPs, SaaS products, and tech platforms ready for market validation." },
  { icon: "🏢", title: "Enterprises", desc: "Large organizations needing custom ERP, CRM, and AI automation solutions." },
];

const stats = [
  { value: "5+", label: "Happy Clients", desc: "Across 3+ industries", icon: "🤝" },
  { value: "10+", label: "Projects Done", desc: "On time & on budget", icon: "✅" },
  { value: "100%", label: "Satisfaction", desc: "Guaranteed quality", icon: "⭐" },
  { value: "1+", label: "Years Active", desc: "Proven track record", icon: "🏆" },
];

const clientTestimonials = [
  {
    name: "Vishal Laheri",
    role: "Founder, MNA Capital Advisors",
    text: "We engaged Trivexon to develop our website and were highly satisfied with their timely delivery, dedication, and professional approach. Impressed by their performance, we expanded the engagement to automate our key report generation and database systems, resulting in substantial efficiency gains for our team at MNA Capital Advisors. Trivexon has become our trusted technology partner—strongly recommended for web development and process automation needs.",
    avatar: "VL",
    gradient: "from-violet-600 to-cyan-500",
  },
  {
    name: "Neil",
    role: "Founder, thegoodwillfacade",
    text: "We are extremely happy with the website developed for The Goodwill Facade by Trivexon. Their team truly understood our vision and transformed it into a modern, professional, and visually appealing website.The design is clean, user-friendly, and perfectly showcases our services. The performance and responsiveness across all devices have been excellent, helping us create a strong online presence.Trivexon’s attention to detail, creativity, and timely delivery made the entire process smooth and hassle-free. We highly recommend Trivexon to anyone looking for high-quality website development services.",
    avatar: "NL",
    gradient: "from-blue-600 to-indigo-500",
  },
  // {
  //   name: "Priya Sharma",
  //   role: "Founder, Elevate Design",
  //   text: "An absolute pleasure to work with. They took our vague ideas and turned them into a stunning, high-performance platform that our users absolutely love.",
  //   avatar: "PS",
  //   gradient: "from-pink-600 to-rose-500",
  // },
];

export default function Clients() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === clientTestimonials.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#050711]">
      <SEOHead
        title="Our Clients — Trusted by Businesses Across India"
        description="Trivexon has partnered with startups, SMEs, and enterprises across India. See our client success stories in web design, AI automation, and software development."
        canonical="/clients"
        keywords="Trivexon clients, web agency clients Mumbai, client testimonials software company India, trusted web development partners"
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Clients", path: "/clients" }
        ])}
      />

      {/* ===== PAGE HERO ===== */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-[#050711]">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="orb orb-violet w-[500px] h-[500px] top-0 left-0 opacity-30 blur-[120px]" />
        <div className="orb orb-pink w-[350px] h-[350px] bottom-0 right-0 opacity-20 blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <span className="section-badge">Our Clients</span>
            </div>
            <h1 className="font-[Outfit] font-black text-5xl lg:text-7xl text-white leading-tight mb-6">
              Building Lasting <span className="text-gradient">Partnerships</span>
            </h1>
            <p className="section-desc mb-8">
              We believe the best work happens through genuine collaboration. Our clients aren't just customers — they're long-term partners whose success we're deeply invested in.
            </p>
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full text-sm font-[Outfit] text-slate-300">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Currently accepting new client partnerships
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="relative py-16 bg-[#0A0F1E]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div key={i} className="glass-card-hover card-shine rounded-2xl p-6 text-center">
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="stat-number text-4xl font-black">{s.value}</p>
                <p className="font-[Outfit] font-bold text-white text-sm mt-1">{s.label}</p>
                <p className="text-slate-500 text-xs font-[Inter] mt-1">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLIENTS WE'VE WORKED WITH ===== */}
      <section className="relative py-24 bg-[#050711] overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-20" />
        <div className="orb orb-cyan w-[400px] h-[400px] top-0 right-0 opacity-15 blur-[130px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <span className="section-badge">Clients</span>
            </div>
            <h2 className="section-title mb-4">
              Who We've <span className="text-gradient">Worked With</span>
            </h2>
            <p className="section-desc max-w-xl mx-auto">
              Proud to have partnered with innovative companies across industries and geographies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, i) => (
              <div
                key={i}
                className="group glass-card-hover card-shine rounded-2xl p-6 flex flex-col"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center font-[Outfit] font-black text-lg text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110 overflow-hidden"
                    style={{ background: client.logo ? 'rgba(255,255,255,0.05)' : `linear-gradient(135deg, ${client.color}, ${client.color}88)` }}
                  >
                    {client.logo ? (
                      <img src={client.logo} alt={`${client.name} logo`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    ) : (
                      client.avatar
                    )}
                  </div>
                  <div>
                    <h3 className="font-[Outfit] font-bold text-white text-base group-hover:text-violet-300 transition-colors">{client.name}</h3>
                    <p className="text-xs font-[Inter]" style={{ color: client.color }}>{client.industry}</p>
                    <p className="text-slate-500 text-xs font-[Inter]">{client.service}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed font-[Inter] flex-1 mb-5">
                  {client.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {client.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-0.5 rounded-full font-[Outfit]"
                      style={{ background: client.color + '18', color: client.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-xs font-[Outfit] font-medium">Successfully Delivered</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WE WORK ===== */}
      <section className="relative py-24 bg-[#0A0F1E] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="orb orb-violet w-[400px] h-[400px] bottom-0 left-0 opacity-15 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <span className="section-badge">Our Process</span>
            </div>
            <h2 className="section-title mb-4">
              How We <span className="text-gradient">Work With Clients</span>
            </h2>
            <p className="section-desc max-w-xl mx-auto">
              A proven 5-step framework that ensures exceptional collaboration and consistent results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((s, i) => (
              <div
                key={i}
                className="group glass-card-hover card-shine rounded-2xl p-6 text-center relative"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-[Outfit] font-black text-base mx-auto mb-4 border-2 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: s.color + '15',
                    borderColor: s.color + '50',
                    color: s.color,
                    boxShadow: `0 0 20px ${s.color}30`,
                  }}
                >
                  {s.step}
                </div>
                <h3 className="font-[Outfit] font-bold text-white text-sm mb-2 group-hover:text-violet-300 transition-colors">{s.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed font-[Inter]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIAL ===== */}
      <section className="relative py-20 bg-[#050711] overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-20" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="glass-card rounded-3xl p-10 border border-[rgba(124,58,237,0.2)] relative">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <div className="transition-opacity duration-500">
              <p className="text-slate-200 text-xl leading-relaxed font-[Inter] italic mb-8 min-h-[140px] md:min-h-[100px] flex items-center justify-center max-w-2xl mx-auto">
                "{clientTestimonials[currentTestimonial].text}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${clientTestimonials[currentTestimonial].gradient} flex items-center justify-center font-[Outfit] font-black text-white transition-all`}>
                  {clientTestimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <p className="font-[Outfit] font-semibold text-white">{clientTestimonials[currentTestimonial].name}</p>
                  <p className="text-slate-500 text-sm font-[Inter]">{clientTestimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>

            {/* Testimonial slider dots */}
            <div className="flex justify-center gap-2 mt-8">
              {clientTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`transition-all duration-300 rounded-full ${currentTestimonial === index
                    ? 'w-8 h-2 bg-gradient-to-r from-violet-500 to-cyan-500'
                    : 'w-2 h-2 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)]'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== IDEAL FOR ===== */}
      <section className="relative py-24 bg-[#0A0F1E] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-5">
              <span className="section-badge">Who We Serve</span>
            </div>
            <h2 className="section-title mb-4">
              Who We <span className="text-gradient">Work With</span>
            </h2>
            <p className="section-desc max-w-xl mx-auto">
              From startups to enterprises — we specialize in building ambitious digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {idealFor.map((item, i) => (
              <div key={i} className="group glass-card-hover card-shine rounded-2xl p-7 text-center">
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                <h3 className="font-[Outfit] font-bold text-white text-base mb-2 group-hover:text-violet-300 transition-colors">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-[Inter]">{item.desc}</p>
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
            Ready to Be Our Next <span className="text-gradient">Success Story?</span>
          </h2>
          <p className="section-desc mb-10">
            Join our growing family of satisfied clients. Let's discuss how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="https://wa.me/918655685272?text=Hi%2C%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20a%20project!" target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-8 py-4 inline-flex items-center justify-center">
              Schedule a Call
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-6 font-[Inter]">No pressure, no obligation — just a conversation about your goals.</p>
        </div>
      </section>

    </div>
  );
}