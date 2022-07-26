import { useEffect, useState, useRef } from "react";

import { i1, i2, i3, i4, i5, i6, i7, i8 } from "../../../asset";
import { Card } from "../";
import "./style.scss";

const NewProduct = () => {
  const [tab, setTab] = useState(1);

  const category = [
    "All",
    "Women's",
    "Men's",
    "Kid's",
    "Accessories",
    "Cosmetics",
  ];

  const getData = async (index) => {
    setTab(index);
  };

  return (
    <>
      <div className="newProduct">
        <div className="header">
          <h2>New Product</h2>
          <div className="category">
            <span
              className={tab === 1 ? "active" : ""}
              onClick={() => getData(1)}
            >
              All
            </span>
            <span
              className={tab === 2 ? "active" : ""}
              onClick={() => getData(2)}
            >
              Women's
            </span>
            <span
              className={tab === 3 ? "active" : ""}
              onClick={() => getData(3)}
            >
              Men's
            </span>
            <span
              className={tab === 4 ? "active" : ""}
              onClick={() => getData(4)}
            >
              Kid's
            </span>
            <span
              className={tab === 5 ? "active" : ""}
              onClick={() => getData(5)}
            >
              Accessories
            </span>
            <span
              className={tab === 6 ? "active" : ""}
              onClick={() => getData(6)}
            >
              Cosmetics
            </span>
          </div>
        </div>
        <div className="container">
          <Card src={i1} rating={3.5} key={1} />
          <Card src={i2} rating={3.5} key={2} />
          <Card src={i3} rating={3.5} key={3} />
          <Card src={i4} rating={3.5} key={4} />
          <Card src={i5} rating={3.5} key={5} />
          <Card src={i6} rating={3.5} key={6} />
          <Card src={i7} rating={3.5} key={7} />
          <Card src={i8} rating={3.5} key={8} />
        </div>
      </div>
    </>
  );
};

export default NewProduct;
