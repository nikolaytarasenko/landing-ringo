// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const initCarousel = () => {
  const heroCarousel = document.querySelector('#heroCarousel');

  const carousel = new bootstrap.Carousel(heroCarousel, {
    interval: false
  });
}

const customizeContactFormFileInput = () => {
  const fileInputs = document.querySelectorAll('input[type="file"]');

  fileInputs.forEach(input => {
    input.addEventListener('change', function(e) {
      const fileName = this.files[0].name;
      const outputTextNode = this.closest('.contact-form__control').querySelector('.contact-form__file-text');

      outputTextNode.textContent = fileName;
    });
  });
}

const domContentLoadedHandler = () => {
  initCarousel();
  customizeContactFormFileInput();
}

window.addEventListener('DOMContentLoaded', domContentLoadedHandler);