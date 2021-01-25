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