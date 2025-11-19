import React from "react";

const ApproachSection = () => {
  return (
    <section className="relative w-full py-24 bg-[#0d0f2a] overflow-hidden">

      {/* Background soft gradient circle */}
      <div className="absolute left-1/2 top-1/2 w-[900px] h-[900px] bg-[#ffb83530] rounded-full blur-[160px] -translate-x-1/2 -translate-y-1/2"></div>

      {/* Heading */}
      <div className="text-center mb-16 relative z-20">
        <p className="text-[#ffb835] tracking-wider font-semibold">HOW IT WORK</p>
        <h2 className="text-white text-4xl font-bold mt-2">
          Our Approach Is To Create
        </h2>
      </div>

      {/* Main container */}
      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 px-6">

        {/* -------- CARD 01 -------- */}
        <div className="relative bg-[#11132e] hover:caret-amber-500 border border-[#ffffff20] rounded-[20px] p-10 shadow-lg">
          
          {/* Number bubble */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#11132e] border border-[#ffffff40] text-white w-16 h-16 rounded-full flex justify-center items-center text-xl font-bold">
            01
          </div>

          <h3 className="text-white text-2xl font-bold mb-8">Project Planning</h3>

          {/* Buttons */}
          <div className="space-y-4">
            <p className="bg-[#11132e] border border-[#ffffff25] py-3 px-6 rounded-full text-white text-lg ">Project Research</p>
            <p className="bg-[#11132e] border border-[#ffffff25] py-3 px-6 rounded-full text-white text-lg ">Competitive Analysis</p>
            <p className="bg-[#11132e] border border-[#ffffff25] py-3 px-6 rounded-full text-white text-lg ">Define Flow</p>
          </div>

          {/* 3D Shape */}
          <img
            src="/images/Shape-1.png"
            className="absolute right-[-12px] bottom-[-20px] w-38 opacity-90"
            alt=""
          />
        </div>

        {/* -------- CARD 02 -------- */}
        <div className="relative bg-[#11132e] border border-[#ffffff20] rounded-[20px] p-10 shadow-lg">
          
          {/* Number bubble */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#11132e] text-white border border-[#ffffff40] w-16 h-16 rounded-full flex justify-center items-center text-xl font-bold">
            02
          </div>

          <h3 className="text-white text-2xl font-bold mb-8">Development</h3>

          <div className="space-y-4">
            <p className="bg-[#11132e] border border-[#ffffff25] py-3 px-6 rounded-full text-white text-lg ">
              Project Development
            </p>
            <p className="bg-[#11132e] border border-[#ffffff25] py-3 px-6 rounded-full text-white text-lg ">
              Execution
            </p>
            <p className="bg-[#11132e] border border-[#ffffff25] py-3 px-6 rounded-full text-white text-lg ">
              Error Fixing
            </p>
          </div>

          {/* 3D Shape */}
          <img
            src="/images/Shape-2.png"
            className="absolute right-[-2px] bottom-[-2px] w-38 opacity-90"
            alt=""
          />
        </div>

        {/* -------- CARD 03 -------- */}
        <div className="relative bg-[#11132e] border border-[#ffffff20] rounded-[20px] p-10 shadow-lg">
          
          {/* Number bubble */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#11132e] text-white border border-[#ffffff40] w-16 h-16 rounded-full flex justify-center items-center text-xl font-bold">
            03
          </div>

          <h3 className="text-white text-2xl font-bold mb-8">Quick Support</h3>

          <div className="space-y-4">
            <p className="bg-[#11132e] border border-[#ffffff25] py-3 px-6 rounded-full text-white text-lg ">
              Quality assurance
            </p>
            <p className="bg-[#11132e] border border-[#ffffff25] py-3 px-6 rounded-full text-white text-lg ">
              Launch Product
            </p>
            <p className="bg-[#11132e] border border-[#ffffff25] py-3 px-6 rounded-full text-white text-lg ">
              Maintenance
            </p>
          </div>

          {/* 3D Shape */}
          <img
            src="/images/Shape-3.png"
            className="absolute right-[-5px] bottom-[-5px] w-38 opacity-90 "
            alt=""
          />
        </div>

      </div>
    </section>
  );
};

export default ApproachSection;