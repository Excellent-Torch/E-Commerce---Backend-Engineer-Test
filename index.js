const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let products = require('./data');

app.use(express.json());

app.get('/products', (req, res) => {
// /products  - Get All Products by Default
// /products?category=... - Filter Products by Category
    // Example: /products?category=Apparel
  const { category } = req.query;

  if (category) {
    const filteredProducts = products.filter(
      p => p.category.toLowerCase() === category.toLowerCase()
    );
    return res.json(filteredProducts);
  }

  res.json(products);
});

app.get('/products/:id', (req, res) => {
// /products/:id - Get Product by ID
    // Example: /products/1
  const { id } = req.params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.json(product);
});

// Bonus one 

app.post("/products", (req, res) => {
  const { name, category, price } = req.body;
  if (!name || !category || typeof price !== "number") {
    return res.status(400).json({ message: "Invalid product data" });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    category,
    price
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});