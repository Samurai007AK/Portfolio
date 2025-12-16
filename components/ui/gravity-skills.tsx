"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";

const skills = [
    "React", "Node.js", "TypeScript", "Next.js",
    "Tailwind", "PostgreSQL", "AWS", "Docker",
    "GraphQL", "Python", "Go", "Rust"
];

export const GravitySkills = () => {
    const sceneRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sceneRef.current) return;

        const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            Composite = Matter.Composite,
            Mouse = Matter.Mouse,
            MouseConstraint = Matter.MouseConstraint;

        const engine = Engine.create();
        engine.world.gravity.y = 0; // Zero gravity

        const width = sceneRef.current.clientWidth;
        const height = sceneRef.current.clientHeight;

        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width,
                height,
                background: "transparent",
                wireframes: false,
                pixelRatio: window.devicePixelRatio,
            },
        });

        // Walls
        const wallThick = 60;
        const walls = [
            Bodies.rectangle(width / 2, -wallThick / 2, width, wallThick, { isStatic: true, render: { visible: false } }),
            Bodies.rectangle(width / 2, height + wallThick / 2, width, wallThick, { isStatic: true, render: { visible: false } }),
            Bodies.rectangle(width + wallThick / 2, height / 2, wallThick, height, { isStatic: true, render: { visible: false } }),
            Bodies.rectangle(-wallThick / 2, height / 2, wallThick, height, { isStatic: true, render: { visible: false } }),
        ];

        // Skills
        const skillBodies = skills.map((skill) => {
            const radius = 40 + Math.random() * 20;
            const x = Math.random() * (width - 100) + 50;
            const y = Math.random() * (height - 100) + 50;

            return Bodies.circle(x, y, radius, {
                restitution: 0.9,
                friction: 0.001,
                frictionAir: 0.02,
                render: {
                    fillStyle: "#000000",
                    text: {
                        content: skill,
                        color: "#ffffff",
                        size: 14,
                        family: "Inter",
                    },
                } as any, // escaping type check for custom property
            });
        });

        // Custom Render
        Matter.Events.on(render, "afterRender", () => {
            const context = render.context;
            const bodies = Composite.allBodies(engine.world);

            context.font = "bold 14px Inter, sans-serif";
            context.textAlign = "center";
            context.textBaseline = "middle";

            bodies.forEach((body: any) => {
                if (body.render.text) {
                    const { content, color } = body.render.text;
                    const { x, y } = body.position;

                    context.save();
                    context.translate(x, y);
                    context.fillStyle = color;
                    context.fillText(content, 0, 0);
                    context.restore();
                }
            });
        });

        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false },
            },
        });
        render.canvas.removeEventListener("wheel", (mouse as any).mousewheel);

        Composite.add(engine.world, [...walls, ...skillBodies, mouseConstraint]);

        Render.run(render);
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Resize handler
        const handleResize = () => {
            if (!sceneRef.current) return;
            render.canvas.width = sceneRef.current.clientWidth;
            render.canvas.height = sceneRef.current.clientHeight;
            // Note: proper resizing of walls/bodies requires more complex logic, 
            // skipping for simplicity in this MVP but keeping canvas responsive.
        };
        window.addEventListener("resize", handleResize);

        return () => {
            Render.stop(render);
            Runner.stop(runner);
            Engine.clear(engine);
            render.canvas.remove();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="relative h-[600px] w-full border-y-4 border-black bg-white overflow-hidden" id="skills">
            <div className="absolute top-6 left-6 z-10 pointer-events-none">
                <h2 className="text-4xl font-black uppercase text-black">Skills_</h2>
                <p className="font-mono text-xs text-gray-500">ZERO_GRAVITY_ENV</p>
            </div>
            <div ref={sceneRef} className="h-full w-full" />
        </div>
    );
};
