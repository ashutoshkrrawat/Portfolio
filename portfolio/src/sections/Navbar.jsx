import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import profilePic from "../assets/linkedinprofile.jpeg";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#project" },
    { name: "Stack", href: "#techstack" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(item.name.toLowerCase());
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0
        z-50
        transition-all duration-300
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${scrolled 
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-lg" 
          : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-3">
            <img
              src={profilePic}
              alt="Ashutosh"
              className="
                w-10 h-10
                rounded-full
                object-cover
                border-2 border-theme-teal-500
                shadow-[0_0_10px_hsl(var(--color-primary)/0.5)]
              "
            />
            <span className="text-white font-semibold text-lg hidden sm:block">
              Ashutosh
            </span>
          </div>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`
                    relative
                    text-base font-medium
                    transition-all duration-300
                    ${
                      activeSection === item.name.toLowerCase()
                        ? "text-theme-teal-400"
                        : "text-white/70 hover:text-white"
                    }
                  `}
                >
                  {item.name}

                  {activeSection === item.name.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-theme-teal-500" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="
                    p-2 
                    text-white/70 hover:text-white
                    hover:bg-white/10
                    rounded-lg
                    transition-all
                  "
                >
                  <Menu size={24} />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="
                  w-[300px] 
                  bg-black/95 backdrop-blur-xl
                  border-white/10
                "
              >
                <div className="flex flex-col gap-6 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`
                        text-xl font-medium
                        transition-colors
                        ${
                          activeSection === item.name.toLowerCase()
                            ? "text-theme-teal-400"
                            : "text-white/70 hover:text-white"
                        }
                      `}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
