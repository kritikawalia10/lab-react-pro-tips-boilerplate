import React from "react";
import { Link } from "react-router-dom";

const Head = () => (
  <nav className="nav">
    <div className="items">
      <Link to="/" className="logo">Kalvium💖</Link>
    </div>
    <div className="menu">
      <ul className="value">
        <NavItem to="/contacts" text="Contacts" className="home" />
        <NavItem to="/register" text="Register" className="about" />
      </ul>
    </div>
  </nav>
);

const NavItem = ({ to, text, className }) => (
  <li className="nav-item">
    <Link to={to} className={`nav-link ${className || ""}`}>{text}</Link>
  </li>
);

export default Head ;