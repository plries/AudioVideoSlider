var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000,
    },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 25,
        stretch: 900,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        1440: {
            coverflowEffect: {
                stretch: 450,
            },
        },
        768: {
            coverflowEffect: {
                stretch: 250,
            },
        },
        425: {
            coverflowEffect: {
                stretch: 150,
            },
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

})