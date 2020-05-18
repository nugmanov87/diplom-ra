/* eslint-disable no-restricted-globals */
/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Card(props) {
  const { item } = props;
  const history = useHistory();

  const handleProduct = (event, id) => {
    event.preventDefault();
    history.push(`catalog/${id}`);
  };

  return (
    <div className="col-4">
      <div className="card catalog-item-card">
        <img
          src={item.images[0]}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://whey-market.ru/image/cache/catalog/temp/3/ponents-com_jshopping-files-img_products-noimage-800x800.gif';
          }}
          className="card-img-top img-fluid"
          alt={item.title}
        />
        <div className="card-body">
          <p className="card-text">{item.title}</p>
          <p className="card-text">{item.price} руб.</p>
          <a
            onClick={() => {
              handleProduct(event, item.id);
            }}
            className="btn btn-outline-primary"
          >
            Заказать
          </a>
        </div>
      </div>
    </div>
  );
}
