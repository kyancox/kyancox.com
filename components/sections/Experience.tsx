import React, { useState } from 'react'
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

    const experienceObject = 5

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
            <Carousel setApi={setApi} className="w-full max-w-xs">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <Card>
                                <CardContent className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <span className='hidden sm:block'>
                    <CarouselPrevious />
                    <CarouselNext />
                </span>
            </Carousel>
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
        </div>
    )
}

export default Experience