// import React from "react";
// import { FiChevronRight, FiTrendingUp, FiTarget, FiUsers } from "react-icons/fi";
// import { MdCheckCircle } from "react-icons/md";
// import Footer from "../components/Footer";
// import Testimonials from "../components/Testimonials";

// export default function About() {
//   return (
//     <div className="bg-white">
//       {/* Hero Section with Modern Gradient Overlay */}
//       <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
//         {/* Background with Multiple Layers */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 z-10"></div>
//           <div className="absolute inset-0 bg-[url('/images/about-hero-pattern.svg')] opacity-10 z-20"></div>
//           <img
//             src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
//             alt="Modern Office"
//             className="w-full h-full object-cover object-center transform scale-105"
//           />
//         </div>

//         {/* Animated Shapes */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

//         {/* Hero Content */}
//         <div className="relative z-30 text-center px-6 max-w-6xl mx-auto">
//           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
//             <span className="w-2 h-2 bg-yellow-400 rounded-full animate-ping"></span>
//             <span className="text-white/90 text-sm">Digital Excellence Since 2015</span>
//           </div>
          
//           <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
//             We Build Digital
//             <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
//               Aura for Brands
//             </span>
//           </h1>
          
//           <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-8">
//             Transforming businesses through innovative digital solutions that create lasting impact and sustainable growth.
//           </p>

//           {/* Breadcrumb with Animation */}
//           <div className="flex items-center justify-center gap-3 text-white/80">
//             <a 
//               href="/" 
//               className="hover:text-yellow-400 transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1"
//             >
//               <span>Home</span>
//             </a>
//             <span className="text-yellow-400">/</span>
//             <span className="text-yellow-400 font-semibold">About Us</span>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
//           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
//             <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-bounce"></div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-gradient-to-b from-white to-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {[
//               { number: "250+", label: "Projects Delivered", suffix: "" },
//               { number: "98%", label: "Client Satisfaction", suffix: "" },
//               { number: "50+", label: "Team Experts", suffix: "" },
//               { number: "15", label: "Years Experience", suffix: "" }
//             ].map((stat, index) => (
//               <div key={index} className="text-center group">
//                 <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 group-hover:text-yellow-500 transition-all duration-300">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Main Content Section */}
//       <section className="py-24 px-6 relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-yellow-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
//         <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>

//         <div className="max-w-7xl mx-auto relative z-10">
//           {/* Header */}
//           <div className="text-center mb-20">
//             <div className="inline-block mb-4">
//               <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg shadow-yellow-400/30">
//                 Our Mission & Vision
//               </span>
//             </div>
//             <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
//               Delivering Digital Excellence
//               <span className="block text-gray-700">That Drives Business Growth</span>
//             </h2>
//             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//               We combine strategic thinking with innovative technology to create solutions that not only meet but exceed business objectives.
//             </p>
//           </div>

//           {/* Content Grid */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
//             {/* Left Content */}
//             <div className="space-y-8">
//               <h3 className="text-4xl font-bold text-gray-900 leading-tight">
//                 We're not just service providers; we're your strategic partners in digital transformation.
//               </h3>

//               <div className="space-y-6">
//                 <p className="text-gray-600 text-lg leading-relaxed">
//                   Our team of digital experts brings together years of industry experience and innovative thinking to deliver solutions that drive measurable results.
//                 </p>

//                 <p className="text-gray-600 leading-relaxed">
//                   We believe in building lasting partnerships based on trust, transparency, and shared success.
//                 </p>

//                 {/* Features List */}
//                 <div className="space-y-4 mt-8">
//                   {[
//                     "AI-powered digital solutions",
//                     "Data-driven decision making",
//                     "Agile development methodology",
//                     "24/7 dedicated support",
//                     "Performance-based results",
//                     "Transparent pricing model"
//                   ].map((feature, index) => (
//                     <div key={index} className="flex items-center gap-4 group">
//                       <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
//                         <MdCheckCircle className="text-white text-lg" />
//                       </div>
//                       <span className="text-gray-800 group-hover:text-gray-900 transition-colors">
//                         {feature}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTA Button */}
//                 <button className="group flex items-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 mt-10">
//                   <span>Explore Our Services</span>
//                   <FiChevronRight className="group-hover:translate-x-2 transition-transform" size={20} />
//                 </button>
//               </div>
//             </div>

//             {/* Right - Image with Floating Elements */}
//             <div className="relative">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                 <img
//                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                   alt="Team Collaboration"
//                   className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//               </div>
              
//               {/* Floating Card 1 */}
//               <div className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl max-w-xs animate-float">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-xl flex items-center justify-center">
//                     <FiTrendingUp className="text-white text-2xl" />
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-gray-900">47%</div>
//                     <div className="text-gray-600 text-sm">Average Growth</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Card 2 */}
//               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl max-w-xs animate-float-delayed">
//                 <div className="flex items-center gap-4">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
//                     <FiUsers className="text-white text-2xl" />
//                   </div>
//                   <div>
//                     <div className="text-2xl font-bold text-gray-900">150+</div>
//                     <div className="text-gray-600 text-sm">Happy Clients</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Principles Section */}
//       <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
//         {/* Background Elements */}
//         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400"></div>
        
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">
//               Our Core Principles
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Guiding values that shape our approach and drive our success
//             </p>
//           </div>

