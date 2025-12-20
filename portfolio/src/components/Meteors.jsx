"use client";
import React, { useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

export function Meteors({
  children,
  className = "",
  staticStarCount = 200,
  meteorFrequency = 1200,
  meteorLifetime = 1600,
  starColor = "#ffffff",
  meteorColor = "#8ecae6",
}) {

  const [activeMeteors, setActiveMeteors] = useState([]);

  const staticStars = useMemo(() => {
    return Array.from({ length: staticStarCount }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 5,
    }));
  }, [staticStarCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      const meteor = {
        id: Date.now() + Math.random(),
        // Start from top area, random horizontal position
        top: Math.random() * 30, // 0-30% from top
        left: Math.random() * 100, // anywhere horizontally
      };

      setActiveMeteors(prev => [...prev, meteor]);

      setTimeout(() => {
        setActiveMeteors(prev => prev.filter(m => m.id !== meteor.id));
      }, meteorLifetime);

    }, meteorFrequency);

    return () => clearInterval(interval);
  }, [meteorFrequency, meteorLifetime]);

  return (
    <div className={cn("relative w-full h-full overflow-hidden bg-black", className)}>

      {/* actual content */}
      <div className="relative z-10">{children}</div>

      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {staticStars.map(star => (
          <span
            key={star.id}
            className="absolute rounded-full opacity-60"
            style={{
              backgroundColor: starColor,
              width: star.size + "px",
              height: star.size + "px",
              top: star.top + "%",
              left: star.left + "%",
              animation: `twinkle ${star.duration}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* meteors - diagonal movement from top-right to bottom-left */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {activeMeteors.map(meteor => (
          <span
            key={meteor.id}
            className="meteor absolute rounded-full"
            style={{
              backgroundColor: meteorColor,
              width: "3px",
              height: "3px",
              top: meteor.top + "%",
              left: meteor.left + "%",
              boxShadow: `0 0 10px 2px ${meteorColor}`,
              animation: `meteorDiagonal ${meteorLifetime}ms ease-in forwards`,
              "--meteor-color": meteorColor,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes meteorDiagonal {
          0% {
            transform: translate(0, 0) rotate(135deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translate(-450px, 450px) rotate(135deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        .meteor::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          height: 2px;
          width: 90px;
          transform-origin: right center;
          transform: translateX(90px);
          background: linear-gradient(
            90deg,
            var(--meteor-color) 0%,
            rgba(255,255,255,0.8) 40%,
            transparent 100%
          );
          border-radius: 50%;
          filter: blur(1px);
        }

        .meteor::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          height: 1px;
          width: 110px;
          transform-origin: right center;
          transform: translateX(110px);
          background: linear-gradient(
            90deg,
            var(--meteor-color) 0%,
            transparent 100%
          );
          filter: blur(2px);
        }
      `}</style>

    </div>
  );
}

// Demo Component
export default function Demo() {
  const [frequency, setFrequency] = useState(1200);
  const [starColor, setStarColor] = useState("#ffffff");
  const [meteorColor, setMeteorColor] = useState("#8ecae6");

  return (
    <div className="w-full h-screen">
      {/* Controls */}
      <div className="fixed top-4 right-4 z-50 bg-gray-900/90 backdrop-blur p-4 rounded-lg shadow-xl max-w-xs">
        <h3 className="text-white font-bold mb-4">Controls</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-white text-sm block mb-2">
              Frequency: {frequency}ms
            </label>
            <input
              type="range"
              min="200"
              max="3000"
              step="100"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="text-white text-sm block mb-2">
              Star Color
            </label>
            <input
              type="color"
              value={starColor}
              onChange={(e) => setStarColor(e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>

          <div>
            <label className="text-white text-sm block mb-2">
              Meteor Color
            </label>
            <input
              type="color"
              value={meteorColor}
              onChange={(e) => setMeteorColor(e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>

          <div className="pt-2">
            <p className="text-xs text-gray-400">Presets:</p>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <button
                onClick={() => {
                  setStarColor("#ffffff");
                  setMeteorColor("#8ecae6");
                }}
                className="px-3 py-1 bg-cyan-600 text-white text-xs rounded hover:bg-cyan-500"
              >
                Default
              </button>
              <button
                onClick={() => {
                  setStarColor("#fbbf24");
                  setMeteorColor("#f59e0b");
                }}
                className="px-3 py-1 bg-orange-600 text-white text-xs rounded hover:bg-orange-500"
              >
                Golden
              </button>
              <button
                onClick={() => {
                  setStarColor("#a78bfa");
                  setMeteorColor("#8b5cf6");
                }}
                className="px-3 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-500"
              >
                Purple
              </button>
              <button
                onClick={() => {
                  setStarColor("#86efac");
                  setMeteorColor("#22c55e");
                }}
                className="px-3 py-1 bg-green-600 text-white text-xs rounded hover:bg-green-500"
              >
                Green
              </button>
            </div>
          </div>
        </div>
      </div>

      <Meteors
        staticStarCount={200}
        meteorFrequency={frequency}
        meteorLifetime={1600}
        starColor={starColor}
        meteorColor={meteorColor}
      >
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">
              Diagonal Meteor Shower
            </h1>
            <p className="text-xl text-gray-300">
              Meteors falling from top-right to bottom-left
            </p>
          </div>
        </div>
      </Meteors>
    </div>
  );
}