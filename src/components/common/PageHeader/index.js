import React from 'react';
import style from "./style.module.scss";
import PropTypes from "prop-types"

export default function Header(props) {
  return (
    <div className={style.header}>
      {props.children}
    </div>
  )
}

Header.propTypes = {
  header : PropTypes.string
}
