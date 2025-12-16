"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MagneticCursor = () => {
    const [isHovering, setIsHovering] = useState(false);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-50 rounded-full border-2 border-black mix-blend-difference hidden lg:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
            }}
            animate={{
                width: isHovering ? 64 : 32,
                height: isHovering ? 64 : 32,
                backgroundColor: isHovering ? "white" : "transparent",
            }}
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <div className={`h-1 w-1 bg-black rounded-full transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`} />
            </div>
        </motion.div>
    );
};
