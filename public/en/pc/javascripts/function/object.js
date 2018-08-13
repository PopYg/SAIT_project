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







