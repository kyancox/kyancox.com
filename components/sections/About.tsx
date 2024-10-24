import React from 'react'
import NowPlaying from '../NowPlaying'
import TopTracks from '../TopTracks'
import { Reveal } from '../Reveal'

const About = () => {
    return (
        <section id='about' className="py-12">
            <p className="text-center text-4xl font-bold">About</p>
            <div className='flex flex-col xl:items-center items-start justify-center lg:w-1/2 md:w-2/3 w-11/12 mx-auto mt-5'>
                <Reveal
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.2 } }}
                >
                    <div className="flex xl:flex-row flex-col lg:items-start items-start justify-around  ">
                        <p className="text-lg text-center xl:w-1/2 mx-4 xl:mb-0 mb-2">I&apos;m currently a junior at the University of Wisconsin - Madison, pursuing a double major in Computer Science and Statistics, with a minor in Chinese Professional Communication. I&apos;m an aspiring developer fueled by my passions, which you can explore through my projects.</p>
                        <NowPlaying />
                    </div>
                </Reveal>
                <TopTracks />
            </div>
                <Reveal
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.4 } }}
                >
                    <p style={{color: '#1DB954'}} className='font-semibold text-base text-center'>Spotify data provided by Spotify API.</p>
                </Reveal>
        </section>
    )

}

export default About