'use client'
import React from 'react';

interface Skill {
    name: string;
    level: number;
    description: string;
    category: 'development' | 'design' | 'tools' | 'other';
    tags: string[];
}

const skills: Skill[] = [
    {
        name: "Frontend Development",
        level: 90,
        description: "Building responsive and interactive web applications",
        category: "development",
        tags: ["React", "Next.js","SvelteKit" ,"TypeScript"]
    },
    {
        name: "UI/UX Design",
        level: 87,
        description: "Creating intuitive and beautiful user interfaces",
        category: "design",
        tags: ["Prototyping"]
    },
    {
        name: "Backend Development",
        level: 75,
        description: "Developing scalable server-side applications",
        category: "development",
        tags: ["Node.js", "NextJS"]
    },
    {
        name: "Cloud Services",
        level: 72,
        description: "Deploying and managing cloud infrastructure",
        category: "tools",
        tags: ["AWS", "Vercel"]
    }
];

const SkillCard = ({ skill }: { skill: Skill }) => {
    return (
        <div className="group relative bg-white rounded-lg p-6 transition-all duration-150 hover:-translate-y-1">
            {/* Progress circle in the background */}
            <div
                className="absolute top-6 right-6 w-24 h-24 rounded-full border-8 border-zinc-100 opacity-25"
                style={{
                    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 ${100 - skill.level}%)`
                }}
            />

            <div className="relative space-y-4">
                <h3 className="text-lg font-light text-zinc-800">
                    {skill.name}
                </h3>

                {/* Progress bar */}
                <div className="relative h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div
                        className="absolute inset-y-0 left-0 bg-zinc-800 transition-all duration-1000 rounded-full"
                        style={{ width: `${skill.level}%` }}
                    />
                </div>

                <p className="text-sm text-zinc-600 font-light">
                    {skill.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-xs text-zinc-600 bg-zinc-100 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Level indicator */}
                <div className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center">
                    <span className="text-sm font-light text-zinc-400">
                        {skill.level}%
                    </span>
                </div>
            </div>

            {/* Border and shadow effects */}
            <div className="absolute inset-0 rounded-lg border border-zinc-200" />
            <div className="absolute inset-0 rounded-lg border-2 border-zinc-800 opacity-0 scale-[1.02] transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
        </div>
    );
};

const SkillsSection = () => {
    return (
        <section className="w-full bg-[#faf9f6] px-12 py-24">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Header */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-light text-zinc-800">
                        Skills & Expertise
                    </h2>
                    <div className="h-px w-24 bg-zinc-200" />
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard key={index} skill={skill} />
                    ))}
                </div>

                {/* Background decoration */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-zinc-100 to-transparent rounded-full blur-3xl opacity-50 mix-blend-multiply -z-10" />
            </div>
        </section>
    );
};

export default SkillsSection;