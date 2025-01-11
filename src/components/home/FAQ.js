import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faqData } from '../../utility/data';

gsap.registerPlugin(ScrollTrigger);

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    const faqRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const faqSection = faqRef.current;
        const container = containerRef.current;

        gsap.set(faqSection, {
            position: 'relative',
            zIndex: 50,
            backgroundColor: 'white',
            borderRadius: '2rem'
        });

        // Pin the FAQ section
        gsap.to(faqSection, {
            scrollTrigger: {
                trigger: faqSection,
                start: 'top center',
                end: '+=100%',
                pin: true,
                pinSpacing: true,
                scrub: 1,
            }
        });

        // Move FAQ down instead of up
        gsap.to(container, {
            scrollTrigger: {
                trigger: faqSection,
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: 1,
            },
            yPercent: 20, // Changed from -20 to 20 to move down
            ease: 'none'
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    const toggleAnswer = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    return (
        <div ref={faqRef} className="relative bg-white py-20 mt-20">
            <div ref={containerRef} className="container mx-auto px-4">
                <h2 className="text-5xl md:text-7xl font-bold text-black text-center mb-16">
                    Frequently Asked Questions
                </h2>

                <div className="max-w-3xl mx-auto z-50  space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-blue-50 rounded-xl overflow-hidden cursor-pointer hover:bg-blue-100 transition-colors"
                            onClick={() => toggleAnswer(index)}
                        >
                            <div className="p-6 flex items-center justify-between">
                                <h3 className="text-xl text-gray-800 font-semibold pr-8">
                                    {faq.question}
                                </h3>
                                <div className="plus-icon text-blue-500 text-3xl transform transition-transform">
                                    +
                                </div>
                            </div>
                            <div
                                className="answer overflow-hidden"
                                style={{
                                    height: index === activeIndex ? 'auto' : 0
                                }}
                            >
                                <p className="px-6 pb-6 text-gray-600">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;