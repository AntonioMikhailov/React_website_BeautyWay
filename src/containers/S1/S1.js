import React from 'react'
import { useState } from 'react'
 
import Modal from '../../components/Modal/Modal'
import img from '../../data/images'

export default function S1() {
const [ActiveModal, SetActiveModal] = useState(false)
 
function toggleModal() { 
  SetActiveModal(prev => !prev)
}
  return (
   
    <section className="s1">
    <div className="s1-row">
    <div className="s1-image">
     
        <picture><source srcSet={img.sec_1_tablet} type="image/webp" media="(max-width:768px)"/> <img src={img.sec_1} alt="#"/></picture>
      </div>
      <div className="s1-text__row">
        <h1 className="s1-title">Твой Стиль</h1>
        <div className="s1-text body">Салон-парикмахерская BeautyWay основанный в 1998 году является островом стиля,
          красоты и моды как для женщин так и мужчин и детей. Мы с радостью ждем наших клиентов</div>
      </div>
      
    </div>
 
    <div className="s1-form">
      <div className="cont">
        <div className="s1-form_row">
          <div className="s1-form__item">
            <div className="s1-form__ticon">&#xe902;</div>
            <a href="tel:#" className="s1-form__text">(495) 123 45 67</a>
          </div>
          <div className="s1-form__item">
            <div className="s1-form__ticon">&#xe914;</div>
            <div className="s1-form__text">пн-вс, 10-20</div>
          </div>
          <div className="s1-form__item">
            <div className="s1-form__ticon">&#xe904;</div>
            <a href="email:#" className="s1-form__text">beautyway@beautyway.ru</a>
          </div>
          <div className="s1-form__item">
        
            <div onClick={toggleModal}  className="s1-form__button show-form btn">записаться</div>
          </div>
        </div>
      </div>
    </div>
    <Modal
    ActiveModal={ActiveModal}
    SetActiveModal={SetActiveModal}
    offsetPadding={true}
    />
  </section>
  )
}
