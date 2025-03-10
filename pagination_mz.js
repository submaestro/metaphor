// magazine
const itemsPerPage = 9;
const items = document.querySelectorAll(".magazine_list li");
const itemsCount = items.length;
const pageCount = Math.ceil(itemsCount / itemsPerPage);
const numbers = document.querySelector(".paging_list");
const prevPageBtn = document.querySelector(".paging_area .paging_prev");
const nextPageBtn = document.querySelector(".paging_area .paging_next");
let currentPageNum = 0; //현재 페이지 번호
let currentPageGroup = 0; //현재 페이지그룹 번호
let maxPageNum = 10;

//페이지네이션 생성
for (i = 1; i <= pageCount; i++) {
  const pagingNum = document.createElement("li");
  pagingNum.innerHTML = `
    <li>
      <a href="" class="num">
        <span>${i}</span>
      </a>
    </li>`;

  numbers.appendChild(pagingNum);
}
const numberBtn = numbers.querySelectorAll("a");

numberBtn.forEach((num) => {
  num.closest("li").style.display = "none";
});

numberBtn.forEach((num, index) => {
  num.addEventListener("click", (e) => {
    e.preventDefault();

    //출력 함수
    displayItem(index);

    // 현재 번호 및 화살표 클릭 동기화
    currentPageNum = index;
    if (currentPageNum == 0) {
      prevPageBtn.style.display = "none";
    } else {
      prevPageBtn.style.display = "block";
    }

    if (currentPageNum == pageCount - 1) {
      nextPageBtn.style.display = "none";
    } else {
      nextPageBtn.style.display = "block";
    }
  });
});

const displayItem = (index) => {
  let start = index * itemsPerPage;
  let end = start + itemsPerPage;
  let itemsArray = [...items];

  itemsArray.forEach((li) => {
    li.style.display = "none";
  });

  let newItems = itemsArray.slice(start, end);
  newItems.forEach((li) => {
    li.style.display = "block";
  });

  numberBtn.forEach((num) => {
    num.closest("li").classList.remove("active");
  });
  numberBtn[index].closest("li").classList.add("active");
};

displayItem(0);

//페이지네이션 그룹 표시 함수
const displayPage = (num) => {
  // let totalPageCount = Math.ceil(pageCount / maxPageNum);

  let pageArr = [...numberBtn];
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  let pageListArr = pageArr.slice(start, end);

  pageListArr.forEach((item) => {
    item.closest("li").style.display = "block";
  });

  if (currentPageNum == 0) {
    prevPageBtn.style.display = "none";
  } else {
    prevPageBtn.style.display = "block";
  }

  if (currentPageNum == pageCount - 1) {
    nextPageBtn.style.display = "none";
  } else {
    nextPageBtn.style.display = "block";
  }
};

displayPage(0);

nextPageBtn.addEventListener("click", () => {
  let nextPageNum = currentPageNum + 1;
  displayItem(nextPageNum);

  ++currentPageNum;
  displayPage(currentPageNum);
});

prevPageBtn.addEventListener("click", () => {
  let prevPageNum = currentPageNum - 1;
  displayItem(prevPageNum);

  --currentPageNum;
  displayPage(currentPageNum);
});
