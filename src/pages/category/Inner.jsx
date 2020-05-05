import React from 'react';
import Layout from 'section/Layout';
import Products from 'component/product/Products';

class Inner extends React.Component {
    render() {
        return (
            <div className="inner">
                <Layout />
                <Products />
            </div>
        )
    }
}

export default Inner;