import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vishal Laheri",
    role: "Founder, MNA Capital Advisors",
    text: "We engaged Trivexon to develop our website and were highly satisfied with their timely delivery, dedication, and professional approach. Impressed by their performance, we expanded the engagement to automate our key report generation and database systems, resulting in substantial efficiency gains for our team at MNA Capital Advisors. Trivexon has become our trusted technology partner—strongly recommended for web development and process automation needs.",
    avatar: "VL",
    logo: "/images/mna1.webp",
    color: "#7C3AED",
  },
  {
    name: "Neil",
    role: "Founder, thegoodwillfacade",
    text: "We are extremely happy with the website developed for The Goodwill Facade by Trivexon. Their team truly understood our vision and transformed it into a modern, professional, and visually appealing website.The design is clean, user-friendly, and perfectly showcases our services. The performance and responsiveness across all devices have been excellent, helping us create a strong online presence.Trivexon's attention to detail, creativity, and timely delivery made the entire process smooth and hassle-free. We highly recommend Trivexon to anyone looking for high-quality website development services.",
    avatar: "NL",
    logo: "/images/good.webp",
    color: "#06B6D4",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsToShow = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3;
  const maxIndex = testimonials.length - 3;

  const handlePrev = () => setCurrentIndex(prev => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  const visible = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="relative py-24 bg-[#0A0F1E] overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      <div className="orb orb-violet w-[500px] h-[500px] bottom-0 right-0 opacity-15 blur-[150px]" />
      <div className="orb orb-cyan w-[300px] h-[300px] top-0 left-0 opacity-10 blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div>
            <div className="flex mb-4">
              <span className="section-badge">Testimonials</span>
            </div>
            <h2 className="section-title">
              What Our <span className="text-gradient">Clients</span> Say
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 ${currentIndex === 0
                ? 'border-[rgba(255,255,255,0.06)] text-slate-600 cursor-not-allowed'
                : 'border-[rgba(124,58,237,0.3)] text-violet-400 hover:bg-[rgba(124,58,237,0.1)] hover:border-violet-500'
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
              className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-all duration-200 ${currentIndex >= maxIndex
                ? 'border-[rgba(255,255,255,0.06)] text-slate-600 cursor-not-allowed'
                : 'border-[rgba(124,58,237,0.3)] text-violet-400 hover:bg-[rgba(124,58,237,0.1)] hover:border-violet-500'
                }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visible.map((item, index) => (
            <div
              key={currentIndex + index}
              className="glass-card-hover card-shine rounded-2xl p-7 relative flex flex-col"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 rounded-xl bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center mb-5">
                <Quote className="w-4 h-4 text-violet-400" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-300 text-sm leading-relaxed font-[Inter] mb-6 flex-1">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-[rgba(255,255,255,0.06)]">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-[Outfit] font-bold text-sm text-white flex-shrink-0 overflow-hidden"
                  style={{ background: item.logo ? 'rgba(255,255,255,0.06)' : `linear-gradient(135deg, ${item.color}, ${item.color}88)` }}
                >
                  {item.logo ? (
                    <img src={item.logo} alt={item.name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  ) : (
                    item.avatar
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-[Outfit] font-semibold text-white text-sm">{item.name}</p>
                  <p className="text-slate-500 text-xs font-[Inter]">{item.role}</p>
                </div>
                {item.logo && (
                  <div className="ml-auto">
                    <img
                      src={item.logo}
                      alt={`${item.name} logo`}
                      className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: testimonials.length - 2 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`transition-all duration-300 rounded-full ${currentIndex === i
                ? 'w-8 h-2 bg-gradient-to-r from-violet-500 to-cyan-500'
                : 'w-2 h-2 bg-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.3)]'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
