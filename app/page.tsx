"use client"

import Image from "next/image";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";

import NowPlaying from "@/components/NowPlaying";
import TopTracks from "@/components/TopTracks";
import headshot from '@/public/headshot.jpeg'
import githublogo from '@/public/githublogo.svg'
import linkedin from '@/public/linkedin.svg'
import resume from '@/public/resume.svg'

import { ModeToggle } from "@/components/DarkMode";
import SkillCard from "@/components/SkillCard";
import Experience from "@/components/sections/Experience";

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
    <main className="h-screen" style={{
      backgroundColor: ''
    }}>
      <ModeToggle />

      <div className="flex md:flex-row flex-col items-center justify-center md:space-x-4 md:mx-0 mx-4 h-screen">
        <Image
          src={headshot}
          alt="Headshot image"
          width={256}
          height={256}
          className="rounded-full p-2 bg-foreground"
        />
        <div className="">
          <p className="text-start md:text-5xl text-3xl font-semibold">Hi 👋</p>
          <p className="text-start md:text-7xl text-5xl font-medium">I'm <span className="font-bold">Kyan Cox</span>.</p>
          <div>
            <p className="text-start md:text-4xl text-3xl">Aspiring<span> </span>
              <ReactTyped
                className="text-yellow-400 font-semibold"
                strings={['Software Engineer.', 'Full Stack Developer.']}
                typeSpeed={70}
                backSpeed={50}
                loop
              />
            </p>
          </div>


          <div className="flex flex-row items-center justify-center space-x-3 mt-4">

            <button className="py-2.5 px-3.5 rounded-full flex flex-row items-center justify-center space-x-2 hover:translate-y-[-2px] hover:opacity-60 transition-transform duration-300" style={{ backgroundColor: '#2b3137' }}
              onClick={() => window.open('https://www.github.com/kyancox', '_blank')}
            >
              <Image
                src={githublogo}
                alt="Github logo"
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold text-white">GitHub</p>
            </button>

            <button className="py-2.5 px-3.5 rounded-full flex flex-row items-center justify-center space-x-1 hover:translate-y-[-2px] hover:opacity-60 transition-transform duration-300" style={{ backgroundColor: '#0078d4' }}
              onClick={() => window.open('https://www.linkedin.com/in/kyancox', '_blank')}
            >
              <Image
                src={linkedin}
                alt="LinkedIn logo"
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold text-white">LinkedIn</p>
            </button>

            <button className="py-2.5 px-3.5 rounded-full flex flex-row items-center justify-center space-x-2 hover:translate-y-[-2px] hover:opacity-60 transition-transform duration-300" style={{ backgroundColor: '#A8D5BA' }}
              onClick={() => window.open('https://www.linkedin.com/in/kyancox', '_blank')}
            >
              <Image
                src={resume}
                alt="Resume logo"
                width={24}
                height={24}
              />
              <p className="text-lg font-semibold text-black">Resume</p>
            </button>

          </div>

        </div>
      </div>

      <section id='about' className="my-8">
        <p className="text-center text-5xl font-bold mb-6">About</p>
        <div className="flex lg:flex-row flex-col items-center justify-center xl:w-1/2 mx-auto">
          <p className="text-xl text-center font-semibold w-1/2">I’m currently studying at the University of Wisconsin - Madison, pursuing a double major in Computer Science and Statistics, with a minor in Chinese Professional Communication. I’m an aspiring developer fueled by my passions, which you can explore through my projects below.</p>
          <NowPlaying />
        </div>
        <div className="flex items-center justify-center">
          <TopTracks />
        </div>
      </section>

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

      <section id="projects" className="h-screen">
        <p className="text-center text-5xl font-bold mb-6 my-8">Projects</p>
      </section>

      <section id='experience' className="flex flex-col items-center justify-center">
        <p className="text-center text-5xl font-bold mb-6">Experience</p>

        <Experience />
      </section>



      <p>Contact</p>
    </main>
  );
}