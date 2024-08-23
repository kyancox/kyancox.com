import React from 'react'
import NowPlaying from '../NowPlaying'
import TopTracks from '../TopTracks'

const About = () => {
    return (
        <section id='about' className="my-8">
            <p className="text-center text-5xl font-bold mb-6">About</p>
            <div className="flex lg:flex-row flex-col items-center justify-center xl:w-1/2 mx-auto">
                <p className="text-xl text-center font-semibold w-1/2">I&apos;m currently studying at the University of Wisconsin - Madison, pursuing a double major in Computer Science and Statistics, with a minor in Chinese Professional Communication. I&apos;m an aspiring developer fueled by my passions, which you can explore through my projects below.</p>
                <NowPlaying />
            </div>
            <div className="flex items-center justify-center">
                <TopTracks />
            </div>
        </section>
    )

}

export default About