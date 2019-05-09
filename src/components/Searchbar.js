import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import '../styles/Searchbar.css'

class Searchbar extends Component {

    constructor() {
        super();
        this.state = {
            searchbar_value: ""
        }
        //this.handleInput = this.handleInput.bind(this);
    }

    // handleInput(event) {
    //     this.setState({searchbar_value: event.target.value})
    //     if(event.key === 'Enter') {
    //         fetch('http://localhost:8080/RESTful_API/spanish/word/' + this.state.searchbar_value)
    //         .then(response => { return response.json() })
    //         .then(data => {
    //             alert(JSON.stringify(data))
    //         })
    //     } 
    // }

    render() {

        return (
            <div>
                <span className="p-float-label">
                   <InputText className="searchbar-header" id="float-input" onKeyPress={(e) => this.handleInput(e)} />
                    <label htmlFor="float-input">Type a word! I'll Translate it!</label>
                </span>
            </div>
        );
    }
}

export default Searchbar;