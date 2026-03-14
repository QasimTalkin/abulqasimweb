'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { ArrowRight, Github, Linkedin, Mail, Terminal, ChevronRight, Download, FileText } from 'lucide-react';
import { Typewriter } from '@/components/ui/Typewriter';

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center py-24 bg-[#0C0C0C] text-gray-300 overflow-hidden relative">
            {/* Background Grid/Matrix Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(12,12,12,0.9)_2px,transparent_2px),linear-gradient(90deg,rgba(12,12,12,0.9)_2px,transparent_2px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

            <div className="container-custom relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Terminal Window */}
                    <div className="bg-[#1a1b26] border border-gray-800 rounded-lg shadow-2xl overflow-hidden backdrop-blur-sm bg-opacity-90 animate-fade-in w-full">
                        {/* Terminal Header */}
                        <div className="bg-gray-900/50 px-4 py-3 border-b border-gray-800 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="ml-4 text-xs text-gray-500 font-mono flex items-center gap-2">
                                <Terminal size={12} />
                                <span>~/{profileData.name.toLowerCase().replace(/\s+/g, '-')}/portfolio</span>
                            </div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-8 md:p-12 font-mono">
                            <div className="space-y-6">
                                {/* Auto-typing Command */}
                                <div className="flex items-center gap-2 text-[#00ff41] mb-8">
                                    <ChevronRight size={20} />
                                    <span className="text-lg md:text-xl">whoami</span>
                                </div>

                                {/* Main Content */}
                                <div className="space-y-4">
                                    <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                                        <span className="text-[#3b82f6]">Hello, I'm </span>
                                        {profileData.name}
                                    </h1>

                                    <div className="text-xl md:text-3xl text-gray-400 h-20 md:h-16">
                                        <span className="text-[#00ff41] mr-2">{'>'}</span>
                                        <Typewriter
                                            words={[
                                                'Software Engineering Manager',
                                                'Full Stack Web Development Instructor',
                                                'Building Scalable Products',
                                                'Mentoring Developers'
                                            ]}
                                        />
                                    </div>

                                    <div className="text-lg text-gray-400 max-w-3xl border-l-2 border-gray-800 pl-4 my-8">
                                        <p>
                                            <span className="text-[#bd00ff]">const</span> <span className="text-yellow-400">mission</span> = <span className="text-green-400">"Developing code, building products, and mentoring the next generation of developers"</span>;
                                        </p>
                                    </div>
                                </div>

                                {/* Metrics Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-gray-800 mt-8">
                                    <div className="p-4 bg-gray-900/30 rounded border border-gray-800 hover:border-[#00ff41]/50 transition-colors group">
                                        <div className="text-3xl font-bold text-white mb-1 group-hover:text-[#00ff41] transition-colors">9+</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Years Shipping</div>
                                    </div>
                                    <div className="p-4 bg-gray-900/30 rounded border border-gray-800 hover:border-[#3b82f6]/50 transition-colors group">
                                        <div className="text-3xl font-bold text-white mb-1 group-hover:text-[#3b82f6] transition-colors">7</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Team Size</div>
                                    </div>
                                    <div className="p-4 bg-gray-900/30 rounded border border-gray-800 hover:border-[#bd00ff]/50 transition-colors group">
                                        <div className="text-3xl font-bold text-white mb-1 group-hover:text-[#bd00ff] transition-colors">0%</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Turnover</div>
                                    </div>
                                    <div className="p-4 bg-gray-900/30 rounded border border-gray-800 hover:border-yellow-400/50 transition-colors group">
                                        <div className="text-3xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">100+</div>
                                        <div className="text-xs text-gray-500 uppercase tracking-wider">Devs Mentored</div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <a href="#journey" className="group px-6 py-3 bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41] hover:text-black transition-all rounded-md font-bold flex items-center justify-center gap-2">
                                        <Terminal size={18} className="group-hover:-translate-y-1 transition-transform" /> ./view_journey.sh <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                    <a href="#principles" className="group px-6 py-3 border border-gray-700 text-gray-400 hover:border-white hover:text-white transition-all rounded-md font-bold flex items-center justify-center gap-2">
                                        <FileText size={18} className="group-hover:-translate-y-1 transition-transform" /> cat principles.md
                                    </a>
                                    <a href="/Abul Qasim - Software Engineering Manager.pdf" target="_blank" rel="noopener noreferrer" className="relative overflow-hidden group px-6 py-3 bg-[#bd00ff]/10 border border-[#bd00ff] text-[#bd00ff] hover:bg-[#bd00ff] hover:text-white transition-all duration-300 rounded-md font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(189,0,255,0.4)]">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#bd00ff]/30 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                                        <Download size={18} className="group-hover:translate-y-[2px] transition-transform" />
                                        <span>wget resume.pdf</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Terminal Footer / Status Bar */}
                        <div className="bg-gray-900/80 px-4 py-2 border-t border-gray-800 flex justify-between text-xs text-gray-500 font-mono">
                            <div className="flex gap-4">
                                <span className="text-[#00ff41]">● Online</span>
                                <span>v2.4.0</span>
                            </div>
                            <div className="flex gap-4">
                                <span>UTF-8</span>
                                <span>TypeScript</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Links (Outside Terminal) */}
                    <div className="flex justify-center gap-6 mt-12">
                        <a
                            href={profileData.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-white hover:scale-110 transition-all"
                            aria-label="GitHub"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href={profileData.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-[#3b82f6] hover:scale-110 transition-all"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href={`mailto:${profileData.email}`}
                            className="text-gray-500 hover:text-[#bd00ff] hover:scale-110 transition-all"
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
