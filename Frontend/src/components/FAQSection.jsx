import React, { useState } from "react";
import { FaPlus, FaMinus, FaChartLine, FaArrowRight, FaHeadset, FaLightbulb } from "react-icons/fa";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How Can Business Consulting Benefit My Company?",
      answer: "Our consulting services provide strategic insights, operational improvements, and data-driven solutions that can increase efficiency by up to 40% and boost revenue by 25% within the first year of implementation.",
      icon: <FaLightbulb className="text-amber-500" />
    },
    {
      question: "What Are the Costs of Your Consulting Services?",
      answer: "We offer flexible pricing models tailored to your needs. Projects typically range from $15,000 to $150,000+ depending on scope. All proposals include detailed breakdowns and ROI projections.",
      icon: <FaChartLine className="text-blue-500" />
    },
    {
      question: "How Do You Measure the Success of a Project?",
      answer: "We establish clear KPIs during the discovery phase and track them using advanced analytics. Clients receive monthly performance reports showing tangible metrics like user growth, conversion rates, and ROI.",
      icon: <FaHeadset className="text-emerald-500" />
    },
    {
      question: "Do You Provide Remote Consulting Services?",
      answer: "Yes, we operate globally with remote-first methodologies. Our distributed team uses collaborative tools that ensure seamless communication and project management across time zones.",
      icon: <FaArrowRight className="text-purple-500" />
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-100/20 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-blue-100/20 to-transparent rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Geometric Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT SIDE - Content */}
          <div>
            {/* Header */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500"></div>
                <span className="text-gradient bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent font-semibold tracking-widest uppercase text-sm">
                  FAQs
                </span>
                <div className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-orange-500"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                <span className="block text-transparent bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
                  Frequently Asked
                </span>
                <span className="block text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
                  Questions
                </span>
              </h2>

              <p className="text-gray-600 text-lg max-w-xl">
                Find answers to common questions about our services, processes, and how we deliver exceptional results.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`group bg-white rounded-2xl border transition-all duration-500 overflow-hidden ${openIndex === index
                      ? 'border-amber-200 shadow-xl shadow-amber-100/50'
                      : 'border-gray-100 shadow-lg hover:shadow-xl hover:border-amber-100'
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${openIndex === index
                          ? 'bg-gradient-to-br from-amber-500 to-orange-500'
                          : 'bg-gray-100 group-hover:bg-amber-50'
                        } transition-all duration-300`}>
                        <div className={`text-xl ${openIndex === index ? 'text-white' : 'text-gray-600 group-hover:text-amber-600'
                          } transition-colors duration-300`}>
                          {faq.icon}
                        </div>
                      </div>
                      <h3 className={`text-lg font-semibold ${openIndex === index ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900'
                        } transition-colors duration-300`}>
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ml-4 ${openIndex === index
                        ? 'bg-gradient-to-br from-amber-500 to-orange-500'
                        : 'bg-gray-100 group-hover:bg-amber-50'
                      } transition-all duration-300`}>
                      {openIndex === index ? (
                        <FaMinus className="text-white text-sm" />
                      ) : (
                        <FaPlus className={`text-gray-600 group-hover:text-amber-600 text-sm transition-colors duration-300`} />
                      )}
                    </div>
                  </button>

                  <div className={`px-6 overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}>
                    <div className={`border-t border-gray-100 pt-6 ${openIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                      } transition-all duration-500`}>
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                      {index === 1 && (
                        <div className="mt-4 inline-flex items-center gap-2 text-sm text-amber-600 font-semibold">
                          <FaArrowRight />
                          <span>Request detailed pricing</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>


          </div>

          {/* RIGHT SIDE - Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-100">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                {/* Abstract Background */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #000 2%, transparent 0%)`,
                    backgroundSize: '100px 100px',
                  }}></div>
                </div>

                {/* Person Illustration */}
                <div className="absolute inset-0 flex items-end justify-center">
                  <div className="relative w-full max-w-md">
                    {/* Abstract shapes */}
                    <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full blur-3xl opacity-20"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>

                    {/* Person SVG/Image placeholder */}
                    <div className="relative z-10">
                      <div className="w-full h-96 bg-gradient-to-t from-gray-900/10 to-transparent"></div>
                    </div>
                  </div>
                </div>

                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent">
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                            Success Metrics
                          </div>
                          <div className="text-2xl font-bold text-gray-900">
                            Project Growth
                          </div>
                        </div>
                        <div className="text-3xl font-bold text-amber-600">
                          68%
                        </div>
                      </div>

                      {/* Chart */}
                      <div className="relative h-20">
                        <div className="absolute inset-0 flex items-end gap-1">
                          {[40, 55, 68, 48, 60, 75, 80].map((height, i) => (
                            <div
                              key={i}
                              className="flex-1 relative"
                              style={{ height: `${height}%` }}
                            >
                              <div className={`absolute bottom-0 left-0 right-0 rounded-t-lg ${i === 2
                                  ? 'bg-gradient-to-t from-amber-500 to-orange-500'
                                  : 'bg-gradient-to-t from-gray-200 to-gray-300'
                                }`}></div>
                              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
                                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold text-gray-900">↑ 24%</span> from last month
                        </div>
                        <div className="flex items-center gap-2 text-sm text-amber-600 font-semibold">
                          <span>View Report</span>
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-2xl p-6 shadow-2xl shadow-black/10 w-64">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <FaHeadset className="text-white text-xl" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600">Support Team</div>
                  <div className="text-lg font-bold text-gray-900">Always Available</div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                Get instant answers from our expert team
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}