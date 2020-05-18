import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <ul className="footer-icon">
                    <li><Link to="/"><i className="fas fa-home"><p className="footer-icon-topic">首頁</p></i></Link></li>
                    <li><Link to="/sidebar"><i className="fas fa-bars"><p className="footer-icon-topic">分類</p></i></Link></li>
                    <li><Link to="/cart"><i className="fas fa-dollar-sign"><p className="footer-icon-topic">結帳</p></i></Link></li>
                    <li><Link to="/login"><i className="fas fa-user-circle"><p className="footer-icon-topic">會員</p></i></Link></li>
                </ul>
            </div>
                )
            }
        }

export default Footer;