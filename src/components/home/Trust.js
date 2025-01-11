import React, { useEffect, useRef, useState } from 'react';
import { Engine, World, Bodies, Body, Mouse, MouseConstraint } from 'matter-js';
import { trustWords, trustColors, truse } from '../../utility/data';

const Trust = () => {
    const canvasRef = useRef(null);
    const engineRef = useRef(null);
    const wordsRef = useRef([]);
    const requestRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMouseInCanvas, setIsMouseInCanvas] = useState(false);

    const WORDS = trustWords;
    const COLORS = trustColors;

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerWidth < 768 ? window.innerHeight * 0.6 : window.innerHeight * 0.7 // Increased height
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        if (!dimensions.width || !dimensions.height) return;

        // Initialize engine
        engineRef.current = Engine.create();
        const engine = engineRef.current;

        // Create boundaries
        const ground = Bodies.rectangle(
            dimensions.width / 3,
            dimensions.height,
            dimensions.width * 1.2,
            60,
            { isStatic: true }
        );

        const wallLeft = Bodies.rectangle(
            0,
            dimensions.height / 3,
            60,
            dimensions.height * 1.2,
            { isStatic: true }
        );

        const wallRight = Bodies.rectangle(
            dimensions.width,
            dimensions.height / 2,
            60,
            dimensions.height * 1.2,
            { isStatic: true }
        );

        World.add(engine.world, [ground, wallLeft, wallRight]);

        // Create words with initial positions spread across the canvas
        wordsRef.current = WORDS.map((word, index) => {
            const isMobile = window.innerWidth < 768;
            const width = isMobile ? (word.length * 12 + 40) : (word.length * 20 + 80);
            const height = isMobile ? 60 : 100;
            const columns = isMobile ? 2 : 3; // Fewer columns on mobile
            const row = Math.floor(index / columns);
            const col = index % columns;

            return {
                word,
                body: Bodies.rectangle(
                    (col + 1) * (dimensions.width / (columns + 1)), // Spread horizontally
                    dimensions.height * 0.3 + (row * (isMobile ? 100 : 150)), // Start from middle and spread down
                    width,
                    height,
                    {
                        friction: 0.3,
                        restitution: 0.6,
                        density: isMobile ? 0.002 : 0.001 // Slightly higher density on mobile
                    }
                ),
                color: COLORS[Math.floor(Math.random() * COLORS.length)],
                targetColor: '#ffffff',
                isExploding: false,
                explosionRadius: 0
            };
        });

        World.add(engine.world, wordsRef.current.map(w => w.body));

        // Add mouse control
        const mouse = Mouse.create(canvasRef.current);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });

        World.add(engine.world, mouseConstraint);

        // Add particle system
        const particles = [];
        const createParticle = (x, y, color) => {
            return {
                x,
                y,
                color,
                velocity: { x: (Math.random() - 0.5) * 3, y: (Math.random() - 0.5) * 3 },
                alpha: 1,
                radius: Math.random() * 2 + 1
            };
        };

        // Animation loop
        const animate = () => {
            Engine.update(engine);
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, dimensions.width, dimensions.height);

            // Add cursor following behavior
            if (isMouseInCanvas) {
                wordsRef.current.forEach(wordObj => {
                    const { body } = wordObj;
                    const dx = mousePos.x - body.position.x;
                    const dy = mousePos.y - body.position.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Apply attraction force when mouse is nearby
                    if (distance < 200) {
                        const force = 0.000015;
                        Body.applyForce(body, body.position, {
                            x: dx * force,
                            y: dy * force
                        });
                    }
                });
            }

            // Draw words
            wordsRef.current.forEach(wordObj => {
                const { body, word, isExploding, explosionRadius } = wordObj;
                const { x, y } = body.position;
                const angle = body.angle;

                ctx.save();
                ctx.translate(x, y);
                ctx.rotate(angle);

                // Draw explosion effect
                if (isExploding) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(255, 255, 0, ${1 - explosionRadius / 100})`;
                    ctx.arc(0, 0, explosionRadius * 2, 0, Math.PI * 2);
                    ctx.stroke();
                    wordObj.explosionRadius += 5;
                    if (wordObj.explosionRadius > 100) {
                        wordObj.isExploding = false;
                        wordObj.explosionRadius = 0;
                    }
                }

                // Draw box
                const isMobile = window.innerWidth < 768;
                const fontSize = isMobile ? '24px' : '40px';
                const width = isMobile ? (word.length * 12 + 40) : (word.length * 20 + 80);
                const height = isMobile ? 60 : 100;
                ctx.fillStyle = wordObj.color;
                ctx.beginPath();
                ctx.roundRect(-width / 2, -height / 2, width, height, isMobile ? 12 : 20);
                ctx.fill();

                // Add glow effect
                ctx.shadowColor = wordObj.color;
                ctx.shadowBlur = 15;

                // Draw text
                ctx.fillStyle = '#ffffff';
                ctx.font = `${fontSize} Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(word.toUpperCase(), 0, 0);

                ctx.restore();

                // Add particles on movement
                if (Math.abs(wordObj.body.velocity.x) > 0.5 || Math.abs(wordObj.body.velocity.y) > 0.5) {
                    particles.push(createParticle(
                        wordObj.body.position.x,
                        wordObj.body.position.y,
                        wordObj.color
                    ));
                }
            });

            // Draw particles
            particles.forEach((particle, index) => {
                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;
                particle.alpha -= 0.02;

                if (particle.alpha <= 0) {
                    particles.splice(index, 1);
                    return;
                }

                ctx.save();
                ctx.globalAlpha = particle.alpha;
                ctx.fillStyle = particle.color;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        // Cleanup
        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            World.clear(engine.world);
            Engine.clear(engine);
        };
    }, [dimensions]);

    // Modify the scroll effect to add bounce without changing initial positions
    useEffect(() => {
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;

            wordsRef.current.forEach(wordObj => {
                // Add a gentle bouncing force based on scroll
                Body.applyForce(
                    wordObj.body,
                    { x: wordObj.body.position.x, y: wordObj.body.position.y },
                    {
                        x: (Math.random() - 0.5) * 0.0002 * scrollDelta, // Add slight horizontal wobble
                        y: -0.0004 * scrollDelta // Vertical bounce force
                    }
                );

                // Add some rotation for more dynamic effect
                Body.setAngularVelocity(
                    wordObj.body,
                    (Math.random() - 0.5) * 0.002 * scrollDelta
                );
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleDoubleClick = (e) => {
        const clickX = e.clientX;
        const clickY = e.clientY;

        let closestWord = null;
        let closestDist = Infinity;

        wordsRef.current.forEach(wordObj => {
            const dx = wordObj.body.position.x - clickX;
            const dy = wordObj.body.position.y - clickY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < closestDist) {
                closestDist = dist;
                closestWord = wordObj;
            }
        });

        if (closestWord && closestDist < 100) {
            closestWord.isExploding = true;
            closestWord.explosionRadius = 0;
            Body.setVelocity(closestWord.body, {
                x: (Math.random() - 0.5) * 20,
                y: -Math.random() * 15
            });
            Body.setAngularVelocity(closestWord.body, (Math.random() - 0.5) * 0.4);
        }
    };

    const handleClick = (e) => {
        if (!engineRef.current) return;

        const word = WORDS[Math.floor(Math.random() * WORDS.length)];
        const width = word.length * 20 + 80;
        const height = 100;

        const newWord = {
            word,
            body: Bodies.rectangle(
                e.clientX,
                e.clientY,
                width,
                height,
                {
                    friction: 0.3,
                    restitution: 0.6,
                    density: 0.001
                }
            ),
            color: COLORS[Math.floor(Math.random() * COLORS.length)],
            targetColor: '#ffffff',
            isExploding: false,
            explosionRadius: 0
        };

        wordsRef.current.push(newWord);
        World.add(engineRef.current.world, newWord.body);
    };

    const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setIsMouseInCanvas(true);
    };

    const handleMouseLeave = () => {
        setIsMouseInCanvas(false);
    };

    return (
        <div className="relative w-screen h-[90vh] md:h-[100vh] bg-white">
            <div className='w-screen h-[70vh] md:h-[90vh] flex justify-center items-start text-center cursor'>
                <h1 style={{ userSelect: 'none' }} className='font-montserrat text-3xl md:text-7xl font-[400] w-full md:w-1/2 px-4 md:px-0 relative z-10 pt-8'>
                    {truse.title}
                </h1>
            </div>
            <canvas
                ref={canvasRef}
                width={dimensions.width}
                height={dimensions.height}
                onClick={handleClick}
                onDoubleClick={handleDoubleClick}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute top-0 left-0 h-[80vh] md:h-[90vh]" // Increased canvas height
            />
        </div>
    );
};

export default Trust;
