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