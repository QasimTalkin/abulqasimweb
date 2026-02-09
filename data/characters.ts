export interface Character {
    id: string;
    name: string;
    title: string;
    company: string;
    period: string;
    rarity: 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common';
    level: number;
    stats: {
        leadership: number;
        technical: number;
        teaching?: number;
        communication: number;
    };
    achievements: string[];
    description: string;
    unlocked: boolean;
}

export const characters: Character[] = [
    {
        id: 'manager',
        name: 'Engineering Manager',
        title: 'Software Development Manager',
        company: 'Allocadia (Uptempo)',
        period: 'Aug 2023 - Present',
        rarity: 'legendary',
        level: 95,
        stats: {
            leadership: 95,
            technical: 92,
            communication: 90,
        },
        achievements: [
            'Led cross-functional team of 7 engineers',
            '99.9% uptime achieved',
            '95% on-time delivery rate',
            'Zero voluntary turnover',
            '3 internal promotions facilitated',
        ],
        description: 'Master of team leadership and enterprise-scale delivery. Architected microservices solutions serving 500+ enterprise customers.',
        unlocked: true,
    },
    {
        id: 'team-lead',
        name: 'Team Lead',
        title: 'Development Team Lead / Senior Full Stack Engineer',
        company: 'Telus International',
        period: 'Jul 2022 - Aug 2023',
        rarity: 'epic',
        level: 85,
        stats: {
            leadership: 85,
            technical: 90,
            communication: 85,
        },
        achievements: [
            'Led team of 6 developers',
            '1M+ active users served',
            '40% deployment efficiency improvement',
            '25% code quality increase',
            'Containerized microservices architecture',
        ],
        description: 'Cloud architecture specialist. Designed and implemented Docker/Kubernetes solutions on GCP.',
        unlocked: true,
    },
    {
        id: 'senior-engineer',
        name: 'Senior Engineer',
        title: 'Senior Full Stack Engineer / Team Lead',
        company: 'Guardian Capital (Modern Advisor)',
        period: 'Mar 2020 - Sep 2021',
        rarity: 'rare',
        level: 80,
        stats: {
            leadership: 75,
            technical: 90,
            communication: 80,
        },
        achievements: [
            'Led team of 5 engineers',
            '$50M+ in assets managed',
            '85% test coverage achieved',
            '35% reduction in production incidents',
            '30% performance improvement',
        ],
        description: 'Fintech specialist. Modernized legacy financial systems with comprehensive TDD practices.',
        unlocked: true,
    },
    {
        id: 'professor',
        name: 'Professor',
        title: 'Computer Science Professor',
        company: 'Algonquin College',
        period: 'Aug 2019 - Present',
        rarity: 'epic',
        level: 90,
        stats: {
            leadership: 80,
            technical: 85,
            teaching: 95,
            communication: 95,
        },
        achievements: [
            'Excellent student feedback',
            '100+ students mentored annually',
            'Web Development curriculum',
            'OOP Java & Mobile Development',
            'Industry best practices training',
        ],
        description: 'Master educator. Delivers lectures and mentors students in modern software development.',
        unlocked: true,
    },
    {
        id: 'full-stack-dev',
        name: 'Full Stack Developer',
        title: 'Full Stack Web Developer',
        company: 'National Judicial Institute',
        period: 'Jun 2019 - Mar 2020',
        rarity: 'uncommon',
        level: 70,
        stats: {
            leadership: 60,
            technical: 80,
            communication: 75,
        },
        achievements: [
            'Judicial education applications',
            '98% application uptime',
            '20% user engagement increase',
            'ColdFusion & Mura CMS expertise',
            'Legal case management systems',
        ],
        description: 'Government systems specialist. Built critical judicial applications with high reliability.',
        unlocked: true,
    },
    {
        id: 'software-dev',
        name: 'Software Developer',
        title: 'Software Developer',
        company: 'Department of National Defence',
        period: 'Jan 2018 - Jun 2019',
        rarity: 'uncommon',
        level: 65,
        stats: {
            leadership: 50,
            technical: 75,
            communication: 70,
        },
        achievements: [
            'Secure defense applications',
            '.NET Framework & C# mastery',
            '25% database optimization',
            'Government security compliance',
            'Mission-critical systems',
        ],
        description: 'Security-focused developer. Built secure web applications for military operations.',
        unlocked: true,
    },
];
