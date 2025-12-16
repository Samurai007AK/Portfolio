"use client";

import "./tech-stack-grid.css";

export const TechStackGrid = () => {
    return (
        <section className="w-full bg-white text-black py-24" id="skills">
            <div className="tech-grid-container font-source-serif">
                <div className="tech-grid tc">
                    {/* Folio Header */}
                    <div className="tech-folio bb border-black pb-2">
                        <p className="b f6 sans-serif font-bold uppercase tracking-widest text-xs tl">Technical Specification v3.0</p>
                    </div>

                    {/* Page Title */}
                    <div className="tech-page-title tc border-b border-black">
                        <h1 className="font-alfa tech-title-headline uppercase tracking-tight leading-none text-6xl md:text-8xl lg:text-9xl mb-4">
                            TECHNOLOGIES
                        </h1>
                        <h2 className="font-merriweather tracked-tight italic text-2xl mb-4">
                            Core Competencies & Frameworks
                        </h2>
                        <p className="uppercase text-xs font-bold tracking-widest leading-relaxed">
                            CURATED BY ARIJIT KONAR // FULL STACK ARCHITECTURE
                        </p>
                    </div>

                    {/* Section 1: Introduction */}
                    <div className="tech-section-1 tc border-b border-black md:border-r p-8 flex flex-col justify-center">
                        <h1 className="font-alfa tracked-tight text-4xl mb-4">The Stack</h1>
                        <h2 className="font-merriweather italic text-sm leading-relaxed max-w-xs mx-auto">
                            A rigorous selection of battle-tested tools designed for high-availability and scalable systems.
                        </h2>
                    </div>

                    {/* Hero Image / Centerpiece */}
                    <div className="tech-hero-image border-b border-black p-8 flex items-center justify-center bg-gray-50">
                        {/* Placeholder for a technical diagram or icon */}
                        <div className="w-32 h-32 border-4 border-black rounded-full flex items-center justify-center animate-spin-slow">
                            <span className="font-alfa text-4xl">JS</span>
                        </div>
                    </div>

                    {/* Section 2: Frontend */}
                    <div className="tech-section-2 relative border-b border-black p-4">
                        <div className="absolute top-0 right-0 left-0 -mt-3 text-center">
                            <span className="uppercase tracking-widest text-xs font-bold bg-white px-2">Frontend</span>
                        </div>
                        <h2 className="font-alfa tracked-tight text-2xl mt-4 mb-2 col-span-2">User Interface</h2>
                        <p className="font-merriweather italic text-gray-600 mb-4 col-span-2">React & Ecosystem</p>

                        <div className="tech-section-2-subsection-1 border-r border-black pr-4">
                            <h3 className="tech-stat">18+</h3>
                            <p className="uppercase font-bold text-xs tracking-widest mb-2">Projects</p>
                            <p className="text-xs mb-4">Built with React/Next.js ecosystem focusing on performance and SEO.</p>
                        </div>

                        <div className="pl-4">
                            <h3 className="tech-stat">TS</h3>
                            <p className="uppercase font-bold text-xs tracking-widest mb-2">TypeScript</p>
                            <p className="text-xs">Strict typing enforced across all codebases for reliability.</p>
                        </div>
                    </div>

                    {/* Section 3: Backend */}
                    <div className="tech-section-3 relative border-b border-black p-4">
                        <div className="absolute top-0 right-0 left-0 -mt-3 text-center">
                            <span className="uppercase tracking-widest text-xs font-bold bg-white px-2">Backend</span>
                        </div>
                        <h2 className="font-alfa tracked-tight text-2xl mt-4 mb-2">Server Side</h2>

                        <div className="mt-4">
                            <h3 className="tech-stat">GO</h3>
                            <p className="uppercase font-bold text-xs tracking-widest mb-2">Golang</p>
                            <p className="text-xs mb-4">For high-concurrency microservices.</p>

                            <h3 className="tech-stat">PY</h3>
                            <p className="uppercase font-bold text-xs tracking-widest mb-2">Python</p>
                            <p className="text-xs">Data processing and AI integration.</p>
                        </div>
                    </div>

                    {/* Section 4: DevOps */}
                    <div className="tech-section-4 relative border-b border-black p-4">
                        <div className="absolute top-0 right-0 left-0 -mt-3 text-center">
                            <span className="uppercase tracking-widest text-xs font-bold bg-white px-2">Infrastructure</span>
                        </div>
                        <h2 className="font-alfa tracked-tight text-2xl mt-4 mb-2 col-span-2">DevOps & Cloud</h2>

                        <div className="grid grid-cols-3 gap-4 border border-black p-4 mt-4 col-span-2">
                            <div className="text-center">
                                <span className="block font-bold uppercase text-xs mb-1">AWS</span>
                                <span className="text-xs text-gray-600">Certified</span>
                            </div>
                            <div className="text-center border-l border-black pl-2">
                                <span className="block font-bold uppercase text-xs mb-1">Docker</span>
                                <span className="text-xs text-gray-600">Containerized</span>
                            </div>
                            <div className="text-center border-l border-black pl-2">
                                <span className="block font-bold uppercase text-xs mb-1">K8s</span>
                                <span className="text-xs text-gray-600">Orchestrated</span>
                            </div>
                        </div>

                        <div className="col-span-2 mt-4">
                            <p className="font-bold text-lg">CI/CD Pipelines</p>
                            <p className="font-merriweather italic text-xs text-gray-600">Automated testing and deployment via Jenkins and GitHub Actions.</p>
                        </div>
                    </div>

                    {/* Section 5: Other */}
                    <div className="tech-section-5 relative p-4">
                        <div className="absolute top-0 right-0 left-0 -mt-3 text-center">
                            <span className="uppercase tracking-widest text-xs font-bold bg-white px-2">Tools</span>
                        </div>
                        <h2 className="font-alfa tracked-tight text-2xl mt-4">Workflow</h2>

                        <div className="mt-8 border-b border-black pb-4">
                            <h3 className="tech-stat">git</h3>
                            <p className="uppercase font-bold text-xs tracking-widest">Version Control</p>
                        </div>

                        <div className="mt-4">
                            <h3 className="tech-stat">Linux</h3>
                            <p className="uppercase font-bold text-xs tracking-widest">Environment</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
