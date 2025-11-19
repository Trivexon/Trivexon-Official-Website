import React from "react";

export default function Testimonials() {
  const data = [
    {
      img: "/images/testimonial.jpg",
      name: "David Smith",
      role: "Founder & Leader",
      text: "I recently worked with dixom for my home renovation project, and I couldn't be happier with the results.",
      stars: 4,
    },
    {
      img: "/images/testimonial-1.jpg",
      name: "Lana Rey",
      role: "Founder & Leader",
      text: "I recently worked with dixom for my home renovation project, and I couldn't be happier with the results.",
      stars: 4,
    },
    {
      img: "/images/testimonial-2.jpg",
      name: "David Smith",
      role: "Founder & Leader",
      text: "I recently worked with dixom for my home renovation project, and I couldn't be happier with the results.",
      stars: 4,
    },
    {
      img: "/images/testimonial.jpg",
      name: "David Smith",
      role: "Founder & Leader",
      text: "I recently worked with dixom for my home renovation project and I couldn't be happier with the results.",
      stars: 4,
    },
  ];

  return (
    <div className="w-full bg-[#0E0A14] text-white py-20 px-6 md:px-16">
      {/* Header */}
      <div className="mb-10">
        <p className="text-sm font-semibold text-yellow-400 tracking-widest flex items-center gap-2">
          OUR FEEDBACKS <span className="w-10 h-[2px] bg-yellow-400 inline-block"></span>
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-3 leading-tight">
          What They’re Talking <br /> About Company
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#1A1522] p-8 rounded-xl border border-gray-700 hover:border-yellow-400 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={item.img}
                alt="profile"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
              <span className="text-5xl text-gray-600 ml-auto">“</span>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">{item.text}</p>

            {/* Stars */}
            <div className="flex text-yellow-400 text-xl">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < item.stars ? "★" : "☆"}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
