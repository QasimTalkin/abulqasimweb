'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#journey', label: 'Journey' },
        { href: '#principles', label: 'Principles' },
        { href: '#projects', label: 'Projects' },
        { href: '#contact', label: 'Contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? theme === 'dev'
                    ? 'bg-[#0C0C0C]/90 backdrop-blur-lg border-b border-gray-800'
                    : 'bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className={`text-2xl font-bold tracking-tight transition-colors ${theme === 'dev' ? 'font-display text-white' : 'font-sans text-background-dark'}`}>
                        {theme === 'dev' ? (
                            <>
                                <span className="text-[#00ff41]">&lt;</span>
                                AQ
                                <span className="text-[#00ff41]">/&gt;</span>
                            </>
                        ) : (
                            <>
                                AQ<span className="text-primary">.</span>
                            </>
                        )}
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`text-sm transition-colors group ${theme === 'dev'
                                        ? 'text-gray-400 hover:text-[#00ff41] font-mono'
                                        : 'text-gray-600 hover:text-primary font-medium'
                                    }`}
                            >
                                {theme === 'dev' && <span className="text-[#3b82f6] opacity-0 group-hover:opacity-100 mr-1 transition-opacity">./</span>}
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden transition-colors ${theme === 'dev' ? 'text-gray-300 hover:text-[#00ff41]' : 'text-gray-700 hover:text-primary'}`}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className={`md:hidden py-4 border-t ${theme === 'dev' ? 'border-gray-800' : 'border-gray-200'}`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`block py-2 transition-colors ${theme === 'dev'
                                        ? 'text-gray-400 hover:text-[#00ff41] font-mono'
                                        : 'text-gray-700 hover:text-primary font-medium'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}
