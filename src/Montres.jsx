import React, { useState } from 'react';
import './watches.css';
import { Link } from 'react-router-dom';

const Watches = () => {
    const watches = [
        { id: 1, name: 'Apple Watch', image: "/laptops_pic/mac1.png", lien: "/Montres/AppleWatch" },
        { id: 2, name: 'Samsung Galaxy Watch', image: '/tablets_pic/samsung1.png', lien: "/Montres/Samsung_Watch" },
        { id: 4, name: 'Toutes les marques', image: "/watches_pic/Apple-Watch-Serie-8.webp", lien: "/Montres/ALLMontresConnectées" }
    ];

    const products = [
        { id: 1, name: 'Apple Watch Series 8', image: '/watches_pic/Apple-Watch-Serie-8.webp', storage: 'GPS + Cellular', color: 'Minuit', unlocked: 'Débloqué', rating: '4.7/5', reviews: 4532, currentPrice: 479.99, oldPrice: 529.0 },
        { id: 2, name: 'Samsung Galaxy Watch 6', image: 'watches_pic/us-galaxy-watch4-classic-sm-r890nzkaxaa-505850631.webp', storage: 'Bluetooth + LTE', color: 'Graphite', unlocked: 'Débloqué', rating: '4.5/5', reviews: 3421, currentPrice: 399.99, oldPrice: 429.0 },
        { id: 4, name: 'Apple Watch Ultra', image: '/watches_pic/applewatchultra.png', storage: 'GPS + Cellular', color: 'Titanium', unlocked: 'Débloqué', rating: '4.9/5', reviews: 5231, currentPrice: 899.99, oldPrice: 999.0 },
        { id: 5, name: 'Samsung Galaxy Watch 5 Pro', image: '/watches_pic/1YenWrUTNx6zakeuMYwz7eJ66qkFG3LiX1iDWkIK.png', storage: 'Bluetooth + LTE', color: 'Noir', unlocked: 'Débloqué', rating: '4.6/5', reviews: 3121, currentPrice: 429.99, oldPrice: 459.99 },
        { id: 7, name: 'Apple Watch SE (2nd Gen)', image: '/watches_pic/midnight-aluminum-midnight-sport-m-l-6.webp', storage: 'GPS', color: 'Blanc', unlocked: 'Débloqué', rating: '4.6/5', reviews: 2412, currentPrice: 279.99, oldPrice: 299.99 },
        { id: 8, name: 'Samsung Galaxy Watch 4 Classic', image: '/watches_pic/GT runner.webp', storage: 'Bluetooth', color: 'Argent', unlocked: 'Débloqué', rating: '4.5/5', reviews: 4103, currentPrice: 329.99, oldPrice: 349.99 },
        { id: 10, name: 'Apple Watch Series 7', image: '/watches_pic/Apple-Watch-Serie-8.webp', storage: 'GPS + Cellular', color: 'Vert', unlocked: 'Débloqué', rating: '4.7/5', reviews: 5320, currentPrice: 379.99, oldPrice: 429.99 },
    ];
    

    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4;

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

        <><div className="watches-page">
            <nav className="breadcrumbb">
                <a href="/">Accueil</a> &gt; <span>Montres connectées</span>
            </nav>
            <h1 className='a12'>Montres connectées</h1>
            <p className="subtitlee">Découvrez notre sélection de montres connectées</p>
            <div className="watches-grid">
                {watches.map((watch) => (
                    watch.lien ? (
                        <Link key={watch.id} className="watch-card" to={watch.lien}>
                            <img src={watch.image} alt={watch.name} className="watch-image" />
                            <h3>{watch.name}</h3>
                        </Link>
                    ) : (
                        <div key={watch.id} className="watch-card">
                            <img src={watch.image} alt={watch.name} className="watch-image" />
                            <h3>{watch.name}</h3>
                        </div>
                    )
                ))}
            </div>
        </div>
            <div className="mostbuyed-watches">
                <h1 className='a12'>Découvrez nos meilleures ventes</h1>
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

export default Watches;
