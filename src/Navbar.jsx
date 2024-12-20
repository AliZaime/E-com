import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // État pour gérer l'affichage du chargement

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleLogoutWithDelay = () => {
    setIsLoading(true); // Active le chargement
    setTimeout(() => {
      handleLogout(); // Appelle la fonction de déconnexion
      setIsLoading(false); // Désactive le chargement
    }, 2000); // Attente de 2 secondes
  };

  return (
    <>
      {/* Overlay de chargement */}
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}

      <nav className="navbar">
        <div className="part1">
          {/* Logo */}
          <div className="logo">
            <Link to={"/"}>TechSpot</Link>
          </div>

          {/* Barre de recherche */}
          <div className="search-bar">
            <input type="text" placeholder="Que cherchez-vous ?" />
            <button type="button">🔍</button>
          </div>

          {/* Icônes */}
          <div className="icons">
            {/* Panier */}
            <div
              className={`icon ${activeDropdown === "cart" ? "active" : ""}`}
              onClick={() => toggleDropdown("cart")}
            >
              🛒
              {activeDropdown === "cart" && (
                <div className="dropdown-menu">
                  {
                    isLoggedIn ? 
                    (
                      <>
                        <p>Votre panier est vide</p>
                        <Link to={"/panier"}>Voir le panier</Link>
                      </>
                    )
                    :
                    (
                      <>
                        <a href="/connection">Log in</a>
                      </>
                    )
                  }
                  
                </div>
              )}
            </div>

            {/* Profil ou Connexion */}
            <div className={`icon ${activeDropdown === "login" ? "active" : ""}`} onClick={() => toggleDropdown("login")}>
              👤
              {activeDropdown === "login" && (
                <div className="dropdown-menu login-menu">
                  {!isLoggedIn ? (
                    <>
                      <a href="/connection">Log in</a>
                      <a href="/inscription">Sign in</a>
                    </>
                  ) : (
                    <>
                      <a href="/profile">Profil</a>
                      <Link onClick={handleLogoutWithDelay} to="#">
                        Log out
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <svg
              onClick={toggleSidebar}
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </div>
        </div>

        <div className="part2">
          {/* Liens de navigation */}
          <ul className={`nav-links ${isSidebarOpen ? "sidebar-open" : ""}`}>
            <li>
              <Link className="link" to={"/Smartphones"} onClick={closeSidebar}>
                Smartphones
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to={"/OrdinateursPortable"}
                onClick={closeSidebar}
              >
                Ordinateurs portables
              </Link>
            </li>
            <li>
              <Link className="link" to={"/Tablettes"} onClick={closeSidebar}>
                Tablettes
              </Link>
            </li>
            <li>
              <Link className="link" to={"/Consoles"} onClick={closeSidebar}>
                Consoles
              </Link>
            </li>
            <li>
              <Link className="link" to={"/Montres"} onClick={closeSidebar}>
                Montres connectées
              </Link>
            </li>
            <li>
              <Link className="link" to={"/Audio"} onClick={closeSidebar}>
                Audio
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to={"/Electromenagers"}
                onClick={closeSidebar}
              >
                Appareils électroménagers
              </Link>
            </li>
            <li>
              <Link className="link" to={"/Autres"} onClick={closeSidebar}>
                Autres
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
