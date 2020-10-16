import React from 'react'
import PropTypes from "prop-types";
import style from "./style.module.scss"

export default function TextInput({onChange, placeholder}) {
  return (
    <input type="text" onChange={onChange} className={style.textInput} placeholder={placeholder}/>      
    )
}

TextInput.propTypes = {
  onChange : PropTypes.func
}
