import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { footerData } from '../utility/data';
import logo from '../assets/logo.png';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {

    return (
        <footer className="relative z-40 bg-gradient-to-r from-gray-900 to-gray-700 text-gray-100 pt-60 pb-20 w-full shadow-2xl md:rounded-t-3xl mt-[-2rem] min-h-[60vh]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-16">
                    <img src={logo} alt="Beyond Logo" className="h-12 mb-4" />
                    <p className="text-gray-300 text-center max-w-md">
                        Generate unlimited AI videos with your own face, voice & gestures
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
                    {footerData.columns.map((column, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center md:items-start"
                        >
                            <h3 className="text-lg font-semibold mb-6 text-blue-400">
                                {column.title}
                            </h3>
                            <ul className="space-y-4">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-yellow-300 transition-colors duration-300"
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-400">
                        © {new Date().getFullYear()} Beyond. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
