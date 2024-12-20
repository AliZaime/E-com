import React, { useState } from 'react';
import './Painer.css'

const Panier = () => {
    const [infoprod, setInfoprod] = useState([
        { nom: "iPhone 8 64 Go - Gris Sidéral - Débloqué", image: "/images/iphoneSE_1.png", condition: "État correct", vendu_avec: "Câble de chargement", prix_anc: 299.00, prix_nouv: 101.00,quantite:1 },
        { nom: "Apple AirPods Pro 1e génération (2021) - Boîtier de charge MagSafe", image: "/images/apple_airpods.png", condition: "Parfait état", vendu_avec: "", prix_anc: 0, prix_nouv: 150.65,quantite:1 },
        { nom: "Prise Murale (USB-C + Lightning) 30W - Anker", image: "/images/prise_mural.png", condition: "", vendu_avec: "", prix_anc: 0, prix_nouv: 17.98,quantite:1 }
    ]);

    const handleDelete = (index) => {
        setInfoprod((prev) => prev.filter((_, i) => i !== index));
    };

    function calcultotalprice(){
        let s=0
        infoprod.forEach(element => {
            s += element.prix_nouv * element.quantite;
        });
        return s;
    }

    function adddays(days){
        const date = new Date();
        date.setDate(date.getDate()+days)
        return date.toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "short", // Mois abrégé
          });
    }

    const handleQuantityChange = (index, value) => {
        setInfoprod((listprod) =>
          listprod.map((item, i) =>
            i === index ? { ...item, quantite: parseInt(value, 10) } : item
          )
        );
        console.log(infoprod[index].quantite)
      };

    return(<>
        <div className="maindiv">
            <div className='detailpanier'>
                <h1 className='title'>Détail de votre Panier</h1>
                {
                    infoprod.map((item, index) => {
                        return(
                            <div className='itemshop_card' key={index}>
                                <div className='shopitem_image'>
                                    <img src={item.image} alt="image" />
                                </div>
                                <div className='shopitem_info'>
                                    <div className='info'>
                                        <h3>{item.nom}</h3>
                                        <p>Condition :{item.condition}</p>
                                        {item.vendu_avec !== "" && (<p>Vendu avec : {item.vendu_avec}</p>)}
                                        <a href="#">Garantie commerciale de 12 mois</a>
                                        <h3>{item.prix_nouv.toFixed(2)}€</h3>
                                        {item.prix_anc !== 0 && (<div className='economie_prixanc'>
                                            <p>Economisez {(-(item.prix_nouv - item.prix_anc)).toFixed(2)}€</p>
                                            <p>{item.prix_anc.toFixed(2)} €</p>
                                        </div>)}
                                        <h5>Livraison entre {adddays(5)} et {adddays(7)} - Offerte</h5>
                                    </div>
                                    <div className='quantite_delet'>
                                        <div className='intern'>    
                                            <select value={item.quantite} onChange={(e) => handleQuantityChange(index, e.target.value)}>
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
                        )
                    })
                }

                <div className='avantage_achat'>
                    <h3>Vos avantages à chaque achat :</h3>
                    <div className='avantage_Ligne'>
                        <div className="desc">
                            <i class="fa-solid fa-shield-halved"></i>
                            <p>Garantie commerciale de 12 mois</p>
                        </div>
                        <div className="desc">
                            <i class="fa-solid fa-truck"></i>
                            <p>Frais de livraison standards offerts</p>
                        </div>
                    </div>
                    <div className='avantage_Ligne'>
                        <div className="desc">
                            <i class="fa-solid fa-circle-dollar-to-slot"></i>
                            <p>Retour gratuit jusqu'au 31 janvier</p>
                        </div>
                        <div className="desc">
                            <i class="fa-solid fa-headset"></i>
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
                            return(
                                <div className='recapprod_card' key={index}>
                                    <div className='recap_image_holder'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='detail'>
                                        <div className='name_price'>
                                            <p>{item.nom}</p>
                                            <p className='price_item'>{(item.prix_nouv * item.quantite).toFixed(2)}€</p>
                                        </div>
                                        <div className='livraison'>
                                            <p>Livraison</p>
                                            <p>offerts</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='line'></div>
                    <div className='total_price'>
                        <p>Sous-Total</p>
                        <p>{calcultotalprice()}€</p>
                    </div>
                    <div className='frai_service'>
                        <p> Frais de service TechSpot</p>
                        <p>5€</p>
                    </div>

                    <div className='line'></div>

                    <div className='finalprice'>
                        <p> Total TTC</p>
                        <p>{calcultotalprice() + 5}€</p>
                    </div>

                    <button className='continue_payment'>Continuer</button>
                    <p className='payment_securiser'>
                        <i class="fa-solid fa-lock"></i>
                        payment sécuriser
                    </p>

                    <p className='notice_payment'>
                        <p>En passant commande vous acceptez nos Conditions générales d'utilisation, nos Conditions générales de vente et notre politique de protection des données</p>
                    </p>

                    <img src="/images/payment_methodes.png" alt="" className='payment_methods'/>
                </div>
            </div>
        </div>

    </>)
}

export default Panier;