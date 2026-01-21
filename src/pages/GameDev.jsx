import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const GameDev = () => {
    const [formData, setFormData] = useState({
        name: 'John Doe',
        email: 'john@company.com',
        missionType: 'game-dev',
        budget: '< $5k',
        briefing: ''
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [expandedFAQ, setExpandedFAQ] = useState(null);
    const [countedValues, setCountedValues] = useState({ clients: 0, projects: 0, years: 0 });
    const [hasAnimated, setHasAnimated] = useState(false);
    const statsRef = useRef(null);

    // Animated counter effect
    useEffect(() => {
        if (hasAnimated) return;

        const animateCounter = (key, target, duration = 2000) => {
            let start = 0;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCountedValues(prev => ({ ...prev, [key]: target }));
                    clearInterval(timer);
                } else {
                    setCountedValues(prev => ({ ...prev, [key]: Math.floor(start) }));
                }
            }, 16);
        };

        const startAnimation = () => {
            setHasAnimated(true);
            animateCounter('clients', 50);
            animateCounter('projects', 200);
            animateCounter('years', 15);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        startAnimation();
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentRef = statsRef.current;
        if (currentRef) {
            // Check if already visible
            const rect = currentRef.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                // If already visible, animate after a short delay
                setTimeout(startAnimation, 300);
            } else {
                observer.observe(currentRef);
            }
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [hasAnimated]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error for this field when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleMissionTypeChange = (type) => {
        setFormData(prev => ({
            ...prev,
            missionType: type
        }));
    };

    const handleBudgetChange = (budget) => {
        setFormData(prev => ({
            ...prev,
            budget: budget
        }));
    };

    const validateForm = () => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Invalid email format';
        }
        if (!formData.briefing.trim()) {
            errors.briefing = 'Briefing is required';
        }
        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setFormErrors({});
        setIsSubmitting(true);
        setSubmitStatus(null);

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Form submitted:', formData);
            setSubmitStatus('success');
            // Reset form after success
            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    missionType: 'game-dev',
                    budget: '< $5k',
                    briefing: ''
                });
                setSubmitStatus(null);
            }, 3000);
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Reusable Angular Header Component
    const SectionHeader = ({ title }) => (
        <div className="relative mb-12">
            <div
                className="bg-[#EF4444] inline-block py-2 px-12 pr-20"
                style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
            >
                <h2 className="text-4xl md:text-5xl font-bebas text-white uppercase tracking-wider">
                    {title}
                </h2>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-red-600/50 to-transparent mt-1"></div>
        </div>
    );

    return (
        <div className="bg-zinc-900 text-white min-h-screen font-sans selection:bg-red-600 selection:text-white">

            {/* 1. HERO SECTION: Cinematic & Bold */}
            <div className="relative w-full h-screen overflow-hidden">
                <div className="absolute inset-0">
                    <video
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="https://res.cloudinary.com/df7s2xmz1/video/upload/v1765528035/video_theme_trailer_bloodnexusstudios_mario_nezzkk.mp4" type="video/mp4" />
                    </video>
                    {/* Cinematic Letterbox effect if desired, or just gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80"></div>
                </div>

                <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 pt-20">
                    <h1 className="text-6xl md:text-8xl font-bebas text-white drop-shadow-2xl tracking-widest mb-4">
                        GAME DEVELOPMENT
                    </h1>
                    <p className="text-xl md:text-2xl font-oswald text-white max-w-3xl drop-shadow-lg mb-10 uppercase tracking-widest bg-black/50 px-6 py-2">
                        WITH HIGH-QUALITY VISUALS & SMOOTH GAMEPLAY
                    </p>
                    <p className="text-lg text-gray-200 max-w-2xl mb-8 font-oswald">
                        We build games that look stunning and feel great to play. From PC to mobile and VR, every project is shaped with stable systems, clear gameplay design, and visuals that draw players in.
                    </p>
                    <Link to="/contact">
                        <button className="bg-white text-black font-bebas text-2xl px-10 py-3 border-2 border-white hover:bg-transparent hover:text-white transition-all duration-300 uppercase tracking-widest">
                            Start Your Game Project
                        </button>
                    </Link>
                </div>
            </div>

            {/* 2. CAPABILITIES GRID: "Narrative Adventure Games" Style */}
            <section className="py-20 bg-zinc-100 text-black">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Our Capabilities" />
                    <p className="mb-8 font-oswald text-xl text-gray-700">We cover complete game production from idea to release. Our team handles:</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { title: 'PC, Mobile & VR Games', img: 'https://res.cloudinary.com/df7s2xmz1/image/upload/v1765535063/10_i2dwza.png' },
                            { title: 'FPS/TPS Controllers', img: 'https://res.cloudinary.com/df7s2xmz1/video/upload/v1765535121/SHot2.0000.2mp4_nnxpor.mp4', isVideo: true },
                            { title: 'Multiplayer Systems', img: 'https://res.cloudinary.com/df7s2xmz1/image/upload/v1765535083/trench_gun_2_flxvgb.png' },
                            { title: 'RPG Progression', img: 'https://res.cloudinary.com/df7s2xmz1/image/upload/v1765535069/Poster_9.1_ooxfev.png' },
                            { title: 'Prototyping & Level Design', img: 'https://res.cloudinary.com/df7s2xmz1/image/upload/v1765535069/Poster_9.1_ooxfev.png' },
                            { title: 'Character Setup (CC4)', img: 'https://res.cloudinary.com/df7s2xmz1/image/upload/v1765535083/STG44_LOGO2_xrswy2.png' }, // Placeholder visual
                            { title: 'Post-launch Support', img: 'https://res.cloudinary.com/df7s2xmz1/image/upload/v1765535069/Poster_9.1_ooxfev.png' } // Placeholder visual
                        ].map((item, idx) => (
                            <div key={idx} className="group relative aspect-video bg-black overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all">
                                {item.isVideo ? (
                                    <video src={item.img} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                ) : (
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                                )}

                                {/* Static overlay for title, no fade-in-up animation */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
                                    <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
                                        <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
                                    <h3 className="text-white font-bebas text-2xl tracking-wide">{item.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* STATISTICS SECTION */}
            <section ref={statsRef} className="py-20 bg-gradient-to-r from-black via-zinc-900 to-purple-950/30 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Column 1 */}
                        <div className="text-center md:text-left px-4 md:px-8 md:border-r md:border-white/10 group hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-[#EF4444]/20 flex items-center justify-center border border-[#EF4444]/30">
                                    <svg className="w-6 h-6 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                                <span className="text-6xl md:text-7xl font-bebas text-white font-bold">{countedValues.clients}</span>
                                <span className="text-red-500 text-2xl font-bold">+</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-oswald text-white uppercase tracking-wide mb-2">ENTERPRISE CLIENTS</h3>
                            <p className="text-gray-400 text-sm md:text-base font-oswald">Strategic Partnerships</p>
                        </div>

                        {/* Column 2 */}
                        <div className="text-center md:text-left px-4 md:px-8 md:border-r md:border-white/10 group hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-[#EF4444]/20 flex items-center justify-center border border-[#EF4444]/30">
                                    <svg className="w-6 h-6 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                                <span className="text-6xl md:text-7xl font-bebas text-white font-bold">{countedValues.projects}</span>
                                <span className="text-red-500 text-2xl font-bold">+</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-oswald text-white uppercase tracking-wide mb-2">PROJECTS DELIVERED</h3>
                            <p className="text-gray-400 text-sm md:text-base font-oswald">To Clients Across the Globe</p>
                        </div>

                        {/* Column 3 */}
                        <div className="text-center md:text-left px-4 md:px-8 group hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-[#EF4444]/20 flex items-center justify-center border border-[#EF4444]/30">
                                    <svg className="w-6 h-6 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="flex items-baseline justify-center md:justify-start gap-2 mb-4">
                                <span className="text-6xl md:text-7xl font-bebas text-white font-bold">{countedValues.years}</span>
                                <span className="text-red-500 text-2xl font-bold">+</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-oswald text-white uppercase tracking-wide mb-2">YEARS LEAD EXPERIENCE</h3>
                            <p className="text-gray-400 text-sm md:text-base font-oswald">Leads with 10-15+ Years Exp.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CO-DEV STYLE SECTION: "Co-Dev" / Player Experience */}
            <section className="py-20 bg-zinc-900 text-white">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Built for Player Experience" />

                    <div className="grid md:grid-cols-2 gap-0 bg-black border border-zinc-800">
                        {/* Image Side */}
                        <div className="relative min-h-[400px] border-r border-zinc-800">
                            <img
                                src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1765535063/10_i2dwza.png"
                                alt="Player Experience"
                                className="w-full h-full object-cover opacity-80"
                            />
                            {/* Blue/Red Accent Corner */}
                            <div
                                className="absolute top-0 right-0 w-24 h-24 bg-[#EF4444]"
                                style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
                            ></div>
                        </div>

                        {/* Content Side */}
                        <div className="p-12 flex flex-col justify-center items-start">
                            <h3 className="text-3xl font-bebas text-white mb-6 border-b-4 border-[#EF4444] pb-2 inline-block">
                                Engineered for Immersion
                            </h3>
                            <p className="text-gray-400 font-oswald text-lg leading-relaxed mb-6">
                                We design gameplay around real players—not theory. Controls feel natural, animations blend smoothly, and the game world reacts just right. Every mechanic is tested, optimized, and tuned so players instantly understand how to move, aim, explore, and interact.
                            </p>
                            <ul className="text-gray-400 font-oswald mb-8 space-y-2">
                                <li className="flex items-center gap-2"><span className="text-[#EF4444]">►</span> Clean, readable gameplay</li>
                                <li className="flex items-center gap-2"><span className="text-[#EF4444]">►</span> Smooth camera and movement</li>
                                <li className="flex items-center gap-2"><span className="text-[#EF4444]">►</span> Balanced systems</li>
                                <li className="flex items-center gap-2"><span className="text-[#EF4444]">►</span> Low-latency multiplayer</li>
                                <li className="flex items-center gap-2"><span className="text-[#EF4444]">►</span> Stable performance across devices</li>
                            </ul>
                            <button className="px-8 py-3 border border-white text-white font-bebas uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SELECTED WORKS: Horizontal Layout */}
            <section className="py-20 bg-white text-black">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Selected Works" />

                    <div className="relative overflow-hidden mb-12 h-[500px] group">
                        <img src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1765535069/Poster_9.1_ooxfev.png" className="w-full h-full object-cover object-top" alt="Featured Work" />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center px-12 md:px-24">
                            <h3 className="text-6xl font-bebas text-white mb-4">Project: NEXUS</h3>
                            <p className="text-white/80 font-oswald text-xl max-w-md mb-8">
                                A dark fantasy RPG featuring high-fidelity environments and complex combat systems. Built in Unreal Engine 5.
                            </p>
                            <button className="bg-[#EF4444] text-white font-bebas px-8 py-3 w-max hover:bg-red-700 transition-colors">
                                View Case Study
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-20 bg-zinc-900 text-white relative">
                <div className="container mx-auto px-6">
                    <h2 className="text-5xl md:text-6xl font-bebas text-white mb-12 uppercase tracking-wide">Frequently Asked Questions</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                question: "Do you handle console optimization?",
                                answer: "Yes. We manage heavy optimization for PlayStation 5 and Xbox Series X, ensuring your build passes compliance."
                            },
                            {
                                question: "Can you work with our existing codebase?",
                                answer: "Absolutely. We specialize in refactoring and optimizing legacy Unreal (C++) and Unity (C#) projects to improve performance and stability."
                            },
                            {
                                question: "Do you support multiplayer networking?",
                                answer: "We build robust replication systems using Unreal's replication graph and Unity's Netcode for GameObjects/Entities."
                            },
                            {
                                question: "What game engines do you specialize in?",
                                answer: "We excel in Unreal Engine 5 and Unity, with extensive experience in both C++ and C# development across multiple platforms."
                            },
                            {
                                question: "How do you handle project timelines?",
                                answer: "We follow agile methodologies with transparent communication, regular milestones, and flexible scheduling to meet your deadlines."
                            },
                            {
                                question: "Do you provide post-launch support?",
                                answer: "Yes, we offer comprehensive post-launch support including bug fixes, updates, performance optimization, and ongoing maintenance."
                            }
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 rounded-xl border border-zinc-700/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-[#EF4444]/50 hover:shadow-lg hover:shadow-red-500/20 cursor-pointer ${expandedFAQ === index ? 'border-[#EF4444]' : ''
                                    }`}
                                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                            >
                                <div className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className={`w-8 h-8 rounded-full border-2 border-[#EF4444] flex items-center justify-center shrink-0 mt-1 transition-all ${expandedFAQ === index ? 'bg-[#EF4444]' : ''
                                            }`}>
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-oswald font-bold text-white mb-3 uppercase flex items-center justify-between">
                                                <span>{faq.question}</span>
                                                <svg
                                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedFAQ === index ? 'rotate-180' : ''}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </h3>
                                            <div className={`overflow-hidden transition-all duration-300 ${expandedFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                }`}>
                                                <p className="text-gray-400 font-oswald text-sm leading-relaxed pb-2">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PRODUCTION PIPELINE: Replaces Tech Stack */}
            <section className="py-20 bg-black border-t-4 border-[#EF4444]">
                <div className="container mx-auto px-6">
                    <SectionHeader title="Our Production Pipeline" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { name: 'Unreal Engine 5.4', desc: 'Next-Gen Core' },
                            { name: 'Unity HDRP/URP', desc: 'Visual Fidelity' },
                            { name: 'Lumen & Nanite', desc: 'Real-time Global Illumination' },
                            { name: 'Chaos Physics', desc: 'Destruction & Simulation' },
                            { name: 'CC4 Pipeline', desc: 'Advanced Characters' },
                            { name: 'Animation Retargeting', desc: 'Efficient Fluid Motion' },
                            { name: 'Profiling', desc: 'Deep Optimization' },
                            { name: 'Live Support', desc: 'Post-Launch Stability' }
                        ].map((tech, idx) => (
                            <div key={idx} className="bg-zinc-900/50 p-6 border border-zinc-800 hover:border-[#EF4444] transition-colors group">
                                <h3 className="text-2xl font-bebas text-white group-hover:text-[#EF4444] transition-colors">{tech.name}</h3>
                                <p className="font-oswald text-zinc-500 text-sm">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. MISSION CONTROL FORM (with Ready to Create background) */}
            <section className="relative py-32 bg-zinc-900 text-center text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://res.cloudinary.com/df7s2xmz1/image/upload/v1765535063/10_i2dwza.png')] bg-cover bg-center"></div>
                <div className="relative z-10 container mx-auto px-6">
                    <div className="max-w-4xl mx-auto bg-black/80 backdrop-blur-md border-2 border-zinc-800/80 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        {/* Corner accent */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF4444] opacity-20" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}></div>

                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 via-transparent to-purple-600/30 blur-xl opacity-60"></div>

                        <div className="relative z-10">
                            <div className="flex items-center justify-center mb-4">
                                <div className="w-16 h-1 bg-[#EF4444] mr-4"></div>
                                <h2 className="text-4xl md:text-5xl font-bebas text-white uppercase tracking-widest">Mission Control</h2>
                                <div className="w-16 h-1 bg-[#EF4444] ml-4"></div>
                            </div>
                            <p className="text-gray-300 font-oswald text-center mb-12 text-sm md:text-base tracking-wide">
                                Initialize your project with Blood Nexus Studio
                            </p>

                            <form onSubmit={handleSubmit} className="space-y-10">
                                {/* Name and Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-oswald text-gray-300 uppercase tracking-wider mb-3 font-semibold">
                                            CODENAME / NAME
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full bg-zinc-900/80 border-2 ${formErrors.name ? 'border-red-500' : 'border-zinc-700/50'
                                                } text-white rounded px-4 py-3.5 focus:outline-none focus:border-[#EF4444] focus:ring-2 focus:ring-red-500/20 transition-all font-oswald text-base`}
                                        />
                                        {formErrors.name && (
                                            <p className="text-red-500 text-xs font-oswald mt-1">{formErrors.name}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-xs font-oswald text-gray-300 uppercase tracking-wider mb-3 font-semibold">
                                            COMMUNICATION CHANNEL
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full bg-zinc-900/80 border-2 ${formErrors.email ? 'border-red-500' : 'border-zinc-700/50'
                                                } text-white rounded px-4 py-3.5 focus:outline-none focus:border-[#EF4444] focus:ring-2 focus:ring-red-500/20 transition-all font-oswald text-base`}
                                        />
                                        {formErrors.email && (
                                            <p className="text-red-500 text-xs font-oswald mt-1">{formErrors.email}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Mission Type */}
                                <div>
                                    <label className="block text-xs font-oswald text-gray-300 uppercase tracking-wider mb-4 font-semibold">
                                        MISSION TYPE
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {[
                                            { value: 'game-dev', label: 'Game Development' },
                                            { value: 'vr', label: 'VR / XR' },
                                            { value: 'archviz', label: 'ArchViz' },
                                            { value: 'art', label: 'Art & Animation' }
                                        ].map((type) => (
                                            <button
                                                key={type.value}
                                                type="button"
                                                onClick={() => handleMissionTypeChange(type.value)}
                                                className={`px-4 py-3 rounded font-oswald uppercase tracking-wide text-xs md:text-sm transition-all border-2 ${formData.missionType === type.value
                                                    ? 'bg-[#EF4444] text-white border-[#EF4444] shadow-lg shadow-red-500/40 scale-105'
                                                    : 'bg-zinc-900/60 text-white border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/60'
                                                    }`}
                                            >
                                                {type.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Resource Allocation (Budget) */}
                                <div>
                                    <label className="block text-xs font-oswald text-gray-300 uppercase tracking-wider mb-4 font-semibold">
                                        RESOURCE ALLOCATION (BUDGET)
                                    </label>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                        {['< $5k', '$5k - $10k', '$10k - $25k', '$25k+'].map((budget) => (
                                            <button
                                                key={budget}
                                                type="button"
                                                onClick={() => handleBudgetChange(budget)}
                                                className={`px-4 py-3 rounded font-oswald uppercase tracking-wide text-xs md:text-sm transition-all border-2 ${formData.budget === budget
                                                    ? 'bg-zinc-800 text-white border-zinc-600 shadow-md scale-105'
                                                    : 'bg-zinc-900/60 text-white border-zinc-700/50 hover:border-zinc-600 hover:bg-zinc-800/60'
                                                    }`}
                                            >
                                                {budget}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Briefing */}
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <label className="block text-xs font-oswald text-gray-300 uppercase tracking-wider font-semibold">
                                            BRIEFING
                                        </label>
                                        <span className={`text-xs font-oswald ${formData.briefing.length > 500 ? 'text-red-500' : 'text-gray-400'
                                            }`}>
                                            {formData.briefing.length} / 1000
                                        </span>
                                    </div>
                                    <textarea
                                        name="briefing"
                                        value={formData.briefing}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your vision..."
                                        rows="6"
                                        maxLength={1000}
                                        className={`w-full bg-zinc-900/80 border-2 ${formErrors.briefing ? 'border-red-500' : 'border-zinc-700/50'
                                            } text-white rounded px-4 py-3.5 focus:outline-none focus:border-[#EF4444] focus:ring-2 focus:ring-red-500/20 transition-all font-oswald placeholder-gray-500 resize-none text-base`}
                                    />
                                    {formErrors.briefing && (
                                        <p className="text-red-500 text-xs font-oswald mt-1">{formErrors.briefing}</p>
                                    )}
                                </div>

                                {/* Success/Error Message */}
                                {submitStatus === 'success' && (
                                    <div className="bg-green-500/20 border-2 border-green-500 rounded px-4 py-3 flex items-center gap-3">
                                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-green-500 font-oswald text-sm">Mission initialized successfully! We'll contact you soon.</p>
                                    </div>
                                )}
                                {submitStatus === 'error' && (
                                    <div className="bg-red-500/20 border-2 border-red-500 rounded px-4 py-3 flex items-center gap-3">
                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <p className="text-red-500 font-oswald text-sm">Launch sequence failed. Please try again.</p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="flex justify-center pt-6">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`px-16 py-4 bg-black border-2 border-[#EF4444] text-white font-bebas text-xl uppercase tracking-widest hover:bg-[#EF4444] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-red-500/30 hover:shadow-red-500/50 relative overflow-hidden group ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                <span>INITIATING...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>INITIATE LAUNCH SEQUENCE</span>
                                                <span className="text-sm transform group-hover:translate-y-[-2px] transition-transform">▲</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default GameDev;
