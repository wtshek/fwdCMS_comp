import React from 'react';
import Table from '../../components/Table';
import style from './style.module.scss';

export default function CodeGroup() {
  const data = [
    { group: 'HKTV Mall', numberOfCodes: '100', create: 'xxx', id: '1' },
    { group: 'HKTV Mall', numberOfCodes: '100', create: 'xxx', id: '2' },
    { group: 'HKTV Mall', numberOfCodes: '100', create: 'xxx', id: '3' },
    { group: 'HK Mall', numberOfCodes: '200', create: 'xttx', id: '4' },
    { group: 'HK Mall', numberOfCodes: '200', create: 'xttx', id: '5' },
    { group: 'HK Mall', numberOfCodes: '200', create: 'xttx', id: '6' },
    { group: 'HKTV Mall', numberOfCodes: '100', create: 'xxx', id: '7' },
    { group: 'HKTV Mall', numberOfCodes: '100', create: 'xxx', id: '8' },
    { group: 'HKTV Mall', numberOfCodes: '100', create: 'xxx', id: '9' },
    { group: 'HK Mall', numberOfCodes: '200', create: 'xttx', id: '10' },
    { group: 'HK Mall', numberOfCodes: '200', create: 'xttx', id: '11' },
    { group: 'HK Mall', numberOfCodes: '200', create: 'xttx', id: '12' },
  ];

  const cols = [
    { dataField: 'group', text: 'Group' },
    { dataField: 'numberOfCodes', text: 'Number of Codes' },
    { dataField: 'create', text: 'Created At' },
  ];

  return (
    <div className={style.container}>
      <Table data={data} cols={cols} header={'Code Group'} />
    </div>
  );
}
