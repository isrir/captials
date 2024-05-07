
const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
app.use(cors());

app.use(express.json());

// Define routes
app.get('/api/capitals/:country', (req, res) => {
    const country = req.params.country.toLowerCase();
    const capitals = {
        'india': 'new delhi',
        'usa': 'washington d.c.',
        'uk': 'london'
    };
    const capital = capitals[country];
    if (capital) {
        res.json({ capital });
    } else {
        res.status(404).json({ message: 'Capital not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
