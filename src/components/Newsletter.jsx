"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, BellRing } from "lucide-react";
import { useSimpleToast } from "@/hooks/useSimpleToast";

export default function Newsletter() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const { success, error, warning, ToastContainer } = useSimpleToast();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!email) {
            warning("Please enter your email address!");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            error("Please enter a valid email address!");
            return;
        }

        setLoading(true);

        // Simulate API call
        setTimeout(() => {
            success(`🎉 Welcome to TechVault! Confirmation sent to ${email}`);
            setEmail("");
            setLoading(false);
        }, 1500);
    };

    return (
        <section className="py-24 px-6 md:px-10 bg-base-100 overflow-hidden">
            <ToastContainer />
            <div className="max-w-6xl mx-auto relative">

                {/* Decorative Background Glows */}
                <div className="absolute top-0 -left-20 w-72 h-72 bg-primary/20 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 -right-20 w-72 h-72 bg-secondary/20 blur-[120px] rounded-full"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative z-10 bg-neutral p-10 md:p-20 rounded-[3.5rem] text-neutral-content shadow-2xl border border-white/5"
                >
                    <div className="flex flex-col lg:flex-row items-center gap-12">

                        {/* Left Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
                                <BellRing size={16} className="animate-bounce" />
                                <span className="text-xs font-bold uppercase tracking-wider">Early Access Only</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                                Don't Miss Out <br /> on <span className="text-primary italic">Exclusive Deals!</span>
                            </h2>

                            <p className="text-neutral-content/60 text-lg max-w-md mx-auto lg:mx-0">
                                Join our premium community to get first access to limited edition gadgets and secret flash sales.
                            </p>
                        </div>

                        {/* Right Form */}
                        <div className="flex-1 w-full max-w-md">
                            <form className="relative group" onSubmit={handleSubmit}>
                                <div className="flex flex-col sm:flex-row items-center gap-4 bg-white/5 p-2 rounded-3xl border border-white/10 backdrop-blur-md focus-within:border-primary/50 transition-all duration-300">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full bg-transparent p-4 outline-none text-white placeholder:text-gray-500 rounded-2xl"
                                        disabled={loading}
                                    />
                                    <button 
                                        type="submit"
                                        disabled={loading}
                                        className={`w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary-focus text-primary-content px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 shadow-lg shadow-primary/20 disabled:opacity-50 ${loading ? 'loading' : ''}`}
                                    >
                                        {!loading && (
                                            <>
                                                Join <Send size={18} />
                                            </>
                                        )}
                                        {loading && "Joining..."}
                                    </button>
                                </div>

                                {/* Privacy Text */}
                                <p className="text-[10px] mt-4 text-center text-neutral-content/40 uppercase tracking-widest">
                                    * 100% Secure. No Spam. Unsubscribe Anytime.
                                </p>
                            </form>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}