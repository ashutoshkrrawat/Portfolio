import { useState, useRef } from "react";

export default function MagneticButton({ tech }) {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;
    
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = 80;
    
    if (distance < maxDistance) {
      const strength = 0.25;
      setPosition({
        x: deltaX * strength,
        y: deltaY * strength,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <div
        className="flex items-center gap-3 cursor-pointer group"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: position.x === 0 ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none',
        }}
      >
        {/* Icon */}
        <div 
          className="w-12 h-12 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 p-2"
          style={{ 
            backgroundColor: tech.bgColor,
          }}
        >
          <img 
            src={tech.icon} 
            alt={tech.name}
            className="w-full h-full object-contain"
            style={{ filter: tech.textColor === '#fff' ? 'brightness(0) invert(1)' : 'none' }}
          />
        </div>
        
        {/* Name */}
        <span className="text-white text-lg font-medium group-hover:text-[#10B9B7] transition-colors duration-300">
          {tech.name}
        </span>
      </div>
    </div>
  );
}
