import React, { Component } from 'react';
import './App.css';

class Searchbar extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: ""
        }

        this.updateSearchBarValue = this.updateSearchBarValue.bind(this);
    }

    render() {
        return (
            <input type="text" className="Search-bar" placeholder="Search..." onChange={this.updateSearchBarValue}/>
        );
    }

    updateSearchBarValue(event) {
        this.setState({
            inputValue: event.target.inputValue
        });        
    }

}



export default Searchbar;