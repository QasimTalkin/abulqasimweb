'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { JourneyMilestone } from '@/data/journey';

interface MilestoneCardProps {
    milestone: JourneyMilestone;
    index: number;
}

export function MilestoneCard({ milestone, index }: MilestoneCardProps) {
    const isLeft = index % 2 === 0;

    return (
        <div className={`flex items-center gap-8 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
            {/* Card */}
            <div className="flex-1">
                <Card hover>
                    {/* Year badge */}
                    <div className="mb-4">
                        <Badge rarity="epic">
                            {milestone.year}
                        </Badge>
                    </div>

                    {/* Title and company */}
                    <h3 className="text-2xl font-bold text-gradient mb-2">
                        {milestone.title}
                    </h3>
                    <p className="text-lg text-primary mb-1">{milestone.company}</p>
                    <p className="text-sm text-accent-cyan mb-4">{milestone.role}</p>

                    {/* Lesson learned */}
                    <div className="mb-4 p-4 bg-legendary/10 border-l-4 border-legendary rounded">
                        <p className="text-xs font-semibold text-legendary mb-1">💡 Lesson Learned:</p>
                        <p className="text-sm text-gray-300 italic">&quot;{milestone.lesson}&quot;</p>
                    </div>

                    {/* Growth */}
                    <div className="mb-4 p-4 bg-primary/10 border-l-4 border-primary rounded">
                        <p className="text-xs font-semibold text-primary mb-1">📈 Growth:</p>
                        <p className="text-sm text-gray-300">{milestone.growth}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                        <p className="text-xs font-semibold text-accent-purple mb-2">Key Achievements:</p>
                        <ul className="space-y-1">
                            {milestone.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-legendary text-xs mt-1">★</span>
                                    <span className="text-sm text-gray-400">{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    {milestone.technologies && milestone.technologies.length > 0 && (
                        <div>
                            <p className="text-xs font-semibold text-gray-500 mb-2">Tech Stack:</p>
                            <div className="flex flex-wrap gap-2">
                                {milestone.technologies.map((tech) => (
                                    <span key={tech} className="text-xs px-2 py-1 rounded bg-background-tertiary text-gray-400">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </Card>
            </div>

            {/* Timeline connector */}
            <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent-cyan shadow-glow" />
                {index < 8 && (
                    <div className="w-1 h-32 bg-gradient-to-b from-primary/50 to-transparent" />
                )}
            </div>

            {/* Spacer for alternating layout */}
            <div className="flex-1" />
        </div>
    );
}
