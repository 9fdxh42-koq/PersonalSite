import React from 'react';

const Hero = () => {
    return (
        <main className="min-h-screen bg-[#faf9f6]">
            <div className="w-full h-full pt-32">
                <div className="px-12 py-24">
                    <div className="max-w-5xl mx-auto">
                        {/* Main content */}
                        <div className="space-y-16 relative">
                            {/* Header */}
                            <div className="space-y-4">
                                <h1 className="text-7xl font-light tracking-tight text-zinc-800 leading-none">
                                    Mathias Clari Drenik
                                </h1>
                                <div className="h-px w-48 bg-zinc-200" />
                                <p className="text-2xl text-zinc-600 font-light">
                                    Full-Stack Developer
                                </p>
                            </div>

                            {/* Description and CTA */}
                            <div className="max-w-2xl space-y-8">
                                <p className="text-lg text-zinc-600 font-light leading-relaxed">
                                    Creating seamless digital experiences where code meets design
                                    A Slovenian developer working internationally to shape the modern web.
                                </p>
                            </div>

                            {/* Background circles */}
                            <div className="absolute -right-4 top-0 w-96 h-96 bg-gradient-to-br from-zinc-100 to-transparent
                                          rounded-full blur-3xl opacity-50 mix-blend-multiply -z-10" />
                            <div className="absolute -left-8 bottom-0 w-72 h-72 bg-gradient-to-tr from-zinc-100 to-transparent
                                          rounded-full blur-3xl opacity-30 mix-blend-multiply -z-10" />
                        </div>
                    </div>
                </div>

                {/* Subtle grid texture */}
                <div className="fixed inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply"
                     style={{
                         backgroundImage: `radial-gradient(circle at center, #000 1px, transparent 1px)`,
                         backgroundSize: '32px 32px'
                     }}
                />
            </div>
        </main>
    );
};

export default Hero;