var winW;
var winH;
var es_step = "Expo.ease";
var $window = $(window);
$(document).ready(function () {
    $(window).on("load", function () {
        $(window).on("resize", function () {
            winW = $(window).width();
            winH = $(this).height();
        });
        $(this).trigger("resize");
    });
    $(".over_active").click(function () {
        if(!$(this).hasClass("active")){
            $(this).addClass("active");
        } else {
            $(this).removeClass("active");
        }
    });

    var $winScroll = $window.scrollTop();
    $(".popup_open").click(function () {
        TweenMax.to($(".popup_dimmed"), .3, {opacity: 0.5, display: "block", ease: es_step});
        TweenMax.fromTo($("#popup"), .3, {top:$winScroll + 200},{top:$winScroll + 100, y: -50, opacity: 1, display: "block", ease: es_step});
    });

    $(".popup_close").click(function () {
        TweenMax.to($(".popup_dimmed"), .3, {opacity: 0, display: "none", ease: es_step});
        TweenMax.to($("#popup"), .3, {y: 0, opacity: 0, display: "none", ease: es_step});
    });
});







