import React from 'react';

const About = () => {
    return (
        <div className="bg-zinc-900 text-white min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h1 className="headline text-5xl mb-6 text-red-500">About Us</h1>
                <p className="text-xl text-gray-300 mb-8 max-w-4xl">
                    BloodNexus is a premier digital studio specializing in high-end game development, architectural visualization, and immersive VR experiences.
                </p>
                <p className="text-lg text-gray-400 max-w-3xl">
                    We combine technical expertise with artistic vision to deliver world-class digital products. Our team consists of veteran developers, artists, and designers passionate about pushing the boundaries of what is possible in real-time rendering and interactive media.
                </p>
            </div>
        </div>
    );
};

export default About;
