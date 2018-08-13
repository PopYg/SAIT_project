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
}






