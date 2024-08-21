import React from 'react'
import Image from 'next/image'

interface SkillCardProps {
    title: string,
    skills: { [key: string]: string }
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
    return (
        <div className="mx-4 my-4 md:w-2/3 lg:w-1/2 xl:w-1/4 xl:min-h-96 xl:min-w-96 rounded-2xl border-foreground border-2 shadow-lg p-4">
            <p className='text-3xl h-full text-center font-semibold mb-2 mx-2 text-foreground'>{title}</p>
            <div className='flex-wrap flex flex-row items-center justify-center mx-2'>
                {Object.entries(skills).map(([key, value]) => (
                    <div className='py-1 px-3  rounded-full m-1.5 bg-foreground hover:opacity-60 transition duration-50 flex flex-row items-center justify-center space-x-1.5' key={key}>
                        <Image
                            src={value}
                            alt='react icon'
                            width={18}
                            height={18}
                        />
                        <p className='text-xl text-center text-background font-semibold'>{key}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillCard