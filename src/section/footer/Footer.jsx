import React from 'react';

class Footer extends React.Component {



    render() {
        return (
            <div className="footer">
                <div className="footer-icon">
                    <a href="/"><i className="fas fa-home"><p className="footer-icon-topic">首頁</p></i></a>
                    <a href="/sidebar"><i className="fas fa-bars"><p className="footer-icon-topic">分類</p></i></a>
                    <a href="/cart"><i className="fas fa-dollar-sign"><p className="footer-icon-topic">結帳</p></i></a>
                    <a href="/login"><i className="fas fa-user-circle"><p className="footer-icon-topic">會員</p></i></a>
                </div>
            </div>
                )
            }
        }

export default Footer;