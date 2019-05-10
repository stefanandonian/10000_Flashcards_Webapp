import React, { Component } from 'react';
import '../styles/Home.css';
import Searchbar from '../components/searchbar/Searchbar.js';

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