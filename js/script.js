// map
window.initMap = function () {
  const melbourne = {
      lat: -37.815302,
      lng: 144.865231
  };
  const map = new google.maps.Map(document.getElementById('map'), {
      center: melbourne,
      zoom: 12,
      styles: [{
              elementType: 'geometry',
              stylers: [{
                  color: '#f5f5f5',
              }, ],
          },
          {
              elementType: 'labels.icon',
              stylers: [{
                  visibility: 'off',
              }, ],
          },
          {
              elementType: 'labels.text.fill',
              stylers: [{
                  color: '#616161',
              }, ],
          },
          {
              elementType: 'labels.text.stroke',
              stylers: [{
                  color: '#f5f5f5',
              }, ],
          },
          {
              featureType: 'administrative.land_parcel',
              elementType: 'labels.text.fill',
              stylers: [{
                  color: '#bdbdbd',
              }, ],
          },
          {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{
                  color: '#eeeeee',
              }, ],
          },
          {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{
                  color: '#757575',
              }, ],
          },
          {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{
                  color: '#e5e5e5',
              }, ],
          },
          {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{
                  color: '#9e9e9e',
              }, ],
          },
          {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{
                  color: '#ffffff',
              }, ],
          },
          {
              featureType: 'road.arterial',
              elementType: 'labels.text.fill',
              stylers: [{
                  color: '#757575',
              }, ],
          },
          {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{
                  color: '#dadada',
              }, ],
          },
          {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{
                  color: '#616161',
              }, ],
          },
          {
              featureType: 'road.local',
              elementType: 'labels.text.fill',
              stylers: [{
                  color: '#9e9e9e',
              }, ],
          },
          {
              featureType: 'transit.line',
              elementType: 'geometry',
              stylers: [{
                  color: '#e5e5e5',
              }, ],
          },
          {
              featureType: 'transit.station',
              elementType: 'geometry',
              stylers: [{
                  color: '#eeeeee',
              }, ],
          },
          {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{
                  color: '#c9c9c9',
              }, ],
          },
          {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{
                  color: '#9e9e9e',
              }, ],
          },
      ],
  });
  const marker = new google.maps.Marker({
      position: {
          lat: -37.81503,
          lng: 144.960331,
      },
      map: map,
  });
  window.addEventListener('resize', function(){
      if (window.matchMedia("(max-width: 992px)").matches) {
          map.setCenter(marker.position);
      }
  })

}

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

// lazy loading
(function(){
  var blazy = new Blazy({
      success: function(element){
          setTimeout(function(){
              let parent = element.parentNode;
              parent.className = parent.className.replace(/\bloading\b/,'');
          }, 200)
      }
  })
})();