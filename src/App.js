import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './App.module.scss';
import ServiceInfoPage from "./pages/ServiceInfo"



const customer = {
  icon: null,
  id: '123456',
  firstName: 'Chan',
  lastName: 'Tai Man',
  gender: 'M',
  phone: '9888 8888',
  HKID: 'A123456(7)',
  create: '2020-10-01 14:01:01',
  email: 'chan@email.com',
  birthday: '1990-01-01',
  occupation: 'teacher',
  HKIDPic: 'image.png',
  update: '2020-10-06 15:01:02',
};


function App() {
  return (
    <div className={style.container}>
      <ServiceInfoPage/>
    </div>
  );
}

export default App;
