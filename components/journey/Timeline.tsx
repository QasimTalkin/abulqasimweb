'use client';

import React from 'react';
import { experiences } from '@/data/experience';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

const iconMap = {
    leadership: Briefcase,
    engineering: Code,
    teaching: GraduationCap,
};

export function Timeline() {
    const { theme } = useTheme();

    return (
        <section id="journey" className={`py-20 transition-colors duration-500 ${theme === 'dev' ? 'bg-[#0C0C0C]' : 'bg-background-secondary'}`}>
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${theme === 'dev' ? 'text-white' : 'text-background-dark'}`}>Career Journey</h2>

                    {theme === 'dev' ? (
                        <p className="font-mono text-sm text-gray-500">
                            <span className="text-[#3b82f6]">while</span>(alive) &#123; learn(); build(); lead(); &#125;
                        </p>
                    ) : (
                        <p className="text-lg text-gray-600">
                            A track record of continuous growth, leadership, and technical excellence.
                        </p>
                    )}
                </div>

                <div className="max-w-4xl mx-auto">
                    {experiences.map((exp, index) => {
                        const Icon = iconMap[exp.type];

                        return (
                            <div key={exp.id} className="timeline-item relative pl-8 pb-12 border-l-2 border-gray-800 last:pb-0">
                                <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${theme === 'dev' ? 'bg-[#3b82f6] shadow-[0_0_10px_rgba(59,130,246,0.5)]' : 'bg-secondary'}`} />

                                <div className={`mb-8 group rounded-xl p-6 transition-all duration-300 ${theme === 'dev' ? 'bg-[#1a1b26] border border-gray-800 hover:border-gray-700 shadow-xl' : 'bg-white border border-gray-100 hover:border-gray-200 shadow-soft hover:shadow-medium'}`}>
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`p-3 rounded-lg flex-shrink-0 transition-colors ${theme === 'dev' ? 'bg-[#00ff41]/10 border border-[#00ff41]/20 group-hover:bg-[#00ff41]/20 text-[#00ff41]' : 'bg-primary-light/10 text-primary'}`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={`text-2xl font-bold mb-1 ${theme === 'dev' ? 'text-white' : 'text-background-dark'}`}>
                                                {exp.title}
                                            </h3>
                                            <div className={`${theme === 'dev' ? 'text-[#3b82f6] font-mono' : 'text-secondary font-semibold'} mb-1`}>{exp.company}</div>
                                            <div className={`text-sm ${theme === 'dev' ? 'text-gray-500 font-mono' : 'text-gray-500 font-medium'}`}>{exp.period}</div>
                                        </div>
                                    </div>

                                    {/* Key Impact */}
                                    <div className="mb-4">
                                        <h4 className={`text-xs font-bold mb-2 uppercase tracking-wider ${theme === 'dev' ? 'text-gray-500 font-mono' : 'text-gray-400'}`}>
                                            {theme === 'dev' ? '// Key Impact' : 'Key Responsibilities'}
                                        </h4>
                                        <ul className="space-y-2">
                                            {exp.impact.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2">
                                                    {theme === 'dev' ? (
                                                        <span className="text-[#00ff41] mt-1 font-mono text-sm leading-tight">Found exp:</span>
                                                    ) : (
                                                        <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                                                    )}
                                                    <span className={theme === 'dev' ? 'text-gray-400 font-mono text-sm' : 'text-gray-600'}>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Leadership Principle */}
                                    <div className={`p-4 rounded mb-4 ${theme === 'dev' ? 'bg-[#1a1b26] border border-gray-800' : 'bg-gray-50 border border-gray-100'}`}>
                                        {theme === 'dev' ? (
                                            <>
                                                <div className="text-xs font-semibold text-[#bd00ff] mb-1 font-mono">import leadership_principle;</div>
                                                <div className="text-gray-300 italic font-mono pl-4 border-l-2 border-[#bd00ff]">"{exp.principle}"</div>
                                            </>
                                        ) : (
                                            <div className="text-gray-700 italic pl-4 border-l-4 border-primary">"{exp.principle}"</div>
                                        )}
                                    </div>

                                    {/* Technologies */}
                                    <div>
                                        <h4 className={`text-xs font-bold mb-2 uppercase tracking-wider ${theme === 'dev' ? 'text-gray-500 font-mono' : 'text-gray-400'}`}>
                                            Technologies & Skills
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className={`px-2 py-1 text-xs rounded transition-colors ${theme === 'dev' ? 'bg-[#1a1b26] text-gray-400 border border-gray-800 hover:border-gray-600 font-mono' : 'bg-gray-100 text-gray-600 border border-transparent font-medium hover:bg-gray-200'}`}>
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
