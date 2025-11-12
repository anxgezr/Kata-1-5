const swiper = new Swiper('.swiper', {
  slidesPerView: "auto",
  spaceBetween: 16,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
        768: {
            enabled: false,
        }
      },
});

document.querySelector('.swiper-brands').style.height = 'auto';

 const hideButton = document.getElementById('hidebutton');
const brandsList = document.querySelector('.brands-list');

hideButton.addEventListener('click', () => {
  brandsList.classList.toggle('expanded');
  hideButton.classList.toggle('rotated');

  if (brandsList.classList.contains('expanded')) {
    hideButton.textContent = 'Скрыть';
  } else {
    hideButton.textContent = 'Показать всё';
  }
}); 