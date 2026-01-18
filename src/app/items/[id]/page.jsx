"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft, Star, ShieldCheck, Truck, RefreshCcw } from 'lucide-react';
import { useSimpleToast } from '@/hooks/useSimpleToast';

export default function ItemDetails() {
    const params = useParams();
    const router = useRouter();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const { success, ToastContainer } = useSimpleToast();

    useEffect(() => {
        if (params.id) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setItem(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [params.id]);

    const handleBuyNow = () => {
        if (item && item.name) {
            success(`🛒 ${item.name} added to cart successfully!`);
        } else {
            success(`🛒 Item added to cart successfully!`);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <span className="loading loading-ring loading-lg text-primary"></span>
        </div>
    );

    if (!item) return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h2 className="text-2xl font-bold text-error">Item not found! ❌</h2>
            <button onClick={() => router.back()} className="btn btn-outline btn-primary rounded-xl">Go Back</button>
        </div>
    );

    return (
        <div className="min-h-screen bg-base-200/50 py-12 px-6 md:px-10">
            <ToastContainer />
            <div className="max-w-6xl mx-auto">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-sm font-bold opacity-50 hover:opacity-100 transition-all mb-8 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Store
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left: Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative group bg-base-100 rounded-[3rem] overflow-hidden p-4 shadow-2xl border border-base-content/5"
                    >
                        <div className="aspect-square rounded-[2.5rem] overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Decorative Badge */}
                        <div className="absolute top-8 left-8 badge badge-primary p-4 font-bold rounded-xl shadow-lg shadow-primary/20 uppercase tracking-widest text-[10px]">
                            Exclusive Item
                        </div>
                    </motion.div>

                    {/* Right: Product Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col gap-6"
                    >
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex text-warning">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <span className="text-sm font-bold opacity-50">(4.9/5 Quality Rating)</span>
                            </div>

                            <h1 className="text-5xl font-black tracking-tight mb-4 leading-tight">
                                {item.name}
                            </h1>
                            <p className="text-lg text-base-content/60 leading-relaxed italic">
                                {item.description || "The pinnacle of engineering and design, curated for those who demand nothing but the absolute best."}
                            </p>
                        </div>

                        <div className="p-8 rounded-[2rem] bg-base-100 shadow-xl border border-base-content/5 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-xs font-bold uppercase tracking-widest opacity-40 mb-1">Total Price</span>
                                <span className="text-4xl font-black text-primary">${item.price}</span>
                            </div>
                            <button
                                onClick={handleBuyNow}
                                disabled={loading || !item}
                                className="btn btn-primary btn-lg rounded-2xl px-10 font-bold shadow-lg shadow-primary/20 flex items-center gap-3 transition-all hover:scale-105 disabled:opacity-50"
                            >
                                <ShoppingCart size={20} /> Buy Now
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="flex items-center gap-3 p-4 rounded-2xl bg-base-200/50 border border-base-content/5">
                                <div className="text-primary"><ShieldCheck size={24} /></div>
                                <span className="text-xs font-bold leading-tight">1 Year <br /> Warranty</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-2xl bg-base-200/50 border border-base-content/5">
                                <div className="text-success"><Truck size={24} /></div>
                                <span className="text-xs font-bold leading-tight">Express <br /> Shipping</span>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-2xl bg-base-200/50 border border-base-content/5">
                                <div className="text-secondary"><RefreshCcw size={24} /></div>
                                <span className="text-xs font-bold leading-tight">30-Day <br /> Returns</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}