//           {/* Principles Grid */}
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: <FiTrendingUp className="w-8 h-8" />,
//                 title: "Innovate Relentlessly",
//                 description: "We embrace cutting-edge technology and creative thinking to deliver solutions that set new standards in digital excellence.",
//                 gradient: "from-yellow-400 to-orange-400",
//                 bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50"
//               },
//               {
//                 icon: <FiTarget className="w-8 h-8" />,
//                 title: "Deliver Impact",
//                 description: "Every project is measured by the tangible value it creates for our clients' businesses and their customers.",
//                 gradient: "from-blue-500 to-purple-600",
//                 bgColor: "bg-gradient-to-br from-blue-50 to-purple-50"
//               },
//               {
//                 icon: <FiUsers className="w-8 h-8" />,
//                 title: "Build Relationships",
//                 description: "We believe in partnerships built on trust, transparency, and shared success for long-term growth.",
//                 gradient: "from-green-500 to-teal-600",
//                 bgColor: "bg-gradient-to-br from-green-50 to-teal-50"
//               }
//             ].map((principle, index) => (
//               <div 
//                 key={index} 
//                 className={`${principle.bgColor} p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer`}
//               >
//                 <div className="flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
//                   <div className={`text-transparent bg-gradient-to-r ${principle.gradient} bg-clip-text`}>
//                     {principle.icon}
//                   </div>
//                 </div>
                
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   {principle.title}
//                 </h3>
                
//                 <p className="text-gray-600 leading-relaxed">
//                   {principle.description}
//                 </p>
                
//                 <div className="mt-8 pt-6 border-t border-white/50">
//                   <div className={`h-1 w-16 bg-gradient-to-r ${principle.gradient} rounded-full transition-all group-hover:w-full duration-500`}></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       {/* <Testimonials /> */}

//       {/* Final CTA Section */}
//       <section className="py-24 px-6 relative overflow-hidden">
//         {/* Animated Background */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
//           <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
//         </div>

//         {/* Floating Elements */}
//         <div className="absolute top-1/4 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

//         <div className="max-w-4xl mx-auto text-center relative z-10">
//           <h2 className="text-5xl font-bold text-white mb-8">
//             Ready to Transform Your Digital Presence?
//           </h2>
          
//           <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
//             Let's collaborate to create digital experiences that drive growth, engage customers, and deliver measurable results.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//             <button className="group bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-gray-900 font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 text-lg flex items-center gap-3">
//               <span>Start Your Journey</span>
//               <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
//             </button>
            
//             <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 text-lg">
//               Book a Consultation
//             </button>
//           </div>
          
//           {/* Stats Footer */}
//           <div className="mt-20 pt-12 border-t border-white/10">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { value: "24/7", label: "Support" },
//                 { value: "30 Days", label: "Delivery" },
//                 { value: "100%", label: "Satisfaction" },
//                 { value: "1 Year", label: "Warranty" }
//               ].map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
//                   <div className="text-gray-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Add custom animations to Tailwind config */}
//       <style jsx>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0px); }
//           50% { transform: translateY(-20px); }
//         }
//         .animate-float {
//           animation: float 6s ease-in-out infinite;
//         }
//         .animate-float-delayed {
//           animation: float 6s ease-in-out infinite 1.5s;
//         }
//       `}</style>

//       <Footer />
//     </div>
//   );
// }


