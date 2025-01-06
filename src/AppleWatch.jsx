/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react";
import './Ipad.css'

function AppleWatch() {

    const commentaire = [
        {
            id: 1,
            client: 'Marie L.',
            iconColor: '#94c2f5',
            dateAchat: '10 septembre 2024',
            dateCommentaire: '20 septembre 2024',
            PaysCommentaire: 'France',
            rating: '5/5',
            commentaire: "L'Apple Watch Series 9 est juste incroyable ! L'écran est lumineux et les fonctionnalités santé sont très utiles. La batterie tient facilement toute la journée.",
            typeAppleWatch: 'Apple Watch Series 9',
            couleur: 'Argent',
            EtatAppleWatch: 'Neuve'
        },
        {
            id: 2,
            client: 'Julien D.',
            iconColor: '#f5d94c',
            dateAchat: '5 août 2024',
            dateCommentaire: '15 août 2024',
            PaysCommentaire: 'France',
            rating: '4.7/5',
            commentaire: "La Series 8 est parfaite pour suivre mes séances de sport. L'autonomie pourrait être un peu meilleure, mais sinon rien à redire.",
            typeAppleWatch: 'Apple Watch Series 8',
            couleur: 'Noir',
            EtatAppleWatch: 'Reconditionnée'
        },
        {
            id: 3,
            client: 'Sophie M.',
            iconColor: '#e5e5e5',
            dateAchat: '20 juin 2024',
            dateCommentaire: '30 juin 2024',
            PaysCommentaire: 'France',
            rating: '4.5/5',
            commentaire: "Très satisfaite de mon achat, la SE 2e génération offre tout ce dont j'ai besoin à un prix abordable. Le design est magnifique.",
            typeAppleWatch: 'Apple Watch SE (2e génération)',
            couleur: 'Or',
            EtatAppleWatch: 'Neuve'
        },
    ];
    
    
    
    const products = [
        { id: 1, name: 'Apple Watch Series 9', message: "nouveau modèle", image: '/watches_pic/appleS9.png', color: ['grey', 'black', 'gold'], rating: '5/5', reviews: 1500, currentPrice: 429.99, oldPrice: 529.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique" },
        { id: 2, name: 'Apple Watch Series 8', message: "excellent rapport qualité-prix", image: '/watches_pic/appleS8.png', color: ['grey', 'black', 'red'], rating: '4.7/5', reviews: 1250, currentPrice: 379.99, oldPrice: 479.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 3, name: 'Apple Watch Ultra', message: "robuste et puissante", image: '/watches_pic/appleUltra.png', color: ['grey', 'black'], rating: '4.9/5', reviews: 950, currentPrice: 799.99, oldPrice: 899.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique et bracelet sport" },
        { id: 4, name: 'Apple Watch SE (2e gén)', message: "meilleur choix économique", image: '/watches_pic/appleSE2.png', color: ['grey', 'gold', 'black'], rating: '4.5/5', reviews: 1050, currentPrice: 279.99, oldPrice: 329.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique" },
        { id: 5, name: 'Apple Watch Series 7', message: "ancien modèle toujours efficace", image: '/watches_pic/appleS7.png', color: ['grey', 'black', 'green'], rating: '4.6/5', reviews: 1100, currentPrice: 329.99, oldPrice: 429.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 6, name: 'Apple Watch Series 6', message: "fonctionnalités complètes", image: '/watches_pic/appleS6.png', color: ['grey', 'red', 'blue'], rating: '4.5/5', reviews: 950, currentPrice: 279.99, oldPrice: 379.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 7, name: 'Apple Watch Nike Series 8', message: "édition spéciale Nike", image: '/watches_pic/appleNike.png', color: ['black', 'grey'], rating: '4.8/5', reviews: 1150, currentPrice: 399.99, oldPrice: 499.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique et bracelet Nike" },
        { id: 8, name: 'Apple Watch SE (1e gén)', message: "alternative économique", image: '/watches_pic/appleSE1.png', color: ['grey', 'gold'], rating: '4.4/5', reviews: 850, currentPrice: 229.99, oldPrice: 329.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 9, name: 'Apple Watch Series 5', message: "performances solides", image: '/watches_pic/appleS5.png', color: ['grey', 'black'], rating: '4.3/5', reviews: 800, currentPrice: 229.99, oldPrice: 329.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 10, name: 'Apple Watch Hermès Edition', message: "édition premium", image: '/watches_pic/appleHermes.png', color: ['black', 'gold'], rating: '4.9/5', reviews: 600, currentPrice: 1249.99, oldPrice: 1499.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique et bracelet Hermès" },
        { id: 11, name: 'Apple Watch Series 9 GPS', message: "connectivité complète", image: '/watches_pic/appleS9GPS.png', color: ['gold', 'black'], rating: '5/5', reviews: 1200, currentPrice: 479.99, oldPrice: 579.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique" },
        { id: 12, name: 'Apple Watch Series 4', message: "ancien modèle fiable", image: '/watches_pic/appleS4.webp', color: ['grey', 'black'], rating: '4.2/5', reviews: 700, currentPrice: 199.99, oldPrice: 299.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 13, name: 'Apple Watch Edition Series 8', message: "design en titane", image: '/watches_pic/appleEd8.webp', color: ['grey', 'gold'], rating: '4.8/5', reviews: 950, currentPrice: 849.99, oldPrice: 999.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique" },
        { id: 14, name: 'Apple Watch Series 3', message: "entrée de gamme", image: '/watches_pic/appleS3.webp', color: ['grey', 'black'], rating: '4.0/5', reviews: 550, currentPrice: 149.99, oldPrice: 249.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 15, name: 'Apple Watch Ultra Alpine', message: "pour les aventuriers", image: '/watches_pic/appleUA.webp', color: ['orange', 'green'], rating: '4.9/5', reviews: 700, currentPrice: 849.99, oldPrice: 999.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique et bracelet Alpine" }
    ];
    
    
    
      /* le usestate pour capturer les modification des input de modele */
      const [checkeditem, setCheckedItem] = useState({
        appleWatchS: false,
        appleWatchU: false,
        appleWatchN: false,
        appleWatchH: false,
        appleWatchE: false,
      });

      /*la fonction qui est charger du check unique des input de modele*/
      function handleCheckboxChange(event){
        const {name,checked}=event.target
        console.log(`${name} is ${checked}`);
        if(checked){
          setCheckedItem({
            appleWatchS: name === "appleWatchS",
            appleWatchU: name === "appleWatchU",
            appleWatchN: name === "appleWatchN",
            appleWatchH: name === "appleWatchH", 
            appleWatchE: name === "appleWatchE",
            });
          }
          else{
            setCheckedItem((prevState) => ({
              ...prevState,
              [name]: false,
            }));
          }
          }

      /*la useState avec la fonction pour capturer les modification des input de prix */
      const [minprice, setMinPrice] = useState(0);
      const [maxprice, setMaxPrice] = useState(2000);

      function handleMinPriceChange(event) {
        setMinPrice(event.target.value)
        console.log(`le prix minimum : ${minprice}`)
      }

      function handMaxPriceChange(event){
        setMaxPrice(event.target.value)
        console.log(`le prix maximum : ${maxprice}`)
      }
      /* le usestate pour capturer les modification des input de couleur */
      const [checkeditemcolor, setCheckedItemcolor] = useState({
        black: false,
        green: false,
        white: false,
        grey: false,
        blue: false,
        silver: false,
        red: false,
      });
      /* la function qui est charger du check unique des input de couleur */
      function handleCheckboxColorChange(event){
        const {name,checked}=event.target
        console.log(`${name} is ${checked}`);
        if(checked){
          setCheckedItemcolor({
            white: name === "white",
            black: name === "black",
            green: name === "green",
            grey: name === "grey",
            blue: name === "blue",
            silver: name === "silver",
            red: name === "red",
          });
        }
        else{
          setCheckedItemcolor((prevState) => ({
            ...prevState,
            [name]: false,
          }));
        }
      }
      

      /* un useState et une fonction pour controler le changement du filtre de trie par prix */
      const [pricesortstate,setPricesortstate] = useState("");
      function handlepricesortstate(event) {
         // Récupère la valeur sélectionnée
        setPricesortstate(event.target.value);
        console.log(`selected option : ${pricesortstate}`); // Affiche la valeur sélectionnée
      }

      //calculer la moyenne des prix des produits présent est l'afficher une foit le DOM se charge
      const [moyenneprix,setMoyennePrix] = useState(0);
      useEffect(() => {
        setMoyennePrix(() => {
          let sum = 0;
          products.forEach((product) => {
            sum += product.currentPrice;
          });
          return sum / products.length; // Calcule la moyenne et met à jour l'état
        });
      }, [products]); // La moyenne est recalculée si `products` change

      /*recuperer la valeur ecrit par l'utilisateur dans l'input du filtre de modele*/
      const [modelinputvalue,setModelInputValue] = useState("");
      function handleModelInputValue(event) {
        setModelInputValue(event.target.value);
        console.log(`Modele = ${modelinputvalue}`);
      }

      /*recuperer la valeur ecrit par l'utilisateur dans l'input du filtre de color*/ 
      const [colorinputvalue,setColorInputValue] = useState("");
      function handleColorInputValue(event) {
        setColorInputValue(event.target.value);
      }


      /* la fonction qui retourne selon les filtres les produits qui correspondent */
      function filterProducts() {
        // Vérifier si un filtre est activé
        const isFilterActive = {
          model: Object.values(checkeditem).some((value) => value),
          color: Object.values(checkeditemcolor).some((value) => value),
          modelInput: modelinputvalue.trim() !== "",
          colorInput: colorinputvalue.trim() !== "",
          priceSort: pricesortstate !== "",
          priceRange: minprice !== 0 || maxprice !== 2000,
        };
      
        // Si aucun filtre n'est activé, retourner tous les produits
        if (!Object.values(isFilterActive).some((value) => value)) {
          return products;
        }
      
        // Filtrer les produits
        let filtredproducts = products.filter((product) => {
          // Filtrage par modèle (nom)
          const isModelMatched =
            isFilterActive.modelInput
              ? product.name.toLowerCase().includes(modelinputvalue.toLowerCase())
              : isFilterActive.model
              ? Object.keys(checkeditem).some(
                  (key) =>
                    checkeditem[key] &&
                    product.name
                      .toLowerCase()
                      .replace(/\s+/g, "")
                      .replace(/[^\w\s]/gi, "")
                      .includes(key.toLowerCase())
                )
              : true;
      
          // Filtrage spécifique à la série "SerieA"
          const isMacAirMatched = 
            checkeditem["appleWatchS"] && 
            product.name.toLowerCase().startsWith("apple watch s");
      
          // Filtrage spécifique à la série "SerieS"
          const isMacProMatched = 
            checkeditem["appleWatchU"] && 
            product.name.toLowerCase().startsWith("apple watch u");
      
          // Filtrage spécifique à la série "SerieZ"
          const isImacMatched = 
            checkeditem["appleWatchN"] && 
            product.name.toLowerCase().startsWith("apple watch n");
      
          // Filtrage spécifique à la série "SerieM"
          const isMacMiniMatched = 
            checkeditem["appleWatchH"] && 
            product.name.toLowerCase().startsWith("apple watch h");

          // Filtrage spécifique à la série "SerieM"
          const isEMatched = 
            checkeditem["appleWatchE"] && 
            product.name.toLowerCase().startsWith("apple watch e");
      
          // Filtrage par couleur
          const isColorMatched =
            isFilterActive.colorInput
              ? product.color.some((c) =>
                  c.toLowerCase().includes(colorinputvalue.toLowerCase())
                )
              : isFilterActive.color
              ? product.color.some((color) => checkeditemcolor[color.toLowerCase()])
              : true;
      
          // Filtrage par plage de prix
          const isPriceMatched =
            (minprice === 0 || product.currentPrice >= minprice) &&
            (maxprice === 2000 || product.currentPrice <= maxprice);
      
          // Retourner si le produit respecte tous les critères
          return (isModelMatched || isMacAirMatched || isMacProMatched || isImacMatched || isMacMiniMatched || isEMatched) && isColorMatched && isPriceMatched;
        });
      
        // Tri des produits selon le prix si un tri est sélectionné
        if (pricesortstate === "ascending") {
          filtredproducts.sort((a, b) => a.currentPrice - b.currentPrice);
        } else if (pricesortstate === "descending") {
          filtredproducts.sort((a, b) => b.currentPrice - a.currentPrice);
        }
      
        console.log(
          `La liste filtrée : ${filtredproducts.map(
            (product) => `${product.name} - ${product.currentPrice}`
          )}`
        );
      
        return filtredproducts;
      }
      
      function addToCart(product) {
        // Récupérer les données utilisateurs depuis le localStorage
      const formData = JSON.parse(localStorage.getItem("formData")) || [];
      const loggedInEmail = localStorage.getItem("isLoggedEmail"); // Email de l'utilisateur connecté

      // Trouver l'utilisateur connecté
      const currentUserIndex = formData.findIndex(user => user.email === loggedInEmail);

      if (currentUserIndex !== -1) {
        // Ajouter le produit au panier de l'utilisateur connecté
        const currentUser = formData[currentUserIndex];
        currentUser.cart = currentUser.cart || []; // Initialiser le panier si inexistant
        currentUser.cart.push(product);

        // Mettre à jour les données dans formData
        formData[currentUserIndex] = currentUser;
        localStorage.setItem("formData", JSON.stringify(formData));
      }
    }
      

    return (
        <>
        <div className="iphonepage">
          {/* la partie qui se situe avant la partie des filtre et du catalogue */}
          <nav className="breadcrumbb">
                <a href="/">Accueil</a> &gt; <a href="/Montres">Montres Connectées</a> &gt; <span>Apple Watch</span>
          </nav>
          <div className="container">
              {/* la partie pour savoir ou on se situe */}
              {/* le contenaire qui contient les services de notre application */}
              <div className="infoserviceContainer">
                  <div className="Info">
                      <i class="fa-solid fa-shield-halved"></i>
                      <p>Garantie commerciale de 12 mois</p>
                  </div>
                  <div className="Info">
                    <i class="fa-solid fa-truck"></i>
                      <p>Frais de livraison standards offerts</p>
                  </div>
                  <div className="Info">
                      <i class="fa-solid fa-circle-dollar-to-slot"></i>
                      <p>Retour gratuit jusqu'au 31 janvier</p>
                  </div>
                  <div className="Info">
                      <i class="fa-solid fa-headset"></i>
                      <p>Service client aux petits oignons</p>
                  </div>
              </div>
            </div>

            {/* la partie qui contient le titre de la page avec une petit description */}
            <div className="intro">
              {/* une introduction avec un titre et un paragraphe */}
                <div className="sometextt">
                  <h1>Apple Watch reconditionnés</h1>
                  <p>Vous cherchez un Apple Watch reconditionné ? Bingo ! Nous sommes les maîtres des offres Apple Watch reconditionnés. Nos Apple Watch offrent le meilleur des deux mondes.</p>
                </div>
                {/* le filtre de trie par prix croissant ou décroissant */}
                <div class="sort-container">
                  <label for="sort-select">Trier</label>
                  <select id="sort-select" class="sort-dropdown" value={pricesortstate} onChange={handlepricesortstate}> 
                    <option value="">Aucun choix</option>
                    <option value="ascending" >Prix croissants</option>
                    <option value="descending" >Prix décroissants</option>
                  </select>
                </div>
            </div>

            {/* la partie qui contient les filtres et le catalogue */}
            <div className="aside_catalogue"> 
              {/* la partie qui contient les filtres : prix(Min-Max);couleur;modele */}
              <div className="asidediv">
                {/* ajouter le filtre de prix */}
                  <div className="rangepricefilter">
                      <h3>Prix</h3>
                      <div className="sortrangeinput">
                        <div class="price-value">
                          <label for="min-price">Min (EUR)</label>
                          <input type="number" id="min-price-input" defaultValue={minprice} onChange={handleMinPriceChange}/>
                        </div>
                        <div class="price-value">
                          <label for="max-price">Max (EUR)</label>
                          <input type="number" id="max-price-input"  defaultValue={maxprice} onChange={handMaxPriceChange}/>
                        </div>
                      </div>
                      <p>Le prix moyen est de : {moyenneprix.toFixed(2)} €</p>
                  </div>
                  {/* ajouter le filtre du modèle du téléphone */}
                  <div className="Modele">
                      {/* le titre de la section avec une bar de recherche*/}
                      <h3>Modèle</h3>
                      <div className="Modelinputcontainer"> 
                        <input type="text" placeholder="Modèle" className="inputmodel" id="inputmodele" onChange={handleModelInputValue}/>
                        <i class="fa-solid fa-magnifying-glass"></i>
                      </div>

                      {/* la partie qui contient les modèles du téléphone */}
                        <div className="ckeck-list">
                          <label className="check">
                            <input type="checkbox" name="appleWatchS"  checked={checkeditem.appleWatchS} onChange={handleCheckboxChange}/>
                            Apple Watch S
                          </label>
                              
                          <label className="check">
                            <input type="checkbox" name="appleWatchU" checked={checkeditem.appleWatchU}  onChange={handleCheckboxChange}/>
                            Apple Watch U
                          </label>
                              
                          <label className="check">
                            <input type="checkbox" name="appleWatchN"  checked={checkeditem.appleWatchN} onChange={handleCheckboxChange}/>
                            Apple Watch N
                          </label>

                          <label className="check">
                            <input type="checkbox" name="appleWatchH"  checked={checkeditem.appleWatchH} onChange={handleCheckboxChange}/>
                            Apple Watch H
                          </label>

                          <label className="check">
                            <input type="checkbox" name="appleWatchE"  checked={checkeditem.appleWatchE} onChange={handleCheckboxChange}/>
                            Apple Watch E
                          </label>
                    
                        </div>
                      {/*fermeture de la div des modeles  */}
                  </div>

                  {/* le filtre des couleur */}
                  <div className="Couleur">
                        {/* le titre de la section avec une bar de recherche*/}
                        <h3>Couleur</h3>
                        <div className="Couleurinputcontainer"> 
                          <input type="text" placeholder="Couleur" className="inputCouleur" id="inputCouleur" onChange={handleColorInputValue}/>
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </div>

                        {/* la partie qui contient les couleur du téléphone */}
                        <div className="ckeck-list">
                        <label className="check">
                            <input type="checkbox" name="black" checked={checkeditemcolor.black} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'black', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Noir
                        </label>

                        <label className="check">
                            <input type="checkbox" name="green" checked={checkeditemcolor.green} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'green', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Vert
                        </label>

                        <label className="check">
                            <input type="checkbox" name="grey" checked={checkeditemcolor.grey} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'grey', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Gris
                        </label>

                        <label className="check">
                            <input type="checkbox" name="blue" checked={checkeditemcolor.blue} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'blue', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Bleu
                        </label>

                        <label className="check">
                            <input type="checkbox" name="white" checked={checkeditemcolor.white} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'white', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Blanc
                        </label>

                        <label className="check">
                            <input type="checkbox" name="silver" checked={checkeditemcolor.silver} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'silver', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Argenté
                        </label>

                        <label className="check">
                            <input type="checkbox" name="red" checked={checkeditemcolor.red} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'red', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Rouge
                        </label>

                            {/* fermeture de la div des couleurs */}
                        </div>
                      {/* fermeture de la div du filtre des couleurs */}
                  </div>

              </div>
              {/* la partie qui contient le catalogue des iPhones */}
              <div className="cataloguediv">
                  {
                    filterProducts().map((item,index)=>{
                      return(
                        <div className="phonecard" key={index}>
                            <div className="messagearea">
                                {item.message && (<h4 className="phonemessage">{item.message}</h4>)}
                            </div>
                            <div className="phoneinfoarea">
                              <div className="imageandcolors">
                                <img src={item.image} alt="" className="phoneimage1"/>
                                <div className="phonecolors">
                                  {
                                    item.color.map((couleur,index)=>{
                                      return <div key={index} style={{backgroundColor: couleur}} className="divcolor"></div>;
                                    })
                                  }
                                </div>
                              </div>
                              <div className="phoneinfo">
                                <h2 className="phoneName">{item.name}</h2>
                                <p className="ratingreviews">⭐ {item.rating} ({products[0].reviews})</p>
                                <p className="apartirde">à partir de </p>
                                <h4 className="courantprice">{item.currentPrice} €</h4>
                                <h4 className="oldprice">{item.oldPrice} € neuf</h4>
                              </div>
                            </div>
                            <div className="overlay">
                              <button className="overlay-btn" onClick={() => addToCart(item)}>Ajouter au panier</button>
                              <button className="overlay-btn">Voir le détail</button>
                            </div>
                        </div>)
                    })
                  }
              </div>
            </div>

            {/* la partie des commentaire */}
            <div className="commentaire">

                  {
                    commentaire.map((item,index)=>{
                      
                      return(
                        /* la div qui représente la carte du contenu du commentaire */
                        <div className="commentaire_Card" key={index}>
                          {/* la div qui contient  le profile du client son nom et la date d'Achat*/}
                          <div className="Name_icon_dateAchat">
                            <p className="Comment_Icon" style={{backgroundColor:item.iconColor}}>{item.client.charAt(0)}</p>
                            <div className="Name_dateAchat">
                              <p>{item.client}</p>
                              <p>Acheté le {item.dateAchat}</p>
                            </div>
                          </div>
                          {/* la div du rating */}
                          <div className="Rating">
                            <p>⭐ {item.rating}</p>
                          </div>
                          {/* la div qui contient le corp du commentaire */}
                          <div className="message_commentaire">
                            <p className="a12">{item.commentaire}</p>
                          </div>
                          {/* la div qui contient la pays d'où le commentaire est écris et la date */}
                          <div className="pays_dateCommentaire">
                            <p>Commenté dans ce pays : {item.PaysCommentaire}, le {item.dateCommentaire} </p>
                          </div>
                          {/* la div qui contient le type du iPhone acheter , sa couleur et son état */}
                          <div className="type_couleur_etat">
                            <p>{item.typeIphone} - {item.couleur} - {item.EtatIphone}</p>
                          </div>
                        </div>
                      )

                    })
                  }
                  
            </div>
              

          </div>
        </>
    )
  }

export default AppleWatch;
