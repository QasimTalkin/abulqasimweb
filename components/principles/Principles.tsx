'use client';

import React, { useState } from 'react';
import { personalPrinciples, teamPrinciples } from '@/data/principles';
import { Lightbulb, Users, Code, Target } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

const iconMap = {
    personal: Lightbulb,
    team: Users,
    technical: Code,
    leadership: Target,
};

export function Principles() {
    const [activeTab, setActiveTab] = useState<'personal' | 'team'>('personal');
    const { theme } = useTheme();

    const principles = activeTab === 'personal' ? personalPrinciples : teamPrinciples;

    return (
        <section id="principles" className={`py-20 transition-colors duration-500 ${theme === 'dev' ? 'bg-[#0C0C0C]' : 'bg-background'}`}>
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${theme === 'dev' ? 'text-white' : 'text-background-dark'}`}>Guiding Principles</h2>
                    {theme === 'dev' ? (
                        <p className="font-mono text-sm text-gray-500">
                            <span className="text-[#bd00ff]">const</span> values = &#123; leadership, building, collaboration &#125;;
                        </p>
                    ) : (
                        <p className="text-lg text-gray-600">
                            Core values that drive my approach to engineering and leadership.
                        </p>
                    )}
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('personal')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${theme === 'dev'
                                ? `font-mono text-sm border ${activeTab === 'personal' ? 'bg-[#00ff41]/10 border-[#00ff41] text-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.2)]' : 'bg-[#1a1b26] border-gray-800 text-gray-400 hover:border-gray-600'}`
                                : `border ${activeTab === 'personal' ? 'bg-primary text-white border-primary shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`
                            }`}
                    >
                        {theme === 'dev' ? '~/personal_principles' : 'Personal Principles'}
                    </button>
                    <button
                        onClick={() => setActiveTab('team')}
                        className={`px-6 py-3 rounded-lg font-medium transition-all ${theme === 'dev'
                                ? `font-mono text-sm border ${activeTab === 'team' ? 'bg-[#00ff41]/10 border-[#00ff41] text-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.2)]' : 'bg-[#1a1b26] border-gray-800 text-gray-400 hover:border-gray-600'}`
                                : `border ${activeTab === 'team' ? 'bg-primary text-white border-primary shadow-md' : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'}`
                            }`}
                    >
                        {theme === 'dev' ? '~/team_principles' : 'Team Principles'}
                    </button>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {principles.map((principle) => {
                        const Icon = iconMap[principle.category];

                        return (
                            <div
                                key={principle.id}
                                className={`group relative rounded-xl p-6 transition-all duration-300 border ${theme === 'dev'
                                        ? 'bg-[#1a1b26] border-gray-800 hover:border-[#00ff41]'
                                        : 'bg-white border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-md'
                                    }`}
                            >
                                {theme === 'dev' && (
                                    <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="px-2 py-1 bg-[#00ff41] text-black text-xs font-bold font-mono rounded">
                                            EXEC
                                        </div>
                                    </div>
                                )}

                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`p-2 rounded-lg transition-colors ${theme === 'dev'
                                            ? 'bg-gray-900 border border-gray-700 group-hover:border-[#00ff41]/50 group-hover:text-[#00ff41]'
                                            : 'bg-primary-light/10 text-primary group-hover:bg-primary group-hover:text-white'
                                        }`}>
                                        <Icon className="w-5 h-5 pointer-events-none" />
                                    </div>
                                    <h3 className={`text-lg font-bold leading-tight mt-1 ${theme === 'dev' ? 'text-white font-mono' : 'text-background-dark'}`}>
                                        {principle.title}
                                    </h3>
                                </div>

                                <p className={`text-sm mb-4 leading-relaxed border-l-2 pl-3 ${theme === 'dev'
                                        ? 'text-gray-400 font-mono border-gray-800'
                                        : 'text-gray-600 border-gray-200'
                                    }`}>
                                    {principle.description}
                                </p>

                                <div className={`text-sm p-4 rounded-lg border ${theme === 'dev'
                                        ? 'text-[#00ff41] font-mono bg-black/50 border-gray-800 group-hover:border-[#00ff41]/30 transition-colors'
                                        : 'text-gray-700 bg-gray-50 border-gray-100 italic'
                                    }`}>
                                    {theme === 'dev' && <span className="text-[#bd00ff] mr-1">Wait...</span>}
                                    {principle.example}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Inspiration Note */}
                {activeTab === 'personal' && (
                    <div className="mt-12 text-center">
                        <p className={`text-xs ${theme === 'dev' ? 'text-gray-600 font-mono' : 'text-gray-400 italic'}`}>
                            {theme === 'dev' ? '// Inspired by Ray Dalio\'s "Principles" — optimized for engineering' : 'Inspired by principles of strong engineering leadership'}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
