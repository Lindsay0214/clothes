import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem,addQuantity,subtractQuantity} from '../component/actions/cartAction';
import Layout from '../component/Layout';
import CartItem from 'component/other/cart/CartItem';

class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
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

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart);