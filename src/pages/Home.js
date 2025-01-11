import React, { useState, useRef, useEffect, Suspense } from 'react';
import data from '../utils/data';
import { useLanguage } from '../context/LanguageContext';
import { FaChevronDown, FaChevronUp, FaFacebookF, FaTwitter, FaInstagram, FaQuoteRight } from 'react-icons/fa';
import faq from '../assets/faq.jpg';
import heroVideo from '../assets/video2.mp4';
import heroVideo2 from '../assets/video1.mp4';
import one from '../assets/t_one.svg';
import two from '../assets/t_two.svg';
import three from '../assets/t_three.svg';
import four from '../assets/t_four.png';
import five from '../assets/hala.png';
import bottle from '../assets/header_first_img.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';


const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-[300px] md:h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
);



const Home = () => {
    const { language } = useLanguage();
    const { direction } = data[language];
    const home = data[language].home;
    const footer = data[language].footer;
    const buttonRef = useRef(null);
    const [faqOpen, setFaqOpen] = useState(null);
    const slides = [home.about.img1, home.about.img3];
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };
    // const getScrollDirection = () => {
    //     return language === 'AR' ? 'animate-scrollRight' : 'animate-scrollLeft';
    // };
    const getScrollDirection = () => {
        // Only apply animation on desktop
        if (window.innerWidth < 768) return '';
        return language === 'AR' ? 'animate-scrollRight' : 'animate-scrollLeft';
    };

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, []);

    return (
        <div className={`home font-lato bg-gray-100 text-gray-900 ${direction === 'rtl' ? 'rtl' : ''}`} dir={direction}>
            {/* Second Hero Section with Local Video */}
            {/* Header Section */}
            <section className='relative h-[130vh]'>
                <div className='absolute inset-0'>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={heroVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='absolute inset-0 bg-black bg-opacity-20'></div>
                <div className='relative z-10 px-4 md:px-28 py-20 min-h-screen flex items-center'>
                    <div className="flex flex-col md:flex-row items-center justify-between animate-fade-in w-full">
                        <div className="w-full text-center md:text-start" data-aos="fade-up">
                            <h1 className="text-3xl font-dm-serif md:text-5xl lg:text-7xl font-bold text-white font-poppins mb-6"
                                dangerouslySetInnerHTML={{ __html: home.hero.title }}>
                            </h1>
                            <p className="text-lg md:text-2xl lg:text-4xl text-white mb-8 leading-relaxed tracking-wide">
                                {home.hero.description}
                            </p>
                            <a href="/products">
                                <button
                                    ref={buttonRef}
                                    className="bg-blue-500 text-base md:text-xl lg:text-2xl text-white py-2 md:py-3 lg:py-4 
                                    px-4 md:px-6 lg:px-8 rounded-full font-bold flex items-center justify-center md:justify-start 
                                    hover:bg-blue-600 animate-pulse-glow mx-auto md:mx-0"
                                >
                                    {home.hero.buttonText}
                                    <span className="ml-2">→</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="flex flex-wrap md:flex-nowrap lg:flex-nowrap flex-col md:flex-row justify-between relative bg-white z-10 md:top-[-14rem] gap-10 mt-8 px-4 py-10 md:px-28">
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-start items-baseline gap-4 animate-fade-in" data-aos="fade-up">
                    <h2 className="text-[4vw] leading font-bold text-gray-800 mb-4 font-dm-serif"
                        dangerouslySetInnerHTML={{ __html: home.about.additionalContent.title }}>
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed tracking-wide"
                        dangerouslySetInnerHTML={{ __html: home.about.additionalContent.description }}>
                    </p>
                    <a href="/products">
                        <button
                            ref={buttonRef}
                            className="bg-blue-500 text-base md:text-xl lg:text-2xl text-white py-2 md:py-3 lg:py-4 
                                    px-4 md:px-6 lg:px-8 rounded-full font-bold flex items-center justify-center md:justify-start 
                                    hover:bg-blue-600 animate-pulse-glow mx-auto md:mx-0"
                        >
                            {home.hero.buttonText}
                            <span className="ml-2">→</span>
                        </button>
                    </a>
                </div>
                <div className="w-full h-full md:w-1/2 relative mt-8 md:mt-0 group" data-aos="fade-left">
                    <div className="relative h-[400px] overflow-hidden rounded-3xl">
                        {slides.map((slide, index) => (
                            <img
                                key={index}
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className={`absolute w-full h-full object-cover transition-transform duration-500 ease-in-out ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <BsChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                        <BsChevronRight size={24} />
                    </button>
                </div>
            </section>

            {/* About Section */}
            <section className="flex relative md:top-[-8rem] flex-wrap md:flex-nowrap lg:flex-nowrap flex-col md:flex-row justify-between gap-10 mt-8 px-4 py-10 md:px-28">
                <div className="w-full h-full md:w-1/2 relative mt-8 md:mt-0" data-aos="fade-left">
                    <img src={home.about.img4} className='absolute w-20 top-0' />
                    <img
                        src={home.about.img3}
                        alt="Product"
                        className="w-full h-full rounded-3xl shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-start items-baseline gap-4 animate-fade-in" data-aos="fade-up">
                    <h2 className="text-[4vw]  font-bold text-gray-800 mb-4 font-dm-serif"
                        dangerouslySetInnerHTML={{ __html: home.about.additionalContent.sectitle }}>
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed tracking-wide"
                        dangerouslySetInnerHTML={{ __html: home.about.additionalContent.description }}>
                    </p>
                    <a href="/products">
                        <button
                            ref={buttonRef}
                            className="bg-blue-500 text-base md:text-xl lg:text-2xl text-white py-2 md:py-3 lg:py-4 
                                    px-4 md:px-6 lg:px-8 rounded-full font-bold flex items-center justify-center md:justify-start 
                                    hover:bg-blue-600 animate-pulse-glow mx-auto md:mx-0"
                        >
                            {home.hero.buttonText}
                            <span className="ml-2">→</span>
                        </button>
                    </a>
                </div>

            </section>


            {/* Product Review Section */}
            <section className="mt-10 px-4 md:px-28 animate-drag">
                <div className="bg-blue-400 p-4 md:p-6 rounded-lg shadow-md">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <div className="bg-white p-2 rounded-full shadow-lg">
                                <img
                                    src={footer.logo}
                                    alt="CBD Icon"
                                    className="w-16 md:w-20 lg:w-28 rounded"
                                />
                            </div>
                            <div className="text-center md:text-left">
                                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold font-dm-serif text-white mb-2">
                                    {home.specialist.title}
                                </h2>
                                <p className="text-sm md:text-base lg:text-lg text-white leading-relaxed tracking-wide">
                                    {home.specialist.description}
                                </p>
                            </div>
                        </div>
                        <div className="text-center md:text-right">
                            <div className="flex items-center justify-center md:justify-end space-x-1 text-yellow-300">
                                <span className="font-bold text-lg">{home.specialist.rating}</span>
                                <div className="text-sm flex items-center">
                                    <span>★★★★★</span>
                                </div>
                            </div>
                            <p className="text-sm text-white">Based on {home.specialist.reviews} reviews</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* video Section */}
            {/* <section className=" my-10">
                <div className="aspect-w-16 aspect-h-9">
                    <iframe
                        className="w-full h-[300px] md:h-screen rounded-3xl"
                        src={home.specialist.videoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </section> */}
            {/* <section className="my-10">
                <div 
                    className="aspect-w-16 aspect-h-9"
                    role="region"
                    aria-label="Product video presentation"
                >
                    <iframe
                        className="w-full h-[300px] md:h-screen rounded-3xl"
                        src={`${home.specialist.videoUrl}?enablejsapi=1`} // Add enablejsapi parameter
                        title="Product demonstration video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        tabIndex="0"
                        onLoad={(e) => {
                            // Ensure proper focus management
                            e.target.focus();
                        }}
                    ></iframe>
                </div>
            </section> */}
            <section className="my-10">
                <div
                    className="aspect-w-16 aspect-h-9"
                    role="region"
                    aria-label="Product video presentation"
                >
                    {isLoading && <LoadingSpinner />}
                    <iframe
                        className={`w-full h-screen md:h-screen rounded-3xl ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                        src={`${home.specialist.videoUrl}?enablejsapi=1`}
                        title="Product demonstration video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        tabIndex="0"
                        onLoad={(e) => {
                            setIsLoading(false);
                            e.target.focus();
                        }}
                    ></iframe>
                </div>
            </section>

            {/* Trusted Brands Section */}
            <section className='w-full md:w-full h-auto  bg-white py-8 md:py-0'>
                <div className="w-full px-4 sm:px-8 py-8 md:py-12 bg-white">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center items-center mx-auto">
                        <div data-aos="fade-right" data-aos-delay="0">
                            <img src={one} alt="Trusted Brand 1" className="max-w-full h-auto" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="200">
                            <img src={two} alt="Trusted Brand 2" className="max-w-full h-auto" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="400">
                            <img src={three} alt="Trusted Brand 3" className="max-w-full h-auto" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="600">
                            <img src={four} alt="Trusted Brand 4" className="w-[8.5rem] h-auto" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="800">
                            <img src={five} alt="Trusted Brand 5" className="max-w-full h-auto" />
                        </div>
                        <div data-aos="fade-right" data-aos-delay="800">
                            <img src={home.about.img4} alt="Trusted Brand 5" className="max-w-full h-auto" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why WE Choose Section */}
            <section id="benefits" className="py-20 bg-gray-100">
                <div className=" px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-6xl font-bold font-dm-serif text-gray-900 mb-4">
                            {home.benefitss.title}
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            {home.benefitss.sub}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {home.benefitss.benefits.map((benefit, index) => (
                            <div key={index} className="p-6 bg-white my-5 rounded-xl shadow-md hover:shadow-md transition">
                                <div className="mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it Works */}
            <section id="howitworks" className="py-20 bg-blue-50">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-7xl font-bold font-dm-serif text-red-400 mb-4">
                            {home.howItWorks.title}
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            {home.howItWorks.subtitle}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {home.howItWorks.steps.map((item, index) => (
                            <div key={index} className="relative">
                                <div className="aspect-w-16 aspect-h-9 mb-6">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="rounded-lg object-cover w-full h-64"
                                    />
                                </div>
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* about1 Section */}
            <section className="flex flex-wrap md:flex-nowrap lg:flex-nowrap bg-blue-50 flex-col md:flex-row justify-between gap-10">
                <div className="w-full h-full md:w-1/2 relative mt-8 md:mt-0">
                    <img
                        src={home.product_content.img1}
                        alt="Product"
                        className="w-full h-full"
                    />
                </div>
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-start items-center gap-4 animate-fade-in" data-aos="fade-up">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed tracking-wide">
                        {home.product_content.title2}
                    </p>
                    {/* <a href="/products">
                    <button
                                    ref={buttonRef}
                                    className="bg-blue-500 text-base md:text-xl lg:text-2xl text-white py-2 md:py-3 lg:py-4 
                                    px-4 md:px-6 lg:px-8 rounded-full font-bold flex items-center justify-center md:justify-start 
                                    hover:bg-blue-600 animate-pulse-glow mx-auto md:mx-0"
                                >
                                    {home.hero.buttonText}
                                    <span className="ml-2">→</span>
                                </button>
                    </a> */}
                </div>
            </section>
            <section className="flex flex-wrap md:flex-nowrap lg:flex-nowrap bg-blue-50 flex-col md:flex-row justify-between gap-10">
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-start items-center gap-4 animate-fade-in" data-aos="fade-up">
                    <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed tracking-wide">
                        {home.product_content.title1}
                    </p>
                    {/* <a href="/products">
                    <button
                                    ref={buttonRef}
                                    className="bg-blue-500 text-base md:text-xl lg:text-2xl text-white py-2 md:py-3 lg:py-4 
                                    px-4 md:px-6 lg:px-8 rounded-full font-bold flex items-center justify-center md:justify-start 
                                    hover:bg-blue-600 animate-pulse-glow mx-auto md:mx-0"
                                >
                                    {home.hero.buttonText}
                                    <span className="ml-2">→</span>
                                </button>
                    </a> */}
                </div>
                <div className="w-full h-full md:w-1/2 relative mt-8 md:mt-0">
                    <img
                        src={home.product_content.img2}
                        alt="Product"
                        className="w-full h-full"
                    />
                </div>
            </section>

            {/* FAQ Section */}
            <div>
                <h2 className="text-4xl md:text-4xl lg:text-6xl mt-20 text-center font-bold mb-6 font-dm-serif">
                    Frequently Asked Questions
                </h2>
                <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap bg-blue-50 flex-col md:flex-row justify-between relative z-10 pt-10 px-4 md:px-28 gap-8">
                    <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
                        <img src={faq} alt="FAQ" className="w-full rounded-3xl shadow-lg" />
                    </div>
                    <div className="w-full md:w-1/2" data-aos="fade-left">
                        {home.faq.map((item, index) => (
                            <div key={index} className="mb-4">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left text-base md:text-xl font-semibold bg-gradient-to-r from-blue-600 to-blue-400 
                                        text-white py-3 px-4 md:px-5 rounded-lg flex justify-between items-center shadow-md 
                                        hover:bg-blue-500 transition-colors duration-300"
                                >
                                    <span>{item.question}</span>
                                    {faqOpen === index ? <FaChevronUp /> : <FaChevronDown />}
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${faqOpen === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="mt-3 p-4 bg-blue-50 rounded-lg shadow-inner text-sm md:text-base text-gray-700 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div className=" py-16 bg-blue-50 overflow-hidden">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-dm-serif">
                        {home.testimonials.title}
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        {home.testimonials.subtitle}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row overflow-x-auto md:overflow-hidden relative snap-x snap-mandatory 
                space-x-4 sm:space-x-6 md:space-x-8">
                    <div className={`flex w-max hover:pause-animation   overflow-x-auto md:overflow-hidden ${getScrollDirection()}`}>
                        {[...home.testimonials.items, ...home.testimonials.items].map((testimonial, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 w-[250px] sm:w-[300px] md:w-[400px] snap-center flex flex-col 
                            items-center p-6 bg-gray-50 rounded-lg shadow-lg ${language === 'AR' ? 'rtl' : 'ltr'}`}
                            >
                                <FaQuoteRight className="text-yellow-400 text-4xl mb-6" />
                                <p className="text-gray-600 text-lg text-center mb-6">
                                    {testimonial.quote}
                                </p>
                                <div className="flex items-center justify-center space-x-2">
                                    <span className="font-bold text-lg">{testimonial.star}</span>
                                    <div className="text-sm flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`text-2xl ${i < Math.floor(testimonial.star) ? 'text-yellow-400' : 'text-gray-300'}`}>
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 object-cover rounded-full shadow-md mb-4"
                                />
                                <h3 className="font-bold text-xl mb-3">{testimonial.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;