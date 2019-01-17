$(document).ready(function(){
    setPlaceholder();
});

$(window).resize(function(){
    setPlaceholder();
});

function setPlaceholder() {
    //This is for the Dropdown-Header
    if($(".navbar-toggler").is(':visible')) {
        $("#placeholder").css("width", "0px");
        $(".nav-link").hover(function(){
            $(this).css("background-color", "#005177");
        }, function(){
            $(this).css("background-color", "");
        });
    } else {
        $("#placeholder").css("width", "100%");
        $(".nav-link").unbind('mouseenter mouseleave');
    }
    //This is for the Sticky-Footer
    var x = $("header").height() + $("#sticky").height() + $(".flex-container").outerHeight(true);
    if($("body").height() > x) {
        $("#sticky").css("position", "absolute");
        $("#sticky").css("bottom", "0px");
    } else {
        $("#sticky").removeAttr("style");
    }
    $("#sticky").css("width", $(window).width());
}