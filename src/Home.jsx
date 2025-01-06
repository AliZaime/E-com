import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Home.css";

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
const scrollToSection = () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    navbar.scrollIntoView({ behavior: 'smooth' });
  }
};
function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { src: "A7/slide1.png", alt: "Image 1" },
    { src: "A7/BF_HPBanner_Desktop_Laptop_FR.avif", alt: "Image 2" },
  ];

  useEffect(() => {
    handleCategoryClick(0); 
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const products = [
    { 
      id: 1, 
      name: 'MacBook Pro 14 M2', 
      message: "top vente", 
      image: '/laptops_pic/prom2.png', 
      color: ['silver', 'space gray'], 
      rating: '4.9/5', 
      reviews: 15231, 
      currentPrice: 1899.99, 
      oldPrice: 2499.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Chargeur MagSafe et câble USB-C", 
      description: "Le MacBook Pro 14 M2 est un ordinateur portable performant avec un écran Retina et une puissance maximale pour les professionnels créatifs.", 
      category: "MacBook"
    },
    { 
      id: 2, 
      name: 'Samsung Galaxy Tab A8', 
      message: "-30% vs prix neuf", 
      image: '/tablets_pic/A8.avif', 
      color: ['black', 'silver', 'blue'], 
      rating: '4.5/5', 
      reviews: 10234, 
      currentPrice: 179.99, 
      oldPrice: 249.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Samsung Galaxy Tab A8, une tablette légère et performante pour une utilisation quotidienne et multimédia.", 
      category: "Tablets"
    },
    { 
      id: 3, 
      name: 'IphoneXR', 
      category: 'iPhone', 
      image: '/images/iphone8.avif', 
      storage: '64 Go', 
      color: 'Gris sidéral', 
      unlocked: 'Débloqué', 
      rating: '4.2/5', 
      reviews: 2195, 
      currentPrice: 109.74, 
      oldPrice: 299.0, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement",
      description: "Compact et performant, l’iPhone 8 est parfait pour un usage quotidien."
    },
    { 
      id: 4, 
      name: 'HP EliteBook 840 G5 14', 
      category: 'Ordinateurs Windows', 
      image: '/laptops_pic/hpelitebook840G5.png', 
      color: ['white', 'aqua', 'darkblue', 'red'], 
      rating: '3.7/5', 
      reviews: 12, 
      currentPrice: 263.42, 
      oldPrice: 1251.00, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Un modèle de qualité moyenne offrant un bon rapport qualité-prix.",
      storage: '512 Go SSD'
    },
    { 
      id: 5, 
      name: 'MacBook Air M1', 
      message: "-20% aujourd'hui", 
      image: '/laptops_pic/airm1.png', 
      color: ['silver', 'space gray', 'gold'], 
      rating: '4.8/5', 
      reviews: 18974, 
      currentPrice: 899.99, 
      oldPrice: 1099.99, 
      quantite: 1, 
      condition: "Comme neuf", 
      vendu_avec: "Chargeur MagSafe et câble USB-C", 
      description: "Le MacBook Air M1 offre une performance exceptionnelle avec une autonomie impressionnante, tout en étant ultra léger et élégant.", 
      category: "MacBook"
    },
    { 
      id: 6, 
      name: 'Lenovo Tab M10 HD Plus', 
      color: ['white','aqua','darkblue','red'], 
      image: '/tablets_pic/TabM10HD.png', 
      rating: '4.6/5', 
      reviews: 28, 
      currentPrice: 123.00, 
      oldPrice: 199.00, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Lenovo Tab M10 HD Plus, une tablette économique offrant de bonnes performances pour les loisirs et la productivité.", 
      category: "Tablets"
    },
    { 
      id: 7, 
      name: 'iPhone 14', 
      category: 'iPhone', 
      image: '/images/iphone14.jpg', 
      storage: '256 Go', 
      color: 'Blanc', 
      unlocked: 'Débloqué', 
      rating: '4.6/5', 
      reviews: 5050, 
      currentPrice: 1029.0, 
      oldPrice: 1200.0, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement",
      description: "Le dernier modèle d’Apple avec des fonctionnalités avancées et un design épuré."
    },
    { 
      id: 8, 
      name: 'HP EliteBook 840 G3 14', 
      category: 'Ordinateurs Windows', 
      image: '/laptops_pic/hpelitebook840.png', 
      color: ['white', 'aqua', 'darkblue', 'red'], 
      rating: '4.3/5', 
      reviews: 45, 
      currentPrice: 211.46, 
      oldPrice: 826.00, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Un ordinateur compact et performant pour les professionnels.",
      storage: '256 Go SSD'
    },
   ];

 

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setStartIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, products.length));
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
    }
  };

  const visibleProducts = products.slice(startIndex, Math.min(startIndex + itemsPerPage, products.length));
  const productList = [
    { 
      id: 1, 
      name: 'MacBook Air M1', 
      message: "-20% aujourd'hui", 
      image: '/laptops_pic/airm1.png', 
      color: ['silver', 'space gray', 'gold'], 
      rating: '4.8/5', 
      reviews: 18974, 
      currentPrice: 899.99, 
      oldPrice: 1099.99, 
      quantite: 1, 
      condition: "Comme neuf", 
      vendu_avec: "Chargeur MagSafe et câble USB-C", 
      description: "Le MacBook Air M1 offre une performance exceptionnelle avec une autonomie impressionnante, tout en étant ultra léger et élégant.", 
      category: "MacBook"
    },
    { 
      id: 2, 
      name: 'MacBook Pro 14 M2', 
      message: "top vente", 
      image: '/laptops_pic/prom2.png', 
      color: ['silver', 'space gray'], 
      rating: '4.9/5', 
      reviews: 15231, 
      currentPrice: 1899.99, 
      oldPrice: 2499.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Chargeur MagSafe et câble USB-C", 
      description: "Le MacBook Pro 14 M2 est un ordinateur portable performant avec un écran Retina et une puissance maximale pour les professionnels créatifs.", 
      category: "MacBook"
    },
    { 
      id: 3, 
      name: 'iMac 24 M1', 
      message: "Promo", 
      image: '/laptops_pic/imacm1.jpeg', 
      color: ['blue', 'pink', 'green', 'silver', 'yellow'], 
      rating: '4.7/5', 
      reviews: 9845, 
      currentPrice: 1299.99, 
      oldPrice: 1499.99, 
      quantite: 1, 
      condition: "Comme neuf", 
      vendu_avec: "Clavier et souris Magic Keyboard", 
      description: "L’iMac 24 M1 combine un design moderne avec des performances exceptionnelles pour une expérience fluide et rapide.", 
      category: "MacBook"
    },
    { 
      id: 4, 
      name: 'Mac Mini M2', 
      message: "Top deal", 
      image: '/laptops_pic/mini2024.jpg', 
      color: ['silver'], 
      rating: '4.6/5', 
      reviews: 7421, 
      currentPrice: 599.99, 
      oldPrice: 799.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble d'alimentation", 
      description: "Le Mac Mini M2 est un petit ordinateur de bureau avec de grandes performances, idéal pour les tâches professionnelles et personnelles.", 
      category: "MacBook"
    },
    { 
      id: 5, 
      name: 'MacBook Air 15 M2', 
      message: "", 
      image: '/laptops_pic/airm2.webp', 
      color: ['midnight', 'starlight', 'silver'], 
      rating: '4.8/5', 
      reviews: 12784, 
      currentPrice: 1299.99, 
      oldPrice: 1599.99, 
      quantite: 1, 
      condition: "Comme neuf", 
      vendu_avec: "Chargeur MagSafe et câble USB-C", 
      description: "Le MacBook Air 15 M2 vous offre une grande autonomie et une puissance inédite, tout en restant léger et portable.", 
      category: "MacBook"
    },
    { 
      id: 6, 
      name: 'MacBook Pro 16 M2 Max', 
      message: "", 
      image: '/laptops_pic/prom2.png', 
      color: ['silver', 'space gray'], 
      rating: '5.0/5', 
      reviews: 5240, 
      currentPrice: 3499.99, 
      oldPrice: 4299.99, 
      quantite: 1, 
      condition: "Comme neuf", 
      vendu_avec: "Chargeur MagSafe et câble USB-C", 
      description: "Le MacBook Pro 16 M2 Max est conçu pour des performances extrêmes, parfait pour les créateurs de contenu et les professionnels exigeants.", 
      category: "MacBook"
    },
    { 
      id: 7, 
      name: 'iMac 27 Intel', 
      message: "Ancien modèle", 
      image: '/laptops_pic/imac4P_2024.webp', 
      color: ['silver'], 
      rating: '4.5/5', 
      reviews: 8420, 
      currentPrice: 1499.99, 
      oldPrice: 1999.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Clavier et souris Magic Keyboard", 
      description: "L’iMac 27 Intel combine un écran Retina de grande taille avec une performance optimale pour des tâches professionnelles et multimédia.", 
      category: "MacBook"
    },
    { 
      id: 8, 
      name: 'Mac Mini Intel i5', 
      message: "Budget", 
      image: '/laptops_pic/mini2017.jpg', 
      color: ['silver'], 
      rating: '4.2/5', 
      reviews: 3548, 
      currentPrice: 399.99, 
      oldPrice: 699.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble d'alimentation", 
      description: "Mac Mini Intel i5, une solution abordable et performante pour des tâches quotidiennes à un prix réduit.", 
      category: "MacBook"
    },
    
    { 
      id: 9, 
      name: 'HP 255 G9 15 Ryzen 3', 
      category: 'Ordinateurs Windows', 
      image: '/laptops_pic/hp255G9.png', 
      color: ['white', 'aqua', 'darkblue', 'red'], 
      rating: '4.8/5', 
      reviews: 23, 
      currentPrice: 400.19, 
      oldPrice: 700.00, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Un ordinateur d'entrée de gamme fiable pour les tâches quotidiennes.",
      storage: '128 Go SSD'
    },
    { 
      id: 10, 
      name: 'HP ZBook 15 G3 15', 
      category: 'Ordinateurs Windows', 
      image: '/laptops_pic/hpzbook15.png', 
      color: ['white', 'aqua', 'darkblue', 'red'], 
      rating: '4.1/5', 
      reviews: 14, 
      currentPrice: 495.95, 
      oldPrice: 3499.00, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Un ordinateur portable professionnel haut de gamme pour les tâches exigeantes.",
      storage: '1 To HDD'
    },
    { 
      id: 11, 
      name: 'Lenovo Tab M10 HD Plus', 
      color: ['white','aqua','darkblue','red'], 
      image: '/tablets_pic/TabM10HD.png', 
      rating: '4.6/5', 
      reviews: 28, 
      currentPrice: 123.00, 
      oldPrice: 199.00, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Lenovo Tab M10 HD Plus, une tablette économique offrant de bonnes performances pour les loisirs et la productivité.", 
      category: "Tablets"
    },
    { 
      id: 12, 
      name: 'HP ZBook 17 G3 17', 
      category: 'Ordinateurs Windows', 
      image: '/laptops_pic/hpzbook17.png', 
      color: ['white', 'aqua', 'darkblue', 'red'], 
      rating: '4/5', 
      reviews: 21, 
      currentPrice: 639.00, 
      oldPrice: 1494.00, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Un ordinateur portable performant avec un grand écran pour les professionnels.",
      storage: '512 Go SSD'
    },
    { 
      id: 13, 
      name: 'Samsung Galaxy Tab A8', 
      message: "-30% vs prix neuf", 
      image: '/tablets_pic/A8.avif', 
      color: ['black', 'silver', 'blue'], 
      rating: '4.5/5', 
      reviews: 10234, 
      currentPrice: 179.99, 
      oldPrice: 249.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Samsung Galaxy Tab A8, une tablette légère et performante pour une utilisation quotidienne et multimédia.", 
      category: "Tablets"
    },
    { 
      id: 14, 
      name: 'Samsung Galaxy Tab S7', 
      message: "Top qualité", 
      image: '/tablets_pic/S7.jpg', 
      color: ['black', 'bronze', 'silver'], 
      rating: '4.8/5', 
      reviews: 8623, 
      currentPrice: 549.99, 
      oldPrice: 699.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement et stylet", 
      description: "Samsung Galaxy Tab S7, une tablette premium offrant des performances exceptionnelles et un stylet pour une expérience enrichie.", 
      category: "Tablets"
    },
    { 
      id: 15, 
      name: 'Samsung Galaxy Tab S8', 
      message: "Nouveauté", 
      image: '/tablets_pic/S8.jpg', 
      color: ['black', 'graphite', 'white'], 
      rating: '4.9/5', 
      reviews: 12984, 
      currentPrice: 799.99, 
      oldPrice: 999.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement et stylet", 
      description: "Samsung Galaxy Tab S8, la nouvelle référence en matière de tablette avec des performances de haut niveau.", 
      category: "Tablets"
    },
    
    { 
      id: 16, 
      name: 'Samsung Galaxy Tab Active3', 
      message: "Robuste", 
      image: '/tablets_pic/Active3.jpg', 
      color: ['black', 'grey'], 
      rating: '4.4/5', 
      reviews: 6530, 
      currentPrice: 399.99, 
      oldPrice: 599.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Samsung Galaxy Tab Active3, une tablette robuste conçue pour résister aux conditions extrêmes tout en offrant de bonnes performances.", 
      category: "Tablets"
    },
    { 
      id: 17, 
      name: 'Samsung Galaxy S21 Ultra', 
      message: "Top qualité", 
      image: '/Products/Samsung Galaxy S21 Ultra_Black.png', 
      color: ['black', 'silver', 'white'], 
      rating: '4.8/5', 
      reviews: 9542, 
      currentPrice: 1249.99, 
      oldPrice: 1399.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble USB-C", 
      description: "Samsung Galaxy S21 Ultra, le smartphone phare de Samsung avec un écran AMOLED et un appareil photo 108 MP.", 
      category: "Smartphones Android"
    },
    { 
      id: 18, 
      name: 'Samsung Galaxy S20 FE', 
      message: "", 
      image: '/Products/Samsung Galaxy S20 FE_Black.png', 
      color: ['black', 'blue', 'white'], 
      rating: '4.7/5', 
      reviews: 3487, 
      currentPrice: 649.99, 
      oldPrice: 799.99, 
      quantite: 1, 
      condition: "Comme neuf", 
      vendu_avec: "Câble USB-C", 
      description: "Samsung Galaxy S20 FE, un smartphone abordable avec un excellent rapport qualité/prix et une caméra polyvalente.", 
      category: "Smartphones Android"
    },
    { 
      id: 19, 
      name: 'Samsung Galaxy A52', 
      message: "", 
      image: '/Products/Samsung Galaxy A52_Black.png', 
      color: ['black', 'blue', 'white'], 
      rating: '4.6/5', 
      reviews: 5241, 
      currentPrice: 349.99, 
      oldPrice: 499.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble USB-C", 
      description: "Samsung Galaxy A52, un smartphone solide avec un écran Super AMOLED et un processeur performant pour son prix.", 
      category: "Smartphones Android"
    },
    { 
      id: 20, 
      name: 'Smartwatch Samsung Galaxy Watch 5', 
      message: "", 
      image: '/watches_pic/watch5.png', 
      color: ['black', 'white', 'rose gold'], 
      rating: '4.8/5', 
      reviews: 7345, 
      currentPrice: 299.99, 
      oldPrice: 399.99, 
      quantite: 1, 
      condition: "Comme neuf", 
      vendu_avec: "Chargeur sans fil", 
      description: "La Samsung Galaxy Watch 5 combine un design élégant avec des fonctionnalités de suivi de santé avancées.", 
      category: "Smartwatches"
    },
    { 
      id:   21, 
      name: 'Apple Watch Series 8', 
      message: "", 
      image: '/watches_pic/appleS8.png', 
      color: ['midnight', 'starlight', 'silver'], 
      rating: '4.9/5', 
      reviews: 18542, 
      currentPrice: 429.99, 
      oldPrice: 499.99, 
      quantite: 1, 
      condition: "Comme neuf", 
      vendu_avec: "Chargeur sans fil", 
      description: "L'Apple Watch Series 8 offre un design raffiné, des capteurs avancés pour la santé, et une autonomie prolongée.", 
      category: "Smartwatches"
    },
    { 
      id:   22, 
      name: 'iPhone16', 
      category: 'iPhone', 
      image: '/images/iphone13.avif', 
      storage: '128 Go', 
      color: 'Minuit', 
      unlocked: 'Débloqué', 
      rating: '4.4/5', 
      reviews: 21245, 
      currentPrice: 424.0, 
      oldPrice: 749.0, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement",
      description: "Un smartphone élégant offrant de hautes performances avec une grande autonomie."
    },
    
    { 
      id:   23, 
      name: 'IphoneXR', 
      category: 'iPhone', 
      image: '/images/iphone8.avif', 
      storage: '64 Go', 
      color: 'Gris sidéral', 
      unlocked: 'Débloqué', 
      rating: '4.2/5', 
      reviews: 2195, 
      currentPrice: 109.74, 
      oldPrice: 299.0, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement",
      description: "Compact et performant, l’iPhone 8 est parfait pour un usage quotidien."
    },
    { 
      id:  24, 
      name: 'iPhone 14', 
      category: 'iPhone', 
      image: '/images/iphone14.jpg', 
      storage: '256 Go', 
      color: 'Blanc', 
      unlocked: 'Débloqué', 
      rating: '4.6/5', 
      reviews: 5050, 
      currentPrice: 1029.0, 
      oldPrice: 1200.0, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement",
      description: "Le dernier modèle d’Apple avec des fonctionnalités avancées et un design épuré."
    },
    { 
      id: 25, 
      name: 'Galaxy Z Fold 4', 
      category: 'Smartphones Android', 
      image: '/images/fold4.jpg', 
      storage: '512 Go', 
      color: 'Noir', 
      unlocked: 'Débloqué', 
      rating: '4.8/5', 
      reviews: 1200, 
      currentPrice: 1500.0, 
      oldPrice: 1800.0, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement",
      description: "Un smartphone pliable révolutionnaire offrant un écran massif et des performances haut de gamme."
    },
    { 
      id:   26, 
      name: 'HP EliteBook 850 G5 15', 
      category: 'Ordinateurs Windows', 
      image: '/laptops_pic/hpelitbook850.png', 
      color: ['white', 'aqua', 'darkblue', 'red'], 
      rating: '4.6/5', 
      reviews: 14, 
      currentPrice: 425.01, 
      oldPrice: 1900.00, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Un ordinateur portable professionnel avec de bonnes performances et une construction solide.",
      storage: '512 Go SSD'
    },
    { 
      id: 27, 
      name: 'HP EliteBook 840 G3 14', 
      category: 'Ordinateurs Windows', 
      image: '/laptops_pic/hpelitebook840.png', 
      color: ['white', 'aqua', 'darkblue', 'red'], 
      rating: '4.3/5', 
      reviews: 45, 
      currentPrice: 211.46, 
      oldPrice: 826.00, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Un ordinateur compact et performant pour les professionnels.",
      storage: '256 Go SSD'
    },
    { 
      id: 28, 
      name: 'HP EliteBook 840 G5 14', 
      category: 'Ordinateurs Windows', 
      image: '/laptops_pic/hpelitebook840G5.png', 
      color: ['white', 'aqua', 'darkblue', 'red'], 
      rating: '3.7/5', 
      reviews: 12, 
      currentPrice: 263.42, 
      oldPrice: 1251.00, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Un modèle de qualité moyenne offrant un bon rapport qualité-prix.",
      storage: '512 Go SSD'
    },
    { 
      id: 29, 
      name: 'HP EliteBook 830 G7 13', 
      category: 'Ordinateurs Windows', 
      image: '/laptops_pic/hpelitbook830.png', 
      color: ['white', 'aqua', 'darkblue', 'red'], 
      rating: '5/5', 
      reviews: 10, 
      currentPrice: 389.00, 
      oldPrice: 1899.99, 
      quantite: 1, 
      condition: "Parfait état", 
      vendu_avec: "Câble de chargement", 
      description: "Un ordinateur ultra-léger et performant pour les professionnels mobiles.",
      storage: '256 Go SSD'
    },
];

  

  const [currentStartIndex, setCurrentStartIndex] = useState(0);
  const productsPerPage = 3;
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState([]);
  
  const categories = [
    "Tablets",
    "iPhone",
    "Smartphones Android",
    "Smartwatches",
    "MacBook",
    "Ordinateurs Windows"
  ];

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(index);
    const category = categories[index];
    const filteredProducts = productList.filter(product => product.category === category);
    setSelectedProduct(filteredProducts);
    setCurrentStartIndex(0); // Reset pagination on category change
  };

  const handleNextList = () => {
    if (currentStartIndex + productsPerPage < selectedProduct.length) {
      setCurrentStartIndex(prevIndex => Math.min(prevIndex + productsPerPage, selectedProduct.length - 1));
    }
  };

  const handlePrevList = () => {
    if (currentStartIndex > 0) {
      setCurrentStartIndex(prevIndex => Math.max(prevIndex - productsPerPage, 0));
    }
  };

  const currentVisibleProducts = selectedProduct.slice(currentStartIndex, Math.min(currentStartIndex + productsPerPage, selectedProduct.length));
  
  const navigate = useNavigate();
  const handleViewDetails = (product) => {
    navigate(`/prd/product/${product.name}`, { state: { product } });
  };
  
  return (
    <div className="home">
      <div className="carousel">
        <div className="slides">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${currentIndex === index ? "active" : ""}`}
            >
              <img src={slide.src} alt={slide.alt} />
            </div>
          ))}
        </div>
        <div className="navigation">
          <button className="prev" onClick={prevSlide}>
            ◀
          </button>
          <button className="next" onClick={nextSlide}>
            ▶
          </button>
        </div>
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => showSlide(index)}
            ></span>
          ))}
        </div>
      </div>
      <div className="title">
        <h2 className="a12">La circularité recommence ici.</h2>
        <p className="a12">Achetez et revendez vos appareils à des pros du reconditionné.</p>
      </div>
      <div className="benefits">
        <div className="benefit">
          <i className="fas fa-check-circle"></i>
          <p>Reconditionné par des pros</p>
        </div>
        <div className="benefit">
          <i className="fa-regular fa-dollar-sign"></i>
          <p>Reprise au meilleur prix</p>
        </div>
        <div className="benefit">
        <i class="fa-solid fa-coins"></i>
          <p>Retours gratuits jusqu'au 31/01</p>
        </div>
        <div className="benefit">
          <i className="fa-solid fa-mobile-screen"></i>
          <p>Fonctions bonus dans l'app</p>
        </div>
      </div>

      <div className="Vus_recemment">
        <h1 className="a12">Vus récemment</h1>
        <div className="product-container">
          {visibleProducts.map((product) => (
            <div key={product.id} className="product-card" style={{ width: "180px" }}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.storage} - {product.color}</p>
              <p>⭐ {product.rating} ({product.reviews} avis)</p>
              <p>
                <span className="current-price">{product.currentPrice.toFixed(2)} €</span>
                <span className="old-price">{product.oldPrice.toFixed(2)} €</span>
              </p>
              <div className="overlay">
                <button className="overlay-btn" onClick={() => addToCart(product)}>Ajouter au panier</button>
                <button className="overlay-btn" onClick={() => {handleViewDetails(product) ;scrollToSection(); }}>Voir le détail</button>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-controls">
          <button onClick={handlePrev} disabled={startIndex === 0}>
            ◀
          </button>
          <button onClick={handleNext} disabled={startIndex + itemsPerPage >= products.length}>
            ▶
          </button>
        </div>
      </div>

      <div className="recherches-black-friday">
        <h1 className="a12">Les plus recherchés à Black Friday</h1>
        <div className="items">
          <a href="/smartphones/iPhone"><div className="item">
            <img src="/A7/Phone_HP_Category_Smartphone_desktop.avif" alt="iPhone" />
            <h3 className="a12">iPhone</h3>
          </div></a>
          
          <a href="/laptops/Mac"><div className="item">
            <img src="/A7/HP_Category_Laptop_desktop.avif" alt="MacBook" />
            <h3>MacBook</h3>
          </div></a>
          <a href="/Tablettes/Ipad"><div className="item">
            <img src="/A7/Phone_HP_Category_Tablet_desktop.avif" alt="iPad" />
            <h3>iPad</h3>
          </div></a>
          <a href="/Consoles"><div className="item">
            <img src="/A7/Phone_HP_Category_Gaming_desktop.avif" alt="Console de jeux" />
            <h3>Console </h3>
          </div></a>
        </div>
      </div>


      <section className="hero">
  <div className="hero-content">
    {/* Hero Image */}
    <div className="hero-image">
      <img src="A7/image.png" alt="Hero Section - Discover Our Best Deals" />
    </div>

    {/* Hero Text and Navigation */}
    <div className="hero-text">
      <h1>Découvrez nos meilleures offres</h1>

      {/* Category Navigation */}
      <div className="category-navigation">
        {categories.map((category, idx) => (
          <button
            key={idx}
            className="category-button"
            onClick={() => handleCategoryClick(idx)} // Passe l'index du bouton cliqué
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Carousel and List */}
      <div className="hero-carouselmo">
        <div className="product-containermo">
          {currentVisibleProducts.map((product, index) => (
            <div key={index} className="product-cardmo">
              <span className="badgemo">Top ventes</span>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>
                {product.storage} - {product.color}
              </p>
              <p>
                ⭐ {product.rating} ({product.reviews} avis)
              </p>
              <p>
                <span className="current-pricemo">
                  {product.currentPrice.toFixed(2)} €
                </span>
              </p>
              <div className="overlay">
                <button className="overlay-btn" onClick={() => addToCart(product)}>Ajouter au panier</button>
                <button className="overlay-btn" onClick={() => {handleViewDetails(product) ;scrollToSection(); }}>Voir le détail</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="pagination-controlsmo">
          <button onClick={handlePrevList} disabled={currentStartIndex === 0}>
            ◀
          </button>
          <button
            onClick={handleNextList}
            disabled={currentStartIndex + productsPerPage >= selectedProduct.length}
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  </div>
</section>




    </div>
  );
}

export default Home;
