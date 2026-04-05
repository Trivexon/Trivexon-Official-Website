import React from "react";
import ServicePage from "./ServicePage";
import { Bot, Zap, Globe, BarChart2, RefreshCw, Shield, Database, Code2, MessageSquare, Settings } from "lucide-react";

export default function Ai_agent() {
  return (
    <ServicePage
      badge="AI Agent Development"
      title='Custom AI Agents That <span class="text-gradient">Think, Act & Decide</span>'
      description="We build autonomous AI agents that reason through complex tasks, use tools, access databases, and take actions — going far beyond simple chatbots or rule-based automation."
      accentColor="#7C3AED"
      heroImage="/images/ai agent hero.png"
      heroIcon={<Bot className="w-full h-full" />}
      stats={[
        { value: "10x", label: "Faster Task Completion" },
        { value: "24/7", label: "Fully Autonomous" },
        { value: "90%", label: "Task Accuracy" },
      ]}
      overview={{
        heading: 'AI Agents That <span class="text-gradient">Actually Get Things Done</span>',
        paragraphs: [
          "Traditional chatbots answer questions. AI agents take action. We build multi-step reasoning agents powered by the latest LLMs that can browse the web, query databases, send emails, make API calls, and complete complex objectives with minimal human input.",
          "From research agents and sales development reps to customer support agents and internal ops bots — we design agents tailored to your exact use case and connect them to all your business systems.",
        ],
      }}
      benefits={[
        "Autonomous multi-step task completion without human intervention",
        "Tool-using agents (web search, database query, API calls, email)",
        "Memory and context management across long conversations",
        "Multi-agent orchestration for complex parallel workflows",
        "Fallback to human when uncertain — no hallucinated answers",
        "Full observability — every agent step is logged and auditable",
      ]}
      features={[
        { icon: Bot, title: "Reasoning Agents", desc: "LLM agents that reason step-by-step through complex problems using chain-of-thought.", color: "#7C3AED" },
        { icon: Globe, title: "Web Research Agent", desc: "Autonomous agent that searches the web, reads pages, and synthesises information.", color: "#06B6D4" },
        { icon: MessageSquare, title: "Customer Support Agent", desc: "Resolves 80%+ of support tickets autonomously with access to your knowledge base.", color: "#F472B6" },
        { icon: Database, title: "Data Analyst Agent", desc: "Query your database in plain English and get charts, summaries, and insights instantly.", color: "#FBBF24" },
        { icon: Code2, title: "Code Review Agent", desc: "AI agent that reviews pull requests, suggests improvements, and catches security issues.", color: "#10B981" },
        { icon: Zap, title: "Sales Outreach Agent", desc: "Research prospects, personalise messages, and send outreach campaigns autonomously.", color: "#EF4444" },
        { icon: RefreshCw, title: "Workflow Orchestration", desc: "Multi-agent pipelines where specialised agents collaborate to complete complex tasks.", color: "#A855F7" },
        { icon: Settings, title: "Tool Integration", desc: "Connect agents to CRM, email, calendar, databases, Slack, and custom APIs.", color: "#F59E0B" },
        { icon: Shield, title: "Safe & Observable", desc: "Every agent action is logged with full traceability, rate limits, and human-in-the-loop controls.", color: "#06B6D4" },
      ]}
      process={[
        { title: "Agent Design", desc: "Define the agent's goals, tools, memory requirements, and decision boundaries." },
        { title: "Tool & Context Setup", desc: "Build the toolset (APIs, databases, search, email) the agent will have access to." },
        { title: "Prompt Engineering", desc: "Craft system prompts, reasoning patterns, and example trajectories for accurate behaviour." },
        { title: "Testing & Evaluation", desc: "Run the agent through hundreds of test cases and benchmark accuracy and reliability." },
        { title: "Integration", desc: "Connect the agent to your systems — Slack, CRM, email, or as an API endpoint." },
        { title: "Monitoring", desc: "Real-time dashboard showing agent runs, task outcomes, errors, and human handoffs." },
      ]}
      techStack={[
        { icon: "🧠", name: "GPT-4o", tag: "LLM" },
        { icon: "🤖", name: "Claude 3.5", tag: "LLM" },
        { icon: "🔗", name: "LangGraph", tag: "Agents" },
        { icon: "🗃️", name: "Pinecone", tag: "Memory" },
        { icon: "🐍", name: "Python", tag: "Backend" },
        { icon: "🔀", name: "CrewAI", tag: "Multi-Agent" },
        { icon: "☁️", name: "Supabase", tag: "Database" },
        { icon: "📊", name: "LangSmith", tag: "Observability" },
      ]}
      faq={[
        { q: "What's the difference between an AI agent and a chatbot?", a: "A chatbot responds to questions. An AI agent takes multi-step actions — it can browse, query databases, send emails, and complete complex tasks autonomously." },
        { q: "Can the agent access our internal systems?", a: "Yes — we connect agents to your CRM, databases, email, Slack, or any system with an API, with appropriate security controls." },
        { q: "How do you prevent the agent from making mistakes?", a: "We build confidence thresholds, human-in-the-loop gates for critical actions, retry logic, and full audit trails for every agent run." },
        { q: "What LLMs do you use?", a: "We use GPT-4o, Claude 3.5 Sonnet, or open-source models depending on your latency, cost, and privacy requirements." },
      ]}
    />
  );
}
