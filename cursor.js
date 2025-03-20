// Cursor Event
const cursor = document.querySelector(".cursor")
console.log(cursor);

// const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});
console.log(cursor);

// 커서 영역에 마우스를 올리면 커서 색상 변경
// const test=document.querySelector('.test');
// test.addEventListener("mouseenter",()=>{
//   console.log("test");


  
// })
const pointers = document.querySelectorAll('.artist_icons li a');

pointers.forEach((pointer) => {

  pointer.addEventListener('mouseover', ()=> {
    cursor.style.backgroundColor = '#03d8c5';  // 커서 색상 변경 (초록색)
  
  });
  pointer.addEventListener('mouseout', function() {
    cursor.style = 'none';
  });
})


const li = document.querySelectorAll(".artist_icons li");
console.log(li);

li.forEach(item => {
  
})


