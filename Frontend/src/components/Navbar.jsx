import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

// React Icons
import {
  FaUsers,
  FaHandshake,
  FaCogs,
  FaShieldAlt,
  FaHeart,
} from "react-icons/fa";
import { MdWeb, MdDesignServices } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const closeDropdownTimer = React.useRef(null);

  const handleMouseLeave = () => {
    closeDropdownTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleMouseEnter = (dropdown) => {
    if (closeDropdownTimer.current) {
      clearTimeout(closeDropdownTimer.current);
    }
    setActiveDropdown(dropdown);
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-[1300px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img
            src="/images/logo6.png"
            alt="Skill Nexora Logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10 text-white text-[15px] font-semibold">
          {/* COMPANY DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
              <span>Company</span>
              <span>▼</span>
            </div>

            <div
              className={`absolute left-0 top-full ${
                activeDropdown === "company"
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } transition-all duration-200 mt-3 w-[720px] bg-[#5A4845] text-white p-6 rounded-xl shadow-xl z-50`}
            >
              <div className="grid grid-cols-2 gap-6">
                <Link
                  to="/about"
                  className="flex gap-3 hover:bg-white/10 p-3 rounded-lg cursor-pointer"
                >
                  <div className="bg-white p-3 rounded-md text-black">
                    <FaUsers size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[16px]">About Us</h3>
                    <p className="text-[13px] text-gray-300">
                      Who we are and what we stand for
                    </p>
                  </div>
                </Link>

                <Link
                  to="/values"
                  className="flex gap-3 hover:bg-white/10 p-3 rounded-lg cursor-pointer"
                >
                  <div className="bg-white p-3 rounded-md text-black">
                    <FaHeart size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[16px]">Our Values</h3>
                    <p className="text-[13px] text-gray-300">
                      What guides our company vision
                    </p>
                  </div>
                </Link>

                <Link
                  to="/quality"
                  className="flex gap-3 hover:bg-white/10 p-3 rounded-lg cursor-pointer"
                >
                  <div className="bg-white p-3 rounded-md text-black">
                    <FaShieldAlt size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[16px]">
                      Quality Assurance
                    </h3>
                    <p className="text-[13px] text-gray-300">
                      Reliability & trust guaranteed
                    </p>
                  </div>
                </Link>

                <Link
                  to="/process"
                  className="flex gap-3 hover:bg-white/10 p-3 rounded-lg cursor-pointer"
                >
                  <div className="bg-white p-3 rounded-md text-black">
                    <FaCogs size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[16px]">
                      Development Process
                    </h3>
                    <p className="text-[13px] text-gray-300">
                      From idea to delivery
                    </p>
                  </div>
                </Link>

                <Link
                  to="/partners"
                  className="flex gap-3 hover:bg-white/10 p-3 rounded-lg cursor-pointer"
                >
                  <div className="bg-white p-3 rounded-md text-black">
                    <FaHandshake size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[16px]">Partnerships</h3>
                    <p className="text-[13px] text-gray-300">
                      Collaborations & ecosystem
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
              <span>Services</span>
              <span>▼</span>
            </div>

            <div
              className={`absolute left-0 top-full ${
                activeDropdown === "services"
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } transition-all duration-200 mt-3 w-[720px] bg-[#5A4845] text-white p-6 rounded-xl shadow-xl z-50`}
            >
              <div className="grid grid-cols-2 gap-6">
                <Link to="/web-development" className="flex gap-3 hover:bg-white/10 p-3 rounded-lg cursor-pointer">
                  <div className="bg-white p-3 rounded-md text-black">
                    <MdWeb size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Web Development</h3>
                    <p className="text-[13px] text-gray-300">
                      Modern websites & portals
                    </p>
                  </div>
                </Link>

                <Link to="/ui-ux-design" className="flex gap-3 hover:bg-white/10 p-3 rounded-lg cursor-pointer">
                  <div className="bg-white p-3 rounded-md text-black">
                    <MdDesignServices size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold">UI / UX Design</h3>
                    <p className="text-[13px] text-gray-300">
                      Interactive & creative design
                    </p>
                  </div>
                </Link>

                <Link to="/app-development" className="flex gap-3 hover:bg-white/10 p-3 rounded-lg cursor-pointer">
                  <div className="bg-white p-3 rounded-md text-black">
                    <AiOutlineFundProjectionScreen size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold">App Development</h3>
                    <p className="text-[13px] text-gray-300">
                      Android & iOS apps
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* OUR WORK DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("work")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
              <span>Our Work</span>
              <span>▼</span>
            </div>

            <div
              className={`absolute left-0 top-full ${
                activeDropdown === "work"
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } transition-all duration-200 mt-3 w-[500px] bg-[#5A4845] text-white p-6 rounded-xl shadow-xl z-50`}
            >
              <div className="grid grid-cols-1 gap-4">
                <Link to="/portfolio" className="flex gap-3 hover:bg-white/10 p-3 rounded-lg cursor-pointer">
                  <div className="bg-white p-3 rounded-md text-black">
                    <AiOutlineFundProjectionScreen size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Portfolio</h3>
                    <p className="text-[13px] text-gray-300">
                      See our recent projects
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* CLIENTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("clients")}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
              <span>Clients</span>
              <span>▼</span>
            </div>

            <div
              className={`absolute left-0 top-full ${
                activeDropdown === "clients"
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              } transition-all duration-200 mt-3 w-[400px] bg-[#5A4845] text-white p-6 rounded-xl shadow-xl z-50`}
            >
              <Link to="/clients" className="flex gap-3 hover:bg-white/10 p-3 rounded-lg cursor-pointer">
                <div className="bg-white p-3 rounded-md text-black">
                  <IoIosPeople size={22} />
                </div>
                <div>
                  <h3 className="font-semibold">Our Clients</h3>
                  <p className="text-[13px] text-gray-300">
                    Brands that trust us
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <Link to="/contact">
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
              <span>Contact us</span>
            </div>
          </Link>
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden md:flex items-center bg-yellow-400 px-6 py-3 rounded-sm cursor-pointer">
          <span className="text-white font-semibold tracking-wide">
            Let's Talk
          </span>
        </div>

        {/* Mobile menu button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-black p-6 text-white space-y-4">
          <a href="#">Home</a>
          <a href="#">Company</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
      )}
    </header>
  );
}
