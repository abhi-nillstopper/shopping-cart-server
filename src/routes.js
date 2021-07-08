import express from "express";
import { verifyToken } from "./middleware/verifyToken";
import UserController from "./controllers/user_controller";
import BannerController from "./controllers/banner_controller";
import CategoryController from "./controllers/category_controller";
import ProductController from "./controllers/product_controller";

const routes = express.Router();

routes.get("/status", (req, res) => {
  res.status(200).send({ status: 200 });
});

//user
routes.post("/user/authenticate", UserController.authenticateUser);
routes.post("/user/register", UserController.CreateUser);

//banners
routes.get("/banners", verifyToken, BannerController.getAllBanner);

//Category
routes.get("/categories", verifyToken, CategoryController.getAllCategories);

//Product
routes.get("/products", verifyToken, ProductController.getAllProducts);

export default routes;
