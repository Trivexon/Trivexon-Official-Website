import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheckCircle, MdStar } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Clients() {
  const clients = [
    {
      name: "TechCorp",
      industry: "Technology",
      testimonial: "Outstanding work! They delivered exactly what we needed on time and within budget.",
      rating: 5,
      logo: "/images/logo1.png"
    },
    {
      name: "Global Solutions",
      industry: "Consulting",
      testimonial: "Professional team with excellent communication. Highly recommend their services.",
      rating: 5,
      logo: "/images/logo3.png"
    },
    {
      name: "InnovateNow",
      industry: "Startups",
      testimonial: "They transformed our idea into a beautiful, functional product. Amazing experience!",
      rating: 5,
      logo: "/images/logo6.png"
    },
    {
      name: "Enterprise Plus",
      industry: "Enterprise",
      testimonial: "Reliable, efficient, and innovative. They've become our trusted technology partner.",
      rating: 5,
      logo: "/images/logo1.png"
    },
    {
      name: "Digital Ventures",
      industry: "E-Commerce",
      testimonial: "Their expertise in e-commerce solutions helped us grow our online business significantly.",
      rating: 5,
      logo: "/images/logo3.png"
    },
    {
      name: "Creative Agency",
      industry: "Marketing",
      testimonial: "Beautiful designs and seamless development. They understand our brand perfectly.",
      rating: 5,
      logo: "/images/logo6.png"
    }
  ];

  const stats = [
    {
      number: "150+",
      label: "Satisfied Clients",
      icon: <IoIosPeople className="w-10 h-10" />
    },
    {
      number: "200+",
      label: "Projects Completed",
      icon: <MdCheckCircle className="w-10 h-10" />
    },
    {
      number: "98%",
      label: "Client Retention Rate",
      icon: <MdStar className="w-10 h-10" />
    },
    {
      number: "4.9/5",
      label: "Average Rating",
      icon: <MdStar className="w-10 h-10" />
    }
  ];

  const industries = [
    "Technology", "E-Commerce", "Healthcare", "Finance", "Education",
    "Real Estate", "Entertainment", "Manufacturing", "Retail", "Startups"
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
          <h1 className="text-5xl font-bold text-white mb-6">Our Clients</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">Our Clients</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              Brands That{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                Trust Us
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              We're proud to work with amazing clients across various industries.
              Their success is our success, and we're committed to delivering
              exceptional results for every project.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl text-center"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <h3 className="text-5xl font-bold text-[#1a1a1a] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto object-contain"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#1a1a1a]">
                      {client.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{client.industry}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(client.rating)].map((_, i) => (
                    <MdStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed italic">
                  "{client.testimonial}"
                </p>
              </div>
            ))}
          </div>

          {/* Industries Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Industries We Serve
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We work with clients across various industries, delivering tailored solutions
                that meet industry-specific requirements
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow"
                >
                  <span className="text-gray-700 font-semibold">{industry}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why Clients Choose Us */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Why Clients Choose Us
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Our Commitment
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Transparent communication throughout the project
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      On-time delivery and budget adherence
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Quality assurance and testing at every stage
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Ongoing support and maintenance
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Client Benefits
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Expert team with diverse skill sets
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Modern technologies and best practices
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Scalable solutions that grow with your business
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Long-term partnership and collaboration
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
              Ready to Become Our Next Success Story?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our growing list of satisfied clients and experience the difference
              quality makes.
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
            Join Our Growing List of Happy Clients
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's work together to achieve your business goals and create something amazing.
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

