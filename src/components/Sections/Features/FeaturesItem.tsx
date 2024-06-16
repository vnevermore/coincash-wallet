import React from "react";

interface FeatureItemProps {
  imgSrc: string;
  imgAlt: string;
  text: string;
  highlight: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  imgSrc,
  imgAlt,
  text,
  highlight,
}) => {
  return (
    <div className="features-item">
      <img src={imgSrc} alt={imgAlt} />
      <p>
        You can <br />
        <span>{highlight}</span> {text}
      </p>
    </div>
  );
};

export default FeatureItem;
