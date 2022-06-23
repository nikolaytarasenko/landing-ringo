// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const initCarousel = () => {
  const heroCarousel = document.querySelector('#heroCarousel');

  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: false
  });
}

window.addEventListener('DOMContentLoaded', initCarousel);