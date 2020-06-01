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
  
 

  // export function addProducts(){
  //   return (dispatch) => {
  //     dispatch(requestProducts());
  //     return fetch('http://localhost:3005/products', {
  //       method: 'GET',
  //     })
  //     .then(response => response.json())
  //     .then(response => {
  //       dispatch(addProductsSuccess(response));
  //       console.log(response)
  //     }
  //     )
  //     .catch(err => dispatch(addProductsFailure(err)));
  //   };
    
  // }

//me
  const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
  });
  
  export const getAllProducts = () => dispatch => {
    return fetch('http://localhost:3005/products', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json =>
      dispatch(receiveProducts(json))
    )
  }
