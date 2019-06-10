import React, { Component } from './node_modules/react';
import Definitions from './draggable-grid/Definitions.js';
import Connections from './draggable-grid/Connections';
import Conjugations from './draggable-grid/Conjugations';

class DraggableGrid extends Component {

  render () {
    return (
      <div className="grid-container"> 
        <Definitions  word={ this.props.word }/> 
        <Connections  word={ this.props.match.word }/>
        <Conjugations word={ this.props.match.word }/>
      </div>
    );  
  }
}

export default DraggableGrid;