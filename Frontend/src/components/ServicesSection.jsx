import { FaChartLine, FaLightbulb, FaBullhorn, FaUsersCog } from "react-icons/fa";
import { MdOutlineDesignServices, MdOutlineBusinessCenter } from "react-icons/md";

export default function Services() {
  const services = [
    {
      icon: <FaBullhorn size={40} className="text-pink-500 drop-shadow-[0_0_6px_rgba(255,0,128,0.4)]" />,
      title: "Marketing",
      desc: "Even the all-powerful Pointing ",
    },
     {
      icon: <FaUsersCog size={40} className="text-blue-500 drop-shadow-[0_0_6px_rgba(0,102,255,0.4)]" />,
      title: "Optimization",
      desc: "Even the all-powerful Pointing ",
    },
    {
      icon: <MdOutlineBusinessCenter size={40} className="text-red-500 drop-shadow-[0_0_6px_rgba(255,0,0,0.4)]" />,
      title: "Business Strategy",
      desc: "Even the all-powerful Pointing ",
    },
    {
      icon: <FaChartLine size={40} className="text-green-500 drop-shadow-[0_0_6px_rgba(0,255,100,0.4)]" />,
      title: "SEO",
      desc: "Even the all-powerful Pointing ",
    },
    {
      icon: <MdOutlineDesignServices size={40} className="text-purple-500 drop-shadow-[0_0_6px_rgba(160,0,255,0.4)]" />,
      title: "UI/UX Design",
      desc: "Even the all-powerful Pointing ",
    },
    {
      icon: <FaLightbulb size={40} className="text-yellow-500 drop-shadow-[0_0_6px_rgba(255,215,0,0.4)]" />,
      title: "Creative",
      desc: "Even the all-powerful Pointing ",
    },
    {
      icon: <FaUsersCog size={40} className="text-blue-500 drop-shadow-[0_0_6px_rgba(0,102,255,0.4)]" />,
      title: "Optimization",
      desc: "Even the all-powerful Pointing ",
    },
    {
      icon: <MdOutlineBusinessCenter size={40} className="text-red-500 drop-shadow-[0_0_6px_rgba(255,0,0,0.4)]" />,
      title: "Business Strategy",
      desc: "Even the all-powerful Pointing ",
    },
  ];

  return (
    <section className="px-8 lg:px-20 py-20 bg-white text-gray-700">
      <div className="flex flex-col lg:flex-row gap-12 items-start">

        {/* Left Section */}
        <div className="lg:w-[40%] w-full">
          <p className="text-blue-500 font-semibold tracking-widest mb-4">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 leading-snug">
            We Provide A Lot of <br /> Cool Services
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            Far far away, behind the word mountains, far from the 
            countries Vokalia and Consonantia, there live the blind texts.
            Separated they live in Bookmarksgrove right at the coast of the 
            Semantics, a large language ocean.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition">
            Our Services
          </button>
        </div>

        {/* Right Section */}
        <div className="lg:w-[70%] w-full grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 shadow-lg rounded-2xl flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition cursor-pointer border border-transparent hover:border-purple-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm text-center leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
