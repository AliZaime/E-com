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
          <Link to="/" style={{ fontFamily: "'Protest Revolution', sans-serif" }}>TechSpot</Link>
        </div>
        <div className="navbar-links">
          <Link to="/revendre">Revendre</Link>
          <Link to="/notre-pacte-qualite">Notre Pacte Qualité</Link>
          <Link to="/backstories">BackStories</Link>
          <Link to="/aide">Aide</Link>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Que cherchez-vous ?" />
          <button>🔍</button>
        </div>
        <div className="navbar-actions">
          <img src="/images/morocco.png" alt="MAR" style={{ width: "40px", height: "25px" }} />
          <div
            id="account"
            className="logo-container"
            onMouseEnter={() => setShowMenu(true)}
          >
            <img src="/images/person.png" alt="Logo" style={{ width: "25px", height: "25px" }} />
            {showMenu && (
              <div
                className="hover-menu"
                onMouseEnter={() => setShowMenu(true)}
                onMouseLeave={() => setShowMenu(false)}
              >
                <button onClick={() => (window.location.href = "/Connection")}>Log In</button>
                <button onClick={() => (window.location.href = "/Inscription")}>Sign In</button>
              </div>
            )}
          </div>
          <Link to="/">
            <img
              src="/images/shopping_cart.png"
              alt="cart"
              style={{ width: "25px", height: "25px" }}
            />
          </Link>
        </div>
      </div>
      <div className="nav2">
        <div className="navbar-categories">
          <Link to="/black-friday" className="highlight">Black Friday</Link>
          <Link to="/smartphones">Smartphones</Link>
          <Link to="/ordinateurs-portables">Ordinateurs portables</Link>
          <Link to="/tablettes">Tablettes</Link>
          <Link to="/consoles">Consoles</Link>
          <Link to="/montres-connectees">Montres connectées</Link>
          <Link to="/audio">Audio</Link>
          <Link to="/appareils-electromenagers">Appareils électroménagers</Link>
          <Link to="/autres">Autres</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
