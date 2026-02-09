'use client';

import React from 'react';
import { experiences } from '@/data/experience';
import { Briefcase, GraduationCap, Code } from 'lucide-react';

const iconMap = {
    leadership: Briefcase,
    engineering: Code,
    teaching: GraduationCap,
};

export function Timeline() {
    return (
        <section id="journey" className="py-20 bg-background dark:bg-background-dark">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Career Journey</h2>
                    <p className="section-subtitle">
                        Building teams, delivering results, and growing as a leader
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => {
                        const Icon = iconMap[exp.type];

                        return (
                            <div key={exp.id} className="timeline-item">
                                <div className="timeline-dot" />

                                <div className="card mb-8">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-primary/10 rounded-lg">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                                {exp.title}
                                            </h3>
                                            <div className="text-primary font-semibold mb-1">{exp.company}</div>
                                            <div className="text-sm text-gray-600 dark:text-gray-400">{exp.period}</div>
                                        </div>
                                    </div>

                                    {/* Key Impact */}
                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                                            Key Impact
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.impact.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    <span className="text-primary mt-1">▸</span>
                                                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Leadership Principle */}
                                    <div className="p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border-l-4 border-primary mb-4">
                                        <div className="text-sm font-semibold text-primary mb-1">Leadership Principle</div>
                                        <div className="text-gray-700 dark:text-gray-300 italic">"{exp.principle}"</div>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                                            Technologies
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className="tech-badge">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
