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
import Profil from './Profil'
import ProductPage from './Product';
import AllProducts from './AllProducts';
import Laptops from './laptops';
import Hppage from './Hppage';
import Mac from './Mac';
import Dell from './Dell';
import Tablettes from './Tablettes';
import Ipad from './Ipad';
import Consoles from './Consoles';
import PS from './PS';
//pour vercel push1
//pour vercel push2

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
    localStorage.setItem("isLoggedEmail","");
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
            <Route path="/Profil" element={<Profil />} />
            <Route path="/Paiment" element={<PaymentForm />} />
            <Route path="/smartphones/Samsung" element={<Samsung />} />
            <Route path="/smartphones/GooglePixel" element={<GooglePixel />} />
            <Route path="/prd/product/:name" element={<ProductPage />} />
            <Route path="/smartphones/AllProducts" element={<AllProducts />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/laptops/Hppage" element={<Hppage />} />
            <Route path="/laptops/Mac" element={<Mac />} />
            <Route path="/laptops/Dell" element={<Dell />} />
            <Route path="/Tablettes" element={<Tablettes />} />
            <Route path="/Tablettes/Ipad" element={<Ipad />} />
            <Route path="/Consoles" element={<Consoles />} />
            <Route path="/Consoles/PS" element={<PS />} />
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
