import { Component } from 'react';
import css from './filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <input type="text" value={value} name="filter" onChange={onChange} />
    </div>
  );
};

export default Filter;
