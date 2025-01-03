import React, {useState,useEffect} from "react";


function AllLaptops() {
    const commentaire = [
        { id: 1, client: 'Alice L.', iconColor: '#94f5bc', dateAchat: '15 novembre 2024', dateCommentaire: '5 décembre 2024', PaysCommentaire: 'France', rating: '5/5', commentaire: "J'ai acheté un MacBook Air M1 et il est impeccable. Performances au rendez-vous, aucune rayure visible. Batterie tient parfaitement la journée. Très satisfaite de mon achat reconditionné !", typeProduit: 'MacBook Air M1', couleur: 'Argent', EtatProduit: 'Débloqué' },
        { id: 2, client: 'Marc P.', iconColor: '#f0c14b', dateAchat: '10 octobre 2024', dateCommentaire: '15 octobre 2024', PaysCommentaire: 'Belgique', rating: '4.8/5', commentaire: "Premier achat reconditionné avec un MacBook Pro M2 et je suis ravi. L'ordinateur est quasi comme neuf, seul le chargeur semblait légèrement usé. Très bon rapport qualité-prix !", typeProduit: 'MacBook Pro M2', couleur: 'Gris sidéral', EtatProduit: 'Débloqué' },
        { id: 3, client: 'Sophie G.', iconColor: '#edeff3', dateAchat: '20 juin 2024', dateCommentaire: '5 juillet 2024', PaysCommentaire: 'France', rating: '4.6/5', commentaire: "iMac 24 pouces reçu rapidement et très bien emballé. L'écran est impeccable, le clavier et la souris étaient inclus et en très bon état. Une super alternative au neuf !", typeProduit: 'iMac 24 pouces', couleur: 'Bleu', EtatProduit: 'Débloqué' },
        { id: 4, client: 'Jean D.', iconColor: '#b9c4c9', dateAchat: '5 mars 2024', dateCommentaire: '20 mars 2024', PaysCommentaire: 'Luxembourg', rating: '4.9/5', commentaire: "Mac mini M1 en parfait état. Silencieux et puissant, parfait pour mes besoins de montage vidéo. Livraison rapide et bien protégée. Je recommande !", typeProduit: 'Mac mini M1', couleur: 'Argent', EtatProduit: 'Débloqué' },
        { id: 5, client: 'Alice M.', iconColor: '#94c2f5', dateAchat: '12 octobre 2024', dateCommentaire: '25 octobre 2024', PaysCommentaire: 'France', rating: '5/5', commentaire: "J'ai acheté un Dell Latitude 7420 reconditionné et je suis ravie de la qualité. L'ordinateur est comme neuf, sans aucune rayure. Il fonctionne parfaitement pour mes besoins professionnels, et la batterie tient bien toute la journée. Un excellent rapport qualité-prix.", typeDell: 'Latitude 7420', couleur: 'Noir', EtatDell: 'Reconditionné'},
        { id: 6, client: 'Martin C.', iconColor: '#f5d94c', dateAchat: '5 septembre 2024', dateCommentaire: '15 septembre 2024', PaysCommentaire: 'France', rating: '4.7/5', commentaire: "Le Dell Inspiron 15 que j'ai acheté est presque parfait. Quelques traces d'utilisation mineures, mais rien de gênant. Les performances sont excellentes pour un usage quotidien, et la batterie tient une bonne partie de la journée. Je recommande vivement pour ceux qui cherchent un ordinateur fiable.", typeDell: 'Inspiron 15', couleur: 'Argent', EtatDell: 'Reconditionné'},
        { id: 7, client: 'Sophie L.', iconColor: '#e5e5e5', dateAchat: '22 janvier 2024', dateCommentaire: '10 février 2024', PaysCommentaire: 'France', rating: '4.5/5', commentaire: "Très satisfait de mon Dell Vostro 3500. Il y avait quelques micro-rayures sur la coque, mais rien qui n'affecte les performances. Il démarre rapidement et exécute les applications bureautiques sans problème. Bon choix pour un ordinateur reconditionné.", typeDell: 'Vostro 3500', couleur: 'Gris', EtatDell: 'Reconditionné'},
        { id: 8, client: 'Jean-Paul R.', iconColor: '#a5f594', dateAchat: '10 mars 2024', dateCommentaire: '22 mars 2024', PaysCommentaire: 'France', rating: '4.8/5', commentaire: "Le Dell Precision 5550 que j'ai acheté dépasse mes attentes. Il est parfait pour le montage vidéo et les applications de conception graphique. Le processeur est rapide, et la qualité de l'écran est impressionnante. Très bon achat.", typeDell: 'Precision 5550', couleur: 'Noir', EtatDell: 'Reconditionné'},
        { id: 9, client: 'Claire V.', iconColor: '#f5949c', dateAchat: '30 août 2024', dateCommentaire: '12 septembre 2024', PaysCommentaire: 'France',  rating: '5/5', commentaire: "Je suis très satisfaite de mon Dell XPS 15. Bien que reconditionné, il est comme neuf et fonctionne parfaitement. La batterie tient très bien, et l'écran est tout simplement magnifique. Je recommande fortement ce modèle pour ceux qui recherchent un ordinateur portable performant.", typeDell: 'XPS 15', couleur: 'Argent', EtatDell: 'Reconditionné'}
    ];

    const products = [
        { id: 28, name: 'Mac Mini 2018', message: "Budget", image: '/laptops_pic/mini2018.webp', color: ['silver'], rating: '4.1/5', reviews: 6321, currentPrice: 499.99, oldPrice: 799.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble d'alimentation" },
        { id: 19, name: 'Mac Mini M2 Pro', message: "", image: '/laptops_pic/mini2022.webp', color: ['silver'], rating: '4.9/5', reviews: 4231, currentPrice: 1299.99, oldPrice: 1499.99, quantite: 1, condition: "Comme neuf", vendu_avec: "Câble d'alimentation" },
        { id: 6, name: 'MacBook Pro 16 M2 Max', message: "", image: '/laptops_pic/prom2.png', color: ['silver', 'space gray'], rating: '5.0/5', reviews: 5240, currentPrice: 3499.99, oldPrice: 4299.99, quantite: 1, condition: "Comme neuf", vendu_avec: "Chargeur MagSafe et câble USB-C" },
        { id: 2, name: 'MacBook Pro 14 M2', message: "top vente", image: '/laptops_pic/prom2.png', color: ['silver', 'space gray'], rating: '4.9/5', reviews: 15231, currentPrice: 1899.99, oldPrice: 2499.99, quantite: 1, condition: "Parfait état", vendu_avec: "Chargeur MagSafe et câble USB-C" },
        { id: 31, name: 'dell xps 13', message: "-25% vs prix neuf", image: '/laptops_pic/dellxps13.jpg', color: ['black', 'lavender', 'green', 'grey'], rating: '4.5/5', reviews: 15264, currentPrice: 599.99, oldPrice: 799.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 11, name: 'MacBook Air M2', message: "-15% aujourd'hui", image: '/laptops_pic/airm2.webp', color: ['midnight', 'starlight'], rating: '4.9/5', reviews: 10325, currentPrice: 1149.99, oldPrice: 1349.99, quantite: 1, condition: "Comme neuf", vendu_avec: "Chargeur MagSafe et câble USB-C" },
        { id: 34, name: 'dell xps 17', message: "top vente", image: '/laptops_pic/dellxps17.jpg', color: ['lime', 'black', 'white', 'violet'], rating: '4.2/5', reviews: 6524, currentPrice: 349.99, oldPrice: 449.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 8, name: 'Mac Mini Intel i5', message: "Budget", image: '/laptops_pic/mini2017.jpg', color: ['silver'], rating: '4.2/5', reviews: 3548, currentPrice: 399.99, oldPrice: 699.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble d'alimentation" },
        { id: 5, name: 'MacBook Air 15 M2', message: "", image: '/laptops_pic/airm2.webp', color: ['midnight', 'starlight', 'silver'], rating: '4.8/5', reviews: 12784, currentPrice: 1299.99, oldPrice: 1599.99, quantite: 1, condition: "Comme neuf", vendu_avec: "Chargeur MagSafe et câble USB-C" },
        { id: 15, name: 'MacBook Air Retina 13"', message: "Budget", image: '/laptops_pic/air2015.jpg', color: ['gold', 'silver'], rating: '4.2/5', reviews: 10356, currentPrice: 899.99, oldPrice: 1199.99, quantite: 1, condition: "Comme neuf", vendu_avec: "Chargeur USB-C" },
        { id: 16, name: 'MacBook Pro 16 Intel i9', message: "", image: '/laptops_pic/pro2016.png', color: ['silver', 'space gray'], rating: '4.6/5', reviews: 7253, currentPrice: 2299.99, oldPrice: 2999.99, quantite: 1, condition: "Comme neuf", vendu_avec: "Chargeur MagSafe et câble USB-C" },
        { id: 10, name: 'MacBook Pro 13 M1', message: "Économique", image: '/laptops_pic/prom1.png', color: ['space gray', 'silver'], rating: '4.7/5', reviews: 11425, currentPrice: 1099.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Chargeur USB-C et câble USB-C" },
        { id: 12, name: 'iMac Pro', message: "Modèle rare", image: '/laptops_pic/imac2P_2024.webp', color: ['space gray'], rating: '4.6/5', reviews: 7253, currentPrice: 3499.99, oldPrice: 4999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Clavier et souris Magic Keyboard" },
        { id: 39, name: 'dell latitude 5470', message: "", image: '/laptops_pic/delllatitudee5470.jpg', color: ['black', 'silver', 'red', 'green'], rating: '4.1/5', reviews: 2150, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 1, name: 'MacBook Air M1', message: "-20% aujourd\'hui", image: '/laptops_pic/airm1.png', color: ['silver', 'space gray', 'gold'], rating: '4.8/5', reviews: 18974, currentPrice: 899.99, oldPrice: 1099.99, quantite: 1, condition: "Comme neuf", vendu_avec: "Chargeur MagSafe et câble USB-C" },
        { id: 40, name: 'dell latitude 5530', message: "", image: '/laptops_pic/delllatitudee5530.jpg', color: ['black', 'green', 'lavender'], rating: '4.8/5', reviews: 5129, currentPrice: 1199.99, oldPrice: 1399.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 14, name: 'MacBook Pro Intel 15"', message: "Ancien modèle", image: '/laptops_pic/pro2019.jpg', color: ['space gray', 'silver'], rating: '4.4/5', reviews: 8124, currentPrice: 1499.99, oldPrice: 2399.99, quantite: 1, condition: "Parfait état", vendu_avec: "Chargeur MagSafe et câble USB-C" },
        { id: 7, name: 'iMac 27 Intel', message: "Ancien modèle", image: '/laptops_pic/imac4P_2024.webp', color: ['silver'], rating: '4.5/5', reviews: 8420, currentPrice: 1499.99, oldPrice: 1999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Clavier et souris Magic Keyboard" },
        { id: 45, name: 'HP EliteBook 850 G5 15', image: '/laptops_pic/hpelitbook850.png', color: ['white','aqua','darkblue','red'], rating: '4.6/5', reviews: 14, currentPrice: 425.01, oldPrice: 1900.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 46, name: 'HP EliteBook 840 G3 14', image: '/laptops_pic/hpelitebook840.png', color: ['white','aqua','darkblue','red'], rating: '4.3/5', reviews: 45, currentPrice: 211.46, oldPrice: 826.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 47, name: 'HP EliteBook 840 G5 14', image: '/laptops_pic/hpelitebook840G5.png', color: ['white','aqua','darkblue','red'], rating: '3.7/5', reviews: 12, currentPrice: 263.42, oldPrice: 1251.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 48, name: 'HP EliteBook 830 G7 13', image: '/laptops_pic/hpelitbook830.png', color: ['white','aqua','darkblue','red'], rating: '5/5', reviews: 10, currentPrice: 389.00, oldPrice: 1899.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 49, name: 'HP 255 G9 15 Ryzen 3', image: '/laptops_pic/hp255G9.png', color: ['white','aqua','darkblue','red'], rating: '4.8/5', reviews: 23, currentPrice: 400.19, oldPrice: 700.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 50, name: 'HP ZBook 15 G3 15', image: '/laptops_pic/hpzbook15.png', color: ['white','aqua','darkblue','red'], rating: '4.1/5', reviews: 14, currentPrice: 495.95, oldPrice: 3499.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 51, name: 'HP ZBook 17 G3 17', image: '/laptops_pic/hpzbook17.png', color: ['white','aqua','darkblue','red'], rating: '4/5', reviews: 21, currentPrice: 639.00, oldPrice: 1494.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },

    ];
    
    
      /* le usestate pour capturer les modification des input de modele */
      const [checkeditem, setCheckedItem] = useState({
        peuimport:false,
        macAir:false,
        macPro:false,
        imac:false,
        macMini:false,
        dellxps:false,
        dellisnpiron:false,
        delllatitude:false,
        dellvostro:false,
        HP_EliteBook_850_G5: false,
        HP_EliteBook_840_G3: false,
        HP_EliteBook_840_G5: false,
        HP_EliteBook_830_G7: false,
        HP_255_G9_15: false,
        HP_ZBook_15_G3: false,
        HP_ZBook_17_G3: false,
      });

      /*la fonction qui est charger du check unique des input de modele*/
      function handleCheckboxChange(event){
        const {name,checked}=event.target
        console.log(`${name} is ${checked}`);
        if(checked){
          setCheckedItem({
            peuimport: name === "peuimport",
            macAir: name === "macAir",
            macPro: name === "macPro",
            imac: name === "imac",
            macMini: name === "macMini",
            dellxps:name === "dell xps",
            delllatitude:name === "dell latitude",
            dellvostro:name === "dell vostro",
            dellisnpiron:name=== "dell inspirion",
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
        spaceGray: false,
        purple: false,
        aqua:false,
        lightblue:false,
        darkblue:false,
        yellow:false,
        
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
            silver: name === "silver",
            spaceGray: name === "spaceGray",
            gold: name === "gold",
            blue: name === "blue",
            green: name === "green",
            pink: name === "pink",
            orange: name === "orange",
            purple: name === "purple",
            lime: name === "lime",
            olive: name === "olive",
            red: name === "red",
            beige: name === "beige",
            lightblue:name === "lightblue",
            darkblue:name === "darkblue",
            yellow:name === "yellow",
            aqua:name === "aqua",
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
            checkeditem["macAir"] && 
            product.name.toLowerCase().startsWith("macbook air");
      
          // Filtrage spécifique à la série "SerieS"
          const isMacProMatched = 
            checkeditem["macPro"] && 
            product.name.toLowerCase().startsWith("macbook pro");
      
          // Filtrage spécifique à la série "SerieZ"
          const isImacMatched = 
            checkeditem["imac"] && 
            product.name.toLowerCase().startsWith("imac");
      
          // Filtrage spécifique à la série "SerieM"
          const isMacMiniMatched = 
            checkeditem["macMini"] && 
            product.name.toLowerCase().startsWith("mac mini");
          // Filtrage spécifique à la série "SerieA"
          const isdellxpsMatched = 
            checkeditem["dellxps"]&& 
            product.name.toLowerCase() === "dell xps";
      
          // Filtrage spécifique à la série "SerieS"
          const isdellinspirionMatched = 
            checkeditem["dellinspirion"]&& 
            product.name.toLowerCase() === "dell inspirion"; 
      
          // Filtrage spécifique à la série "SerieS"
          const isdelllatitudeMatched = 
            checkeditem["delllatitude"]&& 
            product.name.toLowerCase() === "dell latitude";
      
          // Filtrage spécifique à la série "SerieS"
          const isdellvostroMatched = 
            checkeditem["dellvostro"]&& 
            product.name.toLowerCase() === "dell vostro";

            // Filtrage spécifique à la série "HP EliteBook"
            // Filtrage spécifique à la série "HP EliteBook"
            const isHP_EliteBook_850_G5Matched = 
            checkeditem["HP_EliteBook_850_G5"] && 
            product.name.startsWith("HP EliteBook 850 G5");

            const isHP_EliteBook_840_G3Matched = 
            checkeditem["HP_EliteBook_840_G3"] && 
            product.name.startsWith("HP EliteBook 840 G3");

            const isHP_EliteBook_840_G5Matched = 
            checkeditem["HP_EliteBook_840_G5"] && 
            product.name.startsWith("HP EliteBook 840 G5");

            const isHP_EliteBook_830_G7Matched = 
            checkeditem["HP_EliteBook_830_G7"] && 
            product.name.startsWith("HP EliteBook 830 G7");

            // Filtrage spécifique à la série "HP 255"
            const isHP_255_G9_15Matched = 
            checkeditem["HP_255_G9_15"] && 
            product.name.startsWith("HP 255 G9 15");

            // Filtrage spécifique à la série "HP ZBook"
            const isHP_ZBook_15_G3Matched = 
            checkeditem["HP_ZBook_15_G3"] && 
            product.name.startsWith("HP ZBook 15 G3");

            const isHP_ZBook_17_G3Matched = 
            checkeditem["HP_ZBook_17_G3"] && 
            product.name.startsWith("HP ZBook 17 G3");

      
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
          return (isHP_EliteBook_850_G5Matched || isHP_ZBook_17_G3Matched || isHP_ZBook_15_G3Matched || isHP_255_G9_15Matched || isHP_EliteBook_830_G7Matched || isHP_EliteBook_840_G5Matched || isHP_EliteBook_840_G3Matched  ||isModelMatched || isMacAirMatched || isMacProMatched || isImacMatched || isMacMiniMatched || isdellxpsMatched || isdellinspirionMatched || isdelllatitudeMatched || isdellvostroMatched) && isColorMatched && isPriceMatched;
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
          {/* la partie pour savoir ou on se situe */}
              <nav className="breadcrumb">
                <a href="/">Accueil</a> &gt; <a href="/Laptops">Laptops</a> &gt; <span>Tous les Laptops</span>
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
                  <h1>Laptops reconditionnés</h1>
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
                            <input type="checkbox" name="macAir"  checked={checkeditem.macAir} onChange={handleCheckboxChange}/>
                            Macbook Air
                          </label>
                              
                          <label>
                            <input type="checkbox" name="macPro" checked={checkeditem.macPro}  onChange={handleCheckboxChange}/>
                            Macbook Pro
                          </label>
                              
                          <label>
                            <input type="checkbox" name="imac"  checked={checkeditem.imac} onChange={handleCheckboxChange}/>
                            iMac
                          </label>
                              
                          <label>
                            <input type="checkbox" name="macMini"  checked={checkeditem.macMini} onChange={handleCheckboxChange}/>
                            Mac Mini
                          </label>
                          <label>
                            <input type="checkbox" name="dell xps"  checked={checkeditem.dellxps} onChange={handleCheckboxChange}/>
                            dell xps
                          </label>
                              
                          <label>
                            <input type="checkbox" name="dell latitude" checked={checkeditem.delllatitude}  onChange={handleCheckboxChange}/>
                            dell latitude
                          </label>
                              
                          <label>
                            <input type="checkbox" name="dell vostro"  checked={checkeditem.dellvostro} onChange={handleCheckboxChange}/>
                            dell vostro
                          </label>
                              
                          <label>
                            <input type="checkbox" name="dell inspirion"  checked={checkeditem.dellisnpiron} onChange={handleCheckboxChange}/>
                            dell inspirion
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
                            <input type="checkbox" name="silver" checked={checkeditemcolor.silver} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: '#C0C0C0', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Silver
                        </label>

                        <label>
                            <input type="checkbox" name="spaceGray" checked={checkeditemcolor.spaceGray} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: '#4B4B4B', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Space Gray
                        </label>

                        <label>
                            <input type="checkbox" name="gold" checked={checkeditemcolor.gold} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'gold', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Gold
                        </label>

                        <label>
                            <input type="checkbox" name="blue" checked={checkeditemcolor.blue} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'blue', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Blue
                        </label>

                        <label>
                            <input type="checkbox" name="green" checked={checkeditemcolor.green} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'green', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Green
                        </label>

                        <label>
                            <input type="checkbox" name="pink" checked={checkeditemcolor.pink} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'pink', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Pink
                        </label>

                        <label>
                            <input type="checkbox" name="orange" checked={checkeditemcolor.orange} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'orange', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Orange
                        </label>

                        <label>
                            <input type="checkbox" name="purple" checked={checkeditemcolor.purple} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'purple', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Purple
                        </label>
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
                            <input type="checkbox" name="violet" checked={checkeditemcolor.violet} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'violet', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Violet
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
                            <input type="checkbox" name="beige" checked={checkeditemcolor.beige} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'beige', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Beige
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
                            <input type="checkbox" name="yellow"  checked={checkeditemcolor.yellow} onChange={handleCheckboxColorChange}/>
                            <div className="colorinput" style={{backgroundColor: 'yellow',width:'20px',height:'20px',borderRadius:'50%',border:'1px solid black'}}></div>
                            Jaune
                          </label>
                          <label>
                            <input type="checkbox" name="aqua"  checked={checkeditemcolor.aqua} onChange={handleCheckboxColorChange}/>
                            <div className="colorinput" style={{backgroundColor: 'aqua',width:'20px',height:'20px',borderRadius:'50%',border:'1px solid black'}}></div>
                            Bleu Marine 
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

export default AllLaptops;