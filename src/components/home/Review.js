import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { review } from '../../utility/data';
import { FaStar } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const Review = () => {
    const reviewContainerRef = useRef(null);
    const reviewsRef = useRef(null);

    const handleNextClick = () => {
        const track = reviewsRef.current;
        const scrollAmount = window.innerWidth * 0.8; // Scroll by 80% of viewport width
        gsap.to(track, {
            x: `-=${scrollAmount}`,
            duration: 0.5,
            ease: "power2.out",
            modifiers: {
                x: gsap.utils.unitize(x => {
                    const limit = -(track.scrollWidth - window.innerWidth);
                    return Math.max(x, limit);
                })
            }
        });
    };

    const handlePrevClick = () => {
        const track = reviewsRef.current;
        const scrollAmount = window.innerWidth * 0.8;
        gsap.to(track, {
            x: `+=${scrollAmount}`,
            duration: 0.5,
            ease: "power2.out",
            modifiers: {
                x: gsap.utils.unitize(x => Math.min(x, 0))
            }
        });
    };

    useEffect(() => {
        const reviewsTrack = reviewsRef.current;

        gsap.to(reviewsTrack, {
            x: () => -(reviewsTrack.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: reviewContainerRef.current,
                start: "center center",
                end: () => `+=${reviewsTrack.scrollWidth - window.innerWidth}`,
                scrub: 1,
                invalidateOnRefresh: true,
                markers: false,
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div ref={reviewContainerRef} className="relative overflow-hidden bg-white py-20 border-white rounded-b-[20rem]">
            <div className="sticky top-[50vh]">
                <div className="overflow-hidden">
                    <div
                        ref={reviewsRef}
                        className="flex gap-8 pl-[10vw]"
                    >
                        {review.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-2xl shadow-lg min-w-[350px] md:min-w-[400px]"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg">{item.name}</h3>
                                        <div className="flex items-center gap-1">
                                            <FaStar className="text-yellow-400" />
                                            <span className="text-gray-600">{item.star}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{item.quote}"</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={handlePrevClick}
                        className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                        <FiChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;
