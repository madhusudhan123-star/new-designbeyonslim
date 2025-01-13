import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../assets/logo.png';
import { navigationLinks } from '../utility/data';

const NavbarComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full fixed z-50">
            <div className="w-4/4 md:w-2/4 bg-blue-200 rounded-full mt-5 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href='/'>
                            <img src={logo} className='ml-2 w-28' />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationLinks.map(link => (
                            <a
                                key={link.id}
                                href={link.path}
                                className="text-blue-600 font- text-2xl hover:text-"
                            >
                                {link.title}
                            </a>
                        ))}
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
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavbarComponent;