import React, { useState } from 'react';
import "./carousel.css";
import imagem1 from "./imagem1.jpg";
import imagem2 from "./imagem2.jpg";
import imagem3 from "./imagem3.jpg";
import imagem4 from "./imagem4.jpg";

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    imagem1,
    imagem2,
    imagem3,
    imagem4
  ];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="bigone">
        <text>Quizes Feitos</text>
    <div className="carousel">
        <button onClick={prevImage}> {'<'} </button>

      <div id="images">
        <div className="component">
            <img src={images[(currentImage + images.length - 1) % images.length]} alt={`Image ${currentImage + 1}`} />
        </div>

        <div className="component">
            <img src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
        </div>

        <div className="component">
            <img src={images[(currentImage + 1) % images.length]} alt={`Image ${currentImage + 2}`} />
        </div>
      </div>

      <button onClick={nextImage}> {'>'} </button>
    </div>
    </div>
  );
}

export default Carousel;
