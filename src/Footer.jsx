import React from 'react';
import './Footer_style.css'; // Assurez-vous de créer un fichier CSS pour le style
import { Link } from 'react-router-dom';

const scrollToSection = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.scrollIntoView({ behavior: 'smooth' });
  }
};

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Colonne 1: About Us */}
        <div className="footer-column">
          <h4>À propos</h4>
          <ul>
            <li><Link to="/AboutUS" onClick={scrollToSection}>About Us</Link></li>
            <li><Link to="/OurMission" onClick={scrollToSection}>Our Mission</Link></li>
            <li><Link to="/CompanyHistory" onClick={scrollToSection}>Company History</Link></li>
            <li><Link to="/CustomerTestimonials" onClick={scrollToSection}>Customer Testimonials</Link></li>
          </ul>
        </div>

        {/* Colonne 2: Useful Links */}
        <div className="footer-column">
          <h4>Useful Links</h4>
          <ul>
            <li><Link to="/" onClick={scrollToSection}>Home</Link></li>
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
      <p className='copy'>&copy; 2024 TechSpot. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
