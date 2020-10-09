import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import style from './style.module.scss';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cx from 'classnames';
import PropTypes from "prop-types"

const { SearchBar } = Search;

const pageButtonRenderer = ({ page, active, onPageChange }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onPageChange(page);
  };
  return (
    <li
      className={` ${
        active ? cx(style.pageBt, style.active, 'btn') : cx('btn', style.pageBt)
      }`}
    >
      <a href='#' onClick={handleClick}>
        {page}
      </a>
    </li>
  );
};

export default function Table({ data, cols, header }) {
  const options = { pageButtonRenderer };
  
  return (
    <div>
      <div className={style.title}>{header}</div>
      <ToolkitProvider keyField='id' data={data} columns={cols} search>
        {(props) => (
          <div className={style.container}>
            <SearchBar
              {...props.searchProps}
              placeholder='Search'
              className={style.searchBar}
            />
            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory(options)}
            />
          </div>
        )}
      </ToolkitProvider>
    </div>
  );
}

Table.propTypes = {
  data : PropTypes.array.isRequired,
  cols: PropTypes.array.isRequired
}
