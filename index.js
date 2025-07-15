const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let products = require('./data');

app.use(express.json());

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});