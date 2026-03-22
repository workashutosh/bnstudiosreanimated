import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Game Dev', href: '/game-dev' },
        { name: 'Arch Viz', href: '/arch-viz' },
        { name: 'VR', href: '/vr' },
        { name: 'Web & Apps', href: '/web-apps' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
                <div className="container mx-auto px-4 lg:px-6 h-24 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 z-50">
                        <Link to="/">
                            <img
                                src="https://bloodnexusstudio.in/otassets/logo_x4jjuc.jpg"
                                alt="BLOODNEXUS"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu - Centered Pills */}
                    <div className="hidden lg:flex items-center justify-center flex-1 ml-8">
                        <div className="flex space-x-1 bg-neutral-900/50 p-1 rounded-full backdrop-blur-sm border border-white/10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive(link.href)
                                        ? 'bg-neutral-800 text-white shadow-sm'
                                        : 'text-gray-300 hover:text-white hover:bg-neutral-800/50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            {/* Dropdown or More for remaining items if needed, simplified here */}
                            <Link
                                to="/3d-art"
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive('/3d-art')
                                    ? 'bg-neutral-800 text-white'
                                    : 'text-gray-300 hover:text-white hover:bg-neutral-800/50'
                                    }`}
                            >
                                3D Art
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Right - CTA */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden z-50">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="focus:outline-none text-white p-2"
                        >
                            <span className="sr-only">Open menu</span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Modal Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-40 bg-zinc-900/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 transition-opacity duration-300">

                    <div className="flex flex-col space-y-2 flex-grow">
                        {[...navLinks, { name: '3D Art', href: '/3d-art' }, { name: 'About Us', href: '/about' }].map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-between py-4 border-b border-white/10 text-lg font-medium text-gray-100 hover:text-white group"
                            >
                                {link.name}
                                <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full text-center py-4 bg-white text-black rounded-full font-bold text-lg mb-4"
                        >
                            Contact Us
                        </Link>
                        <div className="text-center text-gray-500 text-sm">
                            BloodNexus © 2025
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
