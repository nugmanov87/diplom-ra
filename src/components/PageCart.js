/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-globals */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { basketChangeProduct } from '../actions/actionCreators.js';
import { funcRemoveBasket } from '../funcAddBasket.js';
import SendOrder from './SendOrder.js';

export default function PageCart() {
  const { products } = useSelector((state) => state.basketProducts);
  const dispatch = useDispatch();
  const history = useHistory();
  const totalSum = products.reduce(
    (sum, item) => sum + item.price * item.amount,
    0,
  );

  const handleProduct = (event, id) => {
    event.preventDefault();
    history.push(`catalog/${id}`);
  };

  const handleRemoveProduct = (idSize) => {
    dispatch(basketChangeProduct(funcRemoveBasket(idSize)));
  };

  return (
    <React.Fragment>
      <section className="cart">
        <h2 className="text-center">Корзина</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Название</th>
              <th scope="col">Размер</th>
              <th scope="col">Кол-во</th>
              <th scope="col">Стоимость</th>
              <th scope="col">Итого</th>
              <th scope="col">Действия</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index}>
                <th scope="row">{++index}</th>
                <td>
                  <a
                    onClick={() => {
                      handleProduct(event, item.id);
                    }}
                  >
                    {item.title}
                  </a>
                </td>
                <td>{item.size}</td>
                <td>{item.amount}</td>
                <td>{item.price} руб.</td>
                <td>{item.amount * item.price} руб.</td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => {
                      handleRemoveProduct(`${item.id}${item.size}`);
                    }}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" className="text-right">
                Общая стоимость
              </td>
              <td>{totalSum} руб.</td>
            </tr>
          </tbody>
        </table>
      </section>
      <SendOrder />
    </React.Fragment>
  );
}
