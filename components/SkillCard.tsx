import React from 'react'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Reveal } from './Reveal';
import { AnimationProps, TargetAndTransition, VariantLabels } from 'framer-motion';
import { useIsMobile } from './sections/Skills';

interface SkillCardProps {
    title: string,
    skills: { [key: string]: string },
    delay: number,
    initial: AnimationProps['initial'],
    whileInView: TargetAndTransition | VariantLabels | undefined,
}

const SkillCard = ({ title, skills, delay, initial, whileInView }: SkillCardProps) => {
    const isMobile = useIsMobile()

    return (
        <CardContainer className="inter-var mx-4 md:w-2/3 lg:w-1/2 xl:w-1/4 xl:min-h-96 xl:min-w-96 py-2" xDivisor={15} yDivisor={15}>
            <CardBody className="w-full xl:w-96 h-auto bg-gray-50 relative group/card md:dark:hover:shadow-2xl md:dark:hover:shadow-sky-800/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-5 border">
                <CardItem as={'p'} translateZ={10} className='text-xl font-semibold text-neutral-600 dark:text-white text-center mb-1 mx-auto text-foreground'>{title}</CardItem>
                <div className='flex-wrap flex flex-row items-center justify-center md:mx-2'>
                    {Object.entries(skills).map(([key, value], index) => (
                        <Reveal
                            key={key}
                            initial={initial}
                            whileInView={{ ...(typeof whileInView === 'object' ? whileInView : {}), opacity: 1, transition: { duration: 0.2, delay: (index / 40) + (!isMobile ? delay + 0.2 : 0.1) } }}
                        >
                            <CardItem translateZ={15} className='py-0.5 px-2.5  rounded-full m-1.5 bg-foreground hover:opacity-60 transition duration-50 flex flex-row items-center justify-center space-x-1.5' key={key}>
                                <Image
                                    src={value}
                                    alt={`${key} icon`}
                                    width={18}
                                    height={18}
                                />
                                <p className='text-lg text-center text-background font-semibold'>{key}</p>
                            </CardItem>
                        </Reveal>
                    ))}
                </div>
            </CardBody>
        </CardContainer>
    )
}

export default SkillCard