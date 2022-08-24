import "./style.scss";

import { discount } from "../../../asset";
import { useState, useEffect } from "react";

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
            <h3>Summer 2022</h3>
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
  const [Time, setTime] = useState({
    day: "",
    hour: "",
    min: "",
    sec: "",
  });

  const countdown = () => {
    const countDate = new Date("August 31,2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate

    const Day = Math.floor(gap / day);
    const Hour = Math.floor((gap % day) / hour);
    const Min = Math.floor((gap % hour) / minute);
    const Sec = Math.floor((gap % minute) / second);
    setTime({ day: Day, hour: Hour, min: Min, sec: Sec });
  };

  useEffect(() => {
    const Interval = setInterval(countdown(), 1000);
    return () => {
      clearInterval(Interval);
    };
  });

  return (
    <>
      <div className="container">
        <div className="timer">
          <h2>{Time.day}</h2>
          <p>Day</p>
        </div>
        <div className="timer">
          <h2>{Time.hour}</h2>
          <p>Hour</p>
        </div>
        <div className="timer">
          <h2>{Time.min}</h2>
          <p>Min</p>
        </div>
        <div className="timer">
          <h2>{Time.sec}</h2>
          <p>Sec</p>
        </div>
      </div>
    </>
  );
};

export default DiscountFlex;
