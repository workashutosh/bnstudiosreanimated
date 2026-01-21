import React from "react";

const ThreeDArt = () => {
    return (
        <>
            {/* Scoped Fonts */}
            <style>
                {`
          @import url('https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@200..800&display=swap');

          .threeD-anton {
            font-family: 'Anton', sans-serif;
          }

          .threeD-manrope {
            font-family: 'Manrope', sans-serif;
          }
        `}
            </style>

            <div className="bg-[#F7F6E7] min-h-screen">
                <section className="w-full px-6 md:px-16 min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                        {/* LEFT CONTENT */}
                        <div>
                            <h1 className="threeD-anton text-[90px] md:text-[150px] leading-[0.9] text-[#FF5A00] tracking-tight">
                                STAND OUT.
                                <br />
                                SELL MORE.
                            </h1>

                            <p className="threeD-manrope mt-8 text-lg text-black max-w-xl leading-relaxed">
                                Visuals that punch above their weight. Great games live and die
                                by their art. At{" "}
                                <span className="text-[#f12710] font-bold">
                                    Blood Nexus Studios
                                </span>
                                , we combine artistic flair with technical know-how. We don’t
                                just make things look cool; we make sure they work perfectly in
                                your game engine, optimized for performance and ready for
                                gameplay.
                            </p>

                            <button className="threeD-anton mt-10 bg-[#D92D6A] text-white text-xl px-12 py-4 rounded-full shadow-[0_8px_0_#A91E4D] hover:translate-y-[4px] hover:shadow-[0_4px_0_#A91E4D] transition-all">
                                COUNT ME IN!
                            </button>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-center">
                            <div className="rounded-4xl">
                                <img
                                    //src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1769016946/88835838-efed-4010-b169-4e68f75efa52.png"
                                    //src="https://i.pinimg.com/736x/cf/85/2f/cf852f48476cc90984e710c2d966278d.jpg"
                                    src="https://i.pinimg.com/736x/de/ac/bc/deacbc994af99602c7c699e89bc29b98.jpg"
                                    alt="3D Art"
                                    className="w-[520px] max-h-[500px] object-contain rounded-4xl"
                                />
                            </div>
                        </div>

                    </div>
                </section>

                {/* SECTION 2: 2D ART & CREATIVITY */}
                <section className="w-full px-6 md:px-16 py-24">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                        {/* LEFT IMAGE - (Using placeholder based on ref layout, user didn't provide separate asset) */}
                        <div className="flex justify-center md:justify-start order-2 md:order-1">
                            <div className="relative w-full max-w-[500px] aspect-[4/5] bg-[#E0DBC5] rounded-[40px] overflow-hidden">
                                {/* Since no clean asset was provided, I am using a placeholder colored block to represent the image area shown in the reference (Shoes/Bag). 
                        The user can replace this src with the actual asset later. */}
                                <img
                                    src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                    alt="2D Art Creative"
                                    className="w-full h-full object-cover mix-blend-multiply opacity-80"
                                />
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="order-1 md:order-2">
                            <h2 className="threeD-anton text-[50px] md:text-[70px] lg:text-[80px] leading-tight text-[#FF5A00] tracking-tight mb-8">
                                2D ART & CREATIVITY
                            </h2>

                            <p className="threeD-manrope text-lg text-black leading-relaxed mb-12">
                                Every great project starts with a vision. Our 2D team lays the foundation, creating the look and feel that defines your game's identity.
                            </p>

                            <div className="space-y-8">
                                {/* Item 1 */}
                                <div className="group">
                                    <div className="flex items-start gap-6 pb-8 border-b border-black/20">
                                        <span className="threeD-anton text-2xl mt-1">1</span>
                                        <div>
                                            <h3 className="threeD-manrope font-bold text-xl mb-2">Concept Art & Storyboarding</h3>
                                            <p className="threeD-manrope text-gray-700 leading-relaxed">
                                                We visualize your ideas early, helping you iterate fast before committing to expensive 3D production.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="group">
                                    <div className="flex items-start gap-6 pb-8 border-b border-black/20">
                                        <span className="threeD-anton text-2xl mt-1">2</span>
                                        <div>
                                            <h3 className="threeD-manrope font-bold text-xl mb-2">Character Design & Caricatures</h3>
                                            <p className="threeD-manrope text-gray-700 leading-relaxed">
                                                From stylized 2D cartoons to detailed character sheets, we create memorable personalities.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="group">
                                    <div className="flex items-start gap-6 pb-8 border-b border-black/20">
                                        <span className="threeD-anton text-2xl mt-1">3</span>
                                        <div>
                                            <h3 className="threeD-manrope font-bold text-xl mb-2">UI/UX Design</h3>
                                            <p className="threeD-manrope text-gray-700 leading-relaxed">
                                                We design game interfaces that are intuitive and sleek, ensuring players spend less time confused and more time playing.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* SECTION 3: 3D MODELING & ANIMATION */}
                <section className="w-full px-6 md:px-16 py-24 border-t border-black/5">
                    <div className="max-w-7xl mx-auto">

                        {/* TITLE */}
                        <h2 className="threeD-anton text-[70px] md:text-[100px] leading-[0.85] text-[#FF5A00] tracking-tight mb-20 text-center uppercase">
                            3D Modeling & Animation
                        </h2>

                        {/* CONTENT GRID */}
                        <div className="grid md:grid-cols-3 gap-8">

                            {/* COL 1 */}
                            <div className="flex flex-col gap-8">
                                <p className="threeD-manrope text-lg text-black leading-snug">
                                    <span className="font-bold">High-Fidelity Modeling</span> that captures every detail, from hard-surface mechanical parts to organic creature designs.
                                </p>
                                <img
                                    src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1769017102/db52c33b-ddfb-4702-8e1b-09de85c5916b.png"
                                    alt="3D Process 1"
                                    className="w-full aspect-square object-cover rounded-[40px] shadow-sm hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                            {/* COL 2 */}
                            <div className="flex flex-col gap-8">
                                <p className="threeD-manrope text-lg text-black leading-snug">
                                    <span className="font-bold">Rigging & Animation</span> that brings static meshes to life with fluid motion, realistic physics, and expressive character acting.
                                </p>
                                <img
                                    src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1769017116/c79bede1-d11f-49a0-8739-ce2a6b71a6eb.png"
                                    alt="3D Process 2"
                                    className="w-full aspect-square object-cover rounded-[40px] shadow-sm hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                            {/* COL 3 */}
                            <div className="flex flex-col gap-8">
                                <p className="threeD-manrope text-lg text-black leading-snug">
                                    <span className="font-bold">Engine-Ready Optimization</span> ensuring your assets look great without killing your frame rate. Topology matters.
                                </p>
                                <img
                                    src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1769017164/79cbf53f-5536-48b8-a831-3eba7e64637b.png"
                                    alt="3D Process 3"
                                    className="w-full aspect-square object-cover rounded-[40px] shadow-sm hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTION 4: CREATIVE DIRECTION */}
                <section className="w-full bg-[#ff6105] px-6 md:px-16 py-24 text-center md:text-left overflow-hidden">
                    <div className="max-w-7xl mx-auto flex flex-col items-center md:items-start">

                        {/* TOP IMAGE */}
                        <div className="w-full mb-12">
                            <img
                                src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1769017264/e5d9f789-6d66-4cdf-bfa6-879e29441f4a.png"
                                alt="Creative Direction Stools"
                                className="w-full h-[400px] md:h-[500px] object-cover rounded-[50px] shadow-lg"
                            />
                        </div>

                        {/* SMALL TEXT */}
                        <p className="threeD-manrope text-black font-bold text-xl md:text-2xl mb-24 max-w-sm leading-tight text-left self-start pl-4 md:pl-0">
                            Reach out for any questions <br /> or suggestions.
                        </p>

                        {/* LARGE TITLE */}
                        <h2 className="threeD-anton text-[11vw] leading-none text-[#F7F6E7] w-full text-center uppercase tracking-tighter mix-blend-screen">
                            CREATIVE DIRECTION
                        </h2>

                    </div>
                </section>

                {/* SECTION 5: VISION */}
                <section className="w-full bg-[#bb0b1d] px-3 md:px-16 pt-0 pb-0 overflow-hidden">
                    <div className=" mx-auto grid md:grid-cols-2  items-end">

                        {/* LEFT TEXT */}
                        {/* LEFT TEXT */}
                        <div className=" md:pb-5">
                            <h2 className="threeD-anton text-[9vw] leading-[0.9] text-[#FF5A00] pb-20 tracking-tighter uppercase">
                                EVERY GREAT <br /> PROJECT <br /> STARTS WITH <br /> A VISION.
                            </h2>
                            <p className="threeD-anton text-xl md:text-2xl text-white uppercase tracking-wide leading-tight max-w-xl">
                                Our 2D team lays the foundation, creating the look and feel that defines your game's identity.
                            </p>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="flex justify-end">
                            <img
                                src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1769017339/cf460a22-16c2-42d7-9637-47890f63b1c3.png"
                                alt="Vision Character"
                                className="w-full max-w-[520px] object-contain object-bottom" // Aligns to bottom
                            />
                        </div>

                    </div>
                </section>

                {/* SECTION 6: CONTACT / LETS START BUILDING */}
                <section className="w-full bg-[#F7F6E7] px-6 md:px-16 py-24">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

                        {/* LEFT CONTENT */}
                        <div className="flex flex-col">
                            <h2 className="threeD-anton text-[80px] md:text-[100px] leading-[0.9] text-[#FF5A00] tracking-tight mb-12 uppercase">
                                LETS <br /> START BUILDING
                            </h2>
                            <img
                                src="https://res.cloudinary.com/df7s2xmz1/image/upload/v1769017403/f4bd60c4-d8ba-4f44-9621-2f48623a1ba5.png"
                                alt="Lets Start Building"
                                className="w-full max-w-[500px] object-contain rounded-[60px]"
                            />
                        </div>

                        {/* RIGHT FORM */}
                        <div className="font-[Manrope]">
                            <form className="space-y-10">

                                {/* QUESTION 1 */}
                                <div>
                                    <label className="block text-[#D92D6A] text-lg mb-3">What best describes your requirements?</label>
                                    <input type="text" className="w-full bg-transparent border border-[#E5E0C5] rounded-lg p-4 outline-none focus:border-[#D92D6A] transition-colors" />
                                </div>

                                {/* QUESTION 2 - RATING */}
                                <div>
                                    <label className="block text-[#D92D6A] text-lg mb-3">
                                        How familiar are you with 3D and 2D Art? <br />
                                        <span className="text-sm opacity-80">(1 - Not familiar; 5 - Very familiar)</span>
                                    </label>
                                    <div className="grid grid-cols-5 gap-4">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <button key={num} type="button" className="bg-[#EFDECD] hover:bg-[#D92D6A] hover:text-white text-[#D92D6A] py-3 rounded-lg font-bold transition-colors">
                                                {num}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* QUESTION 3 - CHECKBOXES */}
                                <div>
                                    <label className="block text-[#D92D6A] text-lg mb-3">how do you want us to grow with you</label>
                                    <div className="space-y-3">
                                        {['Practical tips', 'Industry trends', 'Tools & resources'].map((opt) => (
                                            <label key={opt} className="flex items-center gap-3 bg-[#EFDECD]/50 p-4 rounded-lg cursor-pointer hover:bg-[#EFDECD] transition-colors">
                                                <input type="checkbox" className="w-5 h-5 accent-[#D92D6A]" />
                                                <span className="text-[#D92D6A]/80">{opt}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* QUESTION 4 - EMAIL/PHONE */}
                                <div>
                                    <label className="block text-[#D92D6A] text-lg mb-3">your email and phone</label>
                                    <input type="text" className="w-full bg-[#F3F0E0] border border-[#E5E0C5] rounded-lg p-4 outline-none focus:border-[#D92D6A] transition-colors h-16" />
                                </div>

                                {/* SUBMIT */}
                                <button type="submit" className="w-full bg-[#D92D6A] text-white text-xl py-4 rounded-full font-bold shadow-lg hover:bg-[#b02253] transition-colors">
                                    Save my spot!
                                </button>
                                <p className="text-xs text-center text-[#D92D6A]/60 mt-4">
                                    Your Canva profile name will be shared. Never submit passwords.
                                </p>

                            </form>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
};

export default ThreeDArt;
