"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";

export const PhysicsHero = () => {
    const sceneRef = useRef<HTMLDivElement>(null);
    const engineRef = useRef<Matter.Engine | null>(null);
    const renderRef = useRef<Matter.Render | null>(null);
    const runnerRef = useRef<Matter.Runner | null>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        // Module aliases
        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        // Create engine
        const engine = Engine.create();
        engineRef.current = engine;

        // Create renderer
        const width = window.innerWidth;
        const height = window.innerHeight;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                background: "#ffffff",
                wireframes: false,
                pixelRatio: window.devicePixelRatio,
            },
        });
        renderRef.current = render;

        // Create walls
        const wallThick = 60;
        const walls = [
            Bodies.rectangle(width / 2, height + wallThick / 2 - 10, width, wallThick, {
                isStatic: true,
                render: { fillStyle: "transparent" }
            }), // Floor
            Bodies.rectangle(-wallThick / 2, height / 2, wallThick, height, { isStatic: true }), // Left
            Bodies.rectangle(width + wallThick / 2, height / 2, wallThick, height, { isStatic: true }), // Right
        ];

        // Helper to create Letter Blocks
        const createLetter = (x: number, y: number, char: string, size = 80) => {
            return Bodies.rectangle(x, y, size, size, {
                chamfer: { radius: 10 },
                restitution: 0.6,
                friction: 0.5,
                render: {
                    fillStyle: "#000000",
                    text: {
                        content: char,
                        color: "#ffffff",
                        size: 48,
                        family: "Inter, sans-serif",
                        weight: "bold",
                    },
                } as any,
            });
        };

        // Custom Render Hook to draw text on bodies
        Matter.Events.on(render, "afterRender", () => {
            const context = render.context;
            const bodies = Composite.allBodies(engine.world);

            context.font = "bold 48px Inter, sans-serif";
            context.textAlign = "center";
            context.textBaseline = "middle";

            bodies.forEach((body) => {
                const render = body.render as any;
                if (render.text) {
                    const { content, color } = render.text;
                    const { x, y } = body.position;
                    const angle = body.angle;

                    context.save();
                    context.translate(x, y);
                    context.rotate(angle);
                    context.fillStyle = color;
                    context.fillText(content, 0, 0);
                    context.restore();
                }
            });
        });

        // Spawn "CREATIVE"
        const word1 = "CREATIVE".split("");
        const letters1 = word1.map((char, i) =>
            createLetter(width / 2 - 200 + i * 90, -100 - i * 50, char)
        );

        // Spawn "DEVELOPER"
        const word2 = "DEVELOPER".split("");
        const letters2 = word2.map((char, i) =>
            createLetter(width / 2 - 250 + i * 90, -500 - i * 50, char)
        );

        // Add interactions
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });
        render.canvas.removeEventListener("wheel", (mouse as any).mousewheel); // Fix scroll

        // Add all to world
        Composite.add(engine.world, [...walls, ...letters1, ...letters2, mouseConstraint]);

        // Run
        Render.run(render);
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);

        // Resize Handling
        const handleResize = () => {
            if (!renderRef.current || !engineRef.current) return;

            renderRef.current.canvas.width = window.innerWidth;
            renderRef.current.canvas.height = window.innerHeight;

            // Reposition Floor
            Matter.Body.setPosition(walls[0], {
                x: window.innerWidth / 2,
                y: window.innerHeight + wallThick / 2 - 10
            });

            // Reposition Right Wall
            Matter.Body.setPosition(walls[2], {
                x: window.innerWidth + wallThick / 2,
                y: window.innerHeight / 2
            });
        };
        window.addEventListener("resize", handleResize);


        return () => {
            Render.stop(render);
            Runner.stop(runner);
            Composite.clear(engine.world, false);
            Engine.clear(engine);
            render.canvas.remove();
            render.canvas = null as any;
            render.context = null as any;
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative h-screen w-full bg-white overflow-hidden" ref={sceneRef}>
            <div className="absolute top-8 left-8 mix-blend-difference z-10">
                <h1 className="text-xl font-bold tracking-widest text-black uppercase">Arijit Konar</h1>
                <p className="text-xs font-mono text-gray-500">PORTFOLIO v2.0 // KINETIC</p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 right-8 animate-bounce mix-blend-difference z-10">
                <span className="text-xs font-bold uppercase tracking-widest text-black">↓ Scroll to Projects</span>
            </div>
        </div>
    );
};
