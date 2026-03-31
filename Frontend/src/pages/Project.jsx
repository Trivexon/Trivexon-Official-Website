import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MNA Capital Advisors",
    category: "Web Application",
    tags: ["React", "Tailwind CSS", "Contentful API", "SEO", "Responsive"],
    description: "Premium real estate platform delivering luxury digital experiences with strong SEO, fast performance, and lead-generation funnels.",
    image: "/images/mna.png",
    accent: "#7C3AED",
    link: "https://www.mnacaps.com/",
  },
  {
    id: 2,
    title: "The GoodWill Facade",
    category: "Web Application",
    tags: ["React", "Tailwind CSS", "Contentful API", "SEO", "Animations"],
    description: "A renewable energy brand with a high-impact digital presence — modern design, performance optimization, and top-ranking SEO.",
    image: "/images/goodwill.png",
    accent: "#10B981",
    link: "https://www.thegoodwillfacade.com/",
  },
  {
    id: 3,
    title: "SEBI DRHP Automation & AI Summarization Software (Desktop EXE)",
    category: "Web App",
    tags: ["React", "Node.js", "Cloud"],
    description: "Development and delivery of a custom desktop-based SEBI DRHP Automation Software,provided as a compiled Windows EXE, designed to automate the end-to-end processing of SEBI DRHP filings",
    image: "/images/sebi.png",
    accent: "#06B6D4",
    link: "#",
  },
  {
    id: 4,
    title: "Healthys",
    category: "Web App",
    tags: ["Vue.js", "MySQL", "API"],
    description: "Premium property portal with immersive virtual tours, advanced search, and an integrated CRM for high-end real estate transactions.",
    image: "/images/Healthy.png",
    accent: "#FBBF24",
    link: "https://healthys-five.vercel.app/",
  },
  {
    id: 5,
    title: "FoodieExpress",
    category: "Mobile App",
    tags: ["React Native", "Payment", "GPS"],
    description: "Full-stack food delivery platform with real-time tracking, payment gateway integration, and a restaurant management system.",
    image: "/images/project.png",
    accent: "#F472B6",
    link: "#",
  },
  {
    id: 6,
    title: "HealthPlus Medical",
    category: "Web App",
    tags: ["HIPAA", "Secure", "Cloud"],
    description: "Comprehensive healthcare management system with patient portals, appointment scheduling, and telemedicine capabilities.",
    image: "/images/hero.png",
    accent: "#A855F7",
    link: "#",
  },
  {
    id: 7,
    title: "EduNext LMS",
    category: "Web App",
    tags: ["React", "Node.js", "AI"],
    description: "AI-enhanced learning management system with role-based access, live classes, analytics dashboards, and gamified learning paths.",
    image: "/images/project.png",
    accent: "#06B6D4",
    link: "#",
  },
  {
    id: 8,
    title: "RetailPro ERP",
    category: "ERP/CRM",
    tags: ["ERP", "CRM", "API"],
    description: "Custom enterprise resource planning system unifying sales, inventory, HR, and finance for a fast-growing retail chain.",
    image: "/images/aboutus.png",
    accent: "#10B981",
    link: "#",
  },
  {
    id: 9,
    title: "ShopZone E-Commerce",
    category: "E-Commerce",
    tags: ["Shopify", "UI/UX", "SEO"],
    description: "High-converting e-commerce store with optimized product pages, custom checkout experience, and integrated analytics.",
    image: "/images/project.png",
    accent: "#F472B6",
    link: "#",
  },
];

export default function OurWorks() {
  return (
    <div className="bg-[#050711]">

      {/* ===== PAGE HERO ===== */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#050711]">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="orb orb-violet w-[500px] h-[500px] top-0 right-0 opacity-30 blur-[120px]" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 left-0 opacity-20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full">
          <div className="flex justify-center mb-6">
            <span className="section-badge">Our Portfolio</span>
          </div>
          <h1 className="font-[Outfit] font-black text-5xl lg:text-7xl text-white leading-tight mb-6">
            Projects That <span className="text-gradient">Speak</span><br />For Themselves
          </h1>
          <p className="section-desc max-w-2xl mx-auto mb-10">
            Explore our portfolio of innovative digital solutions showcasing our expertise across web development, AI, e-commerce, and enterprise systems.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { value: "10+", label: "Projects" },
              { value: "5+", label: "Clients" },
              { value: "3+", label: "Industries" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="stat-number text-4xl font-black">{s.value}</p>
                <p className="text-slate-400 text-sm font-[Outfit]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FILTERS + PROJECTS GRID ===== */}
      <section className="relative py-20 bg-[#0A0F1E] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Projects List — full width, one per row */}
          <div className="flex flex-col gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`group glass-card-hover card-shine rounded-2xl overflow-hidden flex flex-col md:items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ borderLeft: `3px solid ${project.accent}66` }}
              >
                {/* Image — alternating sides on desktop */}
                <div className="group/image relative md:w-80 lg:w-[600px] flex-shrink-0 h-56 md:h-[360px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-all duration-[10s] ease-in-out group-hover/image:object-bottom"
                  />
                  <div
                    className="absolute inset-0 hidden md:block"
                    style={{ background: `linear-gradient(to ${idx % 2 === 0 ? 'right' : 'left'}, transparent 70%, #0A0F1E 100%)` }}
                  />
                  {/* Number badge */}
                  <div
                    className={`absolute top-4 ${idx % 2 === 0 ? 'left-4' : 'right-4'} w-10 h-10 rounded-full flex items-center justify-center font-[Outfit] font-black text-white text-sm`}
                    style={{ background: project.accent + '55', border: `1.5px solid ${project.accent}99` }}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content — right side */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  {/* Category + Tags row */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-[Outfit] font-bold text-white"
                      style={{ background: project.accent + '33', border: `1px solid ${project.accent}66` }}
                    >
                      {project.category}
                    </span>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full font-[Outfit]"
                        style={{ background: project.accent + '14', color: project.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3
                    className="font-[Outfit] font-black text-2xl md:text-3xl text-white mb-3 group-hover:text-violet-300 transition-colors"
                  >
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed font-[Inter] mb-6">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-4">
                    {project.link && project.link !== "#" ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-[Outfit] font-semibold transition-all hover:opacity-80"
                        style={{ color: project.accent }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Details
                        <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    ) : (
                      <span
                        className="flex items-center gap-2 text-sm font-[Outfit] font-semibold opacity-40 cursor-not-allowed"
                        style={{ color: project.accent }}
                      >
                        Coming Soon
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-20 bg-[#050711] overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.12) 0%, rgba(6,182,212,0.08) 100%)' }} />
        <div className="absolute inset-0 hero-grid opacity-20" />

        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-[Outfit] font-black text-4xl md:text-5xl text-white mb-5">
            Ready to Be Our <span className="text-gradient">Next Project?</span>
          </h2>
          <p className="section-desc mb-10">
            Join 50+ satisfied clients. Let's discuss your project and create something remarkable together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base px-8 py-4">
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline text-base px-8 py-4">
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
