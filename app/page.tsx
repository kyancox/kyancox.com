"use client"

import Image from "next/image";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";

import NowPlaying from "@/components/NowPlaying";
import TopTracks from "@/components/TopTracks";

import { ModeToggle } from "@/components/DarkMode";
import SkillCard from "@/components/SkillCard";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";


export default function Home() {

  const skills = {
    "languages": {
      "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "SQL": "https://www.svgrepo.com/show/331760/sql-database-generic.svg"
    },
    "frameworks": {
      "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Expo": "https://www.svgrepo.com/show/341805/expo.svg",
      "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
      "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      "TailwindCSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      "Matplotlib": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
      "scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
    },
    "tools": {
      "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "Supabase": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwLjk4ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI2MyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsb2dvc1N1cGFiYXNlSWNvbjAiIHgxPSIyMC44NjIlIiB4Mj0iNjMuNDI2JSIgeTE9IjIwLjY4NyUiIHkyPSI0NC4wNzElIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjQ5MzYxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM2VjZjhlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxvZ29zU3VwYWJhc2VJY29uMSIgeDE9IjEuOTkxJSIgeDI9IjIxLjQwMyUiIHkxPSItMTMuMTU4JSIgeTI9IjM0LjcwOCUiPjxzdG9wIG9mZnNldD0iMCUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjbG9nb3NTdXBhYmFzZUljb24wKSIgZD0iTTE0OS42MDIgMjU4LjU3OWMtNi43MTggOC40Ni0yMC4zMzggMy44MjQtMjAuNS02Ljk3N2wtMi4zNjctMTU3Ljk4NGgxMDYuMjI5YzE5LjI0IDAgMjkuOTcxIDIyLjIyMyAxOC4wMDcgMzcuMjkyeiIvPjxwYXRoIGZpbGw9InVybCgjbG9nb3NTdXBhYmFzZUljb24xKSIgZmlsbC1vcGFjaXR5PSIwLjIiIGQ9Ik0xNDkuNjAyIDI1OC41NzljLTYuNzE4IDguNDYtMjAuMzM4IDMuODI0LTIwLjUtNi45NzdsLTIuMzY3LTE1Ny45ODRoMTA2LjIyOWMxOS4yNCAwIDI5Ljk3MSAyMi4yMjMgMTguMDA3IDM3LjI5MnoiLz48cGF0aCBmaWxsPSIjM2VjZjhlIiBkPSJNMTA2LjM5OSA0LjM3YzYuNzE3LTguNDYxIDIwLjMzOC0zLjgyNiAyMC41IDYuOTc2bDEuMDM3IDE1Ny45ODRIMjMuMDM3Yy0xOS4yNDEgMC0yOS45NzMtMjIuMjIzLTE4LjAwOC0zNy4yOTJ6Ii8+PC9zdmc+",
      "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    }
  }

  return (
    <main className="" style={{
      backgroundColor: ''
    }}>

      <Hero />


      <section id="skills" className="bg-red-">
        <p className="text-center text-5xl font-bold ">Skills</p>

        <div className="flex xl:flex-row flex-col justify-center items-center ">

          <SkillCard
            title="Programming Languages"
            skills={skills.languages}
          />
          <SkillCard
            title="Frameworks & Libraries"
            skills={skills.frameworks}
          />
          <SkillCard
            title="Development Tools"
            skills={skills.tools}
          />
        </div>


      </section>

      <Projects />

      <section id='experience' className="flex flex-col items-center justify-center">
        <p className="text-center text-5xl font-bold mb-6">Experience</p>

        <Experience />
      </section>

      <About />

      <Contact />

    </main>
  );
}