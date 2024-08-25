"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface ProjectCardProps {
    title: string,
    desc: string,
    bullets: string[],
    image: any,
    link: string,
    skills: string[],
    reverse?: boolean,
}

const ProjectCard = ({ title, desc, bullets, image, link, skills, reverse }: ProjectCardProps) => {
    return (

        <CardContainer className="inter-var w-full">
            <CardBody className="w-full mx-4 md:mx-0 md:w-2/3 bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border  ">
                <CardItem
                    as={'p'}
                    className="text-xl font-bold text-neutral-600 dark:text-white hover:underline cursor-pointer  hover:opacity-60  "
                    onClick={() => window.open(link, '_blank')}
                    translateZ={25}
                >
                    {title}
                </CardItem>
                <div className={`flex ${reverse ? 'xl:flex-row-reverse xl:space-x-reverse' : 'xl:flex-row'} flex-col items-center justify-center xl:space-x-8 xl:space-y-0 space-y-4`}>
                    <CardItem
                        className="xl:w-1/2 mt-4 cursor-pointer"
                        onClick={() => window.open(link, '_blank')}
                        translateZ={50}
                    >
                        <Image
                            src={image}
                            height="1040"
                            width="1800"
                            className=" object-cover rounded-xl group-hover/card:shadow-xl hover:opacity-60 transition duration-50"
                            alt="thumbnail"
                        />
                    </CardItem>
                    <div className="flex flex-col justify-between min-h-96 xl:w-1/2 mx-4 space-y-4 ">
                        <div className="space-y-4">
                            <CardItem
                                as="p"
                                className="text-neutral-500 text-center text-base mt-2 dark:text-neutral-300"
                            >
                                {desc}
                            </CardItem>


                            <div>
                                <CardItem
                                    as={'p'}
                                    className="text-lg text-left font-bold text-neutral-600 dark:text-white"
                                >
                                    Description:
                                </CardItem>
                                <CardItem
                                    as={'div'}
                                    className="flex flex-col items-start justify-start"
                                >
                                    {bullets.map((bullet, index) => (
                                        <p key={index} className="text-neutral-500 text-left text-base  md:text-sm my-0.5 dark:text-neutral-300">
                                            - {bullet}
                                        </p>
                                    ))}
                                
                                </CardItem>
                            </div>
                        </div>

                        <CardItem
                            as={'div'}
                            className="flex flex-row flex-wrap justify-center"
                        >
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-foreground rounded-full px-2.5 py-0.5 m-1"
                                >
                                    <p className="text-background text-center font-semibold text-sm ">
                                        {skill}
                                    </p>
                                </div>
                            ))}
                        </CardItem>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-8">
                    <CardItem
                        as={Link}
                        href="https://twitter.com/mannupaaji"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:opacity-60 transition duration-50"
                    >
                        More info →
                    </CardItem>
                    <CardItem
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold  hover:opacity-60 transition duration-50"
                        onClick={() => window.open(link, '_blank')}
                        translateZ={25}
                    >
                        View Project
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>

    )
}

export default ProjectCard
