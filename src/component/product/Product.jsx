import React from 'react';
import { withRouter } from 'react-router-dom';
import { formatPrice } from 'commons/helper';
import Panel from 'component/other/Panel/Panel';
import EditItem from 'component/other/Panel/EditItem';
import axios from 'commons/axios';
import { toast } from 'react-toastify';

class Product extends React.Component {
    toEdit = () => {
        Panel.open({
            component: EditItem,
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

    renderMangerBtn = () => {
        const user = global.auth.getUser() || {}
        if (user.type === 1) {
            return (
                <div className="p-head has-text-right" onClick={this.toEdit}>
                    <span className="icon edit-btn">
                        <i className="fas fa-sliders-h"></i>
                    </span>
                </div>
            );
        }
    };                 //未登入時不顯示edititem圖示


    // renderUserBtn = () => {
    //     const user = global.auth.getUser() || {}
    //     if (user.type === 0) {
    //         return (
    //             <button className="add-cart" disabled={status === 'unavailable'} onClick={this.addCart}>
    //                 <i className="fas fa-shopping-cart"></i>
    //                 <i className="fas fa-exclamation"></i>
    //             </button>
    //         );
    //     }
    // };      


    render() {
        const { name, image, price, status } = this.props.product;
        const _pClass = {
            available: 'product',
            unavailable: 'product out-stock'
            };    
            
        return( 
            <div className={_pClass[status]}>
                <div className="p-content">     
                    {this.renderMangerBtn()}                    
                    <div className="img-wrapper">
                        <div className="out-stock-text">完售</div>
                        <figure className="image is-4by3">
                            <img src={image} alt={name} />
                        </figure>
                    </div>
                        <p className="p-name"><a href="/detail">{name}</a></p>
                </div>
                <div className="p-footer">
                    <p className="price">{formatPrice(price)}</p>
                    {/* {this.renderUserBtn()} */}
                    <button className="add-cart" disabled={status === 'unavailable'} onClick={this.addCart}>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default withRouter(Product);