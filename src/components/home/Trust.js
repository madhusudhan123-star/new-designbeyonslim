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
    const COLORS = [
        'rgba(59, 130, 246, 0.9)',  // Blue
        'rgba(99, 102, 241, 0.9)',  // Indigo
        'rgba(139, 92, 246, 0.9)',  // Purple
        'rgba(236, 72, 153, 0.9)',  // Pink
        'rgba(14, 165, 233, 0.9)',  // Sky
    ];

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerWidth < 768 ? window.innerHeight * 0.4 : window.innerHeight * 0.7 // Reduced mobile height
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        if (!dimensions.width || !dimensions.height) return;

        engineRef.current = Engine.create();
        const engine = engineRef.current;

        // Add padding to keep boxes away from edges
        const wallThickness = 60;
        const padding = 20;

        // Create boundaries with adjusted positions
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
            // Right wall - Adjusted position to be fully within screen
            Bodies.rectangle(
                dimensions.width - wallThickness / 2 - padding,
                dimensions.height / 2,
                wallThickness,
                dimensions.height,
                { isStatic: true }
            ),
            // Top wall
            Bodies.rectangle(
                dimensions.width / 2,
                -wallThickness / 2 + padding,
                dimensions.width - padding * 2,
                wallThickness,
                { isStatic: true }
            )
        ];

        World.add(engine.world, walls);

        // Adjust starting positions to account for padding
        wordsRef.current = WORDS.map((word, index) => {
            const isMobile = window.innerWidth < 768;
            const width = isMobile ? (word.length * 8 + 20) : (word.length * 20 + 80); // Smaller on mobile
            const height = isMobile ? 40 : 100; // Smaller height on mobile
            const columns = isMobile ? 3 : 3; // More columns on mobile for better layout
            const rows = Math.ceil(WORDS.length / columns);
            const row = Math.floor(index / columns);
            const col = index % columns;

            // Calculate safe starting positions with padding
            const safeX = padding + width / 2 + (col * ((dimensions.width - padding * 2 - width) / (columns - 1)));
            const safeY = padding + height / 2 + (row * ((dimensions.height - padding * 2 - height) / (rows + 1)));

            return {
                word,
                body: Bodies.rectangle(
                    safeX,
                    safeY,
                    width,
                    height,
                    {
                        friction: 0.3,
                        restitution: 0.6,
                        density: isMobile ? 0.003 : 0.001, // Adjusted density for mobile
                        plugin: {
                            attractors: []
                        }
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
                color: shiftColor(color, 30),  // Brighter particle color
                velocity: { x: (Math.random() - 0.5) * 4, y: (Math.random() - 0.5) * 4 },
                alpha: 1,
                radius: Math.random() * 3 + 2  // Larger particles
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

            // Draw words with enhanced styling
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

                // Adjusted sizes for mobile
                const isMobile = window.innerWidth < 768;
                const fontSize = isMobile ? '16px' : '40px'; // Smaller font on mobile
                const width = isMobile ? (word.length * 8 + 20) : (word.length * 20 + 80);
                const height = isMobile ? 40 : 100;
                const borderRadius = isMobile ? 8 : 20;

                // Create gradient
                const gradient = ctx.createLinearGradient(-width/2, -height/2, width/2, height/2);
                gradient.addColorStop(0, wordObj.color);
                gradient.addColorStop(1, shiftColor(wordObj.color, 20));

                // Enhanced box shadow
                ctx.shadowColor = wordObj.color;
                ctx.shadowBlur = 20;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 2;

                // Draw box with gradient
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.roundRect(-width / 2, -height / 2, width, height, borderRadius);
                ctx.fill();

                // Add subtle border
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
                ctx.lineWidth = 1;
                ctx.stroke();

                // Enhanced text styling
                ctx.fillStyle = '#ffffff';
                ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
                ctx.shadowBlur = 4;
                ctx.font = `bold ${fontSize} 'Inter', Arial`;
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

    // Add this helper function for color manipulation
    const shiftColor = (rgba, amt) => {
        const rgbaMatch = rgba.match(/[\d.]+/g);
        if (rgbaMatch) {
            const [r, g, b, a] = rgbaMatch.map(Number);
            return `rgba(${Math.min(255, r + amt)}, ${Math.min(255, g + amt)}, ${Math.min(255, b + amt)}, ${a})`;
        }
        return rgba;
    };

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
        const width = word.length * 10 + 80;
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
        <div className="relative w-screen h-[60vh] md:h-[100vh] bg-white"> {/* Adjusted mobile height */}
            <div className='w-screen h-[40vh] md:h-[90vh] flex justify-center items-start text-center cursor'>
                <h1 style={{ userSelect: 'none' }} className=' text-4xl md:text-7xl font-[600] w-full md:w-2/3 px-4 md:px-0 relative z-10 pt-4 md:pt-8'>
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
                className="absolute top-0 left-0 w-[100vw] mx-auto h-[50vh] md:h-[90vh]" // Adjusted mobile height
            />
        </div>
    );
};

export default Trust;
