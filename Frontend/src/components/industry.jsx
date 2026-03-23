import React from "react";
import {
  FaChalkboardTeacher, FaHeartbeat, FaTheaterMasks, FaCoins,
  FaUsers, FaShoppingBag, FaPlane, FaTruck, FaUtensils, FaHome, FaIndustry, FaLaptopCode,
} from "react-icons/fa";

const industries = [
  { icon: FaChalkboardTeacher, label: "Education", color: "#7C3AED" },
  { icon: FaHeartbeat, label: "Health Care", color: "#F472B6" },
  { icon: FaTheaterMasks, label: "Entertainment", color: "#FBBF24" },
  { icon: FaCoins, label: "Finance", color: "#10B981" },
  { icon: FaUsers, label: "Business", color: "#06B6D4" },
  { icon: FaShoppingBag, label: "E-Commerce", color: "#A855F7" },
  { icon: FaPlane, label: "Tourism", color: "#F97316" },
  { icon: FaTruck, label: "Logistics", color: "#06B6D4" },
  { icon: FaUtensils, label: "Restaurants", color: "#F472B6" },
  { icon: FaHome, label: "Real Estate", color: "#10B981" },
  { icon: FaIndustry, label: "Oil & Gas", color: "#FBBF24" },
  { icon: FaLaptopCode, label: "IT / Tech", color: "#7C3AED" },
];

export default function IndustryWeServe() {
  return (
    <section className="relative py-24 bg-[#050711] overflow-hidden">
      {/* Decorations */}
      <div className="absolute inset-0 dots-bg opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-5">
            <span className="section-badge">Industries</span>
          </div>
          <h2 className="section-title mb-4">
            Industries We <span className="text-gradient">Serve</span>
          </h2>
          <p className="section-desc max-w-xl mx-auto">
            We deliver specialized digital solutions across a diverse range of industries.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group glass-card-hover card-shine rounded-2xl p-5 flex flex-col items-center gap-3"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: item.color + '18',
                  border: `1px solid ${item.color}33`,
                  color: item.color,
                }}
              >
                <item.icon />
              </div>
              <p className="text-slate-300 text-xs font-[Outfit] font-medium text-center group-hover:text-white transition-colors">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
