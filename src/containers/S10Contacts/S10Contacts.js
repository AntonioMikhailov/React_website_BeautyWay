import React from 'react'
import TitleH2 from '../../components/TitleH2/TitleH2'

export default function S10Contacts() {
  return (
    <section className="s10" id="contacts">
    <div className="cont">
    <TitleH2
       title={'Наши контакты'}
        titleText={ 'Вы можете связаться с нами любым удобным для Вас способом. Наш Администратор свяжется с Вами в течение 5 минут. Спасибо за обращение))'}
          titleStyle={'s10-title'}
          textStyle={'s10-text'}
          id={'contacts'} 
       />
    
      <div className="s10-row">
        <div className="s10-left">
          <ul>
            <a href="https://goo.gl/maps/pMt5T6nNfLXZivoj8" className="s10-left__item"><span>&#xe91e;</span>
              ул.Б.Бронная,17</a>
            <a href="tel:#" className="s10-left__item"><span>&#xe902;</span> 8 911-123-45-67</a>
            <a href="email:#" className="s10-left__item"><span>&#xe904;</span> beautyway@beautyway.ru</a>
            <li className="s10-left__item"><span>&#xe914;</span>Пн-Вс, 09-21ч.</li>
          </ul>
        </div>
        <div className="s10-right">
          <div className="s10-map__row">
            <iframe title='s10Map' src="https://www.google.com/maps/d/embed?mid=10WqcDhKY1BFW_aIxfkE5RRVipwlOgI5e&hl=ru&ehbc=2E312F"
              loading='lazy'></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
