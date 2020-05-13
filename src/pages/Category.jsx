import React from 'react';
import axios from 'commons/axios';
import { render } from '@testing-library/react';

class Category extends React.Component {
    state = {
        category: [],
    };

    componentDidMount() {
        axios.get('/category').then(response => {
            console.log(response.data);
            this.setState({
                category: response.data
            });
        });
    }
}

render() {
    const { new } = this.state;
    return (
        <div className="category">
            <div className="columns list">
                { this.state.category.map(p => {
                    return(
                        <div className="column list is-3" key={c.id} >
                            <New new={c} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Category; 