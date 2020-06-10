import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../../../actions/cartAction';
import Recipe from './Recipe';

class CartItem extends Component{

    //to remove the item completely
    handleRemove = (item)=>{
        // console.log(this.props)
        this.props.removeItem(item);
    }
    //to add the quantity
    handleAddQuantity = (item)=>{
        this.props.addQuantity(item);
    }
    //to subtract from the quantity
    handleSubtractQuantity = (item)=>{
        this.props.subtractQuantity(item);
    }

    render(){
        // console.log(this.props)
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    console.log(item)
                    return(
                       
                        <li className="collection-item avatar" key={item}>
                                    <div className="item-img"> 
                                        <img src={item} alt={item} className="s"/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <p className="title"><b>{item}</b></p>
                                        <p><b>Price: {item}$</b></p> 
                                        
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="fas fa-sort-up" onClick={()=>{this.handleAddQuantity(item)}}></i></Link>
                                            <b>{item}</b> 
                                            <Link to="/cart"><i className="fas fa-sort-down" onClick={()=>{this.handleSubtractQuantity(item)}}></i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item)}}>Remove</button>
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
    console.log(state)
    return{
        items: state.cart.addedItems,
        // products: state.products
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (item)=>{dispatch(removeItem(item))},
        addQuantity: (item)=>{dispatch(addQuantity(item))},
        subtractQuantity: (item)=>{dispatch(subtractQuantity(item))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartItem)



