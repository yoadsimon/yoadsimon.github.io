document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.gallery-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 30, // Rotation angle for each slide.
            stretch: 10, // Stretch space between slides.
            depth: 150, // Depth of slides.
            modifier: 1, // Effect multiplier.
            slideShadows: false, // Disable shadows.
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            640: {
                slidesPerView: 3, // View three slides at a time for screens >= 640px.
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 5, // View five slides at a time for screens >= 1024px.
                spaceBetween: 40,
            }
        }
    });
});