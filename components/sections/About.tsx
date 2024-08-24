import React from 'react'
import NowPlaying from '../NowPlaying'
import TopTracks from '../TopTracks'

const About = () => {
    return (
        <section id='about' className="my-8">
            <p className="text-center text-5xl font-bold">About</p>
            <div className="flex xl:flex-row flex-col lg:items-start items-start justify-around lg:w-1/2 md:w-2/3 w-11/12 mx-auto mt-5  ">
                <p className="text-xl text-center font-semibold xl:w-1/2 mx-4 xl:mb-0 mb-2">I&apos;m currently studying at the University of Wisconsin - Madison, pursuing a double major in Computer Science and Statistics, with a minor in Chinese Professional Communication. I&apos;m an aspiring developer fueled by my passions, which you can explore through my projects below.</p>
                <NowPlaying />
            </div>
            <div className="flex items-center justify-center">
                <TopTracks />
            </div>
        </section>
    )

}

export default About