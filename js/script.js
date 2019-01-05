(function () {

//carousell flickity

const element = document.querySelector('.carousel');
const flkty = new Flickity(element, {
  cellAlign: 'left',
  contain: true,
  hash: true,
  pageDots: false
})

// hamburger menu

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const mainNav = document.querySelector('.main-navbar');
const jumbotron = document.querySelector('.jumbotron');

hamburger.addEventListener('click', function () {
  if (hamburger.classList.contains('toggled')) {
      hamburger.classList.remove('toggled');
      nav.classList.remove('nav--toggled');
      jumbotron.classList.remove('jumbotron--blured');
      mainNav.classList.remove('main-navbar--toggled');
  } else {
      hamburger.classList.add('toggled');
      nav.classList.add('nav--toggled');
      jumbotron.classList.add('jumbotron--blured');
      mainNav.classList.add('main-navbar--toggled');
  }
})

//PRTOJECTS FILTER

const tabBtns = document.querySelectorAll('.tab-bar__link');
const cells = document.querySelectorAll('.panel');

tabBtns.forEach(function (elem) {
  elem.addEventListener('click', function (event) {
      event.preventDefault();
      const attribute = event.target.getAttribute('href');

      cells.forEach(function(elem){
          if (attribute === 'all'){
              elem.classList.add('panel--visible');
          } else if (elem.getAttribute('data-category') === attribute){
              elem.classList.add('panel--visible');
          } else {
              elem.classList.remove('panel--visible');
          }
      })

  });
});

})();