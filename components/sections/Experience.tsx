import React from 'react'
import ExperienceContainer from '../ExperienceContainer'
import { Timeline, TimelineEntry } from '../ui/timeline'
import Image from 'next/image'
import { Reveal } from '../Reveal';

interface Experience {
    name: string;
    image: string;
    title: string;
    description: string[];
    duration: string;
    skills: string[];
}

const experiences: Experience[] = [
    // {
    //     'name': 'Polaris',
    //     'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafoJOPymx98pp0KxdDjmLrUlyiBruiVMlnQ&s',
    //     'title': 'Incoming Software Engineer Intern',
    //     'description': [],
    //     'duration': 'May 2025 - August 2025',
    //     'skills': [],
    // },
    {
        'name': 'UW-Madison College of Engineering',
        'image': 'https://media.licdn.com/dms/image/v2/C4D0BAQGWVW9DjPilww/company-logo_200_200/company-logo_200_200/0/1655325704096/uwmadengr_logo?e=2147483647&v=beta&t=lCYTjUQ-FRheNkq9RYeuwmYFPMojKmHwZnJBo6q6UFQ',
        'title': 'AI/ML Undergraduate Researcher',
        'description': [
            '- Collaborated with a team of 10 peers to develop machine learning models, including gradient-boosted trees, identifying key factors impacting donation campaigns for The River Food Pantry, the largest food pantry in Wisconsin.',
            '- Applied predictive analytics and SHAP analysis to evaluate model accuracy and interpretability, offering detailed insights into feature importance, enhancing donor engagement strategies, and improving resource allocation for the non-profit organization.',
            '- Occasionally volunteering at The River Food Pantry, helping with manual labor while also meeting with directors to discuss application, allocation, and usage of donation data.'
        ],
        'duration': 'September 2024 - Present',
        'skills': ['Python', 'Machine Learning', 'Scikit-Learn'],
    },
    {
        'name': 'UW-Madison Interdisciplinary Professional Programs',
        'image': 'https://media.licdn.com/dms/image/v2/C4D0BAQGWVW9DjPilww/company-logo_200_200/company-logo_200_200/0/1655325704096/uwmadengr_logo?e=2147483647&v=beta&t=lCYTjUQ-FRheNkq9RYeuwmYFPMojKmHwZnJBo6q6UFQ',
        'title': 'Student Facilitator',
        'description': [
            '- Facilitated hands-on activities and provided guidance to industry professionals, including engineers and managers, in understanding and applying Machine Learning and Artificial Intelligence concepts to their careers.'
        ],
        'duration': 'October 2024 - November 2024',
        'skills': ['Machine Learning', 'Artificial Intelligence', 'Python', 'Technical Instruction'],
    },
    {
        'name': 'Outlier.ai',
        'image': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABHVBMVEVHcExYxdpbyN45hpa0nsjBob4vd5BuscV/t8dWqbsoe46nrcxbyN1byN5byd4ycpZbyN1cyd00hJMucZLBsrWFmqJbyd1ZxNowcpI0fJYqZ5Ngj6CvrLqFp7rOsrTJlbKlqLFbyN14v9BPmqQyfJE7hJTNe6zUiaurk8DYt6/hta5byN1RlKBEk7dLrsJTvNTQcqpWv9S8nMjltq7ana5byN0sbqA6ipUsaZZBhZU/jZY5epRzlcqQs8w0hpM5dqZHjZZXwdYtgpOfiLuviLSLock/ka81c6Juh7p7kscycZe7fbHLea1/ocuGqsuVlMPQkK7ku6/Xpa9Dj5ecoMuNi8BhgbBMq8WlmcaMl8W/nb9rl5yzrKfKs6xOfbKStIKHAAAANXRSTlMAVeRs/RZFDwUm/fnR9RjScrLWmjT8uKCA8Oz7kZNBbfW/R8y6/J4uyJnOgk2y67fgzLa5vF7EYFYAAAG/SURBVDiNzZJrV4JAEIYXBVfwknlJ63g5lWn3u4iiYgaGKApUlkft//+MZhch89THzun9tvO8OzM7swj9H4VxHITx6sARhdcwn9gJ1GqxaJbBmCvmb1mWjUTyaY/HE0BXuiocsyzlkUj7wOX8to8f3vqK/s6y7y8vbSJ+k/cVkD4BrmnjcbtdIPV3fA7Xn0CKPptppmmOwQIGxoWB/e3sxdauKEqiqOiDltkyTU3TEMJuf9EEeSGf2pPAIH60QIPZZDLxEgRW/eIcdSg68NfXx8djhLKEx868F+OURBzTwQCwqpYQitIEcX9mQZpiCtfV4XDIIRSjHXwNNbQlSYY4hevD0agCAdrC/jeDYRhTlfDrKvopgyHLRka1LGtUIgE6psuQb8jJoE7GcSyrwpFAgk64jP0EstxodBeO49xz7qaIoSekeJeXATca86Vtn3rLhlU9CIJQzoVCwVTyCHC3u7Dtu6JXlI+BodfrdZLJXRc3M0v7pPrVNwMlgHc69Xq92QQ+X56WuPXvyNTeBI8/Pzfni5P02nekjpu+z7uZfJFDGwrHmcO6W+CwkMab2N0iHwSd8zj8I6ZpQL/CP9UnYHZir4Z66IUAAAAASUVORK5CYII=',
        'title': 'AI Training (Contract)',
        'description': [
            '- Evaluated AI-generated code using RLHF techniques to enhance LLM accuracy.',
            '- Developed and implemented test cases for Python and JavaScript, ensuring high-quality AI performance.'
        ],
        'duration': 'May 2024 - August 2024',
        'skills': ['RLHF', 'Python', 'Java', 'TypeScript', 'JavaScript', 'C'],
    },
    {
        'name': 'Rye Chamber of Commerce',
        'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3zj0ZVwirp7-Fo-7cgSvHJFSIknQvxYmQA&s',
        'title': 'Intern - Software',
        'description': [
            '- Simplified a multi-day process of extracting and cleaning data from spreadsheets through Python and the Pandas library, aiding in the identification of over 200 potential customers, ultimately maximizing funds for events.',
            '- Developed a mail merge process in Python to create outreach envelopes for prospective customers.'
        ],
        'duration': 'May 2023 - June 2023',
        'skills': ['Python', 'Pandas', 'Git', 'Excel'],
    },
]

