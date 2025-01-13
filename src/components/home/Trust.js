import React, { useEffect, useRef, useState } from 'react';
import { Engine, World, Bodies, Body, Mouse, MouseConstraint } from 'matter-js';
import { trustWords, trustColors, truse } from '../../utility/data';

const Trust = () => {
    const canvasRef = useRef(null);
    const engineRef = useRef(null);
    const wordsRef = useRef([]);
    const containerRef = useRef(null);
    const requestRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMouseInCanvas, setIsMouseInCanvas] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const WORDS = trustWords;
    const COLORS = trustColors;

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setDimensions({
                    width: rect.width,
                    height: window.innerWidth < 768 ? window.innerHeight * 0.6 : window.innerHeight * 0.7
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        // Set up Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            window.removeEventListener('resize', updateDimensions);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (!dimensions.width || !dimensions.height || !isVisible) return;

        engineRef.current = Engine.create({
            gravity: { x: 0, y: 1 } // Increased gravity
        });

        const engine = engineRef.current;

        const wallThickness = 30;
        const padding = 10;

        const walls = [
            // Bottom wall
            Bodies.rectangle(
                dimensions.width / 2,
                dimensions.height - wallThickness / 2,
                dimensions.width - padding * 2,
                wallThickness,
                { isStatic: true }
            ),
            // Left wall
            Bodies.rectangle(
                -wallThickness / 2 + padding,
                dimensions.height / 2,
                wallThickness,
                dimensions.height,
                { isStatic: true }
            ),
            // Right wall
            Bodies.rectangle(
                dimensions.width - wallThickness / 2 - padding,
                dimensions.height / 2,
                wallThickness,
                dimensions.height,
                { isStatic: true }
            )
        ];

        World.add(engine.world, walls);

        // Initialize words above the viewport
        wordsRef.current = WORDS.map((word, index) => {
            const isMobile = window.innerWidth < 768;
            // Double the width and height calculations
            const width = isMobile ? (word.length * 6 + 12) : (word.length * 12 + 30); // Doubled
            const height = isMobile ? 24 : 48; // Doubled

            const columns = isMobile ? 5 : 8;
            const spacing = {
                horizontal: isMobile ? 5 : 10
            };

            const col = index % columns;
            const row = Math.floor(index / columns);

            const startX = (dimensions.width - (columns * (width + spacing.horizontal))) / 2;
            const x = startX + (col * (width + spacing.horizontal)) + width / 2;
            // Position words above the viewport initially
            const y = -200 - (row * (height + spacing.horizontal));

            return {
                word,
                body: Bodies.rectangle(
                    x,
                    y,
                    width,
                    height,
                    {
                        friction: 0.05,
                        restitution: 0.3,
                        density: 0.001,
                    }
                ),
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
            };
        });

        World.add(engine.world, wordsRef.current.map(w => w.body));

        const mouse = Mouse.create(canvasRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        World.add(engine.world, mouseConstraint);

        const animate = () => {
            Engine.update(engine);
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, dimensions.width, dimensions.height);

            // Mouse interaction
            if (isMouseInCanvas) {
                wordsRef.current.forEach(wordObj => {
                    const { body } = wordObj;
                    const dx = mousePos.x - body.position.x;
                    const dy = mousePos.y - body.position.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        const force = 0.00001 * (1 - distance / 150);
                        Body.applyForce(body, body.position, {
                            x: dx * force,
                            y: dy * force
                        });
                    }
                });
            }

            // Draw words
            wordsRef.current.forEach(wordObj => {
                const { body, word } = wordObj;
                const { x, y } = body.position;
                const angle = body.angle;

                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle);

                const isMobile = window.innerWidth < 768;
                const fontSize = isMobile ? '12px' : '24px'; // Doubled font size
                const width = isMobile ? (word.length * 6 + 12) : (word.length * 12 + 30); // Doubled
                const height = isMobile ? 24 : 48; // Doubled
                const borderRadius = isMobile ? 6 : 12; // Doubled border radius

                ctx.fillStyle = wordObj.color;
                ctx.beginPath();
                ctx.roundRect(-width / 2, -height / 2, width, height, borderRadius);
                ctx.fill();

                ctx.fillStyle = '#ffffff';
                ctx.font = `${fontSize} 'Inter', Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(word.toLowerCase(), 0, 0);

                ctx.restore();
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            World.clear(engine.world);
            Engine.clear(engine);
        };
    }, [dimensions, isVisible]);

    // Add this new useEffect after the main animation useEffect
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;

            if (wordsRef.current) {
                wordsRef.current.forEach(wordObj => {
                    if (wordObj.body) {
                        // Add vertical bounce force
                        const bounceForce = -0.0008 * scrollDelta;
                        // Add random horizontal movement
                        const randomHorizontal = (Math.random() - 0.5) * 0.0004 * scrollDelta;

                        Body.applyForce(
                            wordObj.body,
                            { x: wordObj.body.position.x, y: wordObj.body.position.y },
                            {
                                x: randomHorizontal,
                                y: bounceForce
                            }
                        );

                        // Add some rotation for more dynamic movement
                        const spin = (Math.random() - 0.5) * 0.002 * scrollDelta;
                        Body.setAngularVelocity(wordObj.body, wordObj.body.angularVelocity + spin);

                        // Add damping to prevent excessive movement
                        Body.setVelocity(wordObj.body, {
                            x: wordObj.body.velocity.x * 0.95,
                            y: wordObj.body.velocity.y * 0.95
                        });
                    }
                });
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseMove = (e) => {
        if (canvasRef.current) {
            const rect = canvasRef.current.getBoundingClientRect();
            setMousePos({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            });
        }
    };

    const handleMouseEnter = () => {
        setIsMouseInCanvas(true);
    };

    const handleMouseLeave = () => {
        setIsMouseInCanvas(false);
    };

    return (
        <div ref={containerRef} className="relative w-full h-[50vh] md:h-[80vh] bg-white overflow-hidden">
            <div className='w-full h-[30vh] md:h-[40vh] flex justify-center items-start text-center'>
                <h1 style={{ userSelect: 'none' }} className='text-3xl md:text-7xl font-[600] w-full md:w-2/3 px-4 md:px-0 relative z-10 pt-3 md:pt-6'>
                    {truse.title}
                </h1>
            </div>
            <canvas
                ref={canvasRef}
                width={dimensions.width}
                height={dimensions.height}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute top-0 left-0 font-raleway font-normal w-full h-[60vh] md:h-[80vh]"
            />
        </div>
    );
};

export default Trust;