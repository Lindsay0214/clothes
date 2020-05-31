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
import './component/other/Panel/panel.scss';
import './component/other/Panel/item.css';
import reducer from './component/reducers/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getAllProducts } from './actions/productsAction';

const middleware = [ thunk ];
  
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

store.dispatch(getAllProducts())

ReactDOM.render(
    <Provider store={store}>
        <ToastContainer />
        <App />
    </Provider>,
    document.getElementById('root')
);
    