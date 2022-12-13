import React, { useState } from 'react'
import TitleH2 from '../../components/TitleH2/TitleH2'
import img from '../../data/images'
import Modal from '../../components/Modal/Modal'

export default function S3Service() {
  const [ActiveModal, SetActiveModal] = useState(false)
 
function toggleModal() { 
  SetActiveModal(prev => !prev)
}
 const S3Column = [
    {image: img.sec3_1, title: 'стрижка', text: 'Создадим твой стиль'
  },
  {image: img.sec3_2, title: 'Покраска', text: 'Любой цвет на выбор'
},
{image: img.sec3_3, title: 'укладка', text: 'Найдем лучший вариант'
},
  ]
 
  return (
    <section className="s3">
    <div className="cont">
      
    <TitleH2
       title={'Наши услуги'}
       titleStyle={'s3-title'}
      
      />
    
      <div className="s3-row">
        {S3Column.map((item, index)=> {
          return (
            <div key={index} className="s3-column">
            <div className="s3-item">
              <div className="s3-item__image"><img src={item.image} alt="#"/></div>
              <h3 className="s3-item__title">{item.title}</h3>
              <div className="s3-item__text">{item.text}</div>
              <div onClick={toggleModal} className="s3-item__button btn show-form">записаться</div>
            </div>
          </div>
          )
        })
      

        }
          <Modal
     ActiveModal={ActiveModal}
     SetActiveModal={SetActiveModal}
     offsetPadding={true}
    />
   
      </div>
    </div>
  </section>
  )
}
