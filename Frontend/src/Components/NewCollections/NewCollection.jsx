import { useEffect, useState } from "react";
import Item from "../item/Item";
import "./newcollection.css";
// import n_c from "../../Assets/new_collections";

const NewCollection = () => {
  const [NewCollection, setNewCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4343/newcollection")
      .then((response) => response.json())
      .then((n_c) => setNewCollection(n_c))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="new-collections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {NewCollection.map((item, index) => {
          return <Item key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default NewCollection;
