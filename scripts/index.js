/* 임시링크인 a태그 새로고침 막기 */
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (anchor.getAttribute('href') === '#') {
        e.preventDefault();
        }
    });
});

/* 띠배너 close버튼 */
const lineBnr = document.querySelector('#line_banner');
const closeBtn = document.querySelector('#line_banner > img');
closeBtn.addEventListener('click',()=>{
    lineBnr.style.display = 'none';
})

/* 빈하트누르면 꽉찬하트로 이미지 변경 + 다시 누르면 빈하트로 변경 */
const likeClk = document.querySelectorAll('img[alt="좋아요등록하기"]');//빈 하트 이미지
// console.log(likeClk);
// console.log(likeClk[0].alt,likeClk[0].src); alt와 src속성 읽기
likeClk.forEach(obj=>{
    obj.addEventListener('click',()=>{
        if(obj.src.includes('click_like_active.png')){
            /* 좋아요해제(꽉찬하트일때->빈하트로변경) */
            obj.src = './images/click_like.png';
            obj.alt = '좋아요해제'
            alert('상품이 위시리스트에서 해제되었습니다');
        }else{
            /* 좋아요등록(빈하트일때->꽉찬하트로변경) */
            obj.src = './images/click_like_active.png';
            obj.alt = '좋아요등록'
            alert('상품을 위시리스트에 등록하였습니다');
        }
    })
})

/* 장바구니누르면 활성화 이미지 변경 */
// const cartBtn = document.querySelectorAll('');


/* 1행 : 메인배너 스와이퍼 기능 */
const mainSwiper = new Swiper('.main',{
    // autoplay:{delay:2500,},
    pagination:{
        el:'.main > .swiper-pagination',
        type:'fraction',
    },
    navigation:{
        nextEl:'.swiper-wrapper ~ .custom-next',
        prevEl:'.swiper-wrapper ~ .custom-prev',
    },
});

/* 2행:카테고리 가로 스크롤 스와이퍼 */
const categorySwiper = new Swiper('.category',{
    navigation:{
        nextEl:'.category ~ .custom-next',
        prevEl:'.category ~ .custom-prev',
    },
    slidesPerView: 'auto', // 한 화면에 슬라이드 너비만큼 자동으로 개수 표시
    slidesPerGroup: 1,     // 한 번에 1개 이동
    spaceBetween: 38,      // 슬라이드 간 간격
    freeMode:false,        //하나씩 끊어서 이동됨
    scrollbar: {
        el: '.category ~ .swiper-scrollbar',
    },
})



/* 3행 베스트셀러 탭 구조, 스와이퍼 구조 */
const bestTap = document.querySelectorAll('#row3_best .tab-buttons .tab-button');
const bestTapContents = document.querySelectorAll('#row3_best .tab-contents .tab-content');
const swiperInstances = [];// Swiper 인스턴스를 저장할 배열

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
                nextEl: swiperContainer.querySelector('.custom-next'),
                prevEl: swiperContainer.querySelector('.custom-prev'),
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
        nextEl:'.swiper-wrapper ~ .custom-next',
        prevEl:'.swiper-wrapper ~ .custom-prev',
    },
    slidesPerView: 4,      // 한 화면에 4개
    slidesPerGroup: 1,     // 한 번에 1개 이동
    spaceBetween: 73.33,      // 슬라이드 간 간격
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    breakpoints: {// 반응형 설정
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
    }
})



