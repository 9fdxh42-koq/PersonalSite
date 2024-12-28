import React from 'react';
import { Github, Twitter } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-[#faf9f6] px-12 py-8">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-8">
                    <span className="text-sm text-zinc-400">
                        M.C.D
                    </span>

                    <a
                        href="https://github.com/mathiasclari"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-800 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-4 h-4" />
                    </a>
                    <a
                        href="https://twitter.com/mathiasclari"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-800 transition-colors"
                        aria-label="Twitter"
                    >
                        <Twitter className="w-4 h-4" />
                    </a>
                </div>

                <div className="text-xs text-zinc-400">
                    © {currentYear} Mathias Clari Drenik. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;