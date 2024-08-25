"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";
import ProjectCard from "../ProjectCard";

import llmdemo from '@/public/llmdemo.png'
import visualsnowdemo from '@/public/visualsnowdemo.png'
import coinmergedemo from '@/public/coinmergedemo.png'


const Projects = () => {
    return (
        <section id="projects" className="my-32">
            <p className="text-center text-5xl font-bold mb-6 my-8">Projects</p>

            <ProjectCard
                title="Visual Snow Log"
                desc="A mobile app designed for those with Visual Snow Syndrome (VSS), a rare condition that affects ~3% of the world including myself. Visual Snow Log allows users to log and track their VSS symptoms over time, and export them to their email to show their doctor."
                bullets={["Implemented user authentication and data storage using Supabase and PostgreSQL.", "Created a backend API with FastAPI and Python to handle data processing and export functionality, utilizing Pandas for data manipulation and the smtplib library for sending emails via SMTP.", "Deployed the backend on an AWS EC2 instance, containerizing the application using Docker for consistent development and deployment environments."]}
                link="https://llmcomparison.kyancox.com/"
                skills={['React Native', 'Expo', 'FastAPI', 'Pandas', 'AWS (EC2)', 'Docker', 'PostgreSQL', 'Supabase', 'TypeScript', 'Python', 'SQL']}
                image={visualsnowdemo}
            />

            <ProjectCard
                title="LLM Comparison App"
                desc="A web app that allows users to compare responses from leading Large Language Models (LLMs) like ChatGPT, Gemini, and Claude. Input a prompt, generate responses, and vote for your favorite to see how each model performs."
                bullets={["Developed a full-stack web application using Next.js, React, and TypeScript to compare responses from OpenAI’s ChatGPT, Google’s Gemini, and Anthropic’s Claude, utilizing their respective APIs.", "Integrated MongoDB for data storage and management, and utilized Node.js for server-side operations, including API endpoints and middleware to enforce query limits for premium models, ensuring efficient and fair usage.", "Implemented a voting system and data visualizations using Chart.js and Tailwind CSS."]}
                link="https://llmcomparison.kyancox.com/"
                image={llmdemo}
                skills={['React', 'Next.js', 'Tailwind CSS', 'MongoDB', 'Node.js', 'TypeScript', 'Chart.js']}
                reverse={true}
            />

            <ProjectCard
                title="Cryptocurrency Investment Allocator"
                desc="A web app where you can view all of your cryptocurrency assets from Coinbase, Gemini, and Ledger Live in one place. The app utilizes your API keys from your Coinbase and Gemini accounts, as well as a CSV file of your assets from Ledger Live."
                bullets={["Created a RESTful API using Flask, featuring 14 endpoints to manage customer information within an SQLite database, that seamlessly integrates three external APIs for dynamic data retrieval, and employs OOP principles to ensure scalability and a maintainable code architecture.", "Utilized Pandas to both create an XLSX file for customers that exports their assets from multiple services into one centralized portfolio and parse through Ledger Live’s Operation History CSV."]}
                link="https://coinmerge.co/"
                skills={['Python', 'Flask', 'SQLite', 'JavaScript', 'HTML', 'CSS', 'Pandas', 'RESTful API']}
                image={coinmergedemo}
            />

        </section>
    )
}

export default Projects

