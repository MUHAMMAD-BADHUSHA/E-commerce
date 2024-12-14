const express = require('express');
const router = express.Router();
const fs = require('fs');

const multer = require('multer');
const path = require('path');
const ProductModel = require('../Models/productModel');

// Configure Multer for file storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    // Check if directory exists, if not, create it
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// POST Route for adding a product
router.post('/addProduct', upload.single('productImage'), async (req, res) => {
  const { productName, productDescription, price, category } = req.body;

  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Product image is required' });
    }

    const imageUrl = `/uploads/${req.file.filename}`;

    const newProduct = await ProductModel.create({
      productName,
      productDescription,
      price,
      category,
      productImage: {
        imageUrl,
        altText: req.body.altText || 'Product image',
      },
    });

    res.status(201).json({ message: 'Product created successfully', product: newProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/getProducts', async (req, res) => {
  try {
    const products = await ProductModel.find(); // Fetch all products from DB
    res.status(200).json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
router.get('/getProduct', async (req, res) => {
  try {
    const product = await ProductModel.find(); // Fetch all products from DB
    res.status(200).json(product);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports = router;
