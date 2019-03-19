import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import '../styles/Searchbar.css'

class Searchbar extends Component {

    constructor() {
        super();
        this.state = {
            searchbar_value: ""
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(e) {
        this.setState = {
            searchbar_value: e.target.value
        }
        alert(this.searchbar_value);
    }

    render() {
        return (
            <div>
                <div>
                    <span className="p-float-label">
                       <InputText className="searchbar-header" id="float-input" onChange={this.handleInput} />
                        <label htmlFor="float-input">Type a word! I'll Translate it!</label>
                    </span>
                </div>
            </div>
        );
    }
}

export default Searchbar;