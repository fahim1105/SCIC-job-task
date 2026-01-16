const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Fake Data (Items List)
let items = [
    { id: 1, name: "Premium Laptop", description: "Best for coding", price: 1200, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500" },
    { id: 2, name: "Wireless Mouse", description: "Smooth and fast", price: 50, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500" },
    { id: 3, name: "Gaming Keyboard", description: "RGB lights included", price: 150, image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500" }
];

// Route 1: Sob items dewar jonno
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Route 2: Single item details dewar jonno
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
});

// Route 3: Notun item add korar jonno (POST request)
app.post('/api/items', (req, res) => {
    const newItem = { id: items.length + 1, ...req.body };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Render-er jonno Port update (Dorkari)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend Server running on port ${PORT}`));