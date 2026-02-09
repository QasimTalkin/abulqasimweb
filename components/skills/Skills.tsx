'use client';

import React from 'react';
import { profileData } from '@/data/profile';

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
    return (
        <section id="skills" className="py-20 bg-[#0C0C0C]">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle font-mono text-sm">
                        <span className="text-[#3b82f6]">import</span> &#123; capabilities &#125; <span className="text-[#3b82f6]">from</span> <span className="text-[#00ff41]">'experience'</span>;
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="bg-[#1a1b26] border border-gray-800 rounded p-6 hover:border-gray-600 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4 font-mono flex items-center gap-2">
                                <span className="text-[#00ff41]">$</span> {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="px-3 py-1 bg-[#0C0C0C] text-gray-300 text-xs font-mono rounded border border-gray-800 hover:border-[#00ff41] hover:text-[#00ff41] transition-colors cursor-default">
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
