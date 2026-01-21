import React from 'react';

const Home = () => {
    return (
        <div className="bg-black text-white min-h-screen">
            <div className="container mx-auto px-4 py-20 text-center">
                <h1 className="headline text-6xl mb-8">BLOODNEXUS</h1>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                    Immersive Gaming, Verified Realities, and Digital Perfection.
                    Building worlds that look beautiful, run smoothly, and feel fun.
                </p>
                <div className="flex justify-center gap-6">
                    <a href="/game-dev" className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded uppercase tracking-wider transition-colors">
                        Explore Games
                    </a>
                    <a href="/contact" className="px-8 py-3 border border-white hover:bg-white hover:text-black text-white font-bold rounded uppercase tracking-wider transition-colors">
                        Contact Us
                    </a>
                </div>
            </div>

            {/* SERVICES OVERVIEW */}
            <section className="py-20 bg-zinc-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bebas text-center mb-16">Core Expertise</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Architectural Visualisation",
                                desc: "We bring your building ideas to life with realistic 3D images and videos that show exactly how the space will look once it’s built.",
                                link: "/arch-viz"
                            },
                            {
                                title: "Game Development",
                                desc: "We build complete game worlds—from characters and environments to gameplay and visual effects. Our focus is on making games that look beautiful and run smoothly.",
                                link: "/game-dev"
                            },
                            {
                                title: "VR Games & Immersive Experiences",
                                desc: "We create virtual reality experiences that feel natural and believable. Players can move, interact, and explore worlds that react to them.",
                                link: "/vr"
                            },
                            {
                                title: "Mobile & Web App Development",
                                desc: "We design and build apps and websites that are fast, modern, and easy for anyone to use. Everything is planned with the user in mind.",
                                link: "/apps"
                            },
                            {
                                title: "3D Art & Production",
                                desc: "High-quality 3D models and visuals for games, films, animation, and product showcases. Detailed, realistic, and optimized assets.",
                                link: "/3d-art"
                            }
                        ].map((service, idx) => (
                            <a href={service.link} key={idx} className="block group">
                                <div className="bg-black p-8 border border-zinc-800 hover:border-red-600 transition-colors h-full flex flex-col">
                                    <h3 className="text-2xl font-bebas mb-4 group-hover:text-red-600 transition-colors">{service.title}</h3>
                                    <p className="text-gray-400 font-oswald text-sm leading-relaxed mb-6 flex-grow">
                                        {service.desc}
                                    </p>
                                    <span className="text-red-500 font-bebas uppercase tracking-widest text-sm flex items-center gap-2 group-hover:gap-4 transition-all">
                                        Explore <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
