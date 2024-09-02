import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { ReactTyped } from "react-typed";

import headshot from '@/public/headshot.jpeg'
import githublogo from '@/public/githublogo.svg'
import linkedin from '@/public/linkedin.svg'
import resume from '@/public/resume.svg'
import { Reveal } from '../Reveal';
import Link from 'next/link';

const Hero = () => {
    const [hasAnimated, setHasAnimated] = useState(false)

    return (
        <section id='home' className="flex md:flex-row flex-col items-center justify-center md:space-x-4 md:mx-0 mx-4 h-screen -mt-12">
            {!hasAnimated ? (
                <Reveal
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.6 } }}
                >
                    <Image
                        src={headshot}
                        alt="Headshot image"
                        width={256}
                        height={256}
                        className="rounded-full p-2 bg-foreground"
                    />
                </Reveal>
            ) : (
                <Reveal
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } }}
                >
                    <Image
                        src={headshot}
                        alt="Headshot image"
                        width={256}
                        height={256}
                        className="rounded-full p-2 bg-foreground"
                    />
                </Reveal>
            )}
            <div className="">
                {!hasAnimated ? (
                    <Reveal
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.6 } }}
                    >
                        <p className="text-start md:text-5xl text-3xl font-semibold">Hi 👋</p>
                    </Reveal>
                ) : (
                    <Reveal
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } }}
                    >
                        <p className="text-start md:text-5xl text-3xl font-semibold">Hi 👋</p>
                    </Reveal>
                )}
                {!hasAnimated ? (
                    <Reveal
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.7 } }}
                    >
                        <p className="text-start md:text-7xl text-5xl font-medium">I&apos;m <span className="font-bold">Kyan Cox</span>.</p>
                    </Reveal>) : (
                    <Reveal
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.3 } }}
                    >
                        <p className="text-start md:text-7xl text-5xl font-medium">I&apos;m <span className="font-bold">Kyan Cox</span>.</p>
                    </Reveal>
                )}
                {!hasAnimated ? (
                    <Reveal
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.8 } }}
                    >
                        <div>
                            <p className="text-start md:text-4xl text-3xl">Aspiring<span> </span>
                                <ReactTyped
                                    className="text-yellow-400 font-semibold"
                                    strings={['Software Engineer.', 'Full Stack Developer.']}
                                    typeSpeed={70}
                                    backSpeed={50}
                                    loop
                                    showCursor={true}
                                />
                            </p>
                        </div>
                    </Reveal>
                ) : (
                    <Reveal
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
                    >
                        <div>
                            <p className="text-start md:text-4xl text-3xl">Aspiring<span> </span>
                                <ReactTyped
                                    className="text-yellow-400 font-semibold"
                                    strings={['Software Engineer.', 'Full Stack Developer.']}
                                    typeSpeed={70}
                                    backSpeed={50}
                                    loop
                                    showCursor={true}
                                />
                            </p>
                        </div>
                    </Reveal>
                )}

                <div className="flex flex-row items-center justify-center space-x-3 mt-4">

                    {!hasAnimated ? (
                        <Reveal
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.8 } }}
                        >
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
                        </Reveal>
                    ) : (
                        <Reveal
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
                        >
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
                        </Reveal>
                    )}

                    {!hasAnimated ? (
                        <Reveal
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.9 } }}
                        >
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
                        </Reveal>
                    ) : (
                        <Reveal
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.5 } }}
                        >
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
                        </Reveal>
                    )}

                    {!hasAnimated ? (
                        <Reveal
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 1.0 } }}
                            onAnimationComplete={() => setTimeout(() => setHasAnimated(true), 500)}
                        >
                            <Link className="py-2.5 px-3.5 rounded-full flex flex-row items-center justify-center space-x-2 hover:translate-y-[-2px] hover:opacity-60 transition-transform duration-300" style={{ backgroundColor: '#A8D5BA' }}
                                href={'/resume.pdf'}
                            >
                                <Image
                                    src={resume}
                                    alt="Resume logo"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-lg font-semibold text-black">Resume</p>
                            </Link>
                        </Reveal>
                    ) : (
                        <Reveal
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.6 } }}
                            onAnimationComplete={() => setTimeout(() => setHasAnimated(true), 500)}
                        >
                             <Link className="py-2.5 px-3.5 rounded-full flex flex-row items-center justify-center space-x-2 hover:translate-y-[-2px] hover:opacity-60 transition-transform duration-300" style={{ backgroundColor: '#A8D5BA' }}
                                href={'/resume.pdf'}
                            >
                                <Image
                                    src={resume}
                                    alt="Resume logo"
                                    width={24}
                                    height={24}
                                />
                                <p className="text-lg font-semibold text-black">Resume</p>
                            </Link>
                        </Reveal>
                    )}

                </div>

            </div>
        </section>
    );
}


export default Hero;