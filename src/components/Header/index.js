import React from 'react';
import style from './style.module.scss';
import {Image} from "react-bootstrap"
import PropTypes from "prop-types"

export default function Header({ logo, email }) {
  return (
    <div className={style.container}>
      <Image src={logo} />
      <div className={style.loginInfo}>
      <Image src="/Admin.svg" />
      <div>{email}</div>
      <Image src="/Door.svg" />
      </div>
    </div>
  );
}

Header.propTypes = {
  logo : PropTypes.string,
  email: PropTypes.string
}
