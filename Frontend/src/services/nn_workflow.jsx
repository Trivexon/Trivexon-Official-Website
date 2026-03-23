import React from "react";
import ServicePage from "./ServicePage";
import { RefreshCw, Zap, Settings, Globe, Database, Mail, BarChart2, Shield, Link2, Bot } from "lucide-react";

export default function N8n() {
  return (
    <ServicePage
      badge="N8N Workflow Automation"
      title='Connect Every App. <span class="text-gradient">Automate Every Process.</span>'
      description="We build powerful n8n automation workflows that connect all your business tools — eliminating manual data entry, syncing systems, and orchestrating complex multi-step processes automatically."
      accentColor="#10B981"
      heroIcon={<RefreshCw className="w-full h-full" />}
      stats={[
        { value: "500+", label: "App Integrations" },
        { value: "80%", label: "Manual Work Reduced" },
        { value: "Self", label: "Hosted & Private" },
      ]}
      overview={{
        heading: 'Workflow Automation <span class="text-gradient">Without Limits</span>',
        paragraphs: [
          "n8n is the most powerful open-source workflow automation tool available — and we're experts at it. Unlike Zapier or Make, n8n can be self-hosted for full data control, handles complex logic, and has no per-task pricing.",
          "We design, build, and deploy n8n workflows that connect your CRM, email, databases, spreadsheets, payment systems, and custom APIs into seamless automated pipelines.",
        ],
      }}
      benefits={[
        "Self-hosted for complete data privacy and security",
        "No per-task fees — unlimited automation runs",
        "Complex conditional logic and error handling",
        "Connect 500+ apps out of the box with custom nodes available",
        "AI-powered steps with GPT-4 integration inside workflows",
        "Visual workflow editor — your team can maintain it after delivery",
      ]}
      features={[
        { icon: Link2, title: "500+ App Integrations", desc: "Native connections to Slack, Gmail, HubSpot, Shopify, Airtable, Google Sheets, and hundreds more.", color: "#10B981" },
        { icon: Database, title: "Database Sync", desc: "Keep data in sync across multiple databases, spreadsheets, and CRM systems automatically.", color: "#7C3AED" },
        { icon: Mail, title: "Email Automation", desc: "Triggered email sequences, newsletter automation, and multi-step follow-up campaigns.", color: "#06B6D4" },
        { icon: Bot, title: "AI-Enhanced Flows", desc: "Add GPT-4 steps to classify, summarise, generate content, or make decisions inside workflows.", color: "#FBBF24" },
        { icon: Zap, title: "Webhook Triggers", desc: "Instantly trigger workflows from form submissions, payment events, or any HTTP webhook.", color: "#F472B6" },
        { icon: BarChart2, title: "Reporting Automation", desc: "Auto-generate performance reports, pull data from multiple sources, and email to stakeholders.", color: "#EF4444" },
        { icon: Settings, title: "Custom Nodes", desc: "Build custom n8n nodes for APIs that don't have native integrations yet.", color: "#A855F7" },
        { icon: Globe, title: "Lead Routing", desc: "Automatically route, qualify, and assign inbound leads from forms, ads, and website to your CRM.", color: "#F59E0B" },
        { icon: Shield, title: "Self-Hosted Security", desc: "Deploy n8n on your own server so sensitive business data never leaves your infrastructure.", color: "#10B981" },
      ]}
      process={[
        { title: "Workflow Mapping", desc: "Document your current manual processes, tools used, and automation goals." },
        { title: "Architecture Design", desc: "Design the n8n flow structure — triggers, steps, conditions, error handling, and outputs." },
        { title: "n8n Setup", desc: "Deploy and configure n8n on your preferred server (self-hosted or cloud)." },
        { title: "Workflow Build", desc: "Build and test each workflow node-by-node with real data from your systems." },
        { title: "Integration & Testing", desc: "Connect to all your APIs, test edge cases, and add error handling and retry logic." },
        { title: "Handoff & Training", desc: "Document every workflow and train your team to monitor and adjust them independently." },
      ]}
      techStack={[
        { icon: "🔀", name: "n8n", tag: "Automation" },
        { icon: "🐳", name: "Docker", tag: "Deployment" },
        { icon: "☁️", name: "VPS / Cloud", tag: "Hosting" },
        { icon: "🔌", name: "REST APIs", tag: "Integration" },
        { icon: "📊", name: "Google Sheets", tag: "Data" },
        { icon: "🧠", name: "GPT-4o", tag: "AI" },
        { icon: "📧", name: "SMTP / Gmail", tag: "Email" },
        { icon: "🗃️", name: "Postgres / MySQL", tag: "Database" },
      ]}
      faq={[
        { q: "Why n8n instead of Zapier or Make?", a: "n8n can be self-hosted for data privacy, has no per-task fees, handles complex logic, and is far more flexible for technical workflows." },
        { q: "Do we need our own server to use n8n?", a: "You can self-host on any VPS (DigitalOcean, AWS, etc.) or use n8n's cloud. We recommend self-hosting for full control." },
        { q: "Can n8n connect to our custom in-house systems?", a: "Yes — if your system has an API, we can connect it to n8n. We also build custom nodes for APIs not natively supported." },
        { q: "Can our team manage the workflows after delivery?", a: "Yes — n8n has a visual editor and we provide full documentation and training so your team can modify workflows independently." },
      ]}
    />
  );
}
