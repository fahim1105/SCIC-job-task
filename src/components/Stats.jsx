"use client";
import CountUp from 'react-countup';
import { Users, ShoppingBag, Award } from 'lucide-react';

export default function Stats() {
    const stats = [
        {
            label: "Happy Customers",
            value: 10000,
            suffix: "+",
            icon: <Users className="text-primary" size={28} />
        },
        {
            label: "Products Sold",
            value: 500,
            suffix: "+",
            icon: <ShoppingBag className="text-secondary" size={28} />
        },
        {
            label: "Top Brands",
            value: 50,
            suffix: "+",
            icon: <Award className="text-accent" size={28} />
        },
    ];

    return (
        <section className="relative py-24 bg-base-300 overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="group relative p-10 rounded-[2.5rem] bg-base-100/50 border border-base-content/10 backdrop-blur-sm hover:bg-base-100/70 transition-all duration-500 text-center"
                        >
                            {/* Icon Circle */}
                            <div className="inline-flex p-4 rounded-2xl bg-base-200/50 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {stat.icon}
                            </div>

                            {/* Counter Number */}
                            <h2 className="text-5xl md:text-6xl font-black text-base-content mb-3 tracking-tight">
                                <CountUp
                                    end={stat.value}
                                    duration={3}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                                <span className="text-primary">{stat.suffix}</span>
                            </h2>

                            {/* Label */}
                            <p className="text-base-content/60 font-medium uppercase tracking-[0.2em] text-sm">
                                {stat.label}
                            </p>

                            {/* Bottom Decorative Line */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-1/2 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}