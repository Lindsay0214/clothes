// import React, { useState, useEffect, useMemo } from 'react';
// import Layout from 'component/Layout';
// import CartItem from '../component/other/cart/CartItem';
// import axios from 'commons/axios';
// import { formatPrice } from 'commons/helper';

// const Cart = () => {
//     const [carts, setCarts] = useState([]);

//     useEffect(() => {
//         const user = global.auth.getUser() || {};    //依userid給購物車數據
//         axios.get(`/carts?userId=${user.eamil}`).then(res => setCarts(res.data));
//     }, []);

//     const totalPrice = useMemo(() => {
//         const totalPrice = carts
//           .map(cart => cart.mount * parseInt(cart.price))
//           .reduce((a, value) => a + value, 0);
//         return formatPrice(totalPrice);
//       }, [carts]);                                             

//     const updateCart = cart => {
//         const newCarts = [...carts];
//         const _index = newCarts.findIndex(c => c.id === cart.id);
//         newCarts.splice(_index, 1, cart);
//         setCarts(newCarts);
//     };

//     const deleteCart = cart => {
//         const _carts = carts.filter(c => c.id !== cart.id);
//         setCarts(_carts);
//     };

//     return (
//         <Layout>
//             <div className="cart-page">
//                 <p className="title has-text-centered">購物車</p>
//                 <div className="cart-list">
//                     {
//                         carts.map(cart => (
//                             <CartItem
//                                 key={cart.id}
//                                 cart={cart}
//                                 updateCart={updateCart}
//                                 deleteCart={deleteCart}
//                                 />
//                             ))}
//                 </div>

//                 <div className="cart-total">
//                     Total:
//                     <span className="total-price">{totalPrice}</span>
//                 </div>
//                 <button className="cart-check">check</button>
//             </div>
//         </Layout>
//         );  
//     };

// export default Cart;


  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from '../component/actions/cartAction';
import Recipe from '../component/other/cart/Recipe';
import Layout from '../component/Layout';
import CartItem from 'component/other/cart/CartItem';

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        // let addedItems = this.props.items.length ?
        //     (  
        //         this.props.items.map(item=>{
        //             return(
                       
        //                 <li className="collection-item avatar" key={item.id}>
        //                             <div className="item-img"> 
        //                                 <img src={item.img} alt={item.img} className=""/>
        //                             </div>
                                
        //                             <div className="item-desc">
        //                                 <p>{item.desc}</p>
        //                                 <p><b>Price: {item.price}$</b></p> 
        //                                 <p>
        //                                     <b>Quantity: {item.quantity}</b> 
        //                                 </p>
        //                                 <div className="add-remove">
        //                                     <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
        //                                     <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
        //                                 </div>
        //                                 <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
        //                             </div>
                                    
        //                         </li>
        //             )
        //         })
        //     ):

        //      (
        //         <p>購物車沒有東西</p>
        //      )
             
       return(
        <Layout>
            <div className="container container-8">
                <div className="cart">
                    <h1>購物車</h1>
                    <CartItem />
                </div> 
            </div>
        </Layout>
       );
    };
};


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);