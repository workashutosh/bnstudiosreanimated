import React from 'react';

const Contact = () => {
    return (
        <div className="bg-zinc-900 text-white min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h1 className="headline text-5xl mb-6 text-red-500">Contact Us</h1>
                <p className="text-xl text-gray-300 mb-12 max-w-4xl">
                    Ready to start your project? Get in touch with us to discuss your ideas.
                </p>

                <div className="max-w-lg bg-black p-8 rounded-lg border border-gray-800">
                    <h2 className="text-2xl font-bold mb-6 font-oswald text-white uppercase">Get In Touch</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Name</label>
                            <input type="text" className="w-full bg-zinc-900 border border-gray-700 text-white p-2 rounded focus:outline-none focus:border-red-500" placeholder="Your Name" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Email</label>
                            <input type="email" className="w-full bg-zinc-900 border border-gray-700 text-white p-2 rounded focus:outline-none focus:border-red-500" placeholder="your@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Message</label>
                            <textarea className="w-full bg-zinc-900 border border-gray-700 text-white p-2 rounded h-32 focus:outline-none focus:border-red-500" placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button type="button" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded uppercase tracking-wider transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
