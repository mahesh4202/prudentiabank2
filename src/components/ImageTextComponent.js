import React from "react";
import './ImageTextComponent.css';
import figma from '../Assets/Mobile App.jpg'

const ImageTextComponent = () => {
  return (
    <div className="containerimage">
      <div className="content">
        <div className="image-section">
          <img
            src={figma}
            alt="Placeholder"
            className="image"
          />
        </div>
        <div className="text-section">
          <h1 className="hi">Download our Mobile App for many more features</h1>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
