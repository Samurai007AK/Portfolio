"use client";

const skills = [
    "C++", "Python", "SQL",
    "Docker", "Kubernetes", "Ansible", "Terraform",
    "Jenkins", "Vagrant", "Git", "GitHub",
    "AWS", "Keras", "TensorFlow",
    "Linux", "DSA"
];

export const StaticSkills = () => {
    return (
        <section className="w-full border-y-4 border-black bg-black text-white p-6 py-20 md:p-12 lg:p-24" id="skills">
            <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between">
                <div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
                        Hard Skills
                    </h2>
                    <p className="mt-2 font-mono text-gray-400">// TECHNOLOGIES & TOOLS</p>
                </div>
                <div className="mt-4 h-1 w-full bg-white/20 md:mt-0 md:w-1/3"></div>
            </div>

            <div className="flex flex-wrap gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="border-2 border-white bg-transparent px-4 py-2 font-mono text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white hover:text-black"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
};
