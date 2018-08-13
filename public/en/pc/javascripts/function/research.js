function about(){
    // press
    var $press = $(".press"),
        $listSelect = $press.find(".list_select");

    $listSelect.find("li").click(function () {
        var _index = $(this).index();
        $listSelect.find("li button").removeClass("active");
        $(this).find("button").addClass("active");
        if (_index === 1) {
            $(".board_list ul").addClass("list_shape");
        } else {
            $(".board_list ul").removeClass("list_shape");
        }
    });

    //labs
    var $saitList = $(".sait_list");
    var $saitView = $(".sait_view");
    var $saitViewWrap = $saitView.find(".view_wrap");
    var $saitContent = $saitView.find("article");
    $saitList.find("li").click(function () {
        var _this = $(this);
        var _index= _this.index();
        var _$saitContentHeight = $saitContent.eq(_index).height()-450;
        _this.find("button").addClass("active");
        $saitList.find("li button").removeClass("active");
        TweenMax.to($saitContent, .3, {opacity:0, y:50, display:"none", ease:es_step});
        TweenMax.to($saitContent.eq(_index), .3, {opacity:1, y:0, display:"block", ease:es_step});
        TweenMax.to($saitViewWrap, .3, {height:_$saitContentHeight});
    });

    //faq
    var $faqWrap = $(".faq_wrap");
    var $questionBtn = $faqWrap.find("button");
    $questionBtn.click(function () {
        var $questionLi = $(this).parent();
        var $answer = $(this).siblings();
        var $answerTextH = $answer.find(".answer_txt").innerHeight();
        if(!$questionLi.hasClass("active")){
            $questionLi.addClass("active");
            TweenMax.to($answer, .3, {height: $answerTextH, ease: es_step});
        } else {
            $questionLi.removeClass("active");
            TweenMax.to($answer, .3, {height: 0, ease: es_step});
        }
    });
}






