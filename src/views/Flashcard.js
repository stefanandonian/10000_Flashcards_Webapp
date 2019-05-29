import React, { Component } from 'react';

import '../styles/app.css';

import Definitions from '../components/Definitions.js';
import Conjugations from '../components/Conjugations.js';
import Connections from '../components/Relations';
import Searchbar from '../components/Searchbar.js';
import Relations from '../components/Relations';

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
          <img className="picture" src={require("../resources/img/test-image.jpg")} alt="Beautiful Nature Dummy" /> 
          <div className="component">
            <Definitions word={ this.props.match.params.palabra } />
          </div>
          <div className="component">
            <Conjugations />
          </div>
          <div className="component">
            <Relations />
          </div>
      </div>
    );
  } 
}

export default Flashcard;
