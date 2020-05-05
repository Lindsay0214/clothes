import React from 'react';
import Layout from 'component/Layout';
import Products from 'component/product/Products';

class Bottom extends React.Component {
    render() {
        return (
            <div className="bottom">
                <Layout />
                <Products />
            </div>
        )
    }
}

export default Bottom;