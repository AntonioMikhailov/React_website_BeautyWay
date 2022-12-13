import React  from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import icon from '../../data/icons'
import S9Item from './data'

export default function S9Request() {
 
  const [active, setActive] = useState(0)
  const s9RequestRow = useRef();
  
 function handleComments(i) { // получаем index
  setActive(i) // рендерим новый index + меняем класс актив у индикатора
  let rowWidth = getComputedStyle(s9RequestRow.current).width;  
  let offset = (+rowWidth.replace(/\D/g, ''));
  s9RequestRow.current.style.transform =`translate(-${offset * i}px)`; 
 }
  return (
    <section className="s9">
    <div className="cont">
      <div className="s9-row">
        <div className="s9-title">Отзывы наших клиентов</div>
        <div className="s9-icon"><img src={icon.sec9Quote} alt="#"/></div>
        <div className="s9-request__wrapper">
          <div ref={s9RequestRow} className="s9-request__row">
        {
          S9Item.map((item, index)=> {
            return (
              <div key={index} className="s9-request__itemRow">
              <div className="s9-req__item">{item.text}</div>
              <div className="s9-req__itemName">{item.name}</div>
            </div>
            )})
        }
        </div>
        </div>
        <div className="s9-buttonRow">
          {
            // количество берем из массива самих комментов
         Array(S9Item.length).fill('').map((_, index)=> { 
             return ( 
              // активные инд. из useState
              <div onClick={()=>handleComments(index)} key={index} className={index === active ? "s9-button__item s9-active" : 's9-button__item'}></div>
              )})  
          }
         
        </div>
      </div>
    </div>
  </section>
  )
}
 
 