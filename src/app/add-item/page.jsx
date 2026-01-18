"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { PlusCircle, Image as ImageIcon, DollarSign, AlignLeft, Tag, ArrowLeft } from 'lucide-react';
import { useSimpleToast } from '@/hooks/useSimpleToast';

export default function AddItemPage() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { success, error, ToastContainer } = useSimpleToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price)
                }),
            });

            if (res.ok) {
                success("Product added successfully!");
                setTimeout(() => {
                    router.push('/items');
                }, 1000);
            } else {
                error("Failed to add product. Please try again.");
                setLoading(false);
            }
        } catch (error) {
            error("Network error. Please check your connection.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-base-200/50 py-12 px-4 md:px-10">
            <ToastContainer />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto"
            >
                {/* Header Actions */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={() => router.back()}
                        className="btn btn-ghost btn-sm gap-2 rounded-xl opacity-60 hover:opacity-100"
                    >
                        <ArrowLeft size={18} /> Back
                    </button>
                    <div className="badge badge-outline p-4 font-bold opacity-50 uppercase tracking-widest text-[10px]">
                        Admin Panel / Inventory
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Left: Form */}
                    <div className="lg:col-span-3">
                        <div className="card bg-base-100 shadow-xl border border-base-content/5 rounded-[2.5rem] p-8 md:p-10">
                            <h1 className="text-3xl font-black mb-8 tracking-tight flex items-center gap-3">
                                <PlusCircle className="text-primary" size={32} /> Add New <span className="text-primary">Product</span>
                            </h1>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Item Name */}
                                <div className="form-control">
                                    <label className="label font-bold text-xs uppercase tracking-widest opacity-60">Product Title</label>
                                    <div className="relative group">
                                        <Tag className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:text-primary transition-colors" size={18} />
                                        <input
                                            type="text"
                                            placeholder="e.g. MacBook Pro M3"
                                            required
                                            className="input input-bordered w-full pl-12 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary/50 transition-all"
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Price */}
                                <div className="form-control">
                                    <label className="label font-bold text-xs uppercase tracking-widest opacity-60">Price (USD)</label>
                                    <div className="relative group">
                                        <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:text-primary transition-colors" size={18} />
                                        <input
                                            type="number"
                                            placeholder="0.00"
                                            required
                                            className="input input-bordered w-full pl-12 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary/50 transition-all"
                                            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Image URL */}
                                <div className="form-control">
                                    <label className="label font-bold text-xs uppercase tracking-widest opacity-60">Image Link</label>
                                    <div className="relative group">
                                        <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 opacity-30 group-focus-within:text-primary transition-colors" size={18} />
                                        <input
                                            type="text"
                                            placeholder="https://images.unsplash.com/..."
                                            className="input input-bordered w-full pl-12 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary/50 transition-all"
                                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                                        />
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="form-control">
                                    <label className="label font-bold text-xs uppercase tracking-widest opacity-60">Description</label>
                                    <div className="relative group">
                                        <AlignLeft className="absolute left-4 top-4 opacity-30 group-focus-within:text-primary transition-colors" size={18} />
                                        <textarea
                                            required
                                            placeholder="Tell customers about this product..."
                                            className="textarea textarea-bordered w-full pl-12 pt-4 bg-base-200 border-none rounded-2xl focus:ring-2 focus:ring-primary/50 transition-all min-h-[120px]"
                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`btn btn-primary w-full h-14 rounded-2xl font-bold shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] ${loading ? 'loading' : ''}`}
                                >
                                    {loading ? 'Publishing...' : 'List Product Now'}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Preview Card */}
                    <div className="lg:col-span-2 space-y-6">
                        <h2 className="text-sm font-bold uppercase tracking-[0.2em] opacity-40 ml-4">Live Preview</h2>
                        <div className="card bg-base-100 border border-base-content/5 rounded-[2.5rem] overflow-hidden shadow-xl sticky top-28">
                            <div className="h-56 bg-base-300 relative">
                                {formData.image ? (
                                    <img src={formData.image} className="w-full h-full object-cover" alt="Preview" />
                                ) : (
                                    <div className="flex flex-col items-center justify-center h-full opacity-20">
                                        <ImageIcon size={48} />
                                        <p className="text-xs font-bold mt-2 uppercase">Image Preview</p>
                                    </div>
                                )}
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-2 truncate">{formData.name || "Product Name"}</h3>
                                <p className="text-2xl font-black text-primary mb-4">${formData.price || "0"}</p>
                                <p className="text-sm opacity-50 line-clamp-3 leading-relaxed">
                                    {formData.description || "Product description will appear here as you type. Make it catchy!"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}