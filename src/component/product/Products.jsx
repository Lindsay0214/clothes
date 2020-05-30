import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartAction';
import { requestProducts, addProducts } from '../actions/productsAction';


class Products extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }    

    componentDidMount(products){
        this.props.addProducts(products);
    }

    render(){
        console.log('items:', this.props.items)
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt="pic" />
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"
                                onClick={()=>{this.handleClick(item.id)}}>
                                <span>+</span>
                            </span>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price {item.price}$</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log('state', state)
    return {
      items: state.cartReducer.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    console.log(addProducts)
    
    return{
        requestProducts: ()=>{dispatch(requestProducts())},
        addToCart: (id)=>{dispatch(addToCart(id))},
        addProducts: () => {dispatch(addProducts())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);