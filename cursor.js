// Cursor Event
let cursor = document.querySelector(".cursor")
console.log(cursor);

// const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  console.log(e);
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});
console.log(cursor);

// 커서 영역에 마우스를 올리면 커서 색상 변경
const cursorArea = document.querySelector('.cursor-area');
console.log(cursorArea);

cursorArea.addEventListener('mouseover', function() {
  cursor.style.backgroundColor = 'lightblue';  // 커서 색상 변경 (초록색)
});
cursorArea.addEventListener('mouseout', function() {
  cursor.style.backgroundColor = 'none';  // 원래 커서 색상으로 복원 (빨간색)
});
