import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Chemin du fichier Navbar.jsx
import './App.css'; // Ajoutez un fichier CSS global si nécessaire
import Smartphones from './Smartphones';
import IPhone from './iPhone';
import "./Smartphones.css"
import Footer from './Footer'; // Chemin du fichier Footer.jsx
import Inscription from './Inscription'; // Chemin du fichier Inscription.jsx
import Connection from './Connection';
import CustomerTestimonials from "./CustomerTestimonials"
import CompanyHistory from "./CompanyHistory"
import Home from "./Home"
import OurMission from "./OurMission"
import AboutUs from "./AboutUS"

function App(){
    return(
        <Router>
        <div className="App">
        <Navbar />
        
        <main>
            <Home/>
            <Routes>
                <Route path="/Smartphones" element={<Smartphones />} />
                <Route path="/Inscription" element={<Inscription />} />
                <Route path="/Connection" element={<Connection />} />
                <Route path="/OurMission" element={< OurMission />} />
                <Route path="/CompanyHistory" element={< CompanyHistory />} />
                <Route path="/CustomerTestimonials" element={< CustomerTestimonials />} />
                <Route path="/AboutUs" element={< AboutUs />} />
                <Route path="/iPhone" element={< IPhone />} />
            </Routes>
        </main>
        
        <Footer />
        </div>
        </Router>
    );
}

export default App;
