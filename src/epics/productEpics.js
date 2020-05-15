/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { ofType } from 'redux-observable';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, switchMap, catchError } from 'rxjs/operators';
import { FETCH_PRODUCT_REQUEST } from '../actions/actionTypes.js';
import {
  fetchProductSuccess,
  fetchProductFailure,
} from '../actions/actionCreators.js';

export const productEpics = (action$) => action$.pipe(
  ofType(FETCH_PRODUCT_REQUEST),
  map((o) => o.payload.id),
  switchMap((id) => ajax.getJSON(`${process.env.REACT_APP_URL}items/${id}`).pipe(
    map((item) => fetchProductSuccess(item)),
    catchError((e) => of(fetchProductFailure(e))),
  )),
);
