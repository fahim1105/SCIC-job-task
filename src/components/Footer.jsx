import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-base-200 text-base-content pt-12 pb-8 px-10 border-t border-base-content/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">TechVault</h2>
                    <p className="text-base-content/60 text-sm leading-relaxed">
                        Your one-stop shop for the latest tech gadgets and electronics. Quality and trust are our priorities.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-base-content">Quick Links</h3>
                    <ul className="space-y-2 text-base-content/60 text-sm">
                        <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
                        <li><Link href="/items" className="hover:text-primary transition">All Items</Link></li>
                        <li><Link href="/login" className="hover:text-primary transition">Login</Link></li>
                    </ul>
                </div>

                {/* Support Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-base-content">Support</h3>
                    <ul className="space-y-2 text-base-content/60 text-sm">
                        <li className="hover:text-primary cursor-pointer transition">FAQs</li>
                        <li className="hover:text-primary cursor-pointer transition">Shipping Policy</li>
                        <li className="hover:text-primary cursor-pointer transition">Terms & Conditions</li>
                    </ul>
                </div>

                {/* Newsletter / Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-base-content">Contact Us</h3>
                    <p className="text-base-content/60 text-sm">Email: support@techvault.com</p>
                    <p className="text-base-content/60 text-sm">Phone: +880 1234 567 890</p>
                    <div className="flex gap-4 mt-4 text-xl">
                        <span className="hover:text-primary cursor-pointer transition">Facebook</span>
                        <span className="hover:text-primary cursor-pointer transition">Twitter</span>
                    </div>
                </div>

            </div>

            {/* Copyright Area */}
            <div className="border-t border-base-content/10 mt-10 pt-6 text-center text-base-content/50 text-sm">
                <p>© {new Date().getFullYear()} TechVault. All Rights Reserved.</p>
            </div>
        </footer>
    );
}