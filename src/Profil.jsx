import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Profil.css"

const Profil = () => {
  const [clientData, setClientData] = useState(null);

  // Charger les données du client depuis le localStorage
  useEffect(() => {
    const storedClientData = JSON.parse(localStorage.getItem('clientData'));
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
        <img src={clientData.avatar} alt="Avatar" className="profile-avatar" />
        <div className="profile-info">
          <h2>{clientData.name}</h2>
          <p>Email: {clientData.email}</p>
          <p>Téléphone: {clientData.phone}</p>
          <p>Adresse: {clientData.address}</p>
          <p>Membre depuis: {clientData.memberSince}</p>
        </div>
      </div>

      <div className="purchase-history">
        <h3>Historique des achats</h3>
        <ul>
          {clientData.purchaseHistory.map((purchase, index) => (
            <li key={index}>
              <div>
                <strong>Commande: {purchase.orderId}</strong>
                <p>Date: {purchase.date}</p>
                <p>Articles: {purchase.items}</p>
                <p>Total: {purchase.total}</p>
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
