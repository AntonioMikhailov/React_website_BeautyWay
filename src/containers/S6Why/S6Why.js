import React from 'react'
import TitleH2 from '../../components/TitleH2/TitleH2'
import icon from '../../data/icons'

export default function S6Why() {
  const S6Item = [
    {icon: icon.sec_6_1, title: 'Дружелюбный персонал', text: 'Наши сотрудники вежливы и обходительны. Мы стремимся к совершенству как в качестве наших услуг, так и в взаимодействии с вами.'  },
    {icon: icon.sec_6_2, title: 'современное оборудование', text: 'Мы используем лучшее оборудование и материалы, чтобы предоставлять нашим клиентам услуги по стрижке на высшем уровне. '  },
    {icon: icon.sec_6_3, title: 'приятная атмосфера', text: 'Посетив парикмахерскую BeautyWay, вы гарантированно окунетесь в теплую и     доброжелательную атмосферу нашего салона.'  },
  ] 
  return (
    <section className="s6">
    <div className="cont">
      <TitleH2
       title={'Почему у нас хорошо'}
       titleText={<>Для того, чтобы сделать красивую прическу, а тем более для создания нового образа
        недостаточно профессиональных навыков. Парикмахеры салона обладают талантом, умением представить клиента в
        самом необычном стиле.</>}
         titleStyle={'s6-title'}
         textStyle={'s6-text'}
         
      />
 
      <div className="s6-row">
        {
          S6Item.map((item, index)=> {
            return (
              <div key={index} className="s6-item">
              <div className="s6-item__icon"><img src={item.icon} alt="#"/></div>
              <h3 className="s6-item__title">{item.title}</h3>
              <div className="s6-item__text body">{item.text}</div>
            </div>
            )
          })
        }
        
      </div>
    </div>
  </section>
  )
}
