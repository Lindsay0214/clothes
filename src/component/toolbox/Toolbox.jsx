import React from 'react';
import { withRouter } from 'react-router-dom';

class Toolbox extends React.Component {
    render() {
        return(
            <div className="tool-box">
                <ul className="logo-text">
                    <li className="logo-text-item"><a href="/sidebar">期間限定</a></li>
                    <li className="logo-text-item"><a href="/sidebar">人氣精選</a></li>
                    <li className="logo-text-item"><a href="/sidebar">新品推薦</a></li>
                    <li className="logo-text-item"><a href="/sidebar">聯名品牌</a></li>
                    <li className="logo-text-item"><a href="/sidebar">上衣襯衫</a></li>
                    <li className="logo-text-item"><a href="/sidebar">各式褲類</a></li>
                    <li className="logo-text-item"><a href="/sidebar">洋裝裙子</a></li>
                    <li className="logo-text-item"><a href="/sidebar">居家內著</a></li>
                    <li className="logo-text-item"><a href="/sidebar">配件吊飾</a></li>
                    <li className="logo-text-item"><a href="/sidebar">保暖衣著</a></li>
                </ul>
            </div>
        );
    }
}

// 首頁分類滑動橫幅

export default withRouter(Toolbox);