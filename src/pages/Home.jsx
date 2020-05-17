import React from 'react';
import Toolbox from 'component/toolbox/Toolbox';
import Products from 'component/product/Products';
import SimpleSlider from 'component/other/SimpleSlider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from '../component/Layout';
import Search from 'section/header/Search';

class Home extends React.Component {
    render() {
        return (
            <Layout>
                <Toolbox />
                <SimpleSlider />
                <Search />
                <Products />
            </Layout>
        );
    }
}

export default Home;