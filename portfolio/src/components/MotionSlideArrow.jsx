import { useEffect, useState } from 'react';

export default function AnimatedScrollArrow() {
  const [key, setKey] = useState(0);

  // Reset animation cycle every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center mt-8">
      <div className="relative w-20 h-12">
        {/* Single Chevron Arrow that does everything */}
        <svg
          key={key}
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 80 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            animation: 'slideDown 1s ease-in 2.5s forwards'
          }}
        >
          {/* Fill that appears after border (from center outward) */}
          <path
            d="M 40 38 L 10 8 L 40 38 L 70 8 L 40 38"
            fill="url(#arrowGradient)"
            style={{
              opacity: 0,
              animation: 'fillArrow 1s ease-out 1.2s forwards',
              transformOrigin: '40px 23px',
              filter: 'drop-shadow(0 0 8px rgba(16, 185, 183, 0.6))'
            }}
          />

          {/* Border stroke that draws first and stays visible */}
          <path
            d="M 10 8 L 40 38 L 70 8"
            stroke="url(#arrowGradient)"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 100,
              animation: 'drawBorder 1.2s ease-out forwards',
              filter: 'drop-shadow(0 0 6px rgba(16, 185, 183, 0.8))'
            }}
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B9B7" />
              <stop offset="100%" stopColor="#6CF2F0" />
            </linearGradient>
          </defs>
        </svg>

        <style>{`
          @keyframes drawBorder {
            to {
              stroke-dashoffset: 0;
            }
          }

          @keyframes fillArrow {
            0% {
              opacity: 0;
              transform: scale(0);
            }
            50% {
              opacity: 0.8;
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes slideDown {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(80px);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  );
}