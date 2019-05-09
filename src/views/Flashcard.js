import React, { Component } from 'react';
import '../styles/Flashcard.css';
import Definitions from '../components/Definitions.js';

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
          <img className="flashcard-image" src={require("../resources/img/test-image.jpg")} alt="Beautiful Nature Dummy" /> 
          <Definitions word={ this.props.match.params.palabra } />
      </div>
    );
  }
}

export default Flashcard;
