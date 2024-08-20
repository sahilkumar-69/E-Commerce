import { Router } from "express";
import {
  allProduct,
  removeProduct,
  uploadProduct,
  registerUser,
  loginUser,
  newCollection,
  popularInWomen,
  addProductToCart,
  removeProductFromCart,
  getcartitems,
} from "../Controller/main.controller.js";
import { Upload } from "../Multer/Multer.upload.js";
import { PORT } from "../constants.js";
import { fetchUser } from "../Middleware/fetchUser.js";

const router = Router();

router.route("/").get((_, res) => {
  res.send("Backend service is running");
});

router.route("/upload").post(Upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

router.route("/addproduct").post(uploadProduct);

router.route("/addtocart").post(fetchUser,addProductToCart);

router.route("/removefromcart").post(fetchUser,removeProductFromCart);

router.route("/removeproduct").post(removeProduct);

router.route("/allproducts").get(allProduct);

router.route("/getcartitems").get(fetchUser,getcartitems);

router.route("/newcollection").get(newCollection);

router.route("/popularinwomen").get(popularInWomen);

router.route("/register-user").post(registerUser);

router.route("/login").post(loginUser);

export { router };
