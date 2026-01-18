"use client";
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ShoppingBag, LogOut, PlusCircle, Menu, Sun, Moon } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useSimpleToast } from '@/hooks/useSimpleToast';

export default function Navbar() {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false);
    const { isLoggedIn, logout } = useAuth();
    const { success, info, ToastContainer } = useSimpleToast();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);

        // Get saved theme or default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);

        // Also set the class for better compatibility
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const handleLogout = () => {
        logout();
        info("You have been logged out successfully");
        router.push('/');
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);

        // Also toggle class for better compatibility
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Show theme change toast
        success(`Switched to ${newTheme} mode`);
    };

    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) {
        return null;
    }

    return (
        <div className="sticky top-0 z-[100] w-full px-4 pt-4">
            <ToastContainer />
            <div className="navbar bg-base-100/90 backdrop-blur-lg border border-base-content/10 rounded-2xl shadow-lg max-w-7xl mx-auto px-6">

                {/* Logo Section */}
                <div className="navbar-start">
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-primary p-2 rounded-xl text-primary-content group-hover:scale-105 transition-transform">
                            <ShoppingBag size={24} />
                        </div>
                        <span className="font-bold text-xl">
                            TechVault
                        </span>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 px-1 font-medium">
                        <li>
                            <Link
                                href="/"
                                className={`hover:text-primary transition-colors ${pathname === '/' ? 'text-primary bg-primary/10' : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/items"
                                className={`hover:text-primary transition-colors ${pathname === '/items' ? 'text-primary bg-primary/10' : ''}`}
                            >
                                Items
                            </Link>
                        </li>
                        {isLoggedIn && (
                            <li>
                                <Link
                                    href="/add-item"
                                    className={`text-primary hover:bg-primary/10 transition-colors ${pathname === '/add-item' ? 'bg-primary/20' : ''}`}
                                >
                                    <PlusCircle size={16} className="mr-1" />
                                    Add Items
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>

                {/* Right Section */}
                <div className="navbar-end gap-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="btn btn-ghost btn-circle hover:bg-primary/10 transition-colors"
                        title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                    >
                        {theme === 'light' ? (
                            <Moon size={20} />
                        ) : (
                            <Sun size={20} />
                        )}
                    </button>

                    {/* Auth Section */}
                    {isLoggedIn ? (
                        <button
                            onClick={handleLogout}
                            className="btn btn-error btn-sm rounded-xl px-4 font-medium text-white hover:bg-error-focus transition-colors hidden lg:block"
                        >
                            <div className='flex item-center gap-1'>
                                <LogOut size={16} />
                                Logout
                            </div>
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="btn btn-primary btn-sm rounded-xl px-6 font-medium hover:bg-primary-focus transition-colors hidden lg:flex items-center justify-center"
                        >
                            Login
                        </Link>
                    )}

                    {/* Mobile Menu Toggle */}
                    <div className="dropdown dropdown-end lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <Menu size={20} />
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-base-100 rounded-xl w-48 border border-base-content/10">
                            <li>
                                <Link
                                    href="/"
                                    className={`hover:bg-primary/10 ${pathname === '/' ? 'text-primary bg-primary/10' : ''}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/items"
                                    className={`hover:bg-primary/10 ${pathname === '/items' ? 'text-primary bg-primary/10' : ''}`}
                                >
                                    Items
                                </Link>
                            </li>
                            {isLoggedIn && (
                                <li>
                                    <Link
                                        href="/add-item"
                                        className={`hover:bg-primary/10 ${pathname === '/add-item' ? 'text-primary bg-primary/10' : ''}`}
                                    >
                                        <PlusCircle size={16} />
                                        Add Items
                                    </Link>
                                </li>
                            )}
                            <div className="divider my-1"></div>
                            {isLoggedIn ? (
                                <li>
                                    <button
                                        onClick={handleLogout}
                                        className="text-error hover:bg-error/10"
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </button>
                                </li>
                            ) : (
                                <li>
                                    <Link href="/login" className="hover:bg-primary/10 ">
                                        Login
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}