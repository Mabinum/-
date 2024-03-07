// 검색 영역(.search)클릭 시 input에 강제 포커스 및 제어
// 검색 영역 div와 input 찾기 
const searchEl = document.querySelector('div.search');
// const searchInputEl = document.querySelector('.search input');
// 문서 전체에서 찾지 말고 아래와 같이 최적화
const searchInputEl = searchEl.querySelector('input');

// 검색 영역을 클릭하면 input 요소를 포커스하도록 실행
searchEl.addEventListener('click',function(){ //이벤트 핸들러
  searchInputEl.focus(); //요소에 포커스 강제 적용
});

//input 요소에 포커스되면 placeholder 추가
input_focus = searchInputEl.addEventListener('focus',function(){
  searchInputEl.setAttribute('placeholder','입력해주세요');
  searchEl.classList.add('focused');
});

//input 요소에 포커스가 해제(blur)되면 placeholder 초기화
input_blur = searchInputEl.addEventListener('blur',function(){
  searchInputEl.setAttribute('placeholder','');
  searchEl.classList.remove('focused');
});

// 스크롤 시 전역 배지(고정 배너)숨기기
const badgeEl = document.querySelector('header .badges');

// 페이지에 스크롤 이벤트 감지를 추가!
// window : 브라우저 창 객체
window.addEventListener('scroll',function(){
  //console.log(window.scrollY); //(y축으로 얼마나 스크롤 했는지) 페이지 스크롤 위치
  // Quiz : 
  // style.color = 'red';
  // style.backgroundColor = 'red';
  // 자바스크립트는 camelcase적용
  // 페이지 스크롤 위치가 500px을 넘으면 배지요소를 숨기고
  // 페이지 스크롤 위치가 500px을 넘지 않으면 배지 요소 보이기!
  if (window.scrollY >= 500){
    // badgeEl.style.display = 'none';
    // badgeEl.style.opacity = 0;
    // badgeEl.style.visibility = 'hidden';
    // badgeEl.setAttribute('style',"opacity : 0; visibility : hidden;");

    // gsap.to(요소, 지속시간, 옵션: {}옵션의 데이터타입은 객체)메소드 : CSS속성을 통해 애니메이션 처리
    gsap.to(badgeEl, 0.4, {
      opacity: 0,
      display : 'none'
    });
  } else {
    // badgeEl.style.display = 'block';
    // badgeEl.style.opacity = 1;
    // badgeEl.style.visibility = 'visible';
    // badgeEl.setAttribute('style',"display:block;");
    gsap.to(badgeEl, 0.4, {
      opacity: 1,
      display : 'block'
    });
  }
});

// 순차적으로 VISUAL 섹션 내 요소 보이기
// 나타날 요소(.fade-in)들을 찾기
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl,index){
  // gsap.to(요소,지속시간,옵션:,{});
gsap.to(fadeEl, 0.4,{ 
  opacity:1,
  delay: (index+1)*0.7//0.7s, 1.4s, 2.1s, 2.8s
});
// console.log(fadeEls);
// fadeEl.setAttribute('opacity',"`${index+1};`");
});
// `${index+1}`이건 문자사용할때 사용

// 공지사항 수직 슬라이드 가능
// new 키워드로 Swiper 객체를 생성 => 슬라이드 기능을 생성
// new Swiper(요소.{});
// 첫 번째 인수: 슬라이드 기능을 적용할 요소의 선택자
// 두 번째 인수: 다양한 옵션을 객체 데이터로 전달(API 페이지참고)
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical', //수직 슬라이드
  loop: true, //반복 재생 여부, 1 -> 2 -> 3 -> 4 -> 다시 1
  autoplay: true //자동 재생 여부 
});




// swiper 사이트 들어가서 설정들을 보고 나중에 적용가능할듯
