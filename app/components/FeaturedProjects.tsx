'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface Project {
    title: string;
    subtitle: string;
    description: string;
    link: string;
    tech: string[];
}

const projectsData: Project[] = [
    {
        title: "Tag My Stock",
        subtitle: "AI-Powered Stock Image Tagging",
        description: "Tag My Stock is an AI-powered tool that helps photographers easily generate accurate tags for their stock images. Boost your visibility on stock image agencies with our simple, user-friendly tagging solution.",
        link: "https://tagmystock.com",
        tech: ["Next.js", "CloudeAI", "TailwindCSS"]
    },
];

const ProjectCard = ({ project }: { project: Project }) => {
    const [iframeError, setIframeError] = useState(false);

    return (
        <Link href={project.link} className="block group">
            <div className="relative bg-white rounded-lg transition-all duration-150 group-hover:-translate-y-1">
                {/* Preview */}
                <div className="aspect-[16/9] overflow-hidden bg-zinc-100 rounded-t-lg">
                    {!iframeError ? (
                        <iframe
                            src={project.link}
                            className="w-full h-full border-0 transform scale-[0.65] origin-top-left"
                            style={{
                                width: '154%',
                                height: '154%',
                                pointerEvents: 'none',
                                overflow: 'hidden'
                            }}
                            scrolling="no"
                            onError={() => setIframeError(true)}
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                            Preview not available
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                    <div className="space-y-2">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="text-xl font-light text-zinc-800">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-zinc-500">
                                    {project.subtitle}
                                </p>
                            </div>
                            <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-zinc-800 transition-colors" />
                        </div>
                    </div>

                    <p className="text-sm text-zinc-600 font-light leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-zinc-100 text-zinc-600 text-xs rounded-full"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Subtle border */}
                <div className="absolute inset-0 rounded-lg border border-zinc-200" />

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-lg border-2 border-zinc-800 opacity-0 scale-[1.02] transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
            </div>

            {/* Drop shadow */}
            <div className="absolute inset-0 -z-10 rounded-lg bg-zinc-200/50 transform translate-y-1 blur-sm transition-transform duration-300 group-hover:translate-y-2" />
        </Link>
    );
};

const FeaturedProjects = () => {
    return (
        <section className="w-full bg-[#faf9f6] px-12 py-16">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-light text-zinc-800 mb-12">
                    Selected Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;