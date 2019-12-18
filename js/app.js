$(document).foundation()
jQuery(document).ready(function($) {
    // Scroll effects
    $(window).scroll(function () {

        var height = $(window).scrollTop();

        if(height  > 50) {
            $("#common-page-header").addClass("fixed-header");
            $("#tiles-wrapper").addClass("fixed-tiles");
        }

        else if(height  < 1) {
            $("#common-page-header").removeClass("fixed-header");
            $("#tiles-wrapper").removeClass("fixed-tiles");
        }
    });

    $('#submit').click(function() {
        setTimeout(function () { location.href='../index.html'; }, 2500);
        $(this).unbind();

        $("#form-wrapper").addClass("hide");
        $("#obrigado").addClass("visible");
    });
});