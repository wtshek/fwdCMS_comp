import React from 'react';
import style from "./style.module.scss"
import ImageUploader from "../common/ImageUploader";
import TextInput from "../common/TextInput";
import TextArea from "../common/TextArea";
import PropTypes from "prop-types"

export default function ServiceInfoCard({inputPlaceholder, taPlaceHolder, defaultImg}) {
  return (
    <div className={style.container}>
        <ImageUploader defaultImg={defaultImg}/>
        <label htmlFor="title">Title:</label>
        <TextInput placeholder={inputPlaceholder}/>
        <label htmlFor="description">Description: </label>
        <TextArea placeholder={taPlaceHolder}/>
    </div>
  )
}

ServiceInfoCard.propTypes = {
  inputPlaceholder: PropTypes.string,
  taPlaceHolder: PropTypes.string,
  defaultImg: PropTypes.string
}
