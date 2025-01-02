import React, { useState } from 'react';
import './Tablettes.css';
import { Link } from 'react-router-dom';

const Consoles = () => {
    const Consoles = [
        { id: 1, name: 'Play Station', image: '/Consoles_pic/ps.png', lien: '/Consoles/PS' },
        { id: 2, name: 'Xbox', image: '/Consoles_pic/xbox.png', lien: '/Consoles/XBOX' },
        { id: 3, name: 'Nintendo', image: '/Consoles_pic/nintendo.png', lien: '/Consoles/Nintendo' },
        { id: 4, name: 'Toutes les marques', image: '/Consoles_pic/ps5.png', lien: '/Consoles/AllProducts' }
    ];
    
    const tablets = [
        { id: 1, name: 'PlayStation 5', image: '/consoles_pic/ps5.png', storage: '825 Go', color: 'Blanc', unlocked: 'Standard', rating: '4.9/5', reviews: 25000, currentPrice: 499.0, oldPrice: 599.0 },
        { id: 2, name: 'Xbox Series X', image: '/Consoles_pic/xboxserieX.png', storage: '1 To', color: 'Noir', unlocked: 'Standard', rating: '4.8/5', reviews: 20000, currentPrice: 499.0, oldPrice: 599.0 },
        { id: 3, name: 'Nintendo Switch OLED', image: '/Consoles_pic/nintendoswitcholed.avif', storage: '64 Go', color: 'Blanc', unlocked: 'Standard', rating: '4.7/5', reviews: 15000, currentPrice: 349.0, oldPrice: 399.0 },
        { id: 4, name: 'PlayStation 4 Slim', image: '/Consoles_pic/ps4slim.webp', storage: '1 To', color: 'Noir', unlocked: 'Standard', rating: '4.6/5', reviews: 18000, currentPrice: 299.0, oldPrice: 349.0 },
        { id: 5, name: 'Xbox Series S', image: '/Consoles_pic/xboxserieS.png', storage: '512 Go', color: 'Blanc', unlocked: 'Standard', rating: '4.5/5', reviews: 12000, currentPrice: 299.0, oldPrice: 349.0 },
        { id: 6, name: 'Nintendo Switch Lite', image: '/Consoles_pic/nintendoswitchlite.png', storage: '32 Go', color: 'Turquoise', unlocked: 'Standard', rating: '4.4/5', reviews: 10000, currentPrice: 199.0, oldPrice: 249.0 },
        { id: 7, name: 'PlayStation 5 pro', image: '/Consoles_pic/ps5 pro.webp', storage: '512 Go', color: 'Noir', unlocked: 'Standard', rating: '4.8/5', reviews: 7000, currentPrice: 649.0, oldPrice: 699.0 },
        { id: 8, name: 'PlayStation 5 Digital Edition', image: '/Consoles_pic/ps5digital.webp', storage: '825 Go', color: 'Blanc', unlocked: 'Digital', rating: '4.7/5', reviews: 15000, currentPrice: 399.0, oldPrice: 499.0 },
        { id: 9, name: 'Xbox One X', image: '/Consoles_pic/xboxonex.png', storage: '1 To', color: 'Noir', unlocked: 'Standard', rating: '4.5/5', reviews: 9000, currentPrice: 399.0, oldPrice: 499.0 },
        { id: 10, name: 'Nintendo 3DS XL', image: '/Consoles_pic/nintendo3DSxl.png', storage: '4 Go', color: 'Rouge', unlocked: 'Standard', rating: '4.3/5', reviews: 5000, currentPrice: 149.0, oldPrice: 199.0 },
        // Ajoute plus de consoles ici...
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
              <a href="/">Accueil</a> &gt; <span>Consoles</span>
          </nav>
          <h1>Consoles</h1>
          <p className="subtitle">Achetez des Consoles et plus encore</p>
          <div className="smartphones-grid">
              {Consoles.map((laptop) => (
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

export default Consoles;
