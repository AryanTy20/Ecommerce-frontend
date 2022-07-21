import { useState } from "react";
import { motion } from "framer-motion";
import {
  BsArrowsAngleExpand as Expand,
  BsHeart as Heart,
  BsCartDash as Cart,
} from "react-icons/bs";

import "./style.scss";

const Card = ({ src, title, rating, price, height, width }) => {
  const [Hover, setHover] = useState(false);

  return (
    <>
      <div
        className="Card"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="poster">
          <p className="new">New</p>
          {/* <p className="outOfStock">out of stock</p>
          <p className="sale">Sale</p> */}
          <img src={src} />
        </div>
        <motion.ul className="card_hover">
          <motion.li
            initial={{
              translateY: 100,
            }}
            animate={{
              translateY: Hover ? 0 : 100,
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
              translateY: 100,
            }}
            animate={{
              translateY: Hover ? 0 : 100,

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
              translateY: 100,
            }}
            animate={{
              translateY: Hover ? 0 : 100,
              transition: {
                duration: 0.1,
                delay: 0.2,
              },
            }}
          >
            <Cart className="cart" />
          </motion.li>
        </motion.ul>
        <div className="info">
          <p className="title">Lorem, ipsum.</p>
          <span className="rating"></span>
          <h4>Price</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
