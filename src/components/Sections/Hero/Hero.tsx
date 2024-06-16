import React from "react";
import Button from "../../UI/Button";
import useScreenSize from "../../../hooks/useScreenSize";

import phone from "../../../assets/images/iphone.png";

import "./Hero.css";
import "../../../styles/animations.css";

const Hero: React.FC = () => {
  const isMobile = useScreenSize();

  return (
    <section className="hero">
      <div className="container">
        <div className="heading ">
          <h1 className="slide-in-left">
            You can buy anything with <span>COINCASH</span>
          </h1>
          <p className="slide-in-left">
            The easiest way to use your cryptocurrencies for everyday purchases.
          </p>
          <Button className="cta-button fade-in-up">
            {isMobile ? "Get the app" : "Download now for free"}
          </Button>
        </div>
        <div className="image-container fade-in">
          <img
            className="hero-image"
            src={phone}
            alt="Phone with Coincash App"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
