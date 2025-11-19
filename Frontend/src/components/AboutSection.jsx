import React from "react";
import { FiChevronRight, FiPhoneCall, FiAward } from "react-icons/fi";

const AboutSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#fff] to-[#fff7ea]">
      <div className="max-w-[1300px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side images */}
        <div className="relative flex justify-center gap-6">
          <div className="flex flex-col gap-6">
            <img
              src="/images/About3.jpg"
              alt="Business Discussion"
              className="w-[320px] h-[520px] object-cover rounded-xl"
            />
          </div>

          <div>
            <img
              src="/images/About2.jpg"
              alt="Office Meeting"
              className="w-[320px] h-[280px] mb-5 object-cover rounded-xl"
            />
            <img
              src="/images/About-1.jpg"
              alt="Team Work"
              className="w-[320px] h-[420px]  object-cover rounded-xl"
            />
          </div>

          {/* Circular badge */}
          <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] flex items-center justify-center animate-slow-spin">
            <img
              src="/images/Text-Round.png"
              alt="Rotating"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1d1f24] -mt-3 leading-tight">
            We Deliver Innovative Ideas To Elevate Your Digital Agency.
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-[20px]">
            We create digital experiences that drive real results. Our team
            blends creativity with strategy to help your business grow.
          </p>

          {/* Box */}
          <div className="mt-6 bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex items-center gap-6">
            <div className="bg-gray-200 p-4 rounded-full">
              <FiAward size={28} className="text-orange-500" /> {/* <-- ICON */}
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1d1f24]">
                We provide the best services for better experience
              </h3>
            </div>
          </div>

          {/* CTA section */}
          <div className="mt-8 flex items-center gap-6">
            <button className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all text-[17px]">
              DISCOVER MORE
              <FiChevronRight />
            </button>

            <div className="flex items-center gap-3">
              <div className="bg-orange-100 text-orange-600 p-4 rounded-full">
                <FiPhoneCall size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Call Anytime</p>
                <p className="text-lg font-bold">017-50050088</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
