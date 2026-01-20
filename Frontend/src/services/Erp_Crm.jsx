import React from "react";

// Add custom styles for 3D flip effect
const flipStyles = `
  .perspective-1000 {
    perspective: 1000px;
  }
  .transform-style-preserve-3d {
    transform-style: preserve-3d;
  }
  .group:hover .group-hover\\:rotate-y-180 {
    transform: rotateY(180deg);
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
`;


export default function HeroSection() {
  return (
    <>
      <style>{flipStyles}</style>
      <section
        className="relative w-full  bg-cover bg-center overflow-hidden"
      // style={{
      //   backgroundImage:
      //     "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0F172A]/10"></div>

        {/* Content */}
        <div className="relative max-w-9xl mx-auto px-6 py-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white animate-fadeInUp ml-30">
              <h1 className="text-[42px] lg:text-[52px]  -mt-35 font-bold text-black leading-tight">
                Custom ERP & CRM Solutions Trusted by Growing Businesses
              </h1>

              <div className="w-16 h-[3px] bg-blue-500 my-6"></div>

              <p className="text-lg text-blue-900 max-w-xl">
                We help businesses streamline operations, enhance customer relationships, and drive growth through tailored ERP and CRM solutions.
              </p>

              <div className="mt-8 border-l-4 border-blue-500 pl-6 italic text-blue-900">
                We focus on long-term partnerships and measurable business
                transformation.
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="overflow-hidden bg-transparent">
              <img
                src="/servicesimg/crm.png"
                alt="web design"
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

      {/* ABOUT SECTION */}
      <section className="w-full bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <img
                src="/servicesimg/web.png"
                alt="Website Design Illustration"
                className="max-w-[480px] w-full"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>

              <h2 className=" text-[38px] leading-tight font-bold text-[#0F2A56]">
                Reasons To Choose Us
                as Your
                ERP & CRM Development Partner
              </h2>

              <p className="mt-6 text-gray-600 leading-relaxed text-[15px]">
                We are a leading ERP and CRM development company helping businesses automate processes,
                improve customer relationships, and drive operational efficiency. Our solutions are built on
                cutting-edge technology, industry best practices, and deep understanding of business workflows.
              </p>

              <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
                Our ERP and CRM experts specialize in custom software development, system integration,
                data migration, and user training. From initial consultation and requirements analysis to
                deployment and ongoing support, we provide end-to-end solutions focused on scalability,
                security, and business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ERP CRM DEVELOPMENT PROCESS SECTION */}
      <WebDesignProcess />
      {/* =============================================================================================== */}
      {/* ERP CRM ADVANTAGES SECTION */}
      <section className="w-full bg-gray-50 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h2 className="text-4xl font-semibold text-center text-[#243B6B] mb-16">
            Unlocking the Advantages of Professional ERP & CRM Solutions
          </h2>

          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Streamlined Operations */}
            <FlipBox
              icon="/images/global-network.png"
              iconBg="bg-blue-100"
              title="Streamlined Business Operations"
              description="ERP systems integrate all business processes into a unified platform, eliminating data silos and improving operational efficiency across departments."
            />

            {/* Enhanced Customer Relationships */}
            <FlipBox
              icon="/images/user-experience.png"
              iconBg="bg-green-100"
              title="Enhanced Customer Relationships"
              description="CRM solutions help you understand customer needs, track interactions, and deliver personalized experiences that drive loyalty and retention."
            />

            {/* Data-Driven Decisions */}
            <FlipBox
              icon="/images/marketing.png"
              iconBg="bg-purple-100"
              title="Data-Driven Decision Making"
              description="Real-time analytics and reporting provide actionable insights, enabling informed business decisions and strategic planning."
            />
          </div>

          {/* Second Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            {/* Improved Productivity */}
            <FlipBox
              icon="/images/affiliate-marketing.png"
              iconBg="bg-orange-100"
              title="Improved Team Productivity"
              description="Automation of repetitive tasks and streamlined workflows free up your team to focus on high-value activities and strategic initiatives."
            />

            {/* Scalability */}
            <FlipBox
              icon="/images/competitive-advantage.png"
              iconBg="bg-red-100"
              title="Scalable Business Growth"
              description="Custom ERP and CRM solutions grow with your business, providing the flexibility to adapt to changing market demands and business requirements."
            />

            {/* Cost Reduction */}
            <FlipBox
              icon="/images/customer-service.png"
              iconBg="bg-teal-100"
              title="Significant Cost Reduction"
              description="Optimized processes, reduced manual errors, and improved resource allocation lead to substantial cost savings and improved ROI."
            />
          </div>
        </div>
      </section>


      {/* TECH STACK SECTION */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
              ERP & CRM Technology Stack
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks we use to build powerful ERP & CRM solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "React", category: "Frontend", icon: "⚛️" },
              { name: "Node.js", category: "Backend", icon: "�" },
              { name: "PostgreSQL", category: "Database", icon: "�" },
              { name: "MongoDB", category: "Database", icon: "🍃" },
              { name: "AWS", category: "Cloud", icon: "☁️" },
              { name: "Docker", category: "DevOps", icon: "🐳" },
              { name: "Python", category: "Backend", icon: "🐍" },
              { name: "Java", category: "Enterprise", icon: "☕" },
              { name: "Azure", category: "Cloud", icon: "☁️" },
              { name: "GraphQL", category: "API", icon: "�" },
              { name: "Kubernetes", category: "DevOps", icon: "☸️" },
              { name: "Salesforce", category: "CRM", icon: "☁️" }
            ].map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <span className="text-3xl">{tech.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLIENT LOGOS SECTION */}
      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
              Trusted by Leading Clients
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We've helped businesses across various industries transform their operations with ERP & CRM solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3  items-center">
            {[
              { name: "Site Invention", logo: "/images/logo.jpeg" },
              { name: "TRIVEXON", logo: "/clients/trivexon.png" },
              { name: "SKILLNOXERA", logo: "/clients/skillnoxera.png" },

            ].map((client, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="w-52 h-40 bg-white rounded-lg shadow-sm flex items-center justify-center hover:shadow-md transition-shadow duration-300 border border-gray-100 mx-auto">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden items-center justify-center w-full h-full">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🏢</div>
                      <div className="text-xs font-medium text-gray-600">{client.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Ready to Transform Your Business with
              <br /> Custom ERP & CRM Solutions?
            </h2>
            <p className="text-gray-600 mb-8">
              Streamline operations, enhance customer relationships, and drive growth with tailored solutions.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
              Get Free ERP/CRM Consultation
            </button>
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-full h-full bg-no-repeat bg-center opacity-10"
              style={{
                backgroundImage: "url('/images/dot-grid.png')",
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>
        </div>
      </section>

    </>
  );
}

/* Flip Box Component */
function FlipBox({ icon, iconBg, title, description }) {
  return (
    <div className="group relative  h-65 perspective-1000">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg p-8">
          <div className="text-center h-full flex flex-col justify-center">
            <div className={`w-20 h-20 mx-auto mb-6 ${iconBg} rounded-full flex items-center justify-center`}>
              <img src={icon} alt={title} className="w-12 h-12" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              {description.substring(0, 100)}...
            </p>

          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-blue-500 rounded-xl shadow-lg p-8">
          <div className="text-center h-full flex flex-col justify-center">
            <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
            <p className="text-white leading-relaxed">
              {description}
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}

/* Step Card */
function Step({ step, title, logo, color, className = "" }) {
  return (
    <div className={`flex flex-col items-center text-center w-44 ${className}`}>
      <span className="text-sm font-semibold text-blue-600 mb-3">
        {step}
      </span>

      <div
        className={`w-20 h-25 flex items-center justify-center rounded-xl shadow-md ${color}`}
      >
        <img
          src={logo}
          alt={title}
          className="w-10 h-10 object-contain"
        />
      </div>

      <p className="mt-4 text-sm font-medium text-gray-700 leading-snug">
        {title}
      </p>
    </div>
  );
}

function WebDesignProcess() {
  return (
    <section className="w-full bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center relative">

        {/* Heading */}
        <h2 className="text-4xl font-semibold text-[#243B6B] mb-24">
          Our ERP & CRM Development Process at
          <span className="font-bold"> Site Invention</span>
        </h2>

        {/* Arc Line */}
        <div className="absolute left-1/2 top-[220px] -translate-x-1/2 w-[85%] h-[200px] border-t border-dashed border-gray-800 rounded-t-full" />

        {/* Steps */}
        <div className="relative flex justify-between items-start">

          {/* STEP 1 */}
          <Step
            step="STEP 1"
            title="Business Analysis & Requirements Gathering"
            logo="/images/ser1.png"
            color="bg-orange-50 text-orange-500"
            className="mt-40"
          />

          {/* STEP 2 */}
          <Step
            step="STEP 2"
            title="System Design & Architecture Planning"
            logo="/images/ser2.png"
            color="bg-blue-50 text-blue-500"
            className="mt-10"
          />

          {/* STEP 3 */}
          <Step
            step="STEP 3"
            title="Custom Development & Integration"
            logo="/images/ser3.png"
            color="bg-green-50 text-green-500"
            className="-mt-10"
          />

          {/* STEP 4 */}
          <Step
            step="STEP 4"
            title="Testing & Quality Assurance"
            logo="/images/ser4.png"
            color="bg-sky-50 text-sky-500"
            className="mt-10"
          />

          {/* STEP 5 */}
          <Step
            step="STEP 5"
            title="Deployment & Ongoing Support"
            logo="/images/ser5.png"
            color="bg-pink-50 text-pink-500"
            className="mt-40"
          />

        </div>
      </div>
    </section>
  );
}
