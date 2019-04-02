import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import '../styles/Searchbar.css'

class Searchbar extends Component {

    constructor() {
        super();
        this.state = {
            data: "",
            searchbar_value: ""
        }
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/RESTful_API/spanish/word/agua')
        .then(response => response.json())
        .then(data =>  this.setState({ data }))
        
        alert(JSON.stringify(fetch('http://localhost:8080/RESTful_API/spanish/word/agua')
        .then(response => response.json())))
    }

    handleInput(event) {
        this.setState({searchbar_value: event.target.value})
        if(event.key === 'Enter') {
            //alert("Hello World")
            alert(this.state.searchbar_value)
        } 
    }

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