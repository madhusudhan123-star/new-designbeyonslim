import React from 'react';
import { footerData } from '../utility/data';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="relative z-40 bg-gradient-to-r from-gray-900 to-gray-700 text-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Logo and Description Section */}
                <div className="flex flex-col items-center mb-16">
                    <img
                        src={logo}
                        alt="Beyond Logo"
                        className="h-16 w-auto mb-6 hover:opacity-90 transition-opacity"
                    />
                    <p className="text-gray-300 text-lg text-center max-w-lg">
                        Generate unlimited AI videos with your own face, voice & gestures
                    </p>
                </div>

                {/* Links Grid Section */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 max-w-6xl mx-auto mb-16">
                    {footerData.columns.map((column, index) => (
                        <div key={index} className="flex flex-col items-center md:items-start">
                            <h3 className="text-xl font-semibold mb-6 text-blue-400 relative">
                                {column.title}
                                <span className="absolute -bottom-2 left-1/2 md:left-0 w-12 h-0.5 bg-blue-400 transform -translate-x-1/2 md:translate-x-0"></span>
                            </h3>
                            <ul className="space-y-4 text-center md:text-left">
                                {column.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-300 hover:text-yellow-300 transition-all duration-300 inline-block
                                                     transform hover:translate-x-2"
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Beyond. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <a href="/privacy-policy" className="text-gray-400 hover:text-yellow-300 text-sm transition-colors">
                                Privacy Policy
                            </a>
                            <a href="/terms" className="text-gray-400 hover:text-yellow-300 text-sm transition-colors">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
