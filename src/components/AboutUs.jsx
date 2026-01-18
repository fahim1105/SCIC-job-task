"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Target, Zap } from "lucide-react";

export default function AboutUs() {
    return (
        <section className="py-24 px-6 md:px-10 bg-base-200/50 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side: Content & Small Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                            <Zap size={16} /> Since 2020
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                            Revolutionizing How You <span className="text-primary">Experience Technology.</span>
                        </h2>

                        <p className="text-lg text-base-content/70 leading-relaxed mb-8">
                            We don't just sell gadgets; we curate experiences. Our mission is to bridge the gap
                            between cutting-edge innovation and everyday life, ensuring quality and trust
                            remain at the core of every transaction.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex gap-4 p-4 rounded-2xl bg-base-100 shadow-sm border border-base-content/5">
                                <div className="text-primary"><ShieldCheck size={28} /></div>
                                <div>
                                    <h4 className="font-bold">Authenticity</h4>
                                    <p className="text-sm text-base-content/60">100% Genuine Products</p>
                                </div>
                            </div>
                            <div className="flex gap-4 p-4 rounded-2xl bg-base-100 shadow-sm border border-base-content/5">
                                <div className="text-secondary"><Target size={28} /></div>
                                <div>
                                    <h4 className="font-bold">Our Vision</h4>
                                    <p className="text-sm text-base-content/60">Tech for Everyone</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side: Visual Bento Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Decorative Image Card */}
                        <div className="relative z-10 w-full h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-base-100">
                            <img
                                src="https://i.ibb.co.com/d4Bk2F3R/exospace-bbsr-M0-N-efn-l1-A-unsplash.jpg"
                                alt="Our Tech Team"
                                className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                            {/* Floating Badge on Image */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
                                <p className="text-white text-sm italic italic">
                                    "Technology is best when it brings people together."
                                </p>
                            </div>
                        </div>

                        {/* Background Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 blur-[80px] rounded-full"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}