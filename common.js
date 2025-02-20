// headaer
const header = document.querySelector("#header");
const gnb = document.querySelector("#gnb");
const header_left = document.querySelector(".header_left");
const m_trigger_bar = document.querySelector(".m_trigger_bar");
const m_header_menu = document.querySelector("#m_header_menu");

m_trigger_bar.addEventListener("click", function () {
  this.classList.toggle("active");
  if (this.classList.contains("active")) {
    m_header_menu.classList.add("active");
  } else {
    m_header_menu.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(max-width: 1023px)").matches) {
    header.classList.add("menu_mobile");
  } else {
    header.classList.remove("menu_mobile");
  }

  // if (header.classList.contains("menu_mobile")) {
  //   // header_left.removeChild(gnb);
  //   // m_header_menu.appendChild(gnb);
  //   console.log("test1");
  // } else {
  //   // m_header_menu.appendChild(gnb);
  //   // header_left.removeChild(gnb);
  //   console.log("test2");
  // }
});

// 딱 한번만 체크해야하는데....
if (header.classList.contains("menu_mobile")) {
  // header_left.removeChild(gnb);
  // m_header_menu.appendChild(gnb);
  console.log("test1");
} else {
  // m_header_menu.appendChild(gnb);
  // header_left.removeChild(gnb);
  console.log("test2");
}

// if (header.classList.contains("menu_mobile") !== true) {
//   // m_header_menu.appendChild(gnb);
//   // header_left.removeChild(gnb);
//   console.log("test2");
// }
