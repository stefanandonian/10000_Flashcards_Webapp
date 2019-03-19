import React, { Component } from 'react';
import '../styles/App.css';
import Searchbar from './Searchbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body className="App-header">
          <Searchbar />
        </body>
      </div>
    );
  }
}

export default App;
