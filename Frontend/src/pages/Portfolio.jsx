import React, { useState } from "react";
import { FiChevronRight, FiExternalLink } from "react-icons/fi";
import { MdFilterList } from "react-icons/md";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern e-commerce solution with payment integration and inventory management",
      image: "/images/img-1.png",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "app",
      description: "Secure banking application with biometric authentication and real-time transactions",
      image: "/images/img6.png",
      tags: ["React Native", "iOS", "Android"]
    },
    {
      id: 3,
      title: "Corporate Website",
      category: "web",
      description: "Professional corporate website with CMS integration and responsive design",
      image: "/images/banner-image-8.png",
      tags: ["Next.js", "WordPress", "Tailwind"]
    },
    {
      id: 4,
      title: "Fitness Tracking App",
      category: "app",
      description: "Health and fitness app with activity tracking and social features",
      image: "/images/img-1.png",
      tags: ["Flutter", "Firebase", "iOS"]
    },
    {
      id: 5,
      title: "Restaurant Dashboard",
      category: "design",
      description: "UI/UX design for restaurant management system with analytics dashboard",
      image: "/images/img6.png",
      tags: ["Figma", "UI/UX", "Design System"]
    },
    {
      id: 6,
      title: "SaaS Platform",
      category: "web",
      description: "Cloud-based SaaS platform with subscription management and analytics",
      image: "/images/banner-image-8.png",
      tags: ["Vue.js", "Python", "AWS"]
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "app", name: "App Development" },
    { id: "design", name: "UI/UX Design" }
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
          <h1 className="text-5xl font-bold text-white mb-6">Portfolio</h1>
          <div className="flex items-center gap-3 text-white text-lg">
            <a href="/" className="hover:text-yellow-400">
              Home
            </a>
            <span>/</span>
            <span className="text-yellow-400">Portfolio</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-[1300px] mx-auto">
          {/* Title Section */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1a1a1a] mb-4">
              See Our{" "}
              <span className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg inline-block">
                Recent Projects
              </span>
            </h2>
            <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across web development,
              mobile apps, and UI/UX design.
            </p>
          </div>

          {/* Filter Section */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  filter === cat.id
                    ? "bg-[#1a1a1a] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-[#1a1a1a] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-all">
                      View Project
                      <FiExternalLink size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-5xl font-bold text-[#1a1a1a] mb-2">200+</h3>
                <p className="text-gray-600 text-lg">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-[#1a1a1a] mb-2">150+</h3>
                <p className="text-gray-600 text-lg">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-[#1a1a1a] mb-2">50+</h3>
                <p className="text-gray-600 text-lg">Team Members</p>
              </div>
              <div>
                <h3 className="text-5xl font-bold text-[#1a1a1a] mb-2">10+</h3>
                <p className="text-gray-600 text-lg">Years Experience</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss your idea and create something amazing together.
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
            Let's Create Something Amazing Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Ready to add your project to our portfolio? Let's discuss your ideas.
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

