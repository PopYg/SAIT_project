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