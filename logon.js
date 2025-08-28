const eyeIcon = document.querySelector(".eyetwo i");
// console.log(eyeIcon);
const input = document.querySelector("#passwordok");
const signup_button = document.querySelector(".signup");

const buttons = document.querySelectorAll(".fourbox button");
const onetwobuttons = [buttons[0], buttons[1]];
const threefourbuttons = [buttons[2], buttons[3]];
// console.log(onetwobuttons);

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

onetwobuttons.forEach((button) => {
  button.addEventListener("click", () => {
    // 모든 버튼에서 'clicked' 클래스를 제거
    onetwobuttons.forEach((nonbutton) => {
      nonbutton.classList.remove("clicked");
    });

    // 클릭된 버튼에 'clicked' 클래스를 추가
    button.classList.add("clicked");
  });
});

threefourbuttons.forEach((button) => {
  button.addEventListener("click", () => {
    // 모든 버튼에서 'clicked' 클래스를 제거
    threefourbuttons.forEach((nonbutton) => {
      nonbutton.classList.remove("clicked");
    });

    // 클릭된 버튼에 'clicked' 클래스를 추가
    button.classList.add("clicked");
  });
});

let interval;

const signup = (e) => {
  e.preventDefault();

  const id = document.querySelector("#id").value;
  const passwords = document.querySelector("#passwords").value;
  const passwordok = document.querySelector("#passwordok").value;
  const writer = document.querySelector("#writer").value;
  const birthday = document.querySelector("#birthday").value;
  const phonenum = document.querySelector("#phonenum").value;

  let isVaild = true;

  const isOneTwoSelected = onetwobuttons.some((button) =>
    button.classList.contains("clicked")
  );

  const isThreeFourSelected = threefourbuttons.some((button) =>
    button.classList.contains("clicked")
  );

  if (!isOneTwoSelected || !isThreeFourSelected) {
    console.log(document.querySelector("#error_fourbox"));
    document.querySelector("#error_fourbox").innerText =
      "체크박스를 전부 선택해주세요.";
    isVaild = false;
  } else {
    document.querySelector("#error_fourbox").innerText = ""; // 오류 메시지 초기화
  }

  // 기존 사용자 데이터 불러오기 (없으면 빈 배열)
  let users = JSON.parse(localStorage.getItem("wsUsers")) || [];
  // 중복 확인 (이름 또는 이메일이 같은 경우 가입 불가)
  const idSame = users.some((user) => user.id === id);

  if (id === "") {
    document.querySelector("#error_id").innerText =
      "아이디가 올바르지 않습니다.";
    isVaild = false;
  } else if (idSame) {
    document.querySelector("#error_id").innerText =
      "이미 사용되고 있는 아이디 입니다.";
    isVaild = false;
  } else {
    document.querySelector("#error_id").innerText = "";
  }

  if (passwords === "") {
    document.querySelector("#error_passwords").innerText =
      "비밀번호가 올바르지 않습니다.";
    isVaild = false;
  } else {
    document.querySelector("#error_passwords").innerText = "";
  }
  if (passwordok === "") {
    document.querySelector("#error_passwordok").innerText =
      "비밀번호가 올바르지 않습니다.";
    isVaild = false;
  } else {
    document.querySelector("#error_passwordok").innerText = "";
  }
  if (passwords !== passwordok) {
    document.querySelector("#error_passwords").innerText =
      "비밀번호가 일치하지 않습니다.";
    document.querySelector("#error_passwordok").innerText =
      "비밀번호가 일치하지 않습니다.";
  }

  if (writer === "" || !isNaN(Number(writer))) {
    document.querySelector("#error_writer").innerText =
      "이름이 올바르지 않습니다.";
    isVaild = false;
  } else {
    document.querySelector("#error_writer").innerText = "";
  }
  if (birthday === "" || isNaN(birthday) || birthday.length !== 8) {
    document.querySelector("#error_birthday").innerText =
      "생년월일이 올바르지 않습니다.";
    isVaild = false;
  } else {
    document.querySelector("#error_birthday").innerText = "";
  }
  if (phonenum === "" || isNaN(phonenum) || phonenum.length !== 11) {
    document.querySelector("#error_phonenum").innerText =
      "번호가 올바르지 않습니다.";
    isVaild = false;
  } else {
    document.querySelector("#error_phonenum").innerText = "";
  }

  if (isVaild) {
    // 새로운 사용자 정보 추가
    users.push({ name: writer, id: id, password: passwords, num: phonenum });

    // 업데이트된 사용자 목록을 로컬 스토리지에 저장
    localStorage.setItem("wsUsers", JSON.stringify(users));

    const foundUser = users.find((user) => user.id === id);

    alert(`${foundUser.name}님 회원가입이 완료 되었습니다.`);
    window.location.href = signup_button.href;
  }
};

signup_button.addEventListener("click", signup);

eyeIcon.addEventListener("click", () => {
  input.classList.toggle("active");

  if (input.classList.contains("active")) {
    input.type = "text";
    eyeIcon.className = "fas fa-eye-slash";
  } else {
    input.type = "password";
    eyeIcon.className = "fas fa-eye";
  }
});

const eyecon = document.querySelector(".eyeone i");
// console.log(eyecon);
const inpute = document.querySelector("#passwords");

eyecon.addEventListener("click", () => {
  inpute.classList.toggle("active");

  if (inpute.classList.contains("active")) {
    inpute.type = "text";
    eyecon.className = "fas fa-eye-slash";
  } else {
    inpute.type = "password";
    eyecon.className = "fas fa-eye";
  }
});
