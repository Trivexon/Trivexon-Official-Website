const items = [
  "24/7 Customer Support",
  "Mobile Friendly Websites",
  "Free Domain & Hosting",
  "No Hidden Charges",
  "Free Maintenance",
  "Fast Loading Websites",
  "SEO Optimized",
  "100% Satisfaction",
];

export default function Marq() {
  const doubled = [...items, ...items];

  return (
    <section className="w-full overflow-hidden py-0 relative">
      {/* Gradient bg strip */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-500 py-4">
        <div className="flex whitespace-nowrap">
          <div className="flex animate-marquee">
            {doubled.map((text, i) => (
              <div key={i} className="mx-6 flex items-center gap-3 flex-shrink-0">
                <span className="text-yellow-300 text-lg">✦</span>
                <span className="font-[Outfit] font-semibold text-white text-base tracking-wide">{text}</span>
              </div>
            ))}
          </div>
          <div className="flex animate-marquee" aria-hidden="true">
            {doubled.map((text, i) => (
              <div key={`b-${i}`} className="mx-6 flex items-center gap-3 flex-shrink-0">
                <span className="text-yellow-300 text-lg">✦</span>
                <span className="font-[Outfit] font-semibold text-white text-base tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
