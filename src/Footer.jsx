import React from 'react';
import './Footer_style.css'; // Assurez-vous de créer un fichier CSS pour le style

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne 1: About Us */}
        <div className="footer-column">
          <h4>À propos</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#mission">Our Mission</a></li>
            <li><a href="#history">Company History</a></li>
            <li><a href="#testimonials">Customer Testimonials</a></li>
          </ul>
        </div>

        {/* Colonne 2: Useful Links */}
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#catalog">Product Catalog</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#offers">Special Offers</a></li>
          </ul>
        </div>

        {/* Colonne 3: Customer Support */}
        <div className="footer-column">
          <h4>Customer Support</h4>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#return-policy">Return Policy</a></li>
            <li><a href="#warranty">Product Warranty</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Colonne 4: Follow Us */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='copy'>&copy; 2024 Trendify. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
