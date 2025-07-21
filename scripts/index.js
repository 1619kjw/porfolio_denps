/* 임시링크인 a태그 새로고침 막기 */
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (anchor.getAttribute('href') === '#') {
        e.preventDefault();
        }
    });
});

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
    spaceBetween: 38,      // 슬라이드 간 간격
    freeMode:false,        //하나씩 끊어서 이동됨
    scrollbar: {
        el: '.category ~ .swiper-scrollbar',
    },
})


/* 3행 베스트셀러 탭 구조 */
// const bestTap = document.querySelectorAll('#row3_best .tab-buttons .tab-button');
// const bestTapContents = document.querySelectorAll('#row3_best .tab-contents .tab-content');

// Swiper 인스턴스를 저장할 배열
// const swiperInstances = [];

// 각 탭 안의 swiper를 개별 초기화
// document.querySelectorAll('#row3_best .tab-content .best').forEach((el, idx) => {
//     swiperInstances[idx] = new Swiper(el, {
//         slidesPerView: 4,
//         slidesPerGroup: 1,
//         spaceBetween: 73.33,
//         navigation: {
//             nextEl: el.querySelector('.swiper-button-next'),
//             prevEl: el.querySelector('.swiper-button-prev'),
//         },
//         breakpoints: {
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 }
//         }
//     });
// });

/* 탭 선택 시 해당 탭 내용 보이기 */
// bestTap.forEach((obj, idx)=>{
//     obj.addEventListener('click',()=>{
//         /* 탭 콘텐츠 전환 */
//         bestTapContents.forEach(con => con.classList.remove('active'));
//         bestTapContents[idx].classList.add('active');
//         /* for(let i of bestTapContents){i.style.display='none'};
//         bestTapContents[idx].style.display='block'; */
//         /* 탭 버튼 활성화 처리 */
//         bestTap.forEach(tap => tap.classList.remove('active'));
//         obj.classList.add('active');
//         // Swiper 다시 계산
//         swiperInstances[idx]?.update();
//     })
// })
/* 페이지 로딩 시 첫번째 탭내용보이기 */
/* bestTapContents.forEach((el, idx) => {
    el.style.display = idx === 0 ? 'block' : 'none';
}); */

/* 3행:베스트셀러 스와이퍼 */
// const bestSwiper = new Swiper('.best',{
//     navigation:{
//         nextEl:'.swiper-wrapper ~ .swiper-button-next',
//         prevEl:'.swiper-wrapper ~ .swiper-button-prev',
//     },
//     slidesPerView: 4,      // 한 화면에 4개
//     slidesPerGroup: 1,     // 한 번에 1개 이동
//     spaceBetween: 73.33,   // 슬라이드 간 간격
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {         // 반응형 설정 (선택사항)
//         320: { slidesPerView: 1 },
//         640: { slidesPerView: 2 },
//         1024: { slidesPerView: 4 }
//     }
// })


/* gpt한테 받은 코드 */
const bestTap = document.querySelectorAll('#row3_best .tab-buttons .tab-button');
const bestTapContents = document.querySelectorAll('#row3_best .tab-contents .tab-content');
const swiperInstances = [];

function activateTab(idx) {
    // 모든 탭 비활성화
    bestTap.forEach(t => t.classList.remove('active'));
    bestTapContents.forEach(c => c.classList.remove('active'));

    // 현재 탭 활성화
    bestTap[idx].classList.add('active');
    bestTapContents[idx].classList.add('active');

    // 해당 탭의 swiper 요소 찾기
    const swiperContainer = bestTapContents[idx].querySelector('.swiper');

    // 아직 초기화되지 않았다면 Swiper 생성
    if (swiperContainer && !swiperInstances[idx]) {
        
        swiperInstances[idx] = new Swiper(swiperContainer, {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 73.33,
            navigation: {
                nextEl: swiperContainer.querySelector('.swiper-button-next'),
                prevEl: swiperContainer.querySelector('.swiper-button-prev'),
            },
            breakpoints: {
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
            }
        });
    } else if (swiperInstances[idx]) {
        swiperInstances[idx].update();
    }
}

// 첫 탭 초기화
activateTab(0);

// 탭 클릭 이벤트
bestTap.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        activateTab(idx);
    });
});




