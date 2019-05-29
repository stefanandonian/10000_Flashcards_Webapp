import React, { Component } from 'react';

import '../styles/app.css';
import Searchbar from '../components/Searchbar.js';

class Home extends Component {
  
  render() {
    return (
      <div className="App">
          <body className="App-header">
              <h1 id="home_title"> Learn a Word! </h1>
              <Searchbar />
          </body>
      </div>
    );
  }
}

export default Home;