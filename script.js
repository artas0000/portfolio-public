const expansion__button = document.getElementById('expansion__button');
const popup = document.getElementById('education');

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

function expansion() {
  button.style.transform = button.style.transform === 'rotate(-90deg)' ? 'rotate(0deg)' : 'rotate(-90deg)';
  popup.style.height = popup.style.height === '200px' ? '0' : '200px';
  popup.style.opacity = popup.style.opacity === '1' ? '0' : '1';
};
expansion__button.addEventListener('click', expansion);

const description = Array.from(document.getElementsByClassName('description'));
const show_descr_buttons = Array.from(document.getElementsByClassName('description__button'));
show_descr_buttons.forEach(b => {
  b.addEventListener('click', e => {
    description.forEach(x => {
      x.style.height = x.style.height === '500px' ? '0' : '500px';
      x.style.opacity = x.style.opacity === '1' ? '0' : '1';
    })
    show_descr_buttons.forEach(b => {
      b.parentElement.querySelector('span').innerText = b.parentElement.querySelector('span').innerText === 'SHOW' ? 'HIDE' : 'SHOW';
    })
  })
})