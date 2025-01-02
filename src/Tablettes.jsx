import React, { useState } from 'react';
import './Tablettes.css';
import { Link } from 'react-router-dom';

const Tablettes = () => {
    const Tablettes = [
        { id: 1, name: 'Ipad', image: '/laptops_pic/mac1.png', lien: '/Tablettes/Ipad' },
        { id: 2, name: 'Samsung Tab', image: '/tablets_pic/samsung1.png', lien: '/Tablettes/SamsungTab' },
        { id: 3, name: 'Lenovo', image: '/tablets_pic/lenovo2.png', lien: '/Tablettes/LenovoTab' },
        { id: 4, name: 'Toutes les marques', image: '/tablets_pic/ipad1.png', lien: '/Tablettes/AllProducts' }
    ];
    
    const tablets = [
        { id: 1, name: 'iPad Pro 12.9 M2', image: '/tablets_pic/ipad.jpg', storage: '1 To', color: 'Argent', unlocked: 'Wi-Fi + Cellular', rating: '4.9/5', reviews: 18000, currentPrice: 1299.0, oldPrice: 1499.0 },
        { id: 2, name: 'Samsung Galaxy Tab S9 Ultra', image: '/tablets_pic/samsungtab.jpg', storage: '512 Go', color: 'Graphite', unlocked: 'Wi-Fi + 5G', rating: '4.8/5', reviews: 14000, currentPrice: 1199.0, oldPrice: 1399.0 },
        { id: 3, name: 'Lenovo Tab P11 Pro Gen 2', image: '/tablets_pic/lenovotab.jpg', storage: '256 Go', color: 'Gris', unlocked: 'Wi-Fi', rating: '4.7/5', reviews: 8000, currentPrice: 499.0, oldPrice: 699.0 },
        { id: 4, name: 'iPad Air 5', image: '/tablets_pic/ipad.jpg', storage: '256 Go', color: 'Bleu', unlocked: 'Wi-Fi + Cellular', rating: '4.8/5', reviews: 12000, currentPrice: 699.0, oldPrice: 899.0 },
        { id: 5, name: 'Samsung Galaxy Tab S7 FE', image: '/tablets_pic/samsungtab.jpg', storage: '128 Go', color: 'Vert', unlocked: 'Wi-Fi + 5G', rating: '4.6/5', reviews: 6000, currentPrice: 549.0, oldPrice: 749.0 },
        { id: 6, name: 'Lenovo Yoga Tab 13', image: '/tablets_pic/lenovotab.jpg', storage: '256 Go', color: 'Noir', unlocked: 'Wi-Fi', rating: '4.5/5', reviews: 4000, currentPrice: 749.0, oldPrice: 899.0 },
        { id: 7, name: 'iPad Mini 6', image: '/tablets_pic/ipad.jpg', storage: '64 Go', color: 'Rose', unlocked: 'Wi-Fi', rating: '4.7/5', reviews: 10000, currentPrice: 499.0, oldPrice: 599.0 },
        { id: 8, name: 'Samsung Galaxy Tab A8', image: '/tablets_pic/samsungtab.jpg', storage: '64 Go', color: 'Argent', unlocked: 'Wi-Fi', rating: '4.4/5', reviews: 5000, currentPrice: 229.0, oldPrice: 299.0 },
        { id: 9, name: 'Lenovo Smart Tab M10', image: '/tablets_pic/lenovotab.jpg', storage: '128 Go', color: 'Noir', unlocked: 'Wi-Fi', rating: '4.3/5', reviews: 3000, currentPrice: 199.0, oldPrice: 249.0 },
        { id: 10, name: 'Samsung Galaxy Tab S8+', image: '/tablets_pic/samsungtab.jpg', storage: '256 Go', color: 'Graphite', unlocked: 'Wi-Fi + Cellular', rating: '4.8/5', reviews: 9000, currentPrice: 999.0, oldPrice: 1249.0 },
        // Ajoute plus de tablettes ici...
    ];
    
  const [startIndex, setStartIndex] = useState(0); // Index de départ
  const itemsPerPage = 4; // Nombre de produits affichés par page

  const handleNext = () => {
    if (startIndex + itemsPerPage < tablets.length) {
      setStartIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, tablets.length));
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    }
  };

  const visibleProducts = tablets.slice(
    startIndex,
    Math.min(startIndex + itemsPerPage, tablets.length)
  );

  return (
    <><div className="smartphones-page">
          <nav className="breadcrumb">
              <a href="/">Accueil</a> &gt; <span>Tablettes</span>
          </nav>
          <h1>Tablettes</h1>
          <p className="subtitle">Achetez des Tablettes et plus encore</p>
          <div className="smartphones-grid">
              {Tablettes.map((laptop) => (
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
                <button onClick={handleNext} disabled={startIndex + itemsPerPage >= tablets.length}>
                    ▶
                </button>
            </div>
        </div></>
  );
};

export default Tablettes;
