import React from "react";
import { PhoneCall, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function DigiPlusHero() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#111827] via-[#1b1f2e] to-[#b36d1c] text-white relative overflow-hidden">
      <div className="px-8 md:px-20 pt-30 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <p className="text-yellow-400 uppercase -mt-20 tracking-widest text-lg mb-3">
            Brand Digital Agency
          </p>
          <h1 className="text-7xl font-extrabold leading-tight mb-6">
            Make Your Brand <br /> Future‑Proof.
          </h1>

          <p className="text-gray-300 max-w-md text-lg mb-8">
            Web designing in a powerful way is not only our profession, however,
            it's our passion. Smart looking websites are the first impression on
            visitors.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              DISCOVER MORE <span>&#8594;</span>
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://i.pravatar.cc/40?img=1"
                />
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://i.pravatar.cc/40?img=2"
                />
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://i.pravatar.cc/40?img=3"
                />
              </div>
              <div>
                <span className="text-yellow-400 font-bold">30k+</span>
                <br />
                Satisfaction Clients
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <motion.img
            src="/images/banner-image-8.png"
            alt="man"
            className="w-50 md:w-120 rounded-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          {/* ⭐ 5 Stars Card */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 left-0 bg-white text-black px-6 py-4 rounded-2xl shadow-xl border border-gray-100 backdrop-blur-md flex gap-4 items-center"
          >
            <div className="bg-black rounded-xl p-3 flex items-center justify-center">
              ⭐
            </div>

            <div>
              <p className="text-base font-bold text-gray-900">5 Stars</p>
              <p className="text-sm text-gray-600">
                Read Our{" "}
                <span className="font-semibold underline">Success Stories</span>
              </p>
            </div>
          </motion.div>
          {/* 📈 Sales Trend Card */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-60 right-0 px-5 py-4 rounded-2xl w-[280px]"
          >
            {/* Chart Image Full Fit */}
            <div className="w-full h-[230px]">
              <img
                src="/images/Sales-Trend.png"
                alt="chart"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
