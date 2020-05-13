import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/login/Login';
import Register from 'pages/register/Register';
import Cart from 'pages/Cart';

import Detail from 'pages/detail/Detail';
import Sidebar from 'component/sidebar/Sidebar';
import 'commons/auth';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={Cart} />

            <Route path="/detail" component={Detail} />
            <Route path="/sidebar" component={Sidebar} />
        </Switch>
    </BrowserRouter>
)

export default App;