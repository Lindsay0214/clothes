import React from 'react';
import axios from 'commons/axios';
import { toast } from 'react-toastify';

class AddCartItem extends React.Component {
   
    // addCart = async () => {
    //     if (!global.auth.isLogin()) {              //根據狀態顯示 (登陸判斷)
    //         this.props.history.push('/login');
    //         toast.info('Please Login First');
    //         return;
    //       }

    //     try {
    //         const user = global.auth.getUser() || {};
    //         const { id, name, image, price } = this.props.product;
    //         const res = await axios.get(`/carts?productId=${id}`);
    //         const carts = res.data;
    //         if (carts && carts.length > 0) {
    //             const cart = carts[0]
    //             cart.mount += 1;
    //             await axios.put(`/carts/${cart.id}`, cart);
    //         } else {
    //         const cart = {
    //             productId: id,
    //             name,
    //             image,
    //             price,
    //             mount: 1,
    //             userId: user.email
    //         };
    
    //         await axios.post('/carts', cart);
    //         }
    //         toast.success('成功加入購物車');
    //     } catch (error) {
    //         toast.error('error');
    //     }
    // };


    render(){
        return(
            <div></div>
        )
    }
}

export default AddCartItem;

