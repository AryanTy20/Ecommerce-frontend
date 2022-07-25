import "./style.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="main">
          <h3>TyStore</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, a.</p>
          <div className="pcards">
            <p className="card"></p>
            <p className="card"></p>
            <p className="card"></p>
            <p className="card"></p>
            <p className="card"></p>
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
          <form className="email-box">
            <div className="inputBox">
              <input type="email" />
              <button>Subscribe</button>
            </div>
          </form>
          <div className="social-cards">
            <p className="card"></p>
            <p className="card"></p>
            <p className="card"></p>
            <p className="card"></p>
            <p className="card"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
