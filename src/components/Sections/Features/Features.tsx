import React from "react";

import "./Features.css";

import ticket from "../../../assets/images/icon-airplane-ticket.png";
import cart from "../../../assets/images/icon-cart.png";
import page from "../../../assets/images/icon-page.png";
import shopAnywhere from "../../../assets/images/shop-anywhere.jpg";
import zeroFees from "../../../assets/images/zero-fees.jpg";
import FeatureItem from "./FeaturesItem";
import PromoSection from "./PromoSection";

const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features-heading">
          <h2>Buy anything you ever imagine</h2>
          <p>
            The easiest way to use your cryptocurrencies for everyday purchases.{" "}
          </p>
        </div>
        <div className="features-items">
          <FeatureItem
            imgSrc={ticket}
            imgAlt="buy ticket"
            text="tickets"
            highlight="book"
          />
          <FeatureItem
            imgSrc={cart}
            imgAlt="buy groceries"
            text="groceries"
            highlight="buy"
          />
          <FeatureItem
            imgSrc={page}
            imgAlt="pay your bills"
            text="your bills"
            highlight="pay"
          />
        </div>
        <PromoSection
          imgSrc={shopAnywhere}
          imgAlt="shop anywhere"
          title="Shop anywhere"
          text="The easiest way to use your cryptocurrencies for everyday purchases."
          alignRight
        />
        <PromoSection
          imgSrc={zeroFees}
          imgAlt="zero fees"
          title="Zero fees"
          text="The easiest way to use your cryptocurrencies for everyday purchases."
        />
      </div>
    </section>
  );
};

export default Features;
