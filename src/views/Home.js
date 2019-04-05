import React, { Component } from 'react';
import '../styles/Home.css';
import Searchbar from '../components/Searchbar.js';

class Home extends Component {
  
  render() {
    return (
      <div className="App">
        <body className="App-header">
            <h1> Hello World </h1>
          <Searchbar />
        </body>
      </div>
    );
  }
}

export default Home;