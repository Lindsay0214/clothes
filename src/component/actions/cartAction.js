import * as types from './action-types/cart-actions';

//add cart action
export const addToCart= (id)=>{
    return{
        type: types.ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: types.REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: types.SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: types.ADD_QUANTITY,
        id
    }
}

// export function receiveProducts(id){
//     return {
//         type: types.RECEIVE_PRODUCTS,
//         id
//     };
// }

// export function receiveProductsAsync(id){
//     return (dispatch) => {
//         setTimeout(()=>{
//             dispatch(receiveProducts(id));
//         }, 1000);
//     };
// }


export function requestProducts(){
    return {
      type: 'REQUEST_PRODUCTS'
    };
  }
  
  export function addProductsSuccess(id){
    return {
      type: 'ADD_SUCCESS_PRODUCTS',
      id
    };
  }
  
  export function addProductsFailure(err){
    return {
      type: 'ADD_FAILURE_PRODUCTS',
      err
    };
  }
  
  export function addProducts(id){
    return (dispatch) => {
      dispatch(requestProducts());
      return fetch('http://localhost:3005/products', {
        method: 'GET',
        body: JSON.stringify({
          id
        })
      })
      .then(response => {
        dispatch(addProductsSuccess(id));
      })
      .catch(err => dispatch(addProductsFailure(err)));
    };
  }