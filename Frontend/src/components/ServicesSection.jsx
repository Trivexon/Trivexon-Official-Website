import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, ShoppingCart, Search, Palette, Database, Cpu, Globe, Bot, Mic, Workflow, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: "Web Design/Development",
    description: "Pixel-perfect, blazing-fast websites crafted with modern frameworks. We transform your vision into stunning digital experiences.",
    link: "/services/web-design",
    color: "#7C3AED",
    bg: "rgba(124,58,237,0.1)",
  },
  {
    icon: Cpu,
    title: "AI Automation",
    description: "Intelligent automation solutions that streamline your workflows, reduce manual work, and supercharge your team's productivity.",
    link: "/services/ai-automation",
    color: "#A855F7",
    bg: "rgba(168,85,247,0.1)",
  },
  {
    icon: Database,
    title: "ERP/CRM Development",
    description: "Custom enterprise solutions that unify your operations, boost efficiency, and give you real-time business intelligence.",
    link: "/services/erp-crm",
    color: "#10B981",
    bg: "rgba(16,185,129,0.1)",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Data-driven SEO strategies that dominate search rankings, drive qualified organic traffic, and deliver measurable ROI.",
    link: "/services/seoservices",
    color: "#F472B6",
    bg: "rgba(244,114,182,0.1)",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, delightful interfaces. We craft digital products that users love to use.",
    link: "/services/ui-ux",
    color: "#FBBF24",
    bg: "rgba(251,191,36,0.1)",
  },
  {
    icon: Bot,
    title: "AI Agent Development",
    description: "Custom AI agents that think, learn, and act autonomously — handling complex tasks to accelerate your business growth.",
    link: "/services/ai-agent",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.1)",
  },
  {
    icon: Globe,
    title: "WordPress Development",
    description: "Powerful, scalable WordPress websites with custom themes, plugins, and integrations tailored to your unique needs.",
    link: "/services/wordpress",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.1)",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website",
    description: "High-converting online stores built to sell. From product pages to checkout — we optimize every step of the buyer journey.",
    link: "/services/e-commerce",
    color: "#10B981",
    bg: "rgba(16,185,129,0.1)",
  },
  {
    icon: Workflow,
    title: "N8N Workflow Automation",
    description: "Seamless workflow automation connecting all your apps and services — eliminate repetitive tasks and work smarter.",
    link: "/services/nn-workflow",
    color: "#FBBF24",
    bg: "rgba(251,191,36,0.1)",
  },
];

const ServicesSection = () => {
  return (
    <section className="relative py-24 bg-[#0A0F1E] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="absolute inset-0 dots-bg opacity-20" />
      <div className="orb orb-violet w-[400px] h-[400px] top-0 right-0 opacity-20 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-5">
            <span className="section-badge">What We Do</span>
          </div>
          <h2 className="section-title mb-5">
            Services That <span className="text-gradient">Drive Growth</span>
          </h2>
          <p className="section-desc max-w-2xl mx-auto">
            End-to-end digital solutions crafted to elevate your brand and accelerate your business in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group glass-card-hover card-shine rounded-2xl p-7 block"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: service.bg, border: `1px solid ${service.color}33` }}
              >
                <service.icon className="w-6 h-6" style={{ color: service.color }} />
              </div>

              {/* Content */}
              <h3 className="font-[Outfit] font-bold text-lg text-white mb-3 group-hover:text-violet-300 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 font-[Inter]">
                {service.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-2 text-sm font-[Outfit] font-semibold transition-colors duration-200" style={{ color: service.color }}>
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link to="/contact" className="btn-primary text-base">
            Discuss Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
