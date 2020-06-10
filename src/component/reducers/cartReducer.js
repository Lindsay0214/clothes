import * as types from '../../actions/action-types/cart-actions';

const initState = {
    // items: [],
    addedItems:[],
    products: [],
    total: 0
}

const cartReducer = (state = initState, action) => {
    // console.log("state", state)
    //INSIDE HOME COMPONENT
    if(action.type === types.ADD_TO_CART){
        console.log(state)
        // let addedItem = state.products.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
        //  let existed_item= state.addedItem.find(item=> action.id === item.id)

        //  if(existed_item)
        //  {
        //     addedItem.quantity += 1 
        //      return{
        //         ...state,
        //          total: state.total + addedItem.price 
        //           }
        // }
        //  else{
        //     addedItem.quantity = 1;
        //     //calculating the total
        //     let newTotal = state.total + addedItem.price 
            
        //     return{
        //         ...state,
        //         addedItems: [...state.addedItems, addedItem],
        //         total : newTotal
        //     }
            
        // }

            return{
                ...state,
                addedItems: [...state.addedItems, action.payload],
                // total : newTotal
            }
            
        
    }
    if(action.type === types.REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== types.ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== types.SUB_QUANTITY){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== types.ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 60
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 60
        }
  }
    
  else{
    return state
    }
}

export default cartReducer;


// function cartReducer(state = [], action){

//     switch(action.type){
//       case 'ADD_TO_CART':
//           let item = action.item;
//           let cartItems = state.cartItems;
//           let cartTotal = state.cartTotal;
  
//           var existingCartItem = cartItems.find(c =>  c.productId === item.productId);
//           if(existingCartItem){
//               existingCartItem.qty +=1;
//               cartTotal += existingCartItem.price;
//               existingCartItem.totalPrice += existingCartItem.price;
  
//              return {cartTotal:cartTotal, cartItems: [ ...cartItems.filter(ci => ci.productId !== existingCartItem.productId), existingCartItem   ]};
//           }
//           let newCartItem = Object.assign(item, {qty:1, totalPrice:item.price});
//           cartTotal = cartTotal + newCartItem.price;
//           return {cartTotal:cartTotal,cartItems: [...cartItems, newCartItem]};
  
//       case 'CLEAR_CART':
//           return {cartTotal:0, cartItems:[]};
//       default:
//       return state;
//     }
  
//   }
//   export default cartReducer;