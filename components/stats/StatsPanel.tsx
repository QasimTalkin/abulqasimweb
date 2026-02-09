'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { profileData } from '@/data/profile';

export function StatsPanel() {
    const stats = {
        leadership: 95,
        technical: 92,
        teaching: 95,
        communication: 88,
    };

    const playerStats = {
        level: 34,
        xp: 8500,
        maxXp: 10000,
        projects: profileData.stats.projectsCompleted,
        students: profileData.stats.studentsMentored,
        teamSize: profileData.stats.teamSize,
    };

    return (
        <section className="py-20 relative">
            <div className="game-container">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4">
                        <span className="text-gradient">PLAYER STATS</span>
                    </h2>
                    <p className="text-gray-400">Your character attributes and achievements</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Core Stats */}
                    <Card>
                        <h3 className="text-2xl font-bold text-primary mb-6">Core Attributes</h3>
                        <div className="space-y-4">
                            <ProgressBar
                                label="Leadership"
                                value={stats.leadership}
                                variant="xp"
                            />
                            <ProgressBar
                                label="Technical"
                                value={stats.technical}
                                variant="xp"
                            />
                            <ProgressBar
                                label="Teaching"
                                value={stats.teaching}
                                variant="xp"
                            />
                            <ProgressBar
                                label="Communication"
                                value={stats.communication}
                                variant="xp"
                            />
                        </div>

                        {/* XP Bar */}
                        <div className="mt-8">
                            <ProgressBar
                                label="Experience Points"
                                value={playerStats.xp}
                                max={playerStats.maxXp}
                                variant="xp"
                            />
                            <p className="text-xs text-gray-400 mt-2 text-center">
                                {playerStats.maxXp - playerStats.xp} XP to next level
                            </p>
                        </div>
                    </Card>

                    {/* Quick Stats */}
                    <Card>
                        <h3 className="text-2xl font-bold text-primary mb-6">Career Metrics</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-4 bg-background-tertiary rounded-lg">
                                <div className="text-4xl font-bold text-legendary mb-2">
                                    {profileData.stats.yearsOfExperience}+
                                </div>
                                <div className="text-sm text-gray-400">Years Experience</div>
                            </div>

                            <div className="text-center p-4 bg-background-tertiary rounded-lg">
                                <div className="text-4xl font-bold text-epic mb-2">
                                    {playerStats.projects}+
                                </div>
                                <div className="text-sm text-gray-400">Projects Completed</div>
                            </div>

                            <div className="text-center p-4 bg-background-tertiary rounded-lg">
                                <div className="text-4xl font-bold text-rare mb-2">
                                    {playerStats.students}+
                                </div>
                                <div className="text-sm text-gray-400">Students Mentored</div>
                            </div>

                            <div className="text-center p-4 bg-background-tertiary rounded-lg">
                                <div className="text-4xl font-bold text-uncommon mb-2">
                                    {playerStats.teamSize}
                                </div>
                                <div className="text-sm text-gray-400">Current Team Size</div>
                            </div>

                            <div className="text-center p-4 bg-background-tertiary rounded-lg">
                                <div className="text-4xl font-bold text-legendary mb-2">
                                    {profileData.stats.technologiesMastered}+
                                </div>
                                <div className="text-sm text-gray-400">Technologies</div>
                            </div>

                            <div className="text-center p-4 bg-background-tertiary rounded-lg">
                                <div className="text-4xl font-bold text-epic mb-2">
                                    99.9%
                                </div>
                                <div className="text-sm text-gray-400">Uptime Achieved</div>
                            </div>
                        </div>

                        {/* Special Stats */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-legendary/10 to-epic/10 rounded-lg border border-legendary/30">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-legendary">Zero Turnover Rate</span>
                                <span className="text-2xl">🏆</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-1">
                                Maintained 0% voluntary turnover across all teams
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
