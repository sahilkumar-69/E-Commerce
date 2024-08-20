import React, { useEffect, useState } from "react";
import "./popular.css";
import Item from "../item/Item";

const Popular = () => {
  const [popularWomenCollection, setpopularWomenCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4343/popularinwomen")
      .then((response) => response.json())
      .then((n_c) => setpopularWomenCollection(n_c))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularWomenCollection.map((item, index) => {
          return <Item key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Popular;
