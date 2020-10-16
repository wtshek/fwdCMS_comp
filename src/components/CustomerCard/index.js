import React from 'react';
import {Image} from "react-bootstrap";
import style from './style.module.scss';
import { Button } from 'react-bootstrap';
import PropTypes from "prop-types"
import PageHeader from "../common/PageHeader"


export default function CustomerCard({ info }) {
  const {icon} = info;

  const infoKeyVal = [
    {key: "id", value: "Account ID"},
    {key: "email", value: "Email"},
    {key: "firstName", value: "First Name"},
    {key: "lastName", value: "Last Name"},
    {key: "gender", value: "Gender"},
    {key: "birthday", value: "Date of Birth"},
    {key: "phone", value: "Mobile Phone"},
    {key: "occupation", value: "Occupation"},
    {key: "HKID", value: "HKID Card No"},
    {key: "HKIDPic", value: "HKID Card No"},
    {key: "create", value: "Created At"},
    {key: "update", value: "Updated At"},
  ]

  const mapInfo = () => {
    return infoKeyVal.map((item)=>{
      return(
      <div key={`${info.id}-${item.key}`}>{item.value} : {info[item.key]}</div>
      )
    })
  }

  return (
    <div className={style.container}>
      <PageHeader>Customer Information</PageHeader>
      <div className={style.icon}>
        {icon ? <img src={`${icon}`} alt={`${icon}`} /> : <Image src="/PersonIcon.svg" />}
      </div>
      <div className={style.detail}>
        {mapInfo()}
      </div>
      <div className={style.select}>
        <label for='status'>Status:&nbsp;&nbsp;</label>
        <select name='status' id='status'>
          <option value='activate'>Activate</option>
          <option value='deactivate'>Deactivate</option>
        </select>
      </div>
      <div className={style.updateBt}>
        <Button>Update</Button>
      </div>
      <div className={style.select}>
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
