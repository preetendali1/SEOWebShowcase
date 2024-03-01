document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 4000,
        },
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
    });
});

