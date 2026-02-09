'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';

export function BossEncounter() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [bossHealth, setBossHealth] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Update boss health based on form completion
        const totalFields = 3;
        const filledFields = Object.values({ ...formData, [name]: value }).filter(v => v.trim() !== '').length;
        setBossHealth((filledFields / totalFields) * 100);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitted(true);
        setLoading(false);
    };

    if (submitted) {
        return (
            <section className="py-20 relative overflow-hidden">
                <div className="game-container">
                    <div className="max-w-2xl mx-auto text-center">
                        <Card>
                            <div className="py-12">
                                <div className="text-6xl mb-6 animate-bounce">🎉</div>
                                <h2 className="text-4xl font-bold text-gradient mb-4">
                                    BOSS DEFEATED!
                                </h2>
                                <p className="text-xl text-gray-300 mb-6">
                                    Connection established successfully!
                                </p>
                                <p className="text-gray-400 mb-8">
                                    Your message has been sent. I&apos;ll get back to you as soon as possible!
                                </p>
                                <Button
                                    variant="legendary"
                                    onClick={() => {
                                        setSubmitted(false);
                                        setFormData({ name: '', email: '', message: '' });
                                        setBossHealth(0);
                                    }}
                                >
                                    Start New Quest
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Epic background */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-red-900/10 to-background" />
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500 rounded-full filter blur-3xl animate-pulse" />
            </div>

            <div className="game-container relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold mb-4">
                        <span className="text-gradient">FINAL BOSS ENCOUNTER</span>
                    </h2>
                    <p className="text-gray-400">Complete the quest to establish a connection</p>
                </div>

                <div className="max-w-2xl mx-auto">
                    {/* Boss */}
                    <div className="mb-8 text-center">
                        <div className="text-8xl mb-4 animate-float">
                            👾
                        </div>
                        <h3 className="text-3xl font-bold text-red-400 mb-4">
                            THE OPPORTUNITY
                        </h3>
                        <ProgressBar
                            value={bossHealth}
                            max={100}
                            variant="boss"
                            label="Connection Strength"
                        />
                    </div>

                    {/* Battle Form */}
                    <Card>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Attack */}
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-2">
                                    ⚔️ Introduce Yourself
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background-tertiary border border-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            {/* Email Attack */}
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-2">
                                    📡 Establish Communication Channel
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-background-tertiary border border-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            {/* Message Attack */}
                            <div>
                                <label className="block text-sm font-semibold text-primary mb-2">
                                    💬 Deliver Your Pitch
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 bg-background-tertiary border border-primary/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                    placeholder="Tell me about your project, opportunity, or just say hi!"
                                />
                            </div>

                            {/* Submit - Final Strike */}
                            <Button
                                type="submit"
                                variant="legendary"
                                size="lg"
                                className="w-full"
                                disabled={loading || bossHealth < 100}
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                                        Launching Attack...
                                    </span>
                                ) : (
                                    '⚡ FINAL STRIKE - Send Quest'
                                )}
                            </Button>

                            {bossHealth < 100 && (
                                <p className="text-xs text-center text-gray-400">
                                    Complete all fields to unlock the final strike!
                                </p>
                            )}
                        </form>
                    </Card>

                    {/* Player health (motivation) */}
                    <div className="mt-8">
                        <ProgressBar
                            value={100}
                            max={100}
                            variant="health"
                            label="Your Motivation"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
