import React from "react";

import "./style.scss";

import {
  FaMoneyBill as Money,
  FaCar as Car,
  FaHeadphones as Headphone,
  FaAssistiveListeningSystems as Assistant,
} from "react-icons/fa";

const WhyUs = () => {
  return (
    <>
      <div className="whyus">
        <div className="card">
          <Car />
          <div className="meta">
            <h4>Free Shipping</h4>
            <p>For all order over Rs 500</p>
          </div>
        </div>
        <div className="card">
          <Money />
          <div className="meta">
            <h4>Money Back Guarantee</h4>
            <p>If good have Problems</p>
          </div>
        </div>
        <div className="card">
          <Assistant />
          <div className="meta">
            <h4>Online Support 24/7</h4>
            <p>Dedicated support</p>
          </div>
        </div>
        <div className="card">
          <Headphone />
          <div className="meta">
            <h4>Payment Secure</h4>
            <p>100% secure payment</p>
          </div>
        </div>
      </div>
    </>
  );
};

const Card = ({ src, title, desc }) => {
  return (
    <>
      <div className="card">
        <div className="poster">{() => <src />}</div>
        <div className="meta">
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
