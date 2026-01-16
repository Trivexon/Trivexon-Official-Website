import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheckCircle, MdLightbulb, MdDesignServices, MdCode, MdBugReport, MdRocketLaunch, MdSupport } from "react-icons/md";
import { FaCogs } from "react-icons/fa";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Process() {
  const steps = [
    {
      icon: <MdLightbulb className="w-10 h-10" />,
      step: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements. This phase includes research, strategy, and detailed planning.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <MdDesignServices className="w-10 h-10" />,
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes. We iterate based on your feedback to ensure the perfect user experience.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <MdCode className="w-10 h-10" />,
      step: "03",
      title: "Development",
      description: "We build your solution using modern technologies and best practices. Regular updates and communication keep you informed throughout the process.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MdBugReport className="w-10 h-10" />,
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing ensures quality, performance, and security. We test across devices, browsers, and scenarios to catch issues early.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <MdRocketLaunch className="w-10 h-10" />,
      step: "05",
      title: "Deployment & Launch",
      description: "We handle the deployment process smoothly and ensure everything works perfectly in production. Your project goes live with confidence.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <MdSupport className="w-10 h-10" />,
      step: "06",
      title: "Maintenance & Support",
      description: "After launch, we provide ongoing support, updates, and improvements to keep your solution running smoothly and meeting your evolving needs.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const methodologies = [
    {
      title: "Agile Development",
      description: "We use agile methodologies for flexibility and rapid iterations. Regular sprints keep projects on track and adaptable to changes.",
      icon: "🔄"
    },
    {
      title: "Client Collaboration",
      description: "You're involved every step of the way. Regular meetings, feedback sessions, and transparent communication ensure we build exactly what you need.",
      icon: "🤝"
    },
    {
      title: "Quality Focus",
      description: "Quality is built into every phase. Code reviews, automated testing, and thorough QA ensure we deliver reliable, bug-free solutions.",
      icon: "✓"
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
          <h1 className="text-5xl font-bold text-white mb-6">Development Process</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">Development Process</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              From Idea to{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                Delivery
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Our proven development process ensures your project is delivered on time,
              on budget, and exceeds expectations.
            </p>
          </div>

          {/* Process Steps */}
          <div className="mb-20">
            <div className="space-y-12">
              {steps.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left Side - Content */}
                  <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center`}>
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-gray-400">{item.step}</span>
                        <h3 className="text-3xl font-bold text-[#1a1a1a]">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {item.description}
                    </p>
                    {index < steps.length - 1 && (
                      <div className="mt-8 flex justify-center lg:hidden">
                        <div className="w-1 h-12 bg-gray-300"></div>
                      </div>
                    )}
                  </div>

                  {/* Right Side - Visual */}
                  <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className={`${item.color} p-12 rounded-2xl text-center`}>
                      <div className="text-6xl mb-4">{item.icon}</div>
                      <h4 className="text-2xl font-bold text-[#1a1a1a]">{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Methodologies Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Our Development Methodologies
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Proven approaches that ensure successful project delivery
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodologies.map((method, index) => (
                <div key={index} className="bg-white p-8 rounded-xl">
                  <div className="text-5xl mb-4">{method.icon}</div>
                  <h4 className="text-xl font-bold text-[#1a1a1a] mb-4">
                    {method.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What We Deliver */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                What You Can Expect
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Throughout the Process
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Regular progress updates and demos
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Transparent communication at every stage
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Opportunity to provide feedback and request changes
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Documentation and training materials
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Final Deliverables
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Fully functional, tested solution
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Complete source code and documentation
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Deployment and hosting setup
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Ongoing support and maintenance options
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your idea and see how our proven process can bring it to life.
            </p>
            <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold px-8 py-4 rounded-full transition-all mx-auto">
              Get Started Today
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
            Let's Build Something Amazing Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Our proven process will guide your project from concept to success.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1a1a] font-semibold px-10 py-4 rounded-full transition-all text-lg">
            Start Your Project
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

