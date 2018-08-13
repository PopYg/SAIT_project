"use strict";
var winW;
var winH;
var es_step = "Expo.ease";
var $window = $(window);
var winSc;
var $container = $("#container");
var $subVisual = $container.find("#subVisual");

$window.load(function () {
    winSc = $(this).scrollTop();
    $window.on("resize", function () {
        winW = $(this).width();
        winH = $(this).height();
    });
    $(this).trigger("resize");

    $(window).scroll(function () {
        winSc = $(this).scrollTop();
    });
    layout();
    main();
    scrollBg();
    locationJS();
    object();
    about();
});