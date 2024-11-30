import React, { useState } from 'react';
import './Smartphones.css';

const Smartphones = () => {
    const smartphones = [
        { id: 1, name: 'iPhone', image: "/images/most-wanted--iphone-15--desktop.avif"},
        { id: 2, name: 'Samsung Galaxy', image: '/images/most-wanted--galaxy-s23--desktop.avif' },
        { id: 3, name: 'Google Pixel', image: '/images/most-wanted--google-pixel-8--desktop.avif' },
        { id: 4, name: 'Toutes les marques', image: '/images/most-wanted--all-brands--desktop.avif'}
      ];  
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
        // Ajoute plus de produits ici...
      ];

  const [startIndex, setStartIndex] = useState(0); // Index de départ
  const itemsPerPage = 4; // Nombre de produits affichés par page

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

  const visibleProducts = products.slice(
    startIndex,
    Math.min(startIndex + itemsPerPage, products.length)
  );

  return (
    <><div className="smartphones-page">
          <nav className="breadcrumb">
              <a href="/">Accueil</a> &gt; <span>Smartphones</span>
          </nav>
          <h1>Smartphones</h1>
          <p className="subtitle">Achetez des smartphones et plus encore</p>
          <div className="smartphones-grid">
              {smartphones.map((phone) => (
                  <div key={phone.id} className="smartphone-card">
                      <img src={phone.image} alt={phone.name} className="smartphone-image" />
                      <h3>{phone.name}</h3>
                  </div>
              ))}
          </div>
      </div>
      <div className="mostbuyed-smartphones">
            <h1>Découvrez nos meilleures ventes</h1>
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
        </div></>
  );
};

export default Smartphones;
