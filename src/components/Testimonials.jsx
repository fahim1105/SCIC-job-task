"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
    return (
        <section className="py-24 bg-base-200/30 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        Trusted by <span className="text-primary">Thousands</span>
                    </h2>
                    <p className="text-base-content/60 italic">Real stories from our tech community</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    {/* Main Card */}
                    <div className="bg-base-100 p-10 md:p-16 rounded-[3rem] shadow-2xl border border-base-content/5 relative overflow-hidden">
                        {/* Quote Icon Background */}
                        <div className="absolute top-6 left-10 text-primary/10 select-none">
                            <Quote size={120} fill="currentColor" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            {/* Rating */}
                            <div className="flex gap-1 mb-8 text-warning">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>

                            {/* Review Text */}
                            <blockquote className="text-2xl md:text-3xl font-medium italic text-base-content leading-relaxed mb-10 max-w-3xl">
                                "The best customer service ever! I bought a laptop and it arrived in perfect condition within 24 hours. Their attention to detail is simply unmatched."
                            </blockquote>

                            {/* User Profile */}
                            <div className="flex flex-col items-center">
                                <div className="avatar mb-4">
                                    <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                                        <img
                                            src="https://i.pravatar.cc/150?u=asif"
                                            alt="Asif Al Fath"
                                        />
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-base-content">Thomas Albart</h4>
                                <p className="text-sm font-semibold uppercase tracking-widest text-primary mt-1">
                                    Verified Tech Buyer
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Floating Dots */}
                    <div className="hidden md:block absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
                    <div className="hidden md:block absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"></div>
                </motion.div>
            </div>
        </section>
    );
}