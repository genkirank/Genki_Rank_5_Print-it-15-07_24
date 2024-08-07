document.addEventListener("DOMContentLoaded", function () {
  const slides = [
      {
          image: "slide1.jpg",
          tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
      },
      {
          image: "slide2.jpg",
          tagLine: "Tirages haute définition grand format <span>pour vos bureaux et événements</span>"
      },
      {
          image: "slide3.jpg",
          tagLine: "Impressions sur <span>tous types de supports</span>"
      },
      {
          image: "slide4.png",
          tagLine: "Bannières, affiches, et bien plus <span>à des prix compétitifs</span>"
      }
  ];

  let currentSlide = 0;

  const bannerImg = document.querySelector(".banner-img");
  const bannerTagLine = document.querySelector("#banner p");
  const dots = document.querySelectorAll(".dot");

  function updateBanner() {
      bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
      bannerTagLine.innerHTML = slides[currentSlide].tagLine;
      dots.forEach((dot, index) => {
          dot.classList.toggle("dot_selected", index === currentSlide);
      });
      
  }

 

  document.querySelector(".arrow_left").addEventListener("click", () => {
      currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
      updateBanner();
  });

  document.querySelector(".arrow_right").addEventListener("click", () => {
      currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
      updateBanner();
  });

  dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
          currentSlide = index;
          updateBanner();
      });
  });

  updateBanner(); 
});

