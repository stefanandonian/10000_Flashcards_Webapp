import React, { Component } from 'react';

import '../styles/app.css';

import Definitions from '../components/Definitions.js';
import Connections from '../components/Connections';
import Conjugations from '../components/Conjugations';
import Searchbar from '../components/Searchbar.js';
import Picture from '../components/Picture.js';
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
          <Picture word={this.props.match.params.palabra}/>
          <div className="component">
            <span> 
              <Definitions  word={ this.props.match.params.palabra}/> 
              <Connections  word={ this.props.match.params.palabra}/>
              <Conjugations word={ this.props.match.params.palabra}/>
            </span>
          </div>
      </div>
    );
  } 
}

export default Flashcard;
