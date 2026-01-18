"use client";
import { motion } from "framer-motion";
import { Truck, ShieldCheck, Gem, Headset } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Truck size={32} />,
            title: "Fast Delivery",
            desc: "Worldwide shipping within 3-5 business days.",
            borderColor: "group-hover:border-blue-500"
        },
        {
            icon: <ShieldCheck size={32} />,
            title: "Secure Payment",
            desc: "100% safe payment processing with top security.",
            borderColor: "group-hover:border-green-500"
        },
        {
            icon: <Gem size={32} />,
            title: "Original Products",
            desc: "Guaranteed authentic tech straight from brands.",
            borderColor: "group-hover:border-purple-500"
        },
        {
            icon: <Headset size={32} />,
            title: "24/7 Support",
            desc: "Dedicated experts available anytime you need.",
            borderColor: "group-hover:border-orange-500"
        },
    ];

    return (
        <section className="py-24 px-6 md:px-10 bg-base-100 relative overflow-hidden">
            {/* Decorative Background Mesh */}
            <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">
                        Why Shop <span className="text-primary underline decoration-dotted underline-offset-8">With Us?</span>
                    </h2>
                    <p className="text-base-content/60 max-w-xl mx-auto">
                        We combine quality, security, and speed to provide the ultimate shopping experience for tech enthusiasts.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`group p-8 rounded-[2rem] bg-base-100 border border-base-content/5 shadow-sm hover:shadow-xl transition-all duration-500 ${f.borderColor} border-b-4`}
                        >
                            <div className="mb-6 inline-flex p-4 rounded-2xl bg-base-200 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                                {f.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3">{f.title}</h4>
                            <p className="text-sm text-base-content/60 leading-relaxed">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}