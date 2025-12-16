import { StaticHero } from "@/components/ui/static-hero";
import { StaticProjectGrid } from "@/components/ui/static-project-grid";
import { StaticSkills } from "@/components/ui/static-skills";
import { KeypadContact } from "@/components/ui/keypad-contact";
import { ResumeSections } from "@/components/ui/resume-sections";

export default function Home() {
    return (
        <main className="min-h-screen w-full bg-white text-black selection:bg-black selection:text-white">
            <StaticHero />
            <StaticSkills />
            <StaticProjectGrid />
            <ResumeSections />
            <KeypadContact />

            <footer className="w-full bg-black py-12 text-center text-white">
                <div className="mb-4 flex justify-center gap-4 font-mono text-sm">
                    {/* Contact info moved to top header */}
                </div>
                <p className="font-mono text-xs text-gray-500">Arijit Konar © 2025 // Static Brutalism</p>
            </footer>
        </main>
    );
}
