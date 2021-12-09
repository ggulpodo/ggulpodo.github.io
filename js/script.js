window.onload = function () {

    // swiper 슬라이드 관련

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 60,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        loopSlides: 1,
        spaceBetween: 10,
        

        // 좌우이동
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        // 슬라이드 목록
        pagination: {
            el: ".swiper-pagination",
            // 클릭이 가능하도록 처리
            clickable: true,
        }

    });
    
    swiper.on('transitionEnd', function() {
        console.log(swiper.realIndex)
        $(".slide-cont").hide().eq(swiper.realIndex).show()
    });
    
}
