import javascript from "@/assets/logos/javascript.png";
import typescript from "@/assets/logos/typescript.png";
import react from "@/assets/logos/react.png";
import redux from "@/assets/logos/redux.png";
import tailwind from "@/assets/logos/tailwindcss.png";
import shadcn from "@/assets/logos/shadcn.png";
import html from "@/assets/logos/html5.png";

import nodejs from "@/assets/logos/nodejs.png";
import express from "@/assets/logos/express.png";
import socketio from "@/assets/logos/socketio.png";

import mongodb from "@/assets/logos/mongodb.png";

import git from "@/assets/logos/git.png";
import github from "@/assets/logos/github.png";
import vscode from "@/assets/logos/vscode.png";
import docker from "@/assets/logos/docker.png";
import vercel from "@/assets/logos/vercel.png";
import postman from "@/assets/logos/postman.png";

export const techStack = {
  frontend: [
    { name: "JavaScript", icon: javascript, bgColor: "#F7DF1E", textColor: "#000" },
    { name: "TypeScript", icon: typescript, bgColor: "#3178C6", textColor: "#fff" },
    { name: "React", icon: react, bgColor: "#61DAFB", textColor: "#000" },
    { name: "Redux", icon: redux, bgColor: "#764ABC", textColor: "#fff" },
    { name: "Tailwind CSS", icon: tailwind, bgColor: "#06B6D4", textColor: "#fff" },
    { name: "Shadcn", icon: shadcn, bgColor: "#000", textColor: "#fff" },
    { name: "HTML", icon: html, bgColor: "#E34F26", textColor: "#fff" },
  ],
  backend: [
    { name: "Node.js", icon: nodejs, bgColor: "#339933", textColor: "#fff" },
    { name: "Express.js", icon: express, bgColor: "#000", textColor: "#fff" },
    { name: "Socket.io", icon: socketio, bgColor: "#010101", textColor: "#fff" },
  ],
  database: [
    { name: "MongoDB", icon: mongodb, bgColor: "#47A248", textColor: "#fff" },
  ],
  tools: [
    { name: "Git", icon: git, bgColor: "#F05032", textColor: "#fff" },
    { name: "GitHub", icon: github, bgColor: "#181717", textColor: "#fff" },
    { name: "VS Code", icon: vscode, bgColor: "#007ACC", textColor: "#fff" },
    { name: "Docker", icon: docker, bgColor: "#2496ED", textColor: "#fff" },
    { name: "Vercel", icon: vercel, bgColor: "#000", textColor: "#fff" },
    { name: "Postman", icon: postman, bgColor: "#FF6C37", textColor: "#fff" },
  ],
};
