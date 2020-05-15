/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  basketChangeProduct,
  sendOrderRequest,
  sendOrderInit,
} from '../actions/actionCreators.js';
import { funcClearBasket } from '../funcAddBasket.js';

export default function SendOrder() {
  const { products } = useSelector((state) => state.basketProducts);
  const { request, loading, error } = useSelector((state) => state.sendOrder);
  const [changeField, setChangeField] = useState({ phone: '', address: '' });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendOrderInit());
  }, []);

  useEffect(() => {
    if (request === 204) {
      dispatch(basketChangeProduct(funcClearBasket()));
    }
  }, [request]);

  const send = () => {
    dispatch(
      sendOrderRequest({
        owner: {
          phone: changeField.phone,
          address: changeField.address,
        },
        items: products.map((item) => ({
          id: item.id,
          price: item.price,
          count: item.amount,
        })),
      }),
    );
  };

  const handleChangeField = (event) => {
    const { id, value } = event.target;
    setChangeField((prevChangeField) => ({ ...prevChangeField, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    send();
  };

  const handleRepeat = () => {
    send();
  };

  if (request === 204) {
    return <div className="order-success">Ваш заказ успешно оформлен.</div>;
  }

  return (
    <section className="order">
      <h2 className="text-center">Оформить заказ</h2>
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

      <div className="card" style={{ maxWidth: '30rem', margin: '0 auto' }}>
        <form className="card-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              className="form-control"
              id="phone"
              placeholder="Ваш телефон"
              value={changeField.phone}
              onChange={handleChangeField}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес доставки</label>
            <input
              className="form-control"
              id="address"
              placeholder="Адрес доставки"
              value={changeField.address}
              onChange={handleChangeField}
              required
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="agreement"
              required
            />
            <label className="form-check-label" htmlFor="agreement">
              Согласен с условиями доставки
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-outline-secondary"
            disabled={loading || !products.length}
          >
            Оформить
          </button>
        </form>
      </div>
    </section>
  );
}
