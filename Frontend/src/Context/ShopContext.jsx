import React, { createContext, useEffect, useState } from "react";
// import all_product from "../Assets/all_product";

export const ShopContext = createContext(null);

const getCartItems = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getCartItems());

  useEffect(() => {
    fetch("http://localhost:4343/allproducts")
      .then((response) => response.json())
      .then((data) => {
        setAll_product(data.allproduct);
      })
      .catch((error) => {
        console.log(error);
      });

    if (localStorage.getItem("auth_token")) {
      fetch("http://localhost:4343/getcartitems", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("auth_token"),
        },
        body: '',
      })
        .then((response) => response.json()) 
        .then((data) => {
          console.log(data);
          setCartItems(data);
        });
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    // console.log(cartItems);
    if (localStorage.getItem("auth_token")) {
      fetch("http://localhost:4343/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("auth_token"),
        },
        body: JSON.stringify({ itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (localStorage.getItem("auth_token")) {
      fetch("http://localhost:4343/removeproductfromcart", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          auth_token: localStorage.getItem("auth_token"),
        },
        body: JSON.stringify({ itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const context_value = {
    getTotalCartItem,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={context_value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
