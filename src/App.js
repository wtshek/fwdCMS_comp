import React from 'react';
import Menu from './components/Menu';
import Header from './components/Header';
import CustomerCard from './components/CustomerCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './App.module.scss';

const testMenu = [
  { title: 'Redeem Code', items: ['Code List', 'Code List', 'Code List'] },
  { title: 'Payment', items: ['record'] },
];

const customer = {
  icon: null,
  id: '123456',
  fName: 'Chan',
  lName: 'Tai Man',
  gender: 'M',
  phone: '9888 8888',
  IDcard: 'A123456(7)',
  createTime: '2020-10-01 14:01:01',
  email: 'chan@email.com',
  bDay: '1990-01-01',
  occupation: 'teacher',
  IDcardPic: 'image.png',
  updateTime: '2020-10-06 15:01:02',
};

function App() {
  return (
    <div className={style.container}>
      <Menu items={testMenu} logo="/FWD_converted.svg" />
      <div className={style.content}>
        <Header logo="/FWD.svg" email='admin@company.com' />
        <CustomerCard info={customer} />
      </div>
    </div>
  );
}

export default App;
