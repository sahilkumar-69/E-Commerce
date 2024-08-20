import React, { useState } from "react";
import "./addproduct.css";
import upload_area from "../../Assets/upload_area.svg";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [product, setproduct] = useState({
    name: "",
    category: "women",
    new_price: "",
    old_price: "",
    image: "",
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const handleOnChange = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleOnSubmite = async (e) => {
    // console.log(product);
    let responseData;
    let productDetail = product;

    let formData = new FormData();
    formData.append("product", image);

    const resp = await fetch("http://localhost:4343/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    responseData = await resp.json();

    if (responseData.success) {
      product.image = responseData.image_url;
      // console.log(product);

      await fetch("http://localhost:4343/addproduct", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((response) => response.json())
        .then((data) =>
          data.success ? alert("Product added") : alert("failed to add product")
        )
        .catch((error) => console.log(error));

      // if (!responseData.success) {
      //   return console.log("can't post product");
      // }
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input
          type="text"
          onChange={handleOnChange}
          value={product.name}
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input
            type="text"
            onChange={handleOnChange}
            value={product.old_price}
            name="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input
            type="text"
            onChange={handleOnChange}
            value={product.new_price}
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select
          name="category"
          onChange={handleOnChange}
          value={product.category}
          className="add-product-selector"
          id=""
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="addproduct-thumbnail-img"
            alt=""
          />
        </label>
        <input
          type="file"
          onChange={imageHandler}
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button onClick={handleOnSubmite} className="addproduct-btn">
        Add
      </button>
    </div>
  );
};

export default AddProduct;
