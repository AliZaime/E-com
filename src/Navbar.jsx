import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ isLoggedIn, handleLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // État pour gérer l'affichage du chargement

  const scrollToSection = () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

const formData = JSON.parse(localStorage.getItem("formData")) || [];
const loggedInEmail = localStorage.getItem("isLoggedEmail"); // Email de l'utilisateur connecté

// Trouver l'utilisateur connecté
const currentUser = formData.find(user => user.email === loggedInEmail);

// Vérifier si le panier de l'utilisateur connecté est vide
const iscartempty = currentUser ? (currentUser.cart || []).length === 0 : true;


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
                {isLoggedIn ? (
                    iscartempty ? (
                      <>
                          <p>Votre panier est vide</p>
                          <Link
                              to="/panier" onClick={scrollToSection}
                              style={{
                                  pointerEvents: "none",
                                  cursor: "not-allowed",
                                  color: "gray",
                                  textDecoration: "none",
                                }}
                            >
                              Voir le panier
                            </Link>
                      </>
                    ) : (
                        <>
                            <p>Votre panier contient {currentUser.cart.length} article(s)</p>
                            <Link
                                to="/panier"
                                onClick={scrollToSection}
                                style={{
                                    pointerEvents: "auto",
                                    cursor: "pointer",
                                    textDecoration: "underline",
                                }}
                            >
                                Voir le panier
                            </Link>
                        </>
                    )
                ) : (
                    <>
                        <a href="/connection" onClick={scrollToSection}>Log in</a>
                    </>
                )}
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
                      <a href="/connection" onClick={scrollToSection}>Log in</a>
                      <a href="/inscription" onClick={scrollToSection}>Sign in</a>
                    </>
                  ) : (
                    <>
                      <Link to={"/profil"} onClick={scrollToSection}>Profil</Link>
                      <Link onClick={handleLogoutWithDelay} to={"/"} >
                        Log out
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
            <svg onClick={toggleSidebar} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
          </div>
        </div>

        <div className="part2">
          {/* Liens de navigation */}
          <ul className={`nav-links ${isSidebarOpen ? "sidebar-open" : ""}`}>
            <li>
              <Link className="link" to={"/Smartphones"} 
                  onClick={() => {
                    closeSidebar();
                    scrollToSection();
                  }}>
                Smartphones
              </Link>
            </li>
            <li>
              <Link
                className="link"
                to={"/laptops"}
                onClick={() => {
                  closeSidebar();
                  scrollToSection();
                }}>
                Ordinateurs portables
              </Link>
            </li>
            <li>
              <Link className="link" to={"/Tablettes"} onClick={() => {
                    closeSidebar();
                    scrollToSection();
                  }}>
                Tablettes
              </Link>
            </li>
            <li>
              <Link className="link" to={"/Consoles"} onClick={() => {
                    closeSidebar();
                    scrollToSection();
                  }}>
                Consoles
              </Link>
            </li>
            <li>
              <Link className="link" to={"/Montres"} onClick={() => {
                    closeSidebar();
                    scrollToSection();
                  }}>
                Montres connectées
              </Link>
            </li>
          </ul>
        </div>

      </nav>
    </>
  );
};

export default Navbar;
