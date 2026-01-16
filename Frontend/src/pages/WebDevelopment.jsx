import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheckCircle, MdWeb, MdCode, MdSpeed, MdSecurity, MdDevices, MdDesignServices } from "react-icons/md";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function WebDevelopment() {
  const services = [
    {
      icon: <MdWeb className="w-10 h-10" />,
      title: "Custom Web Development",
      description: "Tailored websites built to meet your specific business needs and requirements.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <MdCode className="w-10 h-10" />,
      title: "E-Commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and more.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MdDesignServices className="w-10 h-10" />,
      title: "Responsive Design",
      description: "Mobile-first designs that look perfect on all devices and screen sizes.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <MdSpeed className="w-10 h-10" />,
      title: "Performance Optimization",
      description: "Fast-loading websites optimized for speed, SEO, and user experience.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <MdSecurity className="w-10 h-10" />,
      title: "Secure Development",
      description: "Security-first approach with regular updates and best practices.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <MdDevices className="w-10 h-10" />,
      title: "CMS Integration",
      description: "Easy-to-manage content management systems for non-technical users.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const technologies = [
    {
      category: "Frontend",
      items: ["React", "Vue.js", "Angular", "Next.js", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Backend",
      items: ["Node.js", "PHP", "Python", "Ruby on Rails", "Laravel", "Express.js"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"]
    },
    {
      category: "E-Commerce",
      items: ["WooCommerce", "Shopify", "Magento", "Custom Solutions"]
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
          <h1 className="text-5xl font-bold text-white mb-6">Web Development</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">Web Development</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              Modern Websites &{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                Portals
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              We build powerful, scalable, and user-friendly websites that help your
              business grow online. From simple landing pages to complex web applications,
              we've got you covered.
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

          {/* Technologies Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Technologies We Use
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We work with the latest technologies and frameworks to deliver modern, scalable solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-[#1a1a1a] mb-4">
                    {tech.category}
                  </h4>
                  <ul className="space-y-2">
                    {tech.items.map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-center">
                        <MdCheckCircle className="text-green-600 text-lg flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Our Development Approach
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  What We Deliver
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Fully responsive websites that work on all devices
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Fast-loading, SEO-optimized websites
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Secure, scalable, and maintainable code
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Complete documentation and training
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl">
                <h4 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                  Why Choose Us
                </h4>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Expert team with years of experience
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
                      On-time delivery and transparent communication
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
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
              Ready to Build Your Website?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a powerful web presence for your business.
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
            Let's Create Something Amazing
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Transform your online presence with a professionally designed and developed website.
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

