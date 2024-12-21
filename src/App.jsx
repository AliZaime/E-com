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
import FAQ from './FAQ'; 
import ReturnPolicy from './ReturnPolicy';
import ContactUs from './ContactUs';
import LostPassword from './LostPassword';
import Panier from './Panier';
import PaymentForm from './Paymentform';
import Samsung from './Samsung';
import GooglePixel from './GooglePixel';
import ProductPage from './Product';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedStatus = localStorage.getItem("isLogged");
    return storedStatus === "connecter"; // Retourne true si "connecter", sinon false
});

//fontion qui permet d'ajouter l'élément choisie dans le panier


  // Fonction pour gérer la connexion
  const handleLogin = () => {
    setIsLoggedIn(true); // L'utilisateur se connecte
  };

  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    setIsLoggedIn(false); // L'utilisateur se déconnecte
    localStorage.setItem("isLogged","deconnecter")
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
            <Route path="/FAQ" element={< FAQ />} />
            <Route path="/ReturnPolicy" element={< ReturnPolicy />} />
            <Route path="/ContactUs" element={< ContactUs />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/Paiment" element={<PaymentForm />} />
            <Route path="/smartphones/Samsung" element={<Samsung />} />
            <Route path="/smartphones/GooglePixel" element={<GooglePixel />} />
            <Route path="/Prd" element={<ProductPage />} />
          </Routes>
        </main>
        {/*tst*/}
        
        {/* Footer fixe */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
