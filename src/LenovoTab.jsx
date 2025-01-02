import React, {useState,useEffect} from "react";
import './Hppage.css'

function LenovoTab() {
    const products = [
        {id: 1, name: 'Lenovo ThinkPad X390',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/ThinkPadX390.png',rating: '4.7/5',reviews: 15,currentPrice: 848.41,oldPrice: 1599.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 2,name: 'Lenovo IdeaPad Miix 310',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/IdeaPadMiix.png',rating: '4.5/5',reviews: 12,currentPrice: 149.00,oldPrice: 399.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 3,name: 'Lenovo Tab M10 HD Plus',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/TabM10HD.png',rating: '4.6/5',reviews: 28,currentPrice: 123.00,oldPrice: 199.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 4,name: 'Lenovo ThinkPad X380',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/ThinkPadX380.png',rating: '4.6/5',reviews: 15,currentPrice: 849.00,oldPrice: 1599.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 5,name: 'Lenovo Tab M10 Gen 2',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/M10Gen2.png',rating: '4.5/5',reviews: 23,currentPrice: 148.00,oldPrice: 199.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 6,name: 'Lenovo Tab M10 HD',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/TabM10FHD.png',rating: '4.4/5',reviews: 31,currentPrice: 145.61,oldPrice: 199.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 7,name: 'Lenovo Tab M10 Gen 3',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/TabM10Gen3.png',rating: '4.5/5',reviews: 20,currentPrice: 209.00,oldPrice: 299.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 8,name: 'Lenovo Tab M8 HD',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/TabM8HD.png',rating: '4.4/5',reviews: 31,currentPrice: 94.65,oldPrice: 159.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 9,name: 'Lenovo Tab M10 TB-X505F',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/TabM10TB-X505F.png',rating: '4.3/5',reviews: 27,currentPrice: 99.00,oldPrice: 179.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 10,name: 'Lenovo Tab M10 HD Gen 2',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/M10Gen2.png',rating: '4.5/5',reviews: 25,currentPrice: 159.00,oldPrice: 249.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"},
        {id: 11,name: 'Lenovo Tab M10 HD Gen 3',color: ['white','aqua','darkblue','red'],image: '/tablets_pic/M10Gen3.png',rating: '4.6/5',reviews: 22,currentPrice: 209.00,oldPrice: 299.00,quantite: 1,condition: "Parfait état",vendu_avec: "Câble de chargement"}
    ];
    
    const commentaire = [
        {id:1,client:'Gilles M.',iconColor:'#f0c14b',dateAchat:'8 novembre 2024',dateCommentaire:'25 novembre 2024',PaysCommentaire:'France',rating:'5/5',commentaire:"Commande en état convenable, reçu rapidement, formaté, aucune rayure à l'écran avec comme un nouveau film plastique de protection, le chargeur d'origine. Ça se voit que l'équipe de reconditionnement fait le nécessaire pour remettre en état avant de vendre.",typeIphone:'Lenovo ThinkPad X1 Tablet (3ème Gen) i7-8650U - 8Go - 256 SSD - 13.0" écran tactile',couleur:'',EtatIphone:''},
        {id:2,client:'Florentin M.',iconColor:'#edeff3',dateAchat:'11 juin 2024',dateCommentaire:'11 février 2024',PaysCommentaire:'France',rating:'4.6/5',commentaire:"Je n'ai pas besoin de récole pour donner un avis définitif mais suite à l'achat d'un lenovo thinkpad X390 yoga core i7 i8 500 592 go 8go très bien état, le vendeur LDKAZ m'a bien envoyé le produit, j'appréhendais un peu mais finalement, les performances sont plutôt bonnes, le reconditionnement et le sav sont également très bien.Conclusion : le technicien de chez LDKAZ ayant inspecté à mon sens avec soin, je suis satisfait de mon achat.",typeIphone:'Lenovo ThinkPad X390 Yoga Core i7 i8 64Gb - 512 SSD - 8 Go AZERTY Français',couleur:'',EtatIphone:''},
        {id:3,client:'Dylan F.',iconColor:'#94f5bc',dateAchat:'29 janvier 2024',dateCommentaire:'1 juillet 2024',PaysCommentaire:'France',rating:'4.6/5',commentaire:"Les produits sur Back Market sont super les prix, avec des bonnes réductions pour des technologies bien reconditionnées. En tout cas ce fut le cas pour moi.",typeIphone:'Lenovo Tab M10 Plus Gen 2 128GB - Gris - WiFi',couleur:'',EtatIphone:''}
        ]

    /* le usestate pour capturer les modification des input de modele */
          const [checkeditem, setCheckedItem] = useState({
            peuimport:false,
            Lenovo_ThinkPad_X390:false,
            Lenovo_IdeaPad_Miix:false,
            Lenovo_Tab_M10:false,
            Lenovo_ThinkPad_X380:false,
            Lenovo_Tab_M10_Gen2:false,
            Lenovo_Tab_M10_HD_:false,
            Lenovo_Tab_M10_Gen3:false,
            Lenovo_Tab_M8_HD :false,
            Lenovo_Tab_M10_TB_X505F:false,
            Lenovo_Tab_M10_HD_Gen2:false,
            Lenovo_Tab_M10_HD_Gen3:false
          });
    
          /*la fonction qui est charger du check unique des input de modele*/
          function handleCheckboxChange(event){
            const {name,checked}=event.target
            console.log(`${name} is ${checked}`);
            if(checked){
              setCheckedItem({
                peuimport: name === "peuimport",
                Lenovo_ThinkPad_X390:name === "Lenovo ThinkPad X390",
                Lenovo_IdeaPad_Miix:name === "Lenovo IdeaPad Miix",
                Lenovo_Tab_M10:name === "Lenovo Tab M10",
                Lenovo_ThinkPad_X380:name=== "Lenovo ThinkPad X380",
                Lenovo_Tab_M10_Gen2:name=== "Lenovo Tab M10 Gen2",
                Lenovo_Tab_M10_HD:name=== "Lenovo Tab M10 HD",
                Lenovo_Tab_M10_Gen3:name=== "Lenovo Tab M10 Gen3",
                Lenovo_Tab_M8_HD:name=== "Lenovo Tab M8 HD",
                Lenovo_Tab_M10_TB_X505F:name=== "Lenovo Tab M10 TB X505F",
                Lenovo_Tab_M10_HD_Gen2:name=== "Lenovo Tab M10 HD Gen 2",
                Lenovo_Tab_M10_HD_Gen3:name=== "Lenovo Tab M10 HD Gen 3",
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
            const isAnyModelChecked = Object.values(checkeditem).some((value) => value); 
            const isAnyColorChecked = Object.values(checkeditemcolor).some((value) => value);
            const isTextInputUsed = modelinputvalue.trim() !== "";
            const isTextInputColorUsed = colorinputvalue.trim() !== "";
            const isPriceSortUsed = pricesortstate !== "";
            const isPriceRangeUsed = (minprice !== 0 || maxprice !== 2000);
    
            // Si aucun filtre n'est activé, retourner tous les produits
            if (!isAnyModelChecked && !isAnyColorChecked && !isTextInputUsed && !isTextInputColorUsed && !isPriceSortUsed && !isPriceRangeUsed) {
              return products;
            }
          
            // Filtrer les produits
            let filtredproducts =  products.filter((product) => {
              // Filtrage par modèle
              const isModelMatched = 
                  isTextInputUsed 
                  ? product.name.toLowerCase().includes(modelinputvalue.toLowerCase()) 
                  : isAnyModelChecked 
                    ? Object.keys(checkeditem).some(
                        (key) => {
                            return checkeditem[key] && product.name.toLowerCase().includes(key.replace(/_/g, ' ').toLowerCase());
                        }
                      )
                    : true;
    // Aucun modèle sélectionné
          
              // Filtrage par couleur
              const isColorMatched =
                isTextInputColorUsed
                ? product.color.filter(c => c.toLowerCase().includes(colorinputvalue.toLowerCase())).length > 0
                : isAnyColorChecked
                ? product.color.some(
                  (color) => checkeditemcolor[color.toLowerCase()] === true
                )
                : true; // Aucune couleur sélectionnée
          
                const isPriceMatched =
                  (minprice === 0 || product.currentPrice >= minprice) && 
                  (maxprice === 2000 || product.currentPrice <= maxprice);
    
              return isModelMatched && isColorMatched && isPriceMatched; // Doit respecter les deux filtres
            });
    
            if(pricesortstate === "ascending"){
              filtredproducts.sort((a, b) => a.currentPrice - b.currentPrice);
            }
            else if(pricesortstate === "descending"){
              filtredproducts.sort((a, b) => b.currentPrice - a.currentPrice);
            }
            console.log(`la liste filtrer : ${filtredproducts.map((product)=>`${product.name} - ${product.currentPrice}`)}`)
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
                    <a href="/">Accueil</a> &gt; <a href="/Tablettes">Tablettes</a> &gt; <span>Lenovo</span>
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
                      <h1>Lenovo tablette reconditionnés</h1>
                      <p>Vous cherchez une Tablette Lenovo reconditionné ? Bingo ! Nous sommes les maîtres des offres Lenovo reconditionnés. Nos Lenovo offrent le meilleur des deux mondes.</p>
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
                                <input type="checkbox" name="Lenovo ThinkPad X390"  checked={checkeditem.Lenovo_ThinkPad_X390} onChange={handleCheckboxChange}/>
                                    Lenovo ThinkPad X390
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="Lenovo IdeaPad Miix" checked={checkeditem.Lenovo_IdeaPad_Miix}  onChange={handleCheckboxChange}/>
                                    Lenovo IdeaPad Miix
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="Lenovo Tab M10"  checked={checkeditem.Lenovo_Tab_M10} onChange={handleCheckboxChange}/>
                                    Lenovo Tab M10
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="Lenovo ThinkPad X380"  checked={checkeditem.Lenovo_ThinkPad_X380} onChange={handleCheckboxChange}/>
                                    Lenovo ThinkPad X380
                              </label>
                              <label>
                                <input type="checkbox" name="Lenovo Tab M10 Gen2"  checked={checkeditem.Lenovo_Tab_M10_Gen2} onChange={handleCheckboxChange}/>
                                    Lenovo Tab M10 Gen2
                              </label>
                              <label>
                                <input type="checkbox" name="Lenovo Tab M10 HD"  checked={checkeditem.Lenovo_Tab_M10_HD} onChange={handleCheckboxChange}/>
                                    Lenovo Tab M10 HD
                              </label>
                              <label>
                                <input type="checkbox" name="Lenovo Tab M10 Gen3"  checked={checkeditem.Lenovo_Tab_M10_Gen3} onChange={handleCheckboxChange}/>
                                    Lenovo Tab M10 Gen3
                              </label>
                              <label>
                                <input type="checkbox" name="Lenovo Tab M8 HD"  checked={checkeditem.Lenovo_Tab_M8_HD} onChange={handleCheckboxChange}/>
                                    Lenovo Tab M8 HD
                              </label>  
                              <label>
                                <input type="checkbox" name="Lenovo Tab M10 TB X505F"  checked={checkeditem.Lenovo_Tab_M10_TB_X505F} onChange={handleCheckboxChange}/>
                                    Lenovo Tab M10 TB X505F
                              </label> 
                              <label>
                                <input type="checkbox" name="Lenovo Tab M10 HD Gen 2"  checked={checkeditem.Lenovo_Tab_M10_HD_Gen2} onChange={handleCheckboxChange}/>
                                    Lenovo Tab M10 HD Gen 2
                              </label> 
                              <label>
                                <input type="checkbox" name="Lenovo Tab M10 HD Gen 3"  checked={checkeditem.Lenovo_Tab_M10_HD_Gen3} onChange={handleCheckboxChange}/>
                                    Lenovo Tab M10 HD Gen 3
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

export default LenovoTab;