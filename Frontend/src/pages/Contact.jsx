import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, Clock, MessageSquare, Zap, CheckCircle } from 'lucide-react';
import SEOHead, { buildBreadcrumbSchema } from '../components/SEOHead';

const contactInfo = [
  {
    icon: MapPin,
    label: "Main Office",
    value: "Borivali West, Mumbai – 400066, Maharashtra, India",
    color: "#7C3AED",
    href: "https://www.google.com/maps/place/Borivali+West,+Mumbai,+Maharashtra+400092/@19.2306,72.8545,15z",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "admin@trivexon.in",
    color: "#06B6D4",
    href: "mailto:admin@trivexon.in",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 8655685272",
    value2: "+91 8657181101",
    color: "#F472B6",
    href: "tel:+918655685272",
    href2: "tel:+918657181101",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sun: 10:00 AM – 7:00 PM IST",
    color: "#FBBF24",
    href: null,
  },
];

const services = [
  "Web Design / Development",
  "AI Automation",
  "ERP / CRM Development",
  "SEO Services",
  "UI / UX Design",
  "E-Commerce Website",
  "WordPress Development",
  "AI Agent",
  "N8N Workflow",
  "Other",
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most websites are delivered in 2–6 weeks depending on complexity. Enterprise apps typically take 2–4 months.",
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes! We offer a free 30-minute discovery call to understand your project and provide a no-obligation quote.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Absolutely. All our packages include free maintenance for the first 3 months, with ongoing support plans available.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("company", form.company);
    formData.append("service", form.service);
    formData.append("message", form.message);

    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbyLRUkUsCYcSCSnn66TCwwIrsgMnnfaebNzHENyhdyI1S0DNwuP4Lxk0duz8wXfFA-cAg/exec";
      
      await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required to avoid CORS errors with Google redirect
      });
      
      setSubmitted(true);
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#050711]">
      <SEOHead
        title="Contact Trivexon — Get a Free Quote from Our Mumbai Agency"
        description="Contact Trivexon for web design, AI automation, ERP/CRM, SEO and more. Based in Mumbai. Free 30-min consultation, quotes within 48 hours. Call +91 8655685272."
        canonical="/contact"
        keywords="contact Trivexon, web design agency contact Mumbai, hire AI developer India, get website quote Mumbai, free consultation web agency"
        schema={buildBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ])}
      />

      {/* ===== PAGE HERO ===== */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-[#050711]">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="orb orb-violet w-[500px] h-[500px] top-0 left-0 opacity-30 blur-[120px]" />
        <div className="orb orb-cyan w-[400px] h-[400px] bottom-0 right-0 opacity-20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full text-center">
          <div className="flex justify-center mb-6">
            <span className="section-badge">
              <MessageSquare className="w-3.5 h-3.5" />
              Get In Touch
            </span>
          </div>
          <h1 className="font-[Outfit] font-black text-5xl lg:text-7xl text-white leading-tight mb-6">
            Let's Build Something<br />
            <span className="text-gradient">Great Together</span>
          </h1>
          <p className="section-desc max-w-2xl mx-auto mb-8">
            Have a project in mind? We'd love to hear about it. Drop us a message and we'll get back to you within 24 hours.
          </p>
          <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 rounded-full text-sm font-[Outfit] text-slate-300">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Typically responds within 2–4 hours
          </div>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="relative py-14 bg-[#0A0F1E]">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((item, i) => (
              <div key={i} className="group glass-card-hover card-shine rounded-2xl p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: item.color + '18', border: `1px solid ${item.color}33` }}
                >
                  <item.icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <p className="text-slate-500 text-xs font-[Outfit] uppercase tracking-widest mb-1">{item.label}</p>
                {item.href ? (
                  <div className="flex flex-col gap-1">
                    <a
                      href={item.href}
                      className="text-slate-200 text-sm font-[Inter] leading-relaxed hover:text-violet-400 transition-colors"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                    >
                      {item.value}
                    </a>
                    {item.href2 && (
                      <a
                        href={item.href2}
                        className="text-slate-200 text-sm font-[Inter] leading-relaxed hover:text-violet-400 transition-colors"
                        target={item.href2.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                      >
                        {item.value2}
                      </a>
                    )}
                  </div>
                ) : (
                  <p className="text-slate-200 text-sm font-[Inter] leading-relaxed">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTACT SECTION ===== */}
      <section className="relative py-20 bg-[#050711] overflow-hidden">
        <div className="absolute inset-0 dots-bg opacity-15" />
        <div className="orb orb-violet w-[400px] h-[400px] bottom-0 left-1/4 opacity-15 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Left Panel */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Why work with us */}
              <div className="glass-card rounded-2xl p-7 border border-[rgba(124,58,237,0.15)]">
                <h3 className="font-[Outfit] font-bold text-white text-xl mb-5">
                  Why Work With <span className="text-gradient">Trivexon?</span>
                </h3>
                <ul className="space-y-3">
                  {[
                    "Free 30-min strategy consultation",
                    "Detailed project proposal within 48h",
                    "Fixed-price quotes — no surprises",
                    "Dedicated project manager assigned",
                    "Post-launch support included",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm font-[Inter]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick response */}
              <div
                className="rounded-2xl p-7 relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.25) 0%, rgba(6,182,212,0.15) 100%)', border: '1px solid rgba(124,58,237,0.25)' }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-violet-500/10 blur-2xl" />
                <Zap className="w-8 h-8 text-yellow-400 mb-3" />
                <h4 className="font-[Outfit] font-bold text-white text-lg mb-2">Quick Response</h4>
                <p className="text-slate-300 text-sm font-[Inter] leading-relaxed">
                  We take every inquiry seriously. Expect a detailed response from our team within 2–4 business hours.
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex">
                    {["VM", "RS", "PS"].map((a, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-[#050711] flex items-center justify-center font-[Outfit] font-bold text-xs text-white -ml-2 first:ml-0"
                        style={{ background: ['#7C3AED', '#06B6D4', '#F472B6'][i] }}
                      >
                        {a}
                      </div>
                    ))}
                  </div>
                  <span className="text-slate-400 text-xs font-[Inter]">Our team is ready to help</span>
                </div>
              </div>

              {/* FAQ */}
              <div className="glass-card rounded-2xl p-7 border border-[rgba(124,58,237,0.15)]">
                <h4 className="font-[Outfit] font-bold text-white text-base mb-5">Quick FAQs</h4>
                <div className="space-y-3">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 hover:bg-[rgba(124,58,237,0.06)] transition-colors"
                      >
                        <span className="text-slate-200 text-sm font-[Outfit] font-medium">{faq.q}</span>
                        <span className={`text-violet-400 font-bold text-lg flex-shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                      </button>
                      {openFaq === i && (
                        <div className="px-4 pb-3">
                          <p className="text-slate-400 text-xs font-[Inter] leading-relaxed">{faq.a}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-3xl p-8 md:p-10 border border-[rgba(124,58,237,0.15)]">
                {!submitted ? (
                  <>
                    <h2 className="font-[Outfit] font-black text-2xl text-white mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-slate-400 text-sm font-[Inter] mb-8">
                      Fill in the form below and we'll get back to you with a free quote and strategy.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name + Email */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-[Outfit] font-semibold text-slate-400 uppercase tracking-widest block mb-2">Your Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Vivek Maurya"
                            className="w-full rounded-xl px-4 py-3.5 text-sm font-[Inter] text-white placeholder-slate-600 outline-none transition-all duration-200"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                            }}
                            onFocus={e => { e.target.style.borderColor = 'rgba(124,58,237,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-[Outfit] font-semibold text-slate-400 uppercase tracking-widest block mb-2">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@company.com"
                            className="w-full rounded-xl px-4 py-3.5 text-sm font-[Inter] text-white placeholder-slate-600 outline-none transition-all duration-200"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                            }}
                            onFocus={e => { e.target.style.borderColor = 'rgba(124,58,237,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                          />
                        </div>
                      </div>

                      {/* Phone + Company */}
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs font-[Outfit] font-semibold text-slate-400 uppercase tracking-widest block mb-2">Phone Number</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full rounded-xl px-4 py-3.5 text-sm font-[Inter] text-white placeholder-slate-600 outline-none transition-all duration-200"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                            }}
                            onFocus={e => { e.target.style.borderColor = 'rgba(124,58,237,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-[Outfit] font-semibold text-slate-400 uppercase tracking-widest block mb-2">Company Name</label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Your Company Ltd."
                            className="w-full rounded-xl px-4 py-3.5 text-sm font-[Inter] text-white placeholder-slate-600 outline-none transition-all duration-200"
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                            }}
                            onFocus={e => { e.target.style.borderColor = 'rgba(124,58,237,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                            onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                          />
                        </div>
                      </div>

                      {/* Service dropdown */}
                      <div>
                        <label className="text-xs font-[Outfit] font-semibold text-slate-400 uppercase tracking-widest block mb-2">Service Interested In</label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full rounded-xl px-4 py-3.5 text-sm font-[Inter] text-white outline-none transition-all duration-200 appearance-none cursor-pointer"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                            color: form.service ? 'white' : '#64748b',
                          }}
                          onFocus={e => { e.target.style.borderColor = 'rgba(124,58,237,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                        >
                          <option value="" disabled style={{ background: '#0A0F1E', color: '#64748b' }}>Select a service...</option>
                          {services.map(s => (
                            <option key={s} value={s} style={{ background: '#0A0F1E', color: 'white' }}>{s}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="text-xs font-[Outfit] font-semibold text-slate-400 uppercase tracking-widest block mb-2">Your Message *</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project, goals, timeline, and budget..."
                          className="w-full rounded-xl px-4 py-3.5 text-sm font-[Inter] text-white placeholder-slate-600 outline-none resize-none transition-all duration-200"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                          onFocus={e => { e.target.style.borderColor = 'rgba(124,58,237,0.6)'; e.target.style.boxShadow = '0 0 0 3px rgba(124,58,237,0.12)'; }}
                          onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; e.target.style.boxShadow = 'none'; }}
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`btn-primary w-full justify-center text-base py-4 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        {!isSubmitting && <Send className="w-5 h-5" />}
                      </button>

                      <p className="text-center text-slate-600 text-xs font-[Inter]">
                        We respect your privacy. No spam, ever.
                      </p>
                    </form>
                  </>
                ) : (
                  /* Success State */
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-[rgba(16,185,129,0.15)] border border-[rgba(16,185,129,0.3)] flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="font-[Outfit] font-black text-2xl text-white mb-3">Message Sent! 🎉</h3>
                    <p className="text-slate-400 font-[Inter] text-sm leading-relaxed max-w-sm mx-auto mb-8">
                      Thank you for reaching out! Our team will review your message and get back to you within 2–4 business hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' }); }}
                      className="btn-outline text-sm px-6 py-3"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP / LOCATION ===== */}
      <section className="relative py-20 bg-[#0A0F1E] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[Outfit] font-bold text-3xl text-white mb-2">
              Find Us On <span className="text-gradient">The Map</span>
            </h2>
            <p className="text-slate-400 text-sm font-[Inter]"> Borivali (West), Mumbai, Maharashtra, India</p>
          </div>

          <div className="rounded-3xl overflow-hidden neon-border p-1">
            <iframe
              title="Trivexon Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.4!2d72.8544!3d19.2307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0ffd11b60d7%3A0x76af39fe89e17bbd!2sBorivali+West%2C+Mumbai%2C+Maharashtra+400092!5e0!3m2!1sen!2sin!4v1711000000001"
              width="100%"
              height="380"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;