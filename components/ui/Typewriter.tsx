'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    delay?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
    words,
    typingSpeed = 150,
    deletingSpeed = 100,
    delay = 2000
}) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setInterval(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearInterval(timeout2);
    }, []);

    // Typing effect
    useEffect(() => {
        if (index === words.length) {
            setIndex(0); // Loop back
            return;
        }

        if (subIndex === words[index].length + 1 && !reverse) {
            const timeout = setTimeout(() => {
                setReverse(true);
            }, delay);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typingSpeed, deletingSpeed, delay]);

    return (
        <span className="font-mono">
            {`${words[index].substring(0, subIndex)}`}
            <span className={`inline-block w-[2px] h-[1em] bg-[#00ff41] align-middle ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
        </span>
    );
};
