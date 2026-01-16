"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();

        // Task-er requirement onujayi hardcoded credentials
        if (email === "admin@test.com" && password === "123456") {
            // Cookie set korsi jeta ১ din thakbe
            Cookies.set("isLoggedIn", "true", { expires: 1 });
            alert("Login Successful!");

            // Login hole Items page-e pathiye dibo
            router.push("/items");
            router.refresh(); // Navbar update korar jonno
        } else {
            alert("Email ba Password vul! (Use: admin@test.com / 123456)");
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <form onSubmit={handleLogin} className="p-10 bg-white border rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                <div className="space-y-4">
                    <input
                        type="email" placeholder="Email (admin@test.com)"
                        className="w-full p-3 border rounded-lg focus:outline-blue-500"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password" placeholder="Password (123456)"
                        className="w-full p-3 border rounded-lg focus:outline-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700">
                        Login Now
                    </button>
                </div>
            </form>
        </div>
    );
}