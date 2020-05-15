/* eslint-disable no-unused-expressions */
/* eslint-disable import/extensions */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  map, switchMap, catchError, mergeMap,
} from 'rxjs/operators';
import {
  FETCH_CATALOG_CATEGORIES_REQUEST,
  FETCH_CATALOG_ITEMS_REQUEST,
  FETCH_CATALOG_CATEGORIES_CHANGE,
  SEARCH_CHANGE,
} from '../actions/actionTypes.js';
import {
  fetchCatalogCategoriesSuccess,
  fetchCatalogItemsSucces,
  fetchCatalogFailure,
  fetchCatalogItemsRequest,
} from '../actions/actionCreators.js';
import store from '../store';

export const fetchCatalogCategoriesEpics = (action$) => action$.pipe(
  ofType(FETCH_CATALOG_CATEGORIES_REQUEST),
  map(() => store.getState().catalogList),
  switchMap(() => ajax.getJSON(`${process.env.REACT_APP_URL}categories`).pipe(
    mergeMap((dataCategory) => [
      fetchCatalogCategoriesSuccess(dataCategory),
      fetchCatalogItemsRequest(),
    ]),
    catchError((e) => of(fetchCatalogFailure(e))),
  )),
);

export const fetchCatalogItemsEpics = (action$) => action$.pipe(
  ofType(FETCH_CATALOG_ITEMS_REQUEST),
  map(() => {
    const { activCategory, items, search } = store.getState().catalogList;
    const queryUrl = new URLSearchParams();
    search && queryUrl.append('q', search);
    activCategory && queryUrl.append('categoryId', activCategory);
    items.length && queryUrl.append('offset', items.length);
    return `?${queryUrl}`;
  }),
  switchMap((o) => ajax.getJSON(`${process.env.REACT_APP_URL}items${o}`).pipe(
    map((dataItems) => fetchCatalogItemsSucces(dataItems)),
    catchError((e) => of(fetchCatalogFailure(e))),
  )),
);

export const fetchCatalogCategoriesChangeEpics = (action$) => action$.pipe(
  ofType(FETCH_CATALOG_CATEGORIES_CHANGE),
  map(() => fetchCatalogItemsRequest()),
);

export const searchChangeEpics = (action$) => action$.pipe(
  ofType(SEARCH_CHANGE),
  map(() => fetchCatalogItemsRequest()),
);
