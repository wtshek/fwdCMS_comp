import React from 'react'
import style from "./style.module.scss"
import Menu from '../Menu';
import Header from '../Header';

const testMenu = [
  { title: 'Redeem Code', items: ['Code List', 'Code List', 'Code List'] },
  { title: 'Payment', items: ['record'] },
];


export default function Layout(props) {
  return (
    <div className={style.container}>
      <Menu items={testMenu} logo="/FWD_converted.svg" />
      <div className={style.pageHeader}>
        <Header logo="/FWD.svg" email='admin@company.com' />
        <div className={style.pageContent}>
          {props.children}
        </div>
      </div>
    </div>
  )
}
