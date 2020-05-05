import React from 'react';
import axios from 'commons/axios';
import Product from 'component/product/Product';
import Search from 'section/header/Search';
import Panel from 'component/other/Panel/Panel';
import CheckItem from 'component/other/Panel/CheckItem';
import { withRouter } from 'react-router-dom';

class Products extends React.Component {
    state = {
        products: [],
        sourceProducts:[],
        cartNum: 0
    };

    componentDidMount() {
        axios.get('/products').then(response => {
            this.setState({
                products: response.data,
                sourceProducts: response.data
            });
        });
        this.updateCartNum();
    }                   // API請求數據 使用axios庫和元件

    // 搜尋邏輯
    search = text => {
        console.log(text);
        let _products = [...this.state.sourceProducts]  // 解構獲取新數組 拿到product
        _products = _products.filter(p => {
            const matchArray = p.name.match(new RegExp(text, 'gi'))   // name: Abcd  text: ab ===> ['Ab']
            return !!matchArray
        })

        this.setState({
            products: _products
        })
    };

    updateCartNum = async () => {
        const cartNum = await this.initCartNum()
        this.setState({
            cartNum: cartNum
        });
    };

    initCartNum = async () => {
        const res = await axios.get('/carts')
        const carts = res.data || []
        const cartNum = carts
        .map(cart => cart.mount)
        .reduce((a,value) => a + value, 0)
        return cartNum
    }

    toAdd = () => {
        Panel.open({
            component: CheckItem,
            callback: data => {
                if (data) {
                    this.add(data);
                }
            }
        });
    };

    add = product => {
        const _products = [...this.state.products]
        _products.push(product)
        const _sProducts = [...this.state.sourceProducts]
        _sProducts.push(product)

        this.setState({
            products: _products,
            sourceProducts: _sProducts
        });
    };

    update = product => {
        const _products = [...this.state.products];
        const _index = _products.findIndex(p => p.id === product.id);
        _products.splice(_index, 1, product);
        const _sProducts = [...this.state.sourceProducts];
        const _sIndex = _products.findIndex(p => p.id === product.id);
        _sProducts.splice(_sIndex, 1, product);
        this.setState({
          products: _products,
          sourceProducts: _sProducts
        });
      };
    
      delete = id => {
        const _products = this.state.products.filter(p => p.id !== id);
        const _sProducts = this.state.sourceProducts.filter(p => p.id !== id);
        this.setState({
          products: _products,
          sourceProducts: _sProducts
        });
      };

      goCart = () => {
          this.props.history.push('/cart');
      }

    render() {
        const { product } = this.state;
        return (
            <div className="products">
                <div className="search-bar">
                    <Search  search={ this.search } />
                    <div to="/cart" className="cart-box" onClick={this.goCart}>
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-num">({this.state.cartNum})</span>
                    </div>
                </div>
                <div className="columns is-multiline is-desktop">
                    { this.state.products.map(p => {
                        return(
                            <div className="column is-3" key={p.id} >
                                <Product product={p} update={this.update} delete={this.delete} />
                            </div>
                            )
                        }
                    )}
                </div>
                <button className="button is-primary add-btn" onClick={this.toAdd}><i className="fas fa-shopping-cart"></i></button>
            </div>
        )
    }
}

export default withRouter(Products);