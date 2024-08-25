"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import ProjectCard from "../ProjectCard";

import llmdemo from '@/public/llmdemo.png'


const Projects = () => {
    return (
        <section id="projects" className="">
            <p className="text-center text-5xl font-bold mb-6 my-8">Projects</p>

            <ProjectCard
                title="Visual Snow Log"
                desc="A mobile app designed for those with Visual Snow Syndrome (VSS), a rare condition which I have that affects ~ 3% of the world. Visual Snow Log allows users to log and track their VSS symptoms over time, and export them to their email to show their doctor."
                bullets={[ "Implemented user authentication and data storage using Supabase and PostgreSQL.", "Created a backend API with FastAPI and Python to handle data processing and export functionality, utilizing Pandas for data manipulation and the smtplib library for sending emails via SMTP.", "Deployed the backend on an AWS EC2 instance, containerizing the application using Docker for consistent development and deployment environments."]}
                link="https://llmcomparison.kyancox.com/"
                skills={['React Native', 'Expo', 'FastAPI', 'Pandas', 'AWS (EC2)', 'Docker', 'PostgreSQL', 'Supabase', 'TypeScript', 'Python', 'SQL']}
                image={llmdemo}
            />

            <ProjectCard
                title="LLM Comparison App"
                desc="A mobile app designed for those with Visual Snow Syndrome (VSS), a rare condition which I have that affects ~ 3% of the world. Visual Snow Log allows users to log and track their VSS symptoms over time, and export them to their email to show their doctor."
                bullets={["Created a backend API with FastAPI and Python to handle data processing and export functionality", "Utilized Pandas for data manipulation", "Used the smtplib library for sending emails via SMTP", "Ensured seamless delivery of the generated CSV files as email attachments"]}
                link="https://llmcomparison.vercel.app/"
                image={llmdemo}
                skills={['React Native', 'Expo', 'FastAPI', 'AWS (EC2)', 'Docker', 'PostgreSQL', 'Supabase', 'TypeScript', 'Python', 'SQL']}
                reverse={true}
            />

            <ProjectCard
                title="Cryptocurrency Investment Allocator"
                desc="A mobile app designed for those with Visual Snow Syndrome (VSS), a rare condition which I have that affects ~ 3% of the world. Visual Snow Log allows users to log and track their VSS symptoms over time, and export them to their email to show their doctor."
                bullets={["Created a backend API with FastAPI and Python to handle data processing and export functionality", "Utilized Pandas for data manipulation", "Used the smtplib library for sending emails via SMTP", "Ensured seamless delivery of the generated CSV files as email attachments"]}
                link="https://llmcomparison.vercel.app/"
                skills={['React Native', 'Expo', 'FastAPI', 'AWS (EC2)', 'Docker', 'PostgreSQL', 'Supabase', 'TypeScript', 'Python', 'SQL']}
                image={llmdemo}
            />
        </section>
    )
}

export default Projects

