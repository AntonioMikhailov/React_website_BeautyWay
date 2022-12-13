import React, { useState } from 'react'
import icon from '../../data/icons'
import { useEffect } from 'react'
import MobileMenu from '../../components/MobileMenu/MobileMenu'
 //импортируем ф. компенс. сдвига
import {AddOffsetPadding, RemoveOffsetPadding} from '../../components/OffsetPadding/OffsetPadding'
import { useRef } from 'react'

export default function Header() {
  const [activeMobile, setActiveMobile] = useState(false)
  const headerRow = useRef()
function toggleMobMenu() {  // показываем моб.меню
    setActiveMobile(prev => !prev)
   }
useEffect(()=> {
    // вызываем ф. в другом файле - компенсация сдвига при блокировке body - overflow-hidden
   function CheckoffsetPadding() { 
      if(activeMobile) {
       AddOffsetPadding()
     } else {
        RemoveOffsetPadding();
     }
    }
    CheckoffsetPadding()
})//
  return (
  
    <header className="header">
      <div className="header-wrapper">
        <div className="cont">
          <div ref={headerRow} className="header-row" id="toUp">
            <a href=" " className="header-logo"><img src={icon.logo_pink} alt="#"/></a>
            <nav className="header-nav__row">
              <a href="#about" className="header-nav__item   toSection-about" data-link>о нас</a>
              <a href="#prices" className="header-nav__item toSection-price" data-link>цены</a>
              <a href="#contacts" className="header-nav__item toSection-contact" data-link>контакты</a>
            </nav>
            <div className="header-social__row">
              <a href="./" className="header-social__item">&#xe911;</a>
              <a href="./" className="header-social__item">&#xe906;</a>
              <a href="./" className="header-social__item">&#xe908;</a>
              <a href="./" className="header-social__item">&#xe90a;</a>
            </div>
            <div className={activeMobile ? 'header-burgerButon burger-active' : 'header-burgerButon ' } onClick={toggleMobMenu}>
              <span></span>
            </div>
          </div>
        </div>
      </div>
      {/* Вызываем мобилку   */}
    <MobileMenu
     activeMobile={activeMobile}
     setActiveMobile={setActiveMobile}
     headerRow={headerRow}
    />
    </header>
 
  
  )
}

   