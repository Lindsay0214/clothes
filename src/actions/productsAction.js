import * as types from './action-types/cart-actions';


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
