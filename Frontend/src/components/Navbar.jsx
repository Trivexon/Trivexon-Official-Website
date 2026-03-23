import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown, Monitor, ShoppingCart, Search, Palette,
  Database, Cpu, Globe, Bot, Mic, Workflow, Menu, X
} from 'lucide-react';

const services = [
  { to: "/services/web-design", icon: Monitor, label: "Web Design/Dev", color: "#7C3AED" },
  { to: "/services/e-commerce", icon: ShoppingCart, label: "E-Commerce", color: "#06B6D4" },
  { to: "/services/seoservices", icon: Search, label: "SEO Services", color: "#F472B6" },
  { to: "/services/ui-ux", icon: Palette, label: "UI/UX Design", color: "#FBBF24" },
  { to: "/services/erp-crm", icon: Database, label: "ERP/CRM Dev", color: "#10B981" },
  { to: "/services/ai-automation", icon: Cpu, label: "AI Automation", color: "#A855F7" },
  { to: "/services/wordpress", icon: Globe, label: "WordPress", color: "#06B6D4" },
  { to: "/services/ai-agent", icon: Bot, label: "AI Agent", color: "#F472B6" },
  { to: "/services/voice-automation", icon: Mic, label: "Voice Automation", color: "#10B981" },
  { to: "/services/nn-workflow", icon: Workflow, label: "N8N Workflow", color: "#FBBF24" },
];

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/clients", label: "Clients" },
  { to: "/project", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'backdrop-blur-2xl bg-[#050711]/90 border-b border-[rgba(124,58,237,0.2)] shadow-[0_4px_32px_rgba(124,58,237,0.12)]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <img
                  src="/images/logo.jpeg"
                  alt="Trivexon"
                  className="relative h-12 w-auto rounded-xl object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-sm font-medium font-[Outfit] transition-colors duration-200 group ${
                    isActive(link.to)
                      ? 'text-violet-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center gap-1.5 text-sm font-medium font-[Outfit] text-slate-300 hover:text-white transition-colors duration-200 group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-violet-400' : ''}`} />
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 group-hover:w-full" />
                </button>

                {/* Mega Dropdown */}
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className={`absolute top-full right-0 mt-3 w-[520px] rounded-2xl border border-[rgba(124,58,237,0.2)] bg-[#0A0F1E]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(124,58,237,0.2)] transition-all duration-300 ${
                    servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="p-3">
                    <p className="text-xs font-semibold text-violet-400 uppercase tracking-widest px-3 pt-2 pb-3 font-[Outfit]">Our Services</p>
                    <div className="grid grid-cols-2 gap-1">
                      {services.map((s) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[rgba(124,58,237,0.1)] transition-all duration-200 group/item"
                        >
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: s.color + '22' }}>
                            <s.icon className="w-4 h-4" style={{ color: s.color }} />
                          </div>
                          <span className="text-sm text-slate-300 group-hover/item:text-white font-[Outfit] transition-colors">{s.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative text-sm font-medium font-[Outfit] transition-colors duration-200 group ${
                    isActive(link.to)
                      ? 'text-violet-400'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all duration-300 ${
                    isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}

              {/* CTA Button */}
              <Link to="/contact" className="btn-primary text-sm py-2.5 px-5">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-[rgba(124,58,237,0.2)] text-slate-300 hover:text-white hover:border-violet-500 transition-all"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#050711]/98 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
        <div className={`relative h-full flex flex-col pt-24 px-6 pb-8 overflow-y-auto transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-4 text-lg font-[Outfit] font-semibold border-b border-[rgba(255,255,255,0.06)] transition-colors ${
                isActive(link.to) ? 'text-violet-400' : 'text-slate-200 hover:text-violet-400'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Services */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between py-4 text-lg font-[Outfit] font-semibold text-slate-200 border-b border-[rgba(255,255,255,0.06)]"
          >
            Services
            <ChevronDown className={`w-5 h-5 transition-transform ${mobileServicesOpen ? 'rotate-180 text-violet-400' : ''}`} />
          </button>

          {mobileServicesOpen && (
            <div className="grid grid-cols-2 gap-2 py-4">
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="flex items-center gap-2 p-3 rounded-xl bg-[rgba(124,58,237,0.08)] border border-[rgba(124,58,237,0.15)] text-slate-300 hover:text-white text-sm font-[Outfit]"
                >
                  <s.icon className="w-4 h-4" style={{ color: s.color }} />
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.slice(2).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`py-4 text-lg font-[Outfit] font-semibold border-b border-[rgba(255,255,255,0.06)] transition-colors ${
                isActive(link.to) ? 'text-violet-400' : 'text-slate-200 hover:text-violet-400'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link to="/contact" className="btn-primary mt-6 w-full justify-center">
            Get Started →
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;