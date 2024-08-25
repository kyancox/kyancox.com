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
import Divider from "@/components/Divider";
import Skills from "@/components/sections/Skills";


export default function Home() {

  return (
    <main>

      <Hero />


      <Divider />

      <Skills />

      <Divider />

      <Projects />

      <Divider />

      <section id='experience' className="flex flex-col items-center justify-center">
        <p className="text-center text-5xl font-bold mb-6">Experience</p>

        <Experience />
      </section>
      
      <Divider />

      <About />

      <Divider />

      <Contact />

    </main>
  );
}