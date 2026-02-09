'use client';

import React, { useState } from 'react';
import { CharacterCard } from './CharacterCard';
import { characters } from '@/data/characters';
import { profileData } from '@/data/profile';

export function CharacterSelect() {
    const [selectedCharacter, setSelectedCharacter] = useState(characters[0].id);

    return (
        <section className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full filter blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-epic rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }} />
            </div>

            <div className="game-container relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-6xl md:text-7xl font-bold mb-4">
                        <span className="text-gradient">SELECT YOUR CLASS</span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-2">{profileData.name}</p>
                    <p className="text-lg text-primary">{profileData.title}</p>
                    <p className="text-sm text-accent-cyan">{profileData.location}</p>

                    {/* Player level */}
                    <div className="mt-6 inline-block">
                        <div className="level-badge text-lg px-6 py-2">
                            PLAYER LEVEL 34
                        </div>
                    </div>
                </div>

                {/* Character grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {characters.map((character) => (
                        <CharacterCard
                            key={character.id}
                            character={character}
                            isSelected={selectedCharacter === character.id}
                            onClick={() => setSelectedCharacter(character.id)}
                        />
                    ))}
                </div>

                {/* Call to action */}
                <div className="text-center">
                    <p className="text-gray-400 text-sm animate-pulse">
                        ↓ Scroll down to explore my journey ↓
                    </p>
                </div>
            </div>
        </section>
    );
}
