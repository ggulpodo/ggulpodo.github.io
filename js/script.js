window.onload = function () {

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

}