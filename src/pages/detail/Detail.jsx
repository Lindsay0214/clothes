import React from 'react';
import Layout from '../../section/Layout';

class Detail extends React.Component {

    render() {
        
        return (
            <div className="detail">
                <Layout />
            <div className="product-detail">
                <div className="product-image">
                    <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"></img>
                </div>
                <div className="product-info">
                    <h1>Tshirt</h1>
                    <div className="product-detail-color" style={{ paddingBottom:"10px" }}>
                        <p>color</p>
                        <button style={{ backgroundColor:"#333",padding:"20px"}}></button>
                        <button style={{ backgroundColor:"#333",padding:"20px",marginLeft:"10px"}}></button>
                        <button style={{ backgroundColor:"#333",padding:"20px",marginLeft:"10px"}}></button>
                    </div>
                    <div className="product-detail-size">
                        <p>size</p>
                        <button type="button">S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                        <button>XXL</button>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Detail;