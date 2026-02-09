'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { ArrowRight, Github, Linkedin, Mail, Code2 } from 'lucide-react';

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center py-24 bg-gradient-to-br from-background via-background-secondary to-background-tertiary dark:from-background-dark dark:via-background-dark-secondary dark:to-background-dark-tertiary">
            <div className="container-custom">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-8 animate-fade-in">
                        <Code2 size={16} />
                        Building Products • Mentoring Developers • Shipping Excellence
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-slide-up">
                        <span className="gradient-text">Shipping Products</span>
                        <br />
                        <span className="text-gray-900 dark:text-white">Growing Teams</span>
                    </h1>

                    {/* Subtitle with Name */}
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                        <span className="gradient-text font-bold text-2xl md:text-3xl">{profileData.name}</span>
                        <br />
                        <span className="text-lg">{profileData.title} • CS Instructor @ Algonquin College</span>
                        <br />
                        <span className="text-base text-gray-500 dark:text-gray-500">Developing code, building products, and mentoring the next generation of developers</span>
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
                        <div className="metric-card animate-grow">
                            <div className="text-3xl font-bold gradient-text mb-1">9+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Years Shipping</div>
                        </div>
                        <div className="metric-card animate-grow" style={{ animationDelay: '0.1s' }}>
                            <div className="text-3xl font-bold gradient-text mb-1">7</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Team Size</div>
                        </div>
                        <div className="metric-card animate-grow" style={{ animationDelay: '0.2s' }}>
                            <div className="text-3xl font-bold gradient-text mb-1">0%</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Turnover</div>
                        </div>
                        <div className="metric-card animate-grow" style={{ animationDelay: '0.3s' }}>
                            <div className="text-3xl font-bold gradient-text mb-1">100+</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">Devs Mentored</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a href="#journey" className="btn-primary inline-flex items-center justify-center gap-2">
                            View My Journey <ArrowRight size={20} />
                        </a>
                        <a href="#principles" className="btn-outline inline-flex items-center justify-center gap-2">
                            See My Principles
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6 justify-center">
                        <a
                            href={profileData.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-background-dark-secondary rounded-xl shadow-soft hover:shadow-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-all"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href={profileData.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white dark:bg-background-dark-secondary rounded-xl shadow-soft hover:shadow-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href={`mailto:${profileData.email}`}
                            className="p-3 bg-white dark:bg-background-dark-secondary rounded-xl shadow-soft hover:shadow-medium text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-all"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
