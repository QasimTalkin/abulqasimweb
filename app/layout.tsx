import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

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
    title: "Abul Qasim - Engineering Leader",
    description: "Results-driven Software Engineering Manager with 9+ years of experience building enterprise-scale products and leading high-performing teams.",
    keywords: ["Software Engineering Manager", "Team Lead", "Full Stack Developer", "Engineering Leadership"],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans`}>
                <Navigation />
                {children}
                <Footer />
            </body>
        </html>
    );
}
