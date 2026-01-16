import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";
import { FaHeart, FaBullseye, FaHandshake, FaLightbulb, FaUsers, FaAward } from "react-icons/fa";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Values() {
  const values = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Integrity First",
      description: "We believe in transparency, honesty, and ethical business practices in everything we do.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <FaBullseye className="w-8 h-8" />,
      title: "Excellence Driven",
      description: "We strive for perfection in every project, pushing boundaries to deliver exceptional results.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Client Partnership",
      description: "Your success is our success. We build lasting relationships based on trust and mutual growth.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to stay ahead of the curve.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Great ideas come from great teams. We foster a culture of collaboration and respect.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "We never compromise on quality. Every deliverable meets the highest standards.",
      color: "bg-indigo-100 text-indigo-600"
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
          <h1 className="text-5xl font-bold text-white mb-6">Our Values</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">Our Values</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              What Guides Our{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                Company Vision
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Our core values are the foundation of everything we do. They shape our decisions,
              guide our actions, and define who we are as a company.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Values in Action Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Values in Action
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These values aren't just words on a wall—they're principles we live by every day
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-[#1a1a1a] mb-4">
                  How We Work
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Transparent communication at every step
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Ethical practices and fair pricing
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Continuous learning and improvement
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-[#1a1a1a] mb-4">
                  What You Can Expect
                </h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Honest feedback and recommendations
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Solutions tailored to your needs
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Long-term partnership and support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
              Share Our Values?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              If our values resonate with you, let's work together to achieve great things.
            </p>
            <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold px-8 py-4 rounded-full transition-all mx-auto">
              Let's Connect
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
            Ready to Partner with Us?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience our values in action and see how we can help your business grow.
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

