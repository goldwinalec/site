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

let page = document.querySelector('.page');
let headerLogo = document.querySelector('.header__logo');
let services = document.querySelector('.services');
let servImgs = document.querySelectorAll('.services__img')
let technologies = document.querySelector('.technologies');
let themeButton = document.querySelector('.header__theme');
let themeImg = document.querySelector('.header__theme');
let techItems = document.querySelectorAll('.item__img--switch');
let modal = document.querySelector('.modal');
themeButton.onclick = function () {
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
    modal.classList.toggle('modal--dark');
    modal.classList.toggle('modal--light');
};

