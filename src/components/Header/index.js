import React from 'react';
import style from './style.module.scss';
import { ReactComponent as AdminSVG } from '../../assets/Admin.svg';
import { ReactComponent as Door } from '../../assets/Door.svg';
import PropTypes from "prop-types"

export default function Header({ Logo, email }) {
  return (
    <div className={style.container}>
      <Logo />
      <div className={style.loginInfo}>
        <AdminSVG />
        <div>{email}</div>
        <Door />
      </div>
    </div>
  );
}

Header.propTypes = {
  logo : PropTypes.string,
  email: PropTypes.string
}
