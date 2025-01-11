import { gsap } from 'gsap';
import React, { useEffect, useRef, useState } from 'react';
import { Engine, World, Bodies, Body, Mouse, MouseConstraint } from 'matter-js';
import { trustWords, trustColors, truse } from '../../utility/data';
import { work } from '../../utility/data'

const Work = () => {
    const containerRef = useRef(null);
    const dotsRef = useRef([]);
    const mouseRef = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const config = {
            rows: window.innerWidth < 768 ? 20 : 40,
            cols: window.innerWidth < 768 ? 20 : 40,
            dotSize: window.innerWidth < 768 ? 3 : 4,
            gap: window.innerWidth < 768 ? 15 : 25,
            mouseRadius: window.innerWidth < 768 ? 100 : 150,
            baseOpacity: 0.3,
            maxOpacity: 1,
            maxScale: window.innerWidth < 768 ? 2 : 3
        };

        const container = containerRef.current;
        const dots = [];

        // Center the container in the purple section
        const purpleSection = container.parentElement;
        const sectionWidth = purpleSection.offsetWidth;
        const sectionHeight = purpleSection.offsetHeight;

        // Calculate total grid size
        const gridWidth = (config.cols - 1) * config.gap;
        const gridHeight = (config.rows - 1) * config.gap;

        // Center position calculations
        const startX = (sectionWidth - gridWidth) / 2;
        const startY = (sectionHeight - gridHeight) / 2;

        // Create dots with positioning relative to center
        for (let row = 0; row < config.rows; row++) {
            for (let col = 0; col < config.cols; col++) {
                const dot = document.createElement('div');
                dot.className = 'dot absolute rounded-full bg-white';
                dot.style.width = `${config.dotSize}px`;
                dot.style.height = `${config.dotSize}px`;
                dot.style.left = `${startX + (col * config.gap)}px`;
                dot.style.top = `${startY + (row * config.gap)}px`;
                dot.style.opacity = config.baseOpacity;
                container.appendChild(dot);
                dots.push(dot);
            }
        }

        dotsRef.current = dots;

        // Optimized animation function
        const animateDots = () => {
            const { x, y } = mouseRef.current;

            dots.forEach(dot => {
                const rect = dot.getBoundingClientRect();
                const dotX = rect.left + rect.width / 2;
                const dotY = rect.top + rect.height / 2;

                const distX = x - dotX;
                const distY = y - dotY;
                const distance = Math.sqrt(distX * distX + distY * distY);

                if (distance < config.mouseRadius) {
                    const scale = 1 + (1 - distance / config.mouseRadius) * config.maxScale;
                    const opacity = config.baseOpacity +
                        (1 - distance / config.mouseRadius) * (config.maxOpacity - config.baseOpacity);

                    dot.style.transform = `scale(${scale})`;
                    dot.style.opacity = opacity;
                } else {
                    dot.style.transform = 'scale(1)';
                    dot.style.opacity = config.baseOpacity;
                }
            });
        };

        // Mouse move handler
        const handleMouseMove = (e) => {
            const rect = purpleSection.getBoundingClientRect();

            // Only update if mouse is within purple section
            if (e.clientX >= rect.left && e.clientX <= rect.right &&
                e.clientY >= rect.top && e.clientY <= rect.bottom) {
                mouseRef.current = {
                    x: e.clientX,
                    y: e.clientY
                };
                requestAnimationFrame(animateDots);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            dots.forEach(dot => dot.remove());
        };
    }, []);
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
            const container = canvasRef.current?.parentElement;
            if (container) {
                setDimensions({
                    width: container.offsetWidth,
                    height: container.offsetHeight
                });
            }
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
            dimensions.width / 2,
            dimensions.height,
            dimensions.width * 1.2,
            60,
            { isStatic: true }
        );

        const ceiling = Bodies.rectangle(
            dimensions.width / 2,
            0,
            dimensions.width * 1.2,
            60,
            { isStatic: true }
        );

        const wallLeft = Bodies.rectangle(
            0,
            dimensions.height / 2,
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

        World.add(engine.world, [ground, ceiling, wallLeft, wallRight]);

        // Create words with initial positions spread across the canvas
        wordsRef.current = WORDS.map((word, index) => {
            const isMobile = window.innerWidth < 768;
            // Increased box sizes
            const boxWidth = isMobile ?
                (word.length * 15 + 60) : // Increased width on mobile
                Math.min((word.length * 20 + 100), dimensions.width * 0.25); // Increased width and max width on desktop
            const boxHeight = isMobile ? 60 : 80; // Increased height
            const columns = 3; // Number of columns to arrange words
            const row = Math.floor(index / columns);
            const col = index % columns;

            return {
                word,
                body: Bodies.rectangle(
                    (col + 1) * (dimensions.width / (columns + 1)), // Spread horizontally
                    dimensions.height * 0.3 + (row * (isMobile ? 80 : 120)), // Adjusted spacing
                    boxWidth,
                    boxHeight,
                    {
                        friction: 0.3,
                        restitution: 0.6,
                        density: isMobile ? 0.002 : 0.001
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

                const isMobile = window.innerWidth < 768;
                // Calculate initial sizes
                const desiredWidth = isMobile ?
                    (word.length * 15 + 60) :
                    Math.min((word.length * 20 + 100), dimensions.width * 0.25);
                const height = isMobile ? 60 : 80;

                // Calculate font size to fit text
                let fontSize = isMobile ? 20 : 32;
                ctx.font = `${fontSize}px Arial`;
                let textWidth = ctx.measureText(word.toUpperCase()).width;
                const padding = 20; // Padding on each side

                // Reduce font size until text fits
                while (textWidth > (desiredWidth - padding * 2) && fontSize > 12) {
                    fontSize--;
                    ctx.font = `${fontSize}px Arial`;
                    textWidth = ctx.measureText(word.toUpperCase()).width;
                }

                // Use the actual text width to set box width
                const finalWidth = Math.max(desiredWidth, textWidth + padding * 2);

                // Draw box with shadow effects
                ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
                ctx.shadowBlur = 15;
                ctx.shadowOffsetX = 5;
                ctx.shadowOffsetY = 5;

                // Draw the box
                ctx.fillStyle = wordObj.color;
                ctx.beginPath();
                ctx.roundRect(-finalWidth / 2, -height / 2, finalWidth, height, isMobile ? 8 : 12);
                ctx.fill();

                // Draw text with adjusted settings
                ctx.shadowColor = 'none';
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 0;
                ctx.fillStyle = '#ffffff';
                ctx.font = `${fontSize}px Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(word.toUpperCase(), 0, 0);

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
                // Increased force multipliers for more dramatic bounce effect
                Body.applyForce(
                    wordObj.body,
                    { x: wordObj.body.position.x, y: wordObj.body.position.y },
                    {
                        x: (Math.random() - 0.5) * 0.001 * scrollDelta, // Increased horizontal force
                        y: -0.002 * scrollDelta // Increased vertical bounce force
                    }
                );

                // Increased rotation effect
                Body.setAngularVelocity(
                    wordObj.body,
                    (Math.random() - 0.5) * 0.01 * scrollDelta // Increased rotation force
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
        const isMobile = window.innerWidth < 768;
        // Increased sizes for clicked boxes
        const width = isMobile ?
            (word.length * 15 + 60) :
            Math.min((word.length * 20 + 100), dimensions.width * 0.25);
        const height = isMobile ? 60 : 80;

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
                    density: isMobile ? 0.002 : 0.001
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
        <div className="w-screen bg-black py-16 md:py-32 overflow-hidden flex flex-col gap-16 md:gap-26 items-center justify-center">
            {/* bright dot's section */}
            <div className='container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 px-4 md:px-0'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-white text-3xl md:text-7xl text-center md:text-start mb-8 md:mb-0'>
                        {work.title1}
                    </h1>
                </div>
                <div className='w-full md:w-1/2 h-[50vh] md:h-[90vh] rounded-2xl md:rounded-3xl relative overflow-hidden'>
                    {/* Base container with blue background */}
                    <div className="absolute inset-0 bg-blue-500" />

                    {/* Dots Container - as background */}
                    <div
                        ref={containerRef}
                        className="absolute inset-0"
                        style={{
                            mixBlendMode: 'overlay',
                            zIndex: 1
                        }}
                    />

                    {/* Image overlay with transparency */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-0" style={{ zIndex: 2 }}>
                        <img
                            src='https://sendpotion.com/assets/img/home/advantage/1.svg'
                            alt="Overlay"
                            className="w-full md:w-3/4 h-auto md:h-3/4 object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Matter.js canvas */}
            <div className='container mx-auto my-8 md:my-28 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 px-4 md:px-0'>
                <div className='w-full md:w-1/2'>
                    <h1 className='text-white text-3xl md:text-7xl text-center md:text-start mb-8 md:mb-0'>
                        {work.title2}
                    </h1>
                </div>
                <div className='w-full md:w-1/2 h-[50vh] md:h-[90vh] relative bg-gray-500 overflow-hidden rounded-2xl md:rounded-3xl flex items-center justify-center'>
                    <canvas
                        ref={canvasRef}
                        style={{
                            width: '100%',
                            height: '100%',
                            background: 'transparent',
                            position: 'relative',
                            zIndex: 1,
                            mixBlendMode: 'overlay'
                        }}
                        width={dimensions.width}
                        height={dimensions.height}
                        onClick={handleClick}
                        onDoubleClick={handleDoubleClick}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-0" style={{ zIndex: 2, pointerEvents: 'none' }}>
                        <img
                            src='https://sendpotion.com/assets/img/home/advantage/1.svg'
                            alt="Overlay"
                            className="w-full md:w-3/4 h-auto md:h-3/4 object-contain"
                            style={{
                                filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;

