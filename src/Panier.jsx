import React, { useState, useEffect } from 'react';
import './Painer.css';
import { Link } from "react-router-dom";

const Panier = () => {
    const [infoprod, setInfoprod] = useState(() => {
        const formData = JSON.parse(localStorage.getItem("formData")) || [];
        const loggedInEmail = localStorage.getItem("isLoggedEmail"); // Supposez que l'email de l'utilisateur connecté est stocké ici
        const currentUser = formData.find(user => user.email === loggedInEmail);
    
        // Si un utilisateur est trouvé, retourner son panier, sinon un tableau vide
        return currentUser ? currentUser.cart || [] : [];
    });

    const handleDelete = (index) => {
        // Récupérer les données du localStorage
        const formData = JSON.parse(localStorage.getItem("formData")) || [];
        const loggedInEmail = localStorage.getItem("isLoggedEmail");
    
        // Trouver l'utilisateur connecté
        const currentUser = formData.find(user => user.email === loggedInEmail);
    
        if (currentUser) {
            // Mise à jour du panier de l'utilisateur connecté
            currentUser.cart = currentUser.cart.filter((_, i) => i !== index);
    
            // Mettre à jour formData dans le localStorage
            localStorage.setItem("formData", JSON.stringify(formData));
    
            // Mise à jour de infoprod uniquement avec le panier mis à jour de l'utilisateur connecté
            setInfoprod(currentUser.cart);
        }
    };
    

    const calcultotalprice = () => {
        let total = 0;
        infoprod.forEach(element => {
            const currentPrice = isNaN(parseFloat(element.currentPrice)) ? 0 : parseFloat(element.currentPrice);
            const quantite1 = isNaN(parseFloat(element.quantite)) ? 1 : parseFloat(element.quantite); // Défaut à 1 si pas de quantité valide
            total += currentPrice * quantite1;
        });
        return total.toFixed(2);
    };

    const adddays = (days) => {
        const date = new Date();
        date.setDate(date.getDate() + days);
        return date.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short" // Mois abrégé
        });
    };

    const handleQuantityChange = (index, value) => {
        setInfoprod((listprod) =>
            listprod.map((item, i) =>
                i === index ? { ...item, quantite: parseInt(value, 10) } : item
            )
        );
    };

    return (
        <>
            <div className="maindiv">
                <div className='detailpanier'>
                    <h1 className='title'>Détail de votre Panier</h1>
                    {
                        infoprod.map((item, index) => {
                            const currentPrice = isNaN(parseFloat(item.currentPrice)) ? 0 : parseFloat(item.currentPrice);
                            const oldPrice = isNaN(parseFloat(item.oldPrice)) ? 0 : parseFloat(item.oldPrice);
                            const quantite1 = isNaN(parseFloat(item.quantite)) ? 1 : parseFloat(item.quantite); // Défaut à 1 si pas de quantité valide

                            return (
                                <div className='itemshop_card' key={index}>
                                    <div className='shopitem_image'>
                                        <img src={item.image} alt="image" />
                                    </div>
                                    <div className='shopitem_info'>
                                        <div className='info'>
                                            <h3>{item.name}</h3>
                                            <p>Condition : {item.condition}</p>
                                            {item.vendu_avec !== "" && (<p>Vendu avec : {item.vendu_avec}</p>)}
                                            <a href="#">Garantie commerciale de 12 mois</a>
                                            <h3>{currentPrice.toFixed(2)}€</h3>
                                            {oldPrice !== 0 && (
                                                <div className='economie_prixanc'>
                                                    <p>Économisez {(-(currentPrice - oldPrice)).toFixed(2)}€</p>
                                                    <p>{oldPrice.toFixed(2)}€</p>
                                                </div>
                                            )}
                                            <h5>Livraison entre {adddays(5)} et {adddays(7)} - Offerte</h5>
                                        </div>
                                        <div className='quantite_delet'>
                                            <div className='intern'>
                                                <select value={quantite1} onChange={(e) => handleQuantityChange(index, e.target.value)}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10+">10+</option>
                                                </select>
                                                <button onClick={() => handleDelete(index)}>Supprimer</button>
                                            </div>
                                            <p>En Stock</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }

                    <div className='avantage_achat'>
                        <h3>Vos avantages à chaque achat :</h3>
                        <div className='avantage_Ligne'>
                            <div className="desc">
                                <i className="fa-solid fa-shield-halved"></i>
                                <p>Garantie commerciale de 12 mois</p>
                            </div>
                            <div className="desc">
                                <i className="fa-solid fa-truck"></i>
                                <p>Frais de livraison standards offerts</p>
                            </div>
                        </div>
                        <div className='avantage_Ligne'>
                            <div className="desc">
                                <i className="fa-solid fa-circle-dollar-to-slot"></i>
                                <p>Retour gratuit jusqu'au 31 janvier</p>
                            </div>
                            <div className="desc">
                                <i className="fa-solid fa-headset"></i>
                                <p>Service client aux petits oignons</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='recaptulatif'>
                    <h1>Récapitulatif</h1>
                    <div className='total'>
                        {
                            infoprod.map((item, index) => {
                                const currentPrice = isNaN(parseFloat(item.currentPrice)) ? 0 : parseFloat(item.currentPrice);
                                const quantite1 = isNaN(parseFloat(item.quantite)) ? 1 : parseFloat(item.quantite); // Défaut à 1 si pas de quantité valide
                    
                                return (
                                    <div className='recapprod_card' key={index}>
                                        <div className='recap_image_holder'>
                                            <img src={item.image} alt="" />
                                        </div>
                                        <div className='detail'>
                                            <div className='name_price'>
                                                <p>{item.name}</p>
                                                <p className='price_item'>{(currentPrice * quantite1).toFixed(2)}€</p>
                                            </div>
                                            <div className='livraison'>
                                                <p>Livraison</p>
                                                <p>offerte</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                        <div className='line'></div>
                        <div className='total_price'>
                            <p>Sous-Total</p>
                            <p>{calcultotalprice()}€</p>
                        </div>
                        <div className='frai_service'>
                            <p>Frais de service TechSpot</p>
                            <p>5€</p>
                        </div>
                        <div className='line'></div>
                        <div className='finalprice'>
                            <p>Total TTC</p>
                            <p>{calcultotalprice() + 5}€</p>
                        </div>
                        <Link to={"/Paiment"} className='continue_payment'>Continuer</Link>
                        <p className='payment_securiser'>
                            <i className="fa-solid fa-lock"></i>
                            paiement sécurisé
                        </p>
                        <p className='notice_payment'>
                            <p>En passant commande, vous acceptez nos Conditions générales d'utilisation, nos Conditions générales de vente et notre politique de protection des données</p>
                        </p>
                        <img src="/images/payment_methodes.png" alt="" className='payment_methods' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Panier;
