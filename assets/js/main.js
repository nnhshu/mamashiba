(function ($) {
	"use strict";
    
    jQuery(window).load(function(){


        function news10Swiper(){
            var swiper10 = new Swiper(".maan-shiba-slder-section .swiper-container-one", {
                loop: true,
                autoplay: false,
                spaceBetween: 30,
                slidesPerView: 5,
                speed: 3000,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                    breakpoints: {
                        1200: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        },
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: "auto",
                            spaceBetween: 20
                        },
                        320: {
                            slidesPerView: "auto",
                            spaceBetween: 10
                        },
                    },
                
            });


            var swiper10 = new Swiper(".safety-wrapper .swiper-container-two", {
                loop: true,
                autoplay: false,
                spaceBetween: 30,
                slidesPerView: 3,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                speed: 3000,
                    breakpoints: {
                        1200: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 15,
                        },
                    },
                
            });
        };

        // Navbar Fixed  
        function navbarFixed(){
            if ( $('header').length ){ 
                $(window).on('scroll', function() {
                    var scroll = $(window).scrollTop();   
                    if (scroll >= 95) {
                        $("header").addClass("navbar_fixed");
                    } else {
                        $("header").removeClass("navbar_fixed");
                    }
                });
            };
        };  


        
        // Hamburger-menu
        $('.hamburger-menu, .header-main-menu ul li a').on('click', function () {
            $('.hamburger-menu .line-top, .header-main-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });


        // jQuery for page scrolling feature - requires jQuery Easing plugin
        $(function() {
            $('.header-main-menu ul li a, .menu li a').on('click', function(event) {
                var $anchor = $(this);
                var headerH = '100';
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
                }, 600, 'easeInSine');
                event.preventDefault();
            });
        });


        // copy text
        $('<div class="copy">Copy complete</div>').prependTo($('.copy_mail'));
        $('.copy_mail').on('click', function(){
            var temp = $("<input>");
            $("body").append(temp);
            temp.val($('.copy-text small').text()).select();
            document.execCommand("copy");
            temp.remove();

            $(this).find('.copy').addClass('show');

            setTimeout(function(){
                $('.copy').removeClass('show');
            }, 600);
        });




        new WOW().init(); 
        news10Swiper();
        navbarFixed();
        MobileMenu ()

    });


}(jQuery));	