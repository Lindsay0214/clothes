import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/app.scss';
import './css/style.scss';
import './section/footer/footer.css';
import './component/sidebar/sidebar.css';
import './section/header/header.css';
import './pages/detail/detail.css';
import './component/toolbox/toolbox.css';
import './component/other/cart/cart.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
    <div>
        <ToastContainer />
        <App />
    </div>,
    document.getElementById('root')
    );