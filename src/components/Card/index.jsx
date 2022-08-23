import { useState } from "react";
import { motion } from "framer-motion";
import {
  BsArrowsAngleExpand as Expand,
  BsHeart as Heart,
  BsCartDash as Cart,
  BsFillStarFill as Star,
  BsStarHalf as HalfStar,
} from "react-icons/bs";
import { FaStar, FaStarHalf } from "react-icons/fa";
import "./style.scss";

const Card = ({
  type = "portrait",
  src,
  title,
  rating,
  price,
  height,
  width,
}) => {
  const [Hover, setHover] = useState(false);

  const getStar = (value) => {
    const star = [];
    const [whole, part] = parseFloat(value).toString().split(".");
    for (let i = 0; i < whole; i++) star.push(Star);
    if (part) star.push(HalfStar);

    return star;
  };

  return (
    <>
      <div
        className={type === "portrait" ? "portrait" : "landscape"}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="poster">
          {type === "portrait" && <p className="new">New</p>}
          {/* <p className="outOfStock">out of stock</p>
          <p className="sale">Sale</p> */}
          <img src={src} />
        </div>
        <ul className="card_hover">
          <motion.li
            initial={{
              translateY: type == "portrait" ? 100 : 10,
            }}
            animate={{
              translateY: Hover ? (type == "portrait" ? 0 : 10) : 100,
              transition: {
                duration: 0.1,
                delay: 0.1,
              },
            }}
          >
            <Expand className="expand" />
          </motion.li>

          <motion.li
            initial={{
              translateY: type == "portrait" ? 10 : 100,
            }}
            animate={{
              translateY: Hover ? (type == "portrait" ? 0 : 10) : 100,
              transition: {
                duration: 0.1,
                delay: 0.15,
              },
            }}
          >
            <Heart className="wishlist" />
          </motion.li>
          <motion.li
            initial={{
              translateY: type == "portrait" ? 100 : 10,
            }}
            animate={{
              translateY: Hover ? (type == "portrait" ? 0 : 10) : 100,
              transition: {
                duration: 0.1,
                delay: 0.2,
              },
            }}
          >
            <Cart className="cart" />
          </motion.li>
        </ul>
        <div className="info">
          <p className="title">Lorem, ipsum. Lorem ipsum</p>
          <span className="rating">
            {getStar(rating).map((value, i) => (
              <div key={i}>
                <Star />
                <HalfStar />
              </div>
            ))}
          </span>
          <h4>Rs 100 </h4>
        </div>
      </div>
    </>
  );
};

export default Card;
