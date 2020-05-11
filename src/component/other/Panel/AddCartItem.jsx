import React, { useState, useEffect } from 'react';
import CartItem from 'component/other/cart/CartItem';
import axios from 'commons/axios';
import { formatPrice } from 'commons/helper';

const AddCartItem = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        const user = global.auth.getUser() || {};    //依userid給購物車數據
        axios.get(`/carts?userId=${user.eamil}`).then(res => setCarts(res .data));
    }, []);

    const totalPrice = () => {
        const totalPrice = carts
            .map(cart => cart.mount * parseInt(cart.Price))
            .reduce((a,value) => a + value, 0);
        return formatPrice(totalPrice);
    };

    return(
        <div className="cart-page">
            <p className="title has-text-centered">Cart</p>
            <div className="cart-list">
                {
                    carts.map(cart => (
                    <CartItem key={cart.id} cart={cart} />
                        ))
                }
            </div>
            <div className="cart-total">
                Total:
                <span className="total-price">{totalPrice()}</span>
            </div>
        </div>
    )
    };

export default AddCartItem;

