'use client';

import React, { useEffect, useState } from 'react';
import { LevelCard } from './LevelCard';
import { fetchGitHubRepos } from '@/lib/github';
import { GitHubRepo } from '@/types/github';

export function LevelMap() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadRepos() {
            const data = await fetchGitHubRepos();
            setRepos(data.slice(0, 12)); // Show top 12 repos
            setLoading(false);
        }
        loadRepos();
    }, []);

    return (
        <section className="py-20 relative">
            <div className="game-container">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4">
                        <span className="text-gradient">LEVELS CLEARED</span>
                    </h2>
                    <p className="text-gray-400">Projects conquered and loot collected</p>
                </div>

                {loading ? (
                    <div className="text-center py-20">
                        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent"></div>
                        <p className="text-gray-400 mt-4">Loading levels...</p>
                    </div>
                ) : repos.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-400">No levels found. Check back soon!</p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {repos.map((repo) => (
                                <LevelCard key={repo.id} repo={repo} />
                            ))}
                        </div>

                        {/* View more on GitHub */}
                        <div className="text-center mt-12">
                            <a
                                href="https://github.com/QasimTalkin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent-cyan text-background font-semibold rounded-lg hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                            >
                                View All Levels on GitHub
                            </a>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
