document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.gallery-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true, // Ensures slides are centered
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 30,
            stretch: 10,
            depth: 150,
            modifier: 1,
            slideShadows: false,
        },
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // },
        breakpoints: {
            0: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 40
            }
        }
    });
});

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}