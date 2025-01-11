import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.png';
import { navigationLinks } from '../utility/data';

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed z-50">
            <div className="w-3/4 bg-white rounded-full mt-5 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <img src={logo} className='ml-2 w-28' />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationLinks.map(link => (
                            <a
                                key={link.id}
                                href={link.path}
                                className="text-black hover:text-blue-600"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>

                    {/* Login Button */}
                    <div className="hidden md:flex">
                        <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700">
                            LOGIN / SIGNUP
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <RiCloseLine className="h-6 w-6" /> : <RiMenu3Line className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navigationLinks.map(link => (
                                <a
                                    key={link.id}
                                    href={link.path}
                                    className="block px-3 py-2 text-gray-800 hover:text-purple-600"
                                >
                                    {link.title}
                                </a>
                            ))}
                            <button className="w-full bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700">
                                LOGIN / SIGNUP
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavbarComponent;