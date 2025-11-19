import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  FaPalette,
  FaChartLine,
  FaBullhorn,
  FaCloud,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "UI / UX Creative Design",
      desc: "We create intuitive and engaging user interfaces that enhance user experience and drive conversions.",
      img: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/Project1-550x550.jpg",
      icon: <FaPalette />,
    },
    {
      id: "02",
      title: "Digital Marketing",
      desc: "Boost your online presence with our comprehensive digital marketing strategies and campaigns.",
      img: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project2-550x550.jpg",
      icon: <FaChartLine />,
    },
    {
      id: "03",
      title: "Marketing Strategy",
      desc: "Develop data-driven marketing strategies that align with your business goals and target audience.",
      img: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/project4-550x550.jpg",
      icon: <FaBullhorn />,
    },
    {
      id: "04",
      title: "Digital Platform",
      desc: "Build scalable and secure digital platforms that empower your business to grow and innovate.",
      img: "https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/05/Bg2-550x550.jpg",
      icon: <FaCloud />,
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#ffaa17] font-bold text-sm tracking-widest uppercase">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-[#24201f] mt-3">
            Services We're Offering To Our Customers
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-500 mt-4">
            There are many variations of passages of available but the majority have suffered alteration.
          </p>

          {/* Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#ffaa17] hover:text-white transition text-gray-700 shadow prev">
              <FaArrowLeft size={20} />
            </button>

            <button className="w-12 h-12 rounded-full bg-gray-100 hover:bg-[#ffaa17] hover:text-white transition text-gray-700 shadow next">
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          className="pb-16"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className="bg-white rounded-xl shadow-xl overflow-hidden transition transform hover:-translate-y-2">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-300 hover:scale-110"
                  />

                  <div className="absolute top-5 right-5 w-16 h-16 rounded-full bg-[#ffaa17] flex items-center justify-center text-white text-2xl shadow-md">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <span className="absolute -top-6 left-6 text-7xl font-extrabold text-black/5">
                    {service.id}
                  </span>

                  <h3 className="text-xl font-bold text-[#24201f] mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{service.desc}</p>

                  <a
                    href="#"
                    className="text-[#ffaa17] font-semibold inline-flex items-center gap-2 hover:text-[#de8d00]"
                  >
                    Learn More <FaArrowRight />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default ServicesSection;
