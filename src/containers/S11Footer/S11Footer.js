import React from 'react'
import icon from '../../data/icons'

export default function S11Footer() {
  return (
    <>
    <footer className="s11">
    <div className="s11-row">
      <div className="s11-logo"><img src={icon.logo_pink} alt="#"/></div>
      <nav className="s11-navRow">
        <a href="#about" className="s11-navItem " data-link>О нас</a>
        <a href="#prices" className="s11-navItem "data-link>цены</a>
        <a href="#contacts" className="s11-navItem "data-link>контакты</a>
      </nav>
      <div className="s11-socialRow">
        <div className="s11-socilaItem">&#xe911;</div>
        <div className="s11-socilaItem">&#xe906;</div>
        <div className="s11-socilaItem">&#xe908;</div>
        <div className="s11-socilaItem">&#xe90a;</div>
      </div>
      <div className="s11-text">Дизайн и верстка сайта: студия дизайна “Точка Фокуса” 2021</div>
    </div>
  </footer>
  <section className="arrow-anchor">
        <a href="#toUp" data-link className="anchor-button"> </a>
      </section>

 
    </>
 


  
  )
}
