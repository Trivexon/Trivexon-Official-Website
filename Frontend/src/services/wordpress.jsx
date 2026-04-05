import React from "react";
import ServicePage from "./ServicePage";
import { Globe, Settings, Shield, Zap, RefreshCw, PenTool, Code2, Search, Smartphone, Layers } from "lucide-react";

export default function Wordpress() {
  return (
    <ServicePage
      badge="WordPress Development"
      title='Powerful WordPress Sites <span class="text-gradient">Without the Limitations</span>'
      description="We build fast, secure, and fully customised WordPress websites — from simple marketing sites to complex multi-site networks — with clean code and no bloated plugins."
      accentColor="#FBBF24"
      heroImage="/images/wordpress.png"
      heroIcon={<Globe className="w-full h-full" />}
      stats={[
        { value: "80+", label: "WP Sites Built" },
        { value: "90+", label: "Avg. PageSpeed" },
        { value: "0", label: "Bloated Plugins" },
      ]}
      overview={{
        heading: 'WordPress Done <span class="text-gradient">The Right Way</span>',
        paragraphs: [
          "WordPress powers 43% of the internet — but most agencies leave you with slow, insecure sites packed with unnecessary plugins. We take a custom-first approach: lean, fast, and built exactly for your needs.",
          "From custom Gutenberg blocks to Advanced Custom Fields implementations, REST API integrations, and headless WordPress (Next.js frontend), we handle every tier of WordPress complexity.",
        ],
      }}
      benefits={[
        "Custom WordPress theme — no generic templates",
        "Advanced Custom Fields (ACF) for flexible content",
        "Optimised for 90+ Google PageSpeed scores",
        "Hardened security configuration from day one",
        "Easy-to-use admin panel your team can manage independently",
        "WooCommerce integration for selling on WordPress",
      ]}
      features={[
        { icon: PenTool, title: "Custom Themes", desc: "Fully bespoke WordPress themes built from scratch in Figma and coded by hand.", color: "#FBBF24" },
        { icon: Layers, title: "Custom Blocks", desc: "Gutenberg block development for flexible, easy-to-edit page layouts.", color: "#7C3AED" },
        { icon: Zap, title: "Performance Optimisation", desc: "Caching, lazy loading, image optimisation, and CDN setup for blazing speeds.", color: "#06B6D4" },
        { icon: Shield, title: "Security Hardening", desc: "Login protection, malware scanning, firewall, and regular security updates.", color: "#10B981" },
        { icon: Settings, title: "Plugin Development", desc: "Custom WordPress plugins for unique functionality that off-the-shelf plugins can't deliver.", color: "#F472B6" },
        { icon: Code2, title: "REST API & Headless", desc: "WordPress as a headless CMS powering React or Next.js frontends via GraphQL/REST.", color: "#A855F7" },
        { icon: Search, title: "Yoast / RankMath SEO", desc: "Full SEO configuration, XML sitemaps, schema markup, and meta setup.", color: "#EF4444" },
        { icon: Smartphone, title: "Mobile-First Design", desc: "Responsive layouts tested across all screen sizes and browsers.", color: "#F59E0B" },
        { icon: RefreshCw, title: "Multisite Networks", desc: "WordPress Multisite setup for agencies, universities, and multi-brand organisations.", color: "#FBBF24" },
      ]}
      process={[
        { title: "Discovery", desc: "Goals, content structure, plugin requirements, and tech decisions defined upfront." },
        { title: "Design", desc: "Custom Figma designs for all key templates — homepage, blog, inner pages." },
        { title: "Theme Development", desc: "Handcoded PHP/HTML5/CSS3 theme with ACF, Gutenberg blocks, and CPTs." },
        { title: "Plugin Setup", desc: "Only the necessary, trusted plugins — configured and optimised properly." },
        { title: "Performance & Security", desc: "Caching layer, image CDN, security hardening, and speed testing." },
        { title: "Launch & Support", desc: "Managed hosting setup, DNS, SSL, and ongoing maintenance plans." },
      ]}
      techStack={[
        { icon: "📝", name: "WordPress", tag: "CMS" },
        { icon: "🐘", name: "PHP", tag: "Backend" },
        { icon: "🎨", name: "CSS3", tag: "Styling" },
        { icon: "⚡", name: "ACF Pro", tag: "Fields" },
        { icon: "🔍", name: "Yoast", tag: "SEO" },
        { icon: "🛒", name: "WooCommerce", tag: "Shop" },
        { icon: "☁️", name: "Cloudflare", tag: "CDN" },
        { icon: "🔒", name: "Wordfence", tag: "Security" },
      ]}
      faq={[
        { q: "Can you redesign our existing WordPress site?", a: "Yes! We specialise in WordPress redesigns — migrating content, improving performance, and modernising the design without downtime." },
        { q: "Will we be able to manage the site ourselves?", a: "Absolutely. We build the admin panel to be intuitive and provide training so your team can make updates independently." },
        { q: "Do you use page builders like Elementor?", a: "We avoid heavy page builders for performance reasons. We build custom Gutenberg blocks instead — much faster and cleaner." },
        { q: "Do you handle WordPress hosting?", a: "Yes, we can set up and manage hosting on WP Engine, Cloudways, or SiteGround, and handle all server configurations." },
      ]}
    />
  );
}
