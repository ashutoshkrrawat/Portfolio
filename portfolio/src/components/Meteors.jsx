"use client";
import React from "react";

export function Meteors({ 
  meteorCount = 10,      // how many meteors fall
  starCount = 100,      // how many stars stay static
  intervalMs = 2000,    
  children 
}) {
  const meteors = new Array(meteorCount).fill(true);
  const stars = new Array(starCount).fill(true);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">

      {/* ==== CONTENT GOES ABOVE THE SKY ==== */}
      <div className="relative z-10">
        {children}
      </div>

      {/* ==== STATIC STARS ==== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((_, i) => (
          <span
            key={"star" + i}
            className="absolute rounded-full bg-white opacity-60"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `twinkle ${3 + Math.random() * 5}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* ==== FALLING METEORS ==== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {meteors.map((_, i) => (
          <span
            key={"meteor" + i}
            className="absolute h-[2px] w-[2px] rotate-[215deg] rounded-full bg-white shadow-[0_0_8px_3px_#ffffff50]"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animation: `meteorShower 1.4s linear infinite`,
              animationDelay: `${(i * intervalMs) / meteorCount}ms`,
            }}
          />
        ))}
      </div>

      {/* ==== KEYFRAMES ==== */}
      <style jsx>{`
        @keyframes meteorShower {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          60% {
            opacity: 1;
          }
          100% {
            transform: translate(-400px, 400px);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  );
}
