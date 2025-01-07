/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState,useEffect} from "react";
import './AllProducts.css'

function AllProducts() {

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
        { id: 19, name: 'iPhone 13',message:"-41% vs prix neuf" ,image: '/images/iphone13.png', color: ['white','aqua','darkblue','red'], rating: '4.4/5', reviews: 21264, currentPrice: 441.40, oldPrice: 749.0 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 20, name: 'iPhone 15',message:"top vente" , image: '/images/iphone15_1.png', color: ['yellow','white','lightblue','grey'], rating: '4.6/5', reviews: 3242, currentPrice: 706.93, oldPrice: 869.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 21, name: 'iphone 11',message:"top vente" , image: '/images/iphone11.png', color: ['black','white','grey','red'], rating: '4.1/5', reviews: 13121, currentPrice: 239.42, oldPrice: 589.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 22, name: 'iPhone 12',message:"top vente" , image: '/images/iphone12.png', color: ['grey','lightblue','red','white'], rating: '4.3/5', reviews: 20500, currentPrice: 341.81, oldPrice: 859.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 23, name: 'iPhone SE',message:"" , image: '/images/iphoneSE_1.png', color: ['red','black','white'], rating: '4.2/5', reviews: 5187, currentPrice: 130.19, oldPrice: 319.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 24, name: 'iPhone 14',message:"" , image: '/images/iphone14_1.png', color: ['lightblue','black','grey','white'], rating: '4.4/5', reviews: 3561, currentPrice: 529.00, oldPrice: 749.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 25, name: 'iPhone 11 Pro',message:"" , image: '/images/iphone11_1.png', color: ['black','grey','white','red'], rating: '4.2/5', reviews: 2187, currentPrice: 114.00, oldPrice: 299.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 26, name: 'iPhone 14 Pro',message:"" , image: '/images/iphone14Pro.png', color: ['grey','black','white','darkblue'], rating: '4.4/5', reviews: 4502, currentPrice: 651.50, oldPrice: 1329.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 27, name: 'iphone 13 Mini',message:"" , image: '/images/iphone13Mini.png', color: ['white','lightblue','black','grey'], rating: '4.3/5', reviews: 5249, currentPrice: 392.79, oldPrice: 809.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 28, name: 'iPhone 15 Pro',message:"" , image: '/images/iphone15Pro.png', color: ['white','grey','darkblue','black'], rating: '4.4/5', reviews: 1497, currentPrice: 911.43, oldPrice: 1229.00 ,quantite:1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        { id: 29, name: 'Samsung Galaxy S23', message: "-25% vs prix neuf", image: '/samsungSmart_pic/galaxy-s23.webp', color: ['black', 'lavender', 'green', 'grey'], rating: '4.5/5', reviews: 15264, currentPrice: 599.99, oldPrice: 799.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et adaptateur secteur" },
        { id: 30, name: 'Samsung Galaxy S22 Ultra', message: "top vente", image: '/samsungSmart_pic/galaxy-s22-ultra.avif', color: ['black', 'white', 'green'], rating: '4.7/5', reviews: 12468, currentPrice: 899.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 31, name: 'Samsung Galaxy Z Flip 4', message: "top vente", image: '/samsungSmart_pic/galaxy-z-flip4.avif', color: ['violet', 'black', 'gold', 'blue'], rating: '4.3/5', reviews: 8423, currentPrice: 849.99, oldPrice: 1099.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 32, name: 'Samsung Galaxy A54', message: "top vente", image: '/samsungSmart_pic/galaxy-a54.avif', color: ['lime', 'black', 'white', 'violet'], rating: '4.2/5', reviews: 6524, currentPrice: 349.99, oldPrice: 449.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 33, name: 'Samsung Galaxy S21 FE', message: "", image: '/samsungSmart_pic/S21FE.png', color: ['lavender', 'olive', 'white'], rating: '4.4/5', reviews: 5120, currentPrice: 499.99, oldPrice: 699.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 34, name: 'Samsung Galaxy Z Fold 4', message: "", image: '/samsungSmart_pic/galaxy-z-fold4.avif', color: ['beige', 'black', 'green', 'grey'], rating: '4.6/5', reviews: 3624, currentPrice: 1599.99, oldPrice: 1999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et S Pen" },
        { id: 35, name: 'Samsung Galaxy Note 20 Ultra', message: "", image: '/samsungSmart_pic/galaxy-note20-ultra.avif', color: ['beige', 'black', 'white'], rating: '4.5/5', reviews: 10528, currentPrice: 649.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 36, name: 'Samsung Galaxy S20', message: "", image: '/samsungSmart_pic/s20.webp', color: ['blue', 'grey', 'pink', 'white'], rating: '4.3/5', reviews: 8203, currentPrice: 299.99, oldPrice: 999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 37, name: 'Samsung Galaxy A14', message: "", image: '/samsungSmart_pic/galaxy-a54.avif', color: ['black', 'silver', 'red', 'green'], rating: '4.1/5', reviews: 2150, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 38, name: 'Samsung Galaxy S23 Ultra', message: "", image: '/samsungSmart_pic/samsung-galaxy-s23-ultra.webp', color: ['black', 'green', 'lavender'], rating: '4.8/5', reviews: 5129, currentPrice: 1199.99, oldPrice: 1399.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et S Pen" },
        { id: 39, name: 'Samsung Galaxy A32', message: "-20% aujourd'hui", image: '/samsungSmart_pic/A32.avif', color: ['black', 'white', 'blue'], rating: '4.0/5', reviews: 3249, currentPrice: 219.99, oldPrice: 299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 40, name: 'Samsung Galaxy A23', message: "", image: '/samsungSmart_pic/A23.webp', color: ['orange', 'blue', 'black'], rating: '4.2/5', reviews: 2890, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 41, name: 'Samsung Galaxy A13', message: "", image: '/samsungSmart_pic/A13.png', color: ['black', 'white', 'green'], rating: '4.0/5', reviews: 1849, currentPrice: 149.99, oldPrice: 199.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 42, name: 'Samsung Galaxy M33', message: "", image: '/samsungSmart_pic/M33.png', color: ['blue', 'black'], rating: '4.1/5', reviews: 1549, currentPrice: 279.99, oldPrice: 349.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 43, name: 'Samsung Galaxy F14', message: "", image: '/samsungSmart_pic/F14.avif', color: ['green', 'black', 'violet'], rating: '4.0/5', reviews: 1045, currentPrice: 179.99, oldPrice: 229.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 44, name: 'Samsung Galaxy S10+', message: "", image: '/samsungSmart_pic/s10.png', color: ['black', 'white'], rating: '4.2/5', reviews: 3421, currentPrice: 249.99, oldPrice: 799.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 45, name: 'Samsung Galaxy A50', message: "", image: '/samsungSmart_pic/A50.webp', color: ['black', 'blue', 'white'], rating: '4.1/5', reviews: 2714, currentPrice: 229.99, oldPrice: 299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 46, name: 'Samsung Galaxy S9', message: "Économique", image: '/samsungSmart_pic/s9.png', color: ['violet', 'black'], rating: '4.1/5', reviews: 1420, currentPrice: 199.99, oldPrice: 699.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 47, name: 'Samsung Galaxy Z Flip 3', message: "Promo", image: '/samsungSmart_pic/zflip3.png', color: ['blue', 'black'], rating: '4.4/5', reviews: 2751, currentPrice: 649.99, oldPrice: 999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 48, name: 'Samsung Galaxy A02', message: "Pas cher", image: '/samsungSmart_pic/A02.png', color: ['black', 'silver'], rating: '3.9/5', reviews: 874, currentPrice: 99.99, oldPrice: 149.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 49, name: 'Samsung Galaxy S8', message: "Ancien modèle", image: '/samsungSmart_pic/s8.webp', color: ['black', 'silver'], rating: '4.0/5', reviews: 1203, currentPrice: 149.99, oldPrice: 599.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 50, name: 'Samsung Galaxy A11', message: "Top deal", image: '/samsungSmart_pic/A11.webp', color: ['red', 'blue', 'black'], rating: '4.0/5', reviews: 1341, currentPrice: 139.99, oldPrice: 199.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 51, name: 'Samsung Galaxy J7 Prime', message: "Budget", image: '/samsungSmart_pic/J7prime.png', color: ['gold', 'black'], rating: '3.8/5', reviews: 932, currentPrice: 129.99, oldPrice: 199.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 52, name: 'Samsung Galaxy M11', message: "Promo", image: '/samsungSmart_pic/M11.webp', color: ['violet', 'black'], rating: '3.9/5', reviews: 641, currentPrice: 119.99, oldPrice: 179.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" }
        
    ];
      /* le usestate pour capturer les modification des input de modele */
      const [checkeditem, setCheckedItem] = useState({
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
        serieA:false,
        serieS:false,
        serieM:false,
        serieZ:false,
        serieNote:false,
        serieJ:false,
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
            serieA: name === "serieA",
            serieS: name === "serieS",
            serieM: name === "serieM",
            serieZ: name === "serieZ",
            serieNote: name === "serieNote",
            serieJ: name === "serieJ",
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
            product.name.toLowerCase().startsWith(  "google pixel 2");
      
          // Filtrage spécifique à la série "SerieS"
          const isSerie2XLMatched = 
            checkeditem["serie2XL"]&& 
            product.name.toLowerCase().startsWith(  "google pixel 2 xl"); 
      
          // Filtrage spécifique à la série "SerieS"
          const isSerie3aMatched = 
            checkeditem["serie3a"]&& 
            product.name.toLowerCase().startsWith(  "google pixel 3a");
      
          // Filtrage spécifique à la série "SerieS"
          const isSerie3XLMatched = 
            checkeditem["serie3XL"]&& 
            product.name.toLowerCase().startsWith(  "google pixel 3 xl");

          // Filtrage spécifique à la série "SerieS"
          const isSerie4Matched = 
            checkeditem["serie4"]&& 
            product.name.toLowerCase().startsWith(  "google pixel 4");

          // Filtrage spécifique à la série "SerieS"
          const isSerie4aMatched = 
            checkeditem["serie4a"]&& 
            product.name.toLowerCase().startsWith(  "google pixel 4a");
        
          // Filtrage spécifique à la série "SerieS"
          const isSerie5Matched = 
            checkeditem["serie5"]&& 
            product.name.toLowerCase().startsWith(  "google pixel 5");  
          
          // Filtrage spécifique à la série "SerieS"
          const isSerie6Matched = 
            checkeditem["serie6"]&& 
            product.name.toLowerCase().startsWith(  "google pixel 6");
            
            // Filtrage spécifique à la série "SerieS"
          const isSerie6proMatched = 
          checkeditem["serie6pro"]&& 
          product.name.toLowerCase().startsWith("google pixel 6 pro");

          // Filtrage spécifique à la série "SerieS"
          const isSerie7Matched = 
            checkeditem["serie7"]&& 
            product.name.toLowerCase().startsWith("google pixel 7");

            // Filtrage spécifique à la série "SerieS"
          const isSerie8Matched = 
          checkeditem["serie8"]&& 
          product.name.toLowerCase().startsWith("google pixel 8");

          // Filtrage spécifique à la série "SerieS"
          const isSerie8proMatched = 
            checkeditem["serie8pro"]&& 
            product.name.toLowerCase().startsWith("google pixel 8 pro");

            // Filtrage spécifique à la série "SerieS"
          const isSerie9proMatched = 
          checkeditem["serie9pro"]&& 
          product.name.toLowerCase().startsWith("google pixel 9 pro");

          // Filtrage spécifique à la série "SerieS"
          const isSerie9Matched = 
            checkeditem["serie9"]&& 
            product.name.toLowerCase().startsWith(  "google pixel 9");

            // Filtrage spécifique à la série "SerieS"
          const isSerie10Matched = 
          checkeditem["serie10"]&& 
          product.name.toLowerCase().startsWith(  "google pixel 10");

            // Filtrage spécifique à la série "SerieS"
          const isSerieFoldMatched = 
          checkeditem["serieFold"]&& 
          product.name.toLowerCase().startsWith(  "google pixel fold");
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
            const isiphone11Matched =
            checkeditem["iphone11"] && 
            product.name.toLowerCase().startsWith("iphone11");
            const isiphone12Matched =
            checkeditem["iphone12"] && 
            product.name.toLowerCase().startsWith("iphone12");
            const isiphone13Matched =
            checkeditem["iphone13"] && 
            product.name.toLowerCase().startsWith("iphone13");
            const isiphone14Matched =
            checkeditem["iphone14"] && 
            product.name.toLowerCase().startsWith("iphone14");
            const isiphone15Matched =
            checkeditem["iphone15"] && 
            product.name.toLowerCase().startsWith("iphone15");
            const isiphoneseMatched =
            checkeditem["iphonese"] && 
            product.name.toLowerCase().startsWith("iphonese");
          
            
      
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
          return (isModelMatched || isSerie2Matched || isSerie2XLMatched || isSerie3aMatched || isSerie3XLMatched || isSerie4Matched || isSerie4aMatched || isSerie5Matched || isSerie6Matched || isSerie6proMatched || isSerie7Matched || isSerie8Matched || isSerie8proMatched || isSerie9Matched || isSerie9proMatched || isSerie10Matched || isSerieFoldMatched|| isSerieAMatched || isSerieSMatched || isSerieZMatched || isSerieMMatched || isSerieJMatched || isSerieNoteMatched || isiphone11Matched || isiphone12Matched || isiphone13Matched || isiphone14Matched || isiphone15Matched || isiphoneseMatched) && isColorMatched && isPriceMatched;
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
        <div className="ALLPRODUCTS">
          {/* la partie qui se situe avant la partie des filtre et du catalogue */}
          <nav className="breadcrumbb">
                <a href="/">Accueil</a> &gt; <a href="/Smartphones">Smartphones</a> &gt; <span>Toutes les marques</span>
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
                          <label>
                            <input type="checkbox" name="iphone11"  checked={checkeditem.iphone11} onChange={handleCheckboxChange}/>
                            iphone 11
                          </label>
                          <label>
                            <input type="checkbox" name="iphone12"  checked={checkeditem.iphone12} onChange={handleCheckboxChange}/>
                            iphone 12
                          </label>
                          <label>
                            <input type="checkbox" name="iphone13"  checked={checkeditem.iphone13} onChange={handleCheckboxChange}/>
                            iphone 13
                          </label>
                          <label>
                            <input type="checkbox" name="iphone14"  checked={checkeditem.iphone14} onChange={handleCheckboxChange}/>
                            iphone 14
                          </label>
                          <label>
                            <input type="checkbox" name="iphone15"  checked={checkeditem.iphone15} onChange={handleCheckboxChange}/>
                            iphone 15
                          </label>
                          <label>
                            <input type="checkbox" name="iphonese"  checked={checkeditem.iphonese} onChange={handleCheckboxChange}/>
                            iphone se
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
                            Black
                        </label>

                        <label>
                            <input type="checkbox" name="lavender" checked={checkeditemcolor.lavender} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'lavender', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Lavender
                        </label>

                        <label>
                            <input type="checkbox" name="green" checked={checkeditemcolor.green} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'green', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Green
                        </label>

                        <label>
                            <input type="checkbox" name="grey" checked={checkeditemcolor.grey} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'grey', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Grey
                        </label>

                        <label>
                            <input type="checkbox" name="violet" checked={checkeditemcolor.violet} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'violet', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Violet
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
                            <input type="checkbox" name="white" checked={checkeditemcolor.white} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'white', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            White
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
                            Pink
                        </label>

                        <label>
                            <input type="checkbox" name="orange" checked={checkeditemcolor.orange} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: 'orange', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Orange
                        </label>

                        <label>
                            <input type="checkbox" name="silver" checked={checkeditemcolor.silver} onChange={handleCheckboxColorChange} />
                            <div className="colorinput" style={{ backgroundColor: '#C0C0C0', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                            Silver
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

export default AllProducts;