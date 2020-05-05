import React from 'react';
import Layout from 'section/Layout';
import Products from 'component/product/Products';

class Cobrand extends React.Component {
    render() {
        return (
            <div className="co-brand">
                <Layout />
                <Products />
            </div>
        )
    }
}

export default Cobrand;