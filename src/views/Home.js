import React, { Component } from 'react';
import '../styles/Home.css';
import Searchbar2 from '../components/Searchbar2/Searchbar2.js';

class Home extends Component {
  
  render() {
    return (
      <div className="App">
          <body className="App-header">
              <h1> Learn a Word! </h1>
              <Searchbar2 />
          </body>
      </div>
    );
  }
}

export default Home;