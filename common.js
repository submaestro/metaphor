// header 공통 JS
let lastScrollTop = 0;
const header = document.querySelector("#header");
const gnb = document.querySelector("#gnb");
const header_menu_m = document.querySelector("#header_menu_m");
const trigger_bar_m = document.querySelector(".trigger_bar_m");
const search_btn_m = document.querySelector(".search_btn_m");
const search_area_m = document.querySelector("#search_area_m");
const search_close_m = search_area_m.querySelector(".search_close_m");
const search_form_pc = document.querySelector("#search_form_pc");
const search_form_mb = document.querySelector("#search_form_mb");

// 모바일 gnb 사이드바 메뉴 토글
trigger_bar_m.addEventListener("click", function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    header_menu_m.classList.add("active");
    gnb.classList.add("active");
  } else {
    header_menu_m.classList.remove("active");
    gnb.classList.remove("active");
  }
});

// header 스크롤 체크, 히든
window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop >= 0 ? scrollTop : 0;

  if (window.scrollY > 50) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }

  // 사이드 메뉴 바 열었을 때는 hidden 막기
  if (trigger_bar_m.classList.contains("active")) {
    header.classList.remove("hidden");
  }
});

// 모바일 검색창 열고닫기
search_btn_m.addEventListener("click", () => {
  search_area_m.classList.add("active");
});
search_close_m.addEventListener("click", () => {
  search_area_m.classList.remove("active");
});

// 헤더 검색 이벤트 (서버제출 일단 막기)
const header_search = (e) => {
  e.preventDefault();
};
search_form_pc.addEventListener("submit", header_search);
search_form_mb.addEventListener("submit", header_search);
