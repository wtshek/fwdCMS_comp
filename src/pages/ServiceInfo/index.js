import React from 'react'
import style from './style.module.scss';
import ServiceInfoCard from "../../components/ServiceInfoCard"
import Layout from "../../components/Layout";
import PageHeader from "../../components/common/PageHeader";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button"

export default function ServiceInfoPage() {
  const services = [
    {input: "Find a doctor",
    textarea: "Choose a doctor according to your needs and view details",
    defaultImg: "/DefaultAvatar.svg"},
    {input: "Find a doctor",
    textarea: "Choose a doctor according to your needs and view details",
    defaultImg: "/DefaultAvatar.svg"},
    {input: "Find a doctor",
    textarea: "Choose a doctor according to your needs and view details",
    defaultImg: "/DefaultAvatar.svg"},
    {input: "Find a doctor",
    textarea: "Choose a doctor according to your needs and view details",
    defaultImg: "/DefaultAvatar.svg"},
  ]

  const mapServices = () => {
    return(
      services.map((item, index) => {
        return (
          <div key={`service-${index}`} className={style.serviceInfoCard}>
            <span className={style.index}>{index+1}</span>
              <ServiceInfoCard inputPlaceholder={item.input} taPlaceHolder={item.textarea} defaultImg={item.defaultImg}/>
          </div>
        )
      })
    )
  }

  return (
    <div>
      <Layout>
        <div className={style.layout}>
          <PageHeader>Choose A Service Info</PageHeader>
          <form>
            <div className={style.genDesc}>
              <label htmlFor="description">Description: </label>
              <TextArea placeholder="Generate QR code to check-in at the clinic, or search for a doctor from our designated doctor 
              list."/>
            </div>
            {mapServices()}
            <div className={style.btContainer}>
              <Button text="Update" />
            </div>
          </form>
        </div>
      </Layout>
    </div>
  )
}
