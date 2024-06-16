import React from "react";
import "./Header.css";

import logo from "../../assets/images/logo.png";
import burgerMenu from "../../assets/images/menu.png";

import Button from "../UI/Button";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <img className="logo" src={logo} alt="CoinCash Logo" />

        <nav>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <Button className="cta-button">Get the app</Button>
            </li>
          </ul>
        </nav>

        <div className="mobile-nav">
          <img src={burgerMenu} alt=" Menu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
