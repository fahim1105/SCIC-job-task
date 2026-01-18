"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn, ShieldCheck, EyeOff, Eye } from "lucide-react";
import { useSimpleToast } from "@/hooks/useSimpleToast";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { success, error, ToastContainer } = useSimpleToast();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        // Simulated delay for premium feel
        setTimeout(() => {
            if (email === "admin@test.com" && password === "123456") {
                Cookies.set("isLoggedIn", "true", { expires: 1 });
                success("Successfully logged in! Redirecting...");
                // Force a full page reload to ensure navbar state updates
                setTimeout(() => {
                    window.location.href = "/items";
                }, 1000);
            } else {
                error("Invalid email or password! Use: admin@test.com / 123456");
                setLoading(false);
            }
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 relative overflow-hidden px-4">
            <ToastContainer />
            
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md z-10"
            >
                {/* Logo or Brand Icon */}
                <div className="flex justify-center mb-8">
                    <div className="bg-primary p-4 rounded-3xl shadow-xl shadow-primary/20 text-primary-content">
                        <ShieldCheck size={40} />
                    </div>
                </div>

                <div className="card bg-base-100 shadow-2xl border border-base-content/5 overflow-hidden rounded-[2.5rem]">
                    <div className="card-body p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-black tracking-tight mb-2">Welcome Back</h2>
                            <p className="text-base-content/60 text-sm italic">Enter your credentials to access your vault</p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            {/* Email Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold opacity-70">Email Address</span>
                                </label>
                                <div className="relative group">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/30 group-focus-within:text-primary transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="admin@test.com"
                                        className="input input-bordered w-full pl-12 bg-base-200 border-none focus:ring-2 focus:ring-primary/50 transition-all rounded-2xl h-14"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Password Input */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold opacity-70">Password</span>
                                </label>
                                <div className="relative group">
                                    {/* Left Side Lock Icon */}
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-base-content/30 group-focus-within:text-primary transition-colors">
                                        <Lock size={18} />
                                    </div>

                                    {/* Password Input */}
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="123456"
                                        className="input input-bordered w-full pl-12 pr-12 bg-base-200 border-none focus:ring-2 focus:ring-primary/50 transition-all rounded-2xl h-14"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />

                                    {/* Right Side Eye Button */}
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-4 flex items-center text-base-content/30 hover:text-primary transition-colors cursor-pointer"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className={`btn btn-primary w-full h-14 rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 gap-2 transition-all ${loading ? 'loading' : ''}`}
                            >
                                {!loading && <LogIn size={20} />}
                                {loading ? 'Authenticating...' : 'Login to Account'}
                            </button>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-xs text-base-content/40 uppercase tracking-[0.2em]">
                                Secured by Enterprise Encryption
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}