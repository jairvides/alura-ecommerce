const slideContainer = document.getElementById("slide-container");

if(slideContainer){
const images = [
  "./src/assets/img/banner1.png",
  "./src/assets/img/banner2.jpg",
  "./src/assets/img/banner3.jpg",
  "./src/assets/img/banner4.jpg"
];
const titles = [
  "¡Octubre de Promociones!",
  "Obtén Increíbles Promociones",
  "Increíble Catálogo",
  "15% de Descuento en la sección diversos"
];
const descriptions = [
  "Compra estos increíbles juegos con un 25% de descuento",
  "Recibe increíbles bonos de descuentos para tus próximas compras",
  "Encuentra un increíble catálogo de Juegos",
  "Observa la gran variedad de artículos que tenemos sólo para tí"
];
const buttons = [
  "Ver Juegos",
  "Ver Juegos",
  "Ver Juegos",
  "Ver Juegos"
];

const hrefs = [
  "#consoles",
  "#starwars",
  "#diversos",
  "#tecnologia"
]

let currentIndex = 0;
let intervalId;

function showNextImage() {
  const nextIndex = (currentIndex + 1) % images.length;
  const currentSlide = slideContainer.children[currentIndex];
  const nextSlide = slideContainer.children[nextIndex];

  currentSlide.style.display = "none";
  nextSlide.style.display = "block";

  currentIndex = nextIndex;
}

function startSlideShow() {
  intervalId = setInterval(showNextImage, 5000);
}

function stopSlideShow() {
  clearInterval(intervalId);
}

// create slide elements
for (let i = 0; i < images.length; i++) {
  const slide = document.createElement("div");
  slide.classList.add("section__banner");
  slide.style.background = `url(${images[i]}) no-repeat center / cover`;
  if (i !== 0) {
    slide.style.display = "none";
  }

  const about = document.createElement("div");
  about.classList.add("section__banner___about");

  const content = document.createElement("div");
  content.classList.add("section__baner___content");

  const h2 = document.createElement("h2");
  h2.classList.add("section__banner___about__h2");
  h2.innerText = titles[i];

  const p = document.createElement("p");
  p.classList.add("section__banner___about__p");
  p.innerText = descriptions[i];

  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-secondary");
  /* btn.innerText = buttons[i]; */

  const btnLink = document.createElement("a");
  btnLink.href = hrefs[i];
  btnLink.innerText = buttons[i];

  btn.appendChild(btnLink);

  content.appendChild(h2);
  content.appendChild(p);
  content.appendChild(btn);
  about.appendChild(content);
  slide.appendChild(about);
  slideContainer.appendChild(slide);
}

// start slide show
startSlideShow();

// stop slide show when page is not visible
document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "hidden") {
    stopSlideShow();
  } else {
    startSlideShow();
  }
});}