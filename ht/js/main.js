document.body.onscroll = function () {
    var topH = $("#top").css("height").replace("px", "");
    // $("#about-text>h1").css("margin-left", -document.documentElement.scrollTop * 3);
    // $("#about-text>h3").css("margin-left", -document.documentElement.scrollTop * 3);
    if (document.documentElement.scrollTop > topH) {
        $("#top-menu").addClass("bg-light");
        $("#top-menu").addClass("navbar-light");
        $("#top-menu").removeClass("navbar-dark");
        $("#top-menu").css("margin-top", "0");
        $("#main").css("background-image", "url(img/mountainblur.jpg)");
        $("#btn").addClass("btn-dark");
        $("#btn").removeClass("btn-light");
        $("#about-text").css("visibility","hidden");
    }
    else {
        $("#top-menu").removeClass("bg-light");
        $("#top-menu").addClass("navbar-dark");
        $("#top-menu").removeClass("navbar-light");
        $("#main").css("background-image", "url(img/mountain.jpg)");
        $("#top-menu").css("margin-top", topH - document.documentElement.scrollTop + "px");
        $("#btn").addClass("btn-light");
        $("#btn").removeClass("btn-dark");
        $("#about-text").css("visibility","visible");
    }
};