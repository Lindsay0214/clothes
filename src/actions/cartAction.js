import * as types from './action-types/cart-actions';
// import { bindActionCreators } from 'redux';


//remove item action
export const removeItem=(item)=>{
    return{
        type: types.REMOVE_ITEM,
        item
    }
}
//subtract qt action
export const subtractQuantity=(item)=>{
    return{
        type: types.SUB_QUANTITY,
        item
    }
}
//add qt action
export const addQuantity=(item)=>{
    return{
        type: types.ADD_QUANTITY,
        item
    }
}


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


const addToCart = item => ({
  type: types.ADD_TO_CART,
  item
})

// export const addToCartAsync = id => (dispatch, getState) => {
//   getState().products.map(item=> item.id)
//   dispatch(addToCart(id))
// }

export const addToCartAsync = id => (dispatch, getState) => {
    console.log(getState().products)
    const item = getState().products.find(item=> item.id === id)
    // const item = items ? items[0] : [];
    console.log("item", item)
    dispatch(addToCart(item))
  
}
 