import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Terminal Theme
                terminal: {
                    DEFAULT: '#0C0C0C',
                    dark: '#050505',
                    header: '#1a1b26',
                },
                neon: {
                    green: '#00ff41',
                    blue: '#00f3ff',
                    purple: '#bd00ff',
                },
                // Leadership & Growth Theme - Deep Navy + Teal + Gold accents
                background: {
                    DEFAULT: '#fafbfc',
                    secondary: '#f1f5f9',
                    tertiary: '#e2e8f0',
                    dark: '#0f172a',

                    'dark-secondary': '#1e293b',
                    'dark-tertiary': '#334155',
                },
                primary: {
                    DEFAULT: '#0d9488', // Teal - Trust & Growth
                    dark: '#0f766e',
                    light: '#14b8a6',
                },
                secondary: {
                    DEFAULT: '#1e40af', // Deep Blue - Leadership
                    dark: '#1e3a8a',
                    light: '#3b82f6',
                },
                accent: {
                    DEFAULT: '#d97706', // Gold - Achievement
                    dark: '#b45309',
                    light: '#f59e0b',
                },
                success: '#059669',
                warning: '#d97706',
                error: '#dc2626',
            },
            fontFamily: {
                sans: ['var(--font-mono)', 'var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
                display: ['var(--font-mono)', 'var(--font-poppins)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.7s ease-out',
                'grow': 'grow 0.8s ease-out',
                'shimmer': 'shimmer 1.5s infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                grow: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                shimmer: {
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            boxShadow: {
                'soft': '0 2px 8px rgba(15, 23, 42, 0.06)',
                'medium': '0 4px 16px rgba(15, 23, 42, 0.1)',
                'strong': '0 8px 32px rgba(15, 23, 42, 0.15)',
                'leadership': '0 4px 20px rgba(13, 148, 136, 0.15)',
            },
        },
    },
    darkMode: 'class',
    plugins: [],
};

export default config;
