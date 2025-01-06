import React, { useState } from 'react';
import './Product.css';
import { useLocation } from "react-router-dom";

// Helper function to generate image path dynamically
const generateImagePath = (productName, color) => {
  const sanitizedColor = color.replace(/\s+/g, ''); // Remove spaces from color name
  return `/Products/${productName}_${sanitizedColor}.png`;
};

// Color options
const colorOptions = [
  { color: 'Black', colorPrimary: '#000', colorSec: '#212121', pic: '' },
  { color: 'Red', colorPrimary: '#7E021C', colorSec: '#bd072d', pic: '' },
  { color: 'Orange', colorPrimary: '#CE5B39', colorSec: '#F18557', pic: '' },
];

const ProductPage = () => {
  const location = useLocation();
  const product = location.state?.product;

  // Move hooks outside any condition
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]); // Default to the first color

  if (!product) {
    return <p>Produit introuvable.</p>;
  }

  // Dynamically assign images to color options based on product
  colorOptions.forEach((option) => {
    option.pic = generateImagePath(product.name, option.color);
  });

  const handleColorChange = (colorOption) => {
    setSelectedColor(colorOption);
  };

  function addToCart(product) {
    // Récupérer les données utilisateurs depuis le localStorage
  const formData = JSON.parse(localStorage.getItem("formData")) || [];
  const loggedInEmail = localStorage.getItem("isLoggedEmail"); // Email de l'utilisateur connecté
  
  // Trouver l'utilisateur connecté
  const currentUserIndex = formData.findIndex(user => user.email === loggedInEmail);
  
  if (currentUserIndex !== -1) {
    // Ajouter le produit au panier de l'utilisateur connecté
    const currentUser = formData[currentUserIndex];
    currentUser.cart = currentUser.cart || []; // Initialiser le panier si inexistant
    currentUser.cart.push(product);
  
    // Mettre à jour les données dans formData
    formData[currentUserIndex] = currentUser;
    localStorage.setItem("formData", JSON.stringify(formData));
  }
  }

  return (
    <div className="Product" style={{ background: selectedColor.color }}>
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
          <button className="add-to-cart" style={{ background: selectedColor.colorSec }}
          onClick={() => addToCart(product)}>Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
