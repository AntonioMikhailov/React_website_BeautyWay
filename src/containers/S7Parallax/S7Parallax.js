import React from 'react'
import { useState } from 'react'
import Modal from '../../components/Modal/Modal'

export default function S7Parallax() {
  const [ActiveModal, SetActiveModal] = useState(false)
 
function toggleModal() { 
  SetActiveModal(prev => !prev)
}
  return (
    <section className="s7">
    <div className="s7-textRow">
      <div className="s7-text">только с 12 по 25 сентября</div>
      <div className="s7-title">Скидка 20% на услуги</div>
      <div onClick={toggleModal} className="s7-button show-form btn" data-buttons7>записаться</div>
    </div>
    <Modal
    ActiveModal={ActiveModal}
    SetActiveModal={SetActiveModal}
    offsetPadding={false} // для контроля - компенсировать сдвиг полосы прокрутки или нет
    />
  </section>
  )
}
