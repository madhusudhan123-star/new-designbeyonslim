import React, { useEffect, useRef } from 'react';
import Lenis from "@studio-freight/lenis";
import Trust from '../components/home/Trust';
import Navbar from '../components/Navbar';
import { header } from '../utility/data';
import { TypeAnimation } from 'react-type-animation';
import Second from '../components/home/Second';
import Review from '../components/home/Review';
import Work from '../components/home/Work';
import FAQ from '../components/home/FAQ';
import Footer from '../components/Footer';

const Home = () => {
    const lenisRef = useRef(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.5, // Increased from 1.2 to 2.5
            smooth: true,
            lerp: 0.05, // Reduced from 0.1 to 0.05 for smoother interpolation
            smoothWheel: true, // Added for smoother wheel events
            wheelMultiplier: 0.8, // Added to reduce wheel scroll speed
            touchMultiplier: 1.5, // Added for touch device control
        });

        lenisRef.current = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <main className='relative overflow-hidden font-montserrat'>
            {/* Hero Section */}
            <section className='min-h-screen relative z-20 bg-transparent'>
                <div className='h-[20vh]'></div>
                <div className='h-[65vh] flex flex-col items-center justify-center'>
                    <h1 className='text-4xl md:text-7xl font-bold text-center'>
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
                    <p className='text-xl md:text-3xl font-medium text-center w-full md:w-1/2 lg:w-1/3 mt-10 md:mt-20'>
                        {header.sub}
                    </p>
                    <button className='text-5xl md:text-5xl font-bold text-center p-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white mt-10 md:mt-20 px-16 transition-colors'>
                        {header.button}
                    </button>
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
            {/* FAQ Section */}
            <div className='relative'>
                <FAQ />
            </div>
        </main>
    );
};

export default Home;