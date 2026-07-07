'use client';

import React from 'react';
import { teachingResources } from '@/data/teaching';
import { Github, Presentation, Code2, ArrowUpRight } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

const iconMap = {
    slides: Presentation,
    code: Code2,
};

export function Teaching() {
    const { theme } = useTheme();
    const isDev = theme === 'dev';

    return (
        <section
            id="teaching"
            className={`py-20 transition-colors duration-500 ${isDev ? 'bg-[#0C0C0C]' : 'bg-background-secondary'}`}
        >
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${isDev ? 'text-white' : 'text-background-dark'}`}>
                        Teaching
                    </h2>
                    {isDev ? (
                        <p className="font-mono text-sm text-gray-500">
                            <span className="text-[#00ff41]">npm run</span> teach --live
                        </p>
                    ) : (
                        <p className="text-lg text-gray-600">
                            Live teaching resources I build and maintain for my students — deployed on GitHub Pages.
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {teachingResources.map((resource) => {
                        const Icon = iconMap[resource.icon];
                        return (
                            <div
                                key={resource.id}
                                className={`group h-full flex flex-col rounded-xl p-8 transition-all duration-300 border ${isDev
                                        ? 'bg-[#1a1b26] border-gray-800 hover:border-[#00ff41]/50'
                                        : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={`flex items-center justify-center w-12 h-12 rounded-lg ${isDev
                                                    ? 'bg-[#00ff41]/10 text-[#00ff41]'
                                                    : 'bg-primary/10 text-primary'
                                                }`}
                                        >
                                            <Icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-bold ${isDev ? 'text-white font-mono' : 'text-background-dark'}`}>
                                                {resource.title}
                                            </h3>
                                            <p className={`text-sm ${isDev ? 'text-gray-500 font-mono' : 'text-gray-500'}`}>
                                                {resource.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <p
                                    className={`mb-6 flex-grow text-sm border-l pl-3 ${isDev
                                            ? 'text-gray-400 font-mono border-gray-800'
                                            : 'text-gray-600 border-gray-200'
                                        }`}
                                >
                                    {resource.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {resource.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`px-2 py-1 text-xs rounded ${isDev
                                                    ? 'bg-[#0C0C0C] text-gray-300 border border-gray-800'
                                                    : 'bg-primary-light/10 text-primary font-medium'
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className={`flex items-center gap-3 pt-4 border-t ${isDev ? 'border-gray-800' : 'border-gray-100'}`}>
                                    <a
                                        href={resource.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${isDev
                                                ? 'bg-[#00ff41]/10 border border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/20 font-mono'
                                                : 'bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md'
                                            }`}
                                    >
                                        {isDev ? 'view_live' : 'View Live Site'}
                                        <ArrowUpRight size={16} />
                                    </a>
                                    <a
                                        href={resource.repoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isDev
                                                ? 'text-gray-400 hover:text-white font-mono'
                                                : 'text-gray-600 hover:text-primary'
                                            }`}
                                        aria-label={`View ${resource.title} source on GitHub`}
                                    >
                                        <Github size={16} /> Source
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
