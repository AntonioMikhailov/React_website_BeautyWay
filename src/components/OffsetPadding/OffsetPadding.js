 
export function RemoveOffsetPadding() {
   setTimeout(() => {
    document.body.style.marginRight = 0 + 'px';
    document.body.classList.remove('lock');
   }, 300);
}

export function AddOffsetPadding(dataButtonS7 = true) { 
 let marginOffset =  window.innerWidth - document.body.clientWidth;
  if(dataButtonS7===false) { // получили false -не делаем компенсацию сдвига
  document.body.style.marginRight = 0 + 'px';
   } else {
   document.body.style.marginRight = marginOffset + 'px';
     document.body.classList.add('lock');
   }
   }

