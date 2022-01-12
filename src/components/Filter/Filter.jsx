import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <label className={s.label}>
      <span className={s.filterLabel}>Find contacts by name</span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.input}
        placeholder="Put the name to filter your contacts!"
      />
    </label>
  );
};

export default Filter;
