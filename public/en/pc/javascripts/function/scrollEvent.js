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


    var $jsScrSec = $(".js-scr-sec"); // js-scr-sec - 패럴럭스 효과 시작 박스 / 하위 js-scr-box 와 셋트

    var scrInnerStep = []; // 각 페이지의 js-scr-sec 위치 저장
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




















