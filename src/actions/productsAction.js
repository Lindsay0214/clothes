// import * as types from './action-types/cart-actions';

//   const receiveProducts = products => ({
//     type: types.RECEIVE_PRODUCTS,
//     products
//   });

//   export const getAllProducts = () => dispatch => {
//     return fetch('http://localhost:3005/products', {
//       method: 'GET',
//     })
//     .then(response => response.json())
//     .then(json =>
//       dispatch(receiveProducts(json))
//     )
//   }

  // export const getAllProducts = () =>　(dispatch, getState) => {
  //   dispatch(receiveProducts())
  //  return fetch('http://localhost:3005/products', {
  //     method: 'GET',
  //   })
  //   .then(response => response.json())
  //   .then(json =>
  //     dispatch(receiveProducts(json))
  //   )
  // }

  // const addToCartUnsafe = productId => ({
  //   type: types.ADD_TO_CART,
  //   productId
  // })
  
  // export const addToCart = productId => (dispatch, getState) => {
  //   if (getState().products.byId[productId].inventory > 0) {
  //     dispatch(addToCartUnsafe(productId))
  //   }
  // }

  // export const getAllProducts = () => dispatch => {
  //   shop.getProducts(products => {
  //     dispatch(receiveProducts(products))
  //   })
  // }


  // export const checkout = products => (dispatch, getState) => {
  //   const { cart } = getState()
  
  //   dispatch({
  //     type: types.CHECKOUT_REQUEST
  //   })
  //   shop.buyProducts(products, () => {
  //     dispatch({
  //       type: types.CHECKOUT_SUCCESS,
  //       cart
  //     })
  //   })
  // }
  