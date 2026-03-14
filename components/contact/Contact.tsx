'use client';

import React, { useState } from 'react';
import { profileData } from '@/data/profile';
import { Send } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const { theme } = useTheme();

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
        <section id="contact" className={`py-20 transition-colors duration-500 ${theme === 'dev' ? 'bg-[#0C0C0C]' : 'bg-background-secondary'}`}>
            <div className="container-custom">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className={`text-4xl font-bold mb-4 ${theme === 'dev' ? 'text-white' : 'text-background-dark'}`}>Let's Connect</h2>
                        {theme === 'dev' ? (
                            <p className="font-mono text-sm text-gray-500">
                                <span className="text-[#00ff41]">$ ssh</span> abul@portfolio.com
                            </p>
                        ) : (
                            <p className="text-lg text-gray-600">
                                Open for leadership roles, consulting, or speaking engagements.
                            </p>
                        )}
                    </div>

                    {submitted ? (
                        <div className={`text-center p-8 rounded-xl border ${theme === 'dev'
                                ? 'bg-[#1a1b26] border-[#00ff41]'
                                : 'bg-white border-success shadow-md'
                            }`}>
                            <div className={`text-6xl mb-4 ${theme === 'dev' ? 'text-[#00ff41]' : 'text-success'}`}>✓</div>
                            <h3 className={`text-2xl font-bold mb-2 ${theme === 'dev' ? 'text-white' : 'text-background-dark'}`}>
                                Message Sent!
                            </h3>
                            <p className={theme === 'dev' ? 'text-gray-400 font-mono' : 'text-gray-600'}>
                                Thank you for reaching out. I'll get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className={`p-8 rounded-xl transition-all duration-300 border ${theme === 'dev'
                                ? 'bg-[#1a1b26] border-gray-800'
                                : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                            }`}>
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className={`block mb-2 ${theme === 'dev'
                                            ? 'text-xs font-semibold text-gray-500 uppercase tracking-wider font-mono // Name'
                                            : 'text-sm font-medium text-gray-700'
                                        }`}>
                                        {theme === 'dev' ? '// Name' : 'Full Name'}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded transition-all outline-none ${theme === 'dev'
                                                ? 'bg-[#0C0C0C] border border-gray-800 text-white focus:ring-1 focus:ring-[#00ff41] focus:border-[#00ff41] font-mono'
                                                : 'bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                                            }`}
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className={`block mb-2 ${theme === 'dev'
                                            ? 'text-xs font-semibold text-gray-500 uppercase tracking-wider font-mono // Email'
                                            : 'text-sm font-medium text-gray-700'
                                        }`}>
                                        {theme === 'dev' ? '// Email' : 'Email Address'}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`w-full px-4 py-3 rounded transition-all outline-none ${theme === 'dev'
                                                ? 'bg-[#0C0C0C] border border-gray-800 text-white focus:ring-1 focus:ring-[#00ff41] focus:border-[#00ff41] font-mono'
                                                : 'bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                                            }`}
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className={`block mb-2 ${theme === 'dev'
                                            ? 'text-xs font-semibold text-gray-500 uppercase tracking-wider font-mono // Message'
                                            : 'text-sm font-medium text-gray-700'
                                        }`}>
                                        {theme === 'dev' ? '// Message' : 'Your Message'}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className={`w-full px-4 py-3 rounded transition-all resize-none outline-none ${theme === 'dev'
                                                ? 'bg-[#0C0C0C] border border-gray-800 text-white focus:ring-1 focus:ring-[#00ff41] focus:border-[#00ff41] font-mono'
                                                : 'bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary'
                                            }`}
                                        placeholder="Tell me about your project or opportunity..."
                                    />
                                </div>

                                <button type="submit" className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${theme === 'dev'
                                        ? 'bg-[#00ff41] text-black hover:bg-[#00ff41]/90 font-mono shadow-[0_0_15px_rgba(0,255,65,0.4)] hover:shadow-[0_0_25px_rgba(0,255,65,0.6)]'
                                        : 'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg'
                                    }`}>
                                    {theme === 'dev' ? './send_message.sh' : 'Send Message'} <Send size={20} />
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Direct Contact Info */}
                    <div className="mt-12 text-center">
                        <p className={`mb-4 ${theme === 'dev' ? 'text-gray-500 font-mono' : 'text-gray-500 font-medium'}`}>
                            {theme === 'dev' ? '// Or reach out directly:' : 'Or reach out directly via email or phone'}
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-4 justify-center ${theme === 'dev' ? 'font-mono' : 'font-medium'}`}>
                            <a
                                href={`mailto:${profileData.email}`}
                                className={`transition-colors ${theme === 'dev'
                                        ? 'text-[#00ff41] hover:text-white'
                                        : 'text-primary hover:text-primary-dark'
                                    }`}
                            >
                                {profileData.email}
                            </a>
                            <span className="hidden sm:inline text-gray-400">•</span>
                            <a
                                href={`tel:${profileData.phone}`}
                                className={`transition-colors ${theme === 'dev'
                                        ? 'text-[#00ff41] hover:text-white'
                                        : 'text-primary hover:text-primary-dark'
                                    }`}
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
