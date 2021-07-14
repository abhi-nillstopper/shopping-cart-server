import express from "express";
import { verifyToken } from "./middleware/verifyToken";
import UserController from "./controllers/user_controller";
import BannerController from "./controllers/banner_controller";
import CategoryController from "./controllers/category_controller";
import ProductController from "./controllers/product_controller";

const app_routes = express.Router();

app_routes.get("/status", (req, res) => {
  res.status(200).send({ status: 200 });
});

//user
app_routes.post("/user/authenticate", UserController.authenticateUser);
app_routes.post("/user/register", UserController.CreateUser);

//banners
app_routes.get("/banners", verifyToken, BannerController.getAllBanner);

//Category
app_routes.get("/categories", verifyToken, CategoryController.getAllCategories);

//Product
app_routes.get("/products", verifyToken, ProductController.getAllProducts);

export default app_routes;
