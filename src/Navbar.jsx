import React from 'react';
import './Navbar.css'; // Fichier CSS pour styliser la navbar
import { Link } from 'react-router-dom'; // Importer Link pour les liens de navigation

const Navbar = () => {
  return (
    <nav className="navbar">
            <div className="nav1">
                <div className="navbar-logo">
                    <img src="/images/TechSpot.png" alt="TechSpot" />
                    <p style={{ fontFamily: "'Protest Revolution', sans-serif" }}>TechSpot</p>
                </div>
                <div className="navbar-links">
                    <a href="/revendre">Revendre</a>
                    <a href="/notre-pacte-qualite">Notre Pacte Qualité</a>
                    <a href="/backstories">BackStories</a>
                    <a href="/aide">Aide</a>
                </div>
                <div className="navbar-search">
                    <input type="text" placeholder="Que cherchez-vous ?" />
                    <button>🔍</button>
                </div>
                <div className="navbar-actions">
                        <img src="/images/morocco.png" alt="MAR" style={{ width: "40px", height: "25px" }}/>
                    <a href="/">
                        <img
                            src="/images/person.png"
                            alt="log"
                            style={{ width: "25px", height: "25px" }}
                        />
                    </a>
                    <a href="/">
                        <img
                            src="/images/shopping_cart.png"
                            alt="cart"
                            style={{ width: "25px", height: "25px" }}
                        />
                    </a>
                </div>  
            </div>
            <div className="nav2">
                <div className="navbar-categories">
                    <a href="/black-friday" className="highlight">Black Friday</a>
                    <Link to="/smartphones">Smartphones</Link>
                    <a href="/ordinateurs-portables">Ordinateurs portables</a>
                    <a href="/tablettes">Tablettes</a>
                    <a href="/consoles">Consoles</a>
                    <a href="/montres-connectees">Montres connectées</a>
                    <a href="/audio">Audio</a>
                    <a href="/appareils-electromenagers">Appareils électroménagers</a>
                    <a href="/autres">Autres</a>
                </div>
            </div>   
    </nav>
  );
};

export default Navbar;
