import "./style.scss";

import { discount } from "../../../asset";
import { useState } from "react";

const DiscountFlex = () => {
  return (
    <>
      <div className="discountflex">
        <div className="poster">
          <img src={discount} />
        </div>
        <div className="meta">
          <div className="discount">
            <p>DISCOUNT</p>
            <h3>Summer 2019</h3>
            <p>SALE 50%</p>
          </div>
          <div className="time">
            <Timer />
          </div>
          <button>shop now</button>
        </div>
      </div>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState();
  return (
    <>
      <h1>time</h1>
    </>
  );
};

export default DiscountFlex;
