'use client';

import React, { useEffect, useState } from 'react';
import { getGitHubRepos } from '@/lib/github';
import type { GitHubRepo } from '@/types/github';
import { ExternalLink, Star, GitFork } from 'lucide-react';

export function Projects() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const data = await getGitHubRepos();
                setRepos(data.slice(0, 12));
            } catch (error) {
                console.error('Failed to fetch repos:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchRepos();
    }, []);

    if (loading) {
        return (
            <section id="projects" className="py-20 bg-background-secondary dark:bg-background-dark-secondary">
                <div className="container-custom">
                    <div className="text-center">
                        <div className="text-gray-600 dark:text-gray-400">Loading projects...</div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="py-20 bg-background-secondary dark:bg-background-dark-secondary">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Open source contributions and personal projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {repos.map((repo) => (
                        <div key={repo.id} className="card group">
                            <div className="flex items-start justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                    {repo.name}
                                </h3>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-primary transition-colors"
                                    aria-label={`View ${repo.name} on GitHub`}
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                {repo.description || 'No description available'}
                            </p>

                            {/* Tech Stack */}
                            {repo.topics && repo.topics.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {repo.topics.slice(0, 5).map((topic) => (
                                        <span key={topic} className="tech-badge text-xs">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Stats */}
                            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                <div className="flex items-center gap-1">
                                    <Star size={16} className="text-warning" />
                                    <span>{repo.stargazers_count}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <GitFork size={16} />
                                    <span>{repo.forks_count}</span>
                                </div>
                                {repo.language && (
                                    <div className="ml-auto">
                                        <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                                            {repo.language}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/QasimTalkin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        View All Projects on GitHub <ExternalLink size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
}
