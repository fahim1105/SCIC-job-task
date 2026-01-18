import ItemsPageUI from "@/components/ItemsPageUI";

export default async function ItemsPage() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/items`, {
            cache: 'no-store'
        });

        if (!res.ok) throw new Error('Failed to fetch items');

        const items = await res.json();

        return <ItemsPageUI items={items || []} />;
    } catch (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-error font-bold text-xl">Error loading products. Please try again.</p>
            </div>
        );
    }
}