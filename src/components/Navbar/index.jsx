import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  BsSearch as Search,
  BsHeart as Heart,
  BsCartDash as Cart,
} from "react-icons/bs";

import { useWindowSize } from "../../hooks";

import "./style.scss";

const Navbar = () => {
  const [height, width] = useWindowSize();
  return (
    <>
      <header className="Navbar">
        <div className="logo">Ty Store</div>
        <nav className="menu">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/womens">Womens</NavLink>
          <NavLink to="/mens">Mens</NavLink>
          <NavLink to="/kids"> Kids</NavLink>
          <NavLink to="/accessories"> Accessories</NavLink>
          <NavLink to="/contact"> Contact</NavLink>
        </nav>
        <div className="right">
          <div className="auth">
            <span>Login /</span>
            <span> Register</span>
          </div>
          <div className="other">
            <div className="icon">
              <Search />
            </div>
            <div className="icon number" data-number="5">
              <Heart />
            </div>
            <div className="icon number" data-number="99">
              <Cart />
            </div>
          </div>
        </div>

        <div className="ham">
          <span></span>
        </div>
      </header>
    </>
  );
};

export default Navbar;
