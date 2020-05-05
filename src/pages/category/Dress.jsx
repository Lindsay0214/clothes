import React from 'react';
import Layout from 'section/Layout';
import Products from 'component/product/Products';

class Dress extends React.Component {
    render() {
        return (
            <div className="dress">
                <Layout />
                <Products />
            </div>
        )
    }
}

export default Dress;