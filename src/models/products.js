import mongoose from "mongoose";

const ProductsSchema = mongoose.Schema({
  name: String,
  imageURL: String,
  description: String,
  price: Number,
  stock: Number,
  category: String,
  sku: String,
});

const Products = mongoose.model("Products", ProductsSchema);

export default Products;
