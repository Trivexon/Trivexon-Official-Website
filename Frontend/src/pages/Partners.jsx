import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheckCircle, MdHandshake, MdPeople, MdTrendingUp, MdVerified } from "react-icons/md";
import { FaHandshake, FaUsers, FaGlobe, FaRocket } from "react-icons/fa";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Partners() {
  const benefits = [
    {
      icon: <MdTrendingUp className="w-10 h-10" />,
      title: "Mutual Growth",
      description: "We grow together. Our partnerships create win-win opportunities for all parties involved.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MdPeople className="w-10 h-10" />,
      title: "Expanded Network",
      description: "Access to a broader network of expertise, resources, and opportunities.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FaRocket className="w-10 h-10" />,
      title: "Innovation",
      description: "Collaborative innovation brings fresh perspectives and cutting-edge solutions.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <MdVerified className="w-10 h-10" />,
      title: "Trust & Reliability",
      description: "Built on trust, transparency, and shared values. Long-term partnerships that last.",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "We collaborate with leading technology providers to deliver cutting-edge solutions using the best tools and platforms.",
      features: [
        "Access to latest technologies",
        "Technical expertise sharing",
        "Joint development opportunities",
        "Platform certifications"
      ]
    },
    {
      title: "Business Partners",
      description: "Strategic partnerships that help us reach new markets and deliver comprehensive solutions to clients.",
      features: [
        "Market expansion",
        "Referral programs",
        "Co-marketing opportunities",
        "Revenue sharing models"
      ]
    },
    {
      title: "Service Partners",
      description: "Complementary service providers who help us offer end-to-end solutions to our clients.",
      features: [
        "Integrated service offerings",
        "Cross-selling opportunities",
        "Unified client experience",
        "Shared resources"
      ]
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
          <h1 className="text-5xl font-bold text-white mb-6">Partnerships</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">Partnerships</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              Collaborations &{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                Ecosystem
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              We believe in the power of partnerships. Together, we can achieve more,
              innovate faster, and deliver exceptional value to our clients.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
              >
                <div className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Partner Types */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Types of Partnerships
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We partner with organizations across different industries and domains
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200">
                  <div className="flex items-center gap-4 mb-6">
                    <MdHandshake className="text-blue-600 text-4xl" />
                    <h4 className="text-2xl font-bold text-[#1a1a1a]">
                      {type.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Why Partner With Us */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Why Partner With Us?
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Our Strengths
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Proven track record of successful projects
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Expert team with diverse skill sets
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Strong client relationships and trust
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Innovative solutions and modern technologies
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Partnership Benefits
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Collaborative approach to problem-solving
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Flexible partnership models to suit your needs
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Marketing and co-branding opportunities
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Long-term growth and mutual success
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 mb-8">
              <FaHandshake className="text-blue-600 text-6xl mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
                Interested in Partnering With Us?
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
                Let's explore how we can work together to create mutual value and achieve
                greater success. We're always looking for strategic partnerships that align
                with our values and vision.
              </p>
              <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold px-8 py-4 rounded-full transition-all mx-auto">
                Become a Partner
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Let's Build Something Great Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Partner with us and discover the power of collaboration.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-[#1a1a1a] font-semibold px-10 py-4 rounded-full transition-all text-lg">
            Explore Partnership Opportunities
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

