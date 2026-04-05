import React from "react";
import ServicePage from "./ServicePage";
import { PenTool, Eye, Layers, Users, Smartphone, Zap, BarChart2, RefreshCw, Monitor, Code2 } from "lucide-react";
import SEOHead, { buildServiceSchema } from "../components/SEOHead";
export default function Ui_Ux() {
  return (
    <>
      <SEOHead
        title="UI/UX Design Agency in India — Interfaces That Convert"
        description="Trivexon's UI/UX design team crafts intuitive, beautiful digital interfaces for web, mobile apps, and SaaS platforms. Driven by data, designed for users."
        canonical="/services/ui-ux"
        image="/images/uidesgin.png"
        keywords="UI UX design agency India, UI UX designers Mumbai, web app UI design, mobile app UI design company India, SaaS interface design"
        schema={buildServiceSchema({
          name: "UI/UX Design",
          description: "Professional UI/UX design services for web and mobile applications.",
          url: "/services/ui-ux",
          image: "/images/uidesgin.png",
        })}
      />
      <ServicePage
      badge="UI/UX Design"
      title='Interfaces That <span class="text-gradient">Delight Users & Drive Results</span>'
      description="We design beautiful, intuitive, and conversion-focused digital interfaces — from mobile apps and web platforms to SaaS dashboards and design systems."
      accentColor="#06B6D4"
      heroImage="/images/uidesgin.png"
      heroIcon={<PenTool className="w-full h-full" />}
      stats={[
        { value: "150+", label: "Designs Delivered" },
        { value: "4.9★", label: "Client Rating" },
        { value: "35%", label: "Avg. Conversion Lift" },
      ]}
      overview={{
        heading: 'Design That <span class="text-gradient">Converts & Retains</span>',
        paragraphs: [
          "Great UI/UX design is invisible — users don't notice great design, they just feel how easy and pleasant the experience is. Our design team crafts interfaces that guide users effortlessly from entry to conversion.",
          "We cover the full design lifecycle: from user research and information architecture to high-fidelity prototypes, design systems, and developer handoff files.",
        ],
      }}
      benefits={[
        "User research and persona development",
        "Information architecture and user flow mapping",
        "Wireframes and low-fidelity mockups for early validation",
        "High-fidelity Figma designs with micro-interactions",
        "Responsive designs for web, tablet, and mobile",
        "Design system and component library creation",
      ]}
      features={[
        { icon: Eye, title: "UX Research", desc: "User interviews, heatmap analysis, and competitor benchmarking to ground design in real insight.", color: "#06B6D4" },
        { icon: Layers, title: "Wireframing", desc: "Rapid low-fidelity wireframes to validate information architecture before full design.", color: "#7C3AED" },
        { icon: PenTool, title: "Visual Design", desc: "Stunning, brand-aligned high-fidelity designs in Figma with pixel-perfect attention to detail.", color: "#F472B6" },
        { icon: Zap, title: "Micro-Interactions", desc: "Subtle animations and transitions that make interfaces feel alive and premium.", color: "#FBBF24" },
        { icon: Smartphone, title: "Mobile-First Design", desc: "Every interface designed for mobile first and scaled up for tablet and desktop.", color: "#10B981" },
        { icon: BarChart2, title: "Design System", desc: "Scalable component libraries and design tokens that keep your product consistent as it grows.", color: "#A855F7" },
        { icon: Users, title: "Usability Testing", desc: "Real-user testing sessions to identify friction points and validate design decisions.", color: "#EF4444" },
        { icon: Monitor, title: "Dashboard Design", desc: "Complex data-heavy dashboards made intuitive — KPIs, charts, and tables designed for clarity.", color: "#F59E0B" },
        { icon: Code2, title: "Developer Handoff", desc: "Complete Figma files with specs, assets, and tokens ready for smooth developer implementation.", color: "#06B6D4" },
      ]}
      process={[
        { title: "Discovery & Research", desc: "User personas, competitor analysis, heuristic evaluation, and goal definition." },
        { title: "Information Architecture", desc: "Sitemap creation, user flow diagrams, and navigation structure planning." },
        { title: "Wireframing", desc: "Low-fidelity wireframes reviewed and approved before moving to visual design." },
        { title: "Visual Design", desc: "High-fidelity Figma designs with full colour, typography, and component details." },
        { title: "Prototyping", desc: "Interactive Figma prototypes for stakeholder demos and usability testing." },
        { title: "Handoff & Support", desc: "Developer-ready Figma files with specs, and design support during development." },
      ]}
      techStack={[
        { icon: "🎯", name: "Figma", tag: "Design" },
        { icon: "📐", name: "Adobe XD", tag: "Design" },
        { icon: "✏️", name: "Sketch", tag: "Design" },
        { icon: "🎨", name: "Illustrator", tag: "Visual" },
        { icon: "🔥", name: "Hotjar", tag: "Research" },
        { icon: "📊", name: "Maze", tag: "Testing" },
        { icon: "🖥️", name: "Framer", tag: "Prototype" },
        { icon: "🧩", name: "Lottie", tag: "Animation" },
      ]}
      faq={[
        { q: "What's the difference between UI and UX design?", a: "UX (User Experience) is about how the product works and flows. UI (User Interface) is about how it looks. We do both — from research and flows to styled, interactive designs." },
        { q: "Do you do user research and testing?", a: "Yes — research is foundational to everything we do. We conduct user interviews, persona development, and usability testing before and during design." },
        { q: "Do you create design systems?", a: "Yes, we build full design systems in Figma including typography, colour tokens, component libraries, and usage guidelines." },
        { q: "Can you design for SaaS applications?", a: "Absolutely — complex SaaS dashboard design is one of our specialities. We've designed multi-role, data-heavy platforms for B2B clients." },
      ]}
    />
    </>
  );
}
