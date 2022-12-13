import React from 'react'
import { useEffect } from 'react'
import img from '../../data/images'

import S5AccordItem from './data'

export default function S5Team() {
 const S5Image = [img.sec_5_1,img.sec_5_2,img.sec_5_3] 
 
  useEffect(()=> {
      //компенсация сдвига лежит в модуле nav
  const s5_accordTitle = document.querySelectorAll('.s5-accord__title');
  const s5_rightImage = document.querySelectorAll('.s5-right__image');

  s5_accordTitle.forEach((item, i) => {
 s5_accordTitle[0].nextElementSibling.style.maxHeight =  s5_accordTitle[0].nextElementSibling.scrollHeight + 'px';
    s5_accordTitle[0].classList.add('accord-active');
    s5_rightImage[0].classList.add('accord-active');
    item.addEventListener('click', function () {
//Убираем все аккорды сначала
s5_accordTitle.forEach(item => { 
        item.nextElementSibling.style.maxHeight =  0 + 'px';
       item.classList.remove('accord-active');
    });
     this.classList.toggle('accord-active');
     if (this.classList.contains('accord-active')) {
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
      } else {
        this.nextElementSibling.style.maxHeight = '0px';
      }
      // Фотографии меняем
      s5_rightImage.forEach(item => { 
        item.classList.remove('accord-active'); 
       }); 
      s5_rightImage[i].classList.add('accord-active');
    });
  });
  
  })
  
  return (
     <section className="s5">
    <h2 className="s5-title">Наша команда</h2>
    <div className="s5-text body">Знакомьтесь с нашей командой. У нас работают только
      высококвалифицированные, сертифицированные мастера. Опыт работы наших работников от 5 лет. Вы можете
      записаться
      на сеанс,выбрав понравившегося Вас мастера.</div>
    <div className="s5-row__wrapper">
      <div className="cont">
        <div className="s5-row">
          <div className="s5-left">

    <div className="s5-left__accordItem">
    {S5AccordItem.map((item, index)=> {
     return (
     <React.Fragment key={index} >
  <a href="#s5_first" data-link data-delay className="s5-accord__title"  id="s5_first">{item.mainTitle}</a>
  <div className={'s5-accord__textWrapper'}>{item.text}</div>
        </React.Fragment>
          )})}
</div>
          </div>  
          <div className="s5-right">
            <div className="s5-right__row">
              {
                S5Image.map((item, index)=> {
                  return (
                    <div key={index} className="s5-right__image "><img src={item} alt="#"/></div>
                  )})}
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

 