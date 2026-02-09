export interface Principle {
    id: string;
    title: string;
    description: string;
    example: string;
    category: 'personal' | 'team' | 'technical' | 'leadership';
}

// Personal Principles
export const personalPrinciples: Principle[] = [
    {
        id: 'make-it-real',
        title: 'Ship > Perfect',
        description: 'Real artists ship. Perfection is the enemy of progress.',
        example: 'Prototype it today, refine it tomorrow.',
        category: 'personal',
    },
    {
        id: 'embrace-failure',
        title: 'Fail Fast, Recover Faster',
        description: 'Post-mortems are for learning, not blaming. Optimism in the face of failure.',
        example: 'First deployment broke? Fix it, learn, and deploy again.',
        category: 'personal',
    },
    {
        id: 'trust-meter',
        title: 'Default to Open',
        description: 'Trust is given, not earned. Transparency builds velocity.',
        example: 'Share work in progress. Hide nothing.',
        category: 'personal',
    },
    {
        id: 'limit-friction',
        title: 'Strong Opinions, Loosely Held',
        description: 'Argue like you\'re right, listen like you\'re wrong.',
        example: 'Challenge assumptions, but commit fully once a decision is made.',
        category: 'personal',
    },
    {
        id: 'problem-solving',
        title: 'Fall in Love with the Problem',
        description: 'Don\'t retrofit a solution. Understand the "Why" before the "How".',
        example: 'Is this a real user issue or just engineering vanity?',
        category: 'personal',
    },
    {
        id: 'master-domain',
        title: 'Extreme Ownership',
        description: 'You build it, you run it. No throwing code over the wall.',
        example: 'If the build breaks, you fix it. No excuses.',
        category: 'personal',
    },
    {
        id: 'resourcefulness',
        title: 'Figure It Out',
        description: 'Google the error, read the docs, try things. Invalidate hypotheses.',
        example: 'Spent 15 minutes debugging before asking for help.',
        category: 'technical',
    },
    {
        id: 'well-thought-out',
        title: 'Patience Over Speed',
        description: 'Go slow to go fast. Measure twice, cut once.',
        example: 'Design doc first, code second.',
        category: 'leadership',
    },
    {
        id: 'good-enough',
        title: 'Good Enough is Good Enough',
        description: 'Diminishing returns are real. Know when to stop.',
        example: '80% solution shipped beats 100% solution delayed.',
        category: 'technical',
    },
    {
        id: 'build-to-demand',
        title: 'Build to Demand',
        description: 'YAGNI (You Aren\'t Gonna Need It). optimizing for the future is a trap.',
        example: 'Don\'t build a generic framework for one use case.',
        category: 'technical',
    },
];

// Team Principles
export const teamPrinciples: Principle[] = [
    {
        id: 'everything-as-code',
        title: 'Infrastructure as Code',
        description: 'Click-ops is forbidden. If it\'s not in Git, it doesn\'t exist.',
        example: 'Terraform for everything. Reproducible environments.',
        category: 'team',
    },
    {
        id: 'idea-meritocracy',
        title: 'Idea Meritocracy',
        description: 'The best idea wins, regardless of title or tenure.',
        example: 'Intern\'s data-backed idea > CTos gut feeling.',
        category: 'team',
    },
    {
        id: 'customer-right',
        title: 'Obsess Over the Customer',
        description: 'They pay our salaries. Solve their pain, don\'t just close tickets.',
        example: 'Developer says it\'s slow? Investigate, don\'t dismiss.',
        category: 'team',
    },
    {
        id: 'chaos-evidence',
        title: 'Hope is Not a Strategy',
        description: 'Verify resilience. Test in production (carefully).',
        example: 'Chaos engineering to find weaknesses before customers do.',
        category: 'team',
    },
    {
        id: 'developer-experience',
        title: 'Optimize the Inner Loop',
        description: 'DevEX is a competitive advantage. Fast builds, fast tests, happy devs.',
        example: 'One-command setup. <5 min CI builds.',
        category: 'team',
    },
];
