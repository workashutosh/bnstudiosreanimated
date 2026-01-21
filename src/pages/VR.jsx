import React from 'react';
import { Link } from 'react-router-dom';

const VR = () => {
    // Assets from request
    const assets = {
        hero: "https://res.cloudinary.com/df7s2xmz1/image/upload/v1768747171/VR-bg_uqw3k8.png",
        gallery: [
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766296812/FamilyRoom_-_Copy_fcqzbg.jpg",
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766296828/IMG-20250421-WA0025_mu7mlq.jpg",
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766296827/IMG-20250421-WA0026_ubm637.jpg",
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766296827/IMG-20250421-WA0024_kobxdb.jpg",
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766296827/IMG-20250421-WA0022_mmd1oy.jpg",
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766296827/IMG-20250421-WA0019_dydete.jpg",
        ]
    };

    return (
        <div className="bg-[#0B0F19] text-[#E0F7FA] min-h-screen font-sans selection:bg-[#00E5FF] selection:text-[#0B0F19] overflow-hidden">

            {/* HERO SECTION */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={assets.hero}
                        alt="VR Experience Background"
                        className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/90 via-[#0B0F19]/60 to-[#7C4DFF]/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <span className="inline-block py-1 px-3 border border-[#00E5FF] text-[#00E5FF] font-oswald text-sm tracking-[0.3em] uppercase mb-6 bg-[#0B0F19]/50 backdrop-blur-sm rounded-full">
                        Immersive VR Built for Natural Interaction
                    </span>
                    <h1 className="text-5xl md:text-9xl font-bebas text-[#FFFFFF] uppercase tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(0,229,255,0.5)] leading-[0.85]">
                        Beyond <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#D500F9]">Perception</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-oswald text-[#94A3B8] max-w-2xl mx-auto mb-10 font-light tracking-wide">
                        We design VR experiences that are comfortable, intuitive, and realistic—built for Quest, SteamVR, and Vision Pro.
                    </p>
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link to="/contact">
                            <button className="bg-[#00E5FF] text-[#0B0F19] font-bebas text-2xl px-10 py-4 hover:bg-[#33C9DC] transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,229,255,0.3)] rounded-sm">
                                Start Your VR Experience
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* VR SOLUTIONS - Redesigned to match reference */}
            <section className="py-24 bg-[#0F172A]">
                <div className="container mx-auto px-6">
                    <div className="bg-[#0033CC] p-8 md:p-12 relative overflow-hidden group">
                        <img
                            src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1768747237/70948d82-4ed0-40ec-be92-7c22e426f634.png"
                            alt="VR Solutions"
                            className="w-full h-64 md:h-[400px] object-cover mb-8"
                        />
                        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                            <h2 className="text-4xl md:text-6xl font-bebas text-white leading-none max-w-md">
                                VIRTUAL REALITY (VR) <br /> SOLUTIONS
                            </h2>
                            <p className="font-oswald text-white/90 text-lg md:text-xl max-w-sm text-right leading-tight">
                                Perfect for businesses that need to wow their audience or train their staff safely.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMMERSIVE GALLERY */}
            <section className="py-24 bg-[#020617] text-[#E0F7FA]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-[#1E293B] pb-8">
                        <div>
                            <h2 className="text-6xl md:text-7xl font-bebas text-[#FFFFFF] mb-2">Visual Odyssey</h2>
                            <p className="font-oswald text-[#00E5FF] tracking-widest uppercase">Curated Virtual Environments</p>
                        </div>
                        <div className="text-right hidden md:block">
                            <p className="font-oswald text-sm text-[#94A3B8] max-w-xs ml-auto">
                                Each environment is meticulously rendered to capture the subtle interplay of light, texture, and emotion.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {assets.gallery.map((img, i) => (
                            <div key={i} className={`relative group overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2 aspect-square md:aspect-auto' : 'aspect-square'}`}>
                                <img
                                    src={img}
                                    alt={`Gallery ${i}`}
                                    className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110 grayscale-[30%] md:group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-[#0B0F19]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <span className="text-[#00E5FF] font-oswald text-sm tracking-widest mb-2">PROJECT 0{i + 1}</span>
                                    <h3 className="text-3xl font-bebas text-white">Virtual Space</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* POWER-UPS SECTION - Replaces Human Centered Interaction */}
            <section className="py-24 bg-black text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-7xl font-bebas text-center mb-10 md:mb-16 uppercase tracking-tighter">
                        Power-Ups, Not Mark-Ups
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Block 1 */}
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <img
                                src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1768747267/6dc2726f-447c-40fd-9184-69d9f3dbe147.png"
                                alt="VR Training"
                                className="w-full md:w-1/2 object-cover rounded-sm shadow-[0_0_20px_rgba(213,0,249,0.3)]"
                            />
                            <p className="font-oswald text-lg md:text-xl font-light text-gray-300">
                                <span className="text-white font-medium block mb-2 text-2xl">VR Training & Simulation:</span>
                                Train employees in a safe, virtual environment. Great for heavy machinery, safety drills, or complex procedures.
                            </p>
                        </div>

                        {/* Block 2 */}
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                            <img
                                src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1768747272/ac1b28f6-bc0b-4660-b0c9-55e106966887.png"
                                alt="VR Gaming"
                                className="w-full md:w-1/2 object-cover rounded-sm shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                            />
                            <p className="font-oswald text-lg md:text-xl font-light text-gray-300">
                                <span className="text-white font-medium block mb-2 text-2xl">VR Gaming:</span>
                                We build immersive games that take full advantage of motion controls and 360-degree environments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AUGMENTED REALITY SECTION - Replaces CTA */}
            <section className="pt-24 pb-0 relative overflow-hidden bg-gradient-to-r from-[#2563EB] to-[#1E1B4B]">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center md:items-end">
                    <div className="z-10 text-left pb-12 md:pb-32 self-center">
                        <h2 className="text-5xl md:text-8xl font-bebas text-white mb-6">Augmented Reality</h2>
                        <p className="font-oswald text-2xl md:text-3xl text-white/90 font-light leading-tight mb-12 max-w-lg">
                            Let customers scan a product package to see it come to life.
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#4C1D95] text-white font-oswald text-xl px-12 py-4 rounded-full uppercase tracking-wider hover:bg-[#5B21B6] transition-all shadow-lg hover:shadow-xl">
                                Lets Innovate
                            </button>
                        </Link>
                    </div>
                    <div className="relative z-10 flex justify-end h-full">
                        <img
                            src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1768745578/cbf57e62-e045-42a0-b6d9-2060b4a0d454.png"
                            alt="Augmented Reality Headset"
                            className="w-full max-w-lg object-contain block leading-none"
                        />
                    </div>
                </div>
                {/* Gradient Overlay for smooth blending if needed */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-900/40 mix-blend-overlay pointer-events-none"></div>
            </section>
            {/* CONTACT SECTION - Final Container */}
            <section className="bg-[#0000B3] min-h-screen grid md:grid-cols-2">
                {/* Left Image Side */}
                <div className="relative h-64 md:h-auto overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1768747309/1277d925-0b66-4fa4-bfe0-e298fecaa80e.png"
                        alt="VR Experience"
                        className="absolute inset-0 w-[200%] h-full object-cover object-left"
                    />
                </div>

                {/* Right Form Side */}
                <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
                    <h2 className="text-5xl md:text-8xl font-bebas text-white mb-8 md:mb-12 text-center md:text-left">CONTACT US</h2>

                    <div className="bg-[#F1F5F9] p-8 rounded-sm shadow-2xl">
                        <form className="space-y-6">
                            <div>
                                <label className="block font-oswald text-[#0F172A] mb-2 uppercase tracking-wide text-sm">Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-[#E2E8F0] border border-gray-300 p-3 outline-none focus:border-[#0000B3] transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block font-oswald text-[#0F172A] mb-2 uppercase tracking-wide text-sm">Email address</label>
                                <input
                                    type="email"
                                    className="w-full bg-[#E2E8F0] border border-gray-300 p-3 outline-none focus:border-[#0000B3] transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block font-oswald text-[#0F172A] mb-2 uppercase tracking-wide text-sm">Leave a message</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-[#E2E8F0] border border-gray-300 p-3 outline-none focus:border-[#0000B3] transition-colors"
                                ></textarea>
                            </div>
                            <button className="w-full bg-black text-white font-oswald text-xl py-4 rounded-full hover:bg-gray-900 transition-all uppercase tracking-wider">
                                Submit
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-4 font-sans">
                                Your privacy is important to us. No data is shared with third parties.
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VR;
