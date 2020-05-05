import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Login from 'pages/login/Login';
import Register from 'pages/register/Register';
import Cart from 'pages/Cart';

import New from 'pages/category/New';
import Hot from 'pages/category/Hot';
import Dress from 'pages/category/Dress';
import Top from 'pages/category/Top';
import Bottom from 'pages/category/Bottom';
import Inner from 'pages/category/Inner';
import Period from 'pages/category/Period';
import Cobrand from 'pages/category/Cobrand';
import Warmfit from 'pages/category/Warmfit';
import Acc from 'pages/category/Acc';

import Detail from 'pages/detail/Detail';
import Sidebar from 'component/sidebar/Sidebar';
import NotFound from 'pages/notfound/NotFound';
import 'commons/auth';


const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/cart" component={Cart} />

            <Route path="/new" component={New} />
            <Route path="/hot" component={Hot} />
            <Route path="/dress" component={Dress} />
            <Route path="/period" component={Period} />
            <Route path="/co-brand" component={Cobrand} />
            <Route path="/top" component={Top} />
            <Route path="/bottom" component={Bottom} />
            <Route path="/inner" component={Inner} />
            <Route path="/acc" component={Acc} />
            <Route path="/warm-fit" component={Warmfit} />

            <Route path="/detail" component={Detail} />
            <Route path="/sidebar" component={Sidebar} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App;