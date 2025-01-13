import React, { useEffect, useRef, useState } from 'react';
import { Engine, World, Bodies, Body } from 'matter-js';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from 'react-router-dom';
import product from '../assets/about_product.png';
import { productPage } from '../utility/data';
gsap.registerPlugin(ScrollTrigger);

const Product = () => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const priceRef = useRef(null);
    const canvasRef = useRef(null);
    const engineRef = useRef(null);
    const boxesRef = useRef([]);
    const requestRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    useEffect(() => {
        if (!dimensions.width || !dimensions.height) return;

        const section = sectionRef.current;
        gsap.set(section, { opacity: 0 });

        // Initialize matter.js
        engineRef.current = Engine.create();
        const engine = engineRef.current;

        // Create walls
        const wallThickness = 60;
        const walls = [
            Bodies.rectangle(dimensions.width / 2, dimensions.height + 30, dimensions.width, wallThickness, { isStatic: true }),
            Bodies.rectangle(-30, dimensions.height / 2, wallThickness, dimensions.height, { isStatic: true }),
            Bodies.rectangle(dimensions.width + 30, dimensions.height / 2, wallThickness, dimensions.height, { isStatic: true })
        ];

        World.add(engine.world, walls);

        // Create falling boxes
        const createBox = () => {
            const colors = productPage.animation.boxColors;
            const size = Math.random() * 40 + 20;
            const x = Math.random() * dimensions.width;

            return {
                body: Bodies.rectangle(x, -50, size, size, {
                    friction: 0.3,
                    restitution: 0.6,
                    density: 0.001
                }),
                color: colors[Math.floor(Math.random() * colors.length)],
                angle: Math.random() * Math.PI
            };
        };

        // Animation loop
        const animate = () => {
            Engine.update(engine);
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, dimensions.width, dimensions.height);

            // Add new boxes periodically
            if (boxesRef.current.length < 50 && Math.random() > 0.95) {
                const newBox = createBox();
                boxesRef.current.push(newBox);
                World.add(engine.world, newBox.body);
            }

            // Draw boxes with enhanced styling
            boxesRef.current.forEach((box, index) => {
                const { body, color } = box;
                ctx.save();
                ctx.translate(body.position.x, body.position.y);
                ctx.rotate(body.angle);

                // Create gradient
                const gradient = ctx.createLinearGradient(-body.bounds.max.x / 2, -body.bounds.max.y / 2,
                    body.bounds.max.x / 2, body.bounds.max.y / 2);
                gradient.addColorStop(0, color);
                gradient.addColorStop(1, shiftColor(color, 30));

                // Draw box with shadow and gradient
                ctx.shadowColor = color;
                ctx.shadowBlur = 15;
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.roundRect(-body.bounds.max.x / 2, -body.bounds.max.y / 2,
                    body.bounds.max.x, body.bounds.max.y, 5);
                ctx.fill();
                ctx.restore();

                // Remove boxes that have fallen below the screen
                if (body.position.y > dimensions.height + 100) {
                    World.remove(engine.world, body);
                    boxesRef.current.splice(index, 1);
                }
            });

            requestRef.current = requestAnimationFrame(animate);
        };

        // Start animations
        requestRef.current = requestAnimationFrame(animate);

        // Fade in content
        gsap.to(section, {
            opacity: 1,
            duration: 0.5
        });

        // Price animation
        gsap.from(priceRef.current, {
            y: 50,
            opacity: 0,
            duration: 1,
            delay: 0.5,
            ease: "power2.out"
        });

        // Floating animation for product image
        gsap.to(imageRef.current, {
            y: 15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        return () => {
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
            World.clear(engine.world);
            Engine.clear(engine);
        };
    }, [dimensions]);

    // Helper function for color manipulation
    const shiftColor = (color, amt) => {
        const hex = color.replace('#', '');
        const r = Math.min(255, parseInt(hex.slice(0, 2), 16) + amt);
        const g = Math.min(255, parseInt(hex.slice(2, 4), 16) + amt);
        const b = Math.min(255, parseInt(hex.slice(4, 6), 16) + amt);
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

    const handleAddToCart = () => {
        const productDetails = {
            productName: productPage.title,
            quantity: quantity,
            totalAmount: productPage.price * quantity,
        };

        navigate('/checkout', { state: productDetails });
    };

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <canvas
                ref={canvasRef}
                width={dimensions.width}
                height={dimensions.height}
                className="fixed top-0 left-0 w-full h-full pointer-events-none"
            />
            <section
                ref={sectionRef}
                className="relative w-full min-h-screen bg-transparent opacity-0"
            >
                <div className="w-full h-full flex flex-col items-center justify-center relative py-20">
                    {/* Product Display */}
                    <div className="relative z-20 mb-8">
                        <div
                            ref={imageRef}
                            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] 
                                     rounded-full overflow-hidden shadow-2xl relative"
                        >
                            <img
                                src={product}
                                alt="Product"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                                         w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="relative z-20 text-center px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gray-800">
                            {productPage.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
                            {productPage.description}
                        </p>
                        <div className="flex flex-col items-center gap-4 mb-8">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                                    className="bg-blue-200 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-300"
                                >
                                    -
                                </button>
                                <span className="text-2xl font-bold text-gray-800">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(prev => prev + 1)}
                                    className="bg-blue-200 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-300"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="bg-blue-600 text-white text-xl md:text-2xl px-12 py-4 
                                        rounded-full hover:bg-blue-700 transition-all duration-300
                                        transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                {productPage.buttons.addToCart}
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Section */}
            <section className="relative bg-blue-600 min-h-screen z-10 px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-6xl text-white font-bold mb-12 text-center">
                        {productPage.features.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {productPage.features.items.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8
                                         hover:bg-white/20 transition-all duration-300
                                         transform hover:scale-105"
                            >
                                <h3 className="text-2xl md:text-3xl text-white font-bold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-white/90">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;