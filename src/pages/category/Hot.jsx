import React from 'react';
import Layout from 'section/Layout';
import Products from 'component/product/Products';

class Hot extends React.Component {
    render() {
        return (
            <div className="hot">
                <Layout />
                <Products />
            </div>
        )
    }
}

export default Hot;