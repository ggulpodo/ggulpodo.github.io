window.onload = function () {

    
    let menu_icon = $('.menu-icon');
    let menu_icon_gnb = $('.menu-icon-gnb');
    let black_bg = $('.black-bg');

    menu_icon.click(function () {
        black_bg.addClass('black-bg-show');
        menu_icon_gnb.addClass('gnb-show');
    });

    let close = $('.close');
    close.click(function () {
        black_bg.removeClass('black-bg-show');
        menu_icon_gnb.removeClass('gnb-show');
    });


    // swiper 슬라이드 관련

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,

        breakpoints: {
            // 화면의 넓이가 320px 이상일 때 
            768: {
                slidesPerView: 1,
            },
            // 화면의 넓이가 640px 이상일 때 
            1024: {
                slidesPerView: 2,
            },
            1440: {
                slidesPerView: 3,
            }
        },
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        loopSlides: 1,
        spaceBetween: 50,

        // 좌우이동
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },


    });

    swiper.on('transitionEnd', function () {
        $(".slide-cont").hide().eq(swiper.realIndex).show()
    });

    const icon01 = $('.github>a:first-child');
    const icon02 = $('.kakao>a:first-child');
    const icon03 = $('.gmail>a:first-child');

    const iconText01 = $('.github>a:last-child');
    const iconText02 =  $('.kakao>a:last-child');
    const iconText03 = $('.gmail>a:last-child');

    iconText01.mouseenter(function() {
        icon01.addClass('animation');
        icon01.addClass('githubActive');
    });
    
    iconText01.mouseleave(function() {
        icon01.removeClass('animation');
        icon01.removeClass('githubActive');
    });

    
    iconText02.mouseenter(function() {
        icon02.addClass('animation');
        icon02.addClass('kakaoActive');
    });
    
    iconText02.mouseleave(function() {
        icon02.removeClass('animation');
        icon02.removeClass('kakaoActive');
    });

    iconText03.mouseenter(function() {
        icon03.addClass('animation');
        icon03.addClass('gmailActive');
    });
    
    iconText03.mouseleave(function() {
        icon03.removeClass('animation');
        icon03.removeClass('gmailActive');
    });
    

    // iconText.mouseenter(function(){
    //     icon.addClass('animation')
    // });
    
    // iconText.mouseleave(function(){
    //     icon.removeClass('animation')
    // });

}