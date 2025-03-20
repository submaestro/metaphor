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

const signup_btn_m = document.querySelector(".signup_btn_m");
const signup_btn = document.querySelector(".signup_btn");
const mypage_btn = document.querySelector(".mypage_btn");
const mypage_btn_m = document.querySelector(".mypage_btn_m");
const hiUsername = document.querySelector("#hiUsername");

// 로컬스토리지에서 로그인된 사용자 확인
let users = JSON.parse(localStorage.getItem("wsUsers")) || [];
let currentUser = users.find((user) => user.isLoggedIn === true);

if (currentUser) {
  // 로그인한 상태 -> 아이콘 표시 & 로그인/회원가입 버튼 숨기기
  signup_btn.style.display = "none";
  signup_btn_m.style.display = "none";
  mypage_btn.style.display = "flex";
  mypage_btn_m.style.display = "flex";
  search_btn_m.style.marginRight = 0;
  hiUsername.innerText = `${currentUser.name}`;
} else {
  signup_btn.style.display = "flex";
  signup_btn_m.style.display = "flex";
  mypage_btn.style.display = "none";
  mypage_btn_m.style.display = "none";
  search_btn_m.style.marginRight = "35px";
}

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

// 헤더 검색 이벤트 (서버제출x)
const header_search = (e) => {
  e.preventDefault();
};
search_form_pc.addEventListener("submit", header_search);
search_form_mb.addEventListener("submit", header_search);

// footer 이벤트
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector(".up_btn").classList.add("active");
    document.querySelector(".go_artist").classList.add("active");
  } else {
    document.querySelector(".up_btn").classList.remove("active");
    document.querySelector(".go_artist").classList.remove("active");
  }
});

// footer topscroll event
const up_btn = document.querySelector(".up_btn > a");

up_btn.addEventListener("click", function (e) {
  e.preventDefault();
  const targetId = this.getAttribute("href");
  const targetElement = document.querySelector(targetId);
  const targetPosition = targetElement.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

// footer button bottom event
document.addEventListener("scroll", function () {
  const button = document.querySelector(".up_btn");
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;
  const documentHeight = document.documentElement.scrollHeight;
  let footerThreshold = 240;
  if (window.innerWidth <= 767) {
    footerThreshold = 180;
  } else if (window.innerWidth <= 1440) {
    footerThreshold = 200;
  }

  const maxBottom = documentHeight - footerThreshold - windowHeight;

  if (scrollY >= maxBottom) {
    button.style.position = "absolute";
    button.style.bottom = `${footerThreshold}px`;
  } else {
    button.style.position = "fixed"; // 기본 상태 유지
    button.style.bottom = "7vh"; // 기본 위치 유지
  }

  const goArtist = document.querySelector(".go_artist");
  if (scrollY >= maxBottom) {
    goArtist.style.position = "absolute";
    goArtist.style.bottom = `${footerThreshold}px`;
  } else {
    goArtist.style.position = "fixed"; // 기본 상태 유지
    goArtist.style.bottom = "9vh"; // 기본 위치 유지
  }
});