const timelineEntries: TimelineEntry[] = experiences.map((exp, index) => ({
    title: exp.duration,
    content: (
        <Reveal
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: index / 20 + 0.2 } }}
        >
            <div className="prose prose-sm dark:prose-invert bg-black border dark:border-white/[0.2] border-black/[0.1] rounded-xl p-4">
                <Reveal
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: index / 20 + 0.3 } }}
                >
                    <div className='flex items-center justify-start space-x-2 '>
                        <Image
                            src={exp.image}
                            alt={exp.name + 'image'}
                            width={24}
                            height={24}
                            className='rounded-lg aspect-square'
                        />
                        <p className="text-lg font-bold text-background dark:text-white">{exp.name}</p>
                    </div>
                </Reveal>
                <Reveal
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: index / 20 + 0.35 } }}
                >
                    <h4 className="text-base font-semibold text-neutral-400 mt-1">{exp.title}</h4>

                </Reveal>
                <div className="mt-0">
                    {exp.description.map((desc, index) => (
                        <Reveal
                            key={`desc-${index}`}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0, transition: { duration: 0.4, delay: index / 20 + 0.4 } }}
                        >
                            <p key={`desc-${index}`} className="my-1 text-background dark:text-white">{desc}</p>
                        </Reveal>
                    ))}
                </div>
                <div className="flex flex-row flex-wrap justify-center mt-2">
                    {exp.skills.map((skill, index) => (
                        <Reveal
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: index / 20 + 0.4 } }}
                        >
                            <div
                                className="bg-foreground rounded-full px-2.5 py-0.5 m-1"
                            >
                                <p className="text-background text-center font-semibold text-sm ">
                                    {skill}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </Reveal>
    )
}));

const Experience = () => {
    return (
        <section id='experience' className="flex flex-col items-center justify-center pt-12 pb-8 ">
            <p className="text-center text-4xl font-bold mb-12">Experience</p>

            <Timeline data={timelineEntries} />

            {/* <ExperienceContainer/> */}
        </section>
    )
}

export default Experience