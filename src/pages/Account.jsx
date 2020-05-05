import React from 'react';
import Login from './Login';

class Account extends React.Component {
    render() {
        return (
            <div className="account">
                <button>
                    <a href="Login"><Login /></a>
                </button>
                <button><a href="Register">Register</a></button>
                <span className="nickname">{this.props.nickname}</span>
            </div>
        )
    }
}

export default Account;

// 會員頁面