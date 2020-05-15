import {
  SEND_ORDER_INIT,
  SEND_ORDER_REQUEST,
  SEND_ORDER_SUCCESS,
  SEND_ORDER_FAILURE,
} from '../actions/actionTypes.js';

const initialState = {
  request: null,
  loading: false,
  error: null,
};

export default function sendOrderReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_ORDER_INIT:
      return { ...initialState };
    case SEND_ORDER_REQUEST:
      return { request: null, loading: true, error: null };
    case SEND_ORDER_SUCCESS: {
      const { success } = action.payload;
      return {
        request: success,
        loading: false,
        error: null,
      };
    }
    case SEND_ORDER_FAILURE: {
      const { error } = action.payload;
      return {
        request: null,
        loading: false,
        error,
      };
    }
    default:
      return { ...state };
  }
}
