import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AddProduct from "./Components/Addproduct/AddProduct";
import ListProduct from "./Components/Listproduct/ListProduct";
import ErrorElement from "./Pages/ErrorElement.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "addproduct",
        element: <AddProduct />,
      },
      {
        path: "listproduct",
        element: <ListProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
