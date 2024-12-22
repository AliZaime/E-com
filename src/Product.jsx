import React, { useState } from 'react';
import './Product.css';

// Helper function to generate image path dynamically
const generateImagePath = (productName, color) => {
  const sanitizedColor = color.replace(/\s+/g, ''); // Remove spaces from color name
  return `/Products/${productName}_${sanitizedColor}.png`;
};

// Product details
const products = [
  {
    id: 1,
    name: 'IphoneXR',  // The name variable here
    image: '/Products/IphoneXR_Black.png',
    storage: '128 Go',
    color: 'Minuit',
    unlocked: 'Débloqué',
    rating: '4.4/5',
    reviews: 21245,
    currentPrice: 424.0,
    oldPrice: 749.0,
    description: 'Le Google Pixel 2 est un smartphone haut de gamme de Google.',
  },
];

// Color options
const colorOptions = [
  {
    color: 'Black',
    colorPrimary: '#000',
    colorSec: '#212121',
    pic: '', // We'll set this dynamically
  },
  {
    color: 'Red',
    colorPrimary: '#7E021C',
    colorSec: '#bd072d',
    pic: '', // We'll set this dynamically
  },
  {
    color: 'Orange',
    colorPrimary: '#CE5B39',
    colorSec: '#F18557',
    pic: '', // We'll set this dynamically
  },
];

// Assign image paths dynamically to color options for the product
products.forEach((product) => {
  colorOptions.forEach((option) => {
    option.pic = generateImagePath(product.name, option.color); // Dynamically set pic
  });
});

const ProductPage = () => {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]); // Default to the first color

  const handleColorChange = (colorOption) => {
    setSelectedColor(colorOption); // Update selected color when clicked
  };

  return (
    <div className="Product">
      {products.map((product) => (
        <div key={product.id} className="carte">
          <div className="imgBx" style={{ background: selectedColor.colorSec }}>
            <img
              src={selectedColor.pic} // Use the selected color's image
              alt={product.name}
              className="product-image"
            />
          </div>
          <div className="details">
            <h2 style={{ color: selectedColor.colorSec }}>{product.name}</h2>
            <p style={{ color: selectedColor.colorSec }}>{product.description}</p>
            <p style={{ color: selectedColor.colorSec }}>Stockage : {product.storage}</p>
            <p style={{ color: selectedColor.colorSec }}>État : {product.unlocked}</p>
            <p style={{ color: selectedColor.colorSec }}>
              Note : {product.rating} ({product.reviews} avis)
            </p>
            <p style={{ color: selectedColor.colorSec }}>
              Prix : <span className="current-price">${product.currentPrice.toFixed(2)}</span>{' '}
              <span className="old-price">${product.oldPrice.toFixed(2)}</span>
            </p>
            <div className="product-colors" style={{ color: selectedColor.colorSec }}>
              {colorOptions.map((option, index) => (
                <span
                  key={index}
                  className={option.color === selectedColor.color ? 'active' : ''}
                  style={{ backgroundColor: option.colorPrimary }}
                  onClick={() => handleColorChange(option)} // Handle color change
                />
              ))}
            </div>
            <button className="add-to-cart" style={{ background: selectedColor.colorSec }}>
              Ajouter au panier
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
