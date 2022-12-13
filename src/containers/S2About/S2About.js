import React from 'react'
import TitleH2 from '../../components/TitleH2/TitleH2'
import img from '../../data/images'

export default function S2About() {

 
  return (
    <section className="s2" id="about">
    <div className="cont">
      <div className="s2-row">
 
        <TitleH2
       title={'О нас'}
        titleText={<>Салон-парикмахерская BeautyWay был основан в 1998 году и с тех пор через наши руки прошли тысячи довольных клиентов.
        <p>Ухоженный внешний вид, комплименты, хорошее настроение — кто из нас не желает этих прекрасных вещей?
          Все они станут для вас реальностью с салоном красоты BeautyWay!</p></>}
          titleStyle={'s2-title'}
          textStyle={'s2-text'}
          id={'about'} 
       />
        
        <div className="s2-image"><img src={img.sec_2} alt="#"/></div>
       
      </div>
    </div>
  </section>
  )
}
