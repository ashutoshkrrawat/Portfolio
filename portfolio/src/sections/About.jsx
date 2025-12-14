import profilePic from "../assets/anshimg7.png";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden min-h-screen flex items-center
      bg-[#060b12]
    [mask-image:linear-gradient(to_bottom,transparent,black_20%)]
    [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_20%)]
      "
    >
      {/* GRID BACKGROUND WITH LEFT-TO-RIGHT FADE */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(16, 185, 183, 0.08) 0 1px, transparent 1px 50px), repeating-linear-gradient(90deg, rgba(16, 185, 183, 0.08) 0 1px, transparent 1px 50px)",
          backgroundColor: "#000000",
        }}
      />
      
      {/* GRADIENT OVERLAY - FADES GRID FROM LEFT TO RIGHT */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(to left, transparent 0%, rgba(10, 14, 39, 0.7) 90%, rgba(10, 14, 39, 1) 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* LEFT SIDE CONTENT */}
        <div className="w-full md:w-1/2 z-10">
          <h3 className="text-sm text-[#6CF2F0] font-semibold mb-3 uppercase tracking-wider">
            About Me
          </h3>

          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
            Hi, I'm  
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10B9B7] to-[#6CF2F0]">
              {" "}Ashutosh
            </span>
          </h2>

          <p className="text-white/70 mb-6 max-w-lg text-lg leading-relaxed">
            I'm a web developer focused on building smooth, animated and modern
            user interfaces using React, Tailwind, and motion libraries.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-[#10B9B7] text-black font-semibold shadow-md hover:brightness-110 transition"
            >
              Hire Me
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — ENLARGED IMAGE WITH FADE EFFECT */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
            {/* Glow effect behind image */}
            {/* <div
              className="absolute inset-0 bg-gradient-to-br from-[#10B9B7]/20 to-[#6CF2F0]/20 blur-3xl"
            /> */}
            
            {/* Image with fade-out edges */}
            <div className="relative w-full h-full flex items-center justify-end">
              <img
                src={profilePic}
                alt="Profile"
                className="h-full w-auto object-cover rounded-xl"
                style={{
                  maskImage: "radial-gradient(ellipse 80% 90% at center, black 40%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(ellipse 80% 90% at center, black 40%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}