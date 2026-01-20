import React from "react";

const clients = [
  {
    name: "ABC Healthcare",
    industry: "Healthcare Technology",
    description:
      "Designed and developed a custom healthcare management system to streamline appointments, patient records, and internal workflows.",
    services: "Web App Development",
    tech: "React, Node.js, MongoDB",
    image: "/images/project.jpeg"
  },
  {
    name: "EduNext Solutions",
    industry: "EdTech Platform",
    description:
      "Built a responsive learning platform with role-based access for students and admins, focused on performance and usability.",
    services: "UI/UX Design, Full-Stack Development",
    tech: "React, Express, MongoDB",
    image: "/images/hero.png"
  },
  {
    name: "FinanceFlow Pro",
    industry: "FinTech",
    description:
      "Developed a secure financial analytics dashboard with real-time data visualization and comprehensive reporting features.",
    services: "Full-Stack Development, API Integration",
    tech: "Vue.js, Python, PostgreSQL",
    image: "/images/hero1.png"
  },
  {
    name: "RetailMax",
    industry: "E-commerce",
    description:
      "Created a scalable e-commerce platform with inventory management, payment processing, and customer analytics.",
    services: "E-commerce Solution, Mobile App",
    tech: "React Native, Node.js, MongoDB",
    image: "/images/aboutus.png"
  },
  {
    name: "CloudSync Systems",
    industry: "Cloud Services",
    description:
      "Built a comprehensive cloud storage and collaboration platform with enterprise-grade security and seamless file sharing.",
    services: "Cloud Architecture, SaaS Development",
    tech: "AWS, React, Microservices",
    image: "/images/our-values-1.png"
  },
  {
    name: "GreenEnergy Co",
    industry: "Renewable Energy",
    description:
      "Developed an IoT-based energy monitoring system with predictive analytics and real-time dashboard for renewable energy management.",
    services: "IoT Solution, Data Analytics",
    tech: "Python, TensorFlow, AWS IoT",
    image: "/images/about1-2.jpg"
  }
];

