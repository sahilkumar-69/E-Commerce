import React, { useContext } from "react";
import "./CSS/shopcategory.css";
import dropdown_icon from "../Assets/dropdown_icon.png";

import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/item/Item";

const ShopCategory = ({ category, banner }) => {
  const {all_product:products} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {products.map((item, index) => {
          if (category === item.category) {
            return <Item key={index} data={item} />;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
