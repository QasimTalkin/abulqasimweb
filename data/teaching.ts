export interface TeachingResource {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    liveUrl: string;
    repoUrl: string;
    tags: string[];
    // Icon key mapped in the Teaching component
    icon: 'slides' | 'code';
}

export const teachingResources: TeachingResource[] = [
    {
        id: 'fs-slidedeck',
        title: 'Full Stack Development',
        subtitle: 'Course Slide Deck',
        description:
            'An interactive slide deck I built and maintain for teaching full stack web development — covering the front end, back end, APIs, and modern tooling. Deployed live on GitHub Pages.',
        liveUrl: 'https://qasimtalkin.github.io/FS-SlideDeck/',
        repoUrl: 'https://github.com/QasimTalkin/FS-SlideDeck',
        tags: ['React', 'Vite', 'Teaching', 'Full Stack'],
        icon: 'slides',
    },
    {
        id: 'algonquin-live-code',
        title: 'Algonquin College Course Portal',
        subtitle: 'Live Code Repository',
        description:
            'The course portal for my Algonquin College classes, where I publish live code, labs, and examples as I teach. Auto-built and deployed on every push so students always have the latest material.',
        liveUrl: 'https://qasimtalkin.github.io/AlgonquinCollege-Live_Code_Repo/',
        repoUrl: 'https://github.com/QasimTalkin/AlgonquinCollege-Live_Code_Repo',
        tags: ['Algonquin College', 'Live Code', 'Labs', 'Web Dev'],
        icon: 'code',
    },
];
