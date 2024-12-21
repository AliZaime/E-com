import React, {useState,useEffect} from "react";
import './iPhone.css'
import './Samsung.css'

function Samsung() {

    const commentaire = [
        { id: 1, client: 'Marie T.', iconColor: '#94f5bc', dateAchat: '10 octobre 2024', dateCommentaire: '1 décembre 2024', PaysCommentaire: 'France', rating: '5/5', commentaire: "J'ai acheté un Samsung Galaxy S22 Ultra chez Refondeal et je suis agréablement surprise. L'état est impeccable, pas de rayures visibles, performances au top. La batterie affiche 100% de capacité et tient très bien la charge. Je recommande ce vendeur pour tout achat reconditionné.", typeSamsung: 'Galaxy S22 Ultra', couleur: 'Noir', EtatSamsung: 'Débloqué' },
        { id: 2, client: 'Kevin P.', iconColor: '#f0c14b', dateAchat: '5 septembre 2024', dateCommentaire: '18 septembre 2024', PaysCommentaire: 'France', rating: '4.8/5', commentaire: "Premier achat sur un site de reconditionné avec ce Samsung Galaxy Z Flip 4 et je suis ravi. Le téléphone est quasiment comme neuf, quelques légères marques sur la charnière mais rien de gênant. Batterie parfaite à 100%, je n'ai rien à redire, c'est une excellente alternative au neuf.", typeSamsung: 'Galaxy Z Flip 4', couleur: 'Lavande', EtatSamsung: 'Débloqué' },
        { id: 3, client: 'Sophie L.', iconColor: '#edeff3', dateAchat: '22 février 2024', dateCommentaire: '5 mars 2024', PaysCommentaire: 'France', rating: '4.5/5', commentaire: "J'ai acheté un Galaxy A54 en parfait état et il tient ses promesses. Quelques micro-rayures visibles en lumière directe, mais rien de grave pour du reconditionné. Batterie à 95%, ce qui reste correct, et le téléphone fonctionne parfaitement. Très bonne expérience globale.", typeSamsung: 'Galaxy A54', couleur: 'Vert', EtatSamsung: 'Débloqué' }
    ];

    const products = [
        { id: 1, name: 'Samsung Galaxy S23', message: "-25% vs prix neuf", image: '/samsungSmart_pic/galaxy-s23.webp', color: ['black', 'lavender', 'green', 'grey'], rating: '4.5/5', reviews: 15264, currentPrice: 599.99, oldPrice: 799.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et adaptateur secteur" },
        { id: 2, name: 'Samsung Galaxy S22 Ultra', message: "top vente", image: '/samsungSmart_pic/galaxy-s22-ultra.avif', color: ['black', 'white', 'green'], rating: '4.7/5', reviews: 12468, currentPrice: 899.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 3, name: 'Samsung Galaxy Z Flip 4', message: "top vente", image: '/samsungSmart_pic/galaxy-z-flip4.avif', color: ['violet', 'black', 'gold', 'blue'], rating: '4.3/5', reviews: 8423, currentPrice: 849.99, oldPrice: 1099.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 4, name: 'Samsung Galaxy A54', message: "top vente", image: '/samsungSmart_pic/galaxy-a54.avif', color: ['lime', 'black', 'white', 'violet'], rating: '4.2/5', reviews: 6524, currentPrice: 349.99, oldPrice: 449.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 5, name: 'Samsung Galaxy S21 FE', message: "", image: '/samsungSmart_pic/S21FE.png', color: ['lavender', 'olive', 'white'], rating: '4.4/5', reviews: 5120, currentPrice: 499.99, oldPrice: 699.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 6, name: 'Samsung Galaxy Z Fold 4', message: "", image: '/samsungSmart_pic/galaxy-z-fold4.avif', color: ['beige', 'black', 'green', 'grey'], rating: '4.6/5', reviews: 3624, currentPrice: 1599.99, oldPrice: 1999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et S Pen" },
        { id: 7, name: 'Samsung Galaxy Note 20 Ultra', message: "", image: '/samsungSmart_pic/galaxy-note20-ultra.avif', color: ['beige', 'black', 'white'], rating: '4.5/5', reviews: 10528, currentPrice: 649.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 8, name: 'Samsung Galaxy S20', message: "", image: '/samsungSmart_pic/s20.webp', color: ['blue', 'grey', 'pink', 'white'], rating: '4.3/5', reviews: 8203, currentPrice: 299.99, oldPrice: 999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 9, name: 'Samsung Galaxy A14', message: "", image: '/samsungSmart_pic/galaxy-a54.avif', color: ['black', 'silver', 'red', 'green'], rating: '4.1/5', reviews: 2150, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 10, name: 'Samsung Galaxy S23 Ultra', message: "", image: '/samsungSmart_pic/samsung-galaxy-s23-ultra.webp', color: ['black', 'green', 'lavender'], rating: '4.8/5', reviews: 5129, currentPrice: 1199.99, oldPrice: 1399.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et S Pen" },
        { id: 11, name: 'Samsung Galaxy A32', message: "-20% aujourd'hui", image: '/samsungSmart_pic/A32.avif', color: ['black', 'white', 'blue'], rating: '4.0/5', reviews: 3249, currentPrice: 219.99, oldPrice: 299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 14, name: 'Samsung Galaxy A23', message: "", image: '/samsungSmart_pic/A23.webp', color: ['orange', 'blue', 'black'], rating: '4.2/5', reviews: 2890, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 15, name: 'Samsung Galaxy A13', message: "", image: '/samsungSmart_pic/A13.png', color: ['black', 'white', 'green'], rating: '4.0/5', reviews: 1849, currentPrice: 149.99, oldPrice: 199.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 16, name: 'Samsung Galaxy M33', message: "", image: '/samsungSmart_pic/M33.png', color: ['blue', 'black'], rating: '4.1/5', reviews: 1549, currentPrice: 279.99, oldPrice: 349.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 17, name: 'Samsung Galaxy F14', message: "", image: '/samsungSmart_pic/F14.avif', color: ['green', 'black', 'violet'], rating: '4.0/5', reviews: 1045, currentPrice: 179.99, oldPrice: 229.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 18, name: 'Samsung Galaxy S10+', message: "", image: '/samsungSmart_pic/s10.png', color: ['black', 'white'], rating: '4.2/5', reviews: 3421, currentPrice: 249.99, oldPrice: 799.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 19, name: 'Samsung Galaxy A50', message: "", image: '/samsungSmart_pic/A50.webp', color: ['black', 'blue', 'white'], rating: '4.1/5', reviews: 2714, currentPrice: 229.99, oldPrice: 299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 21, name: 'Samsung Galaxy S9', message: "Économique", image: '/samsungSmart_pic/s9.png', color: ['violet', 'black'], rating: '4.1/5', reviews: 1420, currentPrice: 199.99, oldPrice: 699.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 22, name: 'Samsung Galaxy Z Flip 3', message: "Promo", image: '/samsungSmart_pic/zflip3.png', color: ['blue', 'black'], rating: '4.4/5', reviews: 2751, currentPrice: 649.99, oldPrice: 999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 26, name: 'Samsung Galaxy A02', message: "Pas cher", image: '/samsungSmart_pic/A02.png', color: ['black', 'silver'], rating: '3.9/5', reviews: 874, currentPrice: 99.99, oldPrice: 149.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 27, name: 'Samsung Galaxy S8', message: "Ancien modèle", image: '/samsungSmart_pic/s8.webp', color: ['black', 'silver'] , rating: '4.0/5', reviews: 1203, currentPrice: 149.99, oldPrice: 599.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 28, name: 'Samsung Galaxy A11', message: "Top deal", image: '/samsungSmart_pic/A11.webp', color: ['red', 'blue', 'black'], rating: '4.0/5', reviews: 1341, currentPrice: 139.99, oldPrice: 199.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 29, name: 'Samsung Galaxy J7 Prime', message: "Budget", image: '/samsungSmart_pic/J7prime.png', color: ['gold', 'black'], rating: '3.8/5', reviews: 932, currentPrice: 129.99, oldPrice: 199.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 30, name: 'Samsung Galaxy M11', message: "Promo", image: '/samsungSmart_pic/M11.webp', color: ['violet', 'black'], rating: '3.9/5', reviews: 641, currentPrice: 119.99, oldPrice: 179.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
    ];
      /* le usestate pour capturer les modification des input de modele */
      const [checkeditem, setCheckedItem] = useState({
        peuimport:false,
        serieA:false,
        serieS:false,
        serieM:false,
        serieZ:false,
        serieNote:false,
        serieJ:false,
      });

      /*la fonction qui est charger du check unique des input de modele*/
      function handleCheckboxChange(event){
        const {name,checked}=event.target
        console.log(`${name} is ${checked}`);
        if(checked){
          setCheckedItem({
            peuimport: name === "peuimport",
            serieA: name === "serieA",
            serieS: name === "serieS",
            serieM: name === "serieM",
            serieZ: name === "serieZ",
            serieNote: name === "serieNote",
            serieJ: name === "serieJ",
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
          const isSerieAMatched = 
            checkeditem["serieA"] && 
            product.name.toLowerCase().startsWith("samsung galaxy a");
      
          // Filtrage spécifique à la série "SerieS"
          const isSerieSMatched = 
            checkeditem["serieS"] && 
            product.name.toLowerCase().startsWith("samsung galaxy s");
      
          // Filtrage spécifique à la série "SerieZ"
          const isSerieZMatched = 
            checkeditem["serieZ"] && 
            product.name.toLowerCase().startsWith("samsung galaxy z");
      
          // Filtrage spécifique à la série "SerieM"
          const isSerieMMatched = 
            checkeditem["serieM"] && 
            product.name.toLowerCase().startsWith("samsung galaxy m");

          const isSerieJMatched = 
            checkeditem["serieJ"] && 
            product.name.toLowerCase().startsWith("samsung galaxy j");

          const isSerieNoteMatched =
            checkeditem["serieNote"] && 
            product.name.toLowerCase().startsWith("samsung galaxy note");
      
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
          return (isModelMatched || isSerieAMatched || isSerieSMatched || isSerieZMatched || isSerieMMatched || isSerieJMatched || isSerieNoteMatched) && isColorMatched && isPriceMatched;
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
          <div className="container">
              {/* la partie pour savoir ou on se situe */}
              <nav className="breadcrumb">
                <a href="/">Accueil</a> &gt; <a href="/Smartphones">Smartphones</a> &gt; <span>Tous les Samsung</span>
              </nav>
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
                  <h1>iPhone reconditionnés</h1>
                  <p>Vous cherchez un Samsung reconditionné ? Bingo ! Nous sommes les maîtres des offres Samsung reconditionnés. Nos Samsung offrent le meilleur des deux mondes : prix et qualité. Samsung S24 Ultra, Samsung S22, Samsung A51, Samsung M30, nous les avons tous.</p>
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
                            <input type="checkbox" name="serieS"  checked={checkeditem.serieS} onChange={handleCheckboxChange}/>
                            Serie S
                          </label>
                              
                          <label>
                            <input type="checkbox" name="serieA" checked={checkeditem.serieA}  onChange={handleCheckboxChange}/>
                            Serie A
                          </label>
                              
                          <label>
                            <input type="checkbox" name="serieZ"  checked={checkeditem.serieZ} onChange={handleCheckboxChange}/>
                            Serie Z
                          </label>
                              
                          <label>
                            <input type="checkbox" name="serieM"  checked={checkeditem.serieM} onChange={handleCheckboxChange}/>
                            Serie M
                          </label>

                          <label>
                            <input type="checkbox" name="serieJ"  checked={checkeditem.serieJ} onChange={handleCheckboxChange}/>
                            Serie J
                          </label>

                          <label>
                            <input type="checkbox" name="serieNote"  checked={checkeditem.serieNote} onChange={handleCheckboxChange}/>
                            Serie Note
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

export default Samsung;