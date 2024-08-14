import React, { useContext } from "react";
import "./productdisplay.css";
import star_icon from "../../Assets/star_icon.png";
import star_dull_icon from "../../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {

  const {addToCart} = useContext(ShopContext)

  return (
    <div className="productdisplay">
      <div className="product-left">
        <div className="product-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="product-img">
          <img className="product-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="product-right">
        <h1>{product.name}</h1>
        <div className="product-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-price">
          <div className="old-price">${product.old_price}</div>
          <div className="new-price">${product.new_price}</div>
        </div>
        <div className="product-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, nulla
          et accusamus quaerat exercitationem alias voluptatem sunt saepe. Nam,
          at. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit repellendus deserunt iusto.
        </div>
        <div className="product-size">
          <h1>Select Size</h1>
          <div className="size">
            <div>S</div>
            <div>M</div>
            <div>L</div> 
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>addToCart(product.id)} >ADD TO CART</button>
        <p className="product-category">
          <span>Category : </span>Women, T-Shirt, Crop Top
        </p>
        <p className="product-category">
          <span>Tags : </span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
