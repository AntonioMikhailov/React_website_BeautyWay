import { useEffect } from "react";

export default function Nav() {
 useEffect(()=> {
  const link = document.querySelectorAll('a');
  
  // ---------------------------Arrow-anchor
const anchor = document.querySelector('.arrow-anchor');
const headerRow = document.querySelector('.header-row');
 
let scrollPos = 0;
// Вариант когда кнопка появляется при прокрутке вверх И виден от самого низа и до верха страницы  минус window.pageYOffset. Также добавил чтобы якорб появлялся в самом низу сам
window.addEventListener('scroll', function () {
  let i = window.pageYOffset;
  let e = window.innerHeight;
  let documentScrollHeight = document.documentElement.scrollHeight;  
  if (((document.body.getBoundingClientRect()).top > scrollPos && i >= e - i) ||  i+e === documentScrollHeight ) {
    anchor.classList.add('anchor-active');
  } else {
    anchor.classList.remove('anchor-active');
  }
  
  scrollPos = (document.body.getBoundingClientRect()).top;
 
});

 
// Делаем плавный скролл  
function smoothScroll (targetSelector) {
  const whereTo = document.querySelector(targetSelector); 
  // headerRow.scrollHeight
  let startPosition = window.pageYOffset;
let targetPosition = whereTo.offsetTop -100  ;  
let distance = targetPosition - startPosition;
let duration = 1500; // Время анимации
let start = null;  
window.requestAnimationFrame(step);
function step(timestamp) {
if (!start) start = timestamp;
let progress = timestamp - start;
//  window.scrollTo(0, distance*(progress/duration) + startPosition) // если без easing
window.scrollTo(0, easing(progress, startPosition, distance, duration));
if (progress < duration) { 
window.requestAnimationFrame(step);
}
}
}
// Можно добавить замедление в начале или конце http://gizma.com/easing/ 
//
function easing (t, b, c, d) {
return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
}

//Обработчик ссылок
link.forEach(item => { 
  item.addEventListener('click', function(e)  {
    e.preventDefault();
  let targetPosition = item.getAttribute(`${'href'}`);
  document.querySelector('title').textContent = `BeautyWay – ${item.textContent}`;
if(item.hasAttribute('data-link')) {
 smoothScroll(targetPosition);
}
 
});
 });

 })//

}
