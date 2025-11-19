import React from "react";

export default function FAQSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Left Decorative Border */}
      <div className="absolute left-0 top-0 h-full w-20 border-l-4 border-purple-100 rounded-full hidden md:block"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <p className="uppercase text-yellow-500 font-semibold tracking-wider mb-3">
            Our FAQs
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Empowering Knowledge: <br /> Your Questions Answered
          </h2>

          {/* ACCORDION */}
          <div className="space-y-4">
            {[
              "How Can Business Consulting Benefit My Company?",
              "What Are the Costs of Your Consulting Services?",
              "How Do You Measure the Success of a Project?",
              "Do You Provide Remote Consulting Services?",
            ].map((q, i) => (
              <details
                key={i}
                className="bg-gray-100 px-6 py-4 rounded-xl cursor-pointer shadow-sm hover:shadow-md transition"
              >
                <summary className="flex justify-between items-center font-semibold text-gray-800">
                  {q}
                  <span className="text-gray-500 text-xl">⌄</span>
                </summary>
                <p className="mt-3 text-gray-600">
                  It is widely recognized that a reader's attention can be diverted by
                  the content layout of a page. Many desktop publishing software and
                  website editors now use Lorem Ipsum as their default placeholder.
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE + FLOATING CARD */}
        <div className="relative flex justify-center">
          {/* Yellow abstract shape */}
          <div className="absolute -top-10 right-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-40"></div>

          {/* Girl Image */}
          <img
            src="/images/img6.png"
            alt="faq-person"
            className="relative z-10 w-[420px] md:w-[520px] object-contain"
          />

          {/* Floating Sales Card */}
          <div className="absolute bottom-10 right-0 bg-white shadow-lg rounded-2xl p-6 w-48">
            <p className="text-gray-800 font-semibold text-sm">Sales trend</p>
            <h3 className="text-3xl font-bold text-purple-600">68%</h3>
            <div className="mt-3 h-16 w-full">
              <svg viewBox="0 0 200 60" className="w-full h-full">
                <path d="M0 40 Q 50 10, 100 30 T 200 20" stroke="orange" fill="transparent" strokeWidth="3" />
                <path d="M0 50 Q 50 20, 100 40 T 200 30" stroke="purple" fill="transparent" strokeWidth="3" />
              </svg>
            </div>
            <div className="w-full h-2 bg-purple-200 rounded-full mt-2">
              <div className="w-3/4 h-full bg-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
