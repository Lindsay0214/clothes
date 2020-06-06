import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartAction';


class Products extends Component{
    
    handleClick = (id) => {
        this.props.addToCart(id); 
    }    

    render(){
        console.log(this.props)
        let itemList = this.props.products.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt="pic" />
                            <span 
                                to="/"
                                className="btn-floating halfway-fab waves-effect waves-light red"
                                onClick={()=>{this.handleClick(item.id)}}
                                >
                                <span>+</span>
                            </span>
                        </div>

                        <div className="card-content">
                            <p>{item.name}</p>
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

const mapStateToProps = state => {
    // console.log(state.products)
    return {
        products: state.products,
      }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id)=>{dispatch(addToCart(id))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);