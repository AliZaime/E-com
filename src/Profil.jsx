import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Profil.css"

const Profil = () => {
  const [clientData, setClientData] = useState(null);

  // Charger les données du client depuis le localStorage
  useEffect(() => {
    const storedClientData = JSON.parse(localStorage.getItem('formData'));
    const loggedInEmail = localStorage.getItem('isLoggedEmail'); // Utilisez 'isLoggedEmail' pour récupérer l'email
    if (storedClientData && loggedInEmail) {
      const client = storedClientData.find(client => client.email === loggedInEmail);
      if (client) {
        setClientData(client);
      }
    }
  }, []);

  const handleLogoutWithDelay = () => {
    setTimeout(() => {
      localStorage.removeItem('isLoggedEmail'); // Retirer l'email de l'utilisateur connecté du localStorage
      localStorage.setItem('isLogged','deconnecter')
      window.location.href = '/'; // Rediriger vers la page d'accueil
    }, 1000);
  };

  if (!clientData) {
    return <div>Chargement...</div>; // Afficher un message pendant que les données sont en cours de chargement
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src="/membres_pic/hamza_pic.jpg" alt="Avatar" className="profile-avatar" />
        <div className="profile-info">
          <h2>{clientData.firstname} {clientData.lastname}</h2>
          <p>Email: {clientData.email}</p>
          <p>Téléphone: {clientData.phone}</p>
          <p>Adresse: {clientData.adresse}</p>
          <p>Membre depuis: {clientData.memberSince}</p>
        </div>
      </div>

      <div className="purchase-history">
        <h3>Historique des achats</h3>
        <ul>
            {clientData.cart.map((item) => (
            <li key={item.id}>
                <div>
                <strong>Commande: </strong>
                <p>ID : {item.id}</p>
                <p>Article : {item.name}</p>
                <p>Price : {item.currentPrice.toFixed(2)} €</p>
                </div>
            </li>
            ))}
        </ul>
        </div>


      <div className="logout">
        <Link onClick={handleLogoutWithDelay} to={"/"}>
          Log out
        </Link>
      </div>
    </div>
  );
};

export default Profil;
