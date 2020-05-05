import React, { Fragment } from 'react';


class CartTest extends React.Component {

    state = {
        count: 0
    }

    addCart(){
        const { count } = this.state;
        this.setState({ count: count+1 });
    }

    render(){
        const { count } = this.state;
        return(

            <div className="cart-test">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-num">({ count })</span>

            <button
                onClick={ () => {
                const { count } = this.state;
                this.setState({ count: count+1 });
                            }
                        }>
            add
            </button>
            
            </div>
            );
        };

};


export default CartTest;
