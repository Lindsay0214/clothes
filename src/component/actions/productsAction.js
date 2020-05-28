import * as types from './action-types/cart-actions';

export function requestProducts(){
    return {
      type: types.REQUEST_PRODUCTS
    };
  }
  
  export function addProductsSuccess(id){
    return {
      type: types.ADD_SUCCESS_PRODUCTS,
      id
    };
  }
  
  export function addProductsFailure(err){
    return {
      type: types.ADD_FAILURE_PRODUCTS,
      err
    };
  }
  
  export function addProducts(products){
    return (dispatch) => {
      dispatch(requestProducts());
      return fetch('http://localhost:3005/products', {
        method: 'GET',
        body: JSON.parse({
         products
        })
      })
      .then(response => {
        dispatch(addProductsSuccess(products));
      })
      .catch(err => dispatch(addProductsFailure(err)));
    };
  }