import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Filter } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Prestige Real Estate",
    category: "Web Development",
    tags: ["WordPress", "SEO", "Responsive"],
    description: "Premium real estate platform delivering luxury digital experiences with strong SEO, fast performance, and lead-generation funnels.",
    image: "/images/project.png",
    accent: "#7C3AED",
    link: "#",
  },
  {
    id: 2,
    title: "Evergreen Power",
    category: "Web Development",
    tags: ["WordPress", "SEO", "Animations"],
    description: "A renewable energy brand with a high-impact digital presence — modern design, performance optimization, and top-ranking SEO.",
    image: "/images/hero.png",
    accent: "#10B981",
    link: "#",
  },
  {
    id: 3,
    title: "TechStart SaaS Platform",
    category: "Web App",
    tags: ["React", "Node.js", "Cloud"],
    description: "Cutting-edge SaaS application with advanced functionality, seamless UX, and scalable architecture built for enterprise clients.",
    image: "/images/project.png",
    accent: "#06B6D4",
    link: "#",
  },
  {
    id: 4,
    title: "Luxury Homes Realty",
    category: "Web App",
    tags: ["Vue.js", "MySQL", "API"],
    description: "Premium property portal with immersive virtual tours, advanced search, and an integrated CRM for high-end real estate transactions.",
    image: "/images/aboutus.png",
    accent: "#FBBF24",
    link: "#",
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

const categories = ["All", "Web Development", "Web App", "E-Commerce", "Mobile App", "ERP/CRM"];

export default function OurWorks() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

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
              { value: "200+", label: "Projects" },
              { value: "50+", label: "Clients" },
              { value: "12+", label: "Industries" },
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

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-[Outfit] font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_4px_16px_rgba(124,58,237,0.4)]'
                    : 'glass-card text-slate-400 hover:text-white hover:border-violet-500/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group glass-card-hover card-shine rounded-2xl overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-80" />

                  {/* Category badge */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-[Outfit] font-semibold text-white"
                    style={{ background: project.accent + '33', border: `1px solid ${project.accent}55` }}
                  >
                    {project.category}
                  </div>

                  {/* Hover link icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-0.5 rounded-full font-[Outfit]"
                        style={{ background: project.accent + '18', color: project.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-[Outfit] font-bold text-lg text-white mb-2 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-[Inter] mb-4">
                    {project.description}
                  </p>

                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm font-[Outfit] font-semibold transition-colors"
                    style={{ color: project.accent }}
                  >
                    View Project
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
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
