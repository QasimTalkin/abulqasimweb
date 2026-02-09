import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profileData } from '@/data/profile';

export function Footer() {
    return (
        <footer className="bg-[#1a1b26] border-t border-gray-800 py-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">
                            <span className="text-[#00ff41]">Abul Qasim</span>
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 font-mono">
                            {profileData.summary}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 font-mono">
                            <li>
                                <a href="#journey" className="text-gray-400 hover:text-[#00ff41] transition-colors text-sm">
                                    &gt; Career Journey
                                </a>
                            </li>
                            <li>
                                <a href="#principles" className="text-gray-400 hover:text-[#00ff41] transition-colors text-sm">
                                    &gt; Principles
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-400 hover:text-[#00ff41] transition-colors text-sm">
                                    &gt; Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-400 hover:text-[#00ff41] transition-colors text-sm">
                                    &gt; Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-4">Connect</h3>
                        <div className="space-y-3 font-mono">
                            <a
                                href={profileData.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-[#00ff41] transition-colors text-sm"
                            >
                                <Github size={16} />
                                <span>GitHub</span>
                            </a>
                            <a
                                href={profileData.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-400 hover:text-[#3b82f6] transition-colors text-sm"
                            >
                                <Linkedin size={16} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href={`mailto:${profileData.email}`}
                                className="flex items-center gap-2 text-gray-400 hover:text-[#bd00ff] transition-colors text-sm"
                            >
                                <Mail size={16} />
                                <span>{profileData.email}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm font-mono">
                        © {new Date().getFullYear()} Abul Qasim. <span className="text-[#00ff41]">git push force</span> production
                    </p>
                </div>
            </div>
        </footer>
    );
}
