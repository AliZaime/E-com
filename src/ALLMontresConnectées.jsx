import React, {useState,useEffect} from "react";
import './Hppage.css'

function ALLMontresConnectees(){
    const products = [
        {id: 1,name: 'Samsung Galaxy Watch 4 (44mm)',message: "",image: '/watches_pic/watch4.avif',color: ['black'],rating: '4.2/5',reviews: 510,currentPrice: 192.00,oldPrice: 400.00,quantite: 1,condition: "Neuf",vendu_avec: "Boîte d'origine, câble de chargement"},
        {id: 2,name: 'Samsung Galaxy Watch 6 (44mm)',message: "",image: '/watches_pic/watch6.png',color: ['grey'],rating: '4.4/5',reviews: 7,currentPrice: 185.00,oldPrice: 328.00,quantite: 1,condition: "Neuf",vendu_avec: "Boîte d'origine, câble de chargement"},
        {id: 3,name: 'Samsung Galaxy Watch Ultra',message: "",image: '/watches_pic/watchultra.avif',color: ['black'],rating: '4.3/5',reviews: 24,currentPrice: 199.00,oldPrice: 329.00,quantite: 1,condition: "Neuf",vendu_avec: "Boîte d'origine, câble de chargement"},
        {id: 4,name: 'Samsung Galaxy Watch 4 Classic (46mm)',message: "",image: '/watches_pic/watch4classic.avif',color: ['black'],rating: '4.3/5',reviews: 24,currentPrice: 83.06,oldPrice: 300.00,quantite: 1,condition: "Neuf",vendu_avec: "Boîte d'origine, câble de chargement"},
        {id: 5,name: 'Samsung Galaxy Watch 5 4G',message: "",image: '/watches_pic/watch5.png',color: ['grey'],rating: '4.2/5',reviews: 5,currentPrice: 197.00,oldPrice: 379.00,quantite: 1,condition: "Neuf",vendu_avec: "Boîte d'origine, câble de chargement"},
        {id: 6,name: 'Samsung Galaxy Watch 3 (45mm)',message: "",image: '/watches_pic/watch3.avif',color: ['white'],rating: '4.4/5',reviews: 10,currentPrice: 140.00,oldPrice: 489.00,quantite: 1,condition: "Neuf",vendu_avec: "Boîte d'origine, câble de chargement"},
        {id: 7,name: 'Samsung Galaxy Watch FE',message: "",image: '/watches_pic/watchFE.png',color: ['grey'],rating: '4.4/5',reviews: 24,currentPrice: 140.00,oldPrice: 322.00,quantite: 1,condition: "Neuf",vendu_avec: "Boîte d'origine, câble de chargement"},
        {id: 8,name: 'Samsung Galaxy Watch active 2',message: "",image: '/watches_pic/watchactive2.png',color: ['silver'],rating: '4.5/5',reviews: 4,currentPrice: 185.00,oldPrice: 300.00,quantite: 1,condition: "Neuf",vendu_avec: "Boîte d'origine, câble de chargement"},
        { id: 9, name: 'Apple Watch Series 5', message: "performances solides", image: '/watches_pic/appleS5.png', color: ['grey', 'black'], rating: '4.3/5', reviews: 800, currentPrice: 229.99, oldPrice: 329.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 10, name: 'Apple Watch Hermès Edition', message: "édition premium", image: '/watches_pic/appleHermes.png', color: ['black', 'gold'], rating: '4.9/5', reviews: 600, currentPrice: 1249.99, oldPrice: 1499.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique et bracelet Hermès" },
        { id: 11, name: 'Apple Watch Series 9 GPS', message: "connectivité complète", image: '/watches_pic/appleS9GPS.png', color: ['gold', 'black'], rating: '5/5', reviews: 1200, currentPrice: 479.99, oldPrice: 579.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique" },
        { id: 12, name: 'Apple Watch Series 4', message: "ancien modèle fiable", image: '/watches_pic/appleS4.webp', color: ['grey', 'black'], rating: '4.2/5', reviews: 700, currentPrice: 199.99, oldPrice: 299.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 13, name: 'Apple Watch Edition Series 8', message: "design en titane", image: '/watches_pic/appleEd8.webp', color: ['grey', 'gold'], rating: '4.8/5', reviews: 950, currentPrice: 849.99, oldPrice: 999.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique" },
        { id: 14, name: 'Apple Watch Series 3', message: "entrée de gamme", image: '/watches_pic/appleS3.webp', color: ['grey', 'black'], rating: '4.0/5', reviews: 550, currentPrice: 149.99, oldPrice: 249.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 15, name: 'Apple Watch Ultra Alpine', message: "pour les aventuriers", image: '/watches_pic/appleUA.webp', color: ['orange', 'green'], rating: '4.9/5', reviews: 700, currentPrice: 849.99, oldPrice: 999.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique et bracelet Alpine" },
        { id: 16, name: 'Apple Watch Series 9', message: "nouveau modèle", image: '/watches_pic/appleS9.png', color: ['grey', 'black', 'gold'], rating: '5/5', reviews: 1500, currentPrice: 429.99, oldPrice: 529.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique" },
        { id: 17, name: 'Apple Watch Series 8', message: "excellent rapport qualité-prix", image: '/watches_pic/appleS8.png', color: ['grey', 'black', 'red'], rating: '4.7/5', reviews: 1250, currentPrice: 379.99, oldPrice: 479.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 18, name: 'Apple Watch Ultra', message: "robuste et puissante", image: '/watches_pic/appleUltra.png', color: ['grey', 'black'], rating: '4.9/5', reviews: 950, currentPrice: 799.99, oldPrice: 899.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique et bracelet sport" },
        { id: 19, name: 'Apple Watch SE (2e gén)', message: "meilleur choix économique", image: '/watches_pic/appleSE2.png', color: ['grey', 'gold', 'black'], rating: '4.5/5', reviews: 1050, currentPrice: 279.99, oldPrice: 329.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique" },
        { id: 20, name: 'Apple Watch Series 7', message: "ancien modèle toujours efficace", image: '/watches_pic/appleS7.png', color: ['grey', 'black', 'green'], rating: '4.6/5', reviews: 1100, currentPrice: 329.99, oldPrice: 429.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 21, name: 'Apple Watch Series 6', message: "fonctionnalités complètes", image: '/watches_pic/appleS6.png', color: ['grey', 'red', 'blue'], rating: '4.5/5', reviews: 950, currentPrice: 279.99, oldPrice: 379.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        { id: 22, name: 'Apple Watch Nike Series 8', message: "édition spéciale Nike", image: '/watches_pic/appleNike.png', color: ['black', 'grey'], rating: '4.8/5', reviews: 1150, currentPrice: 399.99, oldPrice: 499.99, quantite: 1, condition: "Neuve", vendu_avec: "Chargeur magnétique et bracelet Nike" },
        { id: 23, name: 'Apple Watch SE (1e gén)', message: "alternative économique", image: '/watches_pic/appleSE1.png', color: ['grey', 'gold'], rating: '4.4/5', reviews: 850, currentPrice: 229.99, oldPrice: 329.99, quantite: 1, condition: "Reconditionnée", vendu_avec: "Chargeur magnétique" },
        
    ];
    
    const commentaire = [
        {id: 1,client: 'Lucas T.',iconColor: '#94c2f5',dateAchat: '12 octobre 2024',dateCommentaire: '25 octobre 2024',PaysCommentaire: 'France',rating: '5/5',commentaire: "La Galaxy Watch 5 est tout simplement incroyable ! L'autonomie est excellente, et les fonctionnalités comme le suivi cardio et le suivi du sommeil sont très précises. Une montre élégante et performante.",typeMontre: 'Galaxy Watch 5',couleur: 'Gris',EtatMontre: 'Neuf'},
        {id: 2,client: 'Marc G.',iconColor: '#f5d94c',dateAchat: '5 septembre 2024',dateCommentaire: '15 septembre 2024',PaysCommentaire: 'France',rating: '4.7/5',commentaire: "Très satisfait de ma Galaxy Watch 4 Classic. Le design est élégant, et les fonctions sont intuitives. Cependant, le bracelet pourrait être plus confortable.",typeMontre: 'Galaxy Watch 4 Classic',couleur: 'Noir',EtatMontre: 'Reconditionné'},
        {id: 3,client: 'Carla P.',iconColor: '#e5e5e5',dateAchat: '22 janvier 2024',dateCommentaire: '10 février 2024',PaysCommentaire: 'France',rating: '4.5/5',commentaire: "La Galaxy Watch 5 Pro est une montre impressionnante pour les amateurs de sport. Le suivi GPS est très précis, et l'écran est facile à lire même en plein soleil.",typeMontre: 'Galaxy Watch 5 Pro',couleur: 'Noir',EtatMontre: 'Neuf'},
        {id: 4,client: 'Isabelle B.',iconColor: '#a5f594',dateAchat: '10 mars 2024',dateCommentaire: '22 mars 2024',PaysCommentaire: 'France',rating: '4.8/5',commentaire: "La Galaxy Watch 4 est parfaite pour mon usage quotidien. Elle suit bien mes séances de sport et me permet de rester connecté sans avoir mon téléphone en permanence.",typeMontre: 'Galaxy Watch 4',couleur: 'Rose',EtatMontre: 'Neuf'},
        {id: 5,client: 'Eliott N.',iconColor: '#f5949c',dateAchat: '30 août 2024',dateCommentaire: '12 septembre 2024',PaysCommentaire: 'France',rating: '5/5',commentaire: "Je ne peux plus me passer de ma Galaxy Watch 4 Classic. Le design est intemporel, et elle offre toutes les fonctionnalités nécessaires pour une montre connectée.",typeMontre: 'Galaxy Watch 4 Classic',couleur: 'Argent',EtatMontre: 'Neuf'}
    ];
    
    const [checkeditem, setCheckedItem] = useState({
        peuimport:false,
        Watch4Classic:false,
        Watch4:false,
        Watch6:false,
        WatchUltra:false,
        Watch5:false,
        Watch3:false,
        WatchFE:false,
        WatchActive2:false,
        appleWatchS: false,
        appleWatchU: false,
        appleWatchN: false,
        appleWatchH: false,
        appleWatchE: false,
    });

    function handleCheckboxChange(event){
        const {name,checked}=event.target
        console.log(`${name} is ${checked}`);
        if(checked){
          setCheckedItem({
            peuimport: name === "peuimport",
            Watch4Classic:name === "Watch4Classic",
            Watch4:name === "Watch4",
            Watch6:name === "Watch6",
            WatchUltra:name === "WatchUltra",
            Watch5:name === "Watch5",
            Watch3:name === "Watch3",
            WatchFE:name === "WatchFE",
            WatchActive2:name === "WatchActive2",
            
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
                    lavender: false,
                    green: false,
                    grey: false,
                    violet: false,
                    gold: false,
                    blue: false,
                    white: false,
                    lime: false,
                    olive: false,
                    pink: false,
                    orange: false,
                    silver: false,
                    red: false,
                    beige: false,
              });
              /* la function qui est charger du check unique des input de couleur */
              function handleCheckboxColorChange(event){
                const {name,checked}=event.target
                console.log(`${name} is ${checked}`);
                if(checked){
                  setCheckedItemcolor({
                    white: name === "white",
                    black: name === "black",
                    lavender: name === "lavender",
                    green: name === "green",
                    grey: name === "grey",
                    violet: name === "violet",
                    gold: name === "gold",
                    blue: name === "blue",
                    lime: name === "lime",
                    olive: name === "olive",
                    pink: name === "pink",
                    orange: name === "orange",
                    silver: name === "silver",
                    red: name === "red",
                    beige: name === "beige",
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
                  const isWatch4ClassicMatched = 
                    checkeditem["Watch4Classic"]&& 
                    product.name.toLowerCase() === "Montre Samsung Galaxy Watch 4 Classic (46mm)";
              
                  // Filtrage spécifique à la série "SerieS"
                  const isWatch4Matched = 
                    checkeditem["Watch4"] && 
                    product.name.toLowerCase().trim() === 'Montre Samsung Galaxy Watch 4 (44mm)'.trim();
     
              
                  // Filtrage spécifique à la série "SerieS"
                  const isWatch6Matched = 
                    checkeditem["Watch6"]&& 
                    product.name.toLowerCase() === "Montre Samsung Galaxy Watch 6 (44mm)";
        
                    // Filtrage spécifique à la série "SerieA"
                  const isWatchUltraMatched = 
                  checkeditem["WatchUltra"]&& 
                  product.name.toLowerCase() === "Montre Samsung Galaxy Watch Ultra";
            
                // Filtrage spécifique à la série "SerieS"
                const isWatch5Matched = 
                  checkeditem["Watch5"]&& 
                  product.name.toLowerCase() === "Montre Samsung Galaxy Watch 5 4G"; 
              
                const isWatch3Matched = 
                  checkeditem["Watch3"]&& 
                  product.name.toLowerCase() === "Montre Samsung Galaxy Watch 3 (45mm)"; 
    
                const isWatchFEMatched = 
                  checkeditem["WatchFE"]&& 
                  product.name.toLowerCase() === "Montre Samsung Galaxy Watch FE"; 
    
                const isWatchActive2Matched = 
                  checkeditem["WatchActive2"]&& 
                  product.name.toLowerCase() === "Montre Samsung Galaxy Watch active 2"; 
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
                  return ( isModelMatched || isMacAirMatched || isMacProMatched || isImacMatched || isMacMiniMatched || isEMatched ||isModelMatched || isWatch4ClassicMatched || isWatch4Matched || isWatch6Matched || isWatchUltraMatched || isWatch5Matched || isWatch3Matched || isWatchFEMatched || isWatchActive2Matched) && isColorMatched && isPriceMatched;
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
                  <nav className="breadcrumb">
                        <a href="/" style={{color:"white"}}>Accueil</a> &gt; <a href="/Montres" style={{color:"white"}}>Watches</a> &gt; <span style={{color:"white"}}>SmartWaches</span>
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
                          <h1>Smart-Watches reconditionnés</h1>
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
                                    <input type="checkbox" name="Watch4Classic"  checked={checkeditem.Watch4Classic} onChange={handleCheckboxChange}/>
                                    Watch 4 Classic
                                  </label>
                                      
                                  <label>
                                    <input type="checkbox" name="Watch4" checked={checkeditem.Watch4}  onChange={handleCheckboxChange}/>
                                    Watch 4
                                  </label>
                                      
                                  <label>
                                    <input type="checkbox" name="Watch6"  checked={checkeditem.Watch6} onChange={handleCheckboxChange}/>
                                    Watch 6
                                  </label>
        
                                  <label>
                                    <input type="checkbox" name="WatchUltra"  checked={checkeditem.WatchUltra} onChange={handleCheckboxChange}/>
                                    Watch Ultra
                                  </label>
        
                                  <label>
                                    <input type="checkbox" name="Watch5"  checked={checkeditem.Watch5} onChange={handleCheckboxChange}/>
                                    Watch5
                                  </label>
    
                                  <label>
                                    <input type="checkbox" name="Watch3"  checked={checkeditem.Watch3} onChange={handleCheckboxChange}/>
                                    Watch3
                                  </label>
    
                                  <label>
                                    <input type="checkbox" name="WatchFE"  checked={checkeditem.WatchFE} onChange={handleCheckboxChange}/>
                                    Watch FE
                                  </label>
    
                                  <label>
                                    <input type="checkbox" name="WatchActive2"  checked={checkeditem.WatchActive2} onChange={handleCheckboxChange}/>
                                    Watch Active 2
                                  </label>
                                  <label>
                            <input type="checkbox" name="appleWatchS"  checked={checkeditem.appleWatchS} onChange={handleCheckboxChange}/>
                            Apple Watch S
                          </label>
                              
                          <label>
                            <input type="checkbox" name="appleWatchU" checked={checkeditem.appleWatchU}  onChange={handleCheckboxChange}/>
                            Apple Watch U
                          </label>
                              
                          <label>
                            <input type="checkbox" name="appleWatchN"  checked={checkeditem.appleWatchN} onChange={handleCheckboxChange}/>
                            Apple Watch N
                          </label>

                          <label>
                            <input type="checkbox" name="appleWatchH"  checked={checkeditem.appleWatchH} onChange={handleCheckboxChange}/>
                            Apple Watch H
                          </label>

                          <label>
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
                                <label>
                                    <input type="checkbox" name="black" checked={checkeditemcolor.black} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'black', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Noir
                                </label>
        
                                <label>
                                    <input type="checkbox" name="lavender" checked={checkeditemcolor.lavender} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'lavender', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Lavande
                                </label>
        
                                <label>
                                    <input type="checkbox" name="green" checked={checkeditemcolor.green} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'green', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Vert
                                </label>
        
                                <label>
                                    <input type="checkbox" name="grey" checked={checkeditemcolor.grey} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'grey', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Gris
                                </label>
        
                                <label>
                                    <input type="checkbox" name="violet" checked={checkeditemcolor.violet} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'violet', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Violet
                                </label>
        
                                <label>
                                    <input type="checkbox" name="gold" checked={checkeditemcolor.gold} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'gold', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Or
                                </label>
        
                                <label>
                                    <input type="checkbox" name="blue" checked={checkeditemcolor.blue} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'blue', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Bleu
                                </label>
        
                                <label>
                                    <input type="checkbox" name="white" checked={checkeditemcolor.white} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'white', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Blanc
                                </label>
        
                                <label>
                                    <input type="checkbox" name="lime" checked={checkeditemcolor.lime} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'lime', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Lime
                                </label>
        
                                <label>
                                    <input type="checkbox" name="olive" checked={checkeditemcolor.olive} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'olive', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Olive
                                </label>
        
                                <label>
                                    <input type="checkbox" name="pink" checked={checkeditemcolor.pink} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'pink', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Rose
                                </label>
        
                                <label>
                                    <input type="checkbox" name="orange" checked={checkeditemcolor.orange} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'orange', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Orange
                                </label>
        
                                <label>
                                    <input type="checkbox" name="silver" checked={checkeditemcolor.silver} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: '#C0C0C0', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Argent
                                </label>
        
                                <label>
                                    <input type="checkbox" name="beige" checked={checkeditemcolor.beige} onChange={handleCheckboxColorChange} />
                                    <div className="colorinput" style={{ backgroundColor: 'beige', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                    Beige
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
                                    <p>{item.typeMontre} - {item.couleur} - {item.EtatMontre}</p>
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

export default ALLMontresConnectees;