import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { profileData } from '@/data/profile';

export function Footer() {
    return (
        <footer className="bg-background-secondary dark:bg-background-dark-secondary border-t border-gray-200 dark:border-gray-700 py-12">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-bold gradient-text mb-4">Abul Qasim</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                            {profileData.summary}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#journey" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                                    Career Journey
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Social */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Connect</h3>
                        <div className="space-y-3">
                            <a
                                href={profileData.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                                <Github size={16} />
                                <span>GitHub</span>
                            </a>
                            <a
                                href={profileData.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                                <Linkedin size={16} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href={`mailto:${profileData.email}`}
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                                <Mail size={16} />
                                <span>{profileData.email}</span>
                            </a>
                            <a
                                href={`tel:${profileData.phone}`}
                                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors text-sm"
                            >
                                <Phone size={16} />
                                <span>{profileData.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-8 text-center">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        © {new Date().getFullYear()} Abul Qasim. Built with Next.js, TypeScript, and Tailwind CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
}
