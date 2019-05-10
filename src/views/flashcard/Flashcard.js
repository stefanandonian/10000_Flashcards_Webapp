import React, { Component } from 'react';
import './Flashcard.css';
import Definitions from '../../components/Definitions.js';
import Searchbar from '../../components/searchbar/Searchbar.js';

class Flashcard extends Component {

  constructor(props) {
    super(props);

    this.state = {
        word_attributes: ""
    }
  }

  render() {
    return (
      <div className="flashcard-base">
          <div className="component">
            <Searchbar />
          </div>
          <img className="flashcard-image" src={require("../../resources/img/test-image.jpg")} alt="Beautiful Nature Dummy" /> 
          <div className="component">
            <Definitions word={ this.props.match.params.palabra } />
          </div>
      </div>
    );
  }
}

export default Flashcard;
