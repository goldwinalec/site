'use strict';

// кнопка возврата к началу страницы
const topButton = document.getElementById('top-btn');

window.addEventListener('scroll', function () {
  scrollFunction();
});
const scrollFunction = function () {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    topButton.classList.add('top-btn--visible');
  } else {
    topButton.classList.remove('top-btn--visible');
  }
};
const scrollToTop = function () {
  document.body.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  document.documentElement.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// плавный переход по якорям
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// открытие-закрытие модального окна
let projectButtons = document.querySelectorAll('.items__img');
let closeButton = document.querySelector('.modal__close');

for (let projectButton of projectButtons) {
  projectButton.onclick = function (evt) {
    evt.preventDefault();
    let modalName = this.getAttribute('data-modal');
    let modal = document.querySelector(
      `.modal[data-modal="` + modalName + `"]`
    );
    modal.classList.add('modal--opened');
    page.classList.add('page--disabled');
    modal.addEventListener('click', (evt) => {
      if (
        evt.target.closest('.modal__close') ||
        evt.target.classList.contains('modal__inner') ||
        evt.target.classList.contains('modal')
      ) {
        modal.classList.remove('modal--opened');
        page.classList.remove('page--disabled');
      }
    });
  };
}

// мобильное меню
const toggleNav = document.querySelector('.header__nav-toggle');
const headerNav = document.querySelector('.header__menu');
const navLink = document.querySelectorAll('.header__menu-link');
const body = document.querySelector('body');

toggleNav.addEventListener('click', function () {
  toggleNav.classList.toggle('header__nav-toggle--active');
  headerNav.classList.toggle('header__menu--visible');
  body.classList.toggle('page--disabled');
});

navLink.forEach((link) => {
  link.addEventListener('click', function () {
    toggleNav.classList.remove('header__nav-toggle--active');
    headerNav.classList.remove('header__menu--visible');
    body.classList.remove('page--disabled');
  });
});

// переключатель темы
let page = document.querySelector('.page');
const toggleThemeButton = document.querySelector('.header__theme');

let currentTheme = null;
const defaultTheme = 'dark';

const initTheme = () => {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', defaultTheme);
    currentTheme = 'light';
  } else {
    currentTheme = localStorage.getItem('theme');
  }

  changedColor();
};

const changedColor = () => {
  if (currentTheme === 'dark') {
    page.classList.add('page--dark');
    page.classList.remove('page--light');
  } else {
    page.classList.remove('page--dark');
    page.classList.add('page--light');
  }
};

toggleThemeButton.addEventListener('click', () => {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'light');
    currentTheme = 'light';
  } else {
    localStorage.setItem('theme', 'dark');
    currentTheme = 'dark';
  }

  changedColor();
});

initTheme();

// слайдер
(function () {
  const breakpoint = window.matchMedia('(min-width:769px)');
  let projects;

  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (projects !== undefined) projects.destroy(true, true);
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };

  const enableSwiper = function () {
    projects = new Swiper('.projects__items', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      lazy: true,
      breakpoints: {
        768: {
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
  breakpoint.addListener(breakpointChecker);
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

const scrollElements = document.querySelectorAll('.js-scroll');
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add('scrolled');
};
const hideScrollElement = (element) => {
  element.classList.remove('scrolled');
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};
window.addEventListener('scroll', () => {
  handleScrollAnimation();
});

const showContent = function () {
  const loader = document.querySelector('.preloader');
  const body = document.querySelector('body');
  setTimeout(() => {
    loader.style.display = 'none';
    body.classList.add('page--active');
  }, 500);
};

const init = function () {
  showContent();
};

window.onload = function () {
  init();
};
