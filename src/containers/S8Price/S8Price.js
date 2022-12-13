import React from 'react'
import { useState } from 'react'
import tabContent from './data'
import TitleH2 from '../../components/TitleH2/TitleH2'

export default function S8Price() {
 
  const tabTtitle = [ 'стрижки', 'укладки, прически', 'окрашивание'  ]
 const [ activeTab, setActiveTab ] = useState(0)
   return (
    <section className="s8" id="prices">
    <div className="cont">
    
    <TitleH2
       title={'Расценки на услуги'}
        titleText={ 'В салоне-парикмахерской BeautyWay Вы можете воспользоваться нашими услугами по самым         низким расценкам в городе. Качество наших услуг останется на высоте. '}
          titleStyle={'s2-title'}
          textStyle={'s2-text'}
          id={'prices'} 
       />
     
      <div className="s8-title-wrapper">
        <nav className="s8-tab__titleRow">
          {
            tabTtitle.map((item, index)=> {
              return (
                //  передаем index который потом применяем ниже
                <div onClick={()=> setActiveTab(index)} key={index} className={activeTab === index ? 's8-tab__title s8-tab__active' : 's8-tab__title' }>{item}</div>
              )})}
       
        </nav>
      </div>
      <div className="s8-tab__row">
        {tabContent.map((item, index)=> {
            return (
            
                 <div key={index} className="s8-tab__columnWarpper">
                 <div  className={activeTab === index ? 's8-tab__column s8-tab__active' : 's8-tab__column' }>{item.content}</div>
                 </div>
             
             )})}
      </div>
    </div>
  </section>
  )
}
