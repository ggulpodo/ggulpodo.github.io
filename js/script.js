// $(document).ready(function validation() {
//     var name = document.getElementById("name").value;
//     var subject = document.getElementById("subject").value;
//     var phone = document.getElementById("phone").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;
//     var error_message = document.getElementById("error_message").value;
//     var text;

//     error_message.style.padding = "10px";

//     if(name.leght < 2) {
//         text = "Please Enter Valid Name"
//         error_message.innerHTML = text;
//         return false;
//     }
//     if(subject.leght < 2) {
//         text = "Please Enter Correct Subject"
//         error_message.innerHTML = text;
//         return false;
//     }
//     if(phone.leght < 2) {
//         text = "Please Enter Valid Phone Number"
//         error_message.innerHTML = text;
//         return false;
//     }

//     if(email.indexOF("@") == -1 || email.leght < 6) {
//         text = "Please Enter Valid Email"
//         error_message.innerHTML = text;
//         return false;
//     }

//     if(message.lengt <= 20) {
//         text = "Please Enter More Than 20 Characters"
//         error_message.innerHTML = text;
//         return false;
//     }
//     alert("Form Submitted Succesfully!")
//     return true;

// });

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
        $(".slide-cont").hide().eq(swiper.realIndex).show()
    });
    
}