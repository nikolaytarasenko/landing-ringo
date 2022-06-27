import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";
import $ from "jquery";
import "slick-carousel";

const initSliders = () => {
  const sliders = [
    {
      centerMode: true,
      sliderNode: '.works__slider .slider__items',
      prevArrowNode: '.works .slider__arrow_left',
      nextArrowNode: '.works .slider__arrow_right',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    },
    {
      centerMode: false,
      sliderNode: '.partners__slider .slider__items',
      prevArrowNode: '.partners .slider__arrow_left',
      nextArrowNode: '.partners .slider__arrow_right',
      slidesToShow: 4,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    }
  ];

  $.each(sliders, function(i, element) {
    $(element.sliderNode).slick({
      infinite: true,
      slidesToShow: element.slidesToShow,
      centerMode: element.centerMode,
      prevArrow: element.prevArrowNode,
      nextArrow: element.nextArrowNode,
      responsive: element.responsive
    })
  });
}

const renderWorksSliderArrows = () => {
  const arrowLeft = document.querySelector('.works__slider .slider__arrow_left');
  const arrowRight = document.querySelector('.works__slider .slider__arrow_right');
  const slideImgHeight = document.querySelector('.works__slider .slider__img-wrapper').getBoundingClientRect().height;

  arrowLeft.style.top = arrowRight.style.top = (slideImgHeight / 2) - 30 + 'px';
}

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
  const agreeRadioButtonStatus = form.querySelector('.contact-form__agree-radio').checked;

  if (!agreeRadioButtonStatus) {
    form.querySelector('.contact-form__agree-text').style.color = '#E11616';

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
  initSliders();
  renderWorksSliderArrows();
  customizeContactFormFileInput();
  addContactFormSubmitEvents();
}

const resizeHandler = () => {
  renderWorksSliderArrows();
}

window.addEventListener('DOMContentLoaded', domContentLoadedHandler);
window.addEventListener('resize', resizeHandler);