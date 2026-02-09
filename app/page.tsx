import { Hero } from '@/components/hero/Hero';
import { Timeline } from '@/components/journey/Timeline';
import { Principles } from '@/components/principles/Principles';
import { Skills } from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Contact } from '@/components/contact/Contact';

export default function Home() {
    return (
        <main className="min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Abul Qasim',
                        jobTitle: ['Software Engineering Manager', 'CTO', 'Professor'],
                        url: 'https://abulqasim.dev',
                        sameAs: [
                            'https://github.com/QasimTalkin',
                            'https://ca.linkedin.com/in/abulqasim',
                            'https://twitter.com/QasimTalkin'
                        ],
                        alumniOf: 'Algonquin College',
                        knowsAbout: [
                            'Software Engineering Management',
                            'Team Leadership',
                            'Cloud Architecture',
                            'Full Stack Development',
                            'Java',
                            'React',
                            'AWS'
                        ],
                        description: 'Engineering Leader and fractional CTO building high-performing teams and scalable software.'
                    }),
                }}
            />
            <Hero />
            <Timeline />
            <Principles />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}
