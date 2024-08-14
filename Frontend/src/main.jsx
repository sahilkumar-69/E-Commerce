import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Shop from "./Pages/Shop.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignup.jsx";
import kids_banner from "./Assets/banner_kids.png";
import mens_banner from "./Assets/banner_mens.png";
import womens_banner from "./Assets/banner_women.png";
import Product from "./Pages/Product.jsx";
import ShopCategory from "./Pages/ShopCategory.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ShopContextProvider from "./Context/ShopContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // path: "/",
        element: <Shop />,
        index: true,
      },
      {
        path: "/mens",
        element: <ShopCategory banner={mens_banner} category="men" />,
      },
      {
        path: "/womens",
        element: <ShopCategory banner={womens_banner} category="women" />,
      },
      {
        path: "/kids",
        element: <ShopCategory banner={kids_banner} category="kid" />,
      },
      {
        path: "/product",
        element: <Product />,
        children: [
          {
            path: ":productId",
            element: <Product />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <LoginSignup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ShopContextProvider> */}
      <RouterProvider router={router} />
    {/* </ShopContextProvider> */}
  </React.StrictMode>
);
