(function ($) {

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).load(function () {
        $('#status').fadeOut();
        $('#preloader').delay(300).fadeOut('slow');
    });

    /* ---------------------------------------------- /*
     * Smooth scroll / Scroll To Top
    /* ---------------------------------------------- */
    $(document).ready(function () {

        $('a[href*="#"]').bind("click", function (e) {
            try {
                var anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(anchor.attr('href')).offset().top
                }, 1000);
            } catch (error) {
                // Do nothing
            }
            e.preventDefault();
        });

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });

        /* ---------------------------------------------- /*
         * Tooltip
        /* ---------------------------------------------- */
        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });

        /* ---------------------------------------------- /*
         * Typed JS Hero Text 
        /* ---------------------------------------------- */

        $(function () {

            $("#typed").typed({
                // strings: ["a web developer.", "a web designer.", "Matt."],
                stringsElement: $('#typed-strings'),
                typeSpeed: 50,
                // backDelay: 2000,
                // loop: true,
                // contentType: 'html', // or text
                // defaults to false for infinite loop
                // loopCount: false,
                callback: function () {
                    lift();
                }
            });

        });

        function lift() {
            $(".head-text").addClass("lift-text");
        }

        /* ---------------------------------------------- /*
         * Home BG
        /* ---------------------------------------------- */

        $(".screen-height").height($(window).height());

        $(window).resize(function () {
            $(".screen-height").height($(window).height());
        });

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            $('#home').css({
                'background-attachment': 'scroll'
            });
        } else {
            $('#home').parallax('50%', 0.1);
        }

        /* ---------------------------------------------- /*
         * WOW Animation When You Scroll
        /* ---------------------------------------------- */

        wow = new WOW({
            mobile: false
        });
        wow.init();
    });

    $(window).load(function () {
        loadDeferredImages();

        function loadDeferredImages() {
            var imgDefer = document.getElementsByTagName('img');
            for (var i = 0; i < imgDefer.length; i++) {
                if (imgDefer[i].getAttribute('data-src')) {
                    imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
                }
            }
        }
    });

    $(document).ready(function () {
        $('#currentYear').html(new Date().getFullYear());
    });

    /* ---------------------------------------------- /*
    * Hamburger menu toggle Hack bootstrap menu to display
      the menu icon in all screen sizes
    /* ---------------------------------------------- */

    $(document).ready(function () {
        $(".navbar-toggle").on("click", function () {
            $(this).toggleClass("active");
        });
    });

    //Hamburger menu toggle
    $(".navbar-nav li a").click(function (event) {
        // check if window is small enough so dropdown is created
        var toggle = $(".navbar-toggle").is(":visible");
        if (toggle) {
            $(".navbar-collapse").collapse('hide');
            $('.navbar-toggle').toggleClass("active");
        }
    });


    /* ---------------------------------------------- /*
    * Top Navbar Menu on scrolldown scrollup
      hide and show
    /* ---------------------------------------------- */

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
            $('.header').stop().css({
                background: 'rgb(246, 246, 246)',
                padding: '0px 0',
                borderBottom: '0px solid rgb(246, 246, 246)',
            });
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }

        lastScrollTop = st;
    }

    /*----------------------------------------------
    * Adding some CSS on scrolling I keep it seprated 
      instaded of adding with the code above 
    /* ---------------------------------------------- */

    $(window).scroll(function () {
        var height = $(window).scrollTop();

        if (height > 9000) {
            $('.header').stop().css({
                background: 'rgb(246, 246, 246)',
                padding: '0px 0',
                borderBottom: '0px solid rgb(246, 246, 246)',
            });
            $('.navbar-brand').stop().css({
                color: '#0a0a0a',
            });
            $('.icon-bar').stop().css({
                background: '#0a0a0a',
            });
        } else if (height == 0) {
            $('.header').stop().css({
                background: 'none',
                padding: '30px 0',
                borderBottom: '0px solid rgb(246, 246, 246)',
            });
            $('.navbar-brand').stop().css({
                color: 'white',
            });
            $('.icon-bar').css({
                background: 'white',
            });
        } else {
            $('.navbar-brand').stop().css({
                color: '#0a0a0a',
            });
            $('.icon-bar').stop().css({
                background: '#0a0a0a',
            });
        }
    });

})(jQuery);