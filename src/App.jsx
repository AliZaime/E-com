import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Chemin du fichier Navbar.jsx
import './App.css'; // Ajoutez un fichier CSS global si nécessaire
import Smartphones from './Smartphones';
import "./Smartphones.css"

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <main>
        <Routes>
        <Route path="/Smartphones" element={<Smartphones />} />
        </Routes>
      </main>
      
    </div>
    </Router>
    
  );
};

export default App;
