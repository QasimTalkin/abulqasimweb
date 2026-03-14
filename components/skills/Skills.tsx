'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { useTheme } from '@/components/ui/ThemeProvider';
import { CheckCircle2 } from 'lucide-react';

const skillCategories = [
    {
        title: 'Leadership & Management',
        skills: profileData.competencies.leadership,
    },
    {
        title: 'Backend Development',
        skills: profileData.competencies.backend,
    },
    {
        title: 'Frontend Development',
        skills: profileData.competencies.frontend,
    },
    {
        title: 'Cloud & DevOps',
        skills: profileData.competencies.cloud,
    },
    {
        title: 'Database & Data',
        skills: profileData.competencies.database,
    },
    {
        title: 'Tools & Practices',
        skills: profileData.competencies.tools,
    },
];

export function Skills() {
    const { theme } = useTheme();

    return (
        <section id="skills" className={`py-20 transition-colors duration-500 ${theme === 'dev' ? 'bg-[#0C0C0C]' : 'bg-background-secondary'}`}>
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${theme === 'dev' ? 'text-white' : 'text-background-dark'}`}>Skills & Expertise</h2>
                    {theme === 'dev' ? (
                        <p className="font-mono text-sm text-gray-500">
                            <span className="text-[#3b82f6]">import</span> &#123; capabilities &#125; <span className="text-[#3b82f6]">from</span> <span className="text-[#00ff41]">'experience'</span>;
                        </p>
                    ) : (
                        <p className="text-lg text-gray-600">
                            Comprehensive technical and leadership skill sets.
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.title} className={`rounded-xl p-6 transition-all duration-300 border ${theme === 'dev'
                                ? 'bg-[#1a1b26] border-gray-800 hover:border-gray-600'
                                : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                            }`}>
                            <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${theme === 'dev' ? 'text-white font-mono' : 'text-background-dark'}`}>
                                {theme === 'dev' ? (
                                    <span className="text-[#00ff41]">$</span>
                                ) : (
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                )}
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className={`px-3 py-1.5 text-xs rounded transition-colors cursor-default ${theme === 'dev'
                                            ? 'bg-[#0C0C0C] text-gray-300 font-mono border border-gray-800 hover:border-[#00ff41] hover:text-[#00ff41]'
                                            : 'bg-primary-light/10 text-primary font-medium hover:bg-primary hover:text-white'
                                        }`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
