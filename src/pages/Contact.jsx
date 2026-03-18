import React, { useState } from 'react';
import { submitToContact } from '../utils/submitForm';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // 'loading' | 'success' | 'error'
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        const result = await submitToContact(formData, 'New contact form submission - Blood Nexus');

        if (result.ok) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('error');
            setErrorMsg(result.message || 'Failed to send. Please try again.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="bg-zinc-900 text-white min-h-screen py-16 font-sans">
            <div className="container mx-auto px-4 sm:px-6">
                <h1 className="text-5xl md:text-6xl font-bebas text-white mb-6 uppercase tracking-wide">
                    Contact Us
                </h1>
                <p className="text-xl text-gray-300 mb-12 max-w-4xl">
                    Ready to start your project? Get in touch with us to discuss your ideas.
                </p>

                <div className="max-w-lg bg-black p-8 rounded-lg border-2 border-zinc-800">
                    <h2 className="text-2xl font-bebas mb-6 text-white uppercase tracking-wider">Get In Touch</h2>

                    {status === 'success' ? (
                        <div className="py-8 text-center">
                            <p className="text-green-500 font-oswald text-lg mb-4">
                                Thank you! Your message has been sent. We'll get back to you soon.
                            </p>
                            <button
                                onClick={() => setStatus(null)}
                                className="text-red-500 font-oswald underline hover:text-red-400"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1 font-oswald uppercase">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-zinc-900 border-2 border-zinc-700 text-white p-3 rounded focus:outline-none focus:border-red-500 font-oswald"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1 font-oswald uppercase">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-zinc-900 border-2 border-zinc-700 text-white p-3 rounded focus:outline-none focus:border-red-500 font-oswald"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1 font-oswald uppercase">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-zinc-900 border-2 border-zinc-700 text-white p-3 rounded h-32 focus:outline-none focus:border-red-500 font-oswald resize-none"
                                    placeholder="Tell us about your project..."
                                />
                            </div>
                            {status === 'error' && (
                                <p className="text-red-500 text-sm font-oswald">{errorMsg}</p>
                            )}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bebas py-3 rounded uppercase tracking-wider transition-colors"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
