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
        <section className="py-20 bg-background dark:bg-background-dark">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Skills & Expertise</h2>
                    <p className="section-subtitle">
                        Technical and leadership capabilities built over 9+ years
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div key={category.title} className="card">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="tech-badge">
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
