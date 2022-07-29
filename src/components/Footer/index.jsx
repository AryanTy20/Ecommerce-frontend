import "./style.scss";

import {
  FaFacebookF as FB,
  FaTwitter as Twitter,
  FaInstagram as IG,
  FaYoutube as Youtube,
  FaPinterestP as PinInterest,
} from "react-icons/fa";

import { C1, C2, C3, C4, C5 } from "../../../asset";

const Footer = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("hello");
  };

  return (
    <>
      <div className="footer">
        <div className="main">
          <h3 className="logo">TyStore</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, a.</p>
          <div className="pcards">
            <img src={C1} />

            <img src={C2} />

            <img src={C3} />

            <img src={C4} />

            <img src={C5} />
          </div>
        </div>
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div className="accounts">
          <h3>Account</h3>
          <ul>
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Checkout</li>
            <li>Wishlist</li>
          </ul>
        </div>
        <div className="newsLetter">
          <h3>Newsletter</h3>
          <form className="email-box" onSubmit={submitHandler}>
            <div className="inputBox">
              <input type="email" placeholder="Email" />
              <button>Subscribe</button>
            </div>
          </form>
          <div className="social-cards">
            <p className="card">
              <FB />
            </p>
            <p className="card">
              <Twitter />
            </p>
            <p className="card">
              <IG />
            </p>
            <p className="card">
              <Youtube />
            </p>
            <p className="card">
              <PinInterest />
            </p>
          </div>
        </div>
      </div>
      <div className="createdby">
        <p>
          created by : <a href="http://github.com/AryanTy20">AryanTy</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
