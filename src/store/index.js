/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-cycle */
/* eslint-disable no-underscore-dangle */
import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { topSalesEpics } from '../epics/topSalesEpics.js';
import {
  fetchCatalogCategoriesEpics,
  fetchCatalogItemsEpics,
  fetchCatalogCategoriesChangeEpics,
  searchChangeEpics,
} from '../epics/catalogEpics.js';
import { productEpics } from '../epics/productEpics.js';
import { sendOrderEpics } from '../epics/sendOrderEpics.js';
import topSalesReducer from '../reducers/topSalesReducer.js';
import catalogReducer from '../reducers/catalogReducer.js';
import productReducer from '../reducers/productReducer.js';
import basketProductReducer from '../reducers/basketProductReducer.js';
import sendOrderReducer from '../reducers/sendOrderReducer.js';

const reducer = combineReducers({
  topSalesList: topSalesReducer,
  catalogList: catalogReducer,
  productItem: productReducer,
  basketProducts: basketProductReducer,
  sendOrder: sendOrderReducer,
});

const epic = combineEpics(
  topSalesEpics,
  fetchCatalogCategoriesEpics,
  fetchCatalogItemsEpics,
  fetchCatalogCategoriesChangeEpics,
  searchChangeEpics,
  productEpics,
  sendOrderEpics,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(epic);

export default store;
