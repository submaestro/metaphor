// whiteheart fill event

const whiteheart = document.querySelector(".whiteheart");
const whiteheartspan = document.querySelector(".whiteheartspan");

whiteheart.addEventListener("click", () => {
  let whiteheartcount = parseInt(whiteheartspan.innerText.replace(/,/g, ""));

  if (whiteheart.src.includes("imgs/icon_detailmain_whiteheartb.png")) {
    whiteheart.src = "imgs/icon_detailmain_whiteheart.png";
    whiteheartcount += 1;
  } else {
    whiteheart.src = "imgs/icon_detailmain_whiteheartb.png";
    whiteheartcount -= 1;
  }

  whiteheartspan.innerText = whiteheartcount.toLocaleString();
});

// mintheart fill event

const minthearts = document.querySelectorAll(".mintheart");
const mintheartspans = document.querySelectorAll(".mintheartspan");

minthearts.forEach((mintheart, index) => {
  mintheart.addEventListener("click", () => {
    let mintheartcount = parseInt(
      mintheartspans[index].innerText.replace(/,/g, "")
    );

    if (mintheart.src.includes("icon_detailmain_mintheartb.png")) {
      mintheart.src = "imgs/icon_detailmain_mintheart.png";
      mintheartcount += 1;
    } else {
      mintheart.src = "imgs/icon_detailmain_mintheartb.png";
      mintheartcount -= 1;
    }

    mintheartspans[index].innerText = mintheartcount.toLocaleString();
  });
});

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

// modal mslide event
const mslides = document.querySelector(".mslides");
const mslide = document.querySelectorAll(".mslides li");

const mslideCount = mslide.length;
const mslideWidth = 400;
const mslideMargin = 100;

let currentIdx = 0;

const updateWidth = () => {
  const currentSlides = document.querySelectorAll(".mslides li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${
    (mslideWidth + mslideMargin) * newSlideCount - mslideMargin
  }px`;
  mslides.style.width = newWidth;
};

const setInitialPos = () => {
  const initialTranslateValue = -(mslideWidth + mslideMargin) * mslideCount;
  mslides.style.transform = `translateX(${initialTranslateValue}px)`;
};

const makeClone = () => {
  for (let i = 0; i < mslideCount; i++) {
    const cloneSlide = mslide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    mslides.appendChild(cloneSlide);
  }

  for (let i = mslideCount - 1; i >= 0; i--) {
    const cloneSlide = mslide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    mslides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPos();

  setTimeout(() => {
    mslides.classList.add("animated");
  }, 100);
};

makeClone();

const moveSlide = (num) => {
  mslides.style.left = `${-num * (mslideWidth + mslideMargin)}px`;
  currentIdx = num;

  if (currentIdx === mslideCount || currentIdx === -mslideCount) {
    setTimeout(() => {
      mslides.classList.remove("animated");
      mslides.style.left = "0px";
      currentIdx = 0;
    }, 500);
  }

  setTimeout(() => {
    mslides.classList.add("animated");
  }, 600);
};

let timer = undefined; // 타이머 변수

const autoSlide = () => {
  if (timer === undefined) {
    // 중복 실행 방지
    timer = setInterval(() => {
      moveSlide(currentIdx + 1); // 3초마다 다음 슬라이드 이동
    }, 3000);
  }
};

autoSlide();

// slide button event
const mslide_right = document.querySelector(".slide_right");
const mslide_left = document.querySelector(".slide_left");

mslide_right.addEventListener("click", () => {
  moveSlide(currentIdx + 1);
});

mslide_left.addEventListener("click", () => {
  moveSlide(currentIdx - 1);
});

const stopSlide = () => {
  clearInterval(timer);
  timer = undefined;
};

mslides.addEventListener("mouseenter", () => {
  stopSlide();
});
mslides.addEventListener("mouseleave", () => {
  autoSlide();
});
