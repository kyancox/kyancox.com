import React, { useState } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
const Experience = () => {
    const { theme } = useTheme()
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    const skills = {
        "languages": {
            "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
            "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            "SQL": "https://www.svgrepo.com/show/331760/sql-database-generic.svg"
        },
        "frameworks": {
            "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            "React Native": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "Expo": "https://www.svgrepo.com/show/341805/expo.svg",
            "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
            "FastAPI": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
            "TailwindCSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
            "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            "Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
            "NumPy": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
            "Matplotlib": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
            "scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
        },
        "tools": {
            "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
            "SQLite": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
            "AWS": "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
            "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            "Supabase": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIwLjk4ZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjU2IDI2MyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJsb2dvc1N1cGFiYXNlSWNvbjAiIHgxPSIyMC44NjIlIiB4Mj0iNjMuNDI2JSIgeTE9IjIwLjY4NyUiIHkyPSI0NC4wNzElIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMjQ5MzYxIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjM2VjZjhlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImxvZ29zU3VwYWJhc2VJY29uMSIgeDE9IjEuOTkxJSIgeDI9IjIxLjQwMyUiIHkxPSItMTMuMTU4JSIgeTI9IjM0LjcwOCUiPjxzdG9wIG9mZnNldD0iMCUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGZpbGw9InVybCgjbG9nb3NTdXBhYmFzZUljb24wKSIgZD0iTTE0OS42MDIgMjU4LjU3OWMtNi43MTggOC40Ni0yMC4zMzggMy44MjQtMjAuNS02Ljk3N2wtMi4zNjctMTU3Ljk4NGgxMDYuMjI5YzE5LjI0IDAgMjkuOTcxIDIyLjIyMyAxOC4wMDcgMzcuMjkyeiIvPjxwYXRoIGZpbGw9InVybCgjbG9nb3NTdXBhYmFzZUljb24xKSIgZmlsbC1vcGFjaXR5PSIwLjIiIGQ9Ik0xNDkuNjAyIDI1OC41NzljLTYuNzE4IDguNDYtMjAuMzM4IDMuODI0LTIwLjUtNi45NzdsLTIuMzY3LTE1Ny45ODRoMTA2LjIyOWMxOS4yNCAwIDI5Ljk3MSAyMi4yMjMgMTguMDA3IDM3LjI5MnoiLz48cGF0aCBmaWxsPSIjM2VjZjhlIiBkPSJNMTA2LjM5OSA0LjM3YzYuNzE3LTguNDYxIDIwLjMzOC0zLjgyNiAyMC41IDYuOTc2bDEuMDM3IDE1Ny45ODRIMjMuMDM3Yy0xOS4yNDEgMC0yOS45NzMtMjIuMjIzLTE4LjAwOC0zNy4yOTJ6Ii8+PC9zdmc+",
            "Vercel": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
            "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        }
    }


    const experiences = [
        {
            'name': 'Outlier.ai',
            'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABHVBMVEVHcExYxdpbyN45hpa0nsjBob4vd5BuscV/t8dWqbsoe46nrcxbyN1byN5byd4ycpZbyN1cyd00hJMucZLBsrWFmqJbyd1ZxNowcpI0fJYqZ5Ngj6CvrLqFp7rOsrTJlbKlqLFbyN14v9BPmqQyfJE7hJTNe6zUiaurk8DYt6/hta5byN1RlKBEk7dLrsJTvNTQcqpWv9S8nMjltq7ana5byN0sbqA6ipUsaZZBhZU/jZY5epRzlcqQs8w0hpM5dqZHjZZXwdYtgpOfiLuviLSLock/ka81c6Juh7p7kscycZe7fbHLea1/ocuGqsuVlMPQkK7ku6/Xpa9Dj5ecoMuNi8BhgbBMq8WlmcaMl8W/nb9rl5yzrKfKs6xOfbKStIKHAAAANXRSTlMAVeRs/RZFDwUm/fnR9RjScrLWmjT8uKCA8Oz7kZNBbfW/R8y6/J4uyJnOgk2y67fgzLa5vF7EYFYAAAG/SURBVDiNzZJrV4JAEIYXBVfwknlJ63g5lWn3u4iiYgaGKApUlkft//+MZhch89THzun9tvO8OzM7swj9H4VxHITx6sARhdcwn9gJ1GqxaJbBmCvmb1mWjUTyaY/HE0BXuiocsyzlkUj7wOX8to8f3vqK/s6y7y8vbSJ+k/cVkD4BrmnjcbtdIPV3fA7Xn0CKPptppmmOwQIGxoWB/e3sxdauKEqiqOiDltkyTU3TEMJuf9EEeSGf2pPAIH60QIPZZDLxEgRW/eIcdSg68NfXx8djhLKEx868F+OURBzTwQCwqpYQitIEcX9mQZpiCtfV4XDIIRSjHXwNNbQlSYY4hevD0agCAdrC/jeDYRhTlfDrKvopgyHLRka1LGtUIgE6psuQb8jJoE7GcSyrwpFAgk64jP0EstxodBeO49xz7qaIoSekeJeXATca86Vtn3rLhlU9CIJQzoVCwVTyCHC3u7Dtu6JXlI+BodfrdZLJXRc3M0v7pPrVNwMlgHc69Xq92QQ+X56WuPXvyNTeBI8/Pzfni5P02nekjpu+z7uZfJFDGwrHmcO6W+CwkMab2N0iHwSd8zj8I6ZpQL/CP9UnYHZir4Z66IUAAAAASUVORK5CYII=',
            'title': 'AI Training (Contract)',
            'description': [
                '- Evaluated AI-generated code using RLHF techniques to enhance LLM accuracy.',
                '- Developed and implemented test cases for Python and JavaScript, ensuring high-quality AI performance.'
            ],
            'duration': 'May 2024 - Present',
            'skills': ['Python', 'Java', 'TypeScript', 'JavaScript'],
        },
        {
            'name': 'Rye Chamber of Commerce',
            'image': 'https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/327198851_714755046966672_285548003197360395_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=W-eLSXr706EQ7kNvgGKyGBy&_nc_ht=scontent.ftol2-1.fna&oh=00_AYDSlXJQrmN6KymuV_AL1zUYEbmopyaIRSnKY1MwoW-UXw&oe=66CC1F22',
            'title': 'Intern - Software',
            'description': [
                '- Simplified a multi-day process of extracting and cleaning data from spreadsheets through Python and the Pandas library, aiding in the identification of over 200 potential customers, ultimately maximizing funds for events.',
                '- Developed a mail merge process in Python to create outreach envelopes for prospective customers.'
            ],
            'duration': 'May 2023 - June 2023',
            'skills': ['Python', 'Pandas', 'Git', 'Excel'],
        },
    ]

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])


    return (
        <div>
            <Carousel setApi={setApi} className="mx-4 md:w-2/3 lg:w-1/2 xl:w-1/4 xl:min-w-96 md:mx-auto ">
                <CarouselContent>
                    {experiences.map(({ name, title, image, description, duration, skills }) => (
                        <CarouselItem key={title}>
                            <Card className='border-foreground border md:border-2'>
                                <CardContent className="p-5 pb-4">
                                    <div className='flex items-center justify-start space-x-2'>
                                        <Image
                                            src={image}
                                            alt={title + ' logo'}
                                            width={24}
                                            height={24}
                                            className='rounded-lg'
                                        />
                                        <p className='text-2xl font-semibold'>{name}</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-between my-2'>
                                        <p className='font-bold'>{title}</p>
                                        <p className='text-gray-400 text-sm'>{duration}</p>
                                    </div>
                                    {description.map((bullet, index) => (
                                        <p key={index}>{bullet}</p>
                                    ))}
                                    <div className="flex flex-row flex-wrap justify-center mt-2">
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
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <span className='hidden md:block'>
                    <CarouselPrevious />
                    <CarouselNext />
                </span>
            </Carousel >
            <div className="flex justify-center my-2">
                <div className="flex justify-center space-x-2 py-2">
                    {Array.from({ length: count }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full transition duration-300 ${index + 1 === current ? 'bg-yellow-400' : 'bg-foreground'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Experience