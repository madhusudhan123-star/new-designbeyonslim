import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import data from '../utils/data';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const { language, setLanguage } = useLanguage(); // Add setLanguage to destructuring
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const isHomePage = location.pathname === '/';

    // Get navigation links from data
    const navLinks = data[language].navbar.links;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const getNavbarBackground = () => {
        if (isHomePage) {
            return isScrolled ? 'bg-blue-300' : 'bg-transparent';
        }
        return 'bg-blue-300'; // Default background for other pages
    };

    const getLinkTextColor = () => {
        if (isHomePage) {
            return isScrolled ? 'text-gray-900' : 'text-white';
        }
        return 'text-gray-900'; // Default text color for other pages
    };

    const getLanguageName = (code) => {
        switch (code) {
            case 'ENGLISH':
                return 'EN';
            case 'HI':
                return 'हिंदी';
            case 'AR':
                return 'عربي';
            default:
                return 'EN';
        }
    };

    const getLanguageToggleText = (code) => {
        switch (code) {
            case 'ENGLISH':
                return 'Switch to हिंदी';
            case 'HI':
                return 'Switch to English';
            case 'AR':
                return 'Switch to English';
            default:
                return 'Switch to हिंदी';
        }
    };

    // Modify the dropdown menu to show all available languages
    const languages = [
        { code: 'ENGLISH', name: 'English' },
        { code: 'HI', name: 'हिंदी' },
        { code: 'AR', name: 'عربي' }
    ];

    const getTextAlignment = () => {
        return language === 'AR' ? 'text-right' : 'text-left';
    };

    const getMarginDirection = () => {
        return language === 'AR' ? 'ml-auto' : 'mr-auto';
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${getNavbarBackground()} `}>
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${getTextAlignment()}`}>
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src={data[language].footer.logo}
                                alt="Logo"
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-base font-medium transition-colors duration-200 
                                ${language === 'AR' ? 'ml-8' : 'mr-8'} 
                                ${location.pathname === link.path
                                    ? 'text-blue-600'
                                    : `${getLinkTextColor()} hover:text-blue-600`
                                    }`}
                            >
                                {link.title}
                            </Link>
                        ))}

                        {/* Language Selector - Desktop */}
                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className={`flex items-center space-x-1 ${getLinkTextColor()}`}
                            >
                                <span>{getLanguageName(language)}</span>
                                <FaChevronDown className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {dropdownOpen && (
                                <div className={`absolute ${language === 'AR' ? 'left-0' : 'right-0'} mt-2 w-24 bg-white rounded-md shadow-lg py-1`}>
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setDropdownOpen(false);
                                            }}
                                            className={`block w-full px-4 py-2 text-sm text-right ${
                                                language === lang.code ? 'bg-gray-100 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                                            }`}
                                        >
                                            {lang.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md ${getLinkTextColor()} hover:opacity-75`}
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path
                                ? 'bg-blue-50 text-blue-600'
                                : 'text-gray-900 hover:bg-gray-50'
                                }`}
                        >
                            {link.title}
                        </Link>
                    ))}

                    {/* Language Selector - Mobile */}
                    <div className="border-t border-gray-200 pt-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code)}
                                className={`w-full text-left px-3 py-2 text-base font-medium ${
                                    language === lang.code ? 'bg-gray-100 text-blue-600' : 'text-gray-900 hover:bg-gray-50'
                                } rounded-md`}
                            >
                                {lang.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;