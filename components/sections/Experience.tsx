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


    const experiences = [
        {
            'name': 'Outlier.ai',
            'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABHVBMVEVHcExYxdpbyN45hpa0nsjBob4vd5BuscV/t8dWqbsoe46nrcxbyN1byN5byd4ycpZbyN1cyd00hJMucZLBsrWFmqJbyd1ZxNowcpI0fJYqZ5Ngj6CvrLqFp7rOsrTJlbKlqLFbyN14v9BPmqQyfJE7hJTNe6zUiaurk8DYt6/hta5byN1RlKBEk7dLrsJTvNTQcqpWv9S8nMjltq7ana5byN0sbqA6ipUsaZZBhZU/jZY5epRzlcqQs8w0hpM5dqZHjZZXwdYtgpOfiLuviLSLock/ka81c6Juh7p7kscycZe7fbHLea1/ocuGqsuVlMPQkK7ku6/Xpa9Dj5ecoMuNi8BhgbBMq8WlmcaMl8W/nb9rl5yzrKfKs6xOfbKStIKHAAAANXRSTlMAVeRs/RZFDwUm/fnR9RjScrLWmjT8uKCA8Oz7kZNBbfW/R8y6/J4uyJnOgk2y67fgzLa5vF7EYFYAAAG/SURBVDiNzZJrV4JAEIYXBVfwknlJ63g5lWn3u4iiYgaGKApUlkft//+MZhch89THzun9tvO8OzM7swj9H4VxHITx6sARhdcwn9gJ1GqxaJbBmCvmb1mWjUTyaY/HE0BXuiocsyzlkUj7wOX8to8f3vqK/s6y7y8vbSJ+k/cVkD4BrmnjcbtdIPV3fA7Xn0CKPptppmmOwQIGxoWB/e3sxdauKEqiqOiDltkyTU3TEMJuf9EEeSGf2pPAIH60QIPZZDLxEgRW/eIcdSg68NfXx8djhLKEx868F+OURBzTwQCwqpYQitIEcX9mQZpiCtfV4XDIIRSjHXwNNbQlSYY4hevD0agCAdrC/jeDYRhTlfDrKvopgyHLRka1LGtUIgE6psuQb8jJoE7GcSyrwpFAgk64jP0EstxodBeO49xz7qaIoSekeJeXATca86Vtn3rLhlU9CIJQzoVCwVTyCHC3u7Dtu6JXlI+BodfrdZLJXRc3M0v7pPrVNwMlgHc69Xq92QQ+X56WuPXvyNTeBI8/Pzfni5P02nekjpu+z7uZfJFDGwrHmcO6W+CwkMab2N0iHwSd8zj8I6ZpQL/CP9UnYHZir4Z66IUAAAAASUVORK5CYII=',
            'title': 'AI Training (Contract)',
            'description': [
                '- Evaluated AI-generated code using RLHF techniques to enhance LLM accuracy.',
                '- Developed and implemented test cases for Python and JavaScript, ensuring high-quality AI performance.'
            ],
            'duration': 'May 2024 - Present'
        },
        {
            'name': 'Rye Chamber of Commerce',
            'image': 'https://scontent.ftol2-1.fna.fbcdn.net/v/t39.30808-6/327198851_714755046966672_285548003197360395_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=W-eLSXr706EQ7kNvgGKyGBy&_nc_ht=scontent.ftol2-1.fna&oh=00_AYDSlXJQrmN6KymuV_AL1zUYEbmopyaIRSnKY1MwoW-UXw&oe=66CC1F22',
            'title': 'Intern - Software',
            'description': [
                '- Simplified a multi-day process of extracting and cleaning data from spreadsheets through Python and the Pandas library, aiding in the identification of over 200 potential customers, ultimately maximizing funds for events.',
                '- Developed a mail merge process in Python to create outreach envelopes for prospective customers.'
            ],
            'duration': 'May 2023 - June 2023'
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
                    {experiences.map(({ name, title, image, description, duration }) => (
                        <CarouselItem key={title}>
                            <Card className='border-foreground'>
                                <CardContent className="p-6">
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
                                     {description.map(bullet => (
                                         <p>{bullet}</p>
                                     ))}
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <span className='hidden sm:block'>
                    <CarouselPrevious />
                    <CarouselNext />
                </span>
            </Carousel >
            <div className="flex justify-center my-2">
                <div className="flex justify-center space-x-2 py-2">
                    {Array.from({ length: count }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full ${index + 1 === current ? 'bg-yellow-400' : 'bg-foreground'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Experience