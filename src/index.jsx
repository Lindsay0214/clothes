import React from 'react';
import ReactDOM from 'react-dom';
import App from 'app/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/app.scss';
import './section/footer/footer.css';
import './component/sidebar/sidebar.css';
import './section/header/header.css';
import './pages/detail/detail.css';
import './component/toolbox/toolbox.css';
import './component/other/cart/cart.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './pages/login/login.css';
import './pages/register/register.css';
import './component/product/product.scss';
import './pages/notfound/notfound.css';
import './component/other/Panel/panel.scss';
import './component/other/Panel/item.css';


ReactDOM.render(
    <div>
        <ToastContainer />
        <App />
    </div>,
    document.getElementById('root')
    );