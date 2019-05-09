import React, {Component} from 'react';
import './Searchbar2.css';
import { withRouter } from 'react-router-dom';

class Searchbar2 extends Component {

    constructor() {
        super();
        this.state = {
            strSearch: ""
        }
        //this.handleInput = this.handleInput.bind(this);
        this.handleSubmit_Go = this.handleSubmit_Go.bind(this);
        this.handleSubmit_Random = this.handleSubmit_Random.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.go = this.go.bind(this);
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

    go = () => {
        alert(this.state.strSearch)
    }

    handleChange = () => {
        this.setState({
            strSearch: this.search.value
        })
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            this.go()
        }
    }

    handleSubmit_Go = () => {
        this.go()
    }

    handleSubmit_Random = () => {
        alert("Feelin' Lucky");        
    }

    render() {

        return (
            <div className="search" >
                <input 
                 placeholder="Search..."
                 ref={input => this.search = input}
                 onKeyPress={ (event) => this.handleKeyPress(event) }
                 onChange={ this.handleChange }/>
                <button id="particular" onClick={ () => this.handleSubmit_Go() }>Go</button>
                <button id="random" onClick={ () => this.handleSubmit_Random() }>Feelin' Lucky</button>
            </div>
        );
    }
}

export default withRouter(Searchbar2);