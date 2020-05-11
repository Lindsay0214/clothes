import React from 'react';
import Layout from '../../component/Layout';
import Panel from 'component/other/Panel/Panel';
import AddCartItem from 'component/other/Panel/AddCartItem';
import axios from 'commons/axios';
import { toast } from 'react-toastify';


class Detail extends React.Component {

    toAddCart = () => {
        Panel.open({
            component: AddCartItem,
            props: {
                product: this.props.product,
                deleteProduct: this.props.delete
            },
            callback: data => {
                console.log(data);
            },
        });
    };

    addCart = async () => {
        if (!global.auth.isLogin()) {              //根據狀態顯示 (登陸判斷)
            this.props.history.push('/login');
            toast.info('Please Login First');
            return;
          }

        try {
            const user = global.auth.getUser() || {};
            const { id, name, image, price } = this.props.product;
            const res = await axios.get(`/carts?productId=${id}`);
            const carts = res.data;
            if (carts && carts.length > 0) {
                const cart = carts[0]
                cart.mount += 1;
                await axios.put(`/carts/${cart.id}`, cart);
            } else {
            const cart = {
                productId: id,
                name,
                image,
                price,
                mount: 1,
                userId: user.email
            };
    
            await axios.post('/carts', cart);
            }
            toast.success('成功加入購物車');
        } catch (error) {
            toast.error('error');
        }
    };


    render() {
        return (
            <div className="detail">
                <Layout />
                <div className="product-detail">
                    <div className="product-image">
                        <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img>
                    </div>
                    <div className="product-info">
                        <h1>Tshirt</h1>
                        <div className="product-detail-color" style={{ paddingBottom:"10px" }}>
                            <p>color</p>
                            <button style={{ backgroundColor:"#333",padding:"20px"}}></button>
                            <button style={{ backgroundColor:"#011",padding:"20px",marginLeft:"10px"}}></button>
                            <button style={{ backgroundColor:"#113",padding:"20px",marginLeft:"10px"}}></button>
                        </div>
                        <div className="product-detail-size">
                            <p>size</p>
                            <button type="button">S</button>
                            <button>M</button>
                            <button>L</button>
                            <button>XL</button>
                            <button>XXL</button>
                        </div>
                        <button className="addcart" onClick={this.addCart}>Add to Cart</button>
                    </div>
                </div>
                <button className="button is-primary cart-btn" onClick={this.toAddCart}>
                    <i className="fas fa-shopping-cart"></i>
                </button>
            </div>
            
        )
    }
}

export default Detail;