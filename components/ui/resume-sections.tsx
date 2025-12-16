"use client";

export const ResumeSections = () => {
    return (
        <section className="relative w-full border-t-4 border-black bg-white text-black" id="resume">

            {/* Resume Wrapper */}
            <div className="flex flex-col md:flex-row">

                {/* Sticky Sidebar (Left) */}
                <div className="w-full md:w-1/3 md:border-r-4 md:border-black">
                    <div className="sticky top-0 flex h-auto min-h-[30vh] flex-col justify-between p-6 md:h-screen md:p-12">
                        <div>
                            <span className="block font-mono text-xs font-bold uppercase tracking-widest text-gray-500">
                                Profile
                            </span>
                            <h2 className="mt-2 text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl lg:text-8xl">
                                CAREER <br /> PATH
                            </h2>
                        </div>

                        <div className="hidden space-y-4 md:block">
                            <div className="flex items-center gap-4">
                                <span className="h-px flex-1 bg-black"></span>
                                <span className="font-mono text-sm font-bold uppercase">2027</span>
                            </div>
                            <p className="max-w-xs font-mono text-sm leading-relaxed text-gray-600">
                                Engineering scalable solutions and leading technical initiatives.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Scrolling Content (Right) */}
                <div className="w-full md:w-2/3">

                    {/* Education Block */}
                    <div className="border-b-4 border-black p-6 md:p-12">
                        <h3 className="mb-8 font-mono text-xl font-bold uppercase underline decoration-4 underline-offset-4">
                            01. Education
                        </h3>
                        <div>
                            <div className="flex flex-col justify-between md:flex-row md:items-start">
                                <h4 className="text-2xl font-black uppercase leading-tight md:text-3xl">
                                    Indian Institute of Information Technology and Management, Gwalior
                                </h4>
                                <span className="mt-2 shrink-0 font-mono text-sm font-bold bg-black text-white px-2 py-1 md:mt-0 md:ml-4">
                                    EXP. JULY 2027
                                </span>
                            </div>
                            <p className="mt-2 font-mono text-sm font-bold text-gray-600">
                                Integrated B.Tech + M.Tech in Information Technology
                            </p>
                            <p className="mt-4 font-mono text-sm">
                                <span className="font-bold">CGPA:</span> 7.84
                            </p>
                        </div>
                    </div>

                    {/* Experience Block */}
                    <div className="border-b-4 border-black p-8 md:p-12 bg-gray-50">
                        <h3 className="mb-8 font-mono text-xl font-bold uppercase underline decoration-4 underline-offset-4">
                            02. Experience
                        </h3>

                        <div className="mb-8">
                            <div className="flex flex-col justify-between md:flex-row md:items-start">
                                <h4 className="text-2xl font-black uppercase leading-tight md:text-3xl">
                                    Backend & DevOps Engineer
                                </h4>
                                <span className="mt-2 shrink-0 font-mono text-sm font-bold bg-black text-white px-2 py-1 md:mt-0 md:ml-4">
                                    MAY 2025 - AUG 2025
                                </span>
                            </div>
                            <p className="mt-2 font-mono text-sm font-bold text-gray-500">
                                IIITM | Research Project | Serverless Function Fusion Platform
                            </p>

                            <ul className="mt-6 list-disc space-y-3 pl-5 font-mono text-sm leading-relaxed text-gray-700">
                                <li>
                                    Implemented a <span className="font-bold text-black">multi-algorithm framework</span> (ILP, Greedy, CSP, Min-Cut) for function fusion, reducing AWS Lambda workflow latency by up to <span className="font-bold text-black">67%</span> and cost by <span className="font-bold text-black">60%</span>.
                                </li>
                                <li>
                                    Built backend services in <span className="font-bold text-black">Django/DRF</span> with secure APIs, integrated with <span className="font-bold text-black">Boto3</span> to fetch real AWS X-Ray/CloudWatch metrics.
                                </li>
                                <li>
                                    Automated infrastructure using <span className="font-bold text-black">Docker, Kubernetes, and GitHub Actions</span>, enabling seamless CI/CD pipelines and reproducible research deployments.
                                </li>
                                <li>
                                    Managed AWS cloud stack (<span className="font-bold text-black">Lambda, S3, IAM, CloudWatch</span>), ensuring compliance with <span className="font-bold text-black">memory & latency constraints</span> across 2 case studies.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Achievements Block */}
                    <div className="border-b-4 border-black p-8 md:p-12">
                        <h3 className="mb-8 font-mono text-xl font-bold uppercase underline decoration-4 underline-offset-4">
                            03. Achievements
                        </h3>
                        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <li className="border-2 border-black p-4 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <span className="block text-xs font-bold text-gray-500">2025</span>
                                <span className="font-bold">Deloitte Technology Job Simulation</span>
                                <p className="text-xs text-gray-600 mt-1">Completed virtual internship (coding & dashboarding).</p>
                            </li>
                            <li className="border-2 border-black p-4 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <span className="block text-xs font-bold text-gray-500">2024</span>
                                <span className="font-bold">Hackatron (INFOTSAV ’24)</span>
                                <p className="text-xs text-gray-600 mt-1">Winner of the flagship college hackathon event.</p>
                            </li>
                            <li className="border-2 border-black p-4 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <span className="block text-xs font-bold text-gray-500">2024</span>
                                <span className="font-bold">Smart India Hackathon (Internal)</span>
                                <p className="text-xs text-gray-600 mt-1">Secured Top 3 finish among 100+ teams.</p>
                            </li>
                            <li className="border-2 border-black p-4 transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                <span className="block text-xs font-bold text-gray-500">2022</span>
                                <span className="font-bold">JEE Mains & Advanced</span>
                                <p className="text-xs text-gray-600 mt-1">Top 1.2% of 1.4M applicants. Qualified all-India exam.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Positions of Responsibility Block */}
                    <div className="p-8 md:p-12">
                        <h3 className="mb-8 font-mono text-xl font-bold uppercase underline decoration-4 underline-offset-4">
                            04. Responsibility
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-black uppercase text-lg">Secretary, Student Activity Council</h4>
                                <p className="font-mono text-xs text-gray-500 mb-1">1 Year</p>
                                <p className="font-mono text-sm">Managed communication & ensured smooth execution of events.</p>
                            </div>
                            <div>
                                <h4 className="font-black uppercase text-lg">Core Team, Infotsav</h4>
                                <p className="font-mono text-xs text-gray-500 mb-1">6 Months</p>
                                <p className="font-mono text-sm">Coordinated departments to organize technical workshops and events.</p>
                            </div>
                            <div>
                                <h4 className="font-black uppercase text-lg">Coordinator, Urja Sports Fest</h4>
                                <p className="font-mono text-xs text-gray-500 mb-1">2 Months</p>
                                <p className="font-mono text-sm">Led teams to execute events and logistics seamlessly.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
