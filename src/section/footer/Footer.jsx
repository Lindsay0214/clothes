import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-icon">
                    <a href="/"><i class="fas fa-home"><p className="footer-icon-topic">首頁</p></i></a>
                    <a href="/sidebar"><i class="fas fa-bars"><p className="footer-icon-topic">分類</p></i></a>
                    <a href="/cart"><i class="fas fa-dollar-sign"><p className="footer-icon-topic">結帳</p></i></a>
                    <a href="/login"><i class="fas fa-user-circle"><p className="footer-icon-topic">會員</p></i></a>
                </div>
            </div>
                )
            }
        }

export default Footer;