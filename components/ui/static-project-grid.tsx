"use client";

import { ArrowUpRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    desc: string;
    stack: string[];
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "SERVERLESS-FUSION",
        category: "BACKEND",
        desc: "Multi-algorithm framework for AWS Lambda. Reduced latency by 67% and costs by 60%.",
        stack: ["Django", "AWS Lambda", "Redis"],
        link: "https://github.com/Samurai007AK/OptiFuse_Server",
    },
    {
        id: 2,
        title: "VPROFILE",
        category: "DEVOPS",
        desc: "Automated CI/CD pipeline reducing deployment time by 40%. Implemented with Jenkins and Docker.",
        stack: ["Jenkins", "AWS", "Docker"],
        link: "https://github.com/Samurai007AK/alpha",
    },
    {
        id: 3,
        title: "NET-FORECAST",
        category: "DATA SCIENCE",
        desc: "Time-series analysis of 1.3M+ records. Optimized bandwidth allocation by 20%.",
        stack: ["Python", "Pandas", "Scikit"],
        link: "#",
    },
];

export const StaticProjectGrid = () => {
    return (
        <section className="w-full border-t-4 border-black bg-white p-6 py-20 md:p-12 lg:p-24" id="projects">
            <div className="mb-16">
                <h2 className="text-4xl font-black uppercase tracking-tighter text-black md:text-6xl">
                    Projects
                </h2>
                <div className="mt-4 h-2 w-24 bg-black"></div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group relative flex min-h-[400px] flex-col justify-between border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                    >
                        {/* Header */}
                        <div className="mb-6 flex items-start justify-between">
                            <span className="border-2 border-black bg-black px-3 py-1 font-mono text-xs font-bold text-white">
                                {project.category}
                            </span>
                            <a
                                href={project.link}
                                className="flex items-center justify-center rounded-full border-2 border-black p-2 transition-colors hover:bg-black hover:text-white"
                            >
                                <ArrowUpRight className="h-5 w-5" />
                            </a>
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="mb-3 text-3xl font-black uppercase leading-none text-black">
                                {project.title}
                            </h3>
                            <p className="mb-6 font-mono text-sm leading-relaxed text-gray-700">
                                {project.desc}
                            </p>
                        </div>

                        {/* Footer / Stack */}
                        <div className="border-t-2 border-black pt-4">
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="font-mono text-xs font-bold uppercase text-black">
                                        #{tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}


            </div>
        </section>
    );
};
