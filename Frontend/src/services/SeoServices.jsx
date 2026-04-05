import React from "react";
import ServicePage from "./ServicePage";
import { Search, BarChart2, TrendingUp, Link2, FileText, Globe, MapPin, Zap, Eye, RefreshCw } from "lucide-react";

export default function SeoServices() {
  return (
    <ServicePage
      badge="SEO Services"
      title='Rank Higher. <span class="text-gradient">Get Found. Grow Faster.</span>'
      description="Data-driven SEO strategies that move your website to the top of Google, drive qualified organic traffic, and deliver measurable ROI — not just rankings."
      accentColor="#06B6D4"
      heroImage="/images/seo.png"
      heroImageClassName="w-[140%] lg:w-[140%] max-w-none h-[250px] sm:h-[300px] lg:h-[480px] xl:h-[570px] object-contain transition-transform duration-700 translate-x-4 lg:translate-x-8"
      heroIcon={<Search className="w-full h-full" />}
      stats={[
        { value: "3x", label: "Avg. Traffic Increase" },
        { value: "Top 3", label: "Google Ranking" },
        { value: "6mo", label: "Avg. Time to Results" },
      ]}
      overview={{
        heading: 'SEO That Drives <span class="text-gradient">Real Business Growth</span>',
        paragraphs: [
          "Search Engine Optimisation is no longer optional — it's the backbone of sustainable digital growth. We build long-term SEO strategies that compound over time and deliver qualified leads month after month.",
          "From technical site audits and on-page optimisation to authority link building and local SEO, our team handles every dimension of your search presence.",
        ],
      }}
      benefits={[
        "Comprehensive technical SEO audit and fix",
        "Keyword research aligned with buyer intent",
        "On-page content optimisation for every key page",
        "High-authority backlink building campaigns",
        "Local SEO for Google Maps and local pack rankings",
        "Monthly performance reports with clear KPIs",
      ]}
      features={[
        { icon: BarChart2, title: "Keyword Research", desc: "Deep-dive analysis to find high-value, low-competition keywords your buyers are actually searching.", color: "#06B6D4" },
        { icon: FileText, title: "On-Page Optimisation", desc: "Title tags, meta descriptions, headings, schema markup, and internal linking done right.", color: "#7C3AED" },
        { icon: Link2, title: "Link Building", desc: "White-hat authority building through PR, guest posts, and digital partnerships.", color: "#10B981" },
        { icon: Zap, title: "Technical SEO", desc: "Site speed, Core Web Vitals, crawlability, indexation, and structured data fixes.", color: "#F472B6" },
        { icon: MapPin, title: "Local SEO", desc: "Google Business Profile optimisation, local citations, and map pack ranking strategies.", color: "#FBBF24" },
        { icon: Globe, title: "International SEO", desc: "hreflang, geo-targeting, and multi-language content strategies for global reach.", color: "#A855F7" },
        { icon: TrendingUp, title: "Content Strategy", desc: "Blog and landing page content plans aligned to search intent and the buyer journey.", color: "#EF4444" },
        { icon: Eye, title: "Competitor Analysis", desc: "Gap analysis to understand what your top competitors are doing and how to outrank them.", color: "#F59E0B" },
        { icon: RefreshCw, title: "Ongoing Monitoring", desc: "Continuous rank tracking, traffic analysis, and algorithm update responses.", color: "#06B6D4" },
      ]}
      process={[
        { title: "SEO Audit", desc: "Full technical, on-page, and off-page audit to identify gaps and opportunities." },
        { title: "Strategy Development", desc: "Custom SEO roadmap prioritised by impact and aligned to your business goals." },
        { title: "On-Page Optimisation", desc: "Content, meta tags, schema, internal links, and page structure improvements." },
        { title: "Technical Fixes", desc: "Speed, Core Web Vitals, crawl issues, structured data, and site architecture." },
        { title: "Content & Link Building", desc: "Publishing authority content and earning high-quality backlinks at scale." },
        { title: "Track & Iterate", desc: "Monthly reporting with rank tracking, traffic data, and strategy refinements." },
      ]}
      techStack={[
        { icon: "🔍", name: "Ahrefs", tag: "Research" },
        { icon: "📊", name: "SEMrush", tag: "Analytics" },
        { icon: "📈", name: "Google Analytics", tag: "Tracking" },
        { icon: "🔎", name: "Search Console", tag: "GSC" },
        { icon: "🕷️", name: "Screaming Frog", tag: "Crawl" },
        { icon: "⚡", name: "PageSpeed", tag: "Perf" },
        { icon: "📍", name: "GMB", tag: "Local" },
        { icon: "📝", name: "Surfer SEO", tag: "Content" },
      ]}
      faq={[
        { q: "How long does SEO take to show results?", a: "Most clients see meaningful improvements within 3–6 months. Competitive niches may take 6–12 months for top-3 rankings." },
        { q: "Do you guarantee #1 rankings on Google?", a: "No ethical SEO agency can guarantee specific rankings. We do guarantee consistent progress, transparent reporting, and white-hat practices." },
        { q: "What's included in monthly SEO retainers?", a: "Content creation, link building, technical maintenance, rank tracking, and a detailed monthly performance report." },
        { q: "Do you work on local SEO only?", a: "We handle local, national, and international SEO — whichever is right for your business goals." },
      ]}
    />
  );
}
