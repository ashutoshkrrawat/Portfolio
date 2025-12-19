
import { useEffect, useState } from "react";
import TechSection from "@/components/TechSection";
import { techStack } from "@/data/TechStackData.js";

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

    const section = document.getElementById('tech-stack-section');
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
      className="relative min-h-screen py-24 overflow-hidden bg-transparent"
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Minimal Particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `floatSubtle ${Math.random() * 20 + 15}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div className={`max-w-7xl mx-auto px-6 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-4xl">✱</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white/60 uppercase tracking-wider">
            My Stack
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Frontend Section */}
        <TechSection
          title="Frontend"
          techs={techStack.frontend}
          delay={0.2}
        />

        {/* Backend Section */}
        <TechSection
          title="Backend"
          techs={techStack.backend}
          delay={0.4}
        />

        {/* Database Section */}
        <TechSection
          title="Database"
          techs={techStack.database}
          delay={0.6}
        />

        {/* Tools Section */}
        <TechSection
          title="Tools"
          techs={techStack.tools}
          delay={0.8}
        />

      </div>

      <style jsx>{`
        @keyframes floatSubtle {
          0%, 100% { 
            transform: translate(0, 0);
            opacity: 0.3;
          }
          50% { 
            transform: translate(20px, -20px);
            opacity: 0.6;
          }
        }
      `}</style>
    </section>
  );
}