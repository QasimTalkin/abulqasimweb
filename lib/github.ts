import { GitHubRepo, GitHubUser, LanguageStats } from '@/types/github';

const GITHUB_API = 'https://api.github.com';
const USERNAME = 'QasimTalkin';

// Cache for API responses
let reposCache: GitHubRepo[] | null = null;
let userCache: GitHubUser | null = null;

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
    if (userCache) return userCache;

    try {
        const response = await fetch(`${GITHUB_API}/users/${USERNAME}`, {
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            console.error('Failed to fetch GitHub user');
            return null;
        }

        userCache = await response.json();
        return userCache;
    } catch (error) {
        console.error('Error fetching GitHub user:', error);
        return null;
    }
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
    if (reposCache) return reposCache;

    try {
        const response = await fetch(
            `${GITHUB_API}/users/${USERNAME}/repos?sort=updated&per_page=100`,
            {
                next: { revalidate: 3600 }, // Cache for 1 hour
            }
        );

        if (!response.ok) {
            console.error('Failed to fetch GitHub repos');
            return [];
        }

        const repos = await response.json();

        // Filter out forks - already sorted by updated from GitHub API
        reposCache = repos.filter((repo: GitHubRepo) => !repo.fork);

        return reposCache;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}

export async function getLanguageStats(repos: GitHubRepo[]): Promise<LanguageStats> {
    const stats: LanguageStats = {};

    repos.forEach((repo) => {
        if (repo.language) {
            stats[repo.language] = (stats[repo.language] || 0) + 1;
        }
    });

    return stats;
}

export function getTechRarity(tech: string): 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common' {
    const legendary = ['Kubernetes', 'GraphQL', 'Microservices', 'Apache Kafka'];
    const epic = ['React', 'AWS', 'Docker', 'TypeScript', 'Next.js', 'Vue'];
    const rare = ['Node.js', 'PostgreSQL', 'Redis', 'Python', 'Java', 'Ruby'];
    const uncommon = ['MongoDB', 'Express', 'Angular', 'C#', 'Go'];

    const techLower = tech.toLowerCase();

    if (legendary.some(t => techLower.includes(t.toLowerCase()))) return 'legendary';
    if (epic.some(t => techLower.includes(t.toLowerCase()))) return 'epic';
    if (rare.some(t => techLower.includes(t.toLowerCase()))) return 'rare';
    if (uncommon.some(t => techLower.includes(t.toLowerCase()))) return 'uncommon';

    return 'common';
}

export function calculateRepoLevel(repo: GitHubRepo): number {
    // Calculate level based on stars, forks, and tech stack
    const stars = repo.stargazers_count;
    const forks = repo.forks_count;
    const topics = repo.topics?.length || 0;

    const baseLevel = Math.min(50, stars * 2 + forks * 5 + topics * 3);
    const languageBonus = repo.language ? 10 : 0;

    return Math.max(1, Math.min(100, baseLevel + languageBonus));
}
