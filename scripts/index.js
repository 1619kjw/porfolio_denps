
/* 메인배너 스와이퍼 기능 */
const mainSlide = new Swiper('.main',{
    // autoplay:{delay:2500,},
    pagination:{
        el:'.main ~ .swiper-pagination',
        type:'fractions',
    },
    navigation:{
        nextEl:'.swiper-wrapper ~ .swiper-button-next',
        prevEl:'.swiper-wrapper ~ .swiper-button-prev',
    },
});