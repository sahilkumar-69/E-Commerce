import { Product } from "../Model/product.model.js";
import User from "../Model/user.model.js";
import { asyncHandler } from "../utils/async_handler.js";

const uploadProduct = asyncHandler(async (req, res) => {
  const { name, image, category } = req.body;
  // console.log(name ,image ,category)

  let { new_price, old_price } = req.body;
  // console.log(new_price,old_price)

  new_price = new_price.toString();
  old_price = old_price.toString();

  if (
    [name, image, category, new_price, old_price].some((x) =>
      x === "" ? true : x.trim() === "" ? true : false
    )
  ) {
    return console.log("all fields are required");
  }

  new_price = Number(new_price);
  old_price = Number(old_price);

  const data = await Product.find({});
  let id;

  if (data.length > 0) {
    const last_id = data.splice(-1)[0].id;
    id = last_id + 1;
  } else {
    id = 1;
  }

  const product = await Product.create({
    id,
    name,
    image,
    category,
    new_price,
    old_price,
  });

  if (!product) {
    return console.log("failed to save product home.js");
  }

  return res.status(200).json({
    success: 1,
    name: product.name,
    product,
  });
});

const removeProduct = asyncHandler(async (req, res) => {
  let { id } = req.body;

  id = Number(id);

  const isDeleted = await Product.findOneAndDelete({
    id,
  });

  if (!isDeleted) {
    return res.status(404).json({
      message: "product not found",
    });
  }

  res.status(200).json({
    success: 1,
    message: "product is deleted",
    isDeleted,
  });
});

const allProduct = asyncHandler(async (req, res) => {
  const allproduct = await Product.find({}).select(
    "-createdAt -updatedAt -__v -_id -date"
  );

  if (!allproduct.length > 0) {
    return res.status(200).json({
      success: 1,
      isEmpty: true,
      message: "Product list is empty",
      allproduct,
    });
  }

  return res.status(200).json({
    success: 1,
    allproduct,
  });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const isExist = await User.findOne({ email });

  if (isExist) {
    return res.status(400).json({
      message: "Email already exists",
    });
  }

  const isDone = await User.create({
    name,
    email,
    password,
  });

  if (!isDone) {
    return res.status(400).json({
      message: "Registration failed",
    });
  }

  const token = await isDone.generateToken();

  return res.status(200).json({
    success: 1,
    message: "Registration successful",
    token,
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Email not found",
    });
  }

  const isMatch = user.password === password;

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid password",
    });
  }

  const token = await user.generateToken();

  return res.status(200).json({
    success: 1,
    message: "Login successful",
    token,
  });
});

const newCollection = asyncHandler(async (req, res) => {
  const collection = await Product.find({}).select(
    "-createdAt -updatedAt -__v -_id -date"
  );

  const newCollection = collection.splice(1).slice(-8);
  res.send(newCollection);
});

const popularInWomen = asyncHandler(async (req, res) => {
  const product = await Product.find({ category: "women" }).select(
    "-createdAt -updatedAt -__v -_id"
  );

  const popInWomen = product.slice(0, 4);
  res.send(popInWomen);
});

const addProductToCart = asyncHandler(async (req, res) => {
  // console.log(req.body)
  const userData = await User.find({ _id: req.user }).select(
    "-createdAt -updatedAt -__v -_id"
  );

  console.log("line 184", userData);
  userData.cartData[req.body.itemId] += 1;
  console.log(userData.cartData);

  await User.findOneAndUpdate(
    { _id: req.user },
    {
      cartData: userData.cartData,
    }
  );

  res.json({ message: "added" });
});

const removeProductFromCart = asyncHandler(async (req, res) => {
  const userData = await User.find({ _id: req.user }).select(
    "-createdAt -updatedAt -__v -_id"
  );

  console.log("line 184", userData);
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  console.log(userData.cartData);

  await User.findOneAndUpdate(
    { _id: req.user },
    {
      cartData: userData.cartData,
    }
  );
  res.json({ message: "removed" });
});

const getcartitems = asyncHandler(async (req, res) => {
  console.log("getcartitems");
  const userCartData = await User.findOne({ _id: req.user}).select({cartData:1})

  console.log(userCartData)
  
});

export {
  newCollection,
  popularInWomen,
  uploadProduct,
  removeProduct,
  allProduct,
  registerUser,
  loginUser,
  addProductToCart,
  removeProductFromCart,
  getcartitems,
};
