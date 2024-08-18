"use client"

import Image from "next/image";
import { useEffect } from "react";
import { ReactTyped } from "react-typed";

import * as Spotify from '@/lib/spotify'
import NowPlaying from "@/components/NowPlaying";
import TopTracks from "@/components/TopTracks";
import headshot from '@/public/headshot.jpeg'
import { ModeToggle } from "@/components/DarkMode";
import { Button } from "@/components/ui/button";
import githublogo from '@/public/githublogo.svg'
import linkedin from '@/public/linkedin.svg'
import resume from '@/public/resume.svg'
import SkillCard from "@/components/SkillCard";

export default function Home() {

  const skills = {
    "languages": ["Java", "Python", "JavaScript", "HTML/CSS", "TypeScript", "SQL"],
    "frameworks": [
      "React",
      "React Native",
      "Next.js",
      "Expo",
      "Node.js",
      "Flask",
      "FastAPI",
      "TailwindCSS",
      "MongoDB",
      "Express.js",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "scikit-learn"
    ],
    "tools": ["Git", "SQLite", "Postman", "Vercel", "AWS", "Docker", "Supabase", "Postgres"]
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

      <section id="skills" className="bg-red-">
        <p className="text-center text-5xl font-bold mb-6">Skills</p>

        <div className="flex lg:flex-row flex-col justify-center items-center lg:space-x-12 lg:space-y-0 space-y-12">

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

      <p>Projects:</p>
      <p>Experience:</p>
      <p>About:</p>
      <div className="flex lg:flex-row flex-col lg:items-start items-center justify-center ">
        <NowPlaying />
        <TopTracks />
      </div>
      <p>Contact</p>
    </main>
  );
}
