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
        <section id="journey" className="py-20 bg-[#0C0C0C]">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Career Journey</h2>
                    <p className="section-subtitle font-mono text-sm">
                        <span className="text-[#3b82f6]">while</span>(alive) &#123; learn(); build(); lead(); &#125;
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => {
                        const Icon = iconMap[exp.type];

                        return (
                            <div key={exp.id} className="timeline-item">
                                <div className="timeline-dot" />

                                <div className="card mb-8 group">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="p-3 bg-[#00ff41]/10 rounded border border-[#00ff41]/20 group-hover:bg-[#00ff41]/20 transition-colors">
                                            <Icon className="w-6 h-6 text-[#00ff41]" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white mb-1">
                                                {exp.title}
                                            </h3>
                                            <div className="text-[#3b82f6] font-mono mb-1">{exp.company}</div>
                                            <div className="text-sm text-gray-500 font-mono">{exp.period}</div>
                                        </div>
                                    </div>

                                    {/* Key Impact */}
                                    <div className="mb-4">
                                        <h4 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider font-mono">
                                            // Key Impact
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.impact.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-400">
                                                    <span className="text-[#00ff41] mt-1">Found exp:</span>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Leadership Principle */}
                                    <div className="p-4 bg-[#1a1b26] rounded border border-gray-800 mb-4">
                                        <div className="text-xs font-semibold text-[#bd00ff] mb-1 font-mono">import leadership_principle;</div>
                                        <div className="text-gray-300 italic font-mono pl-4 border-l-2 border-[#bd00ff]">"{exp.principle}"</div>
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider font-mono">
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