/* -----------5행(선물하기) */
const giftTap = document.querySelectorAll('#row5_gift .tap_menu .tap');
const giftTapContents = document.querySelectorAll('#row5_gift .bottom .tap_contents .tapcontent');//각 스와이퍼를 묶은 부모
// 탭 클릭 이벤트
giftTap.forEach((obj, idx) => {
    obj.addEventListener('click', () => {
        console.log('click active')
        activateTab5(idx);
        /* 탭버튼 활성화디자인 변경 */
        giftTap.forEach(tap=>tap.classList.remove('active'));
        obj.classList.add('active');
    });
});
//스크롤바 스와이퍼
const swiperInstances5 = [];/* 스와이퍼4개 모두잡는배열 */
function activateTab5(idx) {
    for(let i of giftTapContents){i.style.display = 'none'};//모든탭내용숨기기
    // 해당 탭의 swiper 요소 찾기
    giftTapContents[idx].style.display = 'block'
    const swiperContainer5 = giftTapContents[idx].querySelector('.swiper');//자식으로 들어있는 스와이퍼

    // 아직 초기화되지 않았다면 Swiper 생성
    if (swiperContainer5 && !swiperInstances5[idx]) {
        //클릭한 탭의 탭내용 생성
        swiperInstances5[idx] = new Swiper(swiperContainer5, {
            direction: "vertical",     // 세로 스크롤
            slidesPerView: 3,          // 3개씩 보이기
            spaceBetween: 20,          // 슬라이드 간 간격
            freeMode: true,            // 자유롭게 스크롤
            mousewheel: true,          // 마우스 휠로 스크롤 가능
            scrollbar: {
                el: swiperContainer5.querySelector('.swiper-scrollbar'),
                draggable: true,
            },
        });
    } else if (swiperInstances5[idx]) {
        swiperInstances5[idx].update();
    }
}
//페이지 로딩 시 첫번째 탭내용보이기
activateTab5(0);



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
    slidesPerView:3,      
    spaceBetween: 8,     
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
/* 개별리뷰에 마우스 올렸을때 왼쪽에 상품명, 상품이미지 표시 */
const productName = document.querySelector('#row8_review .contents .product h3');/* 상품명 */
const productImg = document.querySelector('#row8_review .image_wrap img');/* 상품이미지 */
const reviewList = document.querySelectorAll('.reviewlist');/* 리뷰 */
// console.log(productName,productImg,reviewList[0]);
/* 변경될 데이터 만들기 */
const reviewData = ['프로액티브 쏘팔메토', '[산뜻한 일상] 프로액티브 쏘팔메토 2박스/2개월분', '덴마크 유산균이야기 우먼', '철분 헤모케어', '[선물 세트] 덴마크 유산균이야기 3박스 + 덴마크 유산균이야기 우먼 3박스', '마그네슘 솔루션', '비타민D 츄어블 1000IU', '덴마크 유산균이야기 키즈', '루테인지아잔틴 MAX', '비오틴 밸런스', '마그네슘 솔루션', '덴마크 유산균이야기 다이어트', '트루바이타민 I', '[선물하기 단독] 루테인지아잔틴 MAX 2박스 + 덴프스 씨드키퍼 1p', '덴마크 유산균이야기 50캡슐', '엠에스엠 관절케어', '밀크씨슬 리버케어']
const reviewDataImg = ['./images/review/product_img01.png', './images/review/product_img02.png', './images/review/product_img03.png', './images/review/product_img04.png', './images/review/product_img05.png', './images/review/product_img06.png', './images/review/product_img07.png', './images/review/product_img08.png', './images/review/product_img09.png', './images/review/product_img10.png', './images/review/product_img11.png', './images/review/product_img12.png', './images/review/product_img13.png', './images/review/product_img14.png', './images/review/product_img15.png', './images/review/product_img16.png', './images/review/product_img17.png']
/* 리뷰에 마우스 올렸을때 해당 인덱스의 상품명, 이미지 출력 */
reviewList.forEach((obj,idx)=>{
    obj.addEventListener('mouseover',()=>{
        /* 상품명 변경 */
        productName.textContent = reviewData[idx];
        /* 상품이미지 변경 */
        productImg.src = reviewDataImg[idx];
    })
})
/* 리뷰 더보기 버튼 누를 시 리뷰팝업실행 */
const reviewMoreBtn = document.querySelectorAll('#row8_review .bottom img');
const reviewPopup = document.querySelector('.popup_bg')
const popupImg = document.querySelector('.popup img');
const popupText = document.querySelector('.popup .wrap2 p');
const popupName = document.querySelector('.popup .wrap1 p');//리뷰팝업 상품명
const popupScore = document.querySelector('.popup_score');//리뷰팝업 별점

reviewMoreBtn.forEach(obj=>{
    obj.addEventListener('click',()=>{
        reviewPopup.style.display = 'block';
        const review = obj.closest('.reviewlist');//버튼이 속한 리뷰찾기
        popupImg.src = review.querySelector('.reviewlist > img').src;//해당리뷰의 이미지를 팝업이미지에 대입
        popupText.textContent = review.querySelector('.reviewtext').textContent;//해당리뷰의 리뷰내용을 팝업리뷰내용에 대입
        //상품명이랑 별점도 출력
        popupName.textContent = review.querySelector('.product_name').textContent;
        popupScore.innerHTML = review.querySelector('.score').innerHTML;
    })
})
//팝업클릭시 팝업사라지기
reviewPopup.addEventListener('click',()=>{
    reviewPopup.style.display = 'none';})




