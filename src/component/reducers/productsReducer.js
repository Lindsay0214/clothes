import * as types from '../actions/action-types/cart-actions';

export default function products(state = false, action) {
    switch (action.type) {
      case types.REQUEST_PRODUCTS:
        return true;
      case types.ADD_SUCCESS_PRODUCTS:
      case types.ADD_FAILURE_PRODUCTS:
        return false;
      default:
        return state;
    }
  }