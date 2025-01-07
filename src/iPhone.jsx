import React, {useState,useEffect} from "react";
import './iPhone.css'

function IPhone() {

    const commentaire = [
      {id:1,client:'Gilles M.',iconColor:'#f0c14b',dateAchat:'8 novembre 2024',dateCommentaire:'25 novembre 2024',PaysCommentaire:'France',rating:'5/5',commentaire:"Apple Iphone 12 64Go avec option batterie neuve acheté chez AxoreLe téléphone est effectivement comme neuf, pas de rayures sur l'écran, vitre arrière changée, pas originale mais neuve. Une marque sur la tranche en alu du smartphone entendable pour du reconditionné.A priori téléphone issu du marché américain.En termes de performances tout est ok, la batterie neuve en capacité 100% semble convenir à l'usage.Au final vendeur à recommander.",typeIphone:'iPhone 12 64Go',couleur:'Blanc',EtatIphone:'Débloqué'},
      {id:2,client:'Florentin M.',iconColor:'#edeff3',dateAchat:'11 juin 2024',dateCommentaire:' 11 février 2024',PaysCommentaire:'France',rating:'4.6/5',commentaire:"L'iPhone est super, parfaitement fonctionnel. Il est en parfait état, la coque comme l'écran. La batterie a été remplacée et l'iPhone indique une capacité de batterie à 100%. Cependant, force est de constater que l'autonomie de ce smartphone avec batterie reconditionnée est assez faible. En effet, je suis obligé de le recharger 2 fois par jour pour un temps d'écran moyen de 1h45. Ma conjointe possède un iPhone 11 non reconditionné acheté chez Apple, aux caractéristiques identiques avec batterie d'origine (son iPhone indique une capacité de 80%) et pourtant son autonomie est bien plus importante pour un temps d'utilisation similaire.",typeIphone:'iPhone 11 64Go',couleur:'Noir',EtatIphone:'Débloqué'},      
      {id:3,client:'Dylan F.',iconColor:'#94f5bc',dateAchat:'29 janvier 2024',dateCommentaire:'1 juillet 2024',PaysCommentaire:'France',rating:'4.6/5',commentaire:"Ma première fois sur Back Market et premier achat d'un smartphone reconditionnés. Je suis vraiment surpris de la qualité de mon iphone 11 pro Max 64Go - Vert Nuit acheter en état-correct, j'ai l'impression d'avoir un iphone neuf batterie à 100% quasi aucune rayure. Un grand merci à Back Market, il m'ont convaincu sur mon avis du reconditionnés, pour moi fini l'achat du neuf en plus je réalise un geste pour la planète. 🌍♻",typeIphone:'iPhone 11 Pro Max 64Go',couleur:'Vert Nuit',EtatIphone:'Débloqué'}

    ]


    const products = [
        { id: 1, name: 'iPhone 13',message:"-41% vs prix neuf" ,image: '/images/iphone13.png', color: ['aqua','darkblue','red'], rating: '4.4/5', reviews: 21264, currentPrice: 441.40, oldPrice: 749.0 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 2, name: 'iPhone 15',message:"top vente" , image: '/images/iphone15_1.png', color: ['yellow','white','lightblue','grey'], rating: '4.6/5', reviews: 3242, currentPrice: 706.93, oldPrice: 869.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 3, name: 'iphone 11',message:"top vente" , image: '/images/iphone11.png', color: ['black','grey','red'], rating: '4.1/5', reviews: 13121, currentPrice: 239.42, oldPrice: 589.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 4, name: 'iPhone 12',message:"top vente" , image: '/images/iphone12.png', color: ['grey','lightblue','red','white'], rating: '4.3/5', reviews: 20500, currentPrice: 341.81, oldPrice: 859.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 5, name: 'iPhone SE',message:"" , image: '/images/iphoneSE_1.png', color: ['red','black','white'], rating: '4.2/5', reviews: 5187, currentPrice: 130.19, oldPrice: 319.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 6, name: 'iPhone 14',message:"" , image: '/images/iphone14_1.png', color: ['lightblue','black','grey','white'], rating: '4.4/5', reviews: 3561, currentPrice: 529.00, oldPrice: 749.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 7, name: 'iPhone 11 Pro',message:"" , image: '/images/iphone11_1.png', color: ['black','grey','red'], rating: '4.2/5', reviews: 2187, currentPrice: 114.00, oldPrice: 299.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 8, name: 'iPhone 14 Pro',message:"" , image: '/images/iphone14Pro.png', color: ['grey','black','white','darkblue'], rating: '4.4/5', reviews: 4502, currentPrice: 651.50, oldPrice: 1329.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 9, name: 'iphone 13 Mini',message:"" , image: '/images/iphone13Mini.png', color: ['white','lightblue','black','grey'], rating: '4.3/5', reviews: 5249, currentPrice: 392.79, oldPrice: 809.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 11, name: 'iPhone 15 Pro',message:"" , image: '/images/iphone15Pro.png', color: ['white','grey','darkblue','black'], rating: '4.4/5', reviews: 1497, currentPrice: 911.43, oldPrice: 1229.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
      ];
      /* le usestate pour capturer les modification des input de modele */
      const [checkeditem, setCheckedItem] = useState({
        iphone11:false,
        iphone11pro:false,
        iphone12:false,
        iphone13:false,
        iphone13mini:false,
        iphone14:false,
        iphone14pro:false,
        iphone15:false,
        iphonese:false
      });

      /*la fonction qui est charger du check unique des input de modele*/
      function handleCheckboxChange(event){
        const {name,checked}=event.target
        console.log(`${name} is ${checked}`);
        if(checked){
          setCheckedItem({
            iphone11:name === "iphone11",
            iphone11pro:name === "iphone11pro",
              iphone12:name === "iphone12",
              iphone13:name === "iphone13",
              iphone13mini:name === "iphone13mini",
              iphone14:name === "iphone14",
              iphone14pro:name === "iphone14pro",
              iphone15:name === "iphone15",
              iphonese:name === "iphonese"
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
                      return checkeditem[key] && product.name.toLowerCase().replace(/\s+/g, '').replace(/[^\w\s]/gi, '').includes(key.toLowerCase());
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
          {/* la partie pour savoir ou on se situe */}
              <nav className="breadcrumbb">
                <a href="/">Accueil</a> &gt; <a href="/Smartphones">Smartphones</a> &gt; <span>Tous les iPhones</span>
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
                <div className="sometextt">
                  <h1>iPhone reconditionnés</h1>
                  <p>Vous cherchez un iPhone reconditionné ? Bingo ! Nous sommes les maîtres des offres d'iPhone reconditionnés. Nos iPhone offrent le meilleur des deux mondes : prix et qualité. iPhone 12, iPhone 11, iPhone XR, iPhone XS Max, nous les avons tous.</p>
                </div>
                {/* le filtre de trie par prix croissant ou décroissant */}
                <div class="sort-container">
                  <label for="sort-select" className="a12">Trier</label>
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
                            <input type="checkbox" name="iphone11"  checked={checkeditem.iphone11} onChange={handleCheckboxChange}/>
                            iPhone 11
                          </label>
                              
                          <label>
                            <input type="checkbox" name="iphone11pro" checked={checkeditem.iphone11pro}  onChange={handleCheckboxChange}/>
                            iPhone 11 Pro
                          </label>
                              
                          <label>
                            <input type="checkbox" name="iphone12"  checked={checkeditem.iphone12} onChange={handleCheckboxChange}/>
                            iPhone 12
                          </label>
                              
                          <label>
                            <input type="checkbox" name="iphone13mini"  checked={checkeditem.iphone13mini} onChange={handleCheckboxChange}/>
                            iPhone 13 mini
                          </label>
                              
                          <label>
                            <input type="checkbox" name="iphone13" checked={checkeditem.iphone13} onChange={handleCheckboxChange}/>
                            iPhone 13
                          </label>
                              
                          <label>
                            <input type="checkbox" name="iphone14"  checked={checkeditem.iphone14} onChange={handleCheckboxChange}/>
                            iPhone 14  
                          </label>
                              
                          <label>
                            <input type="checkbox" name="iphone14pro"  checked={checkeditem.iphone14pro} onChange={handleCheckboxChange}/>
                            iPhone 14 Pro
                          </label>
                              
                          <label>
                            <input type="checkbox" name="iphone15" checked={checkeditem.iphone15} onChange={handleCheckboxChange}/>
                            iPhone 15
                          </label>
                              
                          <label>
                            <input type="checkbox" name="iphonese"  checked={checkeditem.iphonese} onChange={handleCheckboxChange}/>
                            iPhone SE
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
                            <div className="messagearea">
                                {item.message && (<h4 className="phonemessage">{item.message}</h4>)}
                            </div>
                            <div className="phoneinfoarea">
                              <div className="imageandcolors">
                                <img src={item.image} alt="" className="phoneimage"/>
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
                              <p >{item.client}</p>
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

export default IPhone;