import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Smartphones from './Smartphones';
import IPhone from './iPhone';
import Inscription from './Inscription';
import Connection from './Connection';
import CustomerTestimonials from './CustomerTestimonials';
import CompanyHistory from './CompanyHistory';
import Home from './Home';
import OurMission from './OurMission';
import AboutUs from "./AboutUS"
import './App.css';
import LostPassword from './LostPassword';
import Panier from './Panier';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Fonction pour gérer la connexion
  const handleLogin = () => {
    setIsLoggedIn(true); // L'utilisateur se connecte
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    setIsLoggedIn(false); // L'utilisateur se déconnecte
  };

  return (
    <Router>
      <div className="App">
        {/* Passer l'état de connexion et les fonctions à Navbar */}
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        
        {/* Contenu principal qui change en fonction de la route */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smartphones" element={<Smartphones />} />
            <Route path="/smartphones/iphone" element={<IPhone />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connection" element={<Connection handleLogin={handleLogin} />} />
            <Route path="/LostPassword" element={<LostPassword />} />
            <Route path="/ourmission" element={<OurMission />} />
            <Route path="/companyhistory" element={<CompanyHistory />} />
            <Route path="/customertestimonials" element={<CustomerTestimonials />} />
            <Route path="/AboutUs" element={< AboutUs />} />
            <Route path="/panier" element={<Panier />} />
          </Routes>
        </main>
        
        {/* Footer fixe */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
