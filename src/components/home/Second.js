import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { second } from '../../utility/data';

gsap.registerPlugin(ScrollTrigger);

// Add this custom hook at the top of the file, before the Second component
const useDynamicFontSize = () => {
    const [fontSize, setFontSize] = useState('6vw');

    useEffect(() => {
        const calculateFontSize = () => {
            const width = window.innerWidth;
            if (width < 640) { // mobile
                setFontSize('8vw');
            } else if (width < 768) { // small tablets
                setFontSize('7vw');
            } else if (width < 1024) { // tablets/small laptops
                setFontSize('6vw');
            } else if (width < 1280) { // laptops/desktops
                setFontSize('5vw');
            } else { // large screens
                setFontSize('4vw');
            }
        };

        calculateFontSize();
        window.addEventListener('resize', calculateFontSize);
        return () => window.removeEventListener('resize', calculateFontSize);
    }, []);

    return fontSize;
};

const Second = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const circleRef = useRef(null);
    const horizontalRef = useRef(null);
    const fontSize = useDynamicFontSize();

    useEffect(() => {
        const section = sectionRef.current;
        const circle = circleRef.current;
        const video = videoRef.current;
        const horizontal = horizontalRef.current;

        // Reset any existing ScrollTrigger instances
        ScrollTrigger.getAll().forEach(t => t.kill());

        // Set initial states
        gsap.set(circle, {
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            backgroundColor: '#3B82F6',
            position: 'absolute',
            top: '50%',
            left: '50%',
            xPercent: -50,
            yPercent: -50,
            scale: 0,
            opacity: 0
        });

        // Make section visible immediately
        gsap.set(section, { opacity: 1 });

        // Modified timeline for scroll-based animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top", // Changed to top top
                end: "+=100%",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
                anticipatePin: 1,
                fastScrollEnd: true,
                preventOverlaps: true,
                refreshPriority: 1,
            }
        });

        // Simplified animation sequence
        tl.to(circle, {
            opacity: 1,
            scale: 2,
            duration: 0.2,
            ease: "power2.out",
        }).to(circle, {
            scale: 15,
            duration: 0.8,
            ease: "power2.inOut",
        });

        // Add floating animation to video
        gsap.to(videoRef.current, {
            y: 15,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });

        // Add hover effects to slides
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => {
            slide.addEventListener('mouseenter', () => {
                gsap.to(slide, {
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });
            slide.addEventListener('mouseleave', () => {
                gsap.to(slide, {
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.in"
                });
            });
        });

        // Smoother horizontal scroll
        gsap.to(horizontal, {
            x: () => -(horizontal.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top top",
                end: () => `+=${horizontal.scrollWidth - window.innerWidth}`,
                scrub: 1.5,
                pin: true,
                anticipatePin: 1,
                fastScrollEnd: true,
                invalidateOnRefresh: true,
                onUpdate: self => {
                    if (self.progress === 1 || self.progress === 0) {
                        gsap.to(horizontal, {
                            duration: 0.5,
                            ease: "power2.out"
                        });
                    }
                }
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            gsap.killTweensOf([circle, horizontal]);
        };
    }, []);

    return (
        <div>
            <section
                ref={sectionRef}
                className="relative w-full z-40 relative bg-transparent opacity-0" // Increased height
                style={{ zIndex: 10 }}
            >
                <div className="w-full h-full flex justify-center items-center relative">
                    <div className="relative z-20">
                        <div
                            ref={videoRef}
                            className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full overflow-hidden shadow-2xl relative" // Increased sizes
                        >
                            <iframe
                                src="https://www.youtube.com/embed/AxYbPlLk79M?autoplay=0&mute=0"
                                title="Video Player"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250%] h-[250%]" // Increased width and height percentage
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                    <div ref={circleRef} className="pointer-events-none" />
                </div>
            </section>
            <section className="relative bg-[#3B82F6] z-10 ">
                <div ref={horizontalRef} className="flex items-center h-screen relative">
                    {/* Add your horizontal scroll content here */}
                    <div className="flex gap-4 md:gap-8 p-4 md:p-8" style={{ width: "400vw" }}>
                        <div className="slide w-screen h-[70vh] md:h-[80vh] bg-[#3B82F6] rounded-2xl md:rounded-3xl 
                            flex items-center justify-center p-4 md:p-8 transition-all duration-300
                            ">
                            <h2 className="text-center text-white font-bold" style={{ fontSize }}>{second.slide1}</h2>
                        </div>
                        <div className="slide w-screen h-[70vh] md:h-[80vh] bg-[#3B82F6] rounded-2xl md:rounded-3xl 
                            flex items-center justify-center p-4 md:p-8 transition-all duration-300
                            ">
                            <h2 className="text-center text-white font-bold" style={{ fontSize }}>{second.slide2}</h2>
                        </div>
                        <div className="slide w-screen h-[70vh] md:h-[80vh] bg-[#3B82F6] rounded-2xl md:rounded-3xl 
                            flex items-center justify-center p-4 md:p-8 transition-all duration-300
                            ">
                            <h2 className="text-center text-white font-bold" style={{ fontSize }}>{second.slide3}</h2>
                        </div>
                        <div className="slide w-screen h-[70vh] md:h-[80vh] bg-[#3B82F6] rounded-2xl md:rounded-3xl 
                            flex items-center justify-center p-4 md:p-8 transition-all duration-300
                            ">
                            <h2 className="text-center text-white font-bold" style={{ fontSize }}>{second.slide4}</h2>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Second;