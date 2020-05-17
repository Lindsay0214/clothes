// import React, { useState, useMemo } from 'react';
// import { formatPrice } from 'commons/helper';
// import axios from 'commons/axios';

// const CartItem = props => {
//     const [mount, setMount] = useState(props.cart.mount); 
//     const { id, name, price, image } = props.cart || {};
//     // const sumPrice = formatPrice(mount * parseInt(price));

//     const sumPrice = useMemo(() => {
//         return formatPrice(mount * parseInt(price));
//       }, [mount, price]);

//     const handleChange = e => {                             //修改商品數量
//         const _mount = parseInt(e.target.value);            //視圖渲染
//         setMount(_mount);
//         const newCart = {
//             ...props.cart,
//             mount: _mount
//         };
//         axios.put(`/carts/${id}`, newCart).then(res => {    //數據渲染
//             props.updateCart(newCart);
//         });
//     };

//     const deleteCart = () => {
//         axios.delete(`/carts/${id}`).then(res => { 
//             props.deleteCart(props.cart);
//         });
//     };
    
//     return (
//         <div className="columns is-vcentered">
//             <div className="column is-narrow" onClick={deleteCart} >
//                 <span className="close">x</span>
                
//             </div>
//             <div className="column is-narrow">
//                 <img src={image} alt={name} width="100" />
//             </div>
//             <div className="column cart-name is-narrow">{name}</div>
//             <div className="column">
//                 <span className="price">{formatPrice(price)}</span>
//             </div>
//             <div className="column">
//                 <input type="number" className="input num-input" min={1} value={mount} onChange={handleChange}/>
//             </div> 
//             <div className="column">
//                 <span className="sum-price">{sumPrice}</span>
//             </div>
//         </div>
//     );
// };

// export default CartItem;


import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeItem,addQuantity,subtractQuantity} from '../../actions/cartAction';
import Recipe from './Recipe';

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
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                                    
                                </li>
                         
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
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
export default connect(mapStateToProps,mapDispatchToProps)(Cart)