/* 4행: 신제품 스와이퍼 */
const newSwiper = new Swiper('.new',{
    navigation:{
        nextEl:'.swiper-wrapper ~ .swiper-button-next',
        prevEl:'.swiper-wrapper ~ .swiper-button-prev',
    },
    slidesPerView: 4,      // 한 화면에 4개
    slidesPerGroup: 1,     // 한 번에 1개 이동
    spaceBetween: 73.33,      // 슬라이드 간 간격
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

/* 5행 탭구조 */
/* 탭 클릭 시 활성화디자인 변경 */
const giftTap = document.querySelectorAll('#row5_gift .tap_menu .tap');
giftTap.forEach((obj)=>{
    obj.addEventListener('click',()=>{
        giftTap.forEach(tap=>tap.classList.remove('active'));
        obj.classList.add('active');
    });
});
/* 탭 클릭 시 해당 탭내용 나오기 */
const giftTapContents = document.querySelectorAll('#row5_gift .gift');
/* 5행 : 선물하기 상품 스크롤바 스와이퍼*/
const giftSwiper = new Swiper('.gift', {
    direction: "vertical",     // 세로 스크롤
    slidesPerView: 3,          // 3개씩 보이기
    spaceBetween: 20,          // 슬라이드 간 간격
    freeMode: true,            // 자유롭게 스크롤
    mousewheel: true,          // 마우스 휠로 스크롤 가능
    scrollbar: {
        el: ".gift .swiper-scrollbar",/* 부모 표시 */
        draggable: true,
    },
});



/* 6행(아티클) 탭 메뉴 디자인 변경 */
const taps = document.querySelectorAll('#row6_article .tap_menu a');
taps.forEach((obj)=>{
    obj.addEventListener('click',()=>{
        /* 모든 탭에 class active 제거 */
        taps.forEach(tap => tap.classList.remove('active'));
        /* 클리한 탭에 class active 추가 */
        obj.classList.add('active');
    })
})
/* 6행 : 아티클 가로 스크롤바 스와이퍼 */
const articleSwiper = new Swiper('.article',{
    slidesPerView:3,      //한번에 3개 보이기
    spaceBetween: 8,      // 슬라이드 간 간격
    scrollbar: {
        el : ".right .swiper-scrollbar",
        draggable: true,
    }
})
/* 7행(영상영역) */
/* 숫자 탭 -> 영상 바뀌기 */
const videoTap = document.querySelectorAll('.video_tab li');
const videoList = document.querySelectorAll('.video_show li')
videoTap.forEach((obj,idx)=>{
    obj.addEventListener('click',()=>{
        for(let i of videoList){i.style.display = 'none';}/* 초기화(모든 영상 숨기기) */
        videoList[idx].style.display = 'block';/* 클릭한 번호의 영상 보이기 */
    })
})
/* 숫자 탭 클릭 시 활성화디자인변경 */
videoTap.forEach((obj,idx)=>{
    obj.addEventListener('click',()=>{
        /* 모든 탭 src를 비활성화상태로 만들기(초기화) */
        videoTap.forEach((obj,idx)=>{
            obj.children[0].children[0].src = `./images/video/${idx+1}.png`;/* 비활성화상태의 이미지연결 */
        })
        /* 클릭한 탭의 src를 활성화디자인으로 바꾸기 */
        obj.children[0].children[0].src = `./images/video/${idx+1}_active.png`;/* 활성화상태의 이미지연결 */
    })
})



/* 8행(리뷰영역) */
/* 탭 -> 탭내용 나오기 */
const tapBtn = document.querySelectorAll('.tap_wrap li');
const reviewTapContent = document.querySelectorAll('.tab_contents li');
tapBtn.forEach((obj,idx)=>{
    obj.addEventListener('click',()=>{
        for(let i of reviewTapContent){i.style.display='none';}/* 초기화(모든 탭내용 숨기기) */
        reviewTapContent[idx].style.display='block';/* 클릭한 탭의 내용 보이기 */
    })
})
/* 활성화탭 디자인 변경 */
tapBtn.forEach((obj)=>{
    obj.addEventListener('click',()=>{
        /* 모든 탭에 class active제거 */
        tapBtn.forEach(tap => tap.classList.remove('active'));
        /* 클릭한 탭에 class active 추가 */
        obj.classList.add('active');
    })
})
/* 페이지 로딩 시 첫번째 탭내용보이기 */
reviewTapContent.forEach((el, idx) => {
  el.style.display = idx === 0 ? 'block' : 'none';
});

