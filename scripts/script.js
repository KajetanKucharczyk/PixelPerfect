// Some simplejQuery scripts for adding / removing classes on user interaction.

$(document).ready(function() {

    // MOBILE MENU CLICKED
    // Add / Remove some classes for expandind and closing menu.
    $(".menu__mobile-menu-widget").click(function() {
        if($(".menu__mobile-menu-widget--clicked").length) {
            $(".menu__mobile-menu-widget").removeClass("menu__mobile-menu-widget--clicked")
            $(".menu-container").removeClass("clicked")
        } else {
            $(".menu__mobile-menu-widget").addClass("menu__mobile-menu-widget--clicked")
            $(".menu-container").addClass("clicked")
        }
    })

    // SAME HEIGHT AS WIDTH
    // Make the same height and width for info elements.
    $(".info-container__item").css("height", $(".info-container__item").width())
    $( window ).resize(function() {
        $(".info-container__item").css("height", $(".info-container__item").width())
    });

    // MENU LANGUAGE
    // Clicking event for language dropdown menu.
    $(".menu__language").click(function() {
        if($(".menu__language--submenu--clicked").length) {
            $(".menu__language--submenu").removeClass("menu__language--submenu--clicked")
        } else {
            $(".menu__language--submenu").addClass("menu__language--submenu--clicked")
        }
    })
    // Displaying selected language bar on main menu.
    $(".menu__language--submenu--PL").click(function() {
        $(".menu__language--PL").css("display", "flex")
        $(".menu__language--ENG").css("display", "none")
        $(".menu__language--DE").css("display", "none")
    })
    $(".menu__language--submenu--ENG").click(function() {
        $(".menu__language--PL").css("display", "none")
        $(".menu__language--ENG").css("display", "flex")
        $(".menu__language--DE").css("display", "none")
    })
    $(".menu__language--submenu--DE").click(function() {
        $(".menu__language--PL").css("display", "none")
        $(".menu__language--ENG").css("display", "none")
        $(".menu__language--DE").css("display", "flex")
    })

    // MENU SCROLL
    // Make manu fixed on scrolling.
    $( window ).scroll(function() {
        if($(window).scrollTop() > 33) {
            $("header").addClass("header--scrollable")
            $(".menu-container").addClass("menu-container--scrollable")
            $(".image-grid").addClass("image-grid--scrollable")
        } else {
            $("header").removeClass("header--scrollable")
            $(".menu-container").removeClass("menu-container--scrollable")
            $(".image-grid").removeClass("image-grid--scrollable")
        }
    })
})