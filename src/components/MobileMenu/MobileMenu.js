import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import './MobileMenu.scss'

export default function MobileMenu({activeMobile, setActiveMobile, headerRow}) {
 
  const mobileWrapper = useRef()
   useEffect(()=> {
  window.addEventListener('resize', ()=> { 
      marginTopOffset()
    });
    function marginTopOffset() {
      // регулируем свойстов top у  моб. меню
      const headerRowHeight = headerRow.current;
      const offsetTop = getComputedStyle(headerRowHeight).height 
      mobileWrapper.current.style.top = offsetTop;
    }
     marginTopOffset()
 })
 return (
    <>
      <div  ref={mobileWrapper} onClick={()=> setActiveMobile(false)} className={activeMobile ? 'mobile-wrapper mobile-background': 'mobile-wrapper'}>
        <div className={activeMobile ? 'mobile-row mobile-show' : 'mobile-row'}>
          <a href="#about" data-link className="mobile-item ">О нас</a>
          <a href="#prices" data-link className="mobile-item ">Цены</a>
          <a href="#contacts" data-link className="mobile-item ">Контакты</a>
        </div>
      </div>
    </>
  )
}
 