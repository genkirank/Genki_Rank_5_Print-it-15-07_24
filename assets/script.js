const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Fonction pour gérer le clic sur la flèche gauche
function handleLeftArrowClick() {
  console.log("Flèche gauche cliquée !");
  // Ici, vous pouvez ajouter la logique pour changer d'image
}

// Fonction pour gérer le clic sur la flèche droite
function handleRightArrowClick() {
  console.log("Flèche droite cliquée !");
  // Ici, vous pouvez ajouter la logique pour changer d'image
}

// Attendre que le document soit chargé
document.addEventListener("DOMContentLoaded", function () {
  // Sélectionner les flèches
  const leftArrow = document.querySelector(".arrow_left");
  const rightArrow = document.querySelector(".arrow_right");

  // Ajouter les event listeners
  leftArrow.addEventListener("click", handleLeftArrowClick);
  rightArrow.addEventListener("click", handleRightArrowClick);
});
