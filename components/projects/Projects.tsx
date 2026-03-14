'use client';

import React, { useEffect, useState } from 'react';
import { getGitHubRepos } from '@/lib/github';
import type { GitHubRepo } from '@/types/github';
import { ExternalLink, Star, GitFork, Github } from 'lucide-react';
import { useTheme } from '@/components/ui/ThemeProvider';

export function Projects() {
    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState(true);
    const { theme } = useTheme();

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
        <section id="projects" className={`py-20 transition-colors duration-500 ${theme === 'dev' ? 'bg-[#0C0C0C]' : 'bg-background'}`}>
            <div className="container-custom">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-bold mb-4 ${theme === 'dev' ? 'text-white' : 'text-background-dark'}`}>Featured Projects</h2>
                    {theme === 'dev' ? (
                        <p className="font-mono text-sm text-gray-500">
                            <span className="text-[#00ff41]">git log</span> --oneline --graph --decorate
                        </p>
                    ) : (
                        <p className="text-lg text-gray-600">
                            A selection of open-source contributions and technical explorations.
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {repos.map((repo) => (
                        <div key={repo.id} className={`group h-full flex flex-col rounded-xl p-6 transition-all duration-300 border ${theme === 'dev'
                                ? 'bg-[#1a1b26] border-gray-800 hover:border-gray-600'
                                : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
                            }`}>
                            <div className="flex items-start justify-between mb-4">
                                <h3 className={`text-xl font-bold transition-colors ${theme === 'dev' ? 'text-white group-hover:text-[#00ff41] font-mono' : 'text-background-dark group-hover:text-primary'}`}>
                                    {repo.name}
                                </h3>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`transition-colors ${theme === 'dev' ? 'text-gray-400 hover:text-[#00ff41]' : 'text-gray-400 hover:text-primary'}`}
                                    aria-label={`View ${repo.name} on GitHub`}
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>

                            <p className={`mb-4 line-clamp-3 flex-grow text-sm border-l pl-3 ${theme === 'dev'
                                    ? 'text-gray-400 font-mono border-gray-800'
                                    : 'text-gray-600 border-gray-200'
                                }`}>
                                {repo.description || (repo.topics && repo.topics.length > 0
                                    ? `Specializing in ${repo.topics.slice(0, 3).join(', ')}${repo.topics.length > 3 ? ' and more' : ''}.`
                                    : 'A classified project exploring technical horizons.')}
                            </p>

                            <div className="mt-auto">
                                {/* Tech Stack */}
                                {repo.topics && repo.topics.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {repo.topics.slice(0, 5).map((topic) => (
                                            <span key={topic} className={`px-2 py-1 text-xs rounded transition-colors ${theme === 'dev'
                                                    ? 'bg-[#0C0C0C] text-gray-300 border border-gray-800'
                                                    : 'bg-primary-light/10 text-primary font-medium'
                                                }`}>
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Stats */}
                                <div className={`flex items-center gap-4 text-sm pt-4 border-t ${theme === 'dev' ? 'text-gray-500 font-mono border-gray-800' : 'text-gray-500 border-gray-100 font-medium'
                                    }`}>
                                    <div className="flex items-center gap-1">
                                        <Star size={14} className={theme === 'dev' ? 'text-yellow-400' : 'text-warning'} />
                                        <span>{repo.stargazers_count}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <GitFork size={14} className={theme === 'dev' ? 'text-[#3b82f6]' : 'text-secondary'} />
                                        <span>{repo.forks_count}</span>
                                    </div>
                                    {repo.language && (
                                        <div className="ml-auto">
                                            <span className={`text-xs px-2 py-1 rounded border ${theme === 'dev'
                                                    ? 'bg-[#3b82f6]/10 text-[#3b82f6] border-[#3b82f6]/20'
                                                    : 'bg-secondary/10 text-secondary border-secondary/20'
                                                }`}>
                                                {repo.language}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/QasimTalkin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${theme === 'dev'
                                ? 'bg-transparent border border-gray-700 text-gray-400 hover:border-white hover:text-white font-mono'
                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm hover:shadow-md'
                            }`}
                    >
                        <Github size={20} className={theme === 'dev' ? '' : 'text-gray-700'} /> View All on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
