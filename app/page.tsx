import { Hero } from '@/components/hero/Hero';
import { Timeline } from '@/components/journey/Timeline';
import { Principles } from '@/components/principles/Principles';
import { Skills } from '@/components/skills/Skills';
import { Projects } from '@/components/projects/Projects';
import { Contact } from '@/components/contact/Contact';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Timeline />
            <Principles />
            <Skills />
            <Projects />
            <Contact />
        </main>
    );
}
