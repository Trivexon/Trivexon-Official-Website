import React from "react";
import ServicePage from "./ServicePage";
import { Globe, Smartphone, Zap, PenTool, Code2, Shield, Layers, Eye, RefreshCw, Search } from "lucide-react";
import SEOHead, { buildServiceSchema, buildBreadcrumbSchema, buildFaqSchema } from "../components/SEOHead";

export default function WebDesign() {
  const schema = [
    buildServiceSchema({
      name: "Web Design & Development",
      description: "Professional web design and development services in Mumbai. We build high-performance, SEO-optimized, responsive websites and web applications.",
      url: "/services/web-design",
      image: "/images/web.webp",
    }),
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/web-design" },
      { name: "Web Design & Development", path: "/services/web-design" },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Web Design & Development Agency in Mumbai"
        description="Trivexon builds stunning, high-converting websites in Mumbai. React, Next.js, WordPress — SEO-optimized, fast-loading, and mobile-first. Free consultation."
        canonical="/services/web-design"
        image="/images/web.webp"
        keywords="web design agency Mumbai, website development company Mumbai, React developer Mumbai, Next.js agency India, custom website design Mumbai"
        schema={schema[0]}
      />
      <ServicePage
      badge="Web Design & Development"
      title='Stunning Websites That <span class="text-gradient">Convert & Perform</span>'
      description="We design and develop high-performance websites that combine breathtaking aesthetics with conversion-optimised UX — from corporate sites to complex web applications."
      accentColor="#7C3AED"
      heroImage="/images/web.webp"
      heroIcon={<Globe className="w-full h-full" />}
      stats={[
        { value: "200+", label: "Sites Delivered" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "2x", label: "Avg. Traffic Growth" },
      ]}
      overview={{
        heading: 'Why Choose Trivexon for <span class="text-gradient">Web Design?</span>',
        paragraphs: [
          "Trivexon builds websites that go beyond good looks. Every pixel is crafted with intent — your site will load fast, rank on Google, and guide visitors to take action.",
          "From startups needing their first digital home to enterprises demanding scalable web apps, we deliver full-stack web solutions built on the latest technologies.",
        ],
      }}
      benefits={[
        "Modern, responsive design that works on all devices",
        "SEO-optimized structure built from day one",
        "Performance-first development (90+ Lighthouse scores)",
        "Custom UI/UX tailored to your brand identity",
        "CMS integration for easy self-management",
        "Post-launch support and maintenance",
      ]}
      features={[
        { icon: Smartphone, title: "Responsive Design", desc: "Pixel-perfect layouts for every screen size — mobile, tablet, and desktop.", color: "#7C3AED" },
        { icon: Zap, title: "Lightning Performance", desc: "Fast load times with optimised code, lazy loading, and CDN delivery.", color: "#F472B6" },
        { icon: Search, title: "SEO-Ready Structure", desc: "Semantic HTML, meta tags, schema markup, and Core Web Vitals compliance.", color: "#06B6D4" },
        { icon: PenTool, title: "Custom UI Design", desc: "Bespoke designs crafted in Figma — no templates, no compromises.", color: "#FBBF24" },
        { icon: Code2, title: "Clean Code", desc: "Maintainable, well-documented code built with React, Next.js, or WordPress.", color: "#10B981" },
        { icon: Shield, title: "Secure & Reliable", desc: "SSL, secure forms, sanitised inputs, and GDPR-compliant data practices.", color: "#A855F7" },
        { icon: RefreshCw, title: "Easy Maintenance", desc: "CMS-backed pages so you can update content without touching code.", color: "#F59E0B" },
        { icon: Eye, title: "Conversion Focused", desc: "Clear CTAs, logical user flows, and A/B tested layouts that drive results.", color: "#EF4444" },
        { icon: Layers, title: "Scalable Architecture", desc: "Built to grow with your business — add features, pages, and integrations anytime.", color: "#06B6D4" },
      ]}
      process={[
        { title: "Discovery & Planning", desc: "We gather your goals, audience, and sitemap requirements in a structured brief." },
        { title: "Wireframe & Design", desc: "We create Figma wireframes and high-fidelity designs for your approval." },
        { title: "Development", desc: "Our devs build your site using React/Next.js or WordPress with clean, modular code." },
        { title: "Content Integration", desc: "We populate all pages with your content, images, and media assets." },
        { title: "Testing & QA", desc: "Cross-browser, cross-device testing plus performance and accessibility audits." },
        { title: "Launch & Support", desc: "Go-live with DNS setup, monitoring, and 3 months of free post-launch support." },
      ]}
      techStack={[
        { icon: "⚛️", name: "React", tag: "Frontend" },
        { icon: "▲", name: "Next.js", tag: "Framework" },
        { icon: "📘", name: "TypeScript", tag: "Language" },
        { icon: "🎨", name: "Tailwind CSS", tag: "Styling" },
        { icon: "📝", name: "WordPress", tag: "CMS" },
        { icon: "🎯", name: "Figma", tag: "Design" },
        { icon: "🟢", name: "Node.js", tag: "Backend" },
        { icon: "☁️", name: "Vercel", tag: "Hosting" },
        { icon: "🍃", name: "MongoDB", tag: "Database" },
        { icon: "🔍", name: "GA4", tag: "Analytics" },
        { icon: "🛡️", name: "Cloudflare", tag: "Security" },
        { icon: "📱", name: "PWA", tag: "Mobile" },
      ]}
      faq={[
        { q: "How long does a website take to build?", a: "A standard business website takes 2–4 weeks. Complex web apps or e-commerce platforms typically take 6–12 weeks." },
        { q: "Do you provide website maintenance after launch?", a: "Yes, all our packages include 3 months of free maintenance. We also offer ongoing monthly retainer plans." },
        { q: "Will my website be mobile-friendly?", a: "Absolutely. Every site we build is responsive by default — mobile is always our first consideration." },
        { q: "Can I update the website myself?", a: "Yes! We integrate CMS solutions (WordPress, Sanity, or similar) so you can manage content without needing a developer." },
        { q: "Do you redesign existing websites?", a: "Yes, we love redesign projects. We analyse UX issues, replatform if needed, and deliver a faster, better-converting version." },
      ]}
    />
    </>
  );
}
