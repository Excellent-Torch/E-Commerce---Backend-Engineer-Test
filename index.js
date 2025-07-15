const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let products = require('./data');

app.use(express.json());

app.get('/products', (req, res) => {
// /products  - Get All Products by Default
// /products?category=... - Filter Products by Category
  const { category } = req.query;

  if (category) {
    const filteredProducts = products.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filteredProducts);
  }

  res.json(products);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});