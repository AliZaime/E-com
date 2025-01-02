import React, {useState,useEffect} from "react";
import './Hppage.css'

function Hppage(){
  const commentaire= [
    {
    id: 1,
    client: 'Amélie L.',
    iconColor: '#f0c14b',
    dateAchat: '15 novembre 2024',
    dateCommentaire: '22 novembre 2024',
    PaysCommentaire: 'France',
    rating: '5/5',
    commentaire: "J'ai acheté un HP Spectre x360 13 reconditionné et je suis vraiment satisfaite ! Le PC est comme neuf, aucune rayure ni défaut. Les performances sont au rendez-vous et la batterie tient très bien la charge. Le service après-vente a également été très réactif lors d'une petite question que j'ai eu. Je recommande sans hésiter !",
    typePc: 'HP Spectre x360 13',
    couleur: '',
    EtatPc: 'Reconditionné'
    },
    {
    id: 2,
    client: 'Julien M.',
    iconColor: '#edeff3',
    dateAchat: '3 octobre 2024',
    dateCommentaire: '18 octobre 2024',
    PaysCommentaire: 'France',
    rating: '4.5/5',
    commentaire: "Très bon achat d'un HP Pavilion 15 reconditionné. Le PC est en excellent état, la configuration est adaptée à mes besoins. Seul bémol, la batterie ne tient pas aussi longtemps que je l'aurais souhaité, mais cela reste acceptable. Le service après-vente a été très réactif lorsque j'ai eu une question. Je suis globalement satisfait de mon achat.",
    typePc: 'HP Pavilion 15',
    couleur: '',
    EtatPc: 'Reconditionné'
    },
    {
    id: 3,
    client: 'Émilie C.',
    iconColor: '#94f5bc',
    dateAchat: '27 août 2024',
    dateCommentaire: '5 septembre 2024',
    PaysCommentaire: 'France',
    rating: '4.2/5',
    commentaire: "J'ai acheté un HP Envy x360 reconditionné et dans l'ensemble je suis satisfaite. Le PC est en bon état, les performances sont correctes. Cependant, j'ai remarqué quelques petites rayures sur le châssis, rien de grave mais qui m'a un peu déçue. Le service après-vente a été efficace lorsque j'ai eu une question. Je recommande ce produit, surtout pour le rapport qualité/prix.",
    typePc: 'HP Envy x360',
    couleur: '',
    EtatPc: 'Reconditionné'
    }
    ]
    

    const products = [
        { id: 1, name: 'HP EliteBook 850 G5 15',image: '/laptops_pic/hpelitbook850.png',color: ['white','aqua','darkblue','red'], rating: '4.6/5', reviews: 14, currentPrice: 425.01, oldPrice: 1900.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 2, name: 'HP EliteBook 840 G3 14', image: '/laptops_pic/hpelitebook840.png',color: ['white','aqua','darkblue','red'], rating: '4.3/5', reviews: 45, currentPrice: 211.46, oldPrice: 826.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 3, name: 'HP EliteBook 840 G5 14', image: '/laptops_pic/hpelitebook840G5.png',color: ['white','aqua','darkblue','red'], rating: '3.7/5', reviews: 12, currentPrice: 263.42, oldPrice: 1251.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 4, name: 'HP EliteBook 830 G7 13', image: '/laptops_pic/hpelitbook830.png',color: ['white','aqua','darkblue','red'], rating: '5/5', reviews: 10, currentPrice: 389.00, oldPrice: 1899.99 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 5, name: 'HP 255 G9 15 Ryzen 3', image: '/laptops_pic/hp255G9.png',color: ['white','aqua','darkblue','red'], rating: '4.8/5', reviews: 23, currentPrice: 400.19, oldPrice: 700.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 6, name: 'HP ZBook 15 G3 15', image: '/laptops_pic/hpzbook15.png',color: ['white','aqua','darkblue','red'], rating: '4.1/5', reviews: 14, currentPrice: 495.95, oldPrice: 3499.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 7, name: 'HP ZBook 17 G3 17', image: '/laptops_pic/hpzbook17.png',color: ['white','aqua','darkblue','red'], rating: '4/5', reviews: 21, currentPrice: 639.00, oldPrice: 1494.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
    ];
    const [checkeditem, setCheckedItem] = useState({
            peuimport:false,
            HP_EliteBook_850_G5:false,
            HP_EliteBook_840_G3:false,
            HP_EliteBook_840_G5:false,
            HP_EliteBook_830_G7:false,
            HP_255_G9_15:false,
            HP_ZBook_15_G3:false,
            HP_ZBook_17_G3:false
          });
    
          /*la fonction qui est charger du check unique des input de modele*/
          function handleCheckboxChange(event){
            const {name,checked}=event.target
            console.log(`${name} is ${checked}`);
            if(checked){
              setCheckedItem({
                peuimport:name === "peuimport",
                HP_EliteBook_850_G5:name === "HP_EliteBook_850_G5",
                HP_EliteBook_840_G3:name === "HP_EliteBook_840_G3",
                HP_EliteBook_840_G5:name === "HP_EliteBook_840_G5",
                HP_EliteBook_830_G7:name === "HP_EliteBook_830_G7",
                HP_255_G9_15:name === "HP_255_G9_15",
                HP_ZBook_15_G3:name === "HP_ZBook_15_G3",
                HP_ZBook_17_G3:name === "HP_ZBook_17_G3",
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
          
          const [colorinputvalue,setColorInputValue] = useState("");
                function handleColorInputValue(event) {
                  setColorInputValue(event.target.value);
                }
          
          /* le usestate pour capturer les modification des input de couleur */
                const [checkeditemcolor, setCheckedItemcolor] = useState({
                      white:false,
                      lightblue:false,
                      darkblue:false,
                      red:false,
                      yellow:false,
                      grey:false,
                      aqua:false,
                      black:false
                });
                /* la function qui est charger du check unique des input de couleur */
                function handleCheckboxColorChange(event){
                  const {name,checked}=event.target
                  console.log(`${name} is ${checked}`);
                  if(checked){
                    setCheckedItemcolor({
                      white:name === "white",
                      lightblue:name === "lightblue",
                      darkblue:name === "darkblue",
                      red:name === "red",
                      yellow:name === "yellow",
                      grey:name === "grey",
                      aqua:name === "aqua",
                      black:name === "black"
                    });
                  }
                  else{
                    setCheckedItemcolor((prevState) => ({
                      ...prevState,
                      [name]: false,
                    }));
                  }
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
                          return checkeditem[key] && product.name.toLowerCase().includes(key.replace(/_/g, ' ').toLowerCase());                        }
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
              {/* la partie pour savoir ou on se situe */}
                  <nav className="breadcrumb">
                    <a href="/">Accueil</a> &gt; <a href="/Laptops">Laptops</a> &gt; <span>Tous les HP</span>
                  </nav>
              <div className="container">
                  
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
                      <p>Vous cherchez un HP reconditionné ? Bingo ! Nous sommes les maîtres des offres de HP reconditionnés. Nos HP offrent le meilleur des deux mondes : prix et qualité. HP Pavillon, HP EliteBook, HP ZBook, nous les avons tous.</p>
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
                                <input type="checkbox" name="HP_EliteBook_850_G5"  checked={checkeditem.HP_EliteBook_850_G5} onChange={handleCheckboxChange}/>
                                HP EliteBook 850 G5
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="HP_EliteBook_840_G3" checked={checkeditem.HP_EliteBook_840_G3}  onChange={handleCheckboxChange}/>
                                HP EliteBook 840 G3
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="HP_EliteBook_840_G5"  checked={checkeditem.HP_EliteBook_840_G5} onChange={handleCheckboxChange}/>
                                HP EliteBook 840 G5
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="HP_EliteBook_830_G7"  checked={checkeditem.HP_EliteBook_830_G7} onChange={handleCheckboxChange}/>
                                HP EliteBook 830 G7
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="HP_255_G9_15" checked={checkeditem.HP_255_G9_15} onChange={handleCheckboxChange}/>
                                HP 255 G9 15
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="HP_ZBook_15_G3"  checked={checkeditem.HP_ZBook_15_G3} onChange={handleCheckboxChange}/>
                                HP ZBook 15 G3 
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="HP_ZBook_17_G3"  checked={checkeditem.HP_ZBook_17_G3} onChange={handleCheckboxChange}/>
                                HP ZBook 17 G3
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
                            <input type="checkbox" name='white'  checked={checkeditemcolor.white}  onChange={handleCheckboxColorChange}/>
                            <div className="colorinput" style={{backgroundColor: 'white',width:'20px',height:'20px',borderRadius:'50%',border:'1px solid black'}}></div>
                            Blanc
                          </label>
                              
                          <label>
                            <input type="checkbox" name="lightblue"  checked={checkeditemcolor.lightblue} onChange={handleCheckboxColorChange}/>
                            <div className="colorinput" style={{backgroundColor: 'lightblue',width:'20px',height:'20px',borderRadius:'50%',border:'1px solid black'}}></div>
                            Bleu Clair
                          </label>
                              
                          <label>
                            <input type="checkbox" name="darkblue" checked={checkeditemcolor.darkblue}  onChange={handleCheckboxColorChange}/>
                            <div className="colorinput" style={{backgroundColor: 'darkblue',width:'20px',height:'20px',borderRadius:'50%',border:'1px solid black'}}></div>
                            Bleu Nuit
                          </label>
                              
                          <label>
                            <input type="checkbox" name="red"  checked={checkeditemcolor.red} onChange={handleCheckboxColorChange}/>
                            <div className="colorinput" style={{backgroundColor: 'red',width:'20px',height:'20px',borderRadius:'50%',border:'1px solid black'}}></div>
                            Rouge
                          </label>
                              
                          <label>
                            <input type="checkbox" name="yellow"  checked={checkeditemcolor.yellow} onChange={handleCheckboxColorChange}/>
                            <div className="colorinput" style={{backgroundColor: 'yellow',width:'20px',height:'20px',borderRadius:'50%',border:'1px solid black'}}></div>
                            Jaune
                          </label>
                              
                          <label>
                            <input type="checkbox" name="grey" checked={checkeditemcolor.grey} onChange={handleCheckboxColorChange}/>
                            <div className="colorinput" style={{backgroundColor: 'grey',width:'20px',height:'20px',borderRadius:'50%',border:'1px solid black'}}></div>
                            Gris
                          </label>
                              
                          <label>
                            <input type="checkbox" name="aqua"  checked={checkeditemcolor.aqua} onChange={handleCheckboxColorChange}/>
                            <div className="colorinput" style={{backgroundColor: 'aqua',width:'20px',height:'20px',borderRadius:'50%',border:'1px solid black'}}></div>
                            Bleu Marine 
                          </label>
                              
                          <label>
                            <input type="checkbox" name="black"  checked={checkeditemcolor.black} onChange={handleCheckboxColorChange}/>
                            <div className="colorinput" style={{backgroundColor: 'black',width:'20px',height:'20px',borderRadius:'50%',border:'1px solid black'}}></div>
                            Black
                          </label>
                        {/* fermeture de la div des input des couleurs */}
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
                                    <img src={item.image} alt="" className="phoneimage"/>
                                  </div>
                                  <div className="phoneinfo">
                                    <h2 className="phoneName">{item.name}</h2>
                                    <p className="ratingreviews">⭐ {item.rating} ({item.reviews})</p>
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

export default Hppage