import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
    glow?: boolean;
}

export function Card({ children, className = '', hover = false, glow = false }: CardProps) {
    const hoverStyles = hover ? 'hover:scale-105 hover:shadow-glow cursor-pointer' : '';
    const glowStyles = glow ? 'animate-glow-pulse' : '';

    return (
        <div className={`glass-effect rounded-lg p-6 transition-all duration-300 ${hoverStyles} ${glowStyles} ${className}`}>
            {children}
        </div>
    );
}
