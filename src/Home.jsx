import React, { useState, useEffect } from "react";

import "./Home.css";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: "A7/slide1.png", alt: "Image 1" },
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

  const products = [
    { id: 1, name: 'iPhone 13', image: '/images/iphone13.avif', storage: '128 Go', color: 'Minuit', unlocked: 'Débloqué', rating: '4.4/5', reviews: 21245, currentPrice: 424.0, oldPrice: 749.0 },
    { id: 2, name: 'Galaxy S21 5G', image: '/images/S21.avif', storage: '128 Go', color: 'Gris', unlocked: 'Débloqué', rating: '4.2/5', reviews: 5042, currentPrice: 255.19, oldPrice: 1059.0 },
    { id: 3, name: 'Google Pixel 7', image: '/images/Googlepixel7.avif', storage: '128 Go', color: 'Vert', unlocked: 'Débloqué', rating: '4.4/5', reviews: 616, currentPrice: 289.68, oldPrice: 649.99 },
    { id: 4, name: 'iPhone 8', image: '/images/iphone8.avif', storage: '64 Go', color: 'Gris sidéral', unlocked: 'Débloqué', rating: '4.2/5', reviews: 2195, currentPrice: 109.74, oldPrice: 299.0 },
    { id: 5, name: 'iPhone 14', image: '/images/iphone14.jpg', storage: '256 Go', color: 'Blanc', unlocked: 'Débloqué', rating: '4.6/5', reviews: 5050, currentPrice: 1029.0, oldPrice: 1200.0 },
    { id: 6, name: 'Galaxy Z Fold 4', image: '/images/fold4.jpg', storage: '512 Go', color: 'Noir', unlocked: 'Débloqué', rating: '4.8/5', reviews: 1200, currentPrice: 1500.0, oldPrice: 1800.0 },
    { id: 7, name: 'Galaxy Z Fold 4', image: '/images/fold4.jpg', storage: '512 Go', color: 'Noir', unlocked: 'Débloqué', rating: '4.8/5', reviews: 1200, currentPrice: 1500.0, oldPrice: 1800.0 },
    { id: 8, name: 'Galaxy Z Fold 4', image: '/images/fold4.jpg', storage: '512 Go', color: 'Noir', unlocked: 'Débloqué', rating: '4.8/5', reviews: 1200, currentPrice: 1500.0, oldPrice: 1800.0 },
    { id: 9, name: 'Galaxy Z Fold 4', image: '/images/fold4.jpg', storage: '512 Go', color: 'Noir', unlocked: 'Débloqué', rating: '4.8/5', reviews: 1200, currentPrice: 1500.0, oldPrice: 1800.0 },
    { id: 10, name: 'Galaxy Z Fold 4', image: '/images/fold4.jpg', storage: '512 Go', color: 'Noir', unlocked: 'Débloqué', rating: '4.8/5', reviews: 1200, currentPrice: 1500.0, oldPrice: 1800.0 },
  ];

 

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, products.length));
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    }
  };

  const visibleProducts = products.slice(startIndex, Math.min(startIndex + itemsPerPage, products.length));
  const productList = [
    { id: 1, name: 'iPhone 160', category: 'iPhone', image: '/images/iphone13.avif', storage: '128 Go', color: 'Minuit', unlocked: 'Débloqué', rating: '4.4/5', reviews: 21245, currentPrice: 424.0, oldPrice: 749.0 },
    { id: 2, name: 'Galaxy S21 5G', category: 'Smartphones Android', image: '/images/S21.avif', storage: '128 Go', color: 'Gris', unlocked: 'Débloqué', rating: '4.2/5', reviews: 5042, currentPrice: 255.19, oldPrice: 1059.0 },
    { id: 3, name: 'Google Pixel 7', category: 'Smartphones Android', image: '/images/Googlepixel7.avif', storage: '128 Go', color: 'Vert', unlocked: 'Débloqué', rating: '4.4/5', reviews: 616, currentPrice: 289.68, oldPrice: 649.99 },
    { id: 4, name: 'iPhone 8', category: 'iPhone', image: '/images/iphone8.avif', storage: '64 Go', color: 'Gris sidéral', unlocked: 'Débloqué', rating: '4.2/5', reviews: 2195, currentPrice: 109.74, oldPrice: 299.0 },
    { id: 5, name: 'iPhone 14', category: 'iPhone', image: '/images/iphone14.jpg', storage: '256 Go', color: 'Blanc', unlocked: 'Débloqué', rating: '4.6/5', reviews: 5050, currentPrice: 1029.0, oldPrice: 1200.0 },
    { id: 6, name: 'Galaxy Z Fold 4', category: 'Smartphones Android', image: '/images/fold4.jpg', storage: '512 Go', color: 'Noir', unlocked: 'Débloqué', rating: '4.8/5', reviews: 1200, currentPrice: 1500.0, oldPrice: 1800.0 },
    { id: 7, name: 'iPhone 160', category: 'iPhone', image: '/images/iphone13.avif', storage: '128 Go', color: 'Minuit', unlocked: 'Débloqué', rating: '4.4/5', reviews: 21245, currentPrice: 424.0, oldPrice: 749.0 },
    { id: 8, name: 'iPhone 160', category: 'iPhone', image: '/images/iphone13.avif', storage: '128 Go', color: 'Minuit', unlocked: 'Débloqué', rating: '4.4/5', reviews: 21245, currentPrice: 424.0, oldPrice: 749.0 },
    // Add more products as needed
  ];

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const productsPerPage = 3;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState([]);
  
  const categories = [
    "Tablets",
    "iPhone",
    "Smartphones Android",
    "Aspirateurs",
    "Petits électroménagers",
    "Smartwatches",
    "MacBook",
    "Ordinateurs Windows"
  ];

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
    const category = categories[index];
    const filteredProducts = productList.filter(product => product.category === category);
    setSelectedProduct(filteredProducts);
    setCurrentStartIndex(0); // Reset pagination on category change
  };

  const handleNextList = () => {
    if (currentStartIndex + productsPerPage < selectedProduct.length) {
      setCurrentStartIndex(prevIndex => Math.min(prevIndex + productsPerPage, selectedProduct.length - 1));
    }
  };

  const handlePrevList = () => {
    if (currentStartIndex > 0) {
      setCurrentStartIndex(prevIndex => Math.max(prevIndex - productsPerPage, 0));
    }
  };

  const currentVisibleProducts = selectedProduct.slice(currentStartIndex, Math.min(currentStartIndex + productsPerPage, selectedProduct.length));
  
  
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
        <i class="fa-solid fa-coins"></i>
          <p>Retours gratuits jusqu'au 31/01</p>
        </div>
        <div className="benefit">
          <i className="fa-solid fa-mobile-screen"></i>
          <p>Fonctions bonus dans l'app</p>
        </div>
      </div>

      <div className="Vus_recemment">
        <h1>Vus récemment</h1>
        <div className="product-container">
          {visibleProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.storage} - {product.color}</p>
              <p>⭐ {product.rating} ({product.reviews} avis)</p>
              <p>
                <span className="current-price">{product.currentPrice.toFixed(2)} €</span>
                <span className="old-price">{product.oldPrice.toFixed(2)} €</span>
              </p>
            </div>
          ))}
        </div>
        <div className="pagination-controls">
          <button onClick={handlePrev} disabled={startIndex === 0}>
            ◀
          </button>
          <button onClick={handleNext} disabled={startIndex + itemsPerPage >= products.length}>
            ▶
          </button>
        </div>
      </div>

      <div className="recherches-black-friday">
        <h1>Les plus recherchés à Black Friday</h1>
        <div className="items">
          <div className="item">
            <img src="/A7/Phone_HP_Category_Smartphone_desktop.avif" alt="iPhone" />
            <h3>iPhone</h3>
          </div>
          <div className="item">
            <img src="/A7/Phone_HP_Category_Smartphone_desktop.avif" alt="MacBook" />
            <h3>MacBook</h3>
          </div>
          <div className="item">
            <img src="/A7/Phone_HP_Category_Smartphone_desktop.avif" alt="iPad" />
            <h3>iPad</h3>
          </div>
          <div className="item">
            <img src="/A7/Phone_HP_Category_Smartphone_desktop.avif" alt="Console de jeux" />
            <h3>Console de jeux</h3>
          </div>
        </div>
      </div>


      <section className="hero">
  <div className="hero-content">
    {/* Hero Image */}
    <div className="hero-image">
      <img src="A7/image.png" alt="Hero Section - Discover Our Best Deals" />
    </div>

    {/* Hero Text and Navigation */}
    <div className="hero-text">
      <h1>Découvrez nos meilleures offres</h1>

      {/* Category Navigation */}
      <div className="category-navigation">
        {categories.map((category, idx) => (
          <button
            key={idx}
            className="category-button"
            onClick={() => handleCategoryClick(idx)} // Passe l'index du bouton cliqué
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Carousel and List */}
      <div className="hero-carouselmo">
        <div className="product-containermo">
          {currentVisibleProducts.map((product, index) => (
            <div key={index} className="product-cardmo">
              <span className="badgemo">Top ventes</span>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>
                {product.storage} - {product.color}
              </p>
              <p>
                ⭐ {product.rating} ({product.reviews} avis)
              </p>
              <p>
                <span className="current-pricemo">
                  {product.currentPrice.toFixed(2)} €
                </span>
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controlsmo">
          <button onClick={handlePrevList} disabled={currentStartIndex === 0}>
            ◀
          </button>
          <button
            onClick={handleNextList}
            disabled={currentStartIndex + productsPerPage >= selectedProduct.length}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  </div>
</section>




    </div>
  );
}

export default Home;
