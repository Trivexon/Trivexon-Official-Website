import React from "react";

export default function Marquee() {
  return (
    <section className="overflow-hidden w-full py-6 bg-[#e6e6e6]">
      
      <div className="flex whitespace-nowrap animate-marquee">
        
        {/* LOOP CONTENT */}
        <div className="flex items-center gap-8 mx-8">
          <span className="text-yellow-500 text-4xl">⭐</span>
          <span className="text-[68px] font-black text-[#1d1f24] tracking-wide">
            MARKETING
          </span>
          <span className="text-yellow-500 text-4xl">⭐</span>
          <span className="text-[68px] font-black text-transparent tracking-wider text-outline">
            SOLUTIONS
          </span>
         
        </div>

        {/* DUPLICATE FOR INFINITE SCROLL */}
        <div className="flex items-center gap-8 mx-8" aria-hidden="true">
          <span className="text-yellow-500 text-4xl">⭐</span>
          <span className="text-[68px] font-black text-[#1d1f24] tracking-wide">
            MARKETING
          </span>
          <span className="text-yellow-500 text-4xl">⭐</span>
          <span className="text-[68px] font-black text-transparent tracking-wider text-outline">
            SOLUTIONS
          </span>
          <span className="text-yellow-500 text-4xl">⭐</span>
        </div>

      </div>
    </section>
  );
}
