import React from "react";
import SEOHead, { buildBreadcrumbSchema } from "../components/SEOHead";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import AboutSection from "../components/AboutSection";
import HowItWorks from "../components/howitwork";
import WorkProcess from "../components/industry";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import Testimonials from "../components/Testimonials";
import Marq from "../components/Marq";
import PortfolioSection from "../components/PortfolioSection";


export default function Home() {
  return (
    <div>
      <SEOHead
        title="Web Design & AI Automation Agency in Mumbai"
        description="Trivexon is a premium web design, software development & AI automation agency in Mumbai, India. Build high-converting websites, AI agents, ERP/CRM, and SEO solutions."
        canonical="/"
        keywords="web design agency Mumbai, software development company Mumbai, AI automation India, website development Mumbai, digital agency Mumbai"
      />
      <Hero />
      <Marquee />
      <ServicesSection />
      <AboutSection />
      <Marq />
      <PortfolioSection/>
      <HowItWorks />
      <WhyChooseUs/>
      <WorkProcess/>
      
      {/* <FAQSection/> */}
      <Testimonials/>
      {/* <Footer /> */}
    </div>
  );
}
