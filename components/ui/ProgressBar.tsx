import React from 'react';

interface ProgressBarProps {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    variant?: 'xp' | 'health' | 'boss';
    className?: string;
}

export function ProgressBar({
    value,
    max = 100,
    label,
    showValue = true,
    variant = 'xp',
    className = ''
}: ProgressBarProps) {
    const percentage = Math.min(100, (value / max) * 100);

    const variants = {
        xp: 'stat-bar',
        health: 'stat-bar',
        boss: 'boss-health-bar',
    };

    const fillVariants = {
        xp: 'stat-bar-fill',
        health: 'stat-bar-fill bg-gradient-to-r from-green-500 to-green-300',
        boss: 'boss-health-fill',
    };

    return (
        <div className={className}>
            {label && (
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-primary">{label}</span>
                    {showValue && (
                        <span className="text-sm font-mono text-accent-cyan">
                            {value}/{max}
                        </span>
                    )}
                </div>
            )}
            <div className={variants[variant]}>
                <div
                    className={fillVariants[variant]}
                    style={{ width: `${percentage}%` }}
                >
                    {variant === 'xp' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                    )}
                </div>
            </div>
        </div>
    );
}
