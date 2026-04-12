import React from "react";
import ServicePage from "./ServicePage";
import { Settings, Database, BarChart2, Users, RefreshCw, Shield, Layers, FileText, Zap, Globe } from "lucide-react";
import SEOHead, { buildServiceSchema } from "../components/SEOHead";

export default function Erp_Crm() {
  return (
    <>
      <SEOHead
        title="Custom ERP & CRM Development in Mumbai"
        description="Trivexon builds fully custom ERP and CRM systems for businesses in Mumbai and across India. Inventory, CRM, HR, finance modules — all in one platform."
        canonical="/services/erp-crm"
        image="/images/crm.webp"
        keywords="ERP development Mumbai, CRM software India, custom ERP system, CRM development company Mumbai, enterprise software development India"
        schema={buildServiceSchema({
          name: "Custom ERP & CRM Development",
          description: "Fully custom ERP and CRM systems for Indian businesses. Unify sales, ops, HR, finance and more in one platform.",
          url: "/services/erp-crm",
          image: "/images/crm.webp",
        })}
      />
      <ServicePage
      badge="ERP / CRM Development"
      title='Custom ERP & CRM Systems That <span class="text-gradient">Power Your Operations</span>'
      description="We build tailor-made ERP and CRM solutions that unify your business operations, automate workflows, and give you real-time visibility across every department."
      accentColor="#10B981"
      heroImage="/images/crm.webp"
      heroImageClassName="w-[140%] lg:w-[140%] max-w-none h-[250px] sm:h-[300px] lg:h-[480px] xl:h-[570px] object-contain transition-transform duration-700 translate-x-4 lg:translate-x-8"
      heroIcon={<Settings className="w-full h-full" />}
      stats={[
        { value: "40%", label: "Avg. Efficiency Gain" },
        { value: "30+", label: "ERP/CRM Deployments" },
        { value: "100%", label: "Custom Built" },
      ]}
      overview={{
        heading: 'Enterprise Systems Built <span class="text-gradient">For Your Business</span>',
        paragraphs: [
          "Off-the-shelf ERP and CRM tools rarely fit your exact workflow. We build fully custom solutions from scratch — designed around your processes, your team, and your data.",
          "From sales pipelines and customer management to inventory, HR, finance, and operations dashboards — our enterprise systems connect every part of your business in one place.",
        ],
      }}
      benefits={[
        "Unified platform connecting sales, ops, HR, and finance",
        "Custom modules built around your exact workflows",
        "Role-based access control for teams of any size",
        "Real-time dashboards and business intelligence",
        "Third-party API integrations (Tally, Shopify, QuickBooks, etc.)",
        "Cloud-hosted with enterprise-grade security",
      ]}
      features={[
        { icon: Database, title: "Inventory Management", desc: "Real-time stock tracking, reorder alerts, warehouse management, and supplier coordination.", color: "#10B981" },
        { icon: Users, title: "CRM & Lead Tracking", desc: "Pipeline management, lead scoring, customer profiles, follow-up automation, and deal tracking.", color: "#7C3AED" },
        { icon: BarChart2, title: "Business Intelligence", desc: "Custom KPI dashboards, executive reports, trend analysis, and data exports.", color: "#06B6D4" },
        { icon: FileText, title: "Invoicing & Finance", desc: "GST invoicing, payment tracking, expense management, and financial reporting modules.", color: "#FBBF24" },
        { icon: RefreshCw, title: "Workflow Automation", desc: "Automated approvals, notifications, task assignments, and inter-department triggers.", color: "#F472B6" },
        { icon: Shield, title: "Role-Based Access", desc: "Granular user permissions so every team member sees exactly what they need.", color: "#EF4444" },
        { icon: Layers, title: "HR & Payroll", desc: "Employee records, attendance, leave management, appraisals, and payroll processing.", color: "#A855F7" },
        { icon: Globe, title: "Multi-Branch Support", desc: "Centralised data management across multiple locations, cities, or countries.", color: "#F59E0B" },
        { icon: Zap, title: "API Integrations", desc: "Connect with Tally, QuickBooks, Shopify, payment gateways, and third-party tools.", color: "#10B981" },
      ]}
      process={[
        { title: "Business Analysis", desc: "Deep-dive into your existing processes, pain points, and automation opportunities." },
        { title: "System Architecture", desc: "Database design, module planning, and technology stack selection for your scale." },
        { title: "UI/UX Design", desc: "Intuitive dashboards and forms designed for your team's daily workflow." },
        { title: "Development", desc: "Iterative builds with weekly demos so you can provide feedback at every stage." },
        { title: "Data Migration", desc: "Secure migration of existing data from spreadsheets, legacy systems, or other tools." },
        { title: "Training & Deployment", desc: "Staff training, go-live support, and ongoing maintenance from our dedicated team." },
      ]}
      techStack={[
        { icon: "⚛️", name: "React", tag: "Frontend" },
        { icon: "🟢", name: "Node.js", tag: "Backend" },
        { icon: "🍃", name: "MongoDB", tag: "Database" },
        { icon: "🐘", name: "PostgreSQL", tag: "Database" },
        { icon: "🔴", name: "Redis", tag: "Cache" },
        { icon: "☁️", name: "AWS", tag: "Cloud" },
        { icon: "🐳", name: "Docker", tag: "Infra" },
        { icon: "🔌", name: "REST API", tag: "Integration" },
      ]}
      faq={[
        { q: "How long does a custom ERP take to build?", a: "A core ERP with 5–8 modules typically takes 3–5 months. Larger enterprise systems may take 6–12 months depending on complexity." },
        { q: "Can you integrate with our existing tools like Tally or QuickBooks?", a: "Yes, we build API integrations with accounting tools, payment gateways, e-commerce platforms, and other third-party software." },
        { q: "Is the system cloud-based or can we host it ourselves?", a: "Both options are available. We can host it on AWS/Azure/GCP or provide a self-hosted version for your own servers." },
        { q: "Will staff need training to use the system?", a: "We provide full onboarding training, video documentation, and an admin guide. The UI is designed to be intuitive for non-technical users." },
      ]}
    />
    </>
  );
}
