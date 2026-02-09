export interface Experience {
    id: string;
    title: string;
    company: string;
    period: string;
    type: 'leadership' | 'engineering' | 'teaching';
    impact: string[];
    principle: string;
    technologies: string[];
}

export const experiences: Experience[] = [
    {
        id: 'allocadia-manager',
        title: 'Software Development Manager',
        company: 'Allocadia (Uptempo)',
        period: 'Aug 2023 - Present',
        type: 'leadership',
        impact: [
            'Led cross-functional team of 7 engineers delivering enterprise platform to 500+ customers',
            'Achieved 99.9% uptime through comprehensive monitoring and proactive incident management',
            '95% on-time delivery rate through optimized Agile processes',
            'Zero voluntary turnover with 3 internal promotions facilitated',
            'Reduced mean time to resolution by 30% with AWS CloudWatch and New Relic',
        ],
        principle: 'Well thought-out decisions over instant gratification - be the leader the organization needs',
        technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'React', 'GraphQL', 'MySQL', 'AWS'],
    },
    {
        id: 'telus-lead',
        title: 'Development Team Lead / Senior Full Stack Engineer',
        company: 'Telus International',
        period: 'Jul 2022 - Aug 2023',
        type: 'leadership',
        impact: [
            'Led team of 6 developers building applications serving 1M+ active users',
            'Improved deployment efficiency by 40% with containerized microservices on GCP',
            'Increased code quality metrics by 25% through code review standards and mentoring',
            'Designed Docker/Kubernetes architecture for scalable cloud infrastructure',
        ],
        principle: 'Build to demand - understand your customers and build what they need',
        technologies: ['Ruby on Rails', 'Vue.js', 'React', 'Node.js', 'Docker', 'Kubernetes', 'GCP'],
    },
    {
        id: 'guardian-senior',
        title: 'Senior Full Stack Engineer / Team Lead',
        company: 'Guardian Capital (Modern Advisor)',
        period: 'Mar 2020 - Sep 2021',
        type: 'engineering',
        impact: [
            'Led team of 5 engineers modernizing legacy financial systems managing $50M+ in assets',
            'Achieved 85% test coverage with comprehensive TDD practices using RSpec',
            'Reduced production incidents by 35% through quality engineering practices',
            'Improved application response times by 30% with database optimization',
        ],
        principle: 'Everything as code - peer reviewed, easily deployed, and easily rolled back',
        technologies: ['Ruby on Rails', 'AngularJS', 'React', 'Node.js', 'RSpec', 'Material UI'],
    },
    {
        id: 'algonquin-professor',
        title: 'Computer Science Professor',
        company: 'Algonquin College',
        period: 'Aug 2019 - Present',
        type: 'teaching',
        impact: [
            'Mentor 100+ students annually in Web Development, OOP Java, and Mobile Development',
            'Developed curriculum for modern web technologies and industry best practices',
            'Received excellent student feedback and course evaluations',
        ],
        principle: 'Make it real - take what you envision and make it real, build it and share it',
        technologies: ['Java', 'JavaScript', 'React', 'Node.js', 'Mobile Development'],
    },
    {
        id: 'nji-developer',
        title: 'Full Stack Web Developer',
        company: 'National Judicial Institute',
        period: 'Jun 2019 - Mar 2020',
        type: 'engineering',
        impact: [
            'Built judicial education applications with 98% uptime for critical systems',
            'Increased user engagement by 20% through responsive interface design',
            'Implemented automated testing frameworks for reliability',
        ],
        principle: 'Be the master of your domain - own your product through and through',
        technologies: ['ColdFusion', 'Mura CMS', 'Hibernate', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
        id: 'dnd-developer',
        title: 'Software Developer',
        company: 'Department of National Defence',
        period: 'Jan 2018 - Jun 2019',
        type: 'engineering',
        impact: [
            'Developed secure defense applications for military operations',
            'Optimized database performance by 25% through efficient SQL design',
            'Ensured compliance with government security standards',
        ],
        principle: 'Limit friction - be open, honest, and collaborative across the organization',
        technologies: ['.NET Framework', 'C#', 'ASP.NET', 'SQL Server'],
    },
];
