import React, { useState, useEffect } from 'react';
import Layout from 'component/Layout';
import CartItem from '../component/other/cart/CartItem';
import axios from 'commons/axios';
import { formatPrice } from 'commons/helper';

const Cart = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        axios.get('/carts').then(res => setCarts(res .data));
    }, []);

    const totalPrice = () => {
        const totalPrice = carts
            .map(cart => cart.mount * parseInt(cart.Price))
            .reduce((a,value) => a + value, 0);
        return formatPrice(totalPrice);
    };

    return (
        <Layout>
            <div className="cart-page">
                <p className="title has-text-centered">購物車</p>
                <div className="cart-list">
                    {
                        carts.map(cart => (
                        <CartItem key={cart.id} cart={cart} />
                            ))
                    }
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
                <div className="cart-total">
                    Total:
                    <span className="total-price">{totalPrice()}</span>
                </div>
            </div>
        </Layout>
        );  
    };

export default Cart;



