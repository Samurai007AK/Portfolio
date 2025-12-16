"use client";

import { useEffect, useRef, useState } from "react";
import "./keypad.css";

export const KeypadContact = () => {
    const [muted, setMuted] = useState(false);

    // Refs for buttons
    const oneRef = useRef<HTMLButtonElement>(null);
    const twoRef = useRef<HTMLButtonElement>(null);
    const threeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const clickAudio = new Audio(
            'https://cdn.freesound.org/previews/378/378085_6260145-lq.mp3'
        );
        clickAudio.volume = 0.5;

        const playSound = () => {
            if (!muted) {
                clickAudio.currentTime = 0;
                clickAudio.play().catch(e => console.log("Audio play failed interaction required", e));
            }
        };

        const handlePress = (e: Event) => {
            playSound();
            const target = e.currentTarget as HTMLElement;
            target.setAttribute("data-pressed", "true");
        };

        const handleRelease = (e: Event) => {
            const target = e.currentTarget as HTMLElement;
            target.removeAttribute("data-pressed");
        };

        const buttons = [oneRef.current, twoRef.current, threeRef.current];

        buttons.forEach(btn => {
            if (!btn) return;

            // Configuration props from original JS
            if (btn.id === 'one') {
                btn.style.setProperty('--travel', '26');
                btn.style.setProperty('--hue', '114');
                btn.style.setProperty('--saturate', '1.4');
                btn.style.setProperty('--brightness', '1.2');
            } else if (btn.id === 'two') {
                btn.style.setProperty('--travel', '26');
                btn.style.setProperty('--hue', '0');
                btn.style.setProperty('--saturate', '0');
                btn.style.setProperty('--brightness', '1.4');
            } else if (btn.id === 'three') {
                btn.style.setProperty('--travel', '18');
                btn.style.setProperty('--hue', '0');
                btn.style.setProperty('--saturate', '0');
                btn.style.setProperty('--brightness', '0.4');
            }

            btn.addEventListener('pointerdown', handlePress);
            btn.addEventListener('pointerup', handleRelease);
            btn.addEventListener('pointerleave', handleRelease);
        });

        return () => {
            buttons.forEach(btn => {
                if (!btn) return;
                btn.removeEventListener('pointerdown', handlePress);
                btn.removeEventListener('pointerup', handleRelease);
                btn.removeEventListener('pointerleave', handleRelease);
            });
        }
    }, [muted]);

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xdkqrdjk", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section className="w-full border-t-4 border-black bg-gray-100 py-24 text-black" id="contact">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 lg:flex-row">

                {/* Contact Form Section */}
                <div className="w-full max-w-xl lg:w-1/2">
                    <h1 className="mb-6 text-5xl font-black uppercase leading-none tracking-tighter md:text-7xl">
                        Let's <br /> Connect.
                    </h1>
                    <p className="mb-8 font-mono text-gray-600">
                        Reach out for collaborations, freelance work, or just to say hello.
                        I'm currently opening to new opportunities.
                        <br />
                        <a href="mailto:arijitkonar16@gmail.com" className="font-bold text-black underline decoration-2 underline-offset-4 hover:bg-black hover:text-white">
                            arijitkonar16@gmail.com
                        </a>
                    </p>

                    {status === "success" ? (
                        <div className="border-4 border-black bg-[#2E8B57] p-6 text-white shadow-[8px_8px_0px_0px_#000000]">
                            <h3 className="font-mono text-xl font-bold uppercase">Message Sent!</h3>
                            <p className="font-mono text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-4 font-bold underline hover:text-black"
                            >
                                Send another
                            </button>
                        </div>
                    ) : (
                        <form className="flex gap-4" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="yourname@gmail.com"
                                disabled={status === "submitting"}
                                className="flex-1 rounded-none border-4 border-black bg-white px-4 py-3 font-mono text-black placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-black/20 disabled:opacity-50"
                            />
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="rounded-none border-4 border-black bg-black px-6 py-3 font-bold uppercase text-white transition-transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:hover:translate-y-0"
                            >
                                {status === "submitting" ? "..." : "Send"}
                            </button>
                        </form>
                    )}

                    {status === "error" && (
                        <p className="mt-2 font-mono text-sm text-red-600 font-bold">
                            Oops! Something went wrong. Please try again.
                        </p>
                    )}

                    <div className="mt-4 flex items-center gap-2">
                        <button onClick={() => setMuted(!muted)} className="text-xs font-mono uppercase underline bg-transparent border-none p-0 cursor-pointer text-gray-500 hover:text-black">
                            {muted ? "Unmute Keypad" : "Mute Keypad"}
                        </button>
                    </div>
                </div>

                {/* 3D Keypad Section */}
                <div className="flex w-full justify-center scale-50 sm:scale-75 lg:w-1/2 lg:scale-100">
                    <div className="keypad">
                        <div className="keypad__base">
                            <img src="https://assets.codepen.io/605876/keypad-base.png?format=auto&quality=86" alt="" />
                        </div>

                        <button ref={oneRef} id="one" className="key keypad__single keypad__single--left group">
                            <span className="key__mask">
                                <span className="key__content">
                                    <span className="key__text group-hover:text-white">ok</span>
                                    <img src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86" alt="" />
                                </span>
                            </span>
                        </button>

                        <button ref={twoRef} id="two" className="key keypad__single group">
                            <span className="key__mask">
                                <span className="key__content">
                                    <span className="key__text group-hover:text-white">go</span>
                                    <img src="https://assets.codepen.io/605876/keypad-single.png?format=auto&quality=86" alt="" />
                                </span>
                            </span>
                        </button>

                        <button ref={threeRef} id="three" className="key keypad__double group">
                            <span className="key__mask">
                                <span className="key__content">
                                    <span className="key__text group-hover:text-white">create.</span>
                                    <img src="https://assets.codepen.io/605876/keypad-double.png?format=auto&quality=86" alt="" />
                                </span>
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};
