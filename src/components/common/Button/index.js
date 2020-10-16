import React from 'react';
import style from "./style.module.scss";
import cx from "classnames";
import PropTypes from "prop-types"

export default function Button({text, color}) {
  return (
    <button className={`${style.button} ${color ? style.color:style.default}`}>
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}
