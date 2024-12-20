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

        {/* Colonne 3: Customer Support */}
        <div className="footer-column">
          <h4>Customer Support</h4>
          <ul>
            <li><Link to="/FAQ" onClick={scrollToSection}>FAQ</Link></li>
            <li><Link to="/ReturnPolicy" onClick={scrollToSection}>Return Policy</Link></li>
            <li><Link to="/ContactUs" onClick={scrollToSection}>Contact Our Team</Link></li>
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
          </ul>
        </div>
      </div>
      <hr />
      <div className="lastfooter">
        <p className='copy'>&copy; 2024 TechSpot. All rights reserved.</p>
        <div className="paiem">
          <img src="/footer_pic/MasterCard-Logo.png" alt="mastercard" />
          <img src="/footer_pic/Visa-Logo.png" alt="visa" />
          <img src="/footer_pic/Paypal_logo.png" alt="paypal" />
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
