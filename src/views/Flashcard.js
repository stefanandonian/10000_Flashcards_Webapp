import React, { Component } from 'react';

import '../styles/app.css';
import '../styles/flashcard.css';

import Searchbar from '../components/Searchbar.js';
import Picture from '../components/Picture.js';

class Flashcard extends Component { 

  render() {
    return (
      <div className="flashcard-container">
          <Searchbar />
          <Picture word={this.props.match.params.palabra}/>
          {/* <DraggableGrid word={this.props.match.params.palabra} /> */}
      </div>
    );
  } 
}

export default Flashcard;
