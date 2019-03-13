import React, { Component } from 'react';
import './App.css';
import Searchbar from './Searchbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="App-header">
          <h3 className="Search-header">
            Type a word! I'll translate it!
          </h3>
          <Searchbar />
        </body>
      </div>
    );
  }
}

export default App;
