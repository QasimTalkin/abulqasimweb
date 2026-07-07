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
        id: 'ratehub-manager',
        title: 'Engineering Manager',
        company: 'Ratehub',
        period: 'Feb 2026 - Present',
        type: 'leadership',
        impact: [
            'Leading a cross-functional squad of 6 engineers (3 FE, 2 BE, 1 QA) as the engineering pillar of a Product-Design-Engineering triad, shipping core platform infrastructure and the flagship Memberships product suite',
            'Owning quarterly and annual capacity planning with a lightweight estimation model now used across every engineering team, keeping delivery predictable and comparable across squads',
            'Driving an engineering-first review culture with high-fidelity architecture and code reviews that surface technical debt early, plus rapid proof-of-concept workflows that de-risk technical direction before Product commits',
            'Introducing an engineering onboarding playbook that ramps new hires quickly and consistently, and owning hiring across levels with structured rubrics and live technical assessments',
            'Coaching peer engineering leads new to management and steering org-wide structural decisions in a Director-adjacent capacity after the departure of senior engineering leadership',
            'Partnering with Marketing to build Generative Engine Optimization (GEO) infrastructure, defining front-end readability standards that make content discoverable to LLMs, a first-mover capability in Canadian fintech',
        ],
        principle: 'Fail fast, iron out the engineering early, and de-risk before we scale.',
        technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Microservices', 'GEO'],
    },
    {
        id: 'allocadia-manager',
        title: 'Software Development Manager',
        company: 'Allocadia (Uptempo)',
        period: 'Aug 2023 - Jan 2026',
        type: 'leadership',
        impact: [
            'Led cross-functional team of 7 engineers, 1 PM, and 1 UX designer delivering an enterprise marketing operations platform serving 500+ enterprise customers',
            'Architected and delivered scalable microservices using Java, Spring Boot, Apache Kafka, React, GraphQL, and MySQL achieving 99.9% uptime',
            'Optimized Agile processes and sprint planning, achieving 95% on-time delivery and 20% improvement in sprint velocity',
            'Implemented comprehensive monitoring with AWS CloudWatch, Raygun, and New Relic reducing mean time to resolution by 30%',
            'Established 1:1 coaching and career development programs resulting in zero voluntary turnover and 3 internal promotions',
            'Collaborated with C-level executives and product stakeholders to define technical roadmap and prioritize high-impact features',
        ],
        principle: 'Clear roadblocks, enable flow, and trust the team to execute.',
        technologies: ['Java', 'Spring Boot', 'Apache Kafka', 'React', 'GraphQL', 'MySQL', 'AWS'],
    },
    {
        id: 'telus-lead',
        title: 'Development Team Lead / Senior Full Stack Engineer',
        company: 'Telus International',
        period: 'Jul 2022 - Aug 2023',
        type: 'leadership',
        impact: [
            'Led engineering team of 6 developers building customer-facing telecommunications applications serving 1M+ active users',
            'Designed and implemented containerized microservices architecture using Docker and Kubernetes on Google Cloud Platform, improving deployment efficiency by 40%',
            'Developed high-performance web applications using Ruby on Rails, Vue.js, React, Backbone.js, and Node.js with comprehensive test coverage',
            'Established code review standards, mentoring protocols, and best practices increasing team code quality metrics by 25%',
            'Collaborated with cross-functional product, design, and QA teams to deliver 20+ major features aligned with business objectives',
        ],
        principle: 'Ship value, not just code. Validated learning over guesswork.',
        technologies: ['Ruby on Rails', 'Vue.js', 'React', 'Node.js', 'Docker', 'Kubernetes', 'GCP'],
    },
    {
        id: 'guardian-senior',
        title: 'Senior Full Stack Engineer / Team Lead',
        company: 'Guardian Capital (Modern Advisor)',
        period: 'Mar 2020 - Sep 2021',
        type: 'engineering',
        impact: [
            'Led team of 5 Full Stack Engineers modernizing legacy financial management systems into an automated portfolio management platform',
            'Architected and developed fintech applications using Ruby on Rails, AngularJS, React, Node.js, and Material UI handling $50M+ in assets',
            'Implemented comprehensive TDD practices using RSpec, achieving 85% test coverage and reducing production incidents by 35%',
            'Collaborated with financial advisors and compliance teams to ensure regulatory adherence and a seamless user experience',
            'Optimized database performance and implemented caching strategies improving application response times by 30%',
        ],
        principle: 'Automate everything. If you do it twice, script it.',
        technologies: ['Ruby on Rails', 'AngularJS', 'React', 'Node.js', 'RSpec', 'Material UI'],
    },
    {
        id: 'algonquin-professor',
        title: 'Computer Science Professor',
        company: 'Algonquin College',
        period: 'Aug 2019 - Present',
        type: 'teaching',
        impact: [
            'Deliver lectures and labs in Web Development, OOP Java, Mobile Development, and Computer Architecture',
            'Mentor 100+ students annually in software development and career guidance',
            'Developed curriculum for modern web technologies and industry best practices',
            'Received excellent student feedback and course evaluations',
        ],
        principle: 'Learn by building. Theory without practice is just trivia.',
        technologies: ['Java', 'JavaScript', 'React', 'Node.js', 'Mobile Development'],
    },
    {
        id: 'nji-developer',
        title: 'Full Stack Web Developer',
        company: 'National Judicial Institute',
        period: 'Jun 2019 - Mar 2020',
        type: 'engineering',
        impact: [
            'Developed judicial education web applications and automation tools using ColdFusion, Mura CMS, and Hibernate ORM',
            'Built advanced ColdFusion Components (CFCs) with complex business logic for legal case management systems',
            'Designed responsive interfaces using HTML5, CSS3, and JavaScript improving user engagement by 20%',
            'Implemented automated testing frameworks ensuring 98% application uptime for critical judicial systems',
        ],
        principle: 'Extreme Ownership. The buck stops here.',
        technologies: ['ColdFusion', 'Mura CMS', 'Hibernate', 'HTML5', 'CSS3', 'JavaScript'],
    },
    {
        id: 'dnd-developer',
        title: 'Software Developer',
        company: 'Department of National Defence',
        period: 'Jan 2018 - Jun 2019',
        type: 'engineering',
        impact: [
            'Designed and developed secure web-based defense applications using .NET Framework, C#, and ASP.NET for military operations',
            'Architected efficient SQL Server databases and stored procedures optimizing data retrieval by 25%',
            'Facilitated cross-departmental communication gathering requirements for mission-critical government systems',
            'Ensured compliance with government security standards and implemented robust authentication mechanisms',
        ],
        principle: 'Mission critical reliability. Zero margin for error.',
        technologies: ['.NET Framework', 'C#', 'ASP.NET', 'SQL Server'],
    },
];
