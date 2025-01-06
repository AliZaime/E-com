import React, { useState } from 'react';
import './fdp.css'; // Assurez-vous d'inclure le CSS dans le même dossier

const PaymentForm = () => {
    const [reference, setReference] = useState('');
    const [montant, setMontant] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [infos, setInfos] = useState('');
    const [provision, setProvision] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState('');
    const [cvc, setCvc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Traitez la soumission du formulaire ici
        alert('Formulaire soumis!');
    };

    return (
        <div className="payment-container">
            <h2 style={{color:"white"}}>Paiement en ligne</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="reference" style={{color:"white"}}>Référence du paiement</label>
                        <input 
                            type="text" 
                            id="reference" 
                            value={reference} 
                            onChange={(e) => setReference(e.target.value)} 
                            placeholder="Référence du paiement" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="montant" style={{color:"white"}}>Montant du paiement</label>
                        <input 
                            type="number" 
                            id="montant" 
                            value={montant} 
                            onChange={(e) => setMontant(e.target.value)} 
                            placeholder="0" 
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="nom" style={{color:"white"}}>Nom</label>
                        <input 
                            type="text" 
                            id="nom" 
                            value={nom} 
                            onChange={(e) => setNom(e.target.value)} 
                            placeholder="Nom" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom" style={{color:"white"}}>Prénom</label>
                        <input 
                            type="text" 
                            id="prenom" 
                            value={prenom} 
                            onChange={(e) => setPrenom(e.target.value)} 
                            placeholder="Prénom" 
                        />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="email" style={{color:"white"}}>E-mail</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="E-mail" 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telephone" style={{color:"white"}}>Téléphone</label>
                        <input 
                            type="tel" 
                            id="telephone" 
                            value={telephone} 
                            onChange={(e) => setTelephone(e.target.value)} 
                            placeholder="Téléphone" 
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="infos" style={{color:"white"}}>Informations complémentaires</label>
                    <textarea 
                        id="infos" 
                        rows="3" 
                        value={infos} 
                        onChange={(e) => setInfos(e.target.value)} 
                        placeholder="Informations complémentaires"
                    />
                </div>

                <div className="checkbox">
                    <input 
                        type="checkbox" 
                        id="provision" 
                        checked={provision} 
                        onChange={() => setProvision(!provision)} 
                    />
                    <label htmlFor="provision" style={{color:"white"}}>Besoin de verser une <strong>provision</strong> ?</label>
                    <p style={{color:"white"}}>Vous pouvez le faire en ligne de façon <strong>sécurisée, simple et rapide</strong>.</p>
                </div>

                <div className="payment-section">
                    <label htmlFor="card" style={{color:"white"}}>Carte de paiement</label>
                    <div className="card-input">
                        <input 
                            type="text" 
                            id="card" 
                            value={cardNumber} 
                            onChange={(e) => setCardNumber(e.target.value)} 
                            placeholder="Card number" 
                        />
                        <input 
                            type="text" 
                            id="expiry" 
                            value={expiry} 
                            onChange={(e) => setExpiry(e.target.value)} 
                            placeholder="MM / YY" 
                        />
                        <input 
                            type="text" 
                            id="cvc" 
                            value={cvc} 
                            onChange={(e) => setCvc(e.target.value)} 
                            placeholder="CVC" 
                        />
                    </div>
                </div>

                <div className="card-logos">
                    <img src="/images/WhatsApp Image 2024-12-18 à 11.10.28_3ea37c76.jpg" alt="Visa" />
                    <img src="/images/WhatsApp Image 2024-12-18 à 11.10.28_e746f9ed.jpg" alt="American Express" />
                    <img src="/images/WhatsApp Image 2024-12-18 à 11.10.28_902bb570.jpg" alt="Maestro" />
                    <img src="/images/WhatsApp Image 2024-12-18 à 11.10.29_8b20523a.jpg" alt="MasterCard" />
                    <img src="/images/WhatsApp Image 2024-12-18 à 11.10.28_902bb570.jpg" alt="Paiement Sécurisé" />
                </div>

                <button type="submit" className="btn-valider">VALIDER</button>
            </form>
        </div>
    );
}

export default PaymentForm;
