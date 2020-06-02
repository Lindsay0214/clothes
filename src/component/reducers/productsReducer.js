import * as types from '../../actions/action-types/cart-actions';


const returnProducts = (state = [], action)=>{
    switch (action.type) {
      case types.RECEIVE_PRODUCTS:
        // console.log(action);
        return action.products
        // return {
        //   ...state,
        //   products: action.products
        // }
      default:
        return state;
    }
  };

  export default returnProducts;
 

