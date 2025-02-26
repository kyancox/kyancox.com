import React, { useEffect } from 'react';
import Image from "next/image";
import { ReactTyped } from "react-typed";

import WarpSpeed from '@/lib/warpspeed';
import headshot from '@/public/headshot.jpeg'
import githublogo from '@/public/githublogo.svg'
import linkedin from '@/public/linkedin.svg'
import resume from '@/public/resume.svg'

const HeroWarpSpeed = () => {
    useEffect(() => {
        const warpSpeedInstance = new WarpSpeed("section-3-bg", {
            "speed": 10,
            "speedAdjFactor": 0.3,
            "density": 2,
            "shape": "square",
            "warpEffect": true,
            "warpEffectLength": 10,
            "depthFade": true,
            "starSize": 3,
            "backgroundColor": "hsl(222, 24%, 14%)",
            "starColor": "#FFFFFF"
        });
        return () => {
            warpSpeedInstance.destroy();
        };
    }, []);

    return (
        <div className='relative w-full h-screen'>
            <canvas id="section-3-bg" className="absolute top-0 left-0 w-full h-full"></canvas>
            <div className="relative flex md:flex-row flex-col items-center justify-center md:space-x-4 md:mx-0 mx-4 h-screen">
                <Image
                    src={headshot}
                    alt="Headshot image"
                    width={256}
                    height={256}
                    className="rounded-full p-2 bg-foreground"
                />
                <div className="">
                    <p className="text-start md:text-5xl text-3xl font-semibold">Hi 👋</p>
                    <p className="text-start md:text-7xl text-5xl font-medium">I&apos;m <span className="font-bold">Kyan Cox</span>.</p>
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

        </div>
    );
}

export default HeroWarpSpeed;