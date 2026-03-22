import React from 'react';
import { Link } from 'react-router-dom';

const ArchViz = () => {
    // Assets from request
    const assets = {
        hero: "https://bloodnexusstudio.in/otassets/img136_-_Copy_hkzx0e.jpg",
        featured: [
            "https://bloodnexusstudio.in/otassets/img202_pgtzkj.jpg",
            "https://bloodnexusstudio.in/otassets/img188_ddiadn.jpg",
            "https://bloodnexusstudio.in/otassets/img174_pipnrf.jpg"
        ],
        gallery: [
            "https://bloodnexusstudio.in/otassets/img170_hof4wi.jpg",
            "https://bloodnexusstudio.in/otassets/img164_cw4wvb.jpg",
            "https://bloodnexusstudio.in/otassets/img150_nmhqoj.jpg",
            "https://bloodnexusstudio.in/otassets/img142_dqnxlm.jpg",
            "https://bloodnexusstudio.in/otassets/img146_-_Copy_feaca2.jpg",
            "https://bloodnexusstudio.in/otassets/img134_qcikkq.jpg"
        ]
    };

    return (
        <div className="bg-[#F2F5F0] text-[#2F3E30] min-h-screen font-sans selection:bg-[#E6BEAE] selection:text-[#2F3E30]">

            {/* HERO SECTION */}
            <section className="relative h-screen flex flex-col justify-end pb-20 px-6 md:px-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video
                        src="https://bloodnexusstudio.in/otassets/Timeline_1_xahnnr.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#2F3E30]/20 mix-blend-multiply" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#F2F5F0] via-[#F2F5F0]/60 to-transparent" />
                </div>

                <div className="relative z-10 max-w-5xl">
                    <p className="font-oswald text-[#B28B84] text-lg tracking-[0.2em] mb-4 uppercase font-medium">
                        REALISTIC ARCHITECTURE VISUALS IN REAL-TIME
                    </p>
                    <h1 className="text-7xl md:text-9xl font-bebas text-[#2F3E30] leading-[0.85] mb-8">
                        Reshaping <br /> <span className="text-[#B28B84]">Perspective</span>
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                       
                        <p className="max-w-md text-[#4A5D4B] font-oswald text-sm leading-relaxed border-l-2 border-[#B28B84] pl-4">
                            We bring real-estate ideas to life with detailed interior and exterior renders, walkthrough videos, and VR experiences powered by real-time engines.
                        </p>
                    </div>
                </div>
            </section>

            {/* INTRO / PHILOSOPHY - "More than Renders" */}
            <section className="py-24 px-6 bg-[#E8EDDF]">
                <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-bebas text-[#2F3E30] mb-6 leading-none">
                            More Than Renders <br /> <span className="text-[#B28B84] italic">Atmospheres</span>
                        </h2>
                        <div className="space-y-6 font-oswald text-[#4A5D4B] text-lg font-light">
                            <p>
                                Our visuals do more than show a building—they help people feel the space. We add:
                            </p>
                            <ul className="space-y-2 list-disc list-inside marker:text-[#B28B84]">
                                <li>Warm, natural lighting</li>
                                <li>High-quality materials</li>
                                <li>Realistic props & décor</li>
                                <li>Smooth camera paths</li>
                                <li>Accurate proportions</li>
                            </ul>
                            <p>
                                Clients use our visuals to pitch projects faster, close deals confidently, and give buyers a clear idea of the final environment.
                            </p>
                        </div>
                        {/* Tools We Use */}
                        <div className="mt-10">
                            <h3 className="text-xl font-bebas text-[#2F3E30] mb-4">Tools We Use</h3>
                            <div className="flex flex-wrap gap-4 text-sm font-oswald uppercase text-[#4A5D4B]">
                                {['Unreal Engine 5', 'Lumen', 'Twinmotion', 'Blender', 'Megascans', 'CAD-to-FBX'].map(tool => (
                                    <span key={tool} className="border border-[#B28B84] px-3 py-1 rounded-full">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 border-2 border-[#B28B84] z-0 translate-x-4 translate-y-4"></div>
                        <img
                            src={assets.featured[0]}
                            alt="Interior Detail"
                            className="relative z-10 w-full shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* SERVICES CAROUSEL / HIGHLIGHTS - "What We Deliver" */}
            <section className="py-24 bg-[#F2F5F0] overflow-hidden">
                <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                    <h2 className="text-7xl font-bebas text-[#2F3E30] opacity-10">Capabilities</h2>
                    <h2 className="text-4xl font-bebas text-[#2F3E30] absolute mt-10 ml-2">What We Deliver</h2>
                </div>

                <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
                    {[
                            { title: "Exterior Rendering", img: 'https://bloodnexusstudio.in/otassets/006e3437-097b-4b4b-9875-c19381c01257.png', text: "Photorealistic facades and environments that sell the vision." },
                        { title: "Interior Rendering", img: assets.featured[2], text: "Detailed spaces with mood, lighting, and realistic decor." },
                        { title: "4K/8K Walkthroughs", img: 'https://bloodnexusstudio.in/otassets/Archviz_2_2_1_r86kzn.mp4', isVideo: true, text: "Cinematic video tours that showcase property flow." },
                        { title: "VR Property Tours", img: 'https://bloodnexusstudio.in/otassets/ed72e37d-c964-4050-9d88-3d192c16ebbb.png', text: "Immersive interactive walkthroughs for pre-sales." },
                        { title: "Township Visualization", img: 'https://bloodnexusstudio.in/otassets/e45eae69-265e-482f-9ce7-5085e83cca3f.png', text: "Large-scale masterplans and aerial views." },
                        { title: "Lighting & Materials", img: assets.gallery[3], text: "Material selection and lighting studies." }
                    ].map((item, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="overflow-hidden mb-6 relative h-[300px]">
                                <div className="absolute inset-0 bg-[#2F3E30]/20 group-hover:bg-transparent transition-colors z-10" />
                                {item.isVideo ? (
                                    <video
                                        src={item.img}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                )}
                            </div>
                            <h3 className="text-3xl font-bebas text-[#2F3E30] group-hover:text-[#B28B84] transition-colors mb-2">0{idx + 1} . {item.title}</h3>
                            <p className="font-oswald text-[#4A5D4B] text-sm max-w-xs">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* MASONRY GALLERY */}
            <section className="py-24 bg-[#2F3E30] text-[#F2F5F0]">
                <div className="container mx-auto px-6 mb-16 text-center">
                    <span className="text-[#B28B84] font-oswald tracking-[0.3em] uppercase text-sm">Portfolio</span>
                    <h2 className="text-6xl font-bebas mt-4">Selected Works</h2>
                </div>

                <div className="container mx-auto px-6">
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {assets.gallery.map((img, i) => (
                            <div key={i} className="break-inside-avoid relative group">
                                <img
                                    src={img}
                                    alt={`Gallery Item ${i}`}
                                    className="w-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-[#B28B84]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <button className="text-[#2F3E30] font-bebas text-xl border-2 border-[#2F3E30] px-6 py-2 hover:bg-[#2F3E30] hover:text-[#E6BEAE] transition-colors">
                                        View Detail
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 bg-[#E6BEAE] text-center px-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-[#F2F5F0] rounded-full mix-blend-overlay filter blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B28B84] rounded-full mix-blend-overlay filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

                <div className="relative z-10">
                    <h2 className="text-6xl md:text-8xl font-bebas text-[#2F3E30] mb-8">Bring Your Vision to Life</h2>
                    <p className="font-oswald text-[#2F3E30] text-xl mb-12 max-w-2xl mx-auto">
                        Ready to visualize the future? Let's create something extraordinary together.
                    </p>
                    <Link to="/contact">
                        <button className="bg-[#2F3E30] text-[#E8EDDF] font-bebas text-3xl px-16 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                            Start a Project
                        </button>
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default ArchViz;
