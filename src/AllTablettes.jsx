/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from "react";
import './Ipad.css';

function AllTablettes() {

    const commentaire = [
        { 
            id: 1, 
            client: 'Alice M.', 
            iconColor: '#94c2f5', 
            dateAchat: '12 octobre 2024', 
            dateCommentaire: '25 octobre 2024', 
            PaysCommentaire: 'France', 
            rating: '5/5', 
            commentaire: "J'ai acheté une Samsung Galaxy Tab S7 reconditionnée et je suis ravie de la qualité. La tablette est comme neuve, sans rayures visibles. Idéale pour mes besoins professionnels et personnels.", 
            typeSamsung: 'Galaxy Tab S7', 
            couleur: 'Noir', 
            EtatSamsung: 'Reconditionné'
        },
        { 
            id: 2, 
            client: 'Martin C.', 
            iconColor: '#f5d94c', 
            dateAchat: '5 septembre 2024', 
            dateCommentaire: '15 septembre 2024', 
            PaysCommentaire: 'France', 
            rating: '4.7/5', 
            commentaire: "La Galaxy Tab A8 est parfaite pour le quotidien. Quelques traces d'utilisation mineures, mais rien de gênant. Les performances sont solides pour le prix.", 
            typeSamsung: 'Galaxy Tab A8', 
            couleur: 'Argent', 
            EtatSamsung: 'Reconditionné'
        },
        { 
          id: 2, 
          client: 'Alice M.', 
          iconColor: '#94c2f5', 
          dateAchat: '12 octobre 2024', 
          dateCommentaire: '25 octobre 2024', 
          PaysCommentaire: 'France', 
          rating: '5/5', 
          commentaire: "J'ai acheté un Dell Latitude 7420 reconditionné et je suis ravie de la qualité. L'ordinateur est comme neuf, sans aucune rayure. Il fonctionne parfaitement pour mes besoins professionnels, et la batterie tient bien toute la journée. Un excellent rapport qualité-prix.", 
          typeDell: 'Latitude 7420', 
          couleur: 'Noir', 
          EtatDell: 'Reconditionné'
      },
      { 
          id: 3, 
          client: 'Martin C.', 
          iconColor: '#f5d94c', 
          dateAchat: '5 septembre 2024', 
          dateCommentaire: '15 septembre 2024', 
          PaysCommentaire: 'France', 
          rating: '4.7/5', 
          commentaire: "Le Dell Inspiron 15 que j'ai acheté est presque parfait. Quelques traces d'utilisation mineures, mais rien de gênant. Les performances sont excellentes pour un usage quotidien, et la batterie tient une bonne partie de la journée. Je recommande vivement pour ceux qui cherchent un ordinateur fiable.", 
          typeDell: 'Inspiron 15', 
          couleur: 'Argent', 
          EtatDell: 'Reconditionné'
      },
      { 
          id: 4, 
          client: 'Sophie L.', 
          iconColor: '#e5e5e5', 
          dateAchat: '22 janvier 2024', 
          dateCommentaire: '10 février 2024', 
          PaysCommentaire: 'France', 
          rating: '4.5/5', 
          commentaire: "Très satisfait de mon Dell Vostro 3500. Il y avait quelques micro-rayures sur la coque, mais rien qui n'affecte les performances. Il démarre rapidement et exécute les applications bureautiques sans problème. Bon choix pour un ordinateur reconditionné.", 
          typeDell: 'Vostro 3500', 
          couleur: 'Gris', 
          EtatDell: 'Reconditionné'
      },
      { 
          id: 5, 
          client: 'Jean-Paul R.', 
          iconColor: '#a5f594', 
          dateAchat: '10 mars 2024', 
          dateCommentaire: '22 mars 2024', 
          PaysCommentaire: 'France', 
          rating: '4.8/5', 
          commentaire: "Le Dell Precision 5550 que j'ai acheté dépasse mes attentes. Il est parfait pour le montage vidéo et les applications de conception graphique. Le processeur est rapide, et la qualité de l'écran est impressionnante. Très bon achat.", 
          typeDell: 'Precision 5550', 
          couleur: 'Noir', 
          EtatDell: 'Reconditionné'
      },
      { 
          id: 6, 
          client: 'Claire V.', 
          iconColor: '#f5949c', 
          dateAchat: '30 août 2024', 
          dateCommentaire: '12 septembre 2024', 
          PaysCommentaire: 'France', 
          rating: '5/5', 
          commentaire: "Je suis très satisfaite de mon Dell XPS 15. Bien que reconditionné, il est comme neuf et fonctionne parfaitement. La batterie tient très bien, et l'écran est tout simplement magnifique. Je recommande fortement ce modèle pour ceux qui recherchent un ordinateur portable performant.", 
          typeDell: 'XPS 15', 
          couleur: 'Argent', 
          EtatDell: 'Reconditionné'
      }
    ];

    const products = [
        { id: 1, name: 'Samsung Galaxy Tab A8', message: "-30% vs prix neuf", image: '/tablets_pic/A8.avif', color: ['black', 'silver', 'blue'], rating: '4.5/5', reviews: 10234, currentPrice: 179.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 2, name: 'Samsung Galaxy Tab S7', message: "Top qualité", image: '/tablets_pic/S7.jpg', color: ['black', 'bronze', 'silver'], rating: '4.8/5', reviews: 8623, currentPrice: 549.99, oldPrice: 699.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et stylet" },
        { id: 3, name: 'Samsung Galaxy Tab S8', message: "Nouveauté", image: '/tablets_pic/S8.jpg', color: ['black', 'graphite', 'white'], rating: '4.9/5', reviews: 12984, currentPrice: 799.99, oldPrice: 999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et stylet" },
        { id: 4, name: 'Samsung Galaxy Tab S6 Lite', message: "-20% aujourd'hui", image: '/tablets_pic/S6lite.png', color: ['blue', 'pink', 'grey'], rating: '4.4/5', reviews: 5243, currentPrice: 299.99, oldPrice: 379.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 5, name: 'Samsung Galaxy Tab Active3', message: "Conçue pour durer", image: '/tablets_pic/active3.jpg', color: ['black'], rating: '4.6/5', reviews: 3245, currentPrice: 499.99, oldPrice: 599.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement et protection" },
        { id: 6, name: 'Samsung Galaxy Tab A7', message: "", image: '/tablets_pic/A7.webp', color: ['silver', 'gold'], rating: '4.3/5', reviews: 7245, currentPrice: 199.99, oldPrice: 299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 7, name: 'Samsung Galaxy Tab S5e', message: "Légère et performante", image: '/tablets_pic/S5e.jpg', color: ['black', 'gold', 'silver'], rating: '4.7/5', reviews: 4521, currentPrice: 379.99, oldPrice: 449.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 8, name: 'Samsung Galaxy Tab S4', message: "", image: '/tablets_pic/S4.webp', color: ['black', 'white'], rating: '4.2/5', reviews: 3321, currentPrice: 279.99, oldPrice: 349.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement" },
        { id: 9, name: 'Samsung Galaxy Tab A10.1', message: "Polyvalente", image: '/tablets_pic/A10.jpg', color: ['black', 'silver'], rating: '4.1/5', reviews: 4125, currentPrice: 249.99, oldPrice: 329.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 10, name: 'Samsung Galaxy Tab A7 Lite', message: "Compacte", image: '/tablets_pic/S7.jpg', color: ['grey', 'silver'], rating: '4.5/5', reviews: 2124, currentPrice: 129.99, oldPrice: 179.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement" },
        { id: 11, name: 'Samsung Galaxy Tab S3', message: "Classique", image: '/tablets_pic/S3.webp', color: ['black', 'silver'], rating: '4.0/5', reviews: 3241, currentPrice: 199.99, oldPrice: 299.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 12, name: 'Samsung Galaxy Tab S2', message: "Fine et légère", image: '/tablets_pic/S2.jpg', color: ['black', 'white'], rating: '4.3/5', reviews: 4523, currentPrice: 149.99, oldPrice: 229.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 13, name: 'Samsung Galaxy Tab A 2019', message: "Performante", image: '/tablets_pic/A2019.jpg', color: ['black', 'silver'], rating: '4.4/5', reviews: 5241, currentPrice: 219.99, oldPrice: 299.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement" },
        { id: 14, name: 'Samsung Galaxy Tab A6', message: "Essentielle", image: '/tablets_pic/A6.jpeg', color: ['black'], rating: '4.2/5', reviews: 6211, currentPrice: 189.99, oldPrice: 249.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 15, name: 'Samsung Galaxy Tab Pro 10.1', message: "", image: '/tablets_pic/pro10.jpg', color: ['black', 'white'], rating: '4.6/5', reviews: 2981, currentPrice: 299.99, oldPrice: 399.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 16, name: 'Samsung Galaxy Tab E 9.6', message: "Simple et efficace", image: '/tablets_pic/E9.jpg', color: ['black', 'white'], rating: '4.2/5', reviews: 3211, currentPrice: 149.99, oldPrice: 199.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 17, name: 'Samsung Galaxy Tab S9 Ultra', message: "Haut de gamme", image: '/tablets_pic/S9.jpg', color: ['black', 'graphite'], rating: '5.0/5', reviews: 1824, currentPrice: 1199.99, oldPrice: 1399.99, quantite: 1, condition: "Comme neuf", vendu_avec: "Câble de chargement et stylet" },
        { id: 18, name: 'Samsung Galaxy Tab S9', message: "Excellence", image: '/tablets_pic/S9.jpg', color: ['black', 'white'], rating: '4.8/5', reviews: 2402, currentPrice: 999.99, oldPrice: 1199.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement et stylet" },
        { id: 19, name: 'Samsung Galaxy Tab A8 Plus', message: "Grande autonomie", image: '/tablets_pic/A8.avif', color: ['black', 'blue'], rating: '4.6/5', reviews: 3502, currentPrice: 299.99, oldPrice: 399.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 20, name: 'Samsung Galaxy Tab S8+', message: "Grand écran AMOLED", image: '/tablets_pic/S8plus.jpg', color: ['black', 'silver', 'bronze'], rating: '4.9/5', reviews: 4821, currentPrice: 999.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement et stylet" },
        { id: 21, name: 'Samsung Galaxy Tab E 8.0', message: "Économique et pratique", image: '/tablets_pic/E8.jpeg', color: ['black', 'white'], rating: '4.2/5', reviews: 1220, currentPrice: 129.99, oldPrice: 199.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 22, name: 'Samsung Galaxy Tab E 10.1', message: "Grande polyvalence", image: '/tablets_pic/A10.jpg', color: ['black', 'silver'], rating: '4.3/5', reviews: 1802, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement" },
        { id: 23, name: 'Samsung Galaxy Tab E Lite', message: "Compact et léger", image: '/tablets_pic/E9.jpg', color: ['white', 'black'], rating: '4.1/5', reviews: 1450, currentPrice: 99.99, oldPrice: 149.99, quantite: 1, condition: "Bon état", vendu_avec: "Câble de chargement" },
        { id: 24, name: 'Samsung Galaxy Tab Pro S', message: "Hybride performant", image: '/tablets_pic/ProS.jpg', color: ['black', 'silver'], rating: '4.8/5', reviews: 2250, currentPrice: 599.99, oldPrice: 799.99, quantite: 1, condition: "Très bon état", vendu_avec: "Clavier et câble de chargement" },
        { id: 25, name: 'Samsung Galaxy Tab Pro 12.2', message: "Écran ultra-large", image: '/tablets_pic/pro12.jpg', color: ['black', 'white'], rating: '4.7/5', reviews: 1930, currentPrice: 699.99, oldPrice: 899.99, quantite: 1, condition: "Très bon état", vendu_avec: "Câble de chargement" },
        { id: 26, name: 'Samsung Galaxy Tab Pro 8.4', message: "Portabilité maximale", image: '/tablets_pic/pro8.jpg', color: ['black', 'gold'], rating: '4.6/5', reviews: 1645, currentPrice: 499.99, oldPrice: 599.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 27, name: 'ipad air 1', message: "-25% vs prix neuf", image: '/tablets_pic/ipadair1.jpg', color: ['black', 'lavender', 'green', 'grey'], rating: '4.5/5', reviews: 15264, currentPrice: 599.99, oldPrice: 799.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 28, name: 'ipad air 2', message: "top vente", image: '/tablets_pic/ipadair2.jpg', color: ['black', 'white', 'green'], rating: '4.7/5', reviews: 12468, currentPrice: 899.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 29, name: 'ipad air 3', message: "top vente", image: '/tablets_pic/ipadair3.jpg', color: ['violet', 'black', 'gold', 'blue'], rating: '4.3/5', reviews: 8423, currentPrice: 849.99, oldPrice: 1099.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 30, name: 'ipad air 4', message: "top vente", image: '/tablets_pic/ipadair4.jpg', color: ['lime', 'black', 'white', 'violet'], rating: '4.2/5', reviews: 6524, currentPrice: 349.99, oldPrice: 449.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 31, name: 'ipad air 5', message: "", image: '/tablets_pic/ipadair5.jpg', color: ['lavender', 'olive', 'white'], rating: '4.4/5', reviews: 5120, currentPrice: 499.99, oldPrice: 699.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 32, name: 'ipad mini 1', message: "", image: '/tablets_pic/ipadmini1.jpg', color: ['beige', 'black', 'green', 'grey'], rating: '4.6/5', reviews: 3624, currentPrice: 1599.99, oldPrice: 1999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 33, name: 'ipad mini 2', message: "", image: '/tablets_pic/ipadmini2.jpg', color: ['beige', 'black', 'white'], rating: '4.5/5', reviews: 10528, currentPrice: 649.99, oldPrice: 1299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 34, name: 'ipad mini 3', message: "", image: '/tablets_pic/ipadmini3.jpg', color: ['blue', 'grey', 'pink', 'white'], rating: '4.3/5', reviews: 8203, currentPrice: 299.99, oldPrice: 999.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 35, name: 'ipad mini 4', message: "", image: '/tablets_pic/ipadmini4.jpg', color: ['black', 'silver', 'red', 'green'], rating: '4.1/5', reviews: 2150, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 36, name: 'ipad mini 5', message: "", image: '/tablets_pic/ipadmini5.jpg', color: ['black', 'green', 'lavender'], rating: '4.8/5', reviews: 5129, currentPrice: 1199.99, oldPrice: 1399.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 37, name: 'ipad pro 1', message: "-20% aujourd'hui", image: '/tablets_pic/ipadpro1.jpg', color: ['black', 'white', 'blue'], rating: '4.0/5', reviews: 3249, currentPrice: 219.99, oldPrice: 299.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 38, name: 'ipad pro 2', message: "", image: '/tablets_pic/ipadpro2.jpg', color: ['orange', 'blue', 'black'], rating: '4.2/5', reviews: 2890, currentPrice: 199.99, oldPrice: 249.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 39, name: 'ipad pro 3', message: "", image: '/tablets_pic/ipadpro3.jpg', color: ['black', 'white', 'green'], rating: '4.0/5', reviews: 1849, currentPrice: 149.99, oldPrice: 199.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 40, name: 'ipad pro 4', message: "", image: '/tablets_pic/ipadpro4.jpg', color: ['black', 'white', 'green'], rating: '4.0/5', reviews: 1849, currentPrice: 149.99, oldPrice: 199.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        { id: 41, name: 'ipad pro 5', message: "", image: '/tablets_pic/ipadpro5.jpg', color: ['black', 'white', 'green'], rating: '4.0/5', reviews: 1849, currentPrice: 149.99, oldPrice: 199.99, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement" },
        {id: 42, name: 'Lenovo ThinkPad X390', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/ThinkPadX390.png', rating: '4.7/5', reviews: 15, currentPrice: 848.41, oldPrice: 1599.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        {id: 43, name: 'Lenovo IdeaPad Miix 310', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/IdeaPadMiix.png', rating: '4.5/5', reviews: 12, currentPrice: 149.00, oldPrice: 399.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        {id: 44, name: 'Lenovo Tab M10 HD Plus', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/TabM10HD.png', rating: '4.6/5', reviews: 28, currentPrice: 123.00, oldPrice: 199.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        {id: 45, name: 'Lenovo ThinkPad X380', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/ThinkPadX380.png', rating: '4.6/5', reviews: 15, currentPrice: 849.00, oldPrice: 1599.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        {id: 46, name: 'Lenovo Tab M10 Gen 2', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/M10Gen2.png', rating: '4.5/5', reviews: 23, currentPrice: 148.00, oldPrice: 199.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        {id: 47, name: 'Lenovo Tab M10 HD', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/TabM10FHD.png', rating: '4.4/5', reviews: 31, currentPrice: 145.61, oldPrice: 199.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        {id: 48, name: 'Lenovo Tab M10 Gen 3', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/TabM10Gen3.png', rating: '4.5/5', reviews: 20, currentPrice: 209.00, oldPrice: 299.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        {id: 49, name: 'Lenovo Tab M8 HD', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/TabM8HD.png', rating: '4.4/5', reviews: 31, currentPrice: 94.65, oldPrice: 159.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        {id: 50, name: 'Lenovo Tab M10 TB-X505F', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/TabM10TB-X505F.png', rating: '4.3/5', reviews: 27, currentPrice: 99.00, oldPrice: 179.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        {id: 51, name: 'Lenovo Tab M10 HD Gen 2', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/M10Gen2.png', rating: '4.5/5', reviews: 25, currentPrice: 159.00, oldPrice: 249.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"},
        {id: 52, name: 'Lenovo Tab M10 HD Gen 3', color: ['white', 'aqua', 'darkblue', 'red'], image: '/tablets_pic/M10Gen3.png', rating: '4.6/5', reviews: 22, currentPrice: 209.00, oldPrice: 299.00, quantite: 1, condition: "Parfait état", vendu_avec: "Câble de chargement"}

    ];
    
        const [checkeditem, setCheckedItem] = useState({
            peuimport: false,
            tabA: false,
            tabS: false,
            tabE: false,
            tabPro: false,
            ipadair:false,
            ipadmini:false,
            ipadpro:false,
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
    
        function handleCheckboxChange(event) {
            const {name, checked} = event.target;
            if (checked) {
                setCheckedItem({
                    peuimport: name === "peuimport",
                    tabA: name === "tabA",
                    tabS: name === "tabS",
                    tabE: name === "tabE",
                    tabPro: name === "tabPro",
                    ipadair:name === "ipad air",
                    ipadmini:name === "ipad mini",
                    ipadpro:name === "ipad pro",
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
            } else {
                setCheckedItem((prevState) => ({
                    ...prevState,
                    [name]: false,
                }));
            }
        }
    
        const [minprice, setMinPrice] = useState(0);
        const [maxprice, setMaxPrice] = useState(2000);
    
        function handleMinPriceChange(event) {
            setMinPrice(event.target.value);
        }
    
        function handMaxPriceChange(event) {
            setMaxPrice(event.target.value);
        }
    
        const [checkeditemcolor, setCheckedItemcolor] = useState({
          black: false,
          silver: false,
          blue: false,
          bronze: false,
          graphite: false,
          white: false,
          lavender: false,
          green: false,
          grey: false,
          violet: false,
          gold: false,
          lime: false,
          olive: false,
          pink: false,
          orange: false,
          red: false,
          beige: false
        });
        
    
        function handleCheckboxColorChange(event) {
            const {name, checked} = event.target;
            if (checked) {
              setCheckedItemcolor({
                white: name === "white",
                black: name === "black",
                silver: name === "silver",
                blue: name === "blue",
                bronze: name === "bronze",
                graphite: name === "graphite",
                lavender: name === "lavender",
                green: name === "green",
                grey: name === "grey",
                violet: name === "violet",
                gold: name === "gold",
                lime: name === "lime",
                olive: name === "olive",
                pink: name === "pink",
                orange: name === "orange",
                red: name === "red",
                beige: name === "beige"
              });
              
            } else {
                setCheckedItemcolor((prevState) => ({
                    ...prevState,
                    [name]: false,
                }));
            }
        }
    
        const [pricesortstate, setPricesortstate] = useState("");
        function handlepricesortstate(event) {
            setPricesortstate(event.target.value);
        }
    
        const [moyenneprix, setMoyennePrix] = useState(0);
        useEffect(() => {
            setMoyennePrix(() => {
                let sum = 0;
                products.forEach((product) => {
                    sum += product.currentPrice;
                });
                return sum / products.length;
            });
        }, [products]);

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
                  const isMacAirMatched = 
                    checkeditem["tabA"] && 
                    product.name.toLowerCase().startsWith("samsung galaxy tab a");
              
                  // Filtrage spécifique à la série "SerieS"
                  const isMacProMatched = 
                    checkeditem["tabS"] && 
                    product.name.toLowerCase().startsWith("samsung galaxy tab s");
              
                  // Filtrage spécifique à la série "SerieZ"
                  const isImacMatched = 
                    checkeditem["tabE"] && 
                    product.name.toLowerCase().startsWith("samsung galaxy tab e");
              
                  // Filtrage spécifique à la série "SerieM"
                  const isMacMiniMatched = 
                    checkeditem["tabPro"] && 
                    product.name.toLowerCase().startsWith("samsung galaxy tab pro");
                    const isipadairMatched = 
                    checkeditem["ipadair"] && 
                    product.name.toLowerCase().startsWith("ipad air");
                  
                  const isipadminiMatched = 
                    checkeditem["ipadmini"] && 
                    product.name.toLowerCase().startsWith("ipad mini");
                  
                  const isipadproMatched = 
                    checkeditem["ipadpro"] && 
                    product.name.toLowerCase().startsWith("ipad pro");

                  const isLenovoThinkPadX390Matched = 
                  checkeditem["Lenovo_ThinkPad_X390"] && 
                  product.name.startsWith("Lenovo ThinkPad X390");

                  const isLenovoIdeaPadMiixMatched = 
                  checkeditem["Lenovo_IdeaPad_Miix"] && 
                  product.name.startsWith("Lenovo IdeaPad Miix");

                  const isLenovoTabM10Matched = 
                  checkeditem["Lenovo_Tab_M10"] && 
                  product.name.startsWith("Lenovo Tab M10");

                  const isLenovoThinkPadX380Matched = 
                  checkeditem["Lenovo_ThinkPad_X380"] && 
                  product.name.startsWith("Lenovo ThinkPad X380");

                  const isLenovoTabM10Gen2Matched = 
                  checkeditem["Lenovo_Tab_M10_Gen2"] && 
                  product.name.startsWith("Lenovo Tab M10 Gen2");

                  const isLenovoTabM10HDMatched = 
                  checkeditem["Lenovo_Tab_M10_HD_"] && 
                  product.name.startsWith("Lenovo Tab M10 HD");

                  const isLenovoTabM10Gen3Matched = 
                  checkeditem["Lenovo_Tab_M10_Gen3"] && 
                  product.name.startsWith("Lenovo Tab M10 Gen3");

                  const isLenovoTabM8HDMatched =
                   checkeditem["Lenovo_Tab_M8_HD"] && 
                   product.name.startsWith("Lenovo Tab M8 HD");

                  const isLenovoTabM10TBX505FMatched = 
                  checkeditem["Lenovo_Tab_M10_TB_X505F"] && 
                  product.name.startsWith("Lenovo Tab M10 TB X505F");

                  const isLenovoTabM10HDGen2Matched = 
                  checkeditem["Lenovo_Tab_M10_HD_Gen2"] && 
                  product.name.startsWith("Lenovo Tab M10 HD Gen 2");

                  const isLenovoTabM10HDGen3Matched = 
                  checkeditem["Lenovo_Tab_M10_HD_Gen3"] && 
                  product.name.startsWith("Lenovo Tab M10 HD Gen 3");

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
                  return (isLenovoThinkPadX390Matched || isLenovoIdeaPadMiixMatched || isLenovoTabM10Matched || isLenovoThinkPadX380Matched || isLenovoTabM10Gen2Matched || isLenovoTabM10HDMatched || isLenovoTabM10Gen3Matched || isLenovoTabM8HDMatched || isLenovoTabM10TBX505FMatched || isLenovoTabM10HDGen2Matched || isLenovoTabM10HDGen3Matched || isModelMatched || isMacAirMatched || isMacProMatched || isImacMatched || isMacMiniMatched || isModelMatched || isipadairMatched || isipadminiMatched || isipadproMatched) && isColorMatched && isPriceMatched;

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
            const formData = JSON.parse(localStorage.getItem("formData")) || [];
            const loggedInEmail = localStorage.getItem("isLoggedEmail");
            const currentUserIndex = formData.findIndex(user => user.email === loggedInEmail);
    
            if (currentUserIndex !== -1) {
                const currentUser = formData[currentUserIndex];
                currentUser.cart = currentUser.cart || [];
                currentUser.cart.push(product);
                formData[currentUserIndex] = currentUser;
                localStorage.setItem("formData", JSON.stringify(formData));
            }
        }
        return (
            <>
            <div className="iphonepage">
              {/* la partie qui se situe avant la partie des filtre et du catalogue */}
              <nav className="breadcrumb">
                    <a href="/">Accueil</a> &gt; <a href="/Tablettes">Tablettes</a> &gt; <span>ALLTab</span>
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
                      <h1>Tablettes reconditionnés</h1>
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
                                <input type="checkbox" name="tabA"  checked={checkeditem.tabA} onChange={handleCheckboxChange}/>
                                Samsung Galaxy Tab A
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="tabS" checked={checkeditem.tabS}  onChange={handleCheckboxChange}/>
                                Samsung Galaxy Tab S
                              </label>

                              <label>
                                <input type="checkbox" name="tabPro" checked={checkeditem.tabPro} onChange={handleCheckboxChange}/>
                                Samsung Galaxy Tab Pro
                              </label>
                                  
                              <label>
                                <input type="checkbox" name="tabE" checked={checkeditem.tabE} onChange={handleCheckboxChange}/>
                                Samsung Galaxy Tab E
                              </label>
                             
                              
                          <label>
                            <input type="checkbox" name="ipad air"  checked={checkeditem.ipadair} onChange={handleCheckboxChange}/>
                            ipad air
                          </label>
                              
                          <label>
                            <input type="checkbox" name="ipad mini" checked={checkeditem.ipadmini}  onChange={handleCheckboxChange}/>
                            ipad mini
                          </label>
                              
                          <label>
                            <input type="checkbox" name="ipad pro"  checked={checkeditem.ipadpro} onChange={handleCheckboxChange}/>
                            ipad pro
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
                                <input type="checkbox" name="silver" checked={checkeditemcolor.silver} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: '#C0C0C0', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Argent
                            </label>

                            <label>
                                <input type="checkbox" name="blue" checked={checkeditemcolor.blue} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: 'blue', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Bleu
                            </label>

                            <label>
                                <input type="checkbox" name="bronze" checked={checkeditemcolor.bronze} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: '#cd7f32', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Bronze
                            </label>

                            <label>
                                <input type="checkbox" name="graphite" checked={checkeditemcolor.graphite} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: '#383838', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Graphite
                            </label>

                            <label>
                                <input type="checkbox" name="white" checked={checkeditemcolor.white} onChange={handleCheckboxColorChange} />
                                <div className="colorinput" style={{ backgroundColor: 'white', width: '20px', height: '20px', borderRadius: '50%', border: '1px solid black' }}></div>
                                Blanc
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
    
    export default AllTablettes;