import React from "react";
import { Link } from "react-router-dom";
import "./item.css";

const Item = ({ data }) => {
  return (
    <div className="item">
      <Link to={`/product/${data.id}`} >
        <img src={data.image} onClick={window.scrollTo(0,0)}  alt="" />
      </Link>
      <p>{data.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${data.new_price}</div>
        <div className="item-price-old">${data.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
