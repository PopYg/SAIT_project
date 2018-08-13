'use strict';
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
function about(){
    // press
    var $press = $(".press"),
        $listSelect = $press.find(".list_select");

    $listSelect.find("li").click(function () {
        var _index = $(this).index();
        $listSelect.find("li button").removeClass("active");
        $(this).find("button").addClass("active");
        if(_index === 1){
            $(".board_list ul").addClass("list_shape");
        } else {
            $(".board_list ul").removeClass("list_shape");
        }
    });
}







function layout(){
    var $header = $("#header");
    var $gnb = $("#gnb");
    var $searchBtn = $("#searchBtn");
    var $gnbDepth1 = $gnb.find(".depth1");

    //gnb 전체메뉴
   /* $gnbBtn.click(function () {
        if ($(this).hasClass("active") === false) {
            $(this).addClass("active");

            TweenMax.to($allDepth, .3, {height: 517, ease:es_step});
            TweenMax.to($(".dimmed"), .3, {opacity:0.5, display:"block", ease:es_step});
        } else {
            $(this).removeClass("active");
            TweenMax.to($allDepth, .3, {height: 0, ease:es_step});
            TweenMax.to($(".dimmed"), .3, {opacity:0, display:"none", ease:es_step});
        }
    });*/

    //gnb open/close
    $gnbDepth1.find("> li").on("mouseenter.depth01 focusin", function () {
        gnbOpen()
    });
    $gnb.find(".header_banner").focus(function () {
        gnbOpen()
    });
    $header.on("mouseleave.depth01 focusout", function () {
        gnbClose();
    });
    $searchBtn.on("keydown", function (e) {
        var tab = Tab(function(){
            gnbClose();
        }, e);
    });
    function gnbOpen(){
        $header.addClass("header_open");
        TweenMax.to($header, .3, {height: 722, ease: es_step});
    }
    function gnbClose(){
        $header.removeClass("header_open");
        TweenMax.to($header, .3, {height: 104, ease: es_step});
    }
}
/**
 * Tab
 * @param callback
 * @param event
 * @returns {boolean}
 * @constructor
 */
function Tab(callback, event){
    var e = event;
    var charCode = e.which || e.keyCode;
    if (e.shiftKey === false) {
        if (charCode === 9) {
            callback();
            return true;
        }
    } else {
        return false;
    }
}







function locationJS(){
    var $subLocation = $("#subLocation");
    var $locationBox = $(".location_box");
    $subLocation.find("button").on("click focusin",function () {
        var locationDepthH = $(this).siblings(".under_depth").outerHeight();
        $subLocation.find("button").removeClass("active");
        $(this).addClass("active");
        TweenMax.to($(".location_list > li") , .3, {height: 76, ease:es_step});
        TweenMax.to($(this).parent(), .3, {height: locationDepthH + 76, ease:es_step});
    });

    $locationBox.on("mouseleave",function(){
        $subLocation.find("button").removeClass("active");
        TweenMax.to($(".location_list > li") , .3, {height: 76, ease:es_step});
    });

    /*//서브 인트로 일때 로케이션
    if($container.hasClass("intro")){
        $(window).scroll(function () {
            if (winSc > 1) {
                TweenMax.to($locationBox, 1, {y: -30, ease:es_step});
            } else {
                TweenMax.to($locationBox, 0.5, {y: 0, ease:es_step});
            }
            if (winSc > winH - 60) {
                $locationBox.addClass("active");
            } else {
                $locationBox.removeClass("active");
            }
        });
    } else {
        $(window).scroll(function () {
            if (winSc > 510) {
                $locationBox.addClass("active");
            } else {
                $locationBox.removeClass("active");
            }
        });
    }*/
}
function main(){
    TweenMax.to($("#visualIden path"), 10, {"stroke-dashoffset":0, ease:es_step});
}
function object(){
    //custom select
    var $selCustom = $("#selectCustom"),
        $selBtn = $selCustom.find("> button");
    var $selWrap = $selCustom.find("ul"),
        $seltOption = $selWrap.find("button"),
        $seltOptionLength = $selWrap.find("li").size();

    $selBtn.click(function () {
        $(this).addClass("active");
        TweenMax.to($selWrap, .3, {display:"block", height: $seltOptionLength * 37 + 12, ease:es_step});
    });
    $seltOption.click(function () {
        $seltOption.removeClass("active");
        $(this).addClass("active");
        $selBtn.text($(this).text());
        seltOptionStep()
    });
    $selCustom.on("mouseleave", function () {
        seltOptionStep();
    });
    function seltOptionStep(){
        $selBtn.removeClass("active");
        TweenMax.to($selWrap, .3, {display:"none", height: 0, ease:es_step});
    }
    $seltOption.parent().eq(-1).find("button").keydown(function(e){
        var tab = Tab(function(){
            seltOptionStep();
        }, e);
    })
}








function scrollBg(){
    $(window).scroll(function(){
        $(".tit_wrap").each(function () {
            var offset = $(this).offset();
            var offset_top = offset.top;
            if (offset_top < winSc + winH / 1.5) {
                $(this).find("h1").addClass("on");
            }
        });
        if (winSc > 1 && winSc < winH) {
            TweenMax.to($subVisual, .1, {"background-position-y": (winSc / 10), ease:es_step});
        } else if(winSc === 0){
            TweenMax.to($subVisual, .1, {"background-position-y": 0, ease:es_step});
        }
    });


    var $jsScrSec = $(".js-scr-sec"); //js-scr-sec - 패럴럭스 효과 시작 박스 / 하위 js-scr-box 와 셋트

    var scrInnerStep = []; //각 페이지의 js-scr-sec 위치 저장
    function scrollEvent() {
        $window.scroll(function () {
            scrollMotion(winSc);
        });
        $jsScrSec.each(function(){
            var _this = $(this);
            var secTop = _this.offset().top;
            var secInner = secTop - (winH / 2) - 150;
            scrInnerStep.push([_this,secInner]);
        });
        function scrollMotion(_winSc) {
            $.each(scrInnerStep, function (i, v) {
                if (_winSc >= v[1]) {
                    if (v[0].motion === undefined) {
                        TweenMax.staggerTo(v[0].find(".js-scr-box"), .8, {
                            y: 0, opacity: 1, ease: es_step, className:'+=js-motion-end'
                        }, .2);
                        v[0].motion = true;
                    }
                }
            });
        }
        scrollMotion(winSc);
    }
    scrollEvent();
}




















