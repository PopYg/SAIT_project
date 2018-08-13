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






