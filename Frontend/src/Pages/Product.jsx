import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrums from "../Components/Breadcrums/Breadcrums";
import ProductDisplay from "../Components/productdisplay/ProductDisplay";
import DescriptionBox from "../Components/descriptionbox/DescriptionBox";
import RelativeProduct from "../Components/relatedproduct/RelativeProduct";

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((pro) => pro.id === Number(productId));
  return (
    <div>
      <Breadcrums product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelativeProduct />
    </div>
  );
};

export default Product;
