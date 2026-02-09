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
        <section id="contact" className="py-20 bg-background-secondary dark:bg-background-dark-secondary">
            <div className="container-custom">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="section-title">Let's Connect</h2>
                        <p className="section-subtitle">
                            Interested in working together? Let's start a conversation.
                        </p>
                    </div>

                    {submitted ? (
                        <div className="card text-center">
                            <div className="text-6xl mb-4">✓</div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Message Sent!
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Thank you for reaching out. I'll get back to you soon.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="card">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark-tertiary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark-tertiary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark-tertiary text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                        placeholder="Tell me about your project or opportunity..."
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full inline-flex items-center justify-center gap-2">
                                    Send Message <Send size={20} />
                                </button>
                            </div>
                        </form>
                    )}

                    {/* Direct Contact Info */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">Or reach out directly:</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`mailto:${profileData.email}`}
                                className="text-primary hover:text-primary-dark font-semibold transition-colors"
                            >
                                {profileData.email}
                            </a>
                            <span className="hidden sm:inline text-gray-400">•</span>
                            <a
                                href={`tel:${profileData.phone}`}
                                className="text-primary hover:text-primary-dark font-semibold transition-colors"
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
