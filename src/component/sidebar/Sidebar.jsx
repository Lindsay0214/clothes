import React from 'react';
import Footer from 'section/footer/Footer';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="category">
                
            <div className="sidebar">
                <ul className="sidebar-text">
                    <li className="sidebar-text-item"><a href="/period">期間限定</a></li>
                    <li className="sidebar-text-item"><a href="/hot">人氣精選</a></li>
                    <li className="sidebar-text-item"><a href="/new">新品推薦</a></li>
                    <li className="sidebar-text-item"><a href="/co-brand">聯名品牌</a></li>
                    <li className="sidebar-text-item"><a href="/top">上衣襯衫</a></li>
                    <li className="sidebar-text-item"><a href="/bottom">各式褲類</a></li>
                    <li className="sidebar-text-item"><a href="/dress">洋裝裙子</a></li>
                    <li className="sidebar-text-item"><a href="/inner">居家內著</a></li>
                    <li className="sidebar-text-item"><a href="/acc">配件吊飾</a></li>
                    <li className="sidebar-text-item"><a href="/warm-fit">保暖衣著</a></li>
                </ul>
            </div>
                <Footer />
            </div>
        )
    }
}

// 分類頁面

export default Sidebar;