import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import AboutSection from "../components/AboutSection";
import HowItWorks from "../components/howitwork";
import WorkProcess from "../components/WorkProcess";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";
import Testimonials from "../components/Testimonials";


export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <AboutSection />
      <HowItWorks />
      <WorkProcess/>
      <ServicesSection />
      <WhyChooseUs/>
      <FAQSection/>
      <Testimonials/>
      <Footer />
    </div>
  );
}
