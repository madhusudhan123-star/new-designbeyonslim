import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productPage } from '../utility/data';
import { why } from '../utility/data';
import why1 from '../assets/why1.jpeg';
import why2 from '../assets/why2.png';
import why3 from '../assets/why3.png';
import why4 from '../assets/why4.png';
import home3 from '../assets/video3.mp4';
import home4 from '../assets/video4.mp4';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const canvasRef = useRef(null);
    const video1Ref = useRef(null);
    const video2Ref = useRef(null);

    useEffect(() => {
        // Animated background setup
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        // Initial resize
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
                this.color = `rgba(59, 130, 246, ${Math.random() * 0.5})`; // Blue with random opacity
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.size > 0.2) this.size -= 0.1;

                // Wrap around screen
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Create particles
        const createParticles = () => {
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();

                // Replace old particles
                if (particle.size <= 0.2) {
                    particles.splice(index, 1);
                    particles.push(new Particle());
                }
            });

            // Connect nearby particles
            for (let i = 0; i < particles.length; i++) {
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 - distance/1000})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        };

        createParticles();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    const handleVideoHover = (videoRef, isEntering) => {
        if (videoRef.current) {
            videoRef.current.muted = !isEntering;
            if (isEntering) {
                videoRef.current.play().catch(error => {
                    console.log("Video play failed:", error);
                });
            }
        }
    };

    return (
        <main ref={sectionRef} className="min-h-screen bg-white font-montserrat pt-28 relative">
            {/* Background Canvas */}
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
            />

            {/* Hero Section with modified background */}
            <section className="about-header min-h-[70vh]  bg-opacity-90 text-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 "></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        About Beyond Slim
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90">
                        Transforming lives through natural wellness solutions, one success story at a time.
                    </p>
                </div>
            </section>

            {/* Mission Section with semi-transparent background */}
            <section className="mission-section py-24 bg-gray-50/90">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 text-blue-600">Our Mission</h2>
                    <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-700">
                        At Beyond Slim, we're committed to providing natural, effective solutions for your wellness journey. 
                        Our products combine ancient Ayurvedic wisdom with modern scientific research to deliver 
                        exceptional results while maintaining the ht6ighest standards of quality and safety.
                    </p>
                </div>
            </section>

            {/* New Video Section */}
            <section className="py-24 bg-gray-50/90">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-blue-600">
                        Our Journey
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* First Video */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-700/20 pointer-events-none"></div>
                            <video
                                ref={video1Ref}
                                className="w-full h-full object-cover"
                                loop
                                playsInline
                                muted
                                autoPlay
                                onMouseEnter={() => handleVideoHover(video1Ref, true)}
                                onMouseLeave={() => handleVideoHover(video1Ref, false)}
                            >
                                <source src={home3} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                                <h3 className="text-white text-xl font-semibold">Product Overview</h3>
                                <p className="text-white/80 text-sm">Hover to unmute</p>
                            </div>
                            {/* Mute/Unmute Indicator */}
                            <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full">
                                <svg 
                                    className="w-6 h-6 text-white"
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d={video1Ref?.current?.muted ? 
                                            "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" :
                                            "M15.536 8.464a5 5 0 010 7.072M12 6.253v13494C12 18.891 10.923 18.337 10.293 17.707L5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v1.253zM17.657 16.657l1.414-1.414a4 4 0 000-5.656l-1.414-1.414"}
                                    />
                                </svg>
                            </div>
                        </div>

                        {/* Second Video */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-blue-700/20 pointer-events-none"></div>
                            <video
                                ref={video2Ref}
                                className="w-full h-full object-cover"
                                loop
                                playsInline
                                muted
                                autoPlay
                                onMouseEnter={() => handleVideoHover(video2Ref, true)}
                                onMouseLeave={() => handleVideoHover(video2Ref, false)}
                            >
                                <source src={home4} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
                                <h3 className="text-white text-xl font-semibold">Customer Success Stories</h3>
                                <p className="text-white/80 text-sm">Hover to unmute</p>
                            </div>
                            {/* Mute/Unmute Indicator */}
                            <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full">
                                <svg 
                                    className="w-6 h-6 text-white"
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d={video2Ref?.current?.muted ? 
                                            "M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" :
                                            "M15.536 8.464a5 5 0 010 7.072M12 6.253v13494C12 18.891 10.923 18.337 10.293 17.707L5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v1.253zM17.657 16.657l1.414-1.414a4 4 0 000-5.656l-1.414-1.414"}
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid Section with semi-transparent background */}
            <section className="py-24 bg-white/90">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-blue-600">
                        {why.maintitle}
                    </h2>
                    <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-24 h-24 mb-6 p-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <img src={why1} alt="Natural Ingredients" className="w-16 h-16 object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">{why.title4}</h3>
                            <p className="text-gray-600 leading-relaxed">{why.para4}</p>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-24 h-24 mb-6 p-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <img src={why2} alt="Bespoke Solutions" className="w-16 h-16 object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">{why.title3}</h3>
                            <p className="text-gray-600 leading-relaxed">{why.para3}</p>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-24 h-24 mb-6 p-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <img src={why3} alt="Health Outcomes" className="w-16 h-16 object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">{why.title1}</h3>
                            <p className="text-gray-600 leading-relaxed">{why.para1}</p>
                        </div>
                        {/* Card 4 */}
                        <div className="flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
                            <div className="w-24 h-24 mb-6 p-4 bg-blue-100 rounded-full flex items-center justify-center">
                                <img src={why4} alt="Real Support" className="w-16 h-16 object-contain" />
                            </div>
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">{why.title2}</h3>
                            <p className="text-gray-600 leading-relaxed">{why.para2}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-24 bg-gradient-to-r from-blue-600/95 to-blue-700/95 text-white relative">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Start Your Journey?</h2>
                    <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
                        Join thousands of satisfied customers who have transformed their lives with Beyond Slim.
                    </p>
                    <a 
                        href="/product" 
                        className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-bold 
                        hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Shop Now
                    </a>
                </div>
            </section>
                        {/* Product Details Section */}
                        <section className="relative  min-h-screen z-10 px-4 py-20">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-6xl text-black font-bold mb-12 text-center">
                        {productPage.features.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {productPage.features.items.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-blue/10 backdrop-blur-sm rounded-2xl p-8
                                         hover:bg-white/20 transition-all duration-300
                                         transform hover:scale-105"
                            >
                                <h3 className="text-2xl md:text-3xl text-black font-bold mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-black/90">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
