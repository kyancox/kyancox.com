"use client"

import Image from "next/image";
import { useEffect } from "react";

import * as Spotify from '@/lib/spotify'
import NowPlaying from "@/components/NowPlaying";
import TopTracks from "@/components/TopTracks";
import headshot from '@/public/headshot.jpeg'


export default function Home() {

  return (
    <main className="h-screen" style={{
      backgroundColor: '#1b202c'
    }}>

      <div className="flex flex-row items-center justify-center space-x-4 h-screen">
          <Image
            src={headshot}
            alt="Headshot image"
            width={256}
            height={256}
            className="rounded-lg p-2 bg-white"
          />
        <div className="">
          <p className="text-start text-5xl font-semibold">Hi 👋</p>
          <p className="text-start text-7xl font-medium">I'm <span className="font-bold">Kyan Cox</span>.</p>
          <p className="text-start text-4xl">Aspiring Software Engineeer.</p>
        </div>
      </div>

      <p>Skills:</p>
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
