import "./carousel.css";
import imagem1 from "./estatistica1.png";
import imagem2 from "./estatistica2.png";
import imagem3 from "./imagem3.jpg";
import imagem4 from "./imagem4.jpg";
import React, {useState, useEffect} from 'react';
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
  useEffect(() => {
    // Create an interval to call nextImage every 2.5 seconds (2500 milliseconds)
    const interval = setInterval(nextImage, 2500);
    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [currentImage]);
  return (
    <div className="bigone">
      <text className='textCarousel'>Quizes Feitos</text>
      <div className="carousel">
        <button className="btnCarousel" onClick={prevImage}> {'<'} </button>
        <div id="images">
          <div className="component">
            <img className='carouselPictures' src={images[(currentImage + images.length - 1) % images.length]} alt={`Image ${currentImage + 1}`} />
          </div>
          <div className="component">
            <img className='carouselPictures' src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
          </div>
          <div className="component">
            <img className='carouselPictures' src={images[(currentImage + 1) % images.length]} alt={`Image ${currentImage + 2}`} />
          </div>
        </div>
        <button className="btnCarousel" onClick={nextImage}> {'>'} </button>
      </div>
    </div>
  );
}
export default Carousel;