import React from "react";
import { FiChevronRight, FiUsers, FiTarget, FiAward, FiGlobe } from "react-icons/fi";
import { MdOutlineRocketLaunch, MdOutlineLightbulb, MdOutlineHandshake } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Leading Digital Agency Since 2010</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              We Transform
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Ideas Into Digital
              </span>
              Success Stories
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              We are a full-service digital agency crafting innovative solutions that drive growth, 
              enhance brand presence, and deliver measurable results for businesses worldwide.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 hover:shadow-xl hover:scale-105">
                <span>Our Services</span>
                <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40">
                Meet Our Team
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm py-6">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "12+", label: "Years Experience" },
                  { number: "500+", label: "Projects Completed" },
                  { number: "150+", label: "Happy Clients" },
                  { number: "98%", label: "Client Retention" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Our Team Collaboration"
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-cyan-500 text-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold">12+</div>
                  <div className="text-sm font-medium">Years of Excellence</div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4">
                <div className="w-12 h-[2px] bg-blue-600"></div>
                <span>OUR JOURNEY</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Humble Beginnings to Digital Pioneers
              </h2>
              
              <p className="text-gray-600 mb-6 text-lg">
                Founded in 2010, we started as a small team of passionate developers and marketers 
                with a vision to revolutionize how businesses connect with their digital audience.
              </p>
              
              <p className="text-gray-600 mb-8">
                Today, we've grown into a full-service digital agency offering comprehensive solutions 
                including web development, digital marketing, SEO, branding, and more. Our evolution 
                mirrors the digital landscape's growth, always staying ahead of trends and technologies.
              </p>

              <div className="space-y-4">
                {[
                  "Founded as a web development startup",
                  "Expanded to digital marketing services",
                  "Launched mobile app development division",
                  "Became a full-service digital agency",
                  "Achieved ISO 9001:2015 certification",
                  "Served 150+ global clients"
                ].map((milestone, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-700">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Offer */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Digital Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MdOutlineRocketLaunch className="w-8 h-8" />,
                title: "Web Development",
                services: ["Custom Websites", "E-commerce Solutions", "Web Applications", "CMS Development"],
                color: "from-blue-500 to-cyan-400"
              },
              {
                icon: <BsGraphUp className="w-8 h-8" />,
                title: "Digital Marketing",
                services: ["SEO", "Social Media Marketing", "PPC Campaigns", "Content Marketing"],
                color: "from-purple-500 to-pink-400"
              },
              {
                icon: <MdOutlineLightbulb className="w-8 h-8" />,
                title: "Branding & Design",
                services: ["Logo Design", "Brand Identity", "UI/UX Design", "Marketing Collaterals"],
                color: "from-orange-500 to-yellow-400"
              },
              {
                icon: <FiGlobe className="w-8 h-8" />,
                title: "Mobile Solutions",
                services: ["iOS Apps", "Android Apps", "Cross-Platform", "App Marketing"],
                color: "from-green-500 to-teal-400"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                
                <ul className="space-y-3">
                  {service.services.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="mt-6 text-blue-600 font-semibold text-sm flex items-center gap-1 group">
                  <span>Learn More</span>
                  <FiChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process-Driven Approach
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              A systematic methodology that ensures success at every stage
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into your business goals, target audience, and challenges",
                icon: "🔍"
              },
              {
                step: "02",
                title: "Strategy",
                description: "Crafting a customized plan with clear objectives and measurable KPIs",
                icon: "📊"
              },
              {
                step: "03",
                title: "Execution",
                description: "Implementing solutions with precision, quality, and innovation",
                icon: "⚡"
              },
              {
                step: "04",
                title: "Growth",
                description: "Continuous optimization and support for sustained success",
                icon: "📈"
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                    {process.icon}
                  </div>
                  <div className="text-blue-600 font-bold text-sm mb-2">STEP {process.step}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              What sets us apart in the competitive digital landscape
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiUsers className="w-8 h-8" />,
                title: "Expert Team",
                description: "Our team comprises industry-certified professionals with years of experience",
                highlight: "50+ Experts"
              },
              {
                icon: <MdOutlineHandshake className="w-8 h-8" />,
                title: "Client-Centric",
                description: "We prioritize your success and maintain transparent communication",
                highlight: "24/7 Support"
              },
              {
                icon: <FiTarget className="w-8 h-8" />,
                title: "Result-Oriented",
                description: "Every project focuses on delivering measurable business outcomes",
                highlight: "ROI-Focused"
              },
              {
                icon: <MdOutlineLightbulb className="w-8 h-8" />,
                title: "Innovative Solutions",
                description: "Leveraging cutting-edge technologies and creative approaches",
                highlight: "Future-Ready"
              },
              {
                icon: <FiAward className="w-8 h-8" />,
                title: "Proven Track Record",
                description: "Successful projects across multiple industries and business sizes",
                highlight: "500+ Projects"
              },
              {
                icon: <FiGlobe className="w-8 h-8" />,
                title: "Global Perspective",
                description: "Experience working with clients across different markets and cultures",
                highlight: "Global Reach"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  {feature.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold mb-4">
                <div className="w-12 h-[2px] bg-blue-600"></div>
                <span>OUR CORE VALUES</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                The Principles That Guide Everything We Do
              </h2>
              
              <div className="space-y-8">
                {[
                  {
                    title: "Integrity First",
                    description: "We believe in honesty, transparency, and ethical practices in all our dealings"
                  },
                  {
                    title: "Innovation Driven",
                    description: "Continuously exploring new technologies and creative approaches"
                  },
                  {
                    title: "Excellence Always",
                    description: "Committed to delivering exceptional quality in every project"
                  },
                  {
                    title: "Collaborative Spirit",
                    description: "Working as an extension of your team towards shared success"
                  }
                ].map((value, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Our Team Values"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Our Growing Family of Successful Clients
                </h3>
                <p className="text-gray-600 mb-4">
                  Be part of our success stories and transform your digital presence
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-shadow">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900 via-gray-900 to-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Elevate Your Digital Presence?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how our digital expertise can drive your business growth and create lasting impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 text-lg flex items-center gap-3">
              <span>Start Free Consultation</span>
              <FiChevronRight className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 text-lg">
              View Case Studies
            </button>
          </div>
          
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-gray-400">
              Trusted by startups, SMEs, and Fortune 500 companies worldwide
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}