import React from 'react';
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
        try {
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
                mount: 1
            };
    
            await axios.post('/carts', cart);
            }
            toast.success('成功加入購物車');
        } catch (error) {
            toast.error('error');
        }
    };

    render() {
        const { name, image, price, status } = this.props.product;
        const _pClass = {
            available: 'product',
            unavailable: 'product out-stock'
            }
            
        return(
            <div className={_pClass[status]}>
                <div className="p-content">
                    <div className="p-head has-text-right" onClick={this.toEdit}>
                    <span>
                        <i className="fas fa-sliders-h"></i>
                    </span>
                    </div>  
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
                    <button className="add-cart" disabled={status === 'unavailable'} onClick={this.addCart}>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}

export default Product;