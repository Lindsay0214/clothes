import React from 'react';
import Layout from 'component/Layout';
import Products from 'component/product/Products';

class New extends React.Component {
    render() {
        return (
            <div className="new">
                <Layout />
                <Products />
            </div>
        )
    }
}

export default New;