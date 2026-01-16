import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8 px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-blue-500">MyStore</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Your one-stop shop for the latest tech gadgets and electronics. Quality and trust are our priorities.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
                        <li><Link href="/items" className="hover:text-blue-400 transition">All Items</Link></li>
                        <li><Link href="/login" className="hover:text-blue-400 transition">Login</Link></li>
                    </ul>
                </div>

                {/* Support Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-blue-400 cursor-pointer">FAQs</li>
                        <li className="hover:text-blue-400 cursor-pointer">Shipping Policy</li>
                        <li className="hover:text-blue-400 cursor-pointer">Terms & Conditions</li>
                    </ul>
                </div>

                {/* Newsletter / Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                    <p className="text-gray-400 text-sm">Email: support@mystore.com</p>
                    <p className="text-gray-400 text-sm">Phone: +880 1234 567 890</p>
                    <div className="flex gap-4 mt-4 text-xl">
                        <span className="hover:text-blue-400 cursor-pointer">Facebook</span>
                        <span className="hover:text-blue-400 cursor-pointer">Twitter</span>
                    </div>
                </div>

            </div>

            {/* Copyright Area */}
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} MyStore. All Rights Reserved.</p>
            </div>
        </footer>
    );
}