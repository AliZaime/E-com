/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react";
import './Ipad.css'

function Xbox() {

    const commentaire = [
        { 
            id: 1, 
            client: 'Alex T.', 
            iconColor: '#94c2f5', 
            dateAchat: '12 octobre 2024', 
            dateCommentaire: '25 octobre 2024', 
            PaysCommentaire: 'France', 
            rating: '5/5', 
            commentaire: "La Xbox Series X est impressionnante. Les graphismes sont de très haute qualité, et la vitesse de chargement est incroyable grâce au SSD. La console est silencieuse et bien conçue. Je suis très content de mon achat.", 
            typeXbox: 'Xbox Series X', 
            couleur: 'Noir', 
            EtatXbox: 'Neuf'
        },
        { 
            id: 2, 
            client: 'Emma G.', 
            iconColor: '#f5d94c', 
            dateAchat: '5 septembre 2024', 
            dateCommentaire: '15 septembre 2024', 
            PaysCommentaire: 'France', 
            rating: '4.8/5', 
            commentaire: "Ma Xbox Series S est parfaite pour jouer en 1080p. Elle est compacte, silencieuse et les jeux tournent à merveille. La capacité de stockage est un peu limitée, mais le prix est très compétitif.", 
            typeXbox: 'Xbox Series S', 
            couleur: 'Blanc', 
            EtatXbox: 'Neuf'
        },
        { 
            id: 3, 
            client: 'Lucas P.', 
            iconColor: '#e5e5e5', 
            dateAchat: '22 janvier 2024', 
            dateCommentaire: '10 février 2024', 
            PaysCommentaire: 'France', 
            rating: '4.6/5', 
            commentaire: "La Xbox One X est une console très puissante. Elle offre des graphismes en 4K impressionnants, mais le ventilateur est un peu bruyant parfois. Malgré ce détail, c'est un excellent choix pour les joueurs.", 
            typeXbox: 'Xbox One X', 
            couleur: 'Noir', 
            EtatXbox: 'Reconditionnée'
        },
        { 
            id: 4, 
            client: 'Isabelle B.', 
            iconColor: '#a5f594', 
            dateAchat: '10 mars 2024', 
            dateCommentaire: '22 mars 2024', 
            PaysCommentaire: 'France', 
            rating: '4.7/5', 
            commentaire: "La Xbox One S est une très bonne console pour un prix abordable. Les performances sont solides, mais le stockage interne pourrait être plus important. Un excellent rapport qualité-prix.", 
            typeXbox: 'Xbox One S', 
            couleur: 'Blanc', 
            EtatXbox: 'Reconditionnée'
        },
        { 
            id: 5, 
            client: 'Eliott N.', 
            iconColor: '#f5949c', 
            dateAchat: '30 août 2024', 
            dateCommentaire: '12 septembre 2024', 
            PaysCommentaire: 'France', 
            rating: '5/5', 
            commentaire: "La Xbox Series X est une console exceptionnelle. Les temps de chargement sont quasi inexistants, et la qualité des jeux est incroyable. Elle est également très silencieuse. Je la recommande vivement.", 
            typeXbox: 'Xbox Series X', 
            couleur: 'Noir', 
            EtatXbox: 'Neuf'
        }
    ];
    
    
    const products = [
        { id: 1, name: 'Xbox 360', message: "-30% vs prix neuf", image: '/Consoles_pic/360.png', color: ['black', 'silver', 'white'], rating: '4.3/5', reviews: 12045, currentPrice: 149.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble HDMI" },
        { id: 2, name: 'Xbox One S', message: "top vente", image: '/Consoles_pic/OneS.webp', color: ['white', 'black', 'grey'], rating: '4.5/5', reviews: 8562, currentPrice: 199.99, oldPrice: 299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble HDMI" },
        { id: 3, name: 'Xbox One X', message: "top vente", image: '/Consoles_pic/OneX.png', color: ['black', 'blue', 'silver'], rating: '4.6/5', reviews: 6248, currentPrice: 299.99, oldPrice: 399.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble HDMI" },
        { id: 4, name: 'Xbox Series S', message: "meilleure vente", image: '/Consoles_pic/SerieS.png', color: ['white', 'black'], rating: '4.8/5', reviews: 9524, currentPrice: 249.99, oldPrice: 349.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble HDMI" },
        { id: 5, name: 'Xbox Series X', message: "meilleure performance", image: '/Consoles_pic/SerieX.png', color: ['black', 'silver'], rating: '4.9/5', reviews: 10528, currentPrice: 499.99, oldPrice: 699.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble HDMI" },
        { id: 6, name: 'Xbox One Elite', message: "édition spéciale", image: '/Consoles_pic/OneElite.webp', color: ['black', 'graphite'], rating: '4.7/5', reviews: 4280, currentPrice: 399.99, oldPrice: 549.99, quantite: 1, condition: "Parfait état", vendu_avec: "Manette Elite" },
        { id: 7, name: 'Xbox 360 Slim', message: "-20% vs prix neuf", image: '/Consoles_pic/360Slim.png', color: ['black', 'grey'], rating: '4.4/5', reviews: 7250, currentPrice: 129.99, oldPrice: 159.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble d’alimentation" },
        { id: 8, name: 'Xbox 360 E', message: "design compact", image: '/Consoles_pic/360E.jpg', color: ['white', 'black'], rating: '4.3/5', reviews: 5142, currentPrice: 139.99, oldPrice: 229.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble HDMI" },
        { id: 9, name: 'Xbox One Digital', message: "", image: '/Consoles_pic/OneDig.png', color: ['white', 'grey'], rating: '4.2/5', reviews: 3250, currentPrice: 199.99, oldPrice: 299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble HDMI" },
        { id: 10, name: 'Xbox Series X Halo Edition', message: "édition limitée", image: '/Consoles_pic/Xhalo.webp', color: ['black', 'green'], rating: '4.9/5', reviews: 6250, currentPrice: 599.99, oldPrice: 799.99, quantite: 1, condition: "Neuf", vendu_avec: "Câble HDMI et jeu Halo" },
        { id: 11, name: 'Xbox Series S Fortnite Pack', message: "pack spécial", image: '/Consoles_pic/SerieS.png', color: ['white'], rating: '4.8/5', reviews: 7520, currentPrice: 269.99, oldPrice: 399.99, quantite: 1, condition: "Neuf", vendu_avec: "Câble HDMI et contenu Fortnite" },
        { id: 12, name: 'Xbox One S All-Digital', message: "pas de lecteur", image: '/Consoles_pic/SAll.jpg', color: ['white'], rating: '4.4/5', reviews: 4125, currentPrice: 179.99, oldPrice: 249.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble HDMI" },
        { id: 13, name: 'Xbox One Gears of War Edition', message: "édition limitée", image: '/Consoles_pic/OneGears.png', color: ['red', 'black'], rating: '4.8/5', reviews: 5145, currentPrice: 299.99, oldPrice: 449.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble HDMI et jeu Gears of War" },
        { id: 14, name: 'Xbox 360 Arcade', message: "entrée de gamme", image: '/Consoles_pic/360Arcade.png', color: ['black', 'white'], rating: '4.1/5', reviews: 2105, currentPrice: 99.99, oldPrice: 159.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble d’alimentation" },
        { id: 15, name: 'Xbox Series X Starfield Edition', message: "édition limitée", image: '/Consoles_pic/XStr.png', color: ['white', 'blue'], rating: '4.9/5', reviews: 8050, currentPrice: 699.99, oldPrice: 899.99, quantite: 1, condition: "Neuf", vendu_avec: "Câble HDMI et jeu Starfield" },
    ];
    
    
      /* le usestate pour capturer les modification des input de modele */
      const [checkeditem, setCheckedItem] = useState({
        xboxSeriesS: false,
        xboxSeriesX: false,
        xboxOne: false,
        xbox360: false,
      });

      /*la fonction qui est charger du check unique des input de modele*/
      function handleCheckboxChange(event){
        const {name,checked}=event.target
        console.log(`${name} is ${checked}`);
        if(checked){
          setCheckedItem({
            xboxSeriesS: name === "xboxSeriesS",
            xboxSeriesX: name === "xboxSeriesX",
            xboxOne: name === "xboxOne",
            xbox360: name === "xbox360", 
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
            checkeditem["xboxSeriesS"] && 
            product.name.toLowerCase().startsWith("xbox series s");
      
          // Filtrage spécifique à la série "SerieS"
          const isMacProMatched = 
            checkeditem["xboxSeriesX"] && 
            product.name.toLowerCase().startsWith("xbox series x");
      
          // Filtrage spécifique à la série "SerieZ"
          const isImacMatched = 
            checkeditem["xboxOne"] && 
            product.name.toLowerCase().startsWith("xbox One");
      
          // Filtrage spécifique à la série "SerieM"
          const isMacMiniMatched = 
            checkeditem["xbox360"] && 
            product.name.toLowerCase().startsWith("xbox 360");
      
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
                <a href="/">Accueil</a> &gt; <a href="/Consoles">Consoles</a> &gt; <span>Xbox</span>
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
                  <h1>Xbox reconditionnés</h1>
                  <p>Vous cherchez un Xbox reconditionné ? Bingo ! Nous sommes les maîtres des offres Xbox reconditionnés. Nos Xbox offrent le meilleur des deux mondes.</p>
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
                            <input type="checkbox" name="xboxSeriesS"  checked={checkeditem.xboxSeriesS} onChange={handleCheckboxChange}/>
                            Xbox Series S
                          </label>
                              
                          <label>
                            <input type="checkbox" name="xboxSeriesX" checked={checkeditem.xboxSeriesX}  onChange={handleCheckboxChange}/>
                            Xbox Series X
                          </label>
                              
                          <label>
                            <input type="checkbox" name="xboxOne"  checked={checkeditem.xboxOne} onChange={handleCheckboxChange}/>
                            Xbox One
                          </label>

                          <label>
                            <input type="checkbox" name="xbox360"  checked={checkeditem.xbox360} onChange={handleCheckboxChange}/>
                            Xbox 360
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
                            <input type="checkbox" name="silver" checked={checkeditemcolor.silver} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'silver', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Argenté
                        </label>

                        <label>
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

export default Xbox;
