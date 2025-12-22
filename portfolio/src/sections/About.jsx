import { WordRotate } from "@/components/WordRotate";
import { Badge } from "@/components/ui/badge";
import profilePic from "../assets/anshimg6.png";
import { useEffect, useState } from "react";

export default function About() {
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

    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skills = [
    "MERN", "Tailwind", "Git", "Github"
  ];

  const interests = [
    "Web Development", "Problem Solving", "CP","Typing"
  ];

  return (
    <section
      id="about"
      className="
        relative
        min-h-screen
        py-24
        overflow-hidden
        bg-transparent
        [mask-image:linear-gradient(to_bottom,transparent,black_20%)]
        [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_20%)]
      "
    >
      {/* SUBTLE GRID BACKGROUND */}
      {/* <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              0deg,
              rgba(255,255,255,0.05) 0 1px,
              transparent 1px 100px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255,255,255,0.05) 0 1px,
              transparent 1px 100px
            )
          `,
          backgroundColor: "#000000",
        }}
      /> */}

      {/* MINIMAL PARTICLES - Tiny dots */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/50"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `floatSubtle ${Math.random() * 15 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div> */}

      {/* SECTION HEADING */}
      <div className="text-center mb-20 mt-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <h2 className="md:text-5xl font-bold text-white py-10">
            <WordRotate 
              words={["About Me", "Who I Am", "Get to Know Me"]}
              className="font-doto text-6xl"
            />
          </h2>
          <div className="mt-4 h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-theme-primary to-transparent" />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        
        {/* LEFT — TEXT */}
        <div className={`w-full md:w-1/2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
          <div className="space-y-6">
            {/* Introduction */}
            <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-theme-primary to-theme-primary-light">
                  Ashutosh
                </span>
              </h3>

              <p className="text-white/80 text-lg leading-relaxed mb-4">
                I'm a passionate full-stack web developer and student specializing in 
                modern web technologies. I love creating seamless digital experiences 
                that combine beautiful design with powerful functionality.
              </p>

              <p className="text-white/80 text-lg leading-relaxed">
                Currently pursuing my degree from NIT Jamshedpur while building real-world projects, I'm 
                constantly learning and pushing the boundaries of what's possible on the web. 
                My focus is on writing clean, efficient code and crafting intuitive user interfaces.
              </p>
            </div>

            {/* What I Do Section */}
            <div className={`pt-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="text-xl font-semibold text-white mb-3">
                What I Do
              </h4>
              <p className="text-white/80 leading-relaxed">
                I specialize in building responsive, performant web applications using 
                React and modern JavaScript frameworks. From concept to deployment, I handle 
                both frontend aesthetics and backend logic to create complete solutions.
              </p>
            </div>

            {/* Skills Section */}
            <div className={`pt-2 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                Technical Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:border-theme-primary/30 hover:text-theme-teal-300 transition-all duration-300 px-4 py-1.5 text-sm font-normal"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${idx * 0.08}s backwards`
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Interests Section */}
            <div className={`pt-2 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                Areas of Interest
              </h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, idx) => (
                  <Badge
                    key={interest}
                    variant="outline"
                    className="border-white/20 text-white/60 hover:bg-white/5 hover:text-theme-teal-300 transition-all duration-300 px-4 py-1.5 text-sm font-normal"
                    style={{
                      animation: `fadeInUp 0.5s ease-out ${(idx + skills.length) * 0.08}s backwards`
                    }}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className={`pt-4 flex items-center gap-6 text-sm text-white/50 transition-all duration-700 delay-[900ms] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-theme-primary rounded-full" />
                <span>Electrical Engineering Student</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-theme-primary rounded-full" />
                <span>Based in India</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className={`w-full md:w-1/2 flex justify-center md:justify-end transition-all duration-1000 delay-[600ms] ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
          <div className="relative h-[500px] md:h-[600px] group">
            
            {/* Image Container */}
            <div className="relative h-full overflow-hidden rounded-xl border border-white/30 transition-all duration-500">
              <img
                src={profilePic}
                alt="Ashutosh"
                className="h-full w-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 80% 90% at center, black 40%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 80% 90% at center, black 40%, transparent 100%)",
                }}
              />
              
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-theme-bg-secondary/80 via-transparent to-transparent" />
            </div>

            {/* Decorative Corner Elements */}
            <div className={`absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-theme-primary/30 rounded-tr-xl transition-all duration-700 delay-[800ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
            <div className={`absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-theme-primary/30 rounded-bl-xl transition-all duration-700 delay-[1000ms] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`} />
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes floatSubtle {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(15px, -15px); }
          66% { transform: translate(-10px, 10px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      {/* BLEND TO NEXT SECTION */}
{/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#060b12]" /> */}

    </section>
  );
}