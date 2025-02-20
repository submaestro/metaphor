// header 공통 JS
let lastScrollTop = 0;
const header = document.querySelector("#header");
const gnb = document.querySelector("#gnb");
const m_trigger_bar = document.querySelector(".m_trigger_bar");
const m_header_menu = document.querySelector("#m_header_menu");

// 모바일 gnb 사이드바 메뉴 토글
m_trigger_bar.addEventListener("click", function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    m_header_menu.classList.add("active");
    gnb.classList.add("active");
  } else {
    m_header_menu.classList.remove("active");
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

  // 사이드 메뉴 바 열였을 때는 hidden 막기
  if (m_trigger_bar.classList.contains("active")) {
    header.classList.remove("hidden");
  }
});
