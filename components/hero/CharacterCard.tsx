'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Character } from '@/data/characters';

interface CharacterCardProps {
    character: Character;
    isSelected?: boolean;
    onClick?: () => void;
}

export function CharacterCard({ character, isSelected = false, onClick }: CharacterCardProps) {
    return (
        <Card
            hover
            glow={isSelected}
            className={`relative overflow-hidden ${isSelected ? 'ring-2 ring-primary' : ''}`}
            onClick={onClick}
        >
            {/* Rarity indicator */}
            <div className="absolute top-0 right-0 p-2">
                <Badge rarity={character.rarity}>
                    {character.rarity.toUpperCase()}
                </Badge>
            </div>

            {/* Level badge */}
            <div className="absolute top-0 left-0 p-2">
                <div className="level-badge">
                    LVL {character.level}
                </div>
            </div>

            {/* Character info */}
            <div className="mt-12">
                <h3 className="text-2xl font-bold text-gradient mb-1">
                    {character.name}
                </h3>
                <p className="text-sm text-primary mb-1">{character.title}</p>
                <p className="text-xs text-accent-cyan mb-2">{character.company}</p>
                <p className="text-xs text-gray-400 mb-4">{character.period}</p>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                    <ProgressBar
                        label="Leadership"
                        value={character.stats.leadership}
                        showValue={false}
                    />
                    <ProgressBar
                        label="Technical"
                        value={character.stats.technical}
                        showValue={false}
                    />
                    {character.stats.teaching && (
                        <ProgressBar
                            label="Teaching"
                            value={character.stats.teaching}
                            showValue={false}
                        />
                    )}
                    <ProgressBar
                        label="Communication"
                        value={character.stats.communication}
                        showValue={false}
                    />
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-4">
                    {character.description}
                </p>

                {/* Achievements */}
                <div className="space-y-1">
                    <p className="text-xs font-semibold text-accent-purple mb-2">Key Achievements:</p>
                    {character.achievements.slice(0, 3).map((achievement, index) => (
                        <div key={index} className="flex items-start gap-2">
                            <span className="text-legendary text-xs">★</span>
                            <span className="text-xs text-gray-400">{achievement}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </Card>
    );
}
