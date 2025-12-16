"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Github, LayoutGrid } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    desc: string;
    stack: string[];
    link: string;
    rotation: number;
}

const projects: Project[] = [
    {
        id: 1,
        title: "SERVERLESS-FUSION",
        category: "BACKEND",
        desc: "Multi-algorithm framework cutting AWS Lambda costs by 60%.",
        stack: ["Django", "AWS Lambda", "Redis"],
        link: "https://github.com/Samurai007AK/OptiFuse_Server",
        rotation: -2,
    },
    {
        id: 2,
        title: "VPROFILE",
        category: "DEVOPS",
        desc: "Automated CI/CD pipeline reducing deployment time by 40%.",
        stack: ["Jenkins", "AWS", "Docker"],
        link: "https://github.com/Samurai007AK/alpha",
        rotation: 1,
    },
    {
        id: 3,
        title: "NET-FORECAST",
        category: "DATA SCIENCE",
        desc: "Time-series analysis of 1.3M+ records for traffic optimization.",
        stack: ["Python", "Pandas", "Scikit"],
        link: "#",
        rotation: -1,
    },
];

export const DraggableProjectGrid = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-white p-6 md:p-12" ref={containerRef}>

            {/* Section Header */}
            <div className="mb-20">
                <h2 className="text-6xl font-black uppercase tracking-tighter text-black md:text-8xl">
                    Projects
                </h2>
                <p className="mt-4 max-w-md font-mono text-sm text-gray-500">
          // DRAG THE CARDS. SORT THE CHAOS.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        drag
                        dragConstraints={containerRef}
                        whileHover={{ scale: 1.02, rotate: 0, cursor: "grab" }}
                        whileDrag={{ scale: 1.1, rotate: project.rotation * 2, cursor: "grabbing" }}
                        initial={{ rotate: project.rotation }}
                        className="group relative flex flex-col justify-between border-4 border-black bg-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
                    >
                        {/* Header */}
                        <div className="mb-8 flex items-start justify-between">
                            <div className="rounded-full border-2 border-black px-3 py-1 font-mono text-xs font-bold uppercase text-black">
                                {project.category}
                            </div>
                            <ArrowUpRight className="h-8 w-8 text-black transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </div>

                        {/* Content */}
                        <div>
                            <h3 className="mb-2 text-4xl font-black uppercase leading-none text-black">
                                {project.title}
                            </h3>
                            <p className="mb-6 font-mono text-sm leading-relaxed text-gray-600">
                                {project.desc}
                            </p>

                            {/* Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span key={tech} className="bg-black px-2 py-1 font-mono text-xs font-bold text-white">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute bottom-2 right-2 h-4 w-4 border-b-2 border-r-2 border-black" />
                    </motion.div>
                ))}


            </div>
        </section>
    );
};
