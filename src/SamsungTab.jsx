/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import './Ipad.css';

function SamsungTab() {

    const commentaire = [
        { 
            id: 1, 
            client: 'Alice M.', 
            iconColor: '#94c2f5', 
            dateAchat: '12 octobre 2024', 
            dateCommentaire: '25 octobre 2024', 
            PaysCommentaire: 'France', 
            rating: '5/5', 
            commentaire: "J'ai acheté une Samsung Galaxy Tab S7 reconditionnée et je suis ravie de la qualité. La tablette est comme neuve, sans rayures visibles. Idéale pour mes besoins professionnels et personnels.", 
            typeSamsung: 'Galaxy Tab S7', 
            couleur: 'Noir', 
            EtatSamsung: 'Reconditionné'
        },
        { 
            id: 2, 
            client: 'Martin C.', 
            iconColor: '#f5d94c', 
            dateAchat: '5 septembre 2024', 
            dateCommentaire: '15 septembre 2024', 
            PaysCommentaire: 'France', 
            rating: '4.7/5', 
            commentaire: "La Galaxy Tab A8 est parfaite pour le quotidien. Quelques traces d'utilisation mineures, mais rien de gênant. Les performances sont solides pour le prix.", 
            typeSamsung: 'Galaxy Tab A8', 
            couleur: 'Argent', 
            EtatSamsung: 'Reconditionné'
        }
    ];

    const products = [
        { id: 1, name: 'Samsung Galaxy Tab A8', message: "-30% vs prix neuf", image: '/tablets_pic/A8.avif', color: ['black', 'silver', 'blue'], rating: '4.5/5', reviews: 10234, currentPrice: 179.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 2, name: 'Samsung Galaxy Tab S7', message: "Top qualité", image: '/tablets_pic/S7.jpg', color: ['black', 'bronze', 'silver'], rating: '4.8/5', reviews: 8623, currentPrice: 549.99, oldPrice: 699.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et stylet" },
        { id: 3, name: 'Samsung Galaxy Tab S8', message: "Nouveauté", image: '/tablets_pic/S8.jpg', color: ['black', 'graphite', 'white'], rating: '4.9/5', reviews: 12984, currentPrice: 799.99, oldPrice: 999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et stylet" },
        { id: 4, name: 'Samsung Galaxy Tab S6 Lite', message: "-20% aujourd'hui", image: '/tablets_pic/S6lite.png', color: ['blue', 'pink', 'grey'], rating: '4.4/5', reviews: 5243, currentPrice: 299.99, oldPrice: 379.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 5, name: 'Samsung Galaxy Tab Active3', message: "Conçue pour durer", image: '/tablets_pic/active3.jpg', color: ['black'], rating: '4.6/5', reviews: 3245, currentPrice: 499.99, oldPrice: 599.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement et protection" },
        { id: 6, name: 'Samsung Galaxy Tab A7', message: "", image: '/tablets_pic/A7.webp', color: ['silver', 'gold'], rating: '4.3/5', reviews: 7245, currentPrice: 199.99, oldPrice: 299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 7, name: 'Samsung Galaxy Tab S5e', message: "Légère et performante", image: '/tablets_pic/S5e.jpg', color: ['black', 'gold', 'silver'], rating: '4.7/5', reviews: 4521, currentPrice: 379.99, oldPrice: 449.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 8, name: 'Samsung Galaxy Tab S4', message: "", image: '/tablets_pic/S4.webp', color: ['black', 'white'], rating: '4.2/5', reviews: 3321, currentPrice: 279.99, oldPrice: 349.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement" },
        { id: 9, name: 'Samsung Galaxy Tab A10.1', message: "Polyvalente", image: '/tablets_pic/A10.jpg', color: ['black', 'silver'], rating: '4.1/5', reviews: 4125, currentPrice: 249.99, oldPrice: 329.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 10, name: 'Samsung Galaxy Tab A7 Lite', message: "Compacte", image: '/tablets_pic/S7.jpg', color: ['grey', 'silver'], rating: '4.5/5', reviews: 2124, currentPrice: 129.99, oldPrice: 179.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement" },
        { id: 11, name: 'Samsung Galaxy Tab S3', message: "Classique", image: '/tablets_pic/S3.webp', color: ['black', 'silver'], rating: '4.0/5', reviews: 3241, currentPrice: 199.99, oldPrice: 299.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 12, name: 'Samsung Galaxy Tab S2', message: "Fine et légère", image: '/tablets_pic/S2.jpg', color: ['black', 'white'], rating: '4.3/5', reviews: 4523, currentPrice: 149.99, oldPrice: 229.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 13, name: 'Samsung Galaxy Tab A 2019', message: "Performante", image: '/tablets_pic/A2019.jpg', color: ['black', 'silver'], rating: '4.4/5', reviews: 5241, currentPrice: 219.99, oldPrice: 299.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement" },
        { id: 14, name: 'Samsung Galaxy Tab A6', message: "Essentielle", image: '/tablets_pic/A6.jpeg', color: ['black'], rating: '4.2/5', reviews: 6211, currentPrice: 189.99, oldPrice: 249.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 15, name: 'Samsung Galaxy Tab Pro 10.1', message: "", image: '/tablets_pic/pro10.jpg', color: ['black', 'white'], rating: '4.6/5', reviews: 2981, currentPrice: 299.99, oldPrice: 399.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 16, name: 'Samsung Galaxy Tab E 9.6', message: "Simple et efficace", image: '/tablets_pic/E9.jpg', color: ['black', 'white'], rating: '4.2/5', reviews: 3211, currentPrice: 149.99, oldPrice: 199.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 17, name: 'Samsung Galaxy Tab S9 Ultra', message: "Haut de gamme", image: '/tablets_pic/S9.jpg', color: ['black', 'graphite'], rating: '5.0/5', reviews: 1824, currentPrice: 1199.99, oldPrice: 1399.99, quantite: 1, condition: "Comme neuf", vendu_avec: "Câble de chargement et stylet" },
        { id: 18, name: 'Samsung Galaxy Tab S9', message: "Excellence", image: '/tablets_pic/S9.jpg', color: ['black', 'white'], rating: '4.8/5', reviews: 2402, currentPrice: 999.99, oldPrice: 1199.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement et stylet" },
        { id: 19, name: 'Samsung Galaxy Tab A8 Plus', message: "Grande autonomie", image: '/tablets_pic/A8.avif', color: ['black', 'blue'], rating: '4.6/5', reviews: 3502, currentPrice: 299.99, oldPrice: 399.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 20, name: 'Samsung Galaxy Tab S8+', message: "Grand écran AMOLED", image: '/tablets_pic/S8plus.jpg', color: ['black', 'silver', 'bronze'], rating: '4.9/5', reviews: 4821, currentPrice: 999.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et stylet" },
        { id: 21, name: 'Samsung Galaxy Tab E 8.0', message: "Économique et pratique", image: '/tablets_pic/E8.jpeg', color: ['black', 'white'], rating: '4.2/5', reviews: 1220, currentPrice: 129.99, oldPrice: 199.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 22, name: 'Samsung Galaxy Tab E 10.1', message: "Grande polyvalence", image: '/tablets_pic/A10.jpg', color: ['black', 'silver'], rating: '4.3/5', reviews: 1802, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement" },
        { id: 23, name: 'Samsung Galaxy Tab E Lite', message: "Compact et léger", image: '/tablets_pic/E9.jpg', color: ['white', 'black'], rating: '4.1/5', reviews: 1450, currentPrice: 99.99, oldPrice: 149.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 24, name: 'Samsung Galaxy Tab Pro S', message: "Hybride performant", image: '/tablets_pic/ProS.jpg', color: ['black', 'silver'], rating: '4.8/5', reviews: 2250, currentPrice: 599.99, oldPrice: 799.99, quantite: 1, condition: "Très bon état", vendu_avec: "Clavier et câble de chargement" },
        { id: 25, name: 'Samsung Galaxy Tab Pro 12.2', message: "Écran ultra-large", image: '/tablets_pic/pro12.jpg', color: ['black', 'white'], rating: '4.7/5', reviews: 1930, currentPrice: 699.99, oldPrice: 899.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement" },
        { id: 26, name: 'Samsung Galaxy Tab Pro 8.4', message: "Portabilité maximale", image: '/tablets_pic/pro8.jpg', color: ['black', 'gold'], rating: '4.6/5', reviews: 1645, currentPrice: 499.99, oldPrice: 599.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" }
    ];
    
        const [checkeditem, setCheckedItem] = useState({
            peuimport: false,
            tabA: false,
            tabS: false,
            tabE: false,
            tabPro: false
        });
    
        function handleCheckboxChange(event) {
            const {name, checked} = event.target;
            if (checked) {
                setCheckedItem({
                    peuimport: name === "peuimport",
                    tabA: name === "tabA",
                    tabS: name === "tabS",
                    tabE: name === "tabE",
                    tabPro: name === "tabPro"
                });
            } else {
                setCheckedItem((prevState) => ({
                    ...prevState,
                    [name]: false,
                }));
            }
        }
    
        const [minprice, setMinPrice] = useState(0);
        const [maxprice, setMaxPrice] = useState(2000);
    
        function handleMinPriceChange(event) {
            setMinPrice(event.target.value);
        }
    
        function handMaxPriceChange(event) {
            setMaxPrice(event.target.value);
        }
    
        const [checkeditemcolor, setCheckedItemcolor] = useState({
            black: false,
            silver: false,
            blue: false,
            bronze: false,
            graphite: false,
            white: false
        });
    
        function handleCheckboxColorChange(event) {
            const {name, checked} = event.target;
            if (checked) {
                setCheckedItemcolor({
                    black: name === "black",
                    silver: name === "silver",
                    blue: name === "blue",
                    bronze: name === "bronze",
                    graphite: name === "graphite",
                    white: name === "white"
                });
            } else {
                setCheckedItemcolor((prevState) => ({
                    ...prevState,
                    [name]: false,
                }));
            }
        }
    
        const [pricesortstate, setPricesortstate] = useState("");
        function handlepricesortstate(event) {
            setPricesortstate(event.target.value);
        }
    
        const [moyenneprix, setMoyennePrix] = useState(0);
        useEffect(() => {
            setMoyennePrix(() => {
                let sum = 0;
                products.forEach((product) => {
                    sum += product.currentPrice;
                });
                return sum / products.length;
            });
        }, [products]);

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
                    checkeditem["tabA"] && 
                    product.name.toLowerCase().startsWith("samsung galaxy tab a");
              
                  // Filtrage spécifique à la série "SerieS"
                  const isMacProMatched = 
                    checkeditem["tabS"] && 
                    product.name.toLowerCase().startsWith("samsung galaxy tab s");
              
                  // Filtrage spécifique à la série "SerieZ"
                  const isImacMatched = 
                    checkeditem["tabE"] && 
                    product.name.toLowerCase().startsWith("samsung galaxy tab e");
              
                  // Filtrage spécifique à la série "SerieM"
                  const isMacMiniMatched = 
                    checkeditem["tabPro"] && 
                    product.name.toLowerCase().startsWith("samsung galaxy tab pro");
              
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
                  return (isModelMatched || isMacAirMatched || isMacProMatched || isImacMatched || isMacMiniMatched) && isColorMatched && isPriceMatched;
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
            const formData = JSON.parse(localStorage.getItem("formData")) || [];
            const loggedInEmail = localStorage.getItem("isLoggedEmail");
            const currentUserIndex = formData.findIndex(user => user.email === loggedInEmail);
    
            if (currentUserIndex !== -1) {
                const currentUser = formData[currentUserIndex];
                currentUser.cart = currentUser.cart || [];
                currentUser.cart.push(product);
                formData[currentUserIndex] = currentUser;
                localStorage.setItem("formData", JSON.stringify(formData));
            }
        }
        return (
            <>
            <div className="iphonepage">
              {/* la partie qui se situe avant la partie des filtre et du catalogue */}
              <nav className="breadcrumb">
                    <a href="/">Accueil</a> &gt; <a href="/Tablettes">Tablettes</a> &gt; <span>Samsung Tab</span>
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
                    <div className="sometext">
                      <h1>Ipad reconditionnés</h1>
                      <p>Découvrez notre sélection de Samsung Tabs reconditionnées, parfaites pour un usage personnel et professionnel</p>
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
                              <label>
                                <input type="checkbox" name='peuimport'  checked={checkeditem.peuimport}  onChange={handleCheckboxChange}/>
                                Peu import
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="tabA"  checked={checkeditem.tabA} onChange={handleCheckboxChange}/>
                                Samsung Galaxy Tab A
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="tabS" checked={checkeditem.tabS}  onChange={handleCheckboxChange}/>
                                Samsung Galaxy Tab S
                              </label>

                              <label>
                                <input type="checkbox" name="tabPro" checked={checkeditem.tabPro} onChange={handleCheckboxChange}/>
                                Samsung Galaxy Tab Pro
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="tabE" checked={checkeditem.tabE} onChange={handleCheckboxChange}/>
                                Samsung Galaxy Tab E
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
                            <label>
                                <input type="checkbox" name="black" checked={checkeditemcolor.black} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: 'black', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Noir
                            </label>

                            <label>
                                <input type="checkbox" name="silver" checked={checkeditemcolor.silver} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: '#C0C0C0', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Argent
                            </label>

                            <label>
                                <input type="checkbox" name="blue" checked={checkeditemcolor.blue} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: 'blue', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Bleu
                            </label>

                            <label>
                                <input type="checkbox" name="bronze" checked={checkeditemcolor.bronze} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: '#cd7f32', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Bronze
                            </label>

                            <label>
                                <input type="checkbox" name="graphite" checked={checkeditemcolor.graphite} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: '#383838', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Graphite
                            </label>

                            <label>
                                <input type="checkbox" name="white" checked={checkeditemcolor.white} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: 'white', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Blanc
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
                                <p>{item.commentaire}</p>
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
    
    export default SamsungTab;