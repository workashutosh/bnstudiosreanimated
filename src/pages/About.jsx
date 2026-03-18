import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_EMAIL } from '../config/contact';
import { submitToContact } from '../utils/submitForm';

const About = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');
        const result = await submitToContact(formData, 'New inquiry from About page - Blood Nexus');
        if (result.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('error');
            setErrorMsg(result.message || 'Failed to send.');
        }
    };

    return (
        <div className="bg-zinc-900 text-white min-h-screen font-sans selection:bg-red-600 selection:text-white">
            {/* HERO */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1765535063/10_i2dwza.png"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 container mx-auto px-4 sm:px-6">
                    <p className="font-oswald text-red-500 uppercase tracking-[0.3em] text-sm mb-4">About Us</p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bebas text-white uppercase tracking-wider mb-6">
                        Forging Digital Worlds
                    </h1>
                    <p className="text-xl md:text-2xl font-oswald text-gray-300 max-w-3xl leading-relaxed">
                        Blood Nexus Studios is a premier digital studio specializing in high-end game development, architectural visualization, and immersive VR experiences.
                    </p>
                </div>
            </section>

            {/* STORY */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bebas text-white mb-8 uppercase tracking-wide border-b-4 border-red-600 pb-4 inline-block">
                                Our Story
                            </h2>
                            <p className="text-gray-300 font-oswald text-lg leading-relaxed mb-6">
                                We combine technical expertise with artistic vision to deliver world-class digital products. Our team consists of veteran developers, artists, and designers passionate about pushing the boundaries of what is possible in real-time rendering and interactive media.
                            </p>
                            <p className="text-gray-400 font-oswald leading-relaxed">
                                From indie passion projects to enterprise partnerships, we've helped studios and brands bring their visions to life. Every project is driven by a commitment to quality, performance, and the belief that great digital experiences should feel effortless.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { value: '50+', label: 'Enterprise Clients' },
                                { value: '200+', label: 'Projects Delivered' },
                                { value: '15+', label: 'Years Experience' },
                                { value: '100%', label: 'Client Focus' }
                            ].map((stat, idx) => (
                                <div key={idx} className="bg-zinc-900 p-6 border border-zinc-800 hover:border-red-600/50 transition-colors">
                                    <span className="text-3xl md:text-4xl font-bebas text-red-500 block mb-2">{stat.value}</span>
                                    <span className="text-gray-400 font-oswald text-sm uppercase">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white mb-16 uppercase tracking-wide text-center">
                        What We Stand For
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Quality First', desc: 'We don\'t compromise on craft. Every asset, line of code, and pixel is built to last.' },
                            { title: 'Collaboration', desc: 'We work as an extension of your team. Clear communication and transparency are at our core.' },
                            { title: 'Innovation', desc: 'We stay ahead of the curve—Lumen, Nanite, real-time GI, and cutting-edge pipelines.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-black p-8 border-l-4 border-red-600">
                                <h3 className="text-2xl font-bebas text-white mb-4 uppercase">{item.title}</h3>
                                <p className="text-gray-400 font-oswald leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EXPERTISE */}
            <section className="py-20 bg-black">
                <div className="container mx-auto px-4 sm:px-6">
                    <h2 className="text-4xl md:text-5xl font-bebas text-white mb-12 uppercase tracking-wide">
                        Our Expertise
                    </h2>
                    <div className="flex flex-wrap gap-4">
                        {['Game Development', 'Architectural Visualization', 'VR & XR', '3D Art', 'Web & Apps', 'Real-time Rendering', 'Unreal Engine', 'Unity'].map((skill, idx) => (
                            <span key={idx} className="px-6 py-3 bg-zinc-900 border border-zinc-800 font-oswald uppercase text-sm text-gray-300 hover:border-red-600 hover:text-white transition-colors">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* GET IN TOUCH - Form that sends to contact email */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bebas text-white mb-6 uppercase tracking-wide">
                            Get In Touch
                        </h2>
                        <p className="text-gray-400 font-oswald mb-10">
                            Have a project in mind? Drop us a line and we'll get back to you.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-oswald text-gray-400 uppercase tracking-wider mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                                    required
                                    className="w-full bg-black border-2 border-zinc-700 text-white px-4 py-3 rounded focus:outline-none focus:border-red-500 font-oswald"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-oswald text-gray-400 uppercase tracking-wider mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                    required
                                    className="w-full bg-black border-2 border-zinc-700 text-white px-4 py-3 rounded focus:outline-none focus:border-red-500 font-oswald"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-oswald text-gray-400 uppercase tracking-wider mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                                    required
                                    rows="5"
                                    className="w-full bg-black border-2 border-zinc-700 text-white px-4 py-3 rounded focus:outline-none focus:border-red-500 font-oswald resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>
                            {status === 'success' && <p className="text-green-500 font-oswald">Message sent! We'll get back to you soon.</p>}
                            {status === 'error' && <p className="text-red-500 font-oswald">{errorMsg}</p>}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-bebas text-xl py-4 uppercase tracking-widest transition-colors"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>

                        <p className="mt-6 text-gray-500 font-oswald text-sm">
                            Or email us directly at{' '}
                            <a href={`mailto:${CONTACT_EMAIL}`} className="text-red-500 hover:text-red-400">
                                {CONTACT_EMAIL}
                            </a>
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-black border-t-2 border-red-600">
                <div className="container mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-4xl md:text-6xl font-bebas text-white mb-6 uppercase">
                        Ready to Build?
                    </h2>
                    <p className="text-gray-400 font-oswald text-xl mb-10">
                        Let's create something extraordinary together.
                    </p>
                    <Link to="/contact">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bebas text-2xl px-12 py-4 uppercase tracking-widest transition-colors">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default About;
