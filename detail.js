// modal open & close event

const modal_open = document.querySelector(".modal_open");
const modal_close = document.querySelector(".modal_close");
const detail_blackbx = document.querySelector("#detail_blackbx");
const modal_section = document.querySelector("#modal_section");

modal_open.addEventListener("click", () => {
  modal_section.classList.add("active");
  detail_blackbx.classList.add("active");
  document.body.style.overflow = "hidden";
});

modal_close.addEventListener("click", () => {
  modal_section.classList.remove("active");
  detail_blackbx.classList.remove("active");
  document.body.style.overflow = "auto";
});

// modal slide event
