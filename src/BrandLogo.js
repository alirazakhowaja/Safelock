// src/BrandLogo.js
import React from "react";
import "./BrandLogo.css"; // optional, for styling if needed

function BrandLogo({ image, alt }) {
  return (
    <div className="brand-logo">
      <img src={image} alt={alt} />
    </div>
  );
}

export default BrandLogo;
