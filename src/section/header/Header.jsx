import React from 'react';
import Logo from './Logo';


const Header = props => (
    <div className="header">
        <div className="grid">
            <div className="grid-top">
                <div className="grid-top-start">
                    <Logo />
                </div>
                <div className="grid-top-end">
                    {/* <div to="/cart" className="cart-box">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-num">(0)</span>
                    </div>  */}
                 
                    {props.user.nickname ? (
                    <span className="nickname">
                        <i className="far fa-user"></i>
                        {props.user.nickname}
                    </span>
                ) : (
                    <React.Fragment>
                        <a href="/login">登入|</a>
                        <a href="/register">註冊</a>
                    </React.Fragment>
                )}
                </div>
            </div>
        </div>
    </div>
);


export default Header;

          
