'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { GitHubRepo } from '@/types/github';
import { getTechRarity, calculateRepoLevel } from '@/lib/github';
import { ExternalLink, Star, GitFork } from 'lucide-react';

interface LevelCardProps {
    repo: GitHubRepo;
}

export function LevelCard({ repo }: LevelCardProps) {
    const level = calculateRepoLevel(repo);
    const languageRarity = repo.language ? getTechRarity(repo.language) : 'common';

    return (
        <Card hover className="relative">
            {/* Level badge */}
            <div className="absolute top-4 right-4">
                <div className="level-badge text-sm">
                    LVL {level}
                </div>
            </div>

            {/* Repo name */}
            <h3 className="text-xl font-bold text-white mb-2 pr-20">
                {repo.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {repo.description || (repo.topics && repo.topics.length > 0
                    ? `Level focusing on ${repo.topics.slice(0, 3).join(', ')}.`
                    : 'System data retrieval in progress...')}
            </p>

            {/* Main language as primary loot */}
            {repo.language && (
                <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Primary Loot:</p>
                    <Badge rarity={languageRarity}>
                        {repo.language}
                    </Badge>
                </div>
            )}

            {/* Topics as additional loot */}
            {repo.topics && repo.topics.length > 0 && (
                <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Additional Loot:</p>
                    <div className="flex flex-wrap gap-2">
                        {repo.topics.slice(0, 5).map((topic) => (
                            <Badge key={topic} rarity={getTechRarity(topic)}>
                                {topic}
                            </Badge>
                        ))}
                    </div>
                </div>
            )}

            {/* Stats */}
            <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-legendary" />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4 text-primary" />
                    <span>{repo.forks_count}</span>
                </div>
            </div>

            {/* View on GitHub */}
            <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-accent-cyan transition-colors text-sm font-semibold"
            >
                View Level <ExternalLink className="w-4 h-4" />
            </a>

            {/* Completion indicator */}
            <div className="absolute bottom-4 right-4">
                <div className="text-2xl">
                    {repo.stargazers_count > 0 ? '⭐' : '🔒'}
                </div>
            </div>
        </Card>
    );
}
