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

console.log(buttons);
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("active")

    buttons.forEach((nonbutton) => {
      if(!nonbutton.classList.contains("active")){
        nonbutton.classList.remove("active")
      }
    })
  });
});