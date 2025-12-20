import React from "react";
import { Github, Linkedin, Twitter, Mail, Instagram, ExternalLink } from "lucide-react";

export default function Socials() {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/ashutoshkrrawat",
      icon: <Github size={24} />,
      gradient: "from-purple-500 to-pink-500",
      description: "Check out my open source projects",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/ashutosh",
      icon: <Linkedin size={24} />,
      gradient: "from-blue-500 to-cyan-500",
      description: "Let's connect professionally",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/ashutosh",
      icon: <Instagram size={24} />,
      gradient: "from-pink-500 to-orange-500",
      description: "Follow my creative journey",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ashutosh",
      icon: <Twitter size={24} />,
      gradient: "from-sky-400 to-blue-500",
      description: "Stay updated with my thoughts",
    },
    {
      name: "Email",
      url: "mailto:ashutosh@email.com",
      icon: <Mail size={24} />,
      gradient: "from-green-400 to-emerald-500",
      description: "Drop me a message anytime",
    },
  ];

  return (
    <section className="relative py-32 min-h-screen overflow-hidden bg-transparent">
      
      {/* BLEND TOP */}
      <div className="absolute -top-24 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#060b12]" />

      {/* Floating orbs for visual depth */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20">
          <span className="text-teal-400 text-sm font-medium">Let's Connect</span>
        </div>
        
        <h2 className="text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-teal-200 to-white bg-clip-text text-transparent">
          Get in Touch
        </h2>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          I'm always excited to collaborate on innovative projects, exchange ideas, 
          or simply have a great conversation about tech and creativity 🚀
        </p>
      </div>

      {/* Social Cards Grid */}
      <div className="max-w-5xl mx-auto mt-20 px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full p-6 rounded-2xl bg-[#0d1321]/40 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden">
                
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${link.gradient} text-white shadow-lg`}>
                      {link.icon}
                    </div>
                    <ExternalLink className="text-gray-500 group-hover:text-white transition-colors" size={18} />
                  </div>
                  
                  <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300">
                    {link.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {link.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${link.gradient} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              </div>
            </a>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm mb-4">Prefer email?</p>
          <a 
            href="mailto:ashutosh@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105"
          >
            <Mail size={20} />
            Send me a message
          </a>
        </div>
      </div>

      {/* BLEND BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-transparent to-[#060b12]" />
    </section>
  );
}