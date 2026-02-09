export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    topics: string[];
    created_at: string;
    updated_at: string;
    pushed_at: string;
}

export interface GitHubUser {
    login: string;
    name: string;
    avatar_url: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
}

export interface LanguageStats {
    [language: string]: number;
}
