window.onload = function () {

    // swiper 슬라이드 관련

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
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
    
    swiper.on('transitionEnd', function() {
        console.log(swiper.realIndex)
        $(".slide-cont").hide().eq(swiper.realIndex).show()
    });
    
}
