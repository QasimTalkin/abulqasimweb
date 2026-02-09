'use client';

import React, { useState } from 'react';
import { profileData } from '@/data/profile';
import { Send } from 'lucide-react';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would send to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-20 bg-[#0C0C0C]">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Let's Connect</h2>
                        <p className="section-subtitle font-mono text-sm">
                            <span className="text-[#00ff41]">$ ssh</span> abul@portfolio.com
                        </p>
                    </div>

                    {submitted ? (
                        <div className="card text-center border-[#00ff41]">
                            <div className="text-6xl mb-4 text-[#00ff41]">✓</div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Message Sent!
                            </h3>
                            <p className="text-gray-400 font-mono">
                                Thank you for reaching out. I'll get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="card">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider font-mono">
                                        // Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded bg-[#0C0C0C] border border-gray-800 text-white focus:ring-1 focus:ring-[#00ff41] focus:border-[#00ff41] transition-all font-mono"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider font-mono">
                                        // Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded bg-[#0C0C0C] border border-gray-800 text-white focus:ring-1 focus:ring-[#00ff41] focus:border-[#00ff41] transition-all font-mono"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider font-mono">
                                        // Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded bg-[#0C0C0C] border border-gray-800 text-white focus:ring-1 focus:ring-[#00ff41] focus:border-[#00ff41] transition-all resize-none font-mono"
                                        placeholder="Tell me about your project or opportunity..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2 font-mono">
                                    ./send_message.sh <Send size={20} />
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Direct Contact Info */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-500 mb-4 font-mono">// Or reach out directly:</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center font-mono">
                            <a
                                href={`mailto:${profileData.email}`}
                                className="text-[#00ff41] hover:text-white transition-colors"
                            >
                                {profileData.email}
                            </a>
                            <span className="hidden sm:inline text-gray-600">•</span>
                            <a
                                href={`tel:${profileData.phone}`}
                                className="text-[#00ff41] hover:text-white transition-colors"
                            >
                                {profileData.phone}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
