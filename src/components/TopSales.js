/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchTopSalesRequest,
  fetchTopSalesClear,
} from '../actions/actionCreators.js';
import Card from './Card.js';

export default function TopSales() {
  const { items, loading, error } = useSelector((state) => state.topSalesList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTopSalesRequest());
  }, [dispatch]);

  useEffect(() => () => {
    dispatch(fetchTopSalesClear());
  }, []);

  const handleRepeat = () => {
    dispatch(fetchTopSalesRequest());
  };

  return (
    <React.Fragment>
      {loading && (
        <div className="preloader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {error && (
        <div className="error-msg">
          <p>Произошла ошибка</p>
          <div onClick={handleRepeat}>Повторите запрос</div>
        </div>
      )}

      <div className="row">
        {items.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </React.Fragment>
  );
}
