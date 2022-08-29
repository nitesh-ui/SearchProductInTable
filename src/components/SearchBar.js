import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange = (e) => {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange = (e) => {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
        return (
            <form className="d-flex justify-content-between my-3 me-3" role="search">
                <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange}/>
                <p><input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockChange}/> {' '} Only Show products in stock</p>           
            </form>
        );
    }
}

export default SearchBar