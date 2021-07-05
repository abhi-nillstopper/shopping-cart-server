import Products from "../models/products";

const ProductController = {
  async getAllProducts(req, res) {
    try {
      const { authData } = res.locals;
      const products = await Products.find({});
      if (products.length > 0) {
        return res.status(200).json({ authData, products });
      }
      return res.status(400).json({ message: "No products found" });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: "Error while getting products" });
    }
  },
};

export default ProductController;
