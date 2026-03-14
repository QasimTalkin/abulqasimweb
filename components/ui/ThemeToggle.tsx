'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Terminal, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle({ className = '' }: { className?: string }) {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className={`relative flex items-center p-1 rounded-full overflow-hidden transition-all duration-300 ring-1 outline-none ${theme === 'dev'
                    ? 'bg-[#050505] ring-gray-800 hover:ring-[#00ff41]/50 focus:ring-[#00ff41]'
                    : 'bg-gray-100 ring-gray-200 hover:ring-primary/40 focus:ring-primary shadow-inner'
                } ${className}`}
            aria-label={`Switch to ${theme === 'dev' ? 'Professional' : 'Developer'} Theme`}
        >
            {/* Sliding Pill Background */}
            <motion.div
                className={`absolute top-1 bottom-1 w-[80px] sm:w-[100px] rounded-full z-0 ${theme === 'dev' ? 'bg-[#00ff41]' : 'bg-primary'
                    }`}
                animate={{
                    x: theme === 'dev' ? 0 : '100%',
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />

            <div className={`relative z-10 flex items-center justify-center w-[80px] sm:w-[100px] h-8 gap-2 transition-colors duration-300 ${theme === 'dev' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}>
                <Terminal size={14} />
                <span className="text-xs font-bold font-mono tracking-wide">DEV</span>
            </div>

            <div className={`relative z-10 flex items-center justify-center w-[80px] sm:w-[100px] h-8 gap-2 transition-colors duration-300 ${theme === 'hr' ? 'text-white' : 'text-gray-400 hover:text-gray-600'}`}>
                <Briefcase size={14} />
                <span className="text-xs font-bold tracking-wide">PRO</span>
            </div>
        </button>
    );
}
