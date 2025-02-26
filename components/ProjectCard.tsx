"use client";

import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Modal, ModalBody, ModalContent } from "./ui/animated-modal";
import { YouTubeEmbed } from '@next/third-parties/google'
import githublogo from '@/public/githublogo.svg'
import { Reveal } from "./Reveal";

interface ProjectCardProps {
    title: string,
    desc: string,
    bullets: string[],
    image: any,
    link: string,
    skills: string[],
    reverse?: boolean,
    videoid: string,
    repo?: string,
    repo2?: string,
}

const ProjectCard = ({ title, desc, bullets, image, link, skills, reverse, videoid, repo, repo2 }: ProjectCardProps) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <CardContainer className="inter-var w-full py-5 overflow-x-hidden" xDivisor={250} yDivisor={25}>
                <CardBody className="w-full mx-4 md:mx-0 md:w-2/3 bg-gray-50 relative group/card md:dark:hover:shadow-2xl md:dark:hover:shadow-sky-800/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border">
                    <Reveal
                        initial={{ opacity: 0, x: !reverse ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                    >
                        <CardItem
                            as={'p'}
                            className="text-xl font-bold text-neutral-600 dark:text-white hover:underline cursor-pointer hover:opacity-60"
                            onClick={() => window.open(link, '_blank')}
                            translateZ={25}
                        >
                            {title}
                        </CardItem>
                    </Reveal>
                    <div className={`flex ${reverse ? 'xl:flex-row-reverse xl:space-x-reverse' : 'xl:flex-row'} flex-col items-center justify-center xl:space-x-8 xl:space-y-0 space-y-4`}>
                        <CardItem
                            className={`xl:w-1/2 mt-4 cursor-pointer`}
                            onClick={() => window.open(link, '_blank')}
                            translateZ={50}
                        >
                            <Reveal
                                initial={{ opacity: 0, x: !reverse ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                            >
                                <Image
                                    src={image}
                                    height="1040"
                                    width="1800"
                                    className={`object-cover rounded-xl group-hover/card:shadow-xl`}
                                    alt={`${title} thumbnail`}
                                />
                            </Reveal>
                        </CardItem>
                        <div className="flex flex-col justify-between min-h-96 xl:w-1/2 mx-4 space-y-4">
                            <div className="space-y-4">
                                <Reveal
                                    initial={{ opacity: 0, x: !reverse ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                                >
                                    <CardItem
                                        as="p"
                                        className="text-neutral-500 text-center text-base mt-2 dark:text-neutral-300"
                                    >
                                        {desc}
                                    </CardItem>
                                </Reveal>
                                <div>
                                    <Reveal
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                                    >
                                        <CardItem
                                            as={'p'}
                                            className="text-lg text-left font-bold text-neutral-600 dark:text-white"
                                        >
                                            Description:
                                        </CardItem>
                                    </Reveal>
                                    <CardItem
                                        as={'div'}
                                        className="flex flex-col items-start justify-start"
                                    >
                                        {bullets.map((bullet, index) => (
                                            <Reveal
                                                key={bullet}
                                                initial={{ opacity: 0, y: 30 }}
                                                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: index / 40 } }}
                                            >
                                                <p key={index} className="text-neutral-500 text-left text-base md:text-sm my-0.5 dark:text-neutral-300">
                                                    - {bullet}
                                                </p>
                                            </Reveal>
                                        ))}
                                    </CardItem>
                                </div>
                            </div>
                            <CardItem
                                as={'div'}
                                className="flex flex-row flex-wrap justify-center"
                            >
                                {skills.map((skill, index) => (
                                    <Reveal
                                        key={skill}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0, transition: { duration: 0.2, delay: index / 40 } }}
                                    >
                                        <div
                                            key={index}
                                            className="bg-foreground rounded-full px-2.5 py-0.5 m-1"
                                        >
                                            <p className="text-background text-center font-semibold text-sm">
                                                {skill}
                                            </p>
                                        </div>
                                    </Reveal>
                                ))}
                            </CardItem>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mt-8">
                        <Reveal
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                        >
                            <CardItem
                                onClick={() => setOpen(true)}
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:opacity-60 transition duration-50 cursor-pointer"
                            >
                                More info →
                            </CardItem>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4 } }}
                        >
                            <CardItem
                                as="button"
                                className={`px-4 py-2 rounded-xl bg-foreground dark:text-black text-white text-xs font-bold hover:opacity-60 transition duration-50`}
                                onClick={() => window.open(link, '_blank')}
                                translateZ={25}
                            >
                                View Project
                            </CardItem>
                        </Reveal>
                    </div>
                </CardBody>


            </CardContainer>
            <Modal open={open} setOpen={setOpen}>
                <ModalBody open={open} setOpen={setOpen}>
                    <ModalContent>
                        <div className="flex flex-col items-center justify-between space-y-4 flex-1">
                            <p
                                className="text-xl font-bold text-neutral-600 dark:text-white hover:underline cursor-pointer hover:opacity-60 text-center"
                            >
                                {title} Demo
                            </p>

                            <div className="">
                                {/* Desktop size */}
                                <div className="hidden md:block">
                                    <YouTubeEmbed videoid={videoid} width={600} />
                                </div>
                                {/* Mobile size */}
                                <div className="md:hidden block">
                                    <YouTubeEmbed videoid={videoid} width={350} />
                                </div>
                            </div>

                            {repo && (
                                <div className="flex md:flex-row flex-col space-x-0 space-y-4 md:space-y-0 md:space-x-4 items-center justify-center">
                                    <button className="py-2.5 px-3.5 rounded-full flex flex-row items-center justify-center space-x-2 hover:opacity-60 transition duration-300" style={{ backgroundColor: '#2b3137' }}
                                        onClick={() => window.open(repo, '_blank')}
                                    >
                                        <Image
                                            src={githublogo}
                                            alt="Github logo"
                                            width={24}
                                            height={24}
                                        />
                                        {repo2 ?
                                            <p className="text-lg font-semibold text-white">Frontend Repo</p>
                                            :
                                            <p className="text-lg font-semibold text-white">GitHub Repo</p>
                                        }
                                    </button>
                                    {repo2 && (
                                        <button className="py-2.5 px-3.5 rounded-full flex flex-row items-center justify-center space-x-2 hover:opacity-60 transition duration-300" style={{ backgroundColor: '#2b3137' }}
                                            onClick={() => window.open(repo2, '_blank')}
                                        >
                                            <Image
                                                src={githublogo}
                                                alt="Github logo"
                                                width={24}
                                                height={24}
                                            />
                                            <p className="text-lg font-semibold text-white">Backend Repo</p>
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                    </ModalContent>
                </ModalBody>
            </Modal>
        </>
    );
}

export default ProjectCard;