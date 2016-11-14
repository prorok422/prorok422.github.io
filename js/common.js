$(document).ready(function () {

    function heightDetect() {
        $(".main_head").css("height", $(window).height()); //min-height main_header height screen
    }

    heightDetect();
    $(window).resize(function () {
        heightDetect();
    });
    $(".toggle_menu, .menu_item").click(function () {
        $("#sandwich").toggleClass("active");
    });
    $(".toggle_menu").click(function(){
        if ($(".top_menu").is(":visible")){
            $(".top_menu").fadeOut(600);
        } else {
            $(".top_menu").fadeIn(600);
        };
    });
});

$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
