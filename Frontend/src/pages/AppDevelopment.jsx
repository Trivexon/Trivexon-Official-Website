import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { MdCheckCircle, MdPhoneAndroid, MdPhoneIphone, MdCode, MdSpeed, MdSecurity, MdStore } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function AppDevelopment() {
  const services = [
    {
      icon: <MdPhoneAndroid className="w-10 h-10" />,
      title: "Android Development",
      description: "Native Android apps built with Kotlin and Java for optimal performance.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MdPhoneIphone className="w-10 h-10" />,
      title: "iOS Development",
      description: "Native iOS apps built with Swift for seamless iPhone and iPad experiences.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <AiOutlineFundProjectionScreen className="w-10 h-10" />,
      title: "Cross-Platform Apps",
      description: "React Native and Flutter apps that work on both Android and iOS.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <MdStore className="w-10 h-10" />,
      title: "App Store Optimization",
      description: "Get your app discovered with professional ASO and launch strategies.",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <MdSpeed className="w-10 h-10" />,
      title: "Performance Optimization",
      description: "Fast, efficient apps optimized for battery life and smooth performance.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <MdSecurity className="w-10 h-10" />,
      title: "Secure Development",
      description: "Security-first approach with data encryption and secure authentication.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  const technologies = [
    {
      platform: "Native Android",
      items: ["Kotlin", "Java", "Android SDK", "Material Design", "Jetpack"]
    },
    {
      platform: "Native iOS",
      items: ["Swift", "Objective-C", "iOS SDK", "SwiftUI", "UIKit"]
    },
    {
      platform: "Cross-Platform",
      items: ["React Native", "Flutter", "Xamarin", "Ionic"]
    },
    {
      platform: "Backend & APIs",
      items: ["REST APIs", "GraphQL", "Firebase", "AWS", "Node.js"]
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
          <h1 className="text-5xl font-bold text-white mb-6">App Development</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">App Development</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              Android &{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                iOS Apps
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              We build powerful, user-friendly mobile applications for Android and iOS platforms.
              From concept to app store, we handle everything to bring your mobile app idea to life.
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
                We use the latest technologies and frameworks to build high-performance mobile applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-[#1a1a1a] mb-4">
                    {tech.platform}
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

          {/* Development Process */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-[#1a1a1a] mb-4">
                Our App Development Process
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
                      Fully functional mobile apps for Android and iOS
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      App store submission and publishing support
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Backend integration and API development
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Ongoing updates, maintenance, and support
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
                      Experienced mobile app development team
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Native and cross-platform expertise
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      User-centered design and testing
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <MdCheckCircle className="text-green-600 text-2xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Transparent communication and regular updates
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
              Ready to Build Your Mobile App?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your app idea and bring it to life on Android and iOS platforms.
            </p>
            <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold px-8 py-4 rounded-full transition-all mx-auto">
              Start Your App Project
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
            Let's Create Your Mobile App
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Transform your idea into a successful mobile application that users will love.
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

