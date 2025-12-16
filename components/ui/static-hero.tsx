"use client";

export const StaticHero = () => {
    return (
        <section className="flex min-h-[85vh] w-full flex-col items-center justify-center overflow-hidden bg-white p-4 md:p-8">

            {/* Top Decoration */}
            <div className="mb-12 flex w-full max-w-4xl flex-col justify-between border-b-2 border-black pb-4 font-mono text-xs font-bold uppercase tracking-widest text-black md:flex-row md:text-sm">
                <span>Arijit Konar</span>
                <div className="flex gap-4 md:gap-8">
                    <a href="https://github.com/Samurai007AK" className="hover:underline">GitHub</a>
                    <a href="https://www.linkedin.com/in/arijit-konar" className="hover:underline">LinkedIn</a>
                    <a href="mailto:arijitkonar16@gmail.com" className="hover:underline">Email</a>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative flex flex-col items-center justify-center">
                {/* Block 1 */}
                <div className="z-10 -mb-4 -rotate-2 transform border-4 border-black bg-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transition-transform hover:rotate-0 md:p-8">
                    <h1 className="text-4xl font-black uppercase tracking-tighter text-white sm:text-5xl md:text-8xl lg:text-9xl">
                        SYSTEM
                    </h1>
                </div>

                {/* Block 2 */}
                <div className="z-0 rotate-1 transform border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-transform hover:rotate-0 md:p-8">
                    <h1 className="text-4xl font-black uppercase tracking-tighter text-black sm:text-5xl md:text-8xl lg:text-9xl">
                        DEVELOPER
                    </h1>
                </div>
            </div>

            {/* Subtext */}
            <div className="mt-16 max-w-xl text-center">
                <p className="font-mono text-sm font-bold leading-relaxed text-black md:text-base">
                    ARCHITECTING SCALABLE INFRASTRUCTURE AND INTELLIGENT SYSTEMS.
                    <br />
                    BACKEND | DEVOPS | AI ML
                </p>
            </div>

            <div className="mt-12 animate-bounce">
                <span className="font-mono text-2xl">↓</span>
            </div>
        </section>
    );
};
