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
        title: 'Make It Real',
        description: 'Don\'t just talk about it—build it, write it down, and ship it.',
        example: 'Had an idea for a feature? Prototype it this week.',
        category: 'personal',
    },
    {
        id: 'embrace-failure',
        title: 'Embrace Failure',
        description: 'Every great thing started with many failures. Just start doing it.',
        example: 'First deployment broke? Learn from it and deploy again.',
        category: 'personal',
    },
    {
        id: 'trust-meter',
        title: 'Trust Starts Full',
        description: 'You have my trust from day one. It\'s yours to lose or grow.',
        example: 'New team member? Full autonomy from the start.',
        category: 'personal',
    },
    {
        id: 'limit-friction',
        title: 'Limit Friction',
        description: 'Be open and collaborative. Focus energy on moving value, not arguing.',
        example: 'Skip the politics, ship the feature.',
        category: 'personal',
    },
    {
        id: 'problem-solving',
        title: 'What Problem Are We Solving?',
        description: 'Always clarify the actual problem before diving into solutions.',
        example: 'Is this a real issue or are we solving the wrong thing?',
        category: 'personal',
    },
    {
        id: 'master-domain',
        title: 'Own Your Product',
        description: 'Own it completely. If it sucks, get excited to make it better.',
        example: 'Dogfood your own API—if it\'s painful, fix it.',
        category: 'personal',
    },
    {
        id: 'resourcefulness',
        title: 'Be Resourceful',
        description: 'Google the error, try things, invalidate hypotheses before escalating.',
        example: 'Spent 15 minutes debugging before asking for help.',
        category: 'technical',
    },
    {
        id: 'well-thought-out',
        title: 'Patience Over Speed',
        description: 'Make well-thought-out decisions. Be the leader, not the hero.',
        example: 'Take a day to design it right vs. a week fixing shortcuts.',
        category: 'leadership',
    },
    {
        id: 'good-enough',
        title: 'Good Enough Is Good Enough',
        description: 'Know when to ship. Perfection sounds great but rarely works.',
        example: '80% solution shipped beats 100% solution delayed.',
        category: 'technical',
    },
    {
        id: 'build-to-demand',
        title: 'Build to Demand',
        description: 'Build what customers need, not what you can. Understand them deeply.',
        example: 'Third customer asks for it? Time to build the feature.',
        category: 'technical',
    },
];

// Team Principles
export const teamPrinciples: Principle[] = [
    {
        id: 'everything-as-code',
        title: 'Everything as Code',
        description: 'Code, version control, peer review, easy deploy, easy rollback.',
        example: 'Infrastructure, configs, docs—all in Git.',
        category: 'team',
    },
    {
        id: 'idea-meritocracy',
        title: 'Idea Meritocracy',
        description: 'Best ideas win. Psychological safety, candor, and open debate.',
        example: 'Junior engineer\'s suggestion beats senior\'s if it\'s better.',
        category: 'team',
    },
    {
        id: 'customer-right',
        title: 'Customer Is Always Right',
        description: 'Be empathetic. Put yourself in their shoes. Trust but verify.',
        example: 'Developer says it\'s slow? Investigate, don\'t dismiss.',
        category: 'team',
    },
    {
        id: 'chaos-evidence',
        title: 'Test with Chaos',
        description: 'Challenge systems scientifically. Hypothesis, test, adapt.',
        example: 'Run chaos engineering to find weaknesses before customers do.',
        category: 'team',
    },
    {
        id: 'developer-experience',
        title: 'Great Developer Experience',
        description: 'Make teams work safer, faster, and happier. Enable productivity.',
        example: 'One-command setup, fast CI/CD, clear docs.',
        category: 'team',
    },
];
