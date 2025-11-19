import React from "react";
import AnimatedLayer from "./AnimatedLayer"; // <-- update path as needed

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#0B0E2C] text-white py-20 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE IMAGE REPLACED WITH ANIMATED LAYER */}
        <div className="relative w-full h-[480px] rounded-bl-[150px] overflow-hidden flex items-center justify-center bg-transparent">
          <AnimatedLayer />

          {/* Floating Card */}
          <div className="absolute bottom-3 left-5 bg-white text-black shadow-xl rounded-xl p-6 w-[250px]">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl">
                📊
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-500 uppercase">
                  Grow Business
                </p>
                <h3 className="text-sm font-bold leading-6">
                  We Help Your Business
                  <br /> To Become More
                  <br /> Stronger
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>
          <p className="text-sm font-semibold text-yellow-400 tracking-wider uppercase mb-2">
            Why Choose Us
          </p>
          <h2 className="text-4xl font-bold leading-snug mb-4">
            Why You Should Choose Our Agency
          </h2>
          <p className="text-gray-300 max-w-lg mb-8">
            The primary goal of business market is to help organizations improve
            their performance.
          </p>

          {/* FEATURES LIST */}
          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-start p-6 bg-[#1A1F3C] rounded-lg border-l-4 border-yellow-500">
              <span className="text-3xl mr-4">💼</span>
              <div>
                <h4 className="text-xl font-semibold mb-1">Quality Services</h4>
                <p className="text-gray-400 text-sm max-w-md">
                  Parturient montes nascetur ridiculus mus is maecenas venenatis,
                  neque.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start p-6 border-b border-gray-700 pb-8">
              <span className="text-3xl mr-4">👨‍💼</span>
              <div>
                <h4 className="text-xl font-semibold mb-1">Professional Experts</h4>
                <p className="text-gray-400 text-sm max-w-md">
                  Parturient montes nascetur ridiculus mus is maecenas venenatis,
                  neque.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start p-6">
              <span className="text-3xl mr-4">📈</span>
              <div>
                <h4 className="text-xl font-semibold mb-1">99% Success Rates</h4>
                <p className="text-gray-400 text-sm max-w-md">
                  Parturient montes nascetur ridiculus mus is maecenas venenatis,
                  neque.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
