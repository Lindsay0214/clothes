import React from 'react';
import Layout from 'section/Layout';
import Products from 'component/product/Products';

class Top extends React.Component {
    render() {
        return (
            <div className="top">
                <Layout />
                <Products />
            </div>
        )
    }
}

export default Top;