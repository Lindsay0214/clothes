import React, { useState, useMemo } from 'react';
import { formatPrice } from 'commons/helper';
import axios from 'commons/axios';

const CartItem = props => {
    const [mount, setMount] = useState(props.cart.mount); 
    const { id, name, price, image } = props.cart || {};
    // const sumPrice = formatPrice(mount * parseInt(price));

    const sumPrice = useMemo(() => {
        return formatPrice(mount * parseInt(price));
      }, [mount, price]);

    const handleChange = e => {                             //修改商品數量
        const _mount = parseInt(e.target.value);            //視圖渲染
        setMount(_mount);
        const newCart = {
            ...props.cart,
            mount: _mount
        };
        axios.put(`/carts/${id}`, newCart).then(res => {    //數據渲染
            props.updateCart(newCart);
        });
    };

    const deleteCart = () => {
        axios.delete(`/carts/${id}`).then(res => { 
            props.deleteCart(props.cart);
        });
    };
    
    return (
        <div className="columns is-vcentered">
            <div className="column is-narrow" onClick={deleteCart} >
                <span className="close">x</span>
                
            </div>
            <div className="column is-narrow">
                <img src={image} alt={name} width="100" />
            </div>
            <div className="column cart-name is-narrow">{name}</div>
            <div className="column">
                <span className="price">{formatPrice(price)}</span>
            </div>
            <div className="column">
                <input type="number" className="input num-input" min={1} value={mount} onChange={handleChange}/>
            </div> 
            <div className="column">
                <span className="sum-price">{sumPrice}</span>
            </div>
        </div>
    );
};

export default CartItem;


