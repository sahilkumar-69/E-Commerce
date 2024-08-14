import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/popular/Popular";
import Offer from "../Components/offers/Offer";
import NewCollection from "../Components/NewCollections/NewCollection";
import Newsletter from "../Components/NewsLetter/Newsletter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <Newsletter/>
    </div>
  );
};

export default Shop;
