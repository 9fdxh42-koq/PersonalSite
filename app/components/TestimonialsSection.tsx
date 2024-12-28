import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
    content: string;
    author: string;
    role: string;
    company: string;
}

const testimonials: Testimonial[] = [
    {
        content: "Want to be my first client? I'm a great designer, I promise!",
        author: "This can be you",
        role: "Best Client",
        company: "Your Company"
    }
];

const TestimonialsSection = () => {
    return (
        <section className="w-full bg-[#faf9f6] px-12 py-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-light text-zinc-800 mb-16">
                    Client Words
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative"
                        >
                            {/* Main card */}
                            <div className="relative bg-white rounded-lg p-8 transition-all duration-300 group-hover:-translate-y-1">
                                {/* Quote icon */}
                                <Quote
                                    className="absolute -top-3 -left-3 text-zinc-900/5"
                                    size={48}
                                />

                                <div className="relative space-y-6">
                                    <p className="text-lg text-zinc-600 font-light leading-relaxed">
                                        {testimonial.content}
                                    </p>

                                    <div>
                                        <div className="font-medium text-zinc-800">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-sm text-zinc-500">
                                            {testimonial.role} · {testimonial.company}
                                        </div>
                                    </div>
                                </div>

                                {/* Subtle border */}
                                <div className="absolute inset-0 rounded-lg border border-zinc-200" />

                                {/* Hover border effect */}
                                <div className="absolute inset-0 rounded-lg border-2 border-zinc-800 opacity-0 scale-[1.02] transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                            </div>

                            {/* Simple shadow */}
                            <div className="absolute inset-0 -z-10 rounded-lg bg-zinc-200/50 transform translate-y-1 blur-sm transition-transform duration-300 group-hover:translate-y-2" />
                        </div>
                    ))}
                </div>

                {/* Background decoration */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-zinc-100 to-transparent rounded-full blur-3xl opacity-50 mix-blend-multiply -z-10" />
            </div>
        </section>
    );
};

export default TestimonialsSection;