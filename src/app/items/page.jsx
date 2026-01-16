export default async function ItemsPage() {
    // Backend theke data fetch korsi
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, { cache: 'no-store' });
    const items = await res.json();

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">Store Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {items.map((item) => (
                    <div key={item.id} className="border p-4 rounded shadow">
                        <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                        <h2 className="text-xl font-semibold mt-2">{item.name}</h2>
                        <p className="text-blue-600 font-bold">${item.price}</p>
                        <a href={`/items/${item.id}`} className="block mt-4 text-center bg-black text-white py-2 rounded">
                            View Details
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}