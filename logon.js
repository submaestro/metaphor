const eyeIcon = document.querySelector(".eyetwo i");
// console.log(eyeIcon);
const input = document.querySelector("#passwordok");

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




const buttons = document.querySelectorAll(".fourbox button")
const onetwobuttons = [buttons[0], buttons[1]];
const threefourbuttons = [buttons[2], buttons[3]];
console.log(onetwobuttons);


buttons.forEach((button) => {
  button.addEventListener("click",(event) => {
    event.preventDefault();
  })
})



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




// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // 클릭된 버튼에만 'active' 클래스를 추가
//     // 모든 버튼에서 'active' 클래스를 제거하는 코드가 없어짐
//     button.classList.add("active");
//   });
// });



// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // 모든 버튼에서 'active' 클래스를 제거
//     buttons.forEach((nonbutton) => {
//       nonbutton.classList.remove("active");
//     });

//     // 클릭된 버튼에 'active' 클래스를 추가
//     button.classList.add("active");
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // 클릭된 버튼에 'active' 클래스가 없으면 추가
//     if (!button.classList.contains("active")) {
//       button.classList.add("active");
//     }
//   });
// });




// buttons.forEach((button) => {
//   button.addEventListener("click", () => {
//     if(button.value === "남자") {
//     } else

//     button.classList.add("active")

//     buttons.forEach((nonbutton) => {
//       if(!nonbutton.classList.contains("active")){
//         nonbutton.classList.remove("active")
//       }
//     })
//   });
// });

