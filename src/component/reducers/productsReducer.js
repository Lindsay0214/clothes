/* eslint-disable no-unused-expressions */
import * as types from '../../actions/action-types/cart-actions';
import { combineReducers } from 'redux';

// export default function products(state = false, action) {
//     switch (action.type) {
//       case types.REQUEST_PRODUCTS:
//         return true;
//       case types.ADD_SUCCESS_PRODUCTS:
//       case types.ADD_FAILURE_PRODUCTS:
//         return false;
//       default:
//         return state;
//     }
//   }

const returnProducts = (state = [], action)=>{
    switch (action.type) {
      case types.RECEIVE_PRODUCTS:
        console.log(action);
        return action.products
      default:
        return state;
    }
  };

  export default combineReducers({
    returnProducts
  });

  export const getVisibleProducts = (state) => state ? state.returnProducts : [];


