import React from 'react';
import { Link } from 'react-router-dom';

const WebApps = () => {
    // Merged Assets
    const assets = {
        web: [
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766393689/48707790-3cf9-4b45-afd1-f35dbe11fc7e.png", // Creative 1
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766393469/48c6bc10-99a6-46cb-9621-39e34ee5beb6.png", // Creative 2
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766393445/25cf4ea0-5ad9-4869-b7fb-1c33e631b55e.png", // Creative 3
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766393374/e997db8e-f93f-4118-8dbe-1f3bc12f2d9f.png", // Creative 4
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766393356/2ce2414b-a37c-4488-8f16-57786a524d58.png", // Creative 5
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766392999/81c500d3-c6f1-40a1-b821-368f4e11f491.png"  // Creative 6
        ],
        app: [
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766393921/71b176a7-2f8a-498b-b060-2d0fd3ed13d9.png",
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766393892/0c009dba-c4fc-48a5-8cd2-d5cf446c833b.png",
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766393820/cea3d78a-fae7-4717-b884-1732f3082662.png",
            "https://res.cloudinary.com/df7s2xmz1/image/upload/v1766393746/3a02916d-831e-4ccd-9ccd-e607810671ae.png"
        ]
    };

    const projects = [
        { title: "Odyssey Travels", category: "Web • Travel", desc: "Immersive booking experience for luxury world tours and expeditions.", img: assets.web[1], tags: ["Next.js", "Mapbox", "Stripe"] },
        { title: "Fintech Dashboard", category: "App • Finance", desc: "Secure, real-time banking dashboard handling millions of transactions.", img: assets.app[0], tags: ["AES-256", "Sockets", "Biometrics"] },
        { title: "Aura Studios", category: "Web • Agency", desc: "Minimalist portfolio showcasing award-winning brand identities.", img: assets.web[3], tags: ["Vue.js", "GSAP", "WebGL"] },
        { title: "Social Connect", category: "App • Social", desc: "Community platform with live feeds, chat, and rich media support.", img: assets.app[1], tags: ["WebRTC", "Push", "Content Algo"] },
        { title: "Lumina Vision", category: "Web • Portfolio", desc: "High-performance gallery for a professional photography agency.", img: assets.web[5], tags: ["Next.js", "Cloudinary", "LazyLoad"] }
    ];

    return (
        <div className="bg-white text-[#111827] min-h-screen font-sans selection:bg-black selection:text-white">

            {/* HERO SECTION */}
            <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 border-b border-gray-100">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gray-200 via-black to-gray-200"></div>
                <span className="inline-block py-1 px-4 rounded-full bg-gray-100 text-gray-600 font-oswald text-sm tracking-widest uppercase mb-8">
                    Web & Mobile Excellence
                </span>
                <h1 className="text-6xl md:text-9xl font-bebas leading-[0.85] mb-8 text-black">
                    Digital Experiences <br /> <span className="text-gray-400">That Scale</span>
                </h1>
                <p className="max-w-2xl font-light text-xl text-gray-600 leading-relaxed font-sans mb-12">
                    We engineer high-performance websites and native apps that look stunning, load instantly, and drive real business growth.
                </p>
                <Link to="/contact">
                    <button className="bg-black text-white px-12 py-4 font-bebas text-2xl hover:bg-gray-800 transition-all duration-300 shadow-xl">
                        Start Your Project
                    </button>
                </Link>
            </section>

            {/* SELECTED WORKS (Vertical/Immersive) */}
            <section className="py-32 px-6 bg-gray-50">
                <div className="container mx-auto">
                    <div className="mb-24 text-center">
                        <h2 className="text-6xl font-bebas text-black mb-4">Selected Works</h2>
                        <div className="w-20 h-1 bg-black mx-auto"></div>
                    </div>

                    <div className="space-y-32">
                        {projects.map((project, idx) => (
                            <div key={idx} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <div className="lg:w-3/5 w-full group cursor-pointer">
                                    <div className="relative overflow-hidden rounded-sm shadow-2xl transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 pointer-events-none"></div>
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-auto transform group-hover:scale-[1.03] transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                                <div className="lg:w-2/5 w-full space-y-6">
                                    <div className="flex items-center gap-4">
                                        <span className="text-4xl">{project.category.includes('Web') ? '🖥️' : '📱'}</span>
                                        <span className="font-oswald uppercase text-xs tracking-widest text-gray-400">{project.category}</span>
                                    </div>
                                    <h3 className="text-5xl font-bebas text-black leading-none">{project.title}</h3>
                                    <p className="font-sans text-gray-500 text-lg leading-relaxed font-light">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-xs font-oswald uppercase tracking-wider text-gray-600">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHAT WE BUILD (Zig-Zag Layout) */}
            <section className="py-24 px-6 overflow-hidden bg-white">
                <div className="container mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bebas text-[#111827]">Capabilities</h2>
                        <p className="font-oswald text-gray-500 mt-2">End-to-end solutions for every screen.</p>
                    </div>
                    {[
                        { title: "High-Performance Websites", subtitle: "Speed & SEO First", desc: "From corporate platforms to creative portfolios. We build fast, clean, and highly polished websites that make your brand stand out.", img: assets.web[2], tags: ["Next.js", "SEO", "Analytics"] },
                        { title: "Native & Mobile Apps", subtitle: "iOS & Android", desc: "Fluid, responsive applications built for the modern mobile user. Offline support, push notifications, and native device integration.", img: assets.app[3], tags: ["React Native", "Flutter", "HealthKit"] },
                        { title: "E-Commerce Solutions", subtitle: "Scale Your Sales", desc: "Custom shopping experiences that convert. Secure payments, inventory management, and seamless checkout flows.", img: assets.web[0], tags: ["Shopify", "Stripe", "Dashboard"] },
                        { title: "Enterprise Platforms", subtitle: "Streamline Operations", desc: "Internal tools that eliminate bottlenecks. Automated workflows, data visualization, and role-based access control.", img: assets.app[2], tags: ["SaaS", "Cloud", "Security"] }
                    ].map((item, idx) => (
                        <div key={idx} className={`flex flex-col md:flex-row gap-16 items-center mb-32 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="flex-1 w-full">
                                <div className="bg-gray-50 p-8 rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 hover:shadow-3xl transition-shadow duration-500 group border border-gray-100">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-auto transform group-hover:scale-[1.02] transition-transform duration-700 rounded-xl"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 space-y-8">
                                <h3 className="text-5xl font-bebas text-[#111827]">{item.title}</h3>
                                <p className="font-oswald text-black tracking-widest uppercase text-sm font-medium border-b-2 border-black inline-block pb-1">{item.subtitle}</p>
                                <p className="font-sans text-gray-500 text-lg leading-loose">{item.desc}</p>

                                <div className="flex flex-wrap gap-3 pt-4">
                                    {item.tags.map((tag, i) => (
                                        <span key={i} className="px-4 py-2 bg-gray-100 text-gray-800 text-xs font-bold uppercase tracking-wide rounded-sm">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* KNOWLEDGE HUB BENTO GRID (User Request) */}
            <section className="py-24 px-6 bg-white">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bebas text-[#111827]">Enterprise Portals</h2>
                        <p className="font-oswald text-gray-500 mt-2">Centralize your organization's knowledge.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[600px]">

                        {/* 1. David Santos (Top Left) */}
                        <div className="md:col-span-1 bg-[#E5E7EB] rounded-3xl p-6 flex flex-col justify-center items-center text-center relative group overflow-hidden">
                            <div className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center mb-4 text-xl">❄️</div>
                            <h3 className="font-bold text-lg leading-tight">David Santos <br /><span className="font-normal text-sm text-gray-600">and Partners</span></h3>
                        </div>

                        {/* 2. Brand & Marketing (Top Middle-Left) */}
                        <div className="md:col-span-1 bg-[#FF5100] rounded-3xl p-6 relative group transition-transform hover:-translate-y-1">
                            <div className="absolute top-4 right-4 bg-white/20 p-1 rounded-full"><span className="text-white">＋</span></div>
                            <h3 className="absolute bottom-6 left-6 text-white text-2xl font-normal leading-tight">Brand & <br />Marketing <br />Central</h3>
                        </div>

                        {/* 3. Events Calendar (Top Middle-Right) */}
                        <div className="md:col-span-1 bg-[#E5E7EB] rounded-3xl p-6 relative group transition-transform hover:-translate-y-1">
                            <div className="absolute top-4 right-4 bg-[#9D00FF] p-1 rounded-full w-6 h-6 flex items-center justify-center"><span className="text-white text-xs">＋</span></div>
                            <h3 className="absolute bottom-6 left-6 text-gray-800 text-2xl font-normal leading-tight">Events <br />Calendar</h3>
                        </div>

                        {/* 4. Global News (Top Right) */}
                        <div className="md:col-span-1 bg-[#FF003C] rounded-3xl p-6 relative group transition-transform hover:-translate-y-1">
                            <div className="absolute top-4 right-4 bg-white/20 p-1 rounded-full"><span className="text-white">＋</span></div>
                            <h3 className="absolute bottom-6 left-6 text-white text-2xl font-normal leading-tight">Global <br />News</h3>
                        </div>

                        {/* 5. Knowledge Hub (Bottom Left - Tall? No, in provided image it looks like the big red one is tall Left, let's adjust layout to match image exactly) */}
                        {/* Actually, looking at image: 
                            Left Column: 
                                Top: Small Gray (David Santos)
                                Bottom: Tall Red (Knowledge Hub) -> Wait, image shows Knowledge Hub is tall and on the LEFT or is it a separate layout?
                                Let's look at image again.
                                Leftmost column: 
                                    Top: Small Gray Card "David Santos".
                                    Bottom: Large Red Vertical Card "KNOWLEDGE HUB".
                                Middle Columns:
                                    Top Row: Orange (Brand), Gray (Events).
                                    Bottom Row: Gray (HR), Purple (L&D).
                                Right Column:
                                    Top: Red (Global News) -> Wait, Global News is top right.
                                    Bottom: Image (People Directory).
                            
                            Okay, standard 4-column grid doesn't fit perfectly unless we use row spans.
                            Let's maximize CSS Grid.
                        */}
                    </div>

                    {/* RETHINKING GRID TO MATCH IMAGE EXACTLY */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">

                        {/* 1. David Santos (Top Left - 1x1) */}
                        <div className="bg-[#E5E7EB] rounded-3xl p-6 flex flex-col justify-center items-center text-center relative">
                            <div className="w-12 h-12 border-2 border-gray-400 rounded-full flex items-center justify-center mb-4 grayscale">⌘</div>
                            <h3 className="font-bold text-gray-800 text-lg leading-tight">David Santos <br /><span className="font-normal text-sm text-gray-600">and Partners</span></h3>
                        </div>

                        {/* 2. Brand & Marketing (Top Mid-Left - 1x1) */}
                        <div className="bg-[#FF5100] rounded-3xl p-6 relative hover:scale-[1.02] transition-transform cursor-pointer">
                            <div className="absolute top-4 right-4 text-white text-xl">⊕</div>
                            <h3 className="absolute bottom-6 left-6 text-white text-2xl font-sans leading-tight">Brand & <br />Marketing <br />Central</h3>
                        </div>

                        {/* 3. Events Calendar (Top Mid-Right - 1x1) */}
                        <div className="bg-[#E5E7EB] rounded-3xl p-6 relative hover:scale-[1.02] transition-transform cursor-pointer">
                            <div className="absolute top-4 right-4 text-[#9D00FF] text-xl">⊕</div>
                            <h3 className="absolute bottom-6 left-6 text-gray-800 text-2xl font-sans leading-tight">Events <br />Calendar</h3>
                        </div>

                        {/* 4. Global News (Top Right - 1x1) */}
                        <div className="bg-[#FF003C] rounded-3xl p-6 relative hover:scale-[1.02] transition-transform cursor-pointer">
                            <div className="absolute top-4 right-4 text-white text-xl">⊕</div>
                            <h3 className="absolute bottom-6 left-6 text-white text-2xl font-sans leading-tight">Global <br />News</h3>
                        </div>

                        {/* 5. KNOWLEDGE HUB (Left - 1x2 Vertical) -> Actually positioned below David Santos?
                           In the image, "David Santos" is top left. "Knowledge Hub" is BIG RED below it? Or is Knowledge Hub the big one on the left taking up 2 slots?
                           Image: Big Red "KNOWLEDGE HUB" is on the LEFT, spanning vertically 2 rows.
                           David Santos is ... floating above it? Or is it a separate small card?
                           Ah, looking closely at the crop: David Santos is Top Left. Knowledge hub is below it?
                           Wait, the "Knowledge Hub" red card is huge.
                           Let's assume:
                           Col 1:
                              Row 1 (Small): David Santos
                              Row 2-3 (Tall): Knowledge Hub
                           Col 2:
                              Row 1: Brand
                              Row 2: HR
                           Col 3:
                              Row 1: Events
                              Row 2: Learning
                           Col 4:
                              Row 1: Global News
                              Row 2-3: People Directory (Image)
                        */}

                        {/* Let's try a specific grid-template-areas or just spans */}

                        {/* COL 1 */}
                        <div className="md:row-span-2 flex flex-col gap-4">
                            <div className="h-[180px] bg-[#E5E7EB] rounded-3xl p-6 flex flex-col justify-center items-center text-center relative">
                                <div className="w-10 h-10 border-2 border-gray-500 rounded-full flex items-center justify-center mb-2">◈</div>
                                <h3 className="font-bold text-gray-800 text-md leading-tight">David Santos <br /><span className="font-normal text-sm text-gray-600">and Partners</span></h3>
                            </div>
                            <div className="flex-1 bg-[#FF003C] rounded-3xl p-8 relative flex flex-col justify-end group cursor-pointer hover:shadow-xl transition-all">
                                <h3 className="text-white text-4xl font-sans uppercase mb-4">Knowledge <br />Hub</h3>
                                <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white text-2xl group-hover:bg-white group-hover:text-[#FF003C] transition-colors">→</div>
                            </div>
                        </div>

                        {/* COL 2 */}
                        <div className="md:row-span-2 flex flex-col gap-4">
                            {/* Brand */}
                            <div className="flex-1 bg-[#FF5100] rounded-3xl p-6 relative min-h-[200px] hover:scale-[1.02] transition-transform">
                                <div className="absolute top-4 right-4 text-white text-xl">⊕</div>
                                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-sans leading-tight">Brand & <br />Marketing <br />Central</h3>
                            </div>
                            {/* HR */}
                            <div className="flex-1 bg-[#E5E7EB] rounded-3xl p-6 relative min-h-[200px] hover:scale-[1.02] transition-transform">
                                <div className="absolute top-4 right-4 text-[#FF003C] text-xl">⊕</div>
                                <h3 className="absolute bottom-6 left-6 text-gray-800 text-2xl font-sans leading-tight">Human <br />Resources <br />System</h3>
                            </div>
                        </div>

                        {/* COL 3 */}
                        <div className="md:row-span-2 flex flex-col gap-4">
                            {/* Events */}
                            <div className="flex-1 bg-[#E5E7EB] rounded-3xl p-6 relative min-h-[200px] hover:scale-[1.02] transition-transform">
                                <div className="absolute top-4 right-4 text-[#9D00FF] text-xl">⊕</div>
                                <h3 className="absolute bottom-6 left-6 text-gray-800 text-2xl font-sans leading-tight">Events <br />Calendar</h3>
                            </div>
                            {/* Learning */}
                            <div className="flex-1 bg-[#9D00FF] rounded-3xl p-6 relative min-h-[200px] hover:scale-[1.02] transition-transform">
                                <div className="absolute top-4 right-4 text-white text-xl">⊕</div>
                                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-sans leading-tight">Learning & <br />Development <br />Community</h3>
                            </div>
                        </div>

                        {/* COL 4 */}
                        <div className="md:row-span-2 flex flex-col gap-4">
                            {/* Global News */}
                            <div className="h-[200px] bg-[#FF003C] rounded-3xl p-6 relative hover:scale-[1.02] transition-transform">
                                <div className="absolute top-4 right-4 text-white text-xl">⊕</div>
                                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-sans leading-tight">Global <br />News</h3>
                            </div>
                            {/* People Directory */}
                            <div className="flex-1 bg-gray-800 rounded-3xl relative overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="People" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-overlay opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute top-4 right-4 text-[#FF5100] text-xl z-10">⊕</div>
                                <h3 className="absolute bottom-6 left-6 text-white text-2xl font-sans leading-tight z-10">People <br />Directory</h3>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* TECH STACK GRID (Combined) */}
            <section className="py-24 bg-gray-50 border-y border-gray-200">
                <div className="container mx-auto px-6 text-center mb-16">
                    <h2 className="text-5xl font-bebas text-[#111827]">Technological Backbone</h2>
                </div>
                <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {[
                        { name: "React / Next.js", desc: "Frontend Core" },
                        { name: "Node.js", desc: "Scalable Backend" },
                        { name: "React Native", desc: "Cross-Platform" },
                        { name: "Flutter", desc: "High Performance" },
                        { name: "AWS", desc: "Cloud Infra" },
                        { name: "Firebase", desc: "Real-time DB" },
                        { name: "TailwindCSS", desc: "Modern UI" },
                        { name: "Three.js", desc: "3D Web Graphics" },
                        { name: "PostgreSQL", desc: "Relational DB" },
                        { name: "GraphQL", desc: "Efficient Data" },
                        { name: "Docker", desc: "Containerization" },
                        { name: "Figma", desc: "UI/UX Design" }
                    ].map((tech, i) => (
                        <div key={i} className="bg-white p-6 border border-gray-200 hover:border-black transition-colors group">
                            <h4 className="font-bebas text-xl mb-2 text-gray-400 group-hover:text-black transition-colors">{tech.name}</h4>
                            <p className="font-oswald text-[10px] text-gray-500 uppercase tracking-wider">{tech.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* BUILT FOR SPEED */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bebas mb-4">Built for Speed & Design</h2>
                        <p className="font-oswald text-gray-500">How we ensure your digital product performs.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-10 border-t-4 border-black shadow-sm group hover:shadow-xl transition-all">
                            <h3 className="text-3xl font-bebas mb-4">Visual Psychology</h3>
                            <ul className="space-y-3 font-oswald text-gray-600 text-sm">
                                <li>• Strong color psychology</li>
                                <li>• Readable typography</li>
                                <li>• Clean modern layouts</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-10 border-t-4 border-black shadow-sm group hover:shadow-xl transition-all">
                            <h3 className="text-3xl font-bebas mb-4">Performance</h3>
                            <ul className="space-y-3 font-oswald text-gray-600 text-sm">
                                <li>• <span className="text-green-600 font-bold">99+</span> Lighthouse Scores</li>
                                <li>• Sub-second load times</li>
                                <li>• Smooth 60fps animations</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-10 border-t-4 border-black shadow-sm group hover:shadow-xl transition-all">
                            <h3 className="text-3xl font-bebas mb-4">Scalability</h3>
                            <p className="font-oswald text-gray-600 text-sm leading-relaxed">
                                Architecture built to handle growth. From your first 100 users to your first million, our code scales with you effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-[#111827] text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-6xl md:text-8xl font-bebas mb-8">Ready to Build?</h2>
                    <p className="font-oswald text-gray-400 text-xl mb-12 max-w-xl mx-auto">
                        Whether it's a complex web app or a sleek mobile experience, we have the team to deliver.
                    </p>
                    <div className="flex justify-center gap-6">
                        <Link to="/contact">
                            <button className="bg-white text-black px-12 py-5 font-bebas text-2xl hover:bg-gray-200 transition-colors">
                                Book Strategy Call
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default WebApps;
