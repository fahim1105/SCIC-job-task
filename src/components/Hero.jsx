import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-base-200 py-28 px-6 md:px-10">
            {/* Background Glows (Premium Feel) */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full"></div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Badge */}
                <div className="inline-block px-4 py-1.5 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-md">
                    <span className="text-sm font-medium tracking-wider text-primary uppercase">
                        🚀 New Season Arrivals
                    </span>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight leading-tight text-base-content">
                    Upgrade Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tech Life</span>
                </h1>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-base-content/70 mb-10 leading-relaxed">
                    Experience the future today. Discover a curated collection of world-class
                    gadgets designed to elevate your daily digital experience.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/items"
                        className="group relative px-8 py-4 bg-primary text-primary-content rounded-xl font-bold text-lg transition-all hover:bg-primary-focus hover:shadow-[0_0_20px_rgba(var(--p),0.5)]"
                    >
                        Browse All Items
                    </Link>
                </div>

                {/* Trusted By / Mini Stats */}
                <div className="mt-16 pt-10 border-t border-base-content/10">
                    <p className="text-sm text-base-content/50 uppercase tracking-[0.2em] mb-4">Official Partner of Global Brands</p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-2xl font-bold text-base-content">APPLE</span>
                        <span className="text-2xl font-bold text-base-content">SONY</span>
                        <span className="text-2xl font-bold text-base-content">SAMSUNG</span>
                        <span className="text-2xl font-bold text-base-content">RAZER</span>
                    </div>
                </div>
            </div>
        </section>
    );
}