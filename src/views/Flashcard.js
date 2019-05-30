import React, { Component } from 'react';

import '../styles/app.css';

import Definitions from '../components/Definitions.js';
import Connections from '../components/Connections';
import Searchbar from '../components/Searchbar.js';

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
          <img className="picture"  src={require("../resources/img/test-image.jpg")} alt="Beautiful Nature Dummy"/> 
          <div className="component">
            <span> <Definitions word={ this.props.match.params.palabra } /> <Connections word={ this.props.match.params.palabra }/> </span>
          </div>
      </div>
    );
  } 
}

export default Flashcard;
