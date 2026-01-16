const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Mock Data (Items List)
// Note: Vercel serverless houyay notun item add korle seta temporary thakbe.
let items = [
    { id: 1, name: "Premium Laptop", description: "Best for coding", price: 1200, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500" },
    { id: 2, name: "Wireless Mouse", description: "Smooth and fast", price: 50, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500" },
    { id: 3, name: "Gaming Keyboard", description: "RGB lights included", price: 150, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500" }
];

// Routes
// 1. Sob items check kora
app.get('/api/items', (req, res) => {
    res.status(200).json(items);
});

// 2. Single item details check kora
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
});

// 3. Notun item add kora
app.post('/api/items', (req, res) => {
    const { name, description, price, image } = req.body;

    // Basic validation
    if (!name || !price) {
        return res.status(400).json({ message: "Name and Price are required" });
    }

    const newItem = {
        id: items.length + 1,
        name,
        description: description || "",
        price: Number(price),
        image: image || "https://via.placeholder.com/150"
    };

    items.push(newItem);
    res.status(201).json(newItem);
});

// Welcome Route (Check korar jonno server cholche kina)
app.get('/', (req, res) => {
    res.send("Server is running on Vercel!");
});

// Port handling for Local Development
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => console.log(`Backend Server running on port ${PORT}`));
}

// Vercel Serverless Function er jonno export
module.exports = app;