import LightdarkTheme from "../components/LightdarkTheme.jsx";
const ThemeToggle = LightdarkTheme;
import profilePic from "../assets/profilePic.jpg";
export default function Navbar() {
  return (
    <nav
      className="
        fixed top-4 left-1/2 -translate-x-1/2
        w-[95%] max-w-7xl 
        z-50

        bg-black/40 backdrop-blur-xl
        border border-white/10
        rounded-full
        px-6 py-0

        flex items-center  justify-between
      "
    >

      {/* ---------- LEFT : Profile ---------- */}
      <div className="flex items-center gap-3">
        <img
          src={profilePic}
          alt="Profile"
          className="
            w-10 h-10
            rounded-full
            object-cover
            border border-[#10B9B7]
            shadow-[0_0_10px_#10B9B7]
          "
        />

        <span className="text-white font-semibold hidden sm:block">
          Ashutosh
        </span>
      </div>

      {/* ---------- MIDDLE : Links ---------- */}
      <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="
                relative
                text-white/70
                hover:text-white
                transition-all duration-300

                after:absolute
                after:left-0 after:-bottom-1
                after:w-0
                after:h-[2px]
                after:bg-[#10B9B7]
                hover:after:w-full
                after:transition-all after:duration-300
              "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* ---------- RIGHT : Theme Toggle ---------- */}
      <div className="flex items-center justify-center h-full">
        <ThemeToggle /> 
      </div>

    </nav>
  );
}
