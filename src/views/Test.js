import React, {Component} from 'react';
import '../styles/app.css';

import '../styles/test.css';
import { withRouter } from 'react-router-dom';

class Searchbar extends Component {
    constructor() {
        super();
        
        this.state = {
            strSearch: "",
            answer: {},
            largeImageURL: ""
        }

        this.handleSubmit_Go = this.handleSubmit_Go.bind(this);
        this.handleSubmit_Random = this.handleSubmit_Random.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.go = this.go.bind(this);
    }

    go = () => {
        const goUrl = "/word/" + this.state.strSearch;
        this.props.history.push(goUrl)
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
        if(this.state.strSearch !== '') {
            this.go()
        }
    }

    handleSubmit_Random = () => {
        alert("Feelin' Lucky");        
    }

    render() {
        return (
            <div className="searchbar-container">
                <input className="search-item"
                 placeholder="Search a Spanish word..."
                 ref={ input => this.search = input }
                 onKeyPress={ (event) => this.handleKeyPress(event) }
                 onChange={ this.handleChange }/>
                <button className="search-item particular" 
                        onClick={ () => this.handleSubmit_Go() }>
                    Go
                </button>
                <button className="search-item random" 
                        onClick={ () => this.handleSubmit_Random() }>
                    Feelin' Lucky
                </button>
            </div>
        );
    }
}

export default withRouter(Searchbar);