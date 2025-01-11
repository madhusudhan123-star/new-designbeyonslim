import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { second } from '../../utility/data';

gsap.registerPlugin(ScrollTrigger);

const Second = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);
    const circleRef = useRef(null);
    const horizontalRef = useRef(null);

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

        // Main timeline for entrance animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top center",
                end: "+=50%",
                scrub: 1,
                pin: true,
                onEnter: () => {
                    gsap.to(section, {
                        opacity: 1,
                        duration: 0.3
                    });
                }
            }
        });

        // Enhanced animation sequence with better transitions
        tl.to(circle, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)" // Add bounce effect
        })
        .to(circle, {
            scale: 15,
            duration: 2,
            ease: "power2.inOut"
        }, "+=0.2");

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

        // Horizontal scroll animation
        gsap.to(horizontal, {
            x: () => -(horizontal.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top top",
                end: () => `+=${horizontal.scrollWidth - window.innerWidth}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div>
            <section
                ref={sectionRef}
                className="relative w-full h-[50vh] md:h-[60vh] bg-transparent opacity-0"
                style={{ zIndex: 10 }}
            >
                <div className="w-full h-full flex justify-center items-center relative">
                    <div className="relative z-20">
                        <div ref={videoRef} className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl relative" >
                            <iframe
                                src="https://www.youtube.com/embed/ot0n01IxZxg?autoplay=1&mute=1"
                                title="Video Player"
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                    </div>
                    <div
                        ref={circleRef}
                        className="pointer-events-none z-10"
                    />
                </div>

            </section>
            <section className="relative bg-[#3B82F6] top-[-100px] z-10">
                <div ref={horizontalRef} className="flex items-center h-screen relative">
                    {/* Add your horizontal scroll content here */}
                    <div className="flex gap-4 md:gap-8 p-4 md:p-8" style={{ width: "400vw" }}>
                        <div className="slide w-screen h-[70vh] md:h-[80vh] bg-[#3B82F6] rounded-2xl md:rounded-3xl 
                            flex items-center justify-center p-4 md:p-8 transition-all duration-300
                            hover:shadow-2xl hover:shadow-blue-600/50">
                            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center text-white font-bold">{second.slide1}</h2>
                        </div>
                        <div className="slide w-screen h-[70vh] md:h-[80vh] bg-[#3B82F6] rounded-2xl md:rounded-3xl 
                            flex items-center justify-center p-4 md:p-8 transition-all duration-300
                            hover:shadow-2xl hover:shadow-blue-600/50">
                            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center text-white font-bold">{second.slide2}</h2>
                        </div>
                        <div className="slide w-screen h-[70vh] md:h-[80vh] bg-[#3B82F6] rounded-2xl md:rounded-3xl 
                            flex items-center justify-center p-4 md:p-8 transition-all duration-300
                            hover:shadow-2xl hover:shadow-blue-600/50">
                            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center text-white font-bold">{second.slide3}</h2>
                        </div>
                        <div className="slide w-screen h-[70vh] md:h-[80vh] bg-[#3B82F6] rounded-2xl md:rounded-3xl 
                            flex items-center justify-center p-4 md:p-8 transition-all duration-300
                            hover:shadow-2xl hover:shadow-blue-600/50">
                            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-center text-white font-bold">{second.slide4}</h2>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Second;