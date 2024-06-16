import React from "react";
import logo from "../../assets/images/logo-white.png";

import "./Footer.css";

import NewsLetterForm from "../UI/NewsLetterForm";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="get-started fade-in">
          <h4>
            Get started <span>today</span>
          </h4>
          <p>
            Sign up to receive email updates on new products announcements,
            special promotions sales and more.
          </p>
        </div>
        <NewsLetterForm />
        <div className="footer-nav">
          <img src={logo} alt="CoinCash Logo" />
          <nav>
            <ul>
              <li>
                <a href="#policy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms and conditions</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
