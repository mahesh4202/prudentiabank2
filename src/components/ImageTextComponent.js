import React from "react";
import './ImageTextComponent.css';
import figma from '../Assets/Mobile App.jpg'

const ImageTextComponent = () => {
  return (
    <div className="containerimage">
      <div className="content">
        <div className="image-section">
          <img src={figma} alt="Placeholder" className="image" />
        </div>
        <div className="text-section">
          <div>
            <h1 className="hi">Download our Mobile App for many more features</h1>
            <div className="d-flex middle">
              <div>
                <a href='/'>
                  <img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45"/>
                </a>                
              </div>
              <div>
                <a href="/" tabIndex="0">
                  <img class="bn45" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;
