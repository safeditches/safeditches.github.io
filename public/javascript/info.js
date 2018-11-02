$(document).ready(function(){
    // once the document is ready, run this code
    console.log("Hello");

    // Button click and scroll events
    $("#law_button").click(function() {
        $('html, body').animate({
            scrollTop: $("#law").offset().top-80
        }, 1000);
    });

    $("#operations_button").click(function() {
        $('html, body').animate({
            scrollTop: $("#operations").offset().top-80
        }, 1200);
    });

    $("#public_button").click(function() {
        $('html, body').animate({
            scrollTop: $("#public").offset().top-80
        }, 1400);
    });
});
