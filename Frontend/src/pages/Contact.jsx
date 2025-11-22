import React, { useState } from "react";
import { FiChevronRight, FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { MdEmail, MdPhone, MdLocationOn, MdSend } from "react-icons/md";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MdEmail className="w-8 h-8" />,
      title: "Email Us",
      info: "info@skillnexora.com",
      subInfo: "We'll reply within 24 hours",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <MdPhone className="w-8 h-8" />,
      title: "Call Us",
      info: "+1 (555) 123-4567",
      subInfo: "Mon to Fri 9am to 6pm",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MdLocationOn className="w-8 h-8" />,
      title: "Visit Us",
      info: "123 Business Street",
      subInfo: "New York, NY 10001, USA",
      color: "bg-purple-100 text-purple-600"
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
          <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              Let's Talk About{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                Your Project
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Have a question or want to discuss your project? We're here to help!
              Get in touch with us and let's bring your ideas to life.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
              >
                <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  {info.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-700 text-lg font-semibold mb-2">
                  {info.info}
                </p>
                <p className="text-gray-500 text-sm">
                  {info.subInfo}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left - Form */}
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
                Send Us a Message
              </h3>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1a1a1a] focus:outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1a1a1a] focus:outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1a1a1a] focus:outline-none transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#1a1a1a] focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a1a1a] hover:bg-[#333333] text-white font-semibold px-8 py-4 rounded-full transition-all flex items-center justify-center gap-2"
                >
                  Send Message
                  <MdSend size={20} />
                </button>
              </form>
            </div>

            {/* Right - Info */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 mb-8">
                <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
                  Why Contact Us?
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 items-start">
                    <FiChevronRight className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Free consultation to discuss your project
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <FiChevronRight className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Quick response within 24 hours
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <FiChevronRight className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Custom quotes tailored to your needs
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <FiChevronRight className="text-blue-600 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">
                      Expert advice and recommendations
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                  Business Hours
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-semibold">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section Placeholder */}
          <div className="bg-gray-200 rounded-2xl h-96 mb-20 flex items-center justify-center">
            <div className="text-center">
              <MdLocationOn className="text-gray-400 text-6xl mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Map would be integrated here</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-[1300px] mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together.
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

