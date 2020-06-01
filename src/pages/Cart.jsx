import React, { Component } from 'react';
import Layout from '../component/Layout';
import CartItem from 'component/other/cart/CartItem';

class Cart extends Component{

    render(){
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

export default Cart;