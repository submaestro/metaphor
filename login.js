const eyeIcon = document.querySelector(".eye i");
const idInput = document.querySelector("#id");
const pwInput = document.querySelector("#password");
const idError = document.querySelector("#error_inid");
const pwError = document.querySelector("#error_inpassword");
const loginBtn = document.querySelector("#loginBtn");

eyeIcon.addEventListener("click", () => {
  pwInput.classList.toggle("active");

  if (pwInput.classList.contains("active")) {
    pwInput.type = "text";
    eyeIcon.className = "fas fa-eye-slash";
  } else {
    pwInput.type = "password";
    eyeIcon.className = "fas fa-eye";
  }
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const idValue = idInput.value.trim();
  const pwValue = pwInput.value.trim();
  const users = JSON.parse(localStorage.getItem("wsUsers")) || [];

  idError.innerText = "";
  pwError.innerText = "";

  // 1.아이디 입력 확인
  if (!idValue) {
    idError.innerText = "아이디를 입력하세요.";
    return;
  }

  // 2. 아이디가 등록되지 않은경우
  const foundUser = users.find((user) => user.id === idValue);

  if (!foundUser) {
    idError.innerText = "등록되지 않은 아이디입니다.";
    return;
  }

  // 3. 비밀번호 입력 확인
  if (!pwValue) {
    pwError.innerText = "비밀번호를 입력하세요.";
    return;
  }

  // 4. 비밀번호가 틀린경우
  if (foundUser.password !== pwValue) {
    pwError.innerText = "비밀번호가 올바르지 않습니다";
    return;
  }

  // 5. 로그인 성고
  alert(`${foundUser.name}님 안녕하세요!`);

  // 로그인 상태 업데이트
  users.forEach((user) => {
    if (user.id === foundUser.id) {
      user.isLoggedIn = true;
    } else {
      user.isLoggedIn = false; // 다른 유저는 로그아웃 상태 유지
    }
  });
  localStorage.setItem("wsUsers", JSON.stringify(users)); // 변경된 값 저장

  window.location.href = loginBtn.href;
});