export default function OurClients() {
  return (
    <section className="w-full bg-white">

      {/* HERO SECTION */}
      <section
        className="relative w-full bg-cover bg-center overflow-hidden"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/10"></div>

        {/* Content */}
        <div className="relative max-w-9xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white animate-fadeInUp ml-30">
              <h1 className="text-[42px] lg:text-[52px] -mt-35 font-bold text-black leading-tight">
                Trusted By <br />
                Leading Brands
              </h1>

              <div className="w-16 h-[3px] bg-blue-500 my-6"></div>

              <p className="text-lg text-blue-900 max-w-xl">
                We partner with innovative businesses across industries to deliver
                exceptional digital solutions that drive growth and success.
              </p>

              <div className="mt-8 border-l-4 border-blue-500 pl-6 italic text-blue-900">
                Our success is measured by the success of our clients.
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="overflow-hidden bg-transparent">
              <img
                src="/servicesimg/web.png"
                alt="our clients"
                className="w-400 h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM WAVE */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-[80px] rotate-180"
          >
            <path
              d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7
              c75.8,32.2,133.7,44.5,192.6,49.7
              c23.6,2.1,48.7,3.5,103.4-2.5
              c54.7-6,106.2-25.6,106.2-25.6V0H0v207.3z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-900">
              Success Stories
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Discover how we've helped businesses transform their digital presence
              and achieve remarkable results.
            </p>
          </div>

          {/* Client Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-indigo-500 to-purple-600 relative">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${client.name}/400/300.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {client.name}
                  </h3>
                  <p className="text-sm text-indigo-600 font-medium mb-3">
                    {client.industry}
                  </p>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {client.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-700">Services:</span>
                      <span className="text-gray-600">{client.services}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-gray-700">Tech:</span>
                      <span className="text-gray-600">{client.tech}</span>
                    </div>
                  </div>

                  <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                    View Case Study
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT TESTIMONIALS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear directly from our valued partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                position: "CEO",
                company: "ABC Healthcare",
                image: "/images/testimonial1.jpg",
                rating: 5,
                testimonial: "Working with this team transformed our healthcare management system. Their attention to detail and innovative solutions exceeded our expectations."
              },
              {
                name: "Michael Chen",
                position: "CTO",
                company: "EduNext Solutions",
                image: "/images/testimonial2.jpg",
                rating: 5,
                testimonial: "The learning platform they built for us has revolutionized how we deliver education. Performance, scalability, and user experience are outstanding."
              },
              {
                name: "Emily Rodriguez",
                position: "Founder",
                company: "FinanceFlow Pro",
                image: "/images/testimonial3.jpg",
                rating: 5,
                testimonial: "Their expertise in FinTech solutions helped us create a secure and intuitive financial dashboard. Our clients love it!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                    onError={(e) => {
                      e.target.src = `https://picsum.photos/seed/${testimonial.name}/100/100.jpg`;
                    }}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT SUCCESS METRICS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for themselves - measurable impact on our clients' businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "300%", label: "Average ROI", description: "Return on investment for our clients" },
              { number: "45%", label: "Cost Reduction", description: "Average operational cost savings" },
              { number: "60%", label: "Faster Delivery", description: "Quicker time-to-market than industry average" },
              { number: "99.9%", label: "Uptime", description: "System reliability and performance" }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">{metric.number}</div>
                <div className="text-xl font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partnership Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A structured approach to ensure successful collaboration and exceptional results
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200 hidden lg:block"></div>

            <div className="space-y-12">
              {[
                { step: "01", title: "Discovery & Strategy", description: "Understanding your business goals and technical requirements", icon: "🔍" },
                { step: "02", title: "Planning & Design", description: "Creating detailed project plans and UX/UI designs", icon: "📋" },
                { step: "03", title: "Development & Testing", description: "Building robust solutions with comprehensive testing", icon: "💻" },
                { step: "04", title: "Launch & Support", description: "Deploying solutions and providing ongoing support", icon: "🚀" }
              ].map((process, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} lg:justify-between`}>
                  <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="text-2xl mb-2">{process.icon}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{process.title}</h3>
                      <p className="text-gray-600">{process.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block w-2/12 text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto">
                      {process.step}
                    </div>
                  </div>
                  <div className="w-full lg:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED CASE STUDIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Deep dive into how we solved complex challenges for our clients
            </p>
          </div>

          <div className="space-y-16">
            {[
              {
                client: "ABC Healthcare",
                challenge: "Manual patient record management causing delays and errors",
                solution: "Custom healthcare management system with automated workflows",
                results: ["50% reduction in processing time", "95% error reduction", "Improved patient satisfaction"],
                image: "/images/project.jpeg"
              },
              {
                client: "EduNext Solutions",
                challenge: "Scalable platform needed for growing student base",
                solution: "Cloud-based learning management system with role-based access",
                results: ["200% user growth supported", "99.9% uptime", "40% improvement in engagement"],
                image: "/images/hero.png"
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{caseStudy.client}</h3>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Challenge</h4>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-700 mb-2">Solution</h4>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, i) => (
                          <li key={i} className="flex items-center text-gray-600">
                            <span className="text-green-500 mr-2">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="h-64 lg:h-auto">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.client}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = `https://picsum.photos/seed/${caseStudy.client}/600/400.jpg`;
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT GEOGRAPHIC DISTRIBUTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Client Presence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Serving clients across multiple continents and time zones
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { region: "North America", clients: 45, percentage: "30%" },
                { region: "Europe", clients: 38, percentage: "25%" },
                { region: "Asia", clients: 52, percentage: "35%" },
                { region: "Others", clients: 15, percentage: "10%" }
              ].map((region, index) => (
                <div key={index} className="p-4">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{region.clients}</div>
                  <div className="font-semibold text-gray-900 mb-1">{region.region}</div>
                  <div className="text-sm text-gray-600">{region.percentage} of clients</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Industry recognition for our excellence in digital solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { award: "Best Web Development Agency", year: "2024", organization: "Tech Awards" },
              { award: "Excellence in Client Satisfaction", year: "2024", organization: "Business Review" },
              { award: "Top Digital Innovator", year: "2023", organization: "Digital Summit" },
              { award: "Outstanding UX/UI Design", year: "2023", organization: "Design Council" },
              { award: "Fastest Growing Tech Company", year: "2023", organization: "Business Weekly" },
              { award: "Best Mobile App Development", year: "2022", organization: "App Awards" }
            ].map((award, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-bold text-gray-900 mb-2">{award.award}</h3>
                <p className="text-sm text-gray-600 mb-1">{award.organization}</p>
                <p className="text-sm font-semibold text-blue-600">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase."
              },
              {
                question: "What is your pricing structure?",
                answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline requirements."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive maintenance and support packages including bug fixes, updates, security patches, and feature enhancements to ensure your solution continues to perform optimally."
              },
              {
                question: "Can you work with our existing team?",
                answer: "Absolutely! We have extensive experience collaborating with in-house teams and can seamlessly integrate into your existing workflows and development processes."
              },
              {
                question: "What industries do you specialize in?",
                answer: "While we work across various industries, we have deep expertise in healthcare, education, fintech, e-commerce, and SaaS platforms."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE STATISTICS COUNTERS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real-time statistics showcasing our growth and client success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { target: 150, suffix: "+", label: "Happy Clients", color: "text-blue-600" },
              { target: 200, suffix: "+", label: "Projects Delivered", color: "text-green-600" },
              { target: 15, suffix: "+", label: "Years Experience", color: "text-purple-600" },
              { target: 98, suffix: "%", label: "Client Satisfaction", color: "text-orange-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-5xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform`}>
                  <span className="counter" data-target={stat.target}>0</span>{stat.suffix}
                </div>
                <div className="text-lg font-semibold text-gray-900">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our growing family of satisfied clients and let's create something
            extraordinary together.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition">
              Start Your Project
            </button>
            <button className="px-8 py-3 rounded-full border border-white text-white font-semibold hover:bg-white hover:text-black transition">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}
