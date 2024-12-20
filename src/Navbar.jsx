import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null); // Si le dropdown est déjà actif, on le ferme
    } else {
      setActiveDropdown(dropdown); // Sinon, on l'active
    }
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="part1">
        <div className="logo">
          <Link to={"/"}>TechSpot</Link>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Que cherchez-vous ?" />
          <button type="button">🔍</button>
        </div>

        <div className="icons">
          {/* Cart Dropdown */}
          <div
            className={`icon ${activeDropdown === "cart" ? "active" : ""}`}
            onClick={() => toggleDropdown("cart")}
          >
            🛒
            {activeDropdown === "cart" && (
              <div className="dropdown-menu">
                <p>Votre panier est vide</p>
                <Link to={"/Panier"} >Voir Panier</Link>
              </div>
            )}
          </div>

          {/* Login Dropdown */}
          <div
            className={`icon ${activeDropdown === "login" ? "active" : ""}`}
            onClick={() => toggleDropdown("login")}
          >
            👤
            {activeDropdown === "login" && (
              <div className="dropdown-menu login-menu">
                <a href="/connection">Log in</a>
                <a href="/Inscription">Sign in</a>
              </div>
            )}
          </div>
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
  );
};

export default Navbar;
