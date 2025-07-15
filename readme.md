# Basic Product API Documentation

## Overview
A RESTful API for managing products in an e-commerce platform built with Node.js and Express.js.

## Tech Stack
- **Runtime**: Node.js (>=14.0.0)
- **Framework**: Express.js

### Installation & Setup
```bash
# Clone the repository
git clone https://github.com/Excellent-Torch/E-Commerce---Backend-Engineer-Test.git
cd E-Commerce---Backend-Engineer-Test

# Install dependencies
npm install

# Start the server
npm start
```

The API will be available at `http://localhost:3000`


## API Endpoints

**GET** `/products`

Returns a list of all products.

**GET** `/products/:id`

Return a single product by ID.

**GET** `/products?category=Apparel`

Filter products by category.

**POST** `/products` 

Accept a new product and add it to the collection.

## Sample Requests

### Using Curl

```bash
# Get all products
curl -X GET http://localhost:3000/products

# Get product by ID
curl -X GET http://localhost:3000/products/1

# Filter by category
curl -X GET "http://localhost:3000/products?category=Apparel"

# Create new product
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Smartphone",
    "category": "Electronics",
    "price": 599.99,
    "description": "Latest smartphone with advanced features",
    "stock": 20
  }'
```

