import React from 'react';
    
class Search extends React.Component {

    state = {
        searchText:''
    };        //給搜尋欄值

    handleChange = e => {
        const value = e.target.value;
        this.setState({
            searchText: value
        });
        this.props.search(value);
    };        

    clearSearchText = () => {
        this.setState({
            searchText:''
        });
        this.props.search('');
    };          //清除搜尋欄

    render() {
        return (
            <div className="search-box">
                    <div className="field has-addons">
                        <div className="control">
                            <input 
                                type="text"
                                className="input search-input"
                                placeholder="Search"
                                value={this.state.searchText}
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className="control">
                            <button className="button" onClick={this.clearSearchText}>
                                X
                            </button>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Search;