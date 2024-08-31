import React from 'react'
import ExperienceContainer from '../ExperienceContainer'
import { Reveal } from '../Reveal'

const Experience = () => {
    return (
        <section id='experience' className="flex flex-col items-center justify-center my-8">
            <p className="text-center text-4xl font-bold mb-6">Experience</p>

            {/* <Reveal
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.0 } }}
            > */}
                <ExperienceContainer />
            {/* </Reveal> */}
        </section>
    )
}

export default Experience