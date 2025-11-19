import React from "react";
import { FaUsers, FaChartBar, FaThumbsUp } from "react-icons/fa";

export default function WorkProcess() {
  const steps = [
    {
      id: "01",
      title: "Choose Service",
      desc: "In a free hour, when our power of choice is untrammeled and",
      icon: <FaUsers size={75} />,
    },
    {
      id: "02",
      title: "Start Optimizing",
      desc: "In a free hour, when our power of choice is untrammeled and",
      icon: <FaChartBar size={75} />,
    },
    {
      id: "03",
      title: "Launch Now",
      desc: "In a free hour, when our power of choice is untrammeled and",
      icon: <FaThumbsUp size={75} />,
    },
  ];

  return (
    <section className="relative w-full py-28 bg-[#0d102e] text-white overflow-hidden">

      {/* 🔵 Background Glow (Left) */}
      <div className="absolute left-0 top-32 w-[500px] h-[500px] rounded-full bg-yellow-400 opacity-10 blur-[150px]"></div>

      {/* 🟣 Wave Shape (Right) */}
      <div className="absolute right-0 top-0 opacity-40 scale-125">
        <svg width="500" height="700" viewBox="0 0 700 700" fill="none">
          <path
            d="M150 0C350 200 500 350 450 500C400 650 200 700 50 550C-100 400 50 200 150 0Z"
            fill="#161833"
          />
        </svg>
      </div>

      {/* 🌀 3D Metallic Ring (Bottom Right) */}
      <div className="absolute bottom-0 right-10 opacity-60">
        <svg width="260" height="260" viewBox="0 0 200 200" fill="none">
          <ellipse
            cx="100"
            cy="100"
            rx="85"
            ry="40"
            stroke="#2f2f2f"
            strokeWidth="12"
            fill="none"
          />
        </svg>
      </div>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <p className="text-yellow-400 tracking-wider font-semibold uppercase">
          Working Process
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
          OUR WORK PROCESS <br /> IN 3 EASY STEPS
        </h2>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6 gap-16 relative z-10">

        {steps.map((step, index) => (
          <div key={index} className="text-center relative">

            {/* Yellow Circle */}
            <div className="relative flex items-center justify-center mx-auto w-32 h-32 bg-yellow-400 rounded-full text-black shadow-xl">
              {step.icon}

              {/* Step Number */}
              <div className="absolute -top-3 -right-3 bg-[#0d102e] text-white w-10 h-10 flex items-center justify-center rounded-full border border-gray-600 text-sm font-bold">
                {step.id}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mt-6">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-400 max-w-[260px] mx-auto mt-3">
              {step.desc}
            </p>

            {/* Curved Arrow */}
            {index < 2 && (
              <div className="hidden sm:block absolute top-14 right-[-130px]">
                <svg
                  width="150"
                  height="70"
                  viewBox="0 0 150 70"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 60 C50 20, 100 20, 140 60"
                    stroke="#F6C100"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <path
                    d="M135 55 L140 60 L135 65"
                    stroke="#F6C100"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="mt-24 relative z-10 flex flex-col sm:flex-row justify-center items-center gap-6 px-6">
        
        {/* Left Button */}
        <button className="px-10 py-4 rounded-full bg-transparent border border-gray-500 text-gray-200 text-lg tracking-wide backdrop-blur-md">
          Let’s Request a Schedule For Free Consultation
        </button>

        {/* Yellow Button */}
        <button className="px-10 py-4 rounded-full bg-yellow-400 text-black font-semibold text-lg tracking-wide flex items-center gap-2 shadow-lg">
          GET IN TOUCH →
        </button>

      </div>

    </section>
  );
}
