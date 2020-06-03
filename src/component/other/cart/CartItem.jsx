import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../../../actions/cartAction';
import Recipe from './Recipe';

class CartItem extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        // console.log(this.props)
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to subtract from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){
        console.log(this.props.items.length)
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    console.log(item)
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className="s"/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <p className="title"><b>{item.name}</b></p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="fas fa-sort-up" onClick={()=>{this.handleAddQuantity(item.id)}}></i></Link>
                                            <b>{item.quantity}</b> 
                                            <Link to="/cart"><i className="fas fa-sort-down" onClick={()=>{this.handleSubtractQuantity(item.id)}}></i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>購物車沒有東西</p>
             )
       return(
            <div className="container-7">
                <div className="cart">
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe />
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    // console.log(state.cart)
    return{
        items: state.cart.addedItems,
        // products: state.products
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
export default connect(mapStateToProps,mapDispatchToProps)(CartItem)



