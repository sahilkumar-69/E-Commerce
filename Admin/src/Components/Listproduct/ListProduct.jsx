import React, { useEffect, useState } from "react";
import cross_icon from "../../Assets/cross_icon.png";
import "./listproduct.css";

const ListProduct = () => {
  const [allProducts, setallProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch("http://localhost:4343/allproducts")
      .then((res) => res.json())
      .then((data) => setallProducts(data.allproduct));
  };

  const removeProduct = async (id) => {
    await fetch("http://localhost:4343/removeProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    await fetchInfo();
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.length > 0 &&
          allProducts.map((product, index) => {
            return (
              <div key={index}>
                <div className=" listproduct-format listproduct-format-main">
                  <img
                    src={product.image}
                    className="listproduct-product-icon "
                    alt=""
                  />
                  <p>{product.name}</p>
                  <p>${product.old_price} </p>
                  <p>${product.new_price}</p>
                  <p>{product.category}</p>
                  <img
                    onClick={() => {
                      removeProduct(product.id);
                    }}
                    src={cross_icon}
                    alt=""
                    className="listproduct-remove-icon"
                  />
                </div>
                <hr />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListProduct;
