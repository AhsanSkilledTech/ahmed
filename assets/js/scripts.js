	

$(document).ready(function() {
    $(".blogDetails_accordian").click(function(){
        $(this).toggleClass("active")
    })
    $(".navlist_btn").click(function(){
        $(".navbar_list ").toggleClass("active")
    })
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 200) {
            //clearHeader, not clearheader - caps H
            $(".nav_bar").addClass("sticky");
        } else {
            $(".nav_bar").removeClass("sticky");
        }
    });
    $('.dark-btn').click(function() {
        $('body').addClass('darkActive');
        localStorage.setItem('darkClass', 'true');
    });
    $('.light-btn').click(function() {
        $('body').removeClass('darkActive');
        localStorage.removeItem('darkClass');
    });
	if (localStorage.getItem('darkClass') === 'true'){
		$('body').addClass('darkActive');
	}
	// language toggle
    if(document.dir == "ltr"){
        $('.language_toggle_en').addClass("d-none");
        $('.language_toggle_ar').addClass("d-flex");
    }
    if(document.dir == "rtl"){
        $('.language_toggle_ar').addClass("d-none");
        $('.language_toggle_en').addClass("d-flex");
    }
    $('.language_toggle_en').click(function () {
        $('html').attr('dir', 'ltr');
        $('body').addClass('ltr');
        $('body').removeClass('rtl');
        $('.language_toggle_ar').removeClass("d-none");
        $('.language_toggle_en').addClass("d-none");
        localStorage.removeItem('rtl');
    })
    $('.language_toggle_ar').click(function () {
        $('html').attr('dir', 'rtl');
        $('body').addClass('rtl');
        $('body').removeClass('ltr');
        $('.language_toggle_en').removeClass("d-none");
        $('.language_toggle_ar').addClass("d-none");
		localStorage.setItem('rtl', 'true');

    })
    if (localStorage.getItem('rtl') === 'true') {
        $('.language_toggle_ar').addClass("d-none");
        $('.language_toggle_en').removeClass("d-none");
        $('body').addClass('rtl');
        $('body').removeClass('ltr');
        $('html').attr('dir', 'rtl');
    }
    // language toggle

    $('body').click(function() {
		$('.header-side').removeClass("active");
	});
    $('.header-side').click(function(event) {
		event.stopPropagation(); // prevents executing the above event
	});
    AOS.init();
    var swiper1 = new Swiper(".banner-slider", {
        slidesPerView:1,
        centeredSlides: true,
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
    });
    var swiper2 = new Swiper(".clients-slider", {
        slidesPerView:6,
        pagination: {
            el: ".swiper-pagination",
            clickable:true,
        },
        breakpoints:{
            0: {
                slidesPerView: 2,
            },
            540: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 5,
            },
            991: {
                slidesPerView: 5,
            },
            1200: {
                slidesPerView: 5,
            },
            1400: {
                slidesPerView: 5,
            },
            1600: {
                slidesPerView: 6,
            }
        }
    });
    var swiper3 = new Swiper(".team_slider_wrapper", {
        slidesPerView:6,
        navigation:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            992:{
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 30,
            }
        }
    });
    var swiper4 = new Swiper(".news_wrapper", {
        slidesPerView:5,
        spaceBetween: 30,
        navigation:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                  slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 4,
            }
        }
    });
    var swiper5 = new Swiper(".blog_slideror", {
        slidesPerView:4,
        spaceBetween: 30,
        navigation:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints:{
            0: {
                slidesPerView: 1,
            },
            540: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
                },
            1200: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1600: {
                slidesPerView: 4,
            }
        }
    });
});

