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

const contactFormSubmitHandler = e => {
  e.preventDefault();

  const form = e.target;
  const agreeRadioButtonStatus = form.querySelector('#form-agree-radio').checked;

  if (!agreeRadioButtonStatus) {
    document.querySelector('.contact-form__agree-text').style.color = '#E11616';

    return false;
  }

  const formTitle = form.querySelector('.contact-form__title');
  const message = `<div class="contact-form__message">
                     <h3 class="contact-form__message-title">Дякуємо, що звернулися до нас!</h3>
                     <p class="contact-form__message-text">Наш менеджер зв'яжеться з вами протягом години.</p>
                   </div>
                 `;

  form.innerHTML = '';
  form.append(formTitle);
  form.insertAdjacentHTML('beforeend', message);
}

const addContactFormSubmitEvents = () => {
  const contactForms = document.querySelectorAll('.contact-form');

  contactForms.forEach(form => form.addEventListener('submit', contactFormSubmitHandler));
}

const domContentLoadedHandler = () => {
  initCarousel();
  customizeContactFormFileInput();
  addContactFormSubmitEvents();
}

window.addEventListener('DOMContentLoaded', domContentLoadedHandler);