/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react";
import './GooglePixel.css'

function GooglePixel() {

    const commentaire = [
        { 
            id: 1, 
            client: 'Emma R.', 
            iconColor: '#94f5bc', 
            dateAchat: '15 octobre 2024', 
            dateCommentaire: '5 novembre 2024', 
            PaysCommentaire: 'France', 
            rating: '5/5', 
            commentaire: "J'ai acheté un Google Pixel 8 Pro chez Refondeal et je suis totalement satisfaite. Le téléphone est comme neuf, sans rayures visibles, et fonctionne parfaitement. La batterie est à 100% et tient toute la journée sans problème. Un excellent rapport qualité-prix pour un téléphone reconditionné.", 
            typeSamsung: 'Google Pixel 8 Pro', 
            couleur: 'Noir', 
            EtatSamsung: 'Débloqué'
        },
        { 
            id: 2, 
            client: 'Lucas B.', 
            iconColor: '#f0c14b', 
            dateAchat: '1 septembre 2024', 
            dateCommentaire: '20 septembre 2024', 
            PaysCommentaire: 'France', 
            rating: '4.8/5', 
            commentaire: "Achat du Google Pixel 8, et je ne suis pas déçu. Le téléphone est quasiment neuf, aucun signe d'usure majeur, juste quelques micro-rayures invisibles à l'œil nu. La batterie tient une journée entière à pleine charge, et l'expérience Android pure est un vrai régal. Je recommande sans hésiter.", 
            typeSamsung: 'Google Pixel 8', 
            couleur: 'Blanc', 
            EtatSamsung: 'Débloqué'
        },
        { 
            id: 3, 
            client: 'Julien T.', 
            iconColor: '#edeff3', 
            dateAchat: '18 février 2024', 
            dateCommentaire: '7 mars 2024', 
            PaysCommentaire: 'France', 
            rating: '4.5/5', 
            commentaire: "J'ai acheté un Google Pixel 7 Pro et l'état est excellent. Très peu de rayures visibles et la batterie est encore à 95%, ce qui est plus que correct. L'écran OLED est magnifique et l'appareil photo fait de très belles photos. Très bonne expérience de reconditionné.", 
            typeSamsung: 'Google Pixel 7 Pro', 
            couleur: 'Vert', 
            EtatSamsung: 'Débloqué'
        }
    ];

    const products = [
        { id: 1, name: 'Google Pixel 6', message: "-25% vs prix neuf", image: '/GooglePixel_pic/GooglePixel6.png', color: ['black', 'lavender', 'green', 'grey'], rating: '4.5/5', reviews: 15264, currentPrice: 599.99, oldPrice: 799.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et adaptateur secteur" },
        { id: 2, name: 'Google Pixel 6 Pro', message: "top vente", image: '/GooglePixel_pic/GooglePixel6pro.png', color: ['black', 'white', 'green'], rating: '4.7/5', reviews: 12468, currentPrice: 899.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 3, name: 'Google Pixel 5', message: "top vente", image: '/GooglePixel_pic/GooglePixel5.png', color: ['violet', 'black', 'gold', 'blue'], rating: '4.3/5', reviews: 8423, currentPrice: 849.99, oldPrice: 1099.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 4, name: 'Google Pixel 4a', message: "top vente", image: '/GooglePixel_pic/GooglePixel4a.png', color: ['lime', 'black', 'white', 'violet'], rating: '4.2/5', reviews: 6524, currentPrice: 349.99, oldPrice: 449.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 5, name: 'Google Pixel 4', message: "", image: '/GooglePixel_pic/GooglePixel4.png', color: ['lavender', 'olive', 'white'], rating: '4.4/5', reviews: 5120, currentPrice: 499.99, oldPrice: 699.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 6, name: 'Google Pixel 3a', message: "", image: '/GooglePixel_pic/GooglePixel3a.png', color: ['beige', 'black', 'green', 'grey'], rating: '4.6/5', reviews: 3624, currentPrice: 1599.99, oldPrice: 1999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et S Pen" },
        { id: 7, name: 'Google Pixel 3 XL', message: "", image: '/GooglePixel_pic/GooglePixel3XL.png', color: ['beige', 'black', 'white'], rating: '4.5/5', reviews: 10528, currentPrice: 649.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 8, name: 'Google Pixel 2', message: "", image: '/GooglePixel_pic/GooglePixel2.png', color: ['blue', 'grey', 'pink', 'white'], rating: '4.3/5', reviews: 8203, currentPrice: 299.99, oldPrice: 999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 9, name: 'Google Pixel 2 XL', message: "", image: '/GooglePixel_pic/GooglePixel2XL.png', color: ['black', 'silver', 'red', 'green'], rating: '4.1/5', reviews: 2150, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 10, name: 'Google Pixel 7', message: "", image: '/GooglePixel_pic/GooglePixel7.png', color: ['black', 'green', 'lavender'], rating: '4.8/5', reviews: 5129, currentPrice: 1199.99, oldPrice: 1399.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et S Pen" },
        { id: 11, name: 'Google Pixel 8', message: "-20% aujourd'hui", image: '/GooglePixel_pic/GooglePixel8.png', color: ['black', 'white', 'blue'], rating: '4.0/5', reviews: 3249, currentPrice: 219.99, oldPrice: 299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 14, name: 'Google Pixel 8 pro', message: "", image: '/GooglePixel_pic/GooglePixel8pro.png', color: ['orange', 'blue', 'black'], rating: '4.2/5', reviews: 2890, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 15, name: 'Google Pixel 9', message: "", image: '/GooglePixel_pic/GooglePixel9.png', color: ['black', 'white', 'green'], rating: '4.0/5', reviews: 1849, currentPrice: 149.99, oldPrice: 199.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 16, name: 'Google Pixel 9 pro', message: "", image: '/GooglePixel_pic/GooglePixel9pro.png', color: ['blue', 'black'], rating: '4.1/5', reviews: 1549, currentPrice: 279.99, oldPrice: 349.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 17, name: 'Google Pixel Fold', message: "", image: '/GooglePixel_pic/GooglePixelFold.png', color: ['green', 'black', 'violet'], rating: '4.0/5', reviews: 1045, currentPrice: 179.99, oldPrice: 229.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 18, name: 'Google Pixel 10', message: "", image: '/GooglePixel_pic/GooglePixel9.png', color: ['black', 'white'], rating: '4.2/5', reviews: 3421, currentPrice: 249.99, oldPrice: 799.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
    ];
      /* le usestate pour capturer les modification des input de modele */
      const [checkeditem, setCheckedItem] = useState({
        peuimport:false,
        serie2:false,
        serie2XL:false,
        serie3a:false,
        serie3XL:false,
        serie4:false,
        serie4a:false,
        serie5:false,
        serie6:false,
        serie6pro:false,
        serie7:false,
        serie8:false,
        serie8pro:false,
        serie9:false,
        serie9pro:false,
        serieFold:false,
        serie10:false,
      });

      /*la fonction qui est charger du check unique des input de modele*/
      function handleCheckboxChange(event){
        const {name,checked}=event.target
        console.log(`${name} is ${checked}`);
        if(checked){
          setCheckedItem({
            peuimport: name === "peuimport",
            serie2:name === "serie2",
            serie2XL:name === "serie2XL",
            serie3a:name === "serie3a",
            serie3XL:name=== "serie3XL",
            serie4:name === "serie4",
            serie4a:name === "serie4a",
            serie5:name === "serie5",
            serie6:name === "serie6",
            serie6pro:name === "serie6pro",
            serie7:name === "serie7",
            serie8:name === "serie8",
            serie8pro:name === "serie8pro",
            serie9:name === "serie9",
            serie9pro:name === "serie9pro",
            serieFold:name === "serieFold",
            serie10:name === "serie10",
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
          const isSerie2Matched = 
            checkeditem["serie2"]&& 
            product.name.toLowerCase() === "google pixel 2";
      
          // Filtrage spécifique à la série "SerieS"
          const isSerie2XLMatched = 
            checkeditem["serie2XL"]&& 
            product.name.toLowerCase() === "google pixel 2 xl"; 
      
          // Filtrage spécifique à la série "SerieS"
          const isSerie3aMatched = 
            checkeditem["serie3a"]&& 
            product.name.toLowerCase() === "google pixel 3a";
      
          // Filtrage spécifique à la série "SerieS"
          const isSerie3XLMatched = 
            checkeditem["serie3XL"]&& 
            product.name.toLowerCase() === "google pixel 3 xl";

          // Filtrage spécifique à la série "SerieS"
          const isSerie4Matched = 
            checkeditem["serie4"]&& 
            product.name.toLowerCase() === "google pixel 4";

          // Filtrage spécifique à la série "SerieS"
          const isSerie4aMatched = 
            checkeditem["serie4a"]&& 
            product.name.toLowerCase() === "google pixel 4a";
        
          // Filtrage spécifique à la série "SerieS"
          const isSerie5Matched = 
            checkeditem["serie5"]&& 
            product.name.toLowerCase() === "google pixel 5";  
          
          // Filtrage spécifique à la série "SerieS"
          const isSerie6Matched = 
            checkeditem["serie6"]&& 
            product.name.toLowerCase() === "google pixel 6";
            
            // Filtrage spécifique à la série "SerieS"
          const isSerie6proMatched = 
          checkeditem["serie6pro"]&& 
          product.name.toLowerCase() === "google pixel 6 pro";

          // Filtrage spécifique à la série "SerieS"
          const isSerie7Matched = 
            checkeditem["serie7"]&& 
            product.name.toLowerCase() === "google pixel 7";

            // Filtrage spécifique à la série "SerieS"
          const isSerie8Matched = 
          checkeditem["serie8"]&& 
          product.name.toLowerCase() === "google pixel 8";

          // Filtrage spécifique à la série "SerieS"
          const isSerie8proMatched = 
            checkeditem["serie8pro"]&& 
            product.name.toLowerCase() === "google pixel 8 pro";

            // Filtrage spécifique à la série "SerieS"
          const isSerie9proMatched = 
          checkeditem["serie9pro"]&& 
          product.name.toLowerCase() === "google pixel 9 pro";

          // Filtrage spécifique à la série "SerieS"
          const isSerie9Matched = 
            checkeditem["serie9"]&& 
            product.name.toLowerCase() === "google pixel 9";

            // Filtrage spécifique à la série "SerieS"
          const isSerie10Matched = 
          checkeditem["serie10"]&& 
          product.name.toLowerCase() === "google pixel 10";

            // Filtrage spécifique à la série "SerieS"
          const isSerieFoldMatched = 
          checkeditem["serieFold"]&& 
          product.name.toLowerCase() === "google pixel fold";
            
      
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
          return (isModelMatched || isSerie2Matched || isSerie2XLMatched || isSerie3aMatched || isSerie3XLMatched || isSerie4Matched || isSerie4aMatched || isSerie5Matched || isSerie6Matched || isSerie6proMatched || isSerie7Matched || isSerie8Matched || isSerie8proMatched || isSerie9Matched || isSerie9proMatched || isSerie10Matched || isSerieFoldMatched) && isColorMatched && isPriceMatched;
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
                <a href="/">Accueil</a> &gt; <a href="/Smartphones">Smartphones</a> &gt; <span>Google Pixel</span>
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
                  <h1>Google Pixel reconditionnés</h1>
                  <p>Vous cherchez un Google Pixel reconditionné ? Bingo ! Nous sommes les maîtres des offres Google Pixel reconditionnés. Nos Google Pixel offrent le meilleur des deux mondes.</p>
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
                            <input type="checkbox" name="serie2"  checked={checkeditem.serie2} onChange={handleCheckboxChange}/>
                            Serie 2
                          </label>
                              
                          <label>
                            <input type="checkbox" name="serie2XL" checked={checkeditem.serie2XL}  onChange={handleCheckboxChange}/>
                            Serie 2XL
                          </label>
                              
                          <label>
                            <input type="checkbox" name="serie3a"  checked={checkeditem.serie3a} onChange={handleCheckboxChange}/>
                            Serie 3a
                          </label>
                              
                          <label>
                            <input type="checkbox" name="serie3XL"  checked={checkeditem.serie3XL} onChange={handleCheckboxChange}/>
                            Serie 3XL
                          </label>

                          <label>
                            <input type="checkbox" name="serie4"  checked={checkeditem.serie4} onChange={handleCheckboxChange}/>
                            Serie 4
                          </label>

                          <label>
                            <input type="checkbox" name="serie4a"  checked={checkeditem.serie4a} onChange={handleCheckboxChange}/>
                            Serie 4a
                          </label>

                          <label>
                            <input type="checkbox" name="serie5"  checked={checkeditem.serie5} onChange={handleCheckboxChange}/>
                            Serie 5
                          </label>

                          <label>
                            <input type="checkbox" name="serie6"  checked={checkeditem.serie6} onChange={handleCheckboxChange}/>
                            Serie 6
                          </label>

                          <label>
                            <input type="checkbox" name="serie6pro"  checked={checkeditem.serie6pro} onChange={handleCheckboxChange}/>
                            Serie 6 pro
                          </label>

                          <label>
                            <input type="checkbox" name="serie7"  checked={checkeditem.serie7} onChange={handleCheckboxChange}/>
                            Serie 7
                          </label>

                          <label>
                            <input type="checkbox" name="serie8"  checked={checkeditem.serie8} onChange={handleCheckboxChange}/>
                            Serie 8
                          </label>

                          <label>
                            <input type="checkbox" name="serie8pro"  checked={checkeditem.serie8pro} onChange={handleCheckboxChange}/>
                            Serie 8 pro
                          </label>

                          <label>
                            <input type="checkbox" name="serie9"  checked={checkeditem.serie9} onChange={handleCheckboxChange}/>
                            Serie 9
                          </label>

                          <label>
                            <input type="checkbox" name="serie9pro"  checked={checkeditem.serie9pro} onChange={handleCheckboxChange}/>
                            Serie 9 pro
                          </label>

                          <label>
                            <input type="checkbox" name="serieFold"  checked={checkeditem.serieFold} onChange={handleCheckboxChange}/>
                            Serie Fold
                          </label>

                          <label>
                            <input type="checkbox" name="serie10"  checked={checkeditem.serie10} onChange={handleCheckboxChange}/>
                            Serie 10
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

export default GooglePixel;