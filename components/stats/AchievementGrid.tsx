'use client';

import React from 'react';
import { achievements } from '@/data/achievements';

export function AchievementGrid() {
    return (
        <section className="py-20 bg-background-secondary/30">
            <div className="game-container">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4">
                        <span className="text-gradient">ACHIEVEMENTS UNLOCKED</span>
                    </h2>
                    <p className="text-gray-400">Milestones earned throughout the journey</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {achievements.map((achievement) => (
                        <div
                            key={achievement.id}
                            className={`achievement-card ${achievement.unlocked ? '' : 'opacity-50 grayscale'}`}
                        >
                            {/* Icon */}
                            <div className="text-5xl mb-3 text-center">
                                {achievement.icon}
                            </div>

                            {/* Rarity indicator */}
                            <div className={`text-center mb-2 text-xs font-bold rarity-${achievement.rarity}`}>
                                {achievement.rarity.toUpperCase()}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-center mb-2 text-white">
                                {achievement.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs text-gray-400 text-center mb-3">
                                {achievement.description}
                            </p>

                            {/* Unlock date */}
                            {achievement.unlocked && achievement.unlockedDate && (
                                <div className="text-xs text-center text-accent-cyan">
                                    Unlocked: {achievement.unlockedDate}
                                </div>
                            )}

                            {/* Category badge */}
                            <div className="mt-3 text-center">
                                <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                                    {achievement.category}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
