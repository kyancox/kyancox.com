import React from 'react'

interface SkillCardProps {
    title: string,
    skills: string[]
}

const SkillCard = ({ title, skills }: SkillCardProps) => {
    return (
        <div className="w-1/4 min-h-96 border-2 rounded-2xl border-white">
            <p className='text-3xl h-full text-center font-semibold my-2'>{title}</p>
            <div className='flex-wrap flex flex-row items-center justify-center m-2'>
                {skills.map(skill => (
                    <div className='py-2 px-4  rounded-full m-1 bg-spotify hover:opacity-60 transition duration-50'>
                        <p className='text-xl text-center text-white'>{skill}</p>
                    </div>
                ))}
            </div>
          </div>
    )
}

export default SkillCard