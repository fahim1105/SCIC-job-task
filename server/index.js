const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Fake Data (Items List)

let items = [
    {
        id: 1,
        name: "MacBook Pro M3 Elite",
        description: "Experience unparalleled performance with the new M3 chip. Designed for developers, designers, and power users who need seamless multitasking and a stunning Liquid Retina XDR display for color-accurate work.",
        price: 1999,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800"
    },
    {
        id: 2,
        name: "Logitech MX Master 3S",
        description: "The ultimate wireless mouse for productivity. Features ultra-fast MagSpeed scrolling, an 8K DPI sensor that tracks on glass, and near-silent clicks. Ergonomically sculpted for all-day comfort and precision control.",
        price: 99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800"
    },
    {
        id: 3,
        name: "Keychron Q6 RGB Mechanical",
        description: "A full-sized premium mechanical keyboard with a solid CNC aluminum body. Fully customizable with hot-swappable switches and QMK/VIA support. Features south-facing RGB and double-shot PBT keycaps for a superior typing feel.",
        price: 180,
        image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=800"
    },
    {
        id: 4,
        name: "Sony WH-1000XM5",
        description: "Industry-leading noise cancellation with two processors controlling eight microphones. Engineered to deliver exceptional high-resolution audio quality and crystal-clear hands-free calling in any environment.",
        price: 349,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800"
    },
    {
        id: 5,
        name: "Samsung Odyssey G9 UltraWide",
        description: "Dive into the action with a 49-inch curved gaming monitor. Featuring a 240Hz refresh rate and 1ms response time, this DQHD resolution screen provides an immersive field of view that wraps around your workspace.",
        price: 1299,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800"
    },
    {
        id: 6,
        name: "Fujifilm X-T5 Mirrorless",
        description: "The perfect companion for photographers and videographers. With a 40MP X-Trans sensor and 6.2K video recording capabilities, it combines classic dials with cutting-edge autofocus technology for the ultimate creative freedom.",
        price: 1699,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800"
    },
    {
        id: 7,
        name: "Herman Miller Embody Chair",
        description: "The gold standard of ergonomic seating. Designed by physicians and engineers, it features a unique pixelated support system that conforms to your body's movements to improve blood flow and posture during long work sessions.",
        price: 1895,
        image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=800"
    },
    {
        id: 8,
        name: "Elgato Stream Deck MK.2",
        description: "Take full control of your broadcast with 15 customizable LCD keys. Trigger actions in OBS, Twitch, and YouTube with a single tap. The perfect interface for streamers and content creators to automate their complex workflows.",
        price: 149,
        image: "https://i.ibb.co.com/cSt3S0bY/images.jpg"
    }
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