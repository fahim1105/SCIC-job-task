"use client"; // Client-side logic (cookies) use korar jonno eita dorkar
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    // Page load holei check korbe cookie ache kina
    useEffect(() => {
        const auth = Cookies.get('isLoggedIn');
        setIsLoggedIn(!!auth); // Jodi cookie thake tobe true hobe
    }, []);

    const handleLogout = () => {
        Cookies.remove('isLoggedIn'); // Cookie delete kore dibe
        setIsLoggedIn(false);
        router.push('/'); // Home page-e pathiye dibe
        router.refresh(); // Full page refresh kore state reset korbe
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-gray-900 text-white shadow-md">
            <Link href="/" className="font-bold text-xl">MyStore</Link>
            
            <div className="flex gap-6 items-center">
                <Link href="/" className="hover:text-blue-400">Home</Link>
                <Link href="/items" className="hover:text-blue-400">Items</Link>

                {/* Jodi login thake tobe "Add Item" ebong "Logout" dekhabe */}
                {isLoggedIn ? (
                    <>
                        <Link href="/add-item" className="hover:text-blue-400">Add Item</Link>
                        <button 
                            onClick={handleLogout} 
                            className="bg-red-500 hover:bg-red-600 px-4 py-1 rounded transition"
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    /* Login na thakle shudhu "Login" link dekhabe */
                    <Link href="/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded transition">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}