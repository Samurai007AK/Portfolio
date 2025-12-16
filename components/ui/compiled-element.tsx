"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CompiledElementProps {
    children: React.ReactNode;
    tag?: string;
    className?: string;
    delay?: number;
    forceDebug?: boolean;
}

export function CompiledElement({
    children,
    tag = "div",
    className,
    delay = 0,
    forceDebug = false
}: CompiledElementProps) {
    const [isCompiled, setIsCompiled] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        setIsCompiled(true);
                    }, delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    const isWireframe = !isCompiled || forceDebug;

    return (
        <div
            ref={elementRef}
            className={cn(
                "relative transition-all duration-700 ease-in-out",
                isWireframe ? "p-4 border-2 border-dashed border-blue-500/50 bg-blue-950/10 font-mono text-blue-400" : "border-transparent",
                className
            )}
        >
            {isWireframe && (
                <div className="absolute -top-3 left-2 bg-black px-2 text-xs font-bold uppercase tracking-widest text-blue-500">
                    &lt;{tag}&gt;
                </div>
            )}

            <div className={cn(
                "formatted-content transition-opacity duration-500",
                isWireframe ? "opacity-80 blur-[0.5px] grayscale" : "opacity-100 blur-0 grayscale-0"
            )}>
                {children}
            </div>

            {isWireframe && (
                <div className="absolute -bottom-3 right-2 bg-black px-2 text-xs font-bold uppercase tracking-widest text-blue-500">
                    &lt;/{tag}&gt;
                </div>
            )}
        </div>
    );
}
