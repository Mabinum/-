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