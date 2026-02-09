import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'legendary' | 'epic' | 'rare' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}: ButtonProps) {
    const baseStyles = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

    const variants = {
        primary: 'bg-gradient-to-r from-primary to-accent-cyan text-background hover:shadow-glow',
        legendary: 'bg-gradient-to-r from-legendary to-accent-gold text-background hover:shadow-legendary',
        epic: 'bg-gradient-to-r from-epic to-accent-purple text-white hover:shadow-epic',
        rare: 'bg-gradient-to-r from-rare to-primary text-white hover:shadow-rare',
        ghost: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
