import React from 'react'
import img from '../../data/images'
import icon from '../../data/icons'
// импортируем ф. компенсации сдвига полосы прокрутки 
import {AddOffsetPadding, RemoveOffsetPadding} from '../../components/OffsetPadding/OffsetPadding'
import { useState } from 'react';

export default function S4Portfolio() {
  let S4imgPreview = [img.sec_4prev_1,img.sec_4prev_2,img.sec_4prev_3,img.sec_4prev_4,img.sec_4prev_5,img.sec_4prev_6,img.sec_4prev_7,img.sec_4prev_8]

  let S4imgGallery = [img.sec_4_1, img.sec_4_2,img.sec_4_3,img.sec_4_4,img.sec_4_5,img.sec_4_6,img.sec_4_7,img.sec_4_8,];
 
  const [activeGallery, setActiveGallery] = useState(false) // скрытие-показ Галереи
  const [slideIndexImg, setSlideIndex] = useState(1) // показ именно нужного фото в галереи  
function openGallery(i) { 
 setActiveGallery(true)  
 setSlideIndex(i+1)  
 AddOffsetPadding()
 
   }
// вперед
   function nextSlideShow() { 
    if(slideIndexImg ===S4imgGallery.length ) {
      setSlideIndex(1)
    } else {
      setSlideIndex(slideIndexImg+1)
    }
}
   // назад  
   function prevSlideShow() { 
    if(slideIndexImg ===1 ) {
      setSlideIndex(S4imgGallery.length)
    } else {
      setSlideIndex(slideIndexImg-1)
    }
   }

  return (
    <section className="s4">
    <h2 className="s4-title">Наше портфолио</h2>
    <div className="s4-text body">Ознакомьтесь с нашими работами, включая стрижки, наращивание волос и другие услуги.
      Все,
      что вы здесь видите, выполнено нашими стилистами и парикмахерами. </div>
    <div className="s4-row">
      {
       S4imgPreview.map((item, index)=> {
      return (
        
      <div onClick={()=> openGallery(index)} key={index} className="s4-item"><img src={item} alt="#"/>  
      <div className="s4-item__icon"><img src={icon.zoom_icon} alt="#"/></div>
      </div>
           )})}
 </div>
       
    <div 
    // по клику на фоне закрываем
    onClick={ ()=>{setActiveGallery(false); RemoveOffsetPadding()}}
    className={activeGallery ? "s4-gallery s4-gallery__show" : "s4-gallery"} data-gallery>
          {/* // по клику на блоке Слайдов отменяем всплытие */}
      <div onClick={(e)=> e.stopPropagation()} className="s4-gallery__row">
   { S4imgGallery.map((item, index)=> {
         return (
    
          <div key={index} className={ (index+1 === slideIndexImg&&activeGallery  ? "s4-gallery__item s4-show__galleryImage" : "s4-gallery__item")}><img src={item} alt="#"/></div>
          )})}
       
      </div>
      {/* // по клику на блоке кнопок отменяем всплытие */}
      <div onClick={(e)=> e.stopPropagation()}   className="s4-button__row">
        <div onClick={prevSlideShow}  className="s4-button__prev"><img src={icon.prev_icon} alt="#"/></div>
        {/* Закрываем Слайды по Cancel + активируем ф. padding которая импортирована из др. файла */}
        <div onClick={ ()=>{setActiveGallery(false); RemoveOffsetPadding()}} className="s4-button__cancel"><img src={icon.cancel_icon} alt="#"/></div>
        <div onClick={nextSlideShow} className="s4-button__next"><img src={icon.next_icon} alt="#"/></div>
      </div>
    </div>
  </section>
  )
}

