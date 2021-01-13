/*---------------------Loader-----------------------*/

$(window).load(function () {
    $('#page-loader').fadeOut(500);
});

/*-------------------Owl Carousel-------------------*/

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

/*-------------------Sidebar-------------------*/

function sidebartoggle() {
    var element = document.getElementById("sidebar");

    element.classList.toggle("sidebar-push");
    document.getElementById("overlay").classList.toggle("overlay-toggle");
    document.getElementById("link0").classList.toggle("sidebar-opacity");
    document.getElementById("link1").classList.toggle("sidebar-opacity");
    document.getElementById("link2").classList.toggle("sidebar-opacity");
    document.getElementById("link3").classList.toggle("sidebar-opacity");

    $('.menu-icon').toggleClass("fa-bars fa-times");
}

/*-------------------Gallery-------------------*/




/*-------------------Smooth Scroll-------------------*/

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 700, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
