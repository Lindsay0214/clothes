import React from 'react';
import { Link } from 'react-router-dom';

class Logo extends React.Component {
    render() {
        return (
            <div className="logo">
                <Link to="/">
                    <img alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTau8bb_RWf-wFk851juGIF3_1W8ZMq4JE5K8GO9If3wq-K4yy8&usqp=CAU" style={{ width:"50px" }}></img>
                </Link>
            </div>
        )
    }
}

export default Logo;