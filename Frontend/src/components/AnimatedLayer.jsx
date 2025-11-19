import React from "react";

export default function AnimatedLayer() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* MAIN SPINNING IMAGE */}
      <div className="absolute animate-spin-slow">
        <img
          src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/img.png"
          alt="layer main"
          className="w-[380px] md:w-[450px] lg:w-[490px]"
        />
      </div>

      {/* TOP IMAGE */}
      <div className="absolute">
        <img
          src="https://dev252.kodesolution.com/digiplus/wp-content/uploads/2025/06/img-1-1.png"
          alt="layer top"
          className="w-[220px] md:w-[280px] lg:w-[300px]"
        />
      </div>
    </div>
  );
}

/* Add to your global CSS or Tailwind config */
/* In globals.css */
/*
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 18s linear infinite;
}
*/
