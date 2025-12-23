import viteClean from "@/assets/vite-clean.png";
import mediBridge from "@/assets/MediBridge.png";
import lifeLine from "@/assets/Lifeline.png";
import qwerty from "@/assets/qwerty.png";

export const projects = [
  {
    id: 1,
    title: "vite-clean-cli",
    description:
      "A powerful CLI tool to create clean Vite React projects without boilerplate files, with optional Tailwind CSS v3 integration.",
    image: viteClean,
    tags: ["Nodejs", "Vite", "React", "NPM"],
    live: "https://www.npmjs.com/package/vite-clean-cli",
    github: "",
  },
  {
    id: 2,
    title: "MediBridge",
    description:
      "A solution built for managing the big queue in OPD's by using the AI voice command and online booking feature. Built in Martinovation, A hackathon by Usha Marting University",
    image: mediBridge,
    tags: ["Nodejs", "MongoDB", "Express", "React", "Gemini Model","Tailwind"],
    live: "",
    github: "https://github.com/prana-W/MediBridge",
  },
  {
    id: 3,
    title: "LifeLine",
    description:
      "A platform which connects the Hospital, Pharmacy and User having feature such as One click ambulance and emergency alert system. Built during the Electrohack hackathon by EES (Electrical Engineering Society of NIT Jamshedpur)",
    image: lifeLine,
    tags: ["Nodejs", "MongoDB", "Express", "React", "Gemini Model","Tailwind"],
    live: "",
    github: "https://github.com/prana-W/LifeLine",
  },
  {
    id: 4,
    title: "Qwerty",
    description:
      "A typing platform which calculates the typing speed in WPM",
    image: qwerty,
    tags: ["React", "Tailwind",],
    live: "https://typing-project-lhur.vercel.app/",
    github: "https://github.com/ashutoshkrrawat/Typing-Project",
  },
];
