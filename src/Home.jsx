import React, { useState, useEffect } from "react";
import "./Home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: "A7/image.png", alt: "Image 1" },
    { src: "A7/BF_HPBanner_Desktop_Laptop_FR.avif", alt: "Image 2" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="home">
      <div className="carousel">
        <div className="slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${currentIndex === index ? "active" : ""}`}
            >
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        <div className="navigation">
          <button className="prev" onClick={prevSlide}>
            ◀
          </button>
          <button className="next" onClick={nextSlide}>
            ▶
          </button>
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => showSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="title">
        <h2>La circularité recommence ici.</h2>
        <p>Achetez et revendez vos appareils à des pros du reconditionné.</p>
      </div>
      <div className="benefits">
        <div className="benefit">
          <i className="fas fa-check-circle"></i>
          <p>Reconditionné par des pros</p>
        </div>
        <div className="benefit">
          <i className="fa-regular fa-dollar-sign"></i>
          <p>Reprise au meilleur prix</p>
        </div>
        <div className="benefit">
          <img src="A7/pieces-de-monnaie.png" alt="" />
          <p>Retours gratuits jusqu'au 31/01</p>
        </div>
        <div className="benefit">
          <i className="fa-solid fa-mobile-screen"></i>
          <p>Fonctions bonus dans l'app</p>
        </div>
      </div>
      
    </div>
  );
}

export default Home;
