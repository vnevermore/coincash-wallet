import React from "react";

interface PromoSectionProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  text: string;
  alignRight?: boolean;
}

const PromoSection: React.FC<PromoSectionProps> = ({
  imgSrc,
  imgAlt,
  title,
  text,
  alignRight,
}) => {
  return (
    <div className={`promo ${alignRight ? "right" : "left"}`}>
      {alignRight ? <img src={imgSrc} alt={imgAlt} /> : null}
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      {!alignRight ? <img src={imgSrc} alt={imgAlt} /> : null}
    </div>
  );
};

export default PromoSection;
