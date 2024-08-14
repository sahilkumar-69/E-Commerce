import React from "react";
import data_product from "../../Assets/data";
import Item from "../item/Item";

import "./relativeproduct.css";

function RelativeProduct() {
  return (
    <div className="relativeproduct">
      <h1>Related Products</h1>
      <hr />
      <div className="relativeproduct-item">
        {data_product.map((item, index) => {
          return <Item data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default RelativeProduct;
