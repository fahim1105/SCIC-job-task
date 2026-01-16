"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddItemPage() {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: ''
    });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Express Backend-e data pathano
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ...formData,
                price: parseFloat(formData.price) // Price ke number-e convert kora
            }),
        });

        if (res.ok) {
            alert('Item added successfully! ✅');
            router.push('/items'); // Item list page-e niye jabe
            router.refresh(); // Data update dekhannor jonno refresh
        } else {
            alert('Something went wrong! ❌');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6 text-center">Add New Item</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Item Name</label>
                    <input
                        type="text"
                        required
                        className="w-full p-2 border rounded mt-1"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Description</label>
                    <textarea
                        required
                        className="w-full p-2 border rounded mt-1"
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Price ($)</label>
                    <input
                        type="number"
                        required
                        className="w-full p-2 border rounded mt-1"
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Image URL</label>
                    <input
                        type="text"
                        placeholder="https://example.com/image.jpg"
                        className="w-full p-2 border rounded mt-1"
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}