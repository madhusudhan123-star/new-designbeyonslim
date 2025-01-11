import React from 'react';
import data from '../utils/data';
import { useLanguage } from '../context/LanguageContext';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { language } = useLanguage();
    const footerData = data[language].footer;

    const policyLinks = [
        { title: "Shipping Policy", path: "/shipping" },
        { title: "Return Policy", path: "/return-policy" },
        { title: "Cancellation Policy", path: "/cancel" },
        { title: "Terms & Conditions", path: "/terms" },
        { title: "Privacy Policy", path: "/privacy-policy" }
    ];

    return (
        <footer className="bg-[#add2ff] text-gray-700 pt-8 pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Logo and Social Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="w-48 mb-4">
                            <img
                                src={footerData.logo}
                                alt="Logo"
                                className="w-full h-auto"
                            />
                        </div>
                        <p className="text-center md:text-left mb-6 text-sm md:text-base">
                            {footerData.description}
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <a
                                href="https://www.facebook.com/people/Beyond-Slim-Body-Slimming-Oil/61559800233749/"
                                className="w-10 h-10 flex justify-center items-center rounded-full bg-white border shadow 
                                    hover:bg-green-700 hover:text-white transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="https://x.com/slimming_oil"
                                className="w-10 h-10 flex justify-center items-center rounded-full bg-white border shadow 
                                    hover:bg-green-700 hover:text-white transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/beyondslimmingoil/"
                                className="w-10 h-10 flex justify-center items-center rounded-full bg-white border shadow 
                                    hover:bg-green-700 hover:text-white transition-colors duration-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-blue-700 mb-4">
                            {footerData.contactInfo.title}
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-center justify-center md:justify-start">
                                <i className="fas fa-map-marker-alt text-blue-700 mr-3 w-5"></i>
                                <span className="text-sm md:text-base">{footerData.contactInfo.address}</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start">
                                <i className="fas fa-phone-alt text-blue-700 mr-3 w-5"></i>
                                <span className="text-sm md:text-base">{footerData.contactInfo.phone}</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start">
                                <i className="fas fa-envelope text-blue-700 mr-3 w-5"></i>
                                <span className="text-sm md:text-base">{footerData.contactInfo.email}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="text-center md:text-left">
                        <h3 className="text-xl font-semibold text-blue-700 mb-4">
                            {footerData.usefulLinks.title}
                        </h3>
                        <ul className="grid grid-cols-1 gap-3">
                            {/* Policy Links */}
                            {policyLinks.map((link, index) => (
                                <li key={`policy-${index}`}>
                                    <Link
                                        to={link.path}
                                        className="text-sm md:text-base hover:text-blue-700 transition-colors duration-300"
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 pt-6 border-t border-blue-200">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        {/* Copyright */}
                        <p className="text-sm text-gray-500 text-center md:text-left">
                            {footerData.copyright}
                        </p>

                        {/* Payment Methods */}
                        <div className="flex items-center justify-center space-x-4">
                            <img src={footerData.visa} alt="Visa" className="h-6" />
                            <img src={footerData.paypal} alt="PayPal" className="h-6" />
                        </div>

                        {/* Bottom Links */}
                        <div className="flex space-x-4 text-sm">
                            <Link to="/terms" className="hover:text-green-700 transition-colors duration-300">
                                {footerData.bottomLinks.terms}
                            </Link>
                            <Link to="/privacy-policy" className="hover:text-green-700 transition-colors duration-300">
                                {footerData.bottomLinks.privacy}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;