import React from 'react';
import { withRouter } from 'react-router-dom';

class Toolbox extends React.Component {
    render() {
        return(
            <div className="tool-box">
                <ul className="logo-text">
                    <li className="logo-text-item"><a href="/period">期間限定</a></li>
                    <li className="logo-text-item"><a href="/hot">人氣精選</a></li>
                    <li className="logo-text-item"><a href="/new">新品推薦</a></li>
                    <li className="logo-text-item"><a href="/co-brand">聯名品牌</a></li>
                    <li className="logo-text-item"><a href="/top">上衣襯衫</a></li>
                    <li className="logo-text-item"><a href="/bottom">各式褲類</a></li>
                    <li className="logo-text-item"><a href="/dress">洋裝裙子</a></li>
                    <li className="logo-text-item"><a href="/inner">居家內著</a></li>
                    <li className="logo-text-item"><a href="/acc">配件吊飾</a></li>
                    <li className="logo-text-item"><a href="/warm-fit">保暖衣著</a></li>
                </ul>
            </div>
        );
    }
}

// 首頁分類滑動橫幅

export default withRouter(Toolbox);