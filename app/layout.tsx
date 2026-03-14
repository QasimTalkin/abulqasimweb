import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from '@/components/ui/ThemeProvider';

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({
    weight: ['400', '600', '700', '800'],
    subsets: ["latin"],
    variable: '--font-poppins'
});
const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: '--font-mono'
});

export const metadata: Metadata = {
    title: "Abul Qasim | Engineering Leader, Professor & Software Development Manager",
    description: "Results-driven Software Engineering Manager and Computer Science Professor. Specializing in building high-performing teams, scalable enterprise architecture, and cloud-native solutions. Based in Ottawa.",
    keywords: [
        "Software Engineering Manager",
        "CTO",
        "Chief Technology Officer",
        "Head of Engineering",
        "Director of Engineering",
        "Team Lead",
        "Full Stack Developer",
        "Technical Leadership",
        "Ottawa",
        "Remote"
    ],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abulqasim.net",
        title: "Abul Qasim | Engineering Leader & CTO",
        description: "Building high-performing teams and scalable software systems. 9+ years of experience in leadership and full-stack development.",
        siteName: "Abul Qasim Portfolio",
        images: [
            {
                url: "/og-image.png", // We'll need to ensure this exists or use a placeholder
                width: 1200,
                height: 630,
                alt: "Abul Qasim - Engineering Leader",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Abul Qasim | Engineering Leader & CTO",
        description: "Engineering Manager & Professor. Scaling teams and tech.",
        creator: "@QasimTalkin",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-QPYLK2PRJ5"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-QPYLK2PRJ5');
                        `,
                    }}
                />
            </head>
            <body className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans`}>
                <ThemeProvider>
                    <Navigation />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
