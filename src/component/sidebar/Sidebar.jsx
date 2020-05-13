import React from 'react';
import Layout from 'component/Layout';
import Toolbox from 'component/toolbox/Toolbox';
import Products from 'component/product/Products';

class Sidebar extends React.Component {
    render() {
        return (
            <Layout>
                <Toolbox />
                <Products />
            </Layout>
        )
    }
}

// 分類頁面

export default Sidebar;