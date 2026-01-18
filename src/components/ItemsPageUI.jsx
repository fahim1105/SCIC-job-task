"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Eye, Star, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ItemsPageUI({ items = [] }) {
    return (
        <div className="min-h-screen bg-base-200/50 py-16 px-6 md:px-10">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
                            Elite <span className="text-primary">Collection</span>
                        </h1>
                        <p className="text-base-content/60 font-medium">
                            Discover next-level performance gadgets curated for professionals.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {items.length > 0 ? items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="card bg-base-100 border border-base-content/5 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)]">
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-5 left-5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-bold uppercase tracking-widest">
                                        New Arrival
                                    </div>
                                 
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-2">
                                        <h2 className="text-xl font-bold group-hover:text-primary transition-colors">{item.name}</h2>
                                        <div className="flex items-center gap-1 text-warning">
                                            <Star size={14} fill="currentColor" />
                                            <span className="text-xs font-bold text-base-content">4.9</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-base-content/5 pt-6 mt-4">
                                        <div className="flex flex-col">
                                            <span className="text-xs text-base-content/40 font-bold uppercase">Price</span>
                                            <span className="text-2xl font-black text-base-content">${item.price}</span>
                                        </div>
                                        <Link href={`/items/${item.id}`} className="btn btn-neutral rounded-2xl px-6 gap-2 group/btn">
                                            Details <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )) : (
                        <p className="col-span-full text-center text-xl opacity-50">No items found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}