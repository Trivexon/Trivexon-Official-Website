import React from "react";
import ServicePage from "./ServicePage";
import { ShoppingCart, CreditCard, Package, BarChart2, Zap, Shield, RefreshCw, Globe, Search, Smartphone } from "lucide-react";
import SEOHead, { buildServiceSchema } from "../components/SEOHead";

export default function E_commerce() {
  return (
    <>
      <SEOHead
        title="E-Commerce Website Development India — Shopify & Custom"
        description="Trivexon builds high-converting e-commerce websites — Shopify, WooCommerce, and custom React storefronts. Razorpay integration, SEO-ready, mobile-first."
        canonical="/services/e-commerce"
        image="/images/ecommercehero.webp"
        keywords="e-commerce website development India, Shopify development Mumbai, WooCommerce development India, online store development, e-commerce agency Mumbai"
        schema={buildServiceSchema({
          name: "E-Commerce Website Development",
          description: "High-converting e-commerce stores built on Shopify, WooCommerce, or custom React. With payment integration, SEO, and mobile-first design.",
          url: "/services/e-commerce",
          image: "/images/ecommercehero.webp",
        })}
      />
      <ServicePage
      badge="E-Commerce Development"
      title='High-Converting Online Stores <span class="text-gradient">Built to Sell</span>'
      description="We design and build e-commerce platforms that turn visitors into buyers — with lightning-fast performance, seamless checkout flows, and smart product management."
      accentColor="#F472B6"
      heroImage="/images/ecommercehero.webp"
      heroIcon={<ShoppingCart className="w-full h-full" />}
      stats={[
        { value: "55+", label: "Stores Built" },
        { value: "3x", label: "Avg. Revenue Growth" },
        { value: "99.9%", label: "Uptime" },
      ]}
      overview={{
        heading: 'E-Commerce That <span class="text-gradient">Actually Sells</span>',
        paragraphs: [
          "A beautiful store that doesn't convert is a missed opportunity. We engineer every detail of your e-commerce experience — from product discovery to checkout — with revenue as the north star.",
          "Whether you need a Shopify store, a custom React storefront, or a WooCommerce setup, we bring deep e-commerce expertise to every project.",
        ],
      }}
      benefits={[
        "Custom storefront design that reflects your brand",
        "Optimised product pages built to maximise conversions",
        "Integrated payment gateways (Razorpay, Stripe, PayPal)",
        "Inventory management with low-stock alerts",
        "Mobile-first design with fast load times",
        "Built-in SEO for product and category pages",
      ]}
      features={[
        { icon: CreditCard, title: "Payment Integration", desc: "Razorpay, Stripe, PayPal, COD, UPI, and EMI options all supported out of the box.", color: "#F472B6" },
        { icon: Package, title: "Inventory System", desc: "Real-time stock management, variant tracking, and automated reorder triggers.", color: "#7C3AED" },
        { icon: Zap, title: "Fast Checkout", desc: "One-page checkout, guest checkout, saved addresses, and cart abandonment recovery.", color: "#06B6D4" },
        { icon: BarChart2, title: "Sales Analytics", desc: "Revenue dashboards, conversion funnels, top products, and customer behaviour reports.", color: "#FBBF24" },
        { icon: Shield, title: "Secure Transactions", desc: "SSL, PCI compliance, fraud detection, and secure customer data handling.", color: "#10B981" },
        { icon: Globe, title: "Multi-Currency Support", desc: "Sell globally with automatic currency conversion and geo-targeted pricing.", color: "#A855F7" },
        { icon: Search, title: "Product SEO", desc: "Schema markup, optimised URLs, meta tags, and sitemap for product discovery.", color: "#EF4444" },
        { icon: Smartphone, title: "Mobile Commerce", desc: "App-like mobile experience with touch-optimised navigation and product galleries.", color: "#F59E0B" },
        { icon: RefreshCw, title: "Returns & Logistics", desc: "Integrated shipping APIs, order tracking, and returns management workflow.", color: "#F472B6" },
      ]}
      process={[
        { title: "Store Strategy", desc: "Product catalogue planning, target audience analysis, and conversion goals definition." },
        { title: "Design & UX", desc: "Homepage, category, product, and checkout page designs optimised for conversion." },
        { title: "Development", desc: "Custom Shopify theme, WooCommerce, or React storefront built to your specification." },
        { title: "Payment & Logistics", desc: "Gateway integration, shipping API setup, tax configuration, and order management." },
        { title: "Testing", desc: "Full end-to-end checkout testing across devices, browsers, and payment methods." },
        { title: "Launch & Scale", desc: "Go-live with marketing pixels, analytics, SEO, and ongoing CRO support." },
      ]}
      techStack={[
        { icon: "🛒", name: "Shopify", tag: "Platform" },
        { icon: "📝", name: "WooCommerce", tag: "Platform" },
        { icon: "⚛️", name: "React", tag: "Custom" },
        { icon: "💳", name: "Razorpay", tag: "Payment" },
        { icon: "🌐", name: "Stripe", tag: "Payment" },
        { icon: "📦", name: "Shiprocket", tag: "Logistics" },
        { icon: "📊", name: "GA4", tag: "Analytics" },
        { icon: "🎯", name: "Meta Pixel", tag: "Ads" },
      ]}
      faq={[
        { q: "Do you build on Shopify or custom platforms?", a: "Both! We build on Shopify, WooCommerce, or fully custom React/Node.js storefronts depending on your needs and scale." },
        { q: "Can you migrate my existing store to a new platform?", a: "Yes, we handle platform migrations including product data, customer records, order history, and SEO URL preservation." },
        { q: "Which payment gateways do you support?", a: "We integrate Razorpay, Stripe, PayPal, PayU, CCAvenue, UPI, and any other gateway available via API." },
        { q: "Will the store work on mobile?", a: "Absolutely — mobile accounts for 70%+ of e-commerce traffic so mobile UX is always our primary focus." },
      ]}
    />
    </>
  );
}
