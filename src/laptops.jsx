import React, { useState } from 'react';
import './Smartphones.css';
import './Mac'
import { Link } from 'react-router-dom';

const Laptops = () => {
    const laptops = [
        { id: 1, name: 'Mac', image: '/laptops_pic/mac1.png', lien: '/laptops/Mac' },
        { id: 2, name: 'Dell', image: '/laptops_pic/dell1.png', lien: '/laptops/DellXPS' },
        { id: 3, name: 'HP', image: '/laptops_pic/hp.png', lien: '/laptops/HPSpectre' },
        { id: 4, name: 'Toutes les marques', image: '/laptops_pic/autre.png', lien: '/laptops/AllProducts' }
    ];
    
    const products = [
        { id: 1, name: 'MacBook Air M1', image: '/laptops_pic/m1.png', storage: '256 Go', color: 'Argent', unlocked: 'Débloqué', rating: '4.7/5', reviews: 15000, currentPrice: 999.0, oldPrice: 1249.0 },
        { id: 2, name: 'Dell XPS 13', image: '/laptops_pic/xps13.avif', storage: '512 Go', color: 'Platine', unlocked: 'Débloqué', rating: '4.6/5', reviews: 9000, currentPrice: 1199.0, oldPrice: 1399.0 },
        { id: 3, name: 'HP Envy 13', image: '/laptops_pic/hp13.png', storage: '256 Go', color: 'Noir', unlocked: 'Débloqué', rating: '4.5/5', reviews: 8000, currentPrice: 849.0, oldPrice: 1099.0 },
        { id: 4, name: 'Asus ZenBook 14', image: '/laptops_pic/zenbook.jpeg', storage: '512 Go', color: 'Bleu', unlocked: 'Débloqué', rating: '4.4/5', reviews: 5000, currentPrice: 799.0, oldPrice: 999.0 },
        { id: 5, name: 'Lenovo ThinkPad X1 Carbon', image: '/laptops_pic/thinkx1.avif', storage: '1 To', color: 'Noir', unlocked: 'Débloqué', rating: '4.8/5', reviews: 12000, currentPrice: 1499.0, oldPrice: 1999.0 },
        { id: 6, name: 'Microsoft Surface Laptop 5', image: '/laptops_pic/surface5.webp', storage: '256 Go', color: 'Platine', unlocked: 'Débloqué', rating: '4.6/5', reviews: 7000, currentPrice: 1299.0, oldPrice: 1499.0 },
        { id: 7, name: 'Acer Swift 3', image: '/laptops_pic/swift3.webp', storage: '512 Go', color: 'Gris', unlocked: 'Débloqué', rating: '4.3/5', reviews: 3000, currentPrice: 699.0, oldPrice: 899.0 },
        { id: 8, name: 'Razer Blade 15', image: '/laptops_pic/razer.png', storage: '1 To', color: 'Noir', unlocked: 'Débloqué', rating: '4.7/5', reviews: 4000, currentPrice: 1799.0, oldPrice: 2499.0 },
        { id: 9, name: 'LG Gram 17', image: '/laptops_pic/lg17.avif', storage: '512 Go', color: 'Blanc', unlocked: 'Débloqué', rating: '4.5/5', reviews: 2000, currentPrice: 1499.0, oldPrice: 1799.0 },
        { id: 10, name: 'MSI Prestige 14', image: '/laptops_pic/msi14.webp', storage: '512 Go', color: 'Rose', unlocked: 'Débloqué', rating: '4.4/5', reviews: 2500, currentPrice: 1399.0, oldPrice: 1699.0 },
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
              <a href="/">Accueil</a> &gt; <span>Ordinateurs Portables</span>
          </nav>
          <h1>Ordinateurs Portables</h1>
          <p className="subtitle">Achetez des Ordinateurs Portables et plus encore</p>
          <div className="smartphones-grid">
              {laptops.map((laptop) => (
                  laptop.lien ? (
                    <Link key={laptop.id} className="smartphone-card" to={laptop.lien}>
                        <img src={laptop.image} alt={laptop.name} className="smartphone-image" />
                        <h3>{laptop.name}</h3>
                    </Link>
                ) : (
                    <div key={laptop.id} className="smartphone-card">
                        <img src={laptop.image} alt={laptop.name} className="smartphone-image" />
                        <h3>{laptop.name}</h3>
                    </div>
                )
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

export default Laptops;
