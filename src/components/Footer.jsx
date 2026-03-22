import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../config/contact';

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link to="/" className="block mb-6">
                            <img
                                src="https://bloodnexusstudio.in/otassets/logo_x4jjuc.jpg"
                                alt="BloodNexus"
                                className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </Link>
                        <p className="text-zinc-500 font-oswald text-sm leading-relaxed mb-6">
                            Forging immersive digital experiences where art meets engineering.
                            <br />Based in the Metaverse.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bebas text-xl mb-6 tracking-wide">EXPLORE</h4>
                        <ul className="space-y-3 font-oswald text-zinc-400 text-sm">
                            <li><Link to="/" className="hover:text-red-600 transition-colors">Game Development</Link></li>
                            <li><Link to="/arch-viz" className="hover:text-red-600 transition-colors">Arch Viz</Link></li>
                            <li><Link to="/vr" className="hover:text-red-600 transition-colors">VR Experiences</Link></li>
                            <li><Link to="/apps" className="hover:text-red-600 transition-colors">Apps & Web</Link></li>
                        </ul>
                    </div>

                    {/* Studio */}
                    <div>
                        <h4 className="text-white font-bebas text-xl mb-6 tracking-wide">STUDIO</h4>
                        <ul className="space-y-3 font-oswald text-zinc-400 text-sm">
                            <li><Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-red-600 transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-red-600 transition-colors">Press Kit</Link></li>
                            <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-white font-bebas text-xl mb-6 tracking-wide">CONNECT</h4>
                        <a href={`mailto:${CONTACT_EMAIL}`} className="text-zinc-500 font-oswald text-sm mb-4 block hover:text-red-600 transition-colors">{CONTACT_EMAIL}</a>
                        <div className="flex gap-4">
                            {['Twitter', 'LinkedIn', 'Instagram', 'ArtStation'].map((social) => (
                                <a key={social} href="#" className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-500 hover:bg-red-600 hover:text-white transition-all duration-300">
                                    <span className="sr-only">{social}</span>
                                    <div className="w-3 h-3 bg-current rounded-sm"></div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-oswald text-zinc-600 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} BloodNexus Studios. All Rights Reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


