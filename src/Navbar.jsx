import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Fichier CSS pour styliser la navbar
import { Link } from 'react-router-dom'; // Importer Link pour les liens de navigation

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);

useEffect(() => {
    if (showMenu) {
      document.body.classList.add("blurred");
    } else {
      document.body.classList.remove("blurred");
    }
    return () => document.body.classList.remove("blurred");
  }, [showMenu]);

  return (
    <nav className="navbar">
            <div className="nav1">
                <div className="navbar-logo">
                    <img src="/images/TechSpot.png" alt="TechSpot" />
                    <a  href="/" style={{ fontFamily: "'Protest Revolution', sans-serif" }}>TechSpot</a>
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
                        
                        <div
                            className="logo-container"
                            onMouseEnter={() => setShowMenu(true)} // Affiche le menu au survol
                            onMouseLeave={() => setShowMenu(false)} // Cache le menu au départ
                        >
                            <img src="/images/person.png" alt="Logo" style={{ width: "25px", height: "25px" }} />
                            {showMenu && (

                            <div
                                className="hover-menu"
                                onMouseEnter={() => setShowMenu(true)} // Empêche la fermeture si la souris est sur le menu
                                onMouseLeave={() => setShowMenu(false)} // Cache le menu lorsque la souris quitte le menu
                            >
                                <button onClick={() => window.location.href = "/Connection"}>Log In</button>
                                <button onClick={() => window.location.href = "/Inscription"}>Sign In</button>
                            </div>
                            )}
                        </div>
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
