
/* 1행 : 메인배너 스와이퍼 기능 */
const mainSwiper = new Swiper('.main',{
    // autoplay:{delay:2500,},
    pagination:{
        el:'.main > .swiper-pagination',
        type:'fraction',
    },
    navigation:{
        nextEl:'.swiper-wrapper ~ .swiper-button-next',
        prevEl:'.swiper-wrapper ~ .swiper-button-prev',
    },
});

/* 2행:카테고리 가로 스크롤 스와이퍼 */
const categorySwiper = new Swiper('.category',{
    navigation:{
        nextEl:'.category ~ .swiper-button-next',
        prevEl:'.category ~ .swiper-button-prev',
    },
    slidesPerView: 'auto', // 한 화면에 슬라이드 너비만큼 자동으로 개수 표시
    slidesPerGroup: 1,     // 한 번에 1개 이동
    spaceBetween: 40,      // 슬라이드 간 간격
    freeMode:false,        //하나씩 끊어서 이동됨
    scrollbar: {
        el: '.category ~ .swiper-scrollbar',
    },
})
/* 3행:베스트셀러 스와이퍼 */
const bestSwiper = new Swiper('.best',{
    navigation:{
        nextEl:'.swiper-wrapper ~ .swiper-button-next',
        prevEl:'.swiper-wrapper ~ .swiper-button-prev',
    },
    slidesPerView: 4,      // 한 화면에 4개
    slidesPerGroup: 1,     // 한 번에 1개 이동
    spaceBetween: 20,      // 슬라이드 간 간격
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {         // 반응형 설정 (선택사항)
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
    }
})
/* 4행: 신제품 스와이퍼 */
const newSwiper = new Swiper('.new',{
    navigation:{
        nextEl:'.swiper-wrapper ~ .swiper-button-next',
        prevEl:'.swiper-wrapper ~ .swiper-button-prev',
    },
    slidesPerView: 4,      // 한 화면에 4개
    slidesPerGroup: 1,     // 한 번에 1개 이동
    spaceBetween: 20,      // 슬라이드 간 간격
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {         // 반응형 설정 (선택사항)
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
    }
})
/* 5행 : 선물하기 상품 스크롤바 스와이퍼*/
const giftSwiper = new Swiper('.gift', {
    direction: "vertical",     // 세로 스크롤
    slidesPerView: "auto",     // 콘텐츠 길이만큼 자동
    freeMode: true,            // 자유롭게 스크롤
    mousewheel: true,          // 마우스 휠로 스크롤 가능
    scrollbar: {
        el: ".gift .swiper-scrollbar",/* 부모 표시 */
        draggable: true,
    },
});
/* 6행 : 아티클 가로 스크롤바 스와이퍼 */
const articleSwiper = new Swiper('.article',{
    slidesPerView:3,      //한번에 3개 보이기
    spaceBetween: 8,      // 슬라이드 간 간격
    scrollbar: {
        el : ".article .swiper-scrollbar",
        draggable: true,
    }
})
/* 7행(영상영역) 번호페이지네이션 스와이퍼 */
const videoSwiper = new Swiper('.video',{
    navigation: {
        nextEl: "#row7_video .swiper-button-next",
        prevEl: "#row7_video .swiper-button-prev",
    },
    pagination:{
        el:'.video + .swiper-pagination',
        type:'bullets',
    },
})