"use client";
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export function useAuth() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const auth = Cookies.get('isLoggedIn');
            setIsLoggedIn(!!auth);
            setIsLoading(false);
        };

        checkAuth();

        // Listen for storage changes (cross-tab sync)
        const handleStorageChange = () => {
            checkAuth();
        };

        window.addEventListener('storage', handleStorageChange);

        // Check periodically for cookie changes
        const interval = setInterval(checkAuth, 1000);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
            clearInterval(interval);
        };
    }, []);

    const login = () => {
        Cookies.set("isLoggedIn", "true", { expires: 1 });
        setIsLoggedIn(true);
    };

    const logout = () => {
        Cookies.remove('isLoggedIn');
        setIsLoggedIn(false);
    };

    return { isLoggedIn, isLoading, login, logout };
}