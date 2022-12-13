import React from 'react'

export default function TitleH2({title, titleText, titleStyle, textStyle, id}) {
  return (
<>
<h2 className={titleStyle} id={id}>{title} </h2>
    <div className={`${textStyle} body`}>{titleText} </div>
</>
  )
}
