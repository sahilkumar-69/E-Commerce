import React from "react";
import Item from "../item/Item";
import "./newcollection.css";
import n_c from "../../Assets/new_collections";

const NewCollection = () => {
  return (
    <div className="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {n_c.map((item, index) => {
          return <Item key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollection;
