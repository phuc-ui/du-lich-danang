$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $(".bar-introdu").addClass("darkHeader");
    } else {
        $(".bar-introdu").removeClass("darkHeader");
    }

});

$(document).ready(function () {
    $('.activi').click(function () {
        $('.activi').removeClass("active");
        $(this).addClass("active"); 
    });
});

 
