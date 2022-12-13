import React from 'react'
import { useRef, useEffect } from 'react';
import icon from '../../data/icons'
import './Modal.scss'
import {AddOffsetPadding, RemoveOffsetPadding} from '../OffsetPadding/OffsetPadding'
export default function Modal({ActiveModal, SetActiveModal, offsetPadding}) {
  const form = useRef()
   function ResetForm() { 
    form.current.reset()
  }

  useEffect(()=> {
    // вызываем ф. в другом файле - компенсация сдвига при блокировке body - overflow-hidden
   function CheckoffsetPadding() { 
      if(ActiveModal) {
       // передаем в вызов AddOffsetPadding параметр - true-false 
       AddOffsetPadding(offsetPadding)
     } else {
        RemoveOffsetPadding();
     }
    }
    CheckoffsetPadding()
})//
 return (
 <>
      <div onClick={()=> SetActiveModal(false) } className={ActiveModal ?  "modal-wrapper showModalWindow" : 'modal-wrapper' }>
     <div  onClick={(e)=> e.stopPropagation() }   className="modal-row">
       <div className="modal-block">
         <div className="modal-icon"><img src={icon.smile} alt="#"/></div>
         <div className="modal-text">Напишите нам, в какое время Вы хотите записаться на услугу. Спасибо))</div>
       
         <form ref={form} action="#"> 
        
         <input type="text" className="modal-input" placeholder="Ваше Имя"/>
           <input type="text" className="modal-input" placeholder="Ваш телефон"/>
           <textarea name="#" className="modal-textarea" placeholder="Ваше сообщение"></textarea>
         </form> 
     
         <div onClick={()=> SetActiveModal(false) } className="modal-cancelButton"><img src={icon.cancel_pink} alt="#"/></div>

       </div>
     </div>
 
     <div onClick={(e)=> {e.stopPropagation(); ResetForm()}} className="modal-button btn">Отправить</div>

   </div>
 </>
  )
}
