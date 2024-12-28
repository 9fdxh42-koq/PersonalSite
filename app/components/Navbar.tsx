'use client'
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    // Handle smooth scroll
    return (
        <div className="fixed w-full top-0 bg-[#faf9f6]/80 backdrop-blur-sm z-50">
            <div className="h-24 flex items-center px-12">
                <div className="text-xl">
                    <Link
                        href="/"
                        className="font-light tracking-wide hover:tracking-wider transition-all duration-300 text-zinc-800"
                    >
                        Mathias Clari Drenik Personal Portfolio
                    </Link>
                </div>
            </div>

            {/* Subtle gradient border */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
        </div>
    );
};

export default Navbar;