import React from 'react';
import Layout from 'component/Layout';
import Products from 'component/product/Products';

class Period extends React.Component {
    render() {
        return (
            <div className="period">
                <Layout />
                <Products />
            </div>
        )
    }
}

export default Period;