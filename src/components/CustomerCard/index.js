import React from 'react';
import style from './style.module.scss';
import { ReactComponent as PerosnSVG } from '../../assets/PersonIcon.svg';
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types"

//TODO: map info

export default function CustomerCard({ info }) {
  const {
    icon,
    id,
    fname,
    lname,
    gender,
    phone,
    IDcard,
    createTime,
    email,
    bDay,
    occupation,
    IDcardPic,
    updateTime,
  } = info;

  return (
    <div className={style.container}>
      <div className={style.header}>Customer Information</div>
      <div className={style.icon}>
        {icon ? <img src={`${icon}`} alt={`${icon}`} /> : <PerosnSVG />}
      </div>
      <div className={style.detail}>
        <div>Account ID: {id}</div>
        <div>Email: {email}</div>
        <div>First Name: {fname}</div>
        <div>Last Name: {lname}</div>
        <div>Gender: {gender}</div>
        <div>Date of Birth: {bDay}</div>
        <div>Mobile Phone: {phone}</div>
        <div>Occupation: {occupation}</div>
        <div>HKID Card No: {IDcard}</div>
        <div>HKID Card No: {IDcardPic}</div>
        <div>Created At: {createTime}</div>
        <div>Updated At: {updateTime}</div>
      </div>
      <div className={style.status}>
        <label for='status'>Status:&nbsp;&nbsp;</label>
        <select name='status' id='status'>
          <option value='activate'>Activate</option>
          <option value='deactivate'>Deactivate</option>
        </select>
      </div>
      <div className={style.updateBt}>
        <Button>Update</Button>
      </div>
      <div className={style.memebership}>
      <label for='status'>Status:&nbsp;&nbsp;</label>
        <select name='status' id='status'>
          <option value='activate'>Mother</option>
          <option value='deactivate'>Deactivate</option>
        </select>
      </div>
    </div>
  );
}

CustomerCard.propTypes = {
  info: PropTypes.object.isRequired
}
