"use client"; // Eita add korle onClick kaj korbe
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ItemDetails() {
    const params = useParams(); // URL theke ID neyar jonno
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.id) {
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/items/${params.id}`)
                .then(res => res.json())
                .then(data => {
                    setItem(data);
                    setLoading(false);
                })
                .catch(() => setLoading(false));
        }
    }, [params.id]);

    if (loading) return <div className="p-10 text-center">Loading...</div>;
    if (!item) return <div className="p-10 text-center text-red-500 font-bold">Item not found! ❌</div>;

    return (
        <div className="max-w-4xl mx-auto p-10">
            <div className="flex flex-col md:flex-row gap-8 items-center border p-6 rounded-2xl shadow-lg">
                <img src={item.image} alt={item.name} className="w-full md:w-1/2 rounded-lg" />
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold">{item.name}</h1>
                    <p className="text-gray-600 italic">{item.description}</p>
                    <p className="text-3xl font-bold text-blue-600">${item.price}</p>

                    {/* Ekhon onClick kaj korbe karon eita Client Component */}
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                        onClick={() => alert(`Success! You have selected: ${item.name}`)}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}