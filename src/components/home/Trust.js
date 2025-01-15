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
    const [isBouncing, setIsBouncing] = useState(false);
    const bounceIntervalRef = useRef(null);

    const WORDS = trustWords;
    const COLORS = trustColors;

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                // Get device pixel ratio for HD rendering
                const dpr = window.devicePixelRatio || 1;
                setDimensions({
                    width: rect.width * dpr,
                    height: (window.innerWidth < 768 ? window.innerHeight * 0.6 : window.innerHeight * 0.7) * dpr,
                    scale: dpr
                });
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    useEffect(() => {
        if (!dimensions.width || !dimensions.height) return;

        // Set canvas DPI
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const scale = dimensions.scale || 1;

        // Set actual canvas size to account for device pixel ratio
        canvas.width = dimensions.width;
        canvas.height = dimensions.height;

        // Scale all drawing operations
        ctx.scale(scale, scale);

        // Enable image smoothing
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        engineRef.current = Engine.create({
            gravity: { x: 0, y: 0.2 } // Reduced gravity for more floating effect
        });

        const engine = engineRef.current;

        const wallThickness = 30;
        const padding = 10;

        // Create all four walls with adjusted positions
        const walls = [
            // Bottom wall
            Bodies.rectangle(
                dimensions.width / (2 * scale),
                dimensions.height / scale,
                dimensions.width / scale,
                wallThickness,
                { isStatic: true }
            ),
            // Top wall
            Bodies.rectangle(
                dimensions.width / (2 * scale),
                0,
                dimensions.width / scale,
                wallThickness,
                { isStatic: true }
            ),
            // Left wall
            Bodies.rectangle(
                0,
                dimensions.height / (2 * scale),
                wallThickness,
                dimensions.height / scale,
                { isStatic: true }
            ),
            // Right wall
            Bodies.rectangle(
                dimensions.width / scale,
                dimensions.height / (2 * scale),
                wallThickness,
                dimensions.height / scale,
                { isStatic: true }
            )
        ];

        World.add(engine.world, walls);

        // Adjust initial word positions to start within bounds
        wordsRef.current = WORDS.map((word, index) => {
            const isMobile = window.innerWidth < 768;
            const width = isMobile ? (word.length * 6 + 12) : (word.length * 12 + 30);
            const height = isMobile ? 24 : 48;
            
            // Spread words across the canvas area with padding
            const x = (padding + width/2) + (Math.random() * (dimensions.width/scale - width - padding*2));
            const y = (padding + height/2) + (Math.random() * (dimensions.height/scale - height - padding*2));

            return {
                word,
                body: Bodies.rectangle(
                    x,
                    y,
                    width,
                    height,
                    {
                        friction: 0.05,
                        restitution: 0.5, // Increased for better bouncing
                        density: 0.002,
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

            // Enhanced word rendering
            wordsRef.current.forEach(wordObj => {
                const { body, word } = wordObj;
                const { x, y } = body.position;
                const angle = body.angle;

                ctx.save();
                ctx.translate(x / scale, y / scale);
                ctx.rotate(angle);

                const isMobile = window.innerWidth < 768;
                const fontSize = isMobile ? 12 : 24;
                const width = isMobile ? (word.length * 6 + 12) : (word.length * 12 + 30);
                const height = isMobile ? 24 : 48;
                const borderRadius = isMobile ? 6 : 12;

                // Add shadow effect
                ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 2;
                ctx.shadowOffsetY = 2;

                // Draw box with enhanced quality
                ctx.fillStyle = wordObj.color;
                ctx.beginPath();
                
                // Manually draw rounded rectangle for better quality
                const rad = borderRadius;
                const right = width/2;
                const left = -width/2;
                const top = -height/2;
                const bottom = height/2;

                ctx.beginPath();
                ctx.moveTo(left + rad, top);
                ctx.lineTo(right - rad, top);
                ctx.quadraticCurveTo(right, top, right, top + rad);
                ctx.lineTo(right, bottom - rad);
                ctx.quadraticCurveTo(right, bottom, right - rad, bottom);
                ctx.lineTo(left + rad, bottom);
                ctx.quadraticCurveTo(left, bottom, left, bottom - rad);
                ctx.lineTo(left, top + rad);
                ctx.quadraticCurveTo(left, top, left + rad, top);
                ctx.closePath();
                ctx.fill();

                // Draw text with enhanced quality
                ctx.shadowColor = 'transparent';
                ctx.fillStyle = '#ffffff';
                ctx.font = `${fontSize}px 'Inter', Arial`;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Add slight text shadow for better readability
                ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
                ctx.shadowBlur = 2;
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = 1;
                
                ctx.fillText(word.toLowerCase(), 0, 0);

                ctx.restore();
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        requestRef.current = requestAnimationFrame(animate);

        // Apply immediate downward force to all words
        wordsRef.current.forEach(wordObj => {
            Body.setVelocity(wordObj.body, { 
                x: (Math.random() - 0.5) * 2, // Small random horizontal velocity
                y: 10 + Math.random() * 5 // Random downward velocity
            });
        });

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            World.clear(engine.world);
            Engine.clear(engine);
        };
    }, [dimensions]);

    useEffect(() => {
        const applyBounceForce = () => {
            if (!wordsRef.current) return;

            wordsRef.current.forEach(wordObj => {
                const randomForceX = (Math.random() - 0.5) * 0.006; // Increased horizontal force
                const upwardForce = -Math.random() * 0.01; // Increased upward force
                
                Body.applyForce(
                    wordObj.body,
                    { x: wordObj.body.position.x, y: wordObj.body.position.y },
                    { x: randomForceX, y: upwardForce }
                );

                // Increased rotation force
                const rotationForce = (Math.random() - 0.5) * 0.04;
                Body.setAngularVelocity(wordObj.body, rotationForce);

                // Add random impulses for more dynamic movement
                if (Math.random() > 0.7) {
                    const impulseX = (Math.random() - 0.5) * 0.5;
                    const impulseY = -Math.random() * 0.8;
                    Body.setVelocity(wordObj.body, {
                        x: wordObj.body.velocity.x + impulseX,
                        y: wordObj.body.velocity.y + impulseY
                    });
                }
            });
        };

        const handleScroll = () => {
            if (!isBouncing) {
                setIsBouncing(true);
                
                // Clear any existing interval
                if (bounceIntervalRef.current) {
                    clearInterval(bounceIntervalRef.current);
                }

                // Increased frequency of force application
                bounceIntervalRef.current = setInterval(applyBounceForce, 50);

                // Stop bouncing after scrolling ends
                clearTimeout(window._scrollTimeout);
                window._scrollTimeout = setTimeout(() => {
                    if (bounceIntervalRef.current) {
                        clearInterval(bounceIntervalRef.current);
                    }
                    setIsBouncing(false);
                }, 300); // Increased duration of effect
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (bounceIntervalRef.current) {
                clearInterval(bounceIntervalRef.current);
            }
            if (window._scrollTimeout) {
                clearTimeout(window._scrollTimeout);
            }
        };
    }, [isBouncing]);

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
                style={{
                    width: dimensions.width / (dimensions.scale || 1),
                    height: dimensions.height / (dimensions.scale || 1)
                }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="absolute top-0 left-0 font-raleway font-normal w-full h-[60vh] md:h-[80vh]"
            />
        </div>
    );
};

export default Trust;