"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Meteors = ({
  number = 20,
  color = "rgba(255,255,255,0.6)",
  className,
}) => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    let meteorsArray = [];
    for (let i = 0; i < number; i++) {
      meteorsArray.push({
        id: i,
        top: Math.floor(Math.random() * window.innerHeight),
        left: Math.floor(Math.random() * window.innerWidth),
        size: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      });
    }
    setMeteors(meteorsArray);
  }, [number]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="meteor absolute rounded-full"
          style={{
            top: meteor.top,
            left: meteor.left,
            width: meteor.size,
            height: meteor.size,
            background: color,
            animationDelay: `${meteor.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
