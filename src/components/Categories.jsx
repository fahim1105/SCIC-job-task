"use client"; // অ্যানিমেশনের জন্য ক্লায়েন্ট কম্পোনেন্ট প্রয়োজন

import { motion } from "framer-motion";
import { Laptop, Mouse, Keyboard, ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
    {
        name: 'Laptops',
        icon: <Laptop size={32} />,
        count: '120+ Items',
        color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        name: 'Mice',
        icon: <Mouse size={32} />,
        count: '85+ Items',
        color: 'from-purple-500/20 to-pink-500/20'
    },
    {
        name: 'Keyboards',
        icon: <Keyboard size={32} />,
        count: '60+ Items',
        color: 'from-orange-500/20 to-red-500/20'
    },
];

export default function Categories() {
    return (
        <section className="py-24 px-6 md:px-10 bg-base-100">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-4xl font-black tracking-tight mb-2">
                            Popular <span className="text-primary">Categories</span>
                        </h2>
                        <p className="text-base-content/60">Handpicked premium tech essentials just for you.</p>
                    </div>
                    <Link href="/items" className="btn btn-ghost text-primary hover:bg-primary/10">
                        View All Categories <ChevronRight size={18} />
                    </Link>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group relative overflow-hidden rounded-3xl p-8 border border-base-content/5 bg-gradient-to-br ${cat.color} hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer`}
                        >
                            {/* Background Glow Effect */}
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all"></div>

                            {/* Icon Container */}
                            <div className="mb-6 inline-flex p-4 rounded-2xl bg-base-100 shadow-sm text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                {cat.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {cat.name}
                            </h3>
                            <p className="text-sm font-medium text-base-content/50 uppercase tracking-widest">
                                {cat.count}
                            </p>

                            {/* Decorative Arrow */}
                            <div className="mt-8 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 text-primary">
                                Explore Now <ChevronRight size={16} className="ml-1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}