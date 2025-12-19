import { useEffect, useState } from "react";
import TechSection from "@/components/TechSection";
import { techStack } from "@/data/TechStackData.js";
import { WordRotate } from "@/components/WordRotate";

export default function TechStackPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("tech-stack-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="tech-stack-section"
      className="relative pt-4 pb-32 overflow-hidden bg-gradient-to-b from-[#060b12] via-[#0a0f12] to-[#03070f]"
    >
      {/* ===== BLEND TOP WITH PREVIOUS SECTION ===== */}
      <div className="pointer-events-none absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#060b12] z-10" />

      {/* ===== SUBTLE GRID BACKGROUND ===== */}
      <div
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.04) 0 1px,
              transparent 1px 80px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.04) 0 1px,
              transparent 1px 80px
            )
          `,
        }}
      />

      {/* ===== PARTICLES ===== */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `floatSubtle ${
                Math.random() * 18 + 12
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      {/* ===== PAGE HEADING ===== */}
      <div
        className={`max-w-7xl mx-auto px-6 mb-20 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        }`}
      >
        <h2 className="text-center text-4xl md:text-6xl font-bold text-white mb-6">
          <WordRotate
            words={["Tech Stack", "Tools", "What I Use"]}
            className="text-white font-doto text-6xl"
          />
          
        </h2>

        <div className="mt-6 h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-[#10B9B7] to-transparent rounded-full" />
      </div>

      {/* ===== CONTENT ===== */}
      <div
        className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <TechSection
          title="Frontend"
          techs={techStack.frontend}
          delay={0.2}
          accent="#6CF2F0"
        />

        <TechSection
          title="Backend"
          techs={techStack.backend}
          delay={0.3}
          accent="#5EEAD4"
        />

        <TechSection
          title="Database"
          techs={techStack.database}
          delay={0.4}
          accent="#4CC8C2"
        />

        <TechSection
          title="Tools"
          techs={techStack.tools}
          delay={0.5}
          accent="#3AB2A0"
        />
      </div>

      <style jsx>{`
        @keyframes floatSubtle {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% {
            transform: translate(18px, -18px);
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
}
