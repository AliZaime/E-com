import React from 'react';
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

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar fixe */}
        <Navbar />
        
        {/* Contenu principal qui change en fonction de la route */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/smartphones" element={<Smartphones />} />
            <Route path="/smartphones/iphone" element={<IPhone />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connection" element={<Connection />} />
            <Route path="/ourmission" element={<OurMission />} />
            <Route path="/companyhistory" element={<CompanyHistory />} />
            <Route path="/customertestimonials" element={<CustomerTestimonials />} />
            <Route path="/AboutUs" element={< AboutUs />} />
          </Routes>
        </main>
        
        {/* Footer fixe */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
