/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Catalog from './Catalog.js';
import { searchChange, searchClear } from '../actions/actionCreators.js';

export default function PageCatalog() {
  const { search } = useSelector((state) => state.catalogList);
  const dispatch = useDispatch();
  const [valueSearch, setValueSearch] = useState('search');

  useEffect(() => {
    setValueSearch(search);
  }, [search]);

  useEffect(() => () => {
    dispatch(searchClear());
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setValueSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchChange(valueSearch));
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
        <input
          className="form-control"
          placeholder="Поиск"
          value={valueSearch}
          onChange={handleChange}
        />
      </form>
      <Catalog />
    </section>
  );
}
