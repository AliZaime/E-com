import React, {useState,useEffect} from "react";
import './Hppage.css'

function Nintendo(){
    const commentaire = [
        {id: 1,client: 'Lucas T.',iconColor: '#94c2f5',dateAchat: '12 octobre 2024',dateCommentaire: '25 octobre 2024',PaysCommentaire: 'France',rating: '5/5',commentaire: "La Nintendo Switch que j'ai achetée fonctionne parfaitement. La qualité de construction est excellente et les jeux Nintendo sont un vrai plaisir à jouer. La console est très polyvalente et je peux la jouer aussi bien sur mon téléviseur que dans mes déplacements.",typeNintendo: 'Nintendo Switch',couleur: 'Bleu/Rouge',EtatNintendo: 'Neuf'},
        {id: 2,client: 'Marc G.',iconColor: '#f5d94c',dateAchat: '5 septembre 2024',dateCommentaire: '15 septembre 2024',PaysCommentaire: 'France',rating: '4.7/5',commentaire: "Je suis très satisfait de ma Nintendo 3DS XL. Les jeux sont super et l'écran 3D fonctionne parfaitement. La console est solide et agréable à utiliser au quotidien.",typeNintendo: 'Nintendo 3DS XL',couleur: 'Noir',EtatNintendo: 'Reconditionné'},
        {id: 3,client: 'Carla P.',iconColor: '#e5e5e5',dateAchat: '22 janvier 2024',dateCommentaire: '10 février 2024',PaysCommentaire: 'France',rating: '4.5/5',commentaire: "La Nintendo Switch OLED est une excellente console. L'écran OLED offre des couleurs éclatantes et un contraste saisissant. Les jeux Nintendo sont toujours aussi beaux et fun à jouer.",typeNintendo: 'Nintendo Switch OLED',couleur: 'Blanc',EtatNintendo: 'Neuf'},
        {id: 4,client: 'Isabelle B.',iconColor: '#a5f594',dateAchat: '10 mars 2024',dateCommentaire: '22 mars 2024',PaysCommentaire: 'France',rating: '4.8/5',commentaire: "La Nintendo 2DS XL est une très bonne console portable. Elle est compacte, solide et les jeux Nintendo sont toujours aussi géniaux. C'est un excellent choix pour les joueurs à petit budget.",typeNintendo: 'Nintendo 2DS XL',couleur: 'Noir',EtatNintendo: 'Reconditionné'},
        {id: 5,client: 'Eliott N.',iconColor: '#f5949c',dateAchat: '30 août 2024',dateCommentaire: '12 septembre 2024',PaysCommentaire: 'France',rating: '5/5',commentaire: "Je suis très satisfait de ma Nintendo Switch OLED. L'écran est magnifique, les jeux sont superbes et la console est très agréable à utiliser. C'est une excellente console pour profiter des meilleurs jeux Nintendo.",typeNintendo: 'Nintendo Switch OLED',couleur: 'Blanc',EtatNintendo: 'Neuf'}
        ];
        
        const products = [
        {id: 1,name: 'Nintendo edition Fortnite',message: "-25% vs prix neuf",image: '/Consoles_pic/editionFortnite.png',color: ['black', 'grey', 'red'],rating: '4.5/5',reviews: 15264,currentPrice: 99.99,oldPrice: 149.99,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement, 2 manettes"},
        {id: 2,name: 'Nintendo Switch Mario Edition',message: "top vente",image: '/Consoles_pic/SwitchMario.png',color: ['purple', 'grey', 'white'],rating: '4.7/5',reviews: 12468,currentPrice: 149.99,oldPrice: 199.99,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement, 2 manettes"},
        {id: 3,name: 'Nintendo Switch Splatton Edition',message: "top vente",image: '/Consoles_pic/SwitchSplatoon.png',color: ['green', 'blue', 'black'],rating: '4.3/5',reviews: 8423,currentPrice: 199.99,oldPrice: 299.99,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement, 2 manettes"},
        {id: 4,name: 'Nintendo Wii u premium',message: "top vente",image: '/Consoles_pic/WiiUpremium.png',color: ['purple', 'black', 'silver', 'white'],rating: '4.2/5',reviews: 6524,currentPrice: 149.99,oldPrice: 249.99,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement, 2 manettes"},
        {id: 5,name: 'Nintendo Wii',message: "",image: '/Consoles_pic/WiiSuperSmash.png',color: ['white', 'black', 'red'],rating: '4.4/5',reviews: 5120,currentPrice: 99.99,oldPrice: 199.99,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement, 2 manettes"},
        {id: 6,name: 'Nintendo Switch',message: "",image: '/Consoles_pic/switch.avif',color: ['blue', 'red', 'grey'],rating: '4.6/5',reviews: 3624,currentPrice: 299.99,oldPrice: 399.99,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement, 2 manettes"},
        {id: 7,name: 'Nintendo Switch Lite',message: "",image: '/Consoles_pic/switchlite.png',color: ['yellow', 'turquoise', 'grey'],rating: '4.5/5',reviews: 10528,currentPrice: 199.99,oldPrice: 249.99,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 8,name: 'Nintendo Switch OLED',message: "",image: '/Consoles_pic/switchloed.png',color: ['white', 'black'],rating: '4.3/5',reviews: 8203,currentPrice: 349.99,oldPrice: 449.99,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement, 2 manettes"}
        ];
        
    /* le usestate pour capturer les modification des input de modele */
          const [checkeditem, setCheckedItem] = useState({
            peuimport:false,
            editionFortnite:false,
            EditionMario:false,
            SplattonEdition:false,
            WiiUPremium:false,
            Wii:false,
            Switch:false,
            SwitchLite:false,
            SwitchOled:false
          });
    
          /*la fonction qui est charger du check unique des input de modele*/
          function handleCheckboxChange(event){
            const {name,checked}=event.target
            console.log(`${name} is ${checked}`);
            if(checked){
              setCheckedItem({
                peuimport: name === "peuimport",
                editionFortnite:name === "edition Fortnite",
                EditionMario:name === "Edition Mario",
                SplattonEdition:name === "Splatton Edition",
                WiiUPremium:name === "Wii U Premium",
                Wii:name === "Wii",
                Switch:name === "Switch",
                SwitchLite:name === "Switch Lite",
                SwitchOled:name === "Switch Oled",
                });
              }
              else{
                setCheckedItem((prevState) => ({
                  ...prevState,
                  [name]: false,
                  peuimport: name !== "peuimport" ? prevState.peuimport : false,
                  editionFortnite: name !== "edition Fortnite" ? prevState.editionFortnite : false,
                  EditionMario: name !== "Edition Mario" ? prevState.EditionMario : false,
                  SplattonEdition: name !== "Splatton Edition" ? prevState.SplattonEdition : false,
                  WiiUPremium: name !== "Wii U Premium" ? prevState.WiiUPremium : false,
                  Wii: name !== "Wii" ? prevState.Wii : false,
                  Switch: name !== "Switch" ? prevState.Switch : false,
                  SwitchLite: name !== "Switch Lite" ? prevState.SwitchLite : false,
                  SwitchOled: name !== "Switch Oled" ? prevState.SwitchOled : false,
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
              const iseditionFortniteMatched = 
                checkeditem["editionFortnite"]&& 
                product.name.toLowerCase() === "Nintendo edition Fortnite";
          
              // Filtrage spécifique à la série "SerieS"
              const isMarioMatched = 
                checkeditem["EditionMario"]&& 
                product.name.toLowerCase() === 'Nintendo Switch Mario Edition'; 
          
              // Filtrage spécifique à la série "SerieS"
              const issplattonMatched = 
                checkeditem["SplattonEdition"]&& 
                product.name.toLowerCase() === "Nintendo Switch Splatton Edition";
    
                // Filtrage spécifique à la série "SerieA"
              const iswiipremiumMatched = 
              checkeditem["WiiUPremium"]&& 
              product.name.toLowerCase() === "Nintendo Wii u premium";
        
            // Filtrage spécifique à la série "SerieS"
            const iswiiMatched = 
              checkeditem["Wii"]&& 
              product.name.toLowerCase() === "Nintendo Wii"; 
          
            const isSwitchMatched = 
              checkeditem["Switch"]&& 
              product.name.toLowerCase() === "Nintendo Switch"; 

            const isSwitchLiteMatched = 
              checkeditem["SwitchLite"]&& 
              product.name.toLowerCase() === "Nintendo Switch Lite"; 

            const isSwitchOledMatched = 
              checkeditem["SwitchOled"]&& 
              product.name.toLowerCase() === "Nintendo Switch OLED"; 
                
          
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
              return (isModelMatched || iseditionFortniteMatched || isMarioMatched || issplattonMatched || iswiipremiumMatched || iswiiMatched || isSwitchMatched || isSwitchLiteMatched || isSwitchOledMatched) && isColorMatched && isPriceMatched;
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
                    <a href="/">Accueil</a> &gt; <a href="/Consoles">Consoles</a> &gt; <span>Nintendo</span>
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
                      <h1>Nintendo reconditionnés</h1>
                      <p>Vous cherchez une Nintendo reconditionné ? Bingo ! Nous sommes les maîtres des offres Nintendo reconditionnés. Nos Nintendo offrent le meilleur des deux mondes.</p>
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
                                <input type="checkbox" name="edition Fortnite"  checked={checkeditem.editionFortnite} onChange={handleCheckboxChange}/>
                                Switch Edition Fortnite
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="Edition Mario" checked={checkeditem.EditionMario}  onChange={handleCheckboxChange}/>
                                Switch Mario Edition
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="Splatton Edition"  checked={checkeditem.SplattonEdition} onChange={handleCheckboxChange}/>
                                Switch Splatton Edition
                              </label>
    
                              <label>
                                <input type="checkbox" name="Wii U Premium"  checked={checkeditem.WiiUPremium} onChange={handleCheckboxChange}/>
                                Wii Premium
                              </label>
    
                              <label>
                                <input type="checkbox" name="Wii"  checked={checkeditem.Wii} onChange={handleCheckboxChange}/>
                                Wii
                              </label>

                              <label>
                                <input type="checkbox" name="Switch"  checked={checkeditem.Switch} onChange={handleCheckboxChange}/>
                                Switch
                              </label>

                              <label>
                                <input type="checkbox" name="Switch Lite"  checked={checkeditem.SwitchLite} onChange={handleCheckboxChange}/>
                                Switch Lite
                              </label>

                              <label>
                                <input type="checkbox" name="Switch Oled"  checked={checkeditem.SwitchOled} onChange={handleCheckboxChange}/>
                                Switch Oled
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
                                <p>{item.typeNintendo} - {item.couleur} - {item.EtatNintendo}</p>
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

export default Nintendo