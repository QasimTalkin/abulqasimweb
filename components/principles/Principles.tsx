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
        <section id="principles" className="py-20 bg-background-secondary dark:bg-background-dark-secondary">
            <div className="container-custom">
                <div className="text-center mb-12">
                    <h2 className="section-title">Guiding Principles</h2>
                    <p className="section-subtitle">
                        Values that shape how I lead, build, and collaborate
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveTab('personal')}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'personal'
                                ? 'bg-primary text-white shadow-medium'
                                : 'bg-white dark:bg-background-dark-tertiary text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-background-dark-secondary'
                            }`}
                    >
                        My Principles
                    </button>
                    <button
                        onClick={() => setActiveTab('team')}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${activeTab === 'team'
                                ? 'bg-primary text-white shadow-medium'
                                : 'bg-white dark:bg-background-dark-tertiary text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-background-dark-secondary'
                            }`}
                    >
                        Our Team Principles
                    </button>
                </div>

                {/* Principles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {principles.map((principle) => {
                        const Icon = iconMap[principle.category];

                        return (
                            <div
                                key={principle.id}
                                className="card group hover:scale-105 transition-all duration-300 border-l-4 border-primary"
                            >
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                                        <Icon className="w-5 h-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                                        {principle.title}
                                    </h3>
                                </div>

                                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
                                    {principle.description}
                                </p>

                                <div className="text-xs text-gray-500 dark:text-gray-400 italic bg-gray-50 dark:bg-background-dark-tertiary p-2 rounded">
                                    💡 {principle.example}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Inspiration Note */}
                {activeTab === 'personal' && (
                    <div className="mt-12 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                            Inspired by Ray Dalio's "Principles" — continuously iterating and refining
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
