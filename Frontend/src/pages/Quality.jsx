import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheckCircle, MdSecurity, MdSpeed, MdVerified, MdSupport } from "react-icons/md";
import { FaShieldAlt, FaCertificate, FaMicroscope } from "react-icons/fa";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Quality() {
  const qualityFeatures = [
    {
      icon: <MdSecurity className="w-10 h-10" />,
      title: "Security First",
      description: "We implement industry-standard security measures to protect your data and applications.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <MdSpeed className="w-10 h-10" />,
      title: "Performance Optimized",
      description: "Every solution is optimized for speed, efficiency, and scalability.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MdVerified className="w-10 h-10" />,
      title: "Rigorous Testing",
      description: "Comprehensive testing at every stage ensures bug-free, reliable products.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <FaCertificate className="w-10 h-10" />,
      title: "Certified Standards",
      description: "We follow international quality standards and best practices.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <FaMicroscope className="w-10 h-10" />,
      title: "Quality Analysis",
      description: "Thorough code reviews and quality audits before every release.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <MdSupport className="w-10 h-10" />,
      title: "Ongoing Support",
      description: "Continuous monitoring and support to maintain quality standards.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "Thorough understanding of project requirements and quality expectations."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Creating detailed plans with quality checkpoints at every stage."
    },
    {
      step: "03",
      title: "Development",
      description: "Writing clean, maintainable code following best practices and standards."
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing including unit, integration, and user acceptance testing."
    },
    {
      step: "05",
      title: "Deployment",
      description: "Careful deployment with monitoring and rollback capabilities."
    },
    {
      step: "06",
      title: "Maintenance",
      description: "Ongoing support, updates, and quality improvements."
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
          <h1 className="text-5xl font-bold text-white mb-6">Quality Assurance</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">Quality Assurance</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              Reliability & Trust{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                Guaranteed
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Quality isn't just a promise—it's our commitment. We ensure every project
              meets the highest standards of excellence, security, and performance.
            </p>
          </div>

          {/* Quality Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {qualityFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quality Assurance Process */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Our Quality Assurance Process
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                A systematic approach to ensure excellence at every stage of development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processes.map((process, index) => (
                <div key={index} className="bg-white p-6 rounded-lg relative">
                  <div className="absolute -top-4 -left-4 bg-[#2a2a2a] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-semibold text-[#1a1a1a] mb-3 mt-4">
                    {process.title}
                  </h4>
                  <p className="text-gray-600">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Standards */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Quality Standards We Follow
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <FaShieldAlt className="text-blue-600 text-4xl" />
                  <h4 className="text-2xl font-bold text-[#1a1a1a]">
                    Security Standards
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">OWASP Top 10 compliance</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Regular security audits</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Data encryption protocols</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Penetration testing</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-6">
                  <MdSpeed className="text-green-600 text-4xl" />
                  <h4 className="text-2xl font-bold text-[#1a1a1a]">
                    Performance Standards
                  </h4>
                </div>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Page load optimization</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Mobile responsiveness</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Cross-browser compatibility</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">SEO best practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
              Experience Quality You Can Trust
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let us deliver solutions that exceed your expectations in quality, security, and performance.
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
            Ready for Quality-Assured Solutions?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us and experience the difference quality makes.
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

