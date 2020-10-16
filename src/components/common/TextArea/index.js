import React from 'react'
import style from "./style.module.scss"

export default function TextArea({onChange, placeholder}) {
  return (
    <textarea onChange={onChange} placeholder={placeholder} className={style.textarea}/>
  )
}
