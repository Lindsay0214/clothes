import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import productsReducer from './productsReducer';

export default combineReducers({
    cartReducer,
    productsReducer
})