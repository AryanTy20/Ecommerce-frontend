import { NavLink } from "react-router-dom";
import { useState } from "react";
import {
  BsSearch as Search,
  BsHeart as Heart,
  BsCartDash as Cart,
} from "react-icons/bs";
import "./style.scss";

const Navbar = () => {
  return (
    <>
      <header className="Navbar">
        <div className="logo">Ty Store</div>
        <nav className="menu">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/womens">Womens</NavLink>
          <NavLink to="mens">Mens</NavLink>
          <NavLink to="kids"> Kids</NavLink>
          <NavLink to="accessories"> Accessories</NavLink>
          <NavLink to="contact"> Contact</NavLink>
        </nav>
        <div className="right">
          <div className="auth">
            <span>Login /</span>
            <span> Register</span>
          </div>
          <div className="other">
            <Search className="icon" />
            <Heart className="icon" />
            <Cart className="icon" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
