import React from "react";

export default function FAQSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-20 relative overflow-hidden">
      {/* Left Decorative Border */}
      <div className="absolute left-0 top-0 h-full w-20 border-l-4 border-purple-100 rounded-full hidden md:block"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* LEFT CONTENT */}
       {/* LEFT CONTENT — FORM */}
<div>
  <p className="uppercase text-yellow-500 font-semibold tracking-wider mb-3">
    Get in Touch
  </p>
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
    Have Questions? <br /> We’re Here to Help
  </h2>

  <form className="space-y-5">
    {/* Name */}
    <div>
      <label className="text-gray-700 font-medium">Full Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-purple-500 outline-none transition"
      />
    </div>

    {/* Email */}
    <div>
      <label className="text-gray-700 font-medium">Email Address</label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-purple-500 outline-none transition"
      />
    </div>

   

    {/* Message */}
    <div>
      <label className="text-gray-700 font-medium">Message</label>
      <textarea
        placeholder="Write your message..."
        rows="5"
        className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-purple-500 outline-none transition resize-none"
      ></textarea>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition"
    >
      Send Message
    </button>
  </form>
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
