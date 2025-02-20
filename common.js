// headaer
const header = document.querySelector("#header");
const gnb = document.querySelector("#gnb");
const m_trigger_bar = document.querySelector(".m_trigger_bar");
const m_header_menu = document.querySelector("#m_header_menu");

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

window.addEventListener("scroll", () => {
  console.log("teset");
  if (window.scrollY > 50) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});
