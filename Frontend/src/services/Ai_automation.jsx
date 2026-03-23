import React from "react";
import ServicePage from "./ServicePage";
import { Bot, Zap, RefreshCw, BarChart2, Mail, MessageSquare, Shield, Database, Settings, Globe } from "lucide-react";

export default function Ai_automation() {
  return (
    <ServicePage
      badge="AI Automation"
      title='Automate Everything. <span class="text-gradient">Scale Without Limits.</span>'
      description="We build intelligent AI automation systems that eliminate repetitive tasks, accelerate workflows, and free your team to focus on what actually moves the needle."
      accentColor="#F59E0B"
      heroIcon={<Bot className="w-full h-full" />}
      stats={[
        { value: "70%", label: "Time Saved on Tasks" },
        { value: "10x", label: "Faster Processing" },
        { value: "24/7", label: "Runs Autonomously" },
      ]}
      overview={{
        heading: 'AI That Works <span class="text-gradient">While You Sleep</span>',
        paragraphs: [
          "Your team shouldn't be doing tasks that a machine can handle. We identify your most time-consuming, repetitive workflows and build AI systems that replace them — completely, reliably, and at scale.",
          "From email triage and lead qualification to document processing and reporting automation, we design end-to-end AI pipelines that plug into your existing tools and run without supervision.",
        ],
      }}
      benefits={[
        "Automated lead qualification and CRM data entry",
        "AI-powered email drafting, sorting, and auto-responses",
        "Document processing and data extraction (OCR + AI)",
        "Automated reporting and KPI dashboards",
        "Social media content scheduling and repurposing",
        "Customer support ticket triage and auto-resolution",
      ]}
      features={[
        { icon: Mail, title: "Email Automation", desc: "AI reads, classifies, drafts responses, and triages your email inbox automatically.", color: "#F59E0B" },
        { icon: MessageSquare, title: "AI Chatbots", desc: "Intelligent chatbots trained on your knowledge base for web, WhatsApp, and Slack.", color: "#7C3AED" },
        { icon: Database, title: "Data Extraction", desc: "OCR + LLM pipelines to extract structured data from PDFs, invoices, contracts, and forms.", color: "#06B6D4" },
        { icon: RefreshCw, title: "Workflow Automation", desc: "Multi-step automation flows connecting your CRM, email, Slack, sheets, and more.", color: "#10B981" },
        { icon: BarChart2, title: "Automated Reporting", desc: "AI-generated weekly reports, summaries, and insights delivered to your inbox.", color: "#F472B6" },
        { icon: Zap, title: "Lead Qualification", desc: "AI scores and qualifies inbound leads, then routes them to the right sales rep.", color: "#EF4444" },
        { icon: Globe, title: "Social Media AI", desc: "Auto-generate, schedule, and repurpose content across LinkedIn, Instagram, and Twitter.", color: "#A855F7" },
        { icon: Settings, title: "Custom AI Pipelines", desc: "End-to-end orchestrated AI workflows with LLM chains, vector search, and actions.", color: "#F59E0B" },
        { icon: Shield, title: "Secure Data Handling", desc: "All automation processes handle your business data with enterprise-grade security.", color: "#10B981" },
      ]}
      process={[
        { title: "Automation Audit", desc: "We map your current workflows and identify the highest-ROI automation opportunities." },
        { title: "Solution Design", desc: "Architecture of AI agents, tools, triggers, and data flows for each automation." },
        { title: "Prototype & Test", desc: "Build a working prototype with real data and validate accuracy before scaling." },
        { title: "Integration", desc: "Connect the automation to your existing tools — CRM, email, Slack, databases, APIs." },
        { title: "Deployment", desc: "Production-grade deployment with error handling, retry logic, and monitoring." },
        { title: "Monitoring & Iteration", desc: "Dashboard to track automation performance and regular updates as your needs evolve." },
      ]}
      techStack={[
        { icon: "🧠", name: "GPT-4o", tag: "LLM" },
        { icon: "🔗", name: "LangChain", tag: "Orchestration" },
        { icon: "🗃️", name: "Pinecone", tag: "Vector DB" },
        { icon: "⚡", name: "Make.com", tag: "Automation" },
        { icon: "🔀", name: "n8n", tag: "Workflow" },
        { icon: "📝", name: "Zapier", tag: "Integration" },
        { icon: "🐍", name: "Python", tag: "Backend" },
        { icon: "🔌", name: "REST APIs", tag: "Integration" },
      ]}
      faq={[
        { q: "What kinds of tasks can AI automation replace?", a: "Any repetitive, rule-based or pattern-matching task: email triage, data entry, report generation, lead scoring, document processing, and review summarisation." },
        { q: "How long does AI automation setup take?", a: "Simple automations (email sorting, chatbot) take 1–2 weeks. Complex multi-step agent pipelines take 4–8 weeks." },
        { q: "Will the AI make mistakes?", a: "All automations include human-review gates for high-stakes decisions. We also build in error detection, alerts, and fallback logic." },
        { q: "Does it integrate with our existing tools?", a: "Yes — we integrate with virtually any tool that has an API: Salesforce, HubSpot, Notion, Google Workspace, Slack, and more." },
      ]}
    />
  );
}
