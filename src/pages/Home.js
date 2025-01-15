import React, { useEffect, useRef } from 'react';
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Trust from '../components/home/Trust';
import Navbar from '../components/Navbar';
import { header, why } from '../utility/data';
import { TypeAnimation } from 'react-type-animation';
import Second from '../components/home/Second';
import Review from '../components/home/Review';
import Work from '../components/home/Work';
import FAQ from '../components/home/FAQ';
import why1 from '../assets/why1.jpeg';
import why2 from '../assets/why2.png';
import why3 from '../assets/why3.png';
import why4 from '../assets/why4.png';
import Ingredients from '../components/home/Ingredients';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Prevent default scrolling behavior
        document.documentElement.style.scrollBehavior = 'auto';
        
        // Initialize Lenis with optimized settings
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false, // Disable smooth scrolling for touch devices
            touchMultiplier: 2,
            infinite: false,
            wheelMultiplier: 1,
            lerp: 0.1,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            normalizeWheel: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) // Smoother easing function
        });

        lenisRef.current = lenis;

        // Sync Lenis with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // Stop scrolling animation when window is resized
        const handleResize = () => {
            lenis.stop();
            setTimeout(() => lenis.start(), 50);
        };

        window.addEventListener('resize', handleResize);

        // Handle navigation and scroll restoration
        const handlePageShow = (e) => {
            if (e.persisted) {
                lenis.scrollTo(0, { immediate: true });
            }
        };

        window.addEventListener('pageshow', handlePageShow);

        // Cleanup
        return () => {
            lenis.destroy();
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('pageshow', handlePageShow);
            document.documentElement.style.scrollBehavior = '';
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    return (
        <main className='relative overflow-hidden font-montserrat'>
            {/* Hero Section */}
            <section className='min-h-screen relative z-20 bg-transparent px-4 md:px-0'>
                <div className='h-[15vh] md:h-[20vh]'></div>
                <div className='min-h-[75vh] flex flex-col items-center justify-center'>
                    <h1 className='text-[8vw] md:text-[6vw] font-bold text-center px-4 md:px-0'>
                        {header.title} <br />
                        <TypeAnimation
                            sequence={header.animationSequence}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{
                                display: 'inline-block',
                                color: '#0a97ff',
                                fontSize: 'clamp(24px, 6vw, 64px)'
                            }}
                        />
                    </h1>
                    <p className='text-lg md:text-3xl font-medium text-center w-full md:w-1/2 mt-6 md:mt-20 px-4 md:px-0'>
                        {header.sub}
                    </p>
                    <a href='/product' className='w-full md:w-auto px-4 md:px-0 mt-8 md:mt-20'>
                        <button
                            className='w-full md:w-auto text-2xl md:text-5xl 
                                font-bold text-center 
                                py-4 md:p-8 rounded-full 
                                bg-blue-600 hover:bg-blue-700 
                                text-white 
                                px-8 md:px-16 
                                transition-all
                                duration-300
                                transform
                                hover:scale-105
                                relative
                                animate-pulse-subtle
                                hover:animate-none
                                before:content-[""]
                                before:absolute
                                before:inset-0
                                before:rounded-full
                                before:bg-blue-500
                                before:animate-ping-slow
                                before:opacity-50
                                overflow-visible
                                shadow-lg
                                hover:shadow-2xl
                                hover:shadow-blue-500/50'
                        >
                            {header.button}
                        </button>
                    </a>
                </div>
            </section>

            {/* Second Section */}
            <Second />

            {/* Trust Section */}
            <section className='relative z-20 bg-white'>
                <Trust />
            </section>

            {/* Review Section */}
            <section className='relative z-20  bg-black'>
                <Review />
            </section>

            {/* Additional content */}
            <div className='relative'>
                <Work />
            </div>
            {/* Wy we have to use*/}
            <div>
                <div className='my-10 px-4 md:px-0'>
                    <h1 className='text-4xl md:text-6xl text-center font-bold'>{why.maintitle}</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mt-12 md:mt-28'>
                        {[
                            { img: why1, title: why.title4, para: why.para4 },
                            { img: why2, title: why.title3, para: why.para3 },
                            { img: why3, title: why.title1, para: why.para1 },
                            { img: why4, title: why.title2, para: why.para2 }
                        ].map((item, index) => (
                            <div key={index} className='flex flex-col items-center justify-center gap-4 md:gap-5 p-4 md:p-0'>
                                <img src={item.img} alt={item.title} className='w-16 md:w-20' />
                                <h2 className='font-bold text-lg md:text-xl text-[#00BBFF] text-center'>{item.title}</h2>
                                <p className='w-full md:w-2/3 text-center text-sm md:text-base'>{item.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <Ingredients />
            </div>
            {/* FAQ Section */}
            <div className='relative'>
                <FAQ />
            </div>

        </main>
    );
};

export default Home;