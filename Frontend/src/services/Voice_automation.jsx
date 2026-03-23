import React from "react";
import ServicePage from "./ServicePage";
import { Mic, Phone, Bot, Zap, RefreshCw, Shield, BarChart2, Users, Settings, Globe } from "lucide-react";

export default function Voice_automation() {
  return (
    <ServicePage
      badge="Voice & AI Automation"
      title='Automate With Voice AI That <span class="text-gradient">Thinks & Talks</span>'
      description="We build AI-powered voice bots and phone automation systems that handle calls, qualify leads, answer queries, and book appointments — 24/7, without human intervention."
      accentColor="#A855F7"
      heroIcon={<Mic className="w-full h-full" />}
      stats={[
        { value: "70%", label: "Call Cost Reduction" },
        { value: "24/7", label: "Availability" },
        { value: "3min", label: "Avg. Resolution Time" },
      ]}
      overview={{
        heading: 'Voice AI That Handles <span class="text-gradient">Calls So You Don\'t Have To</span>',
        paragraphs: [
          "Modern businesses lose thousands of leads because no one answered the phone or calls went to voicemail. Our voice AI systems handle inbound and outbound calls intelligently — qualifying prospects, booking meetings, and answering FAQs in natural language.",
          "Built on state-of-the-art LLMs and voice synthesis, our systems understand context, handle objections, and escalate complex queries to human agents seamlessly.",
        ],
      }}
      benefits={[
        "AI voice bots that speak naturally in Hindi, English, and regional languages",
        "Inbound call handling — answer, qualify, and route calls automatically",
        "Outbound calling campaigns for lead nurturing and follow-ups",
        "Appointment booking integrated with your calendar",
        "CRM auto-update after every call",
        "Detailed call transcripts and sentiment analysis",
      ]}
      features={[
        { icon: Phone, title: "Inbound Call Handling", desc: "AI agent answers every call, understands intent, and provides accurate responses.", color: "#A855F7" },
        { icon: Bot, title: "Outbound Campaigns", desc: "Automated outbound calling for lead follow-up, surveys, and appointment reminders.", color: "#7C3AED" },
        { icon: Zap, title: "Instant Response", desc: "Sub-second response times with natural conversation flow — no awkward pauses.", color: "#06B6D4" },
        { icon: BarChart2, title: "Call Analytics", desc: "Full call transcripts, sentiment scores, conversion tracking, and performance reports.", color: "#FBBF24" },
        { icon: RefreshCw, title: "CRM Integration", desc: "Auto-log calls, update contact records, and trigger follow-up tasks in your CRM.", color: "#10B981" },
        { icon: Users, title: "Human Escalation", desc: "Intelligent routing to live agents when the AI detects complex queries or frustration.", color: "#F472B6" },
        { icon: Globe, title: "Multi-Language", desc: "Supports Hindi, English, Hinglish, Marathi, Tamil, and more regional languages.", color: "#EF4444" },
        { icon: Settings, title: "Custom Call Flows", desc: "Design complex decision trees and conversation paths specific to your business.", color: "#F59E0B" },
        { icon: Shield, title: "Compliant & Secure", desc: "TRAI-compliant outbound systems with opt-out management and call recording consent.", color: "#A855F7" },
      ]}
      process={[
        { title: "Use Case Definition", desc: "Identify which calls to automate, what outcomes to achieve, and KPIs to measure." },
        { title: "Script & Flow Design", desc: "Map out conversation flows, objection handling, and escalation logic." },
        { title: "AI Model Training", desc: "Fine-tune the LLM on your products, FAQs, and brand voice for accurate responses." },
        { title: "Telephony Integration", desc: "Connect with your existing phone number, IVR, or cloud telephony (Exotel, Twilio)." },
        { title: "Testing & Refinement", desc: "Shadow real calls, analyse gaps, and iterate until the AI performs reliably." },
        { title: "Go Live & Monitor", desc: "Launch with real-time monitoring dashboards and weekly performance reviews." },
      ]}
      techStack={[
        { icon: "🧠", name: "GPT-4o", tag: "LLM" },
        { icon: "🎙️", name: "ElevenLabs", tag: "Voice" },
        { icon: "📞", name: "Twilio", tag: "Telephony" },
        { icon: "📱", name: "Exotel", tag: "India" },
        { icon: "🤖", name: "Retell AI", tag: "Voice AI" },
        { icon: "🔌", name: "REST API", tag: "Integration" },
        { icon: "📊", name: "Analytics", tag: "Reporting" },
        { icon: "🔒", name: "Encryption", tag: "Security" },
      ]}
      faq={[
        { q: "Does the voice bot sound robotic?", a: "No — we use ElevenLabs and similar state-of-the-art voice synthesis that sounds natural and human-like." },
        { q: "Can the bot handle complex conversations?", a: "Yes, modern LLMs handle multi-turn conversations with context memory. We fine-tune them specifically on your business." },
        { q: "Is this compliant with TRAI regulations in India?", a: "Yes, outbound AI calling systems are compliant with TRAI DND and consent requirements." },
        { q: "How long does setup take?", a: "A basic inbound voice bot can be live in 2–3 weeks. Complex multi-flow systems typically take 4–6 weeks." },
      ]}
    />
  );
}
