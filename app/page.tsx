"use client"

import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Divider from "@/components/Divider";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";


export default function Home() {

  return (
    <main>

      <Hero />


      <Divider />

      <Skills />

      <Divider />

      <Projects />

      <Divider />

      <Experience />

      <Divider />

      <About />

      <Divider />

      <Contact />

    </main>
  );
}