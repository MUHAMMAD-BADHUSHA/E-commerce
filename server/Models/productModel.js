const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  productImage: {
    imageUrl: {
      type: String,
      required: true, 
    },
    altText: {
      type: String,
      default: "Product image",
    },
    isPrimary: {
      type: Boolean,
      default: false, 
    },
  },
});

const ProductModel = mongoose.model("Products", productSchema);

module.exports = ProductModel;
