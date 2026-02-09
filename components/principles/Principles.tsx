'use client';

import React, { useState } from 'react';
import { personalPrinciples, teamPrinciples } from '@/data/principles';
import { Lightbulb, Users, Code, Target } from 'lucide-react';

const iconMap = {
    personal: Lightbulb,
    team: Users,
    technical: Code,
    leadership: Target,
};

export function Principles() {
    const [activeTab, setActiveTab] = useState<'personal' | 'team'>('personal');

    const principles = activeTab === 'personal' ? personalPrinciples : teamPrinciples;

    return (
        <section id="principles" className="py-20 bg-[#0C0C0C]">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Guiding Principles</h2>
                    <p className="section-subtitle font-mono text-sm">
                        <span className="text-[#bd00ff]">const</span> values = &#123; leadership, building, collaboration &#125;;
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('personal')}
                        className={`px-6 py-3 rounded border font-mono text-sm transition-all ${activeTab === 'personal'
                            ? 'bg-[#00ff41]/10 border-[#00ff41] text-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                            : 'bg-[#1a1b26] border-gray-800 text-gray-400 hover:border-gray-600'
                            }`}
                    >
                        ~/personal_principles
                    </button>
                    <button
                        onClick={() => setActiveTab('team')}
                        className={`px-6 py-3 rounded border font-mono text-sm transition-all ${activeTab === 'team'
                            ? 'bg-[#00ff41]/10 border-[#00ff41] text-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.2)]'
                            : 'bg-[#1a1b26] border-gray-800 text-gray-400 hover:border-gray-600'
                            }`}
                    >
                        ~/team_principles
                    </button>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {principles.map((principle) => {
                        const Icon = iconMap[principle.category];

                        return (
                            <div
                                key={principle.id}
                                className="group relative bg-[#1a1b26] border border-gray-800 rounded p-6 hover:border-[#00ff41] transition-colors duration-300"
                            >
                                <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="px-2 py-1 bg-[#00ff41] text-black text-xs font-bold font-mono rounded">
                                        EXEC
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-2 bg-gray-900 rounded border border-gray-700 group-hover:border-[#00ff41]/50 group-hover:text-[#00ff41] transition-colors">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-mono leading-tight mt-1">
                                        {principle.title}
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-400 mb-4 font-mono leading-relaxed border-l-2 border-gray-800 pl-3">
                                    {principle.description}
                                </p>

                                <div className="text-xs text-[#00ff41] font-mono bg-black/50 p-3 rounded border border-gray-800 group-hover:border-[#00ff41]/30 transition-colors">
                                    <span className="text-[#bd00ff]">Wait...</span> {principle.example}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Inspiration Note */}
                {activeTab === 'personal' && (
                    <div className="mt-12 text-center">
                        <p className="text-xs text-gray-600 font-mono">
                            // Inspired by Ray Dalio's "Principles" — optimized for engineering
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
