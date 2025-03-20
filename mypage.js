const mpID = document.querySelector("#mpID");
const mpName = document.querySelector("#mpName");
const mpNum = document.querySelector("#mpNum");

// 로컬스토리지에서 로그인된 사용자 확인
let mpusers = JSON.parse(localStorage.getItem("wsUsers")) || [];
let mpcurrentUser = mpusers.find((user) => user.isLoggedIn === true);

if (mpcurrentUser) {
  // 로그인한 상태 -> 아이콘 표시 & 로그인/회원가입 버튼 숨기기

  mpID.innerText = `${mpcurrentUser.id}`;
  mpName.innerText = `${mpcurrentUser.name}`;
  mpNum.innerText = `${mpcurrentUser.num}`;
  const logout = document.querySelector(".logout");

  logout.addEventListener("click", () => {
    users = users.map((user) => ({ ...user, isLoggedIn: false }));
    localStorage.setItem("wsUsers", JSON.stringify(users));
    alert("로그아웃 되었습니다!");
    window.location.reload(); // 페이지 새로고침
  });
}

console.log(mpcurrentUser.id, mpcurrentUser.name, mpcurrentUser.num);
