import React from 'react';

interface BadgeProps {
    rarity: 'legendary' | 'epic' | 'rare' | 'uncommon' | 'common';
    children: React.ReactNode;
    className?: string;
}

export function Badge({ rarity, children, className = '' }: BadgeProps) {
    const rarityStyles = {
        legendary: 'rarity-legendary bg-legendary/10',
        epic: 'rarity-epic bg-epic/10',
        rare: 'rarity-rare bg-rare/10',
        uncommon: 'rarity-uncommon bg-uncommon/10',
        common: 'rarity-common bg-common/10',
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${rarityStyles[rarity]} ${className}`}>
            {children}
        </span>
    );
}
