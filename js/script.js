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
                event.target.classList.contains("modal__inner")||
                event.target.classList.contains("modal")) {
                modal.classList.remove('modal--opened');
                page.classList.remove('page--disabled');
            }
        });
    }
}

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
const toggleThemeButton = document.querySelector('.header__theme');

let currentTheme = null;
const defaultTheme = "dark";

const initTheme = () => {
  // проверяем есть ли в локал сторадже какое-либо значение
  // по ключу "theme", если нет, то присваиваем дефолтное значение темы
  // иначе просто в переменную currentTheme назначаем
  // тему которая была выбрана ранее
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", defaultTheme);
    currentTheme = "light";
  } else {
    currentTheme = localStorage.getItem("theme");
  }
  
  changedColor();
};

const changedColor = () => {
  if (currentTheme === "dark") {
    page.classList.add('page--dark');
    page.classList.remove('page--light');
  } else {
    page.classList.remove('page--dark');
    page.classList.add('page--light');
  }
};

//смена темы, перезаписываем тему в localStorage
//toggle функция темы
toggleThemeButton.addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
    localStorage.setItem("theme", "light");
    currentTheme = "light";
  } else {
    localStorage.setItem("theme", "dark");
    currentTheme = "dark";
  }

  changedColor();
});

initTheme();

    
// слайдер
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