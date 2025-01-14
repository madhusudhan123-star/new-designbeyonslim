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


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const lenisRef = useRef(null);

    useEffect(() => {
        // Initialize Lenis with optimized settings
        const lenis = new Lenis({
            duration: 1.5,
            smoothWheel: true,
            smoothTouch: true,
            touchMultiplier: 0,
            infinite: false,
            wheelMultiplier: 1.3,
            lerp: 0.08,
            syncTouch: true,
            syncTouchLerp: 0.08
        });

        lenisRef.current = lenis;

        // Sync Lenis with GSAP
        lenis.on('scroll', () => {
            ScrollTrigger.update();
        });

        // Create a more efficient RAF loop
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className='relative overflow-hidden font-montserrat'>
            {/* Hero Section */}
            <section className='min-h-screen relative z-20 bg-transparent'>
                <div className='h-[20vh]'></div>
                <div className='h-[75vh] flex flex-col items-center justify-center'>
                    <h1 className='text-[6vw] font-bold text-center'>
                        {header.title} <br />
                        <TypeAnimation
                            sequence={header.animationSequence}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{
                                display: 'inline-block',
                                color: '#0a97ff'
                            }}
                        />
                    </h1>
                    <p className='text-xl md:text-3xl font-medium text-center w-full  md:w-1/2 mt-10 md:mt-20'>
                        {header.sub}
                    </p>
                    <a href='/product'>
                        <button
                            className='
                        text-5xl md:text-5xl 
                            font-bold text-center 
                            p-8 rounded-full 
                            bg-blue-600 hover:bg-blue-700 
                            text-white 
                            mt-10 md:mt-20 
                            px-16 
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
                            hover:shadow-blue-500/50
                        '
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
                <div className='my-10'>
                    <h1 className='text-6xl text-center font-bold'>{why.maintitle}</h1>
                    <div className=' flex items-center justify-center mt-28 gap-10'>
                        <div className='flex flex-col items-center justify-center gap-5'>
                            <img src={why1} className='w-20' />
                            <h2 className='font-bold text-lg text-[#00BBFF]'>{why.title4}</h2>
                            <p className='w-2/3 text-center'>{why.para4}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-5'>
                            <img src={why2} className='w-20' />
                            <h2 className='font-bold text-lg text-[#00BBFF] '>{why.title3}</h2>
                            <p className='w-2/3 text-center'>{why.para3}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-5'>
                            <img src={why3} className='w-20' />
                            <h2 className='font-bold text-lg text-[#00BBFF]'>{why.title1}</h2>
                            <p className='w-2/3 text-center'>{why.para1}</p>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-5'>
                            <img src={why4} className='w-20' />
                            <h2 className='font-bold text-lg text-[#00BBFF]'>{why.title2}</h2>
                            <p className='w-2/3 text-center'>{why.para2}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* FAQ Section */}
            <div className='relative'>
                <FAQ />
            </div>

        </main>
    );
};

export default Home;