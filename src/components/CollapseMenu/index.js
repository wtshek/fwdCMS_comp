import React, {useState} from 'react'
import style from './style.module.scss'
import {Image} from "react-bootstrap"

export default function CollapseMenu({title, items}) {
  const [isExpand, setIsExpend] = useState(true) //control sub menu
  
  // toggle sub menu
  const onToggleCllopase = () =>{
    setIsExpend(!isExpand)
  }

  return (
    <div className={style.container}>
      <div className={style.title}>
        <span>{title}</span>
        <span><Image src='/Arrow.svg' alt='arrow' className={`${isExpand? style.arrow: style.upward}`} onClick={onToggleCllopase}/></span>
      </div>
      <div className={`${isExpand? style.expand: style.collapse }`}>
        {
          items.map((item) => {
            return <div key={`${title}-${item}`} className={style.sectionItem}>{item}</div>;
          })
        }
      </div>
    </div>
  )
}
