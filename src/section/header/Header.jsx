import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import UserProfile from 'component/UserProfile';
import Search from './Search';
import Panel from 'component/other/Panel/Panel';

const Header = props => {
    const toProfile = () => {
        Panel.open({
            component: UserProfile,
            callback: data => {
                console.log(data);
            }
        });
    };

    return (
        <div className="header">
            <div className="grid">
                <div className="grid-top">
                    <div className="grid-top-start">
                        <Logo />
                    </div>
                    <div className="grid-top-end">
                        {props.user.nickname ? (
                        <span className="nickname">
                            <i className="far fa-user"></i>
                            {props.user.nickname}
                        </span>
                    ) : (
                        <React.Fragment>
                            <Link to="/login">登入|</Link>
                            <Link to="/register">註冊</Link>
                        </React.Fragment>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

          
