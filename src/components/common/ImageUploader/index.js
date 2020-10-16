import React, {useState} from 'react';
import style from "./style.module.scss";
import {Image} from "react-bootstrap"
import PropTypes from "prop-types"

export default function FileUploader({defaultImg}) {
  const [img, setImg] = useState(defaultImg);

  const onImgUpload = (e) => {
    const files = Array.from(e.target.files)
    const reader = new FileReader();
    reader.onload = () => {
      const dataURL = reader.result;
      setImg(dataURL)
    }

    reader.readAsDataURL(files[0]);
  }

  return (
    // no container for ease of styling
    <>
      <Image src={img} alt="img upload" className={style.img}/>
      <input type="file" accept="image/*" className="visually-hidden" id={style.fileUploader} onChange={onImgUpload}></input>
      <label className={style.loader__label} htmlFor={style.fileUploader}>Choose File</label>
    </>
  )
}

FileUploader.propTypes = {
  defaultImg : PropTypes.string
}