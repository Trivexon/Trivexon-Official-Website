import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "MNA Capital",
    category: "Web Application",
    image: "/images/mna.webp",
    link: "https://www.mnacaps.com/",
    accent: "#7C3AED",
  },
  {
    id: 2,
    title: "The Goodwill Facade",
    category: "Web Application",
    image: "/images/goodwill.webp",
    link: "https://www.thegoodwillfacade.com/",
    accent: "#06B6D4",
  },
  {
    id: 3,
    title: "Valuation Automation System",
    category: "Financial Services & Regulatory Compliance",
    image: "/images/valuation.webp",
    link: "/project",
    accent: "#F472B6",
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative py-24 bg-[#0A0F1E] overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="orb orb-cyan w-[400px] h-[400px] top-0 left-0 opacity-15 blur-[130px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div>
            <div className="flex mb-4">
              <span className="section-badge">Our Projects</span>
            </div>
            <h2 className="section-title">
              Work That <span className="text-gradient">Speaks</span>
            </h2>
          </div>
          <Link to="/project" className="btn-outline flex-shrink-0">
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.link}
              className="group glass-card-hover card-shine rounded-2xl overflow-hidden block"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto min-h-full object-cover object-top image-scroll-hover"
                  loading="lazy"
                  decoding="async"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E] via-transparent to-transparent opacity-70" />

                {/* Category badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-[Outfit] font-semibold text-white"
                  style={{ background: project.accent + '33', border: `1px solid ${project.accent}55` }}
                >
                  {project.category}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-[Outfit] font-bold text-lg text-white mb-1 group-hover:text-violet-300 transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 mt-3" style={{ color: project.accent }}>
                  <span className="text-sm font-[Outfit] font-semibold">View Project</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}