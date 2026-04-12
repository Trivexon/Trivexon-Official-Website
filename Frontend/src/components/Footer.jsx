import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowRight, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const footerLinks = {
  company: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Our Clients", to: "/clients" },
    { label: "Projects", to: "/project" },
    { label: "Contact", to: "/contact" },
  ],
  services: [
    { label: "Web Design/Dev", to: "/services/web-design" },
    { label: "AI Automation", to: "/services/ai-automation" },
    { label: "ERP/CRM Dev", to: "/services/erp-crm" },
    { label: "SEO Services", to: "/services/seoservices" },
    { label: "UI/UX Design", to: "/services/ui-ux" },
    { label: "E-Commerce", to: "/services/e-commerce" },
  ],
};

const socials = [
  // { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/trivexon/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/trivexon?igsh=NjlqaXYyb280aDRy", label: "Instagram" },
  // { icon: Github, href: "#", label: "GitHub" },
];

const SimpleFooter = () => {
  return (
    <footer className="relative bg-[#050711] border-t border-[rgba(124,58,237,0.15)] overflow-hidden">
      {/* Background orbs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[rgba(124,58,237,0.06)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[rgba(6,182,212,0.04)] blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-5">
              <img src="/images/logo1.webp" alt="Trivexon" className="h-15 rounded-xl object-contain" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-[Inter]">
              We craft premium digital experiences — from AI-powered automation to stunning web platforms that grow your business.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl border border-[rgba(124,58,237,0.2)] flex items-center justify-center text-slate-400 hover:text-violet-400 hover:border-violet-500 hover:bg-[rgba(124,58,237,0.1)] transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-[Outfit] font-semibold text-white mb-5 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-violet-400 text-sm font-[Inter] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-[Outfit] font-semibold text-white mb-5 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-400 hover:text-violet-400 text-sm font-[Inter] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[Outfit] font-semibold text-white mb-5 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(124,58,237,0.1)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-violet-400" />
                </div>
                <span className="text-slate-400 text-sm font-[Inter]">Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.2)] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-cyan-400" />
                </div>
                <a href="mailto:admin@trivexon.in" className="text-slate-400 hover:text-cyan-400 text-sm font-[Inter] transition-colors">
                  admin@trivexon.in
                </a>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                <a href="tel:+918657181101" className="text-slate-400 hover:text-pink-400 text-sm font-[Inter] transition-colors">
                  +91 86571 81101
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="gradient-divider mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-[Inter]">
            © 2026 <span className="text-violet-400 font-semibold">Trivexon</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-slate-500 font-[Inter]">
            <a href="#" className="hover:text-violet-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;