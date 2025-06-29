import React, { useEffect, useState } from 'react'
import NowPlaying from '../NowPlaying'
import TopTracks from '../TopTracks'
import { Reveal } from '../Reveal'
import type { RecentlyPlayedTrack, ApiResponse } from '@/pages/api/recently-played';

import aboutpicture from '@/public/aboutpicture.jpeg'
import Image from "next/image";

const About = () => {

    const [recentlyPlayed, setRecentlyPlayed] = useState<RecentlyPlayedTrack[] | undefined>();
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecentlyPlayed = async () => {
            try {
                const response = await fetch('/api/recently-played');
                if (!response.ok) {
                    throw new Error('Failed to fetch recently played data');
                }
                const data: ApiResponse = await response.json();
                setRecentlyPlayed(data.tracks);
            } catch (error) {
                console.error(error)
                setError('Unable to fetch recently played data.');
            }
        };

        fetchRecentlyPlayed();
    }, []);

    return (
        <section id='about' className="py-12">
            <p className="text-center text-4xl font-bold">About</p>

            <div className='flex flex-col items-center justify-center lg:w-1/2 md:w-2/3 w-11/12 mx-auto space-y-4 mt-4'>

                {/* Row 1: Image and Blurb */}
                <Reveal
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
                >
                    <div className='flex flex-col xl:flex-row items-center xl:space-x-2 space-y-4'>
                        <Image
                            src={aboutpicture}
                            alt='My mom and I.'
                            width={320}
                            className='rounded-lg mx-auto'
                        />

                        <div className='flex flex-col items-center text-lg text-center space-y-2 xl:w-1/2 px-4'>
                            <p>Hello! I&apos;m Kyan — a Computer Science student at UW-Madison with a passion for software development.</p>
                            <p>I&apos;ve loved programming ever since writing my first line of code in high school. Whether it&apos;s creating software to solve problems, exploring the possibilities of artificial intelligence and machine learning, or diving into the world of cryptocurrency and blockchain technology, I&apos;m always excited about building and learning.</p>
                            <p>Outside of coding, I love listening to music. Explore my recent music taste below, powered by the Spotify Web API!</p>
                        </div>

                    </div>
                </Reveal>

                {/* Row 2: Education and NowPlaying */}

                <div className='flex flex-col xl:flex-row items-center justify-between w-full xl:space-x-4 xl:space-y-0 space-y-4 '>

                    <div className='my-2 space-y-2 xl:w-1/2 flex flex-col items-center'>
                        <Reveal
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.3 } }}
                        >
                            <div className={`inline-flex flex-row items-center justify-start space-x-2 bg-spotify p-2 rounded-lg`}>
                                <Image
                                    src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrk3v3VV2-NqjXDQg7IJJg-hz8SCpO0Sx8Cw&s'}
                                    alt='UW-Madison image'
                                    width={24}
                                    height={24}
                                    className='rounded'
                                />
                                <p className='text-xl font-bold dark:text-white text-white'>Education</p>
                            </div>
                        </Reveal>
                        <Reveal
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.4 } }}
                        >
                            <div className='bg-spotify rounded-lg text-center px-6 py-2 w-full shadow-lg' >
                                <Reveal
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.5 } }}
                                >
                                    <p className='text-lg font-bold text-white text-ellipsis whitespace-nowrap overflow-hidden'>University of Wisconsin - Madison</p>
                                </Reveal>
                                <Reveal
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.6 } }}
                                >
                                    <p className='text-white'><span className="font-bold">Majors:</span> Computer Science, Statistics</p>
                                    <p className='text-white'><span className="font-bold">Expected:</span> May 2027</p>
                                    <p className='text-white'><span className="font-bold">GPA:</span> 4.0</p>
                                </Reveal>
                            </div>
                        </Reveal>
                    </div>

                    <NowPlaying recentlyPlayed={recentlyPlayed} />
                </div>

            </div>

            {/*TODO: PADDING LEFT HARD CODED STYLING FIX. FIX THIS NATURALLY IN THE FUTURE*/}
            <div className='flex flex-col xl:items-center items-start justify-center 2xl:pl-12 lg:w-1/2 md:w-2/3 w-11/12 mx-auto mt-4'>
                {/* <Reveal
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } }}
                >
                    {/* <div className="flex xl:flex-row flex-col lg:items-start items-start justify-around  ">
                        <p className="text-lg text-center xl:w-1/2 mx-4 xl:mb-0 mb-2">I&apos;m currently a junior at the University of Wisconsin - Madison, pursuing a double major in Computer Science and Statistics, with a minor in Chinese Professional Communication. I&apos;m an aspiring developer fueled by my passions, which you can explore through my projects.</p>
                        <NowPlaying recentlyPlayed={recentlyPlayed} />
                    </div> */}
                {/* </Reveal> */}
                <TopTracks />
            </div>
            <Reveal
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
            >
                <p style={{ color: '#1DB954' }} className='font-semibold text-base text-center'>Spotify data provided by Spotify Web API.</p>
            </Reveal>
        </section>
    )

}

export default About