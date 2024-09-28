import { useState, useEffect } from "react";
import "./Carousel.css";
import s2 from "../images/2.jpg";
import s3 from "../images/3.jpg";
import s4 from "../images/4.jpg";
import s5 from "../images/5.jpg";

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  

  const images = [s2, s3, s4, s5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval); 
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img
          src={images[currentImage]}
          alt={`Imagen ${currentImage + 1}`}
          className="carousel-image"
        />
        <button onClick={prevImage} className="carousel-control left">
          &#10094;
        </button>
        <button onClick={nextImage} className="carousel-control right">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;