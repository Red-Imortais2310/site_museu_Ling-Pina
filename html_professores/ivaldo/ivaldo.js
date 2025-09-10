// Exemplo de interatividade futura
document.addEventListener("DOMContentLoaded", () => {
  console.log("Museu Interativo carregado com sucesso!");
});

const slideImg = document.getElementById("slide-img");
const slidePaths = [
  "img_tecnologias/slide1.jpg",
  "img_tecnologias/slide2.jpg",
  "img_tecnologias/slide3.jpg",
  "img_tecnologias/slide4.jpg",
  "img_tecnologias/slide6.jpg",
  "img_tecnologias/slide7.jpg",
  "img_tecnologias/slide8.jpg",
  "img_tecnologias/slide9.jpg",
  "img_tecnologias/slide10.jpg",
  "img_tecnologias/slide11.jpg"
];

let currentSlide = 0;

setInterval(() => {
  currentSlide = (currentSlide + 1) % slidePaths.length;
  slideImg.src = slidePaths[currentSlide];
}, 2000); // troca a cada 2 segundos
