import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheckCircle } from "react-icons/md";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function About() {
  return (
    <div className="bg-white">
      {/* Header Section */}
      <section
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: `url('/images/about-banner.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-6">About Us</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              Serving Aura{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                Delivering Impact
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              We are a team of passionate digital experts dedicated to helping
              businesses thrive in the modern digital landscape.
            </p>
            <p className="text-gray-700 text-xl font-semibold mt-8">
              We serve not just solutions, but the Aura of success for your
              business.
            </p>
          </div>

          {/* Two Column Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left - Text Content */}
            <div>
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-8 leading-tight">
                Committed to delivering innovative and result-driven solutions
                that help businesses grow, scale, and succeed in the digital
                era.
              </h3>

              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  We are a digital solutions partner with a wealth of experience
                  across industries, helping businesses grow, scale, and thrive.
                  Our expert guidance and innovative strategies unlock your
                  brand's potential, deliver measurable results, and ensure
                  lasting success in today's competitive market.
                </p>

                <p className="text-gray-600 leading-relaxed">
                  We believe strong client relationships are the foundation for
                  delivering innovative strategies that fuel sustainable growth.
                </p>

                {/* What We Offer */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-[#1a1a1a] mb-4">
                    What We Offer:
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-gray-700 text-xl mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Innovative ideas that bring your brand's vision to life.
                      </span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-gray-700 text-xl mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        Guidance to make confident, growth-focused decisions.
                      </span>
                    </div>
                    <div className="flex gap-3 items-start">
                      <MdCheckCircle className="text-gray-700 text-xl mt-1 flex-shrink-0" />
                      <span className="text-gray-700">
                        100% transparency — no hidden charges, no surprises
                      </span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold px-8 py-4 rounded-full transition-all mt-8">
                  More About Us
                  <FiChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <img
                src="/images/about-office.jpg"
                alt="Office Space"
                className="w-full h-[600px] object-cover rounded-xl"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-[#2a2a2a] text-white p-2 rounded-md text-sm font-bold">
                    S
                  </div>
                  <p className="text-sm font-semibold text-[#1a1a1a]">
                    Serving the right strategies to grow your business aura
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
              Our Core Principles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These fundamental values guide everything we do and shape our
              approach to serving clients
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Principle 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <svg
                    className="w-8 h-8 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10.5 1.5H5.75A2.25 2.25 0 0 0 3.5 3.75v12.5A2.25 2.25 0 0 0 5.75 18.5h8.5a2.25 2.25 0 0 0 2.25-2.25V7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Innovate and learn!
              </h3>
              <p className="text-gray-600">
                We believe investing this way not only can ease risk, it powers
                each fund with a diverse of experienced investment.
              </p>
            </div>

            {/* Principle 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <svg
                    className="w-8 h-8 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <circle cx="10" cy="8" r="2" fill="currentColor" />
                    <path
                      d="M5 15c0-2.76 2.24-5 5-5s5 2.24 5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Create our impact
              </h3>
              <p className="text-gray-600">
                Financial success depends on relying on team of experts with
                in-depth knowledge and massive experience in business.
              </p>
            </div>

            {/* Principle 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-full shadow-md">
                  <svg
                    className="w-8 h-8 text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 2a8 8 0 100 16 8 8 0 000-16z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">
                Invest in relationships
              </h3>
              <p className="text-gray-600">
                We keeping contact with management and spending time on
                location, drive a deep operational understanding.
              </p>
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
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to bring your vision to life and achieve
            extraordinary results.
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
