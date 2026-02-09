export interface JourneyMilestone {
    id: string;
    year: string;
    title: string;
    company: string;
    role: string;
    type: 'career' | 'education' | 'teaching';
    lesson: string;
    growth: string;
    achievements: string[];
    technologies?: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
    {
        id: 'allocadia-manager',
        year: '2023-Present',
        title: 'Software Development Manager',
        company: 'Allocadia (Uptempo)',
        role: 'Leading Enterprise Teams',
        type: 'career',
        lesson: 'Leadership is about empowering others to succeed, not doing everything yourself',
        growth: 'Zero voluntary turnover, 3 internal promotions facilitated, 95% on-time delivery',
        achievements: [
            'Led cross-functional team of 7 engineers',
            'Architected microservices serving 500+ enterprise customers',
            '99.9% uptime achieved',
            'Reduced MTTR by 30% with comprehensive monitoring',
        ],
        technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'React', 'GraphQL', 'MySQL', 'AWS'],
    },
    {
        id: 'telus-lead',
        year: '2022-2023',
        title: 'Development Team Lead',
        company: 'Telus International',
        role: 'Cloud Architecture & Team Leadership',
        type: 'career',
        lesson: 'Scalability requires architectural foresight and continuous optimization',
        growth: '40% deployment efficiency improvement, 25% code quality increase',
        achievements: [
            'Led team of 6 developers',
            'Designed containerized microservices on GCP',
            'Served 1M+ active users',
            'Established code review standards',
        ],
        technologies: ['Ruby on Rails', 'Vue.js', 'React', 'Node.js', 'Docker', 'Kubernetes', 'GCP'],
    },
    {
        id: 'guardian-senior',
        year: '2020-2021',
        title: 'Senior Full Stack Engineer',
        company: 'Guardian Capital',
        role: 'Fintech & Quality Engineering',
        type: 'career',
        lesson: 'Quality code is tested code - comprehensive testing prevents costly mistakes',
        growth: '85% test coverage achieved, 35% reduction in production incidents',
        achievements: [
            'Led team of 5 engineers',
            'Modernized legacy financial systems',
            'Managed $50M+ in assets',
            '30% performance improvement',
        ],
        technologies: ['Ruby on Rails', 'AngularJS', 'React', 'Node.js', 'RSpec', 'Material UI'],
    },
    {
        id: 'algonquin-professor',
        year: '2019-Present',
        title: 'Computer Science Professor',
        company: 'Algonquin College',
        role: 'Educator & Mentor',
        type: 'teaching',
        lesson: 'Teaching deepens your own understanding and creates lasting impact',
        growth: '100+ students mentored annually with excellent course evaluations',
        achievements: [
            'Web Development curriculum',
            'OOP Java & Mobile Development',
            'Computer Architecture',
            'Industry best practices training',
        ],
        technologies: ['Java', 'JavaScript', 'React', 'Node.js', 'Mobile Development'],
    },
    {
        id: 'nji-developer',
        year: '2019-2020',
        title: 'Full Stack Web Developer',
        company: 'National Judicial Institute',
        role: 'Government Systems',
        type: 'career',
        lesson: 'Reliability and uptime are critical in mission-critical systems',
        growth: '98% application uptime, 20% user engagement increase',
        achievements: [
            'Judicial education applications',
            'Legal case management systems',
            'Automated testing frameworks',
        ],
        technologies: ['ColdFusion', 'Mura CMS', 'Hibernate', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
        id: 'dnd-developer',
        year: '2018-2019',
        title: 'Software Developer',
        company: 'Department of National Defence',
        role: 'Security & Compliance',
        type: 'career',
        lesson: 'Security and compliance are non-negotiable in sensitive environments',
        growth: '25% database optimization, government security clearance obtained',
        achievements: [
            'Secure defense applications',
            'Mission-critical systems',
            'Cross-departmental collaboration',
        ],
        technologies: ['.NET Framework', 'C#', 'ASP.NET', 'SQL Server'],
    },
    {
        id: 'uottawa-grad',
        year: '2015-2018',
        title: 'Bachelor of Applied Engineering',
        company: 'University of Ottawa',
        role: 'Computer Science Student',
        type: 'education',
        lesson: 'Strong fundamentals and continuous learning are the foundation of success',
        growth: '3.8 GPA, Honors with Specialization in Management and Entrepreneurship',
        achievements: [
            'Computer Science degree',
            'Management specialization',
            'Entrepreneurship focus',
        ],
    },
    {
        id: 'toronto-bootcamp',
        year: '2022-2023',
        title: 'Full Stack Bootcamp Instructor',
        company: 'University of Toronto',
        role: 'MERN Stack Educator',
        type: 'teaching',
        lesson: 'Structured curriculum and hands-on practice create confident developers',
        growth: '95% student completion rate, 85% job placement rate',
        achievements: [
            'MERN stack curriculum design',
            'Trained 50+ students',
            'GraphQL instruction',
        ],
        technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'GraphQL'],
    },
    {
        id: 'w3schools-instructor',
        year: '2023',
        title: 'Lead Instructor',
        company: 'W3Schools.com',
        role: 'Web Development Education',
        type: 'teaching',
        lesson: 'Clear instruction and mentorship create cohesive learning experiences',
        growth: 'Led teaching assistants, specialized in modern web technologies',
        achievements: [
            'Front-end and back-end instruction',
            'Mentored teaching assistants',
            'Modern web tech specialization',
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Git', 'React', 'Node.js', 'SQL'],
    },
];
