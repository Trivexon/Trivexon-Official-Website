import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheckCircle, MdDesignServices, MdPalette, MdSmartphone, MdComputer, MdTouchApp } from "react-icons/md";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function UIDesign() {
  const services = [
    {
      icon: <MdPalette className="w-10 h-10" />,
      title: "User Interface Design",
      description: "Beautiful, intuitive interfaces that engage users and enhance their experience.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: <MdTouchApp className="w-10 h-10" />,
      title: "User Experience Design",
      description: "User-centered design that focuses on creating seamless, enjoyable interactions.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <MdSmartphone className="w-10 h-10" />,
      title: "Mobile App Design",
      description: "Native and cross-platform mobile designs that work beautifully on all devices.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <MdComputer className="w-10 h-10" />,
      title: "Web Design",
      description: "Responsive web designs that look stunning on desktop, tablet, and mobile.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MdDesignServices className="w-10 h-10" />,
      title: "Design Systems",
      description: "Comprehensive design systems and style guides for consistent brand experience.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <MdTouchApp className="w-10 h-10" />,
      title: "Prototyping",
      description: "Interactive prototypes that bring your ideas to life before development.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Understanding your users, business goals, and market landscape."
    },
    {
      step: "02",
      title: "Wireframing",
      description: "Creating structural layouts that define content hierarchy and functionality."
    },
    {
      step: "03",
      title: "Visual Design",
      description: "Crafting beautiful, on-brand visual designs that users will love."
    },
    {
      step: "04",
      title: "Prototyping",
      description: "Building interactive prototypes to test and refine the user experience."
    },
    {
      step: "05",
      title: "Testing & Iteration",
      description: "User testing and feedback loops to ensure optimal user experience."
    },
    {
      step: "06",
      title: "Handoff",
      description: "Detailed design specifications and assets ready for development."
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url('/images/banner-image-8.png')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-6">UI / UX Design</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">UI / UX Design</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              Interactive &{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                Creative Design
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              We create beautiful, user-friendly designs that not only look great but also
              provide exceptional user experiences. Our designs are intuitive, engaging, and
              conversion-focused.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`${service.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Design Process */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Our Design Process
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A user-centered approach that ensures your design meets both user needs and business goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl relative">
                  <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Deliver */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                What You Get
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Design Deliverables
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      High-fidelity mockups and designs
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Interactive prototypes and wireframes
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Design system and style guide
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      UI components and asset library
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Design Benefits
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Improved user engagement and satisfaction
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Higher conversion rates and better ROI
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Consistent brand experience across platforms
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Reduced development time and costs
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
              Ready to Transform Your Design?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create a design that users love and that drives business results.
            </p>
            <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold px-8 py-4 rounded-full transition-all mx-auto">
              Start Your Project
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Design That Makes a Difference
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us to create designs that users love and that drive business success.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1a1a] font-semibold px-10 py-4 rounded-full transition-all text-lg">
            Get Started Today
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

