// кнопка возврата к началу страницы
$(".top-btn").removeClass("top-btn--visible");

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $(".top-btn").addClass("top-btn--visible");
        $(".top-btn").removeClass("top-btn--invisible");
    } else {
        $(".top-btn").removeClass("top-btn--visible");
        $(".top-btn").addClass("top-btn--invisible");
    }
});

$(".top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});

// плавный переход по якорям
$(document).on('click', '.header__menu-link', function () {
    var linkID = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(linkID).offset().top
    }, 'slow');
});

// открытие-закрытие модального окна
let projectButtons = document.querySelectorAll('.items__img');
let closeButton = document.querySelector('.modal__close');

for (let projectButton of projectButtons) {
    projectButton.onclick = function (event) {
        event.preventDefault();
        let modalName = this.getAttribute('data-modal');
        let modal = document.querySelector(`.modal[data-modal="` + modalName + `"]`);
        modal.classList.add('modal--opened');
        page.classList.add('page--disabled');
        modal.addEventListener("click", (event) => {
            if (event.target.closest(".modal__close") ||
                event.target.classList.contains("modal__inner") ||
                event.target.classList.contains("modal")) {
                modal.classList.remove('modal--opened');
                page.classList.remove('page--disabled');
            }
        });
    }
}

// slick-slider
// $(window).on('load resize', function() {
//   if ($(window).width() < 769) {
//     $('#slider:not(.slick-initialized)').slick({
//       dots: true,
//       slidesToShow: 3,
//       slidesToScroll: 3,
//       arrows: false,
//       responsive: [
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
//     });
//   } else {
//     $("#slider.slick-initialized").slick("unslick");
//   }
// });

// let projects = new Swiper('.projects__items', {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   lazy: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
// });

let feedBack = new Swiper('.feedback__items', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  lazy: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// мобильное меню
  $(".header__nav-toggle").on("click", function () {
    $("body").toggleClass("page--disabled");
    $(".header__menu").toggleClass("header__menu--visible");
    $(".header__nav-line").toggleClass("header__nav-line--active");
    $(".header__menu-link").on("click", function () {
      $(".header__menu").removeClass("header__menu--visible");
      $(".header__nav-line").removeClass("header__nav-line--active");
      $("body").removeClass("page--disabled");
    });
  });
// переключатель темы
let page = document.querySelector('.page');
let headerLogo = document.querySelector('.header__logo');
let services = document.querySelector('.services');
let servImgs = document.querySelectorAll('.services__img')
let technologies = document.querySelector('.technologies');
let themeButton = document.querySelector('.header__theme');
let themeImg = document.querySelector('.header__theme');
let techItems = document.querySelectorAll('.item__img--switch');
let modal = document.querySelectorAll('.modal');
themeButton.onclick = function (event) {
    event.preventDefault();
    page.classList.toggle('page--dark');
    page.classList.toggle('page--light');
    headerLogo.classList.toggle('header__logo--dark');
    headerLogo.classList.toggle('header__logo--light');
    services.classList.toggle('services--dark');
    services.classList.toggle('services--light');
    technologies.classList.toggle('technologies--dark');
    technologies.classList.toggle('technologies--light');
    for (let techItem of techItems) {
        techItem.classList.toggle('item__img--dark');
        techItem.classList.toggle('item__img--light');
    };
    for (let servImg of servImgs) {
        servImg.classList.toggle('services__img--dark');
        servImg.classList.toggle('services__img--light');
    };
    themeImg.classList.toggle('header__theme--dark');
    themeImg.classList.toggle('header__theme--light');
    modal.forEach(function (item) {
        item.classList.toggle('modal--dark')
        item.classList.toggle('modal--light');
    });
};
    
(function() {
  'use strict';
  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(min-width:769px)' );
  // keep track of swiper instances to destroy later
  let projects;

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {

      // clean up old instances and inline styles when available
	  if ( projects !== undefined ) projects.destroy( true, true );

	  // or/and do nothing
	  return;

      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {

        // fire small viewport version of swiper
        return enableSwiper();

      }

  };
  
  const enableSwiper = function() {

  projects = new Swiper('.projects__items', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  lazy: true,
  breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 20,
        },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

  };
  // keep an eye on viewport size changes
  breakpoint.addListener(breakpointChecker);
  // kickstart
  breakpointChecker();
})(); 

