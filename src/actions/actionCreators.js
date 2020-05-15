import {
  FETCH_TOP_SALES_CLEAR,
  FETCH_TOP_SALES_REQUEST,
  FETCH_TOP_SALES_FAILURE,
  FETCH_TOP_SALES_SUCCESS,
  FETCH_CATALOG_CATEGORIES_REQUEST,
  FETCH_CATALOG_CATEGORIES_CHANGE,
  FETCH_CATALOG_CATEGORIES_SUCCESS,
  FETCH_CATALOG_ITEMS_REQUEST,
  FETCH_CATALOG_ITEMS_SUCCESS,
  FETCH_CATALOG_ITEMS_MORE,
  FETCH_CATALOG_FAILURE,
  SEARCH_CHANGE,
  SEARCH_CLEAR,
  FETCH_PRODUCT_CLEAR,
  FETCH_PRODUCT_REQUEST,
  FETCH_PRODUCT_SUCCESS,
  FETCH_PRODUCT_FAILURE,
  BASKET_INIT_PRODUCT,
  BASKET_CHANGE_PRODUCT,
  SEND_ORDER_INIT,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILURE,
} from './actionTypes.js';

export function fetchTopSalesClear() {
  return { type: FETCH_TOP_SALES_CLEAR };
}

export function fetchTopSalesRequest() {
  return { type: FETCH_TOP_SALES_REQUEST };
}

export function fetchTopSalesSuccess(data) {
  return { type: FETCH_TOP_SALES_SUCCESS, payload: { data } };
}

export function fetchTopSalesFailure(error) {
  return { type: FETCH_TOP_SALES_FAILURE, payload: { error } };
}

export function fetchCatalogCategories() {
  return { type: FETCH_CATALOG_CATEGORIES_REQUEST };
}

export function fetchCatalogCategoriesSuccess(dataCategory) {
  return { type: FETCH_CATALOG_CATEGORIES_SUCCESS, payload: { dataCategory } };
}

export function fetchCatalogCategoriesChange(categoryId) {
  return { type: FETCH_CATALOG_CATEGORIES_CHANGE, payload: { categoryId } };
}

export function fetchCatalogItemsRequest() {
  return { type: FETCH_CATALOG_ITEMS_REQUEST };
}

export function fetchCatalogItemsSucces(dataItems) {
  return { type: FETCH_CATALOG_ITEMS_SUCCESS, payload: { dataItems } };
}

export function fetchCatalogItemsMore() {
  return { type: FETCH_CATALOG_ITEMS_MORE };
}

export function fetchCatalogFailure(error) {
  return { type: FETCH_CATALOG_FAILURE, payload: { error } };
}

export function searchChange(value) {
  return { type: SEARCH_CHANGE, payload: { value } };
}

export function searchClear() {
  return { type: SEARCH_CLEAR };
}

export function fetchProductClear() {
  return { type: FETCH_PRODUCT_CLEAR };
}

export function fetchProductRequest(id) {
  return { type: FETCH_PRODUCT_REQUEST, payload: { id } };
}

export function fetchProductSuccess(item) {
  return { type: FETCH_PRODUCT_SUCCESS, payload: { item } };
}

export function fetchProductFailure(error) {
  return { type: FETCH_PRODUCT_FAILURE, payload: { error } };
}

export function basketInitProduct(productsBasket) {
  return { type: BASKET_INIT_PRODUCT, payload: { productsBasket } };
}

export function basketChangeProduct(itemProduct) {
  return { type: BASKET_CHANGE_PRODUCT, payload: { itemProduct } };
}

export function sendOrderInit() {
  return { type: SEND_ORDER_INIT };
}

export function sendOrderRequest(itemOrder) {
  return { type: SEND_ORDER_REQUEST, payload: { itemOrder } };
}

export function sendOrderSuccess(success) {
  return { type: SEND_ORDER_SUCCESS, payload: { success } };
}

export function sendOrderFailure(error) {
  return { type: SEND_ORDER_FAILURE, payload: { error } };